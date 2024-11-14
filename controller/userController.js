const User = require('../model/user');

// Add a new user
const addUser = (req, res) => {
    const { name, email } = req.body;
    User.createUser(name, email, (err, userId) => {
        if (err) {
            console.error('Error adding user:', err);
            return res.status(500).send('Server error');
        }
        res.status(201).send({ message: 'User added', userId });
    });
};

// Get all users
const getUsers = (req, res) => {
    User.getUsers((err, results) => {
        if (err) {
            console.error('Error fetching users:', err);
            return res.status(500).send('Server error');
        }
        res.send(results);
    });
};

// Update a user by ID
const updateUser = (req, res) => {
    const { id } = req.params;
    const { name, email } = req.body;
    User.updateUser(id, name, email, (err) => {
        if (err) {
            console.error('Error updating user:', err);
            return res.status(500).send('Server error');
        }
        res.send({ message: 'User updated' });
    });
};

// Delete a user by ID
const deleteUser = (req, res) => {
    const { id } = req.params;
    User.deleteUser(id, (err) => {
        if (err) {
            console.error('Error deleting user:', err);
            return res.status(500).send('Server error');
        }
        res.send({ message: 'User deleted' });
    });
};

module.exports = { addUser, getUsers, updateUser, deleteUser };
