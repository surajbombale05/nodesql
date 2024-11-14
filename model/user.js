const db = require('./db');

// Function to create a new user
const createUser = (name, email, callback) => {
    const query = 'INSERT INTO user (name, email) VALUES (?, ?)';
    db.query(query, [name, email], (err, results) => {
        if (err) return callback(err);
        callback(null, results.insertId);
    });
};

// Function to get all users
const getUsers = (callback) => {
    const query = 'SELECT * FROM user';
    db.query(query, (err, results) => {
        if (err) return callback(err);
        callback(null, results);
    });
};

// Function to update a user by ID
const updateUser = (id, name, email, callback) => {
    const query = 'UPDATE user SET name = ?, email = ? WHERE id = ?';
    db.query(query, [name, email, id], (err, results) => {
        if (err) return callback(err);
        callback(null, results);
    });
};

// Function to delete a user by ID
const deleteUser = (id, callback) => {
    const query = 'DELETE FROM user WHERE id = ?';
    db.query(query, [id], (err, results) => {
        if (err) return callback(err);
        callback(null, results);
    });
};

module.exports = { createUser, getUsers, updateUser, deleteUser };