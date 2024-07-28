const DB = require('../config/db');

const USERS = {
	index: async () => {
		try {
			const result = await DB.query('SELECT * FROM users');
			return result;
		} catch (err) {
			console.error(err.message);
			return err
		}
	}
};

module.exports = USERS;