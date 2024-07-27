const MEMBER = require("../models/customer.model");

async function index(req, res) {
	try {
		const result = await CUSTOMER.index();
		res.json(result.rows);
	} catch (err) {
		throw new Error(err);
	}
}

module.exports = {
	index
};