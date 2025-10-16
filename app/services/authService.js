// app/services/authService.js
import { users as initialUsers } from '../data/users';

/**
 * Authentication Service
 * This service handles user authentication using the dummy user data.
 * It stores users in memory during SSR and in localStorage on the client.
 */

// Helper to check if we're in the browser
const isBrowser = typeof window !== 'undefined';

class AuthService {
    constructor() {
        this.storageKey = 'auth_user';
        this.tokenKey = 'auth_token';
        this.usersKey = 'app_users';

        // Initialize users in localStorage if on client side
        if (isBrowser) {
            this.initializeUsers();
        }
    }

    /**
     * Initialize users in localStorage with dummy data if empty
     */
    initializeUsers() {
        if (!isBrowser) return;

        const existingUsers = localStorage.getItem(this.usersKey);
        if (!existingUsers) {
            localStorage.setItem(this.usersKey, JSON.stringify(initialUsers));
        }
    }

    /**
     * Get all stored users from localStorage
     * @returns {Array} Array of users
     */
    getStoredUsers() {
        if (!isBrowser) return [];

        const usersStr = localStorage.getItem(this.usersKey);
        return usersStr ? JSON.parse(usersStr) : [];
    }

    /**
     * Save users to localStorage
     * @param {Array} users - Array of users to save
     */
    saveUsers(users) {
        if (!isBrowser) return;

        localStorage.setItem(this.usersKey, JSON.stringify(users));
    }

    /**
     * Register a new user
     * @param {Object} userData - User registration data
     * @returns {Promise<Object>} User object and token
     */
    async register(userData) {
        // Simulate API delay
        await this.simulateDelay();

        // Validate data
        if (!userData.email || !userData.password) {
            throw new Error('Email and password are required');
        }

        if (userData.password !== userData.confirmPassword) {
            throw new Error('Passwords do not match');
        }

        // Check if user already exists
        const existingUsers = this.getStoredUsers();
        if (existingUsers.some(u => u.email === userData.email)) {
            throw new Error('User with this email already exists');
        }

        // Create new user
        const newUser = {
            id: Date.now(),
            email: userData.email,
            firstName: userData.firstName,
            lastName: userData.lastName,
            phone: userData.phone || '',
            address: {
                street: '',
                apartment: '',
                city: '',
                state: '',
                zipCode: '',
                country: 'United States'
            },
            createdAt: new Date().toISOString(),
            lastLogin: new Date().toISOString(),
            isActive: true,
            avatar: null,
            preferences: {
                newsletter: userData.newsletter || false,
                notifications: true,
                theme: 'light'
            }
        };

        // Store user with password
        existingUsers.push({
            ...newUser,
            password: userData.password // In real app, password would be hashed on backend
        });
        this.saveUsers(existingUsers);

        // Generate token (placeholder)
        const token = this.generateToken(newUser);

        // Store auth data
        this.setAuthData(newUser, token);

        return { user: newUser, token };
    }

    /**
     * Login user
     * @param {string} email 
     * @param {string} password 
     * @returns {Promise<Object>} User object and token
     */
    async login(email, password) {
        // Simulate API delay
        await this.simulateDelay();

        // Validate credentials
        const users = this.getStoredUsers();
        const user = users.find(u => u.email === email && u.password === password);

        if (!user) {
            throw new Error('Invalid email or password');
        }

        // Check if user is active
        if (!user.isActive) {
            throw new Error('Account is inactive. Please contact support.');
        }

        // Update last login
        user.lastLogin = new Date().toISOString();
        this.saveUsers(users);

        // Remove password from user object
        const { password: _, ...userWithoutPassword } = user;

        // Generate token
        const token = this.generateToken(userWithoutPassword);

        // Store auth data
        this.setAuthData(userWithoutPassword, token);

        return { user: userWithoutPassword, token };
    }

    /**
     * Logout user
     */
    logout() {
        if (!isBrowser) return;

        localStorage.removeItem(this.storageKey);
        localStorage.removeItem(this.tokenKey);
    }

    /**
     * Get current authenticated user
     * @returns {Object|null} User object or null
     */
    getCurrentUser() {
        if (!isBrowser) return null;

        const userStr = localStorage.getItem(this.storageKey);
        if (!userStr) return null;

        try {
            return JSON.parse(userStr);
        } catch {
            return null;
        }
    }

    /**
     * Check if user is authenticated
     * @returns {boolean}
     */
    isAuthenticated() {
        return !!this.getCurrentUser() && !!this.getToken();
    }

    /**
     * Get authentication token
     * @returns {string|null}
     */
    getToken() {
        if (!isBrowser) return null;

        return localStorage.getItem(this.tokenKey);
    }

    /**
     * Update user profile
     * @param {Object} updates 
     * @returns {Promise<Object>}
     */
    async updateProfile(updates) {
        await this.simulateDelay();

        const currentUser = this.getCurrentUser();
        if (!currentUser) {
            throw new Error('User not authenticated');
        }

        // Get all users and update the current user
        const users = this.getStoredUsers();
        const userIndex = users.findIndex(u => u.id === currentUser.id);

        if (userIndex === -1) {
            throw new Error('User not found');
        }

        // Update user data (merge updates)
        const updatedUserData = {
            ...users[userIndex],
            ...updates,
            // Preserve certain fields
            id: currentUser.id,
            email: currentUser.email,
            createdAt: currentUser.createdAt,
        };

        users[userIndex] = updatedUserData;
        this.saveUsers(users);

        // Remove password from response
        const { password: _, ...updatedUser } = updatedUserData;

        // Update stored auth data
        this.setAuthData(updatedUser, this.getToken());

        return updatedUser;
    }

    /**
     * Get user by email (for testing/admin purposes)
     * @param {string} email 
     * @returns {Object|null}
     */
    getUserByEmail(email) {
        const users = this.getStoredUsers();
        const user = users.find(u => u.email === email);
        if (!user) return null;

        const { password: _, ...userWithoutPassword } = user;
        return userWithoutPassword;
    }

    /**
     * Reset users to initial dummy data (for testing)
     */
    resetToInitialData() {
        if (!isBrowser) return;

        localStorage.setItem(this.usersKey, JSON.stringify(initialUsers));
    }

    // Helper methods

    setAuthData(user, token) {
        if (!isBrowser) return;

        localStorage.setItem(this.storageKey, JSON.stringify(user));
        localStorage.setItem(this.tokenKey, token);
    }

    generateToken(user) {
        // Placeholder token generation (in real app, token comes from backend)
        return `token_${user.id}_${Date.now()}`;
    }

    async simulateDelay() {
        // Simulate network delay
        return new Promise(resolve => setTimeout(resolve, 500));
    }
}

// Export singleton instance
export const authService = new AuthService();

// Export class for potential multiple instances
export default AuthService;