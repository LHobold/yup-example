const { Router } = require("express");
const validate = require("../middlewares/validateRequest");

const { createUserSchema, getUserSchema } = require("../schemas/userSchemas");

const { createUser, getUser } = require("../controllers/userController");

const userRouter = Router();

userRouter.post("/", validate(createUserSchema), createUser);
userRouter.get("/:id", validate(getUserSchema), getUser);

module.exports = userRouter;
