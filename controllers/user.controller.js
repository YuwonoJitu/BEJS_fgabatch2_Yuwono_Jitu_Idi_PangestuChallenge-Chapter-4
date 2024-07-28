const USER_MODEL = require('../models/user.model');

    async function getUser (req, res) {
        try {
            const user = await USER_MODEL.getUser();
            res.status(200).json({
                status: 'success',
                message: 'User retrieved successfully',
                data: user
            });
            
        } catch (error) {
            res.status(500).json({ 
                status: 'error',
                message: 'failed to retrieve users'
            });
        } 
    };


async function getUserById (req, res) {
    try {
        const user = await USER_MODEL.getUserById(req.params.id);
        if (user) {
            res.status(200).json({
            status: 'success',
            message: 'User retrieved successfully',
            data: user
        });
        } else {
            res.status(404).json({
                status: 'error',
                message: 'User not found'
            });
        }
    } catch (error) {
        res.status(500).json({
            status: 'error',
            message: 'failed to retrieve user'
        });
    }
};


async function createUser(req, res) {
    try {
        const {id, name, email, password} = req.body;
        if (!id || !name || !email || !password) {
            res.status(400).json({
                status: 'error',
                message: 'invalid input'
            });
        }else {
            const user = await USER_MODEL.createUser(id, name, email, password);
            res.status(201).json({
                status: 'success',
                message: 'User created successfully',
                data: user
            });
        }
               
    }catch (error) {
        res.status(500).json({
            status: 'error',
            message: 'failed to create user'
        });
    }
};


module.exports = { 
    createUser,
    getUser,
    getUserById };