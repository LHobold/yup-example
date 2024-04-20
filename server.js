const express = require("express");
const userRouter = require("./routes/userRoutes");
const errorController = require("./controllers/errorController");

require("dotenv").config();

const app = express();
const port = 3000;

app.use(express.json());

app.use("/users", userRouter);
app.use(errorController);

app.listen(port, () => {
	console.log(`Server is running on port ${port}`);
});

module.exports = app;
