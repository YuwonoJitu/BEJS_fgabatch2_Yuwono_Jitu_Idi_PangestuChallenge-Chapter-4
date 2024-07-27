const ACCOUNTS = require('../models/accounts.model');

getAllAccount = async (req, res, next) => {
	try {
	  const result = await ACCOUNTS.getAllAccounts();
	  res.status(200).json({
		success: true,
		statusCode: 200,
		message: "All bank accounts fetched successfully",
		data: result,
	  });
	} catch (error) {
	  next(error);
	}
  };

async function index(req, res) {
	try {
		const result = await ACCOUNTS.index();
		res.json(result.rows);
	} catch (err) {
		throw new Error(err);
	}
}

module.exports = {
	index
};



