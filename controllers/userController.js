const UserService = require("../services/UserService");
const userService = new UserService();

/**
 * @param {import('express').Request} req
 * @param {import('express').Response} res
 * @param {import('express').NextFunction} next
 */
exports.createUser = async function (req, res, next) {
	try {
		const response = await userService.createUser({ user: req.body });
		res.json(response.body).status(response.statusCode);
	} catch (error) {
		next(error);
	}
};

/**
 * @param {import('express').Request} req
 * @param {import('express').Response} res
 * @param {import('express').NextFunction} next
 */
exports.getUser = async function (req, res, next) {
	try {
		const response = await userService.getUser({ id: req.params.id });
		res.json(response.body).status(response.statusCode);
	} catch (error) {
		next(error);
	}
};
