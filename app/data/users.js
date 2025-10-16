
// Initial dummy user data
export const users = [
    {
        id: 1,
        email: 'john.doe@example.com',
        password: 'password123', // In production, this would be hashed
        firstName: 'John',
        lastName: 'Doe',
        phone: '+1 (555) 123-4567',
        address: {
            street: '123 Main Street',
            apartment: 'Apt 4B',
            city: 'New York',
            state: 'NY',
            zipCode: '10001',
            country: 'United States'
        },
        createdAt: '2024-01-15T10:30:00Z',
        lastLogin: '2025-10-11T14:22:00Z',
        isActive: true,
        avatar: null,
        preferences: {
            newsletter: true,
            notifications: true,
            theme: 'light'
        }
    },
    {
        id: 2,
        email: 'sarah.miller@example.com',
        password: 'password123',
        firstName: 'Sarah',
        lastName: 'Miller',
        phone: '+1 (555) 234-5678',
        address: {
            street: '456 Oak Avenue',
            apartment: '',
            city: 'Los Angeles',
            state: 'CA',
            zipCode: '90001',
            country: 'United States'
        },
        createdAt: '2024-02-20T08:15:00Z',
        lastLogin: '2025-10-10T09:45:00Z',
        isActive: true,
        avatar: null,
        preferences: {
            newsletter: false,
            notifications: true,
            theme: 'dark'
        }
    },
    {
        id: 3,
        email: 'mike.johnson@example.com',
        password: 'password123',
        firstName: 'Mike',
        lastName: 'Johnson',
        phone: '+1 (555) 345-6789',
        address: {
            street: '789 Pine Road',
            apartment: 'Unit 12',
            city: 'Chicago',
            state: 'IL',
            zipCode: '60601',
            country: 'United States'
        },
        createdAt: '2024-03-10T16:45:00Z',
        lastLogin: '2025-10-09T18:30:00Z',
        isActive: true,
        avatar: null,
        preferences: {
            newsletter: true,
            notifications: false,
            theme: 'light'
        }
    },
    {
        id: 4,
        email: 'emily.wilson@example.com',
        password: 'password123',
        firstName: 'Emily',
        lastName: 'Wilson',
        phone: '+1 (555) 456-7890',
        address: {
            street: '321 Elm Street',
            apartment: '',
            city: 'Houston',
            state: 'TX',
            zipCode: '77001',
            country: 'United States'
        },
        createdAt: '2024-04-05T12:20:00Z',
        lastLogin: '2025-10-08T11:15:00Z',
        isActive: true,
        avatar: null,
        preferences: {
            newsletter: true,
            notifications: true,
            theme: 'light'
        }
    },
    {
        id: 5,
        email: 'david.brown@example.com',
        password: 'password123',
        firstName: 'David',
        lastName: 'Brown',
        phone: '+1 (555) 567-8901',
        address: {
            street: '654 Maple Drive',
            apartment: 'Suite 200',
            city: 'Phoenix',
            state: 'AZ',
            zipCode: '85001',
            country: 'United States'
        },
        createdAt: '2024-05-18T09:30:00Z',
        lastLogin: '2025-10-07T15:20:00Z',
        isActive: false,
        avatar: null,
        preferences: {
            newsletter: false,
            notifications: false,
            theme: 'dark'
        }
    },
    {
        id: 6,
        email: 'test@example.com',
        password: 'password123',
        firstName: 'Test',
        lastName: 'User',
        phone: '+1 (555) 000-0000',
        address: {
            street: '100 Test Street',
            apartment: '',
            city: 'Test City',
            state: 'TC',
            zipCode: '00000',
            country: 'United States'
        },
        createdAt: '2024-01-01T00:00:00Z',
        lastLogin: '2025-10-12T08:00:00Z',
        isActive: true,
        avatar: null,
        preferences: {
            newsletter: true,
            notifications: true,
            theme: 'light'
        }
    },
    {
        id: 7,
        email: 'jessica.taylor@example.com',
        password: 'password123',
        firstName: 'Jessica',
        lastName: 'Taylor',
        phone: '+1 (555) 678-9012',
        address: {
            street: '987 Cedar Lane',
            apartment: 'Apt 5C',
            city: 'Philadelphia',
            state: 'PA',
            zipCode: '19101',
            country: 'United States'
        },
        createdAt: '2024-06-22T14:10:00Z',
        lastLogin: '2025-10-06T10:30:00Z',
        isActive: true,
        avatar: null,
        preferences: {
            newsletter: true,
            notifications: true,
            theme: 'dark'
        }
    },
    {
        id: 8,
        email: 'robert.anderson@example.com',
        password: 'password123',
        firstName: 'Robert',
        lastName: 'Anderson',
        phone: '+1 (555) 789-0123',
        address: {
            street: '246 Birch Street',
            apartment: '',
            city: 'San Antonio',
            state: 'TX',
            zipCode: '78201',
            country: 'United States'
        },
        createdAt: '2024-07-30T11:25:00Z',
        lastLogin: '2025-10-05T16:45:00Z',
        isActive: true,
        avatar: null,
        preferences: {
            newsletter: false,
            notifications: true,
            theme: 'light'
        }
    },
    {
        id: 9,
        email: 'amanda.martinez@example.com',
        password: 'password123',
        firstName: 'Amanda',
        lastName: 'Martinez',
        phone: '+1 (555) 890-1234',
        address: {
            street: '135 Willow Court',
            apartment: 'Unit 8',
            city: 'San Diego',
            state: 'CA',
            zipCode: '92101',
            country: 'United States'
        },
        createdAt: '2024-08-14T15:40:00Z',
        lastLogin: '2025-10-04T12:00:00Z',
        isActive: true,
        avatar: null,
        preferences: {
            newsletter: true,
            notifications: false,
            theme: 'light'
        }
    },
    {
        id: 10,
        email: 'chris.thomas@example.com',
        password: 'password123',
        firstName: 'Chris',
        lastName: 'Thomas',
        phone: '+1 (555) 901-2345',
        address: {
            street: '579 Spruce Avenue',
            apartment: '',
            city: 'Dallas',
            state: 'TX',
            zipCode: '75201',
            country: 'United States'
        },
        createdAt: '2024-09-08T13:55:00Z',
        lastLogin: '2025-10-03T09:10:00Z',
        isActive: true,
        avatar: null,
        preferences: {
            newsletter: true,
            notifications: true,
            theme: 'dark'
        }
    }
];

// Helper function to get user by ID
export const getUserById = (id) => {
    return users.find(u => u.id === parseInt(id));
};

// Helper function to get user by email
export const getUserByEmail = (email) => {
    return users.find(u => u.email === email);
};

// Helper function to authenticate user
export const authenticateUser = (email, password) => {
    const user = getUserByEmail(email);
    if (user && user.password === password) {
        // Return user without password
        const { password: _, ...userWithoutPassword } = user;
        return userWithoutPassword;
    }
    return null;
};

// Helper function to get active users
export const getActiveUsers = () => {
    return users.filter(u => u.isActive);
};