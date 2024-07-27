const POOL = require('../config/db');

exports.addUser = async (req, res) => {
    const { name, email, profile } = req.body;

    if (!name || !email) {
        return res.status(400).json({ message: 'Name and email are required' });
    }

    try {
        const query = 'INSERT INTO users (name, email, profile) VALUES ($1, $2, $3) RETURNING *';
        const values = [name, email, profile];
        const result = await POOL.query(query, values);
        const newUser = result.rows[0];
        res.status(201).json({
            message: 'User added successfully',
            user: newUser
        });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Server error' });
    }
};
