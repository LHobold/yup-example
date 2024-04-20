const sendErrorDev = (err, req, res) => {
	console.error(err);

	res.status(err.statusCode).json({
		status: err.status,
		error: err,
		message: err.message,
		...err.extraProps,
		stack: err.stack,
	});
};

/**
 * @param {import('../utils/AppError')} err
 * @param {import('express').Request} req
 * @param {import('express').Response} res
 */
const sendErrorProd = async (err, req, res) => {
	if (err.isOperational) {
		return res.status(err.statusCode).json({
			message: err.message,
			...err.extraProps,
		});
	}

	console.error("REQ", {
		body: req.body,
		params: req.params,
		query: req.query,
	});

	console.error("ERROR", err);

	return res.status(500).json({
		message: "Algo deu errado",
	});
};

module.exports = async (err, req, res, next) => {
	err.statusCode = err.statusCode || 500;

	if (process.env.NODE_ENV === "prod") {
		await sendErrorProd(err, req, res);
	} else {
		sendErrorDev(err, req, res);
	}

	next();
};
