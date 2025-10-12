// JavaScript source code
// app/services/authService.js

/**
 * Authentication Service
 * This service abstracts authentication logic.
 * Replace the placeholder implementation with actual API calls when backend is ready.
 */

class AuthService {
    constructor() {
        this.storageKey = 'auth_user';
        this.tokenKey = 'auth_token';
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
            createdAt: new Date().toISOString(),
        };

        // Store user (in real implementation, this would be done by backend)
        existingUsers.push({
            ...newUser,
            password: userData.password // In real app, password would be hashed on backend
        });
        localStorage.setItem('users', JSON.stringify(existingUsers));

        // Generate token (placeholder)
        const token = this.generateToken(newUser);

        // Store auth data
        this.setAuthData(newUser, token);

        return { user: newUser, token };

        // API version would be:
        // return fetch('/api/auth/register', {
        //     method: 'POST',
        //     headers: { 'Content-Type': 'application/json' },
        //     body: JSON.stringify(userData)
        // }).then(res => res.json())
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

        // Remove password from user object
        const { password: _, ...userWithoutPassword } = user;

        // Generate token
        const token = this.generateToken(userWithoutPassword);

        // Store auth data
        this.setAuthData(userWithoutPassword, token);

        return { user: userWithoutPassword, token };

        // API version would be:
        // return fetch('/api/auth/login', {
        //     method: 'POST',
        //     headers: { 'Content-Type': 'application/json' },
        //     body: JSON.stringify({ email, password })
        // }).then(res => res.json())
    }

    /**
     * Logout user
     */
    logout() {
        localStorage.removeItem(this.storageKey);
        localStorage.removeItem(this.tokenKey);

        // API version would be:
        // return fetch('/api/auth/logout', {
        //     method: 'POST',
        //     headers: { 'Authorization': `Bearer ${this.getToken()}` }
        // })
    }

    /**
     * Get current authenticated user
     * @returns {Object|null} User object or null
     */
    getCurrentUser() {
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

        const updatedUser = { ...currentUser, ...updates };
        this.setAuthData(updatedUser, this.getToken());

        return updatedUser;

        // API version would be:
        // return fetch('/api/user/profile', {
        //     method: 'PUT',
        //     headers: {
        //         'Content-Type': 'application/json',
        //         'Authorization': `Bearer ${this.getToken()}`
        //     },
        //     body: JSON.stringify(updates)
        // }).then(res => res.json())
    }

    // Helper methods

    getStoredUsers() {
        const usersStr = localStorage.getItem('users');
        return usersStr ? JSON.parse(usersStr) : [];
    }

    setAuthData(user, token) {
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