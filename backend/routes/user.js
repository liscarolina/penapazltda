const userRouter = require("express").Router();
const { celebrate, Joi } = require("celebrate");

const { createUser } = require("../controllers/users");

userRouter.get("/crash-test", () => {
  setTimeout(() => {
    throw new Error("El servidor va a caer");
  }, 0);
});

userRouter.post(
  "/register",
  celebrate({
    body: Joi.object().keys({
      email: Joi.string().required(),
      name: Joi.string().required(),
      lastname: Joi.string().required(),
      telef: Joi.string().required().min(10).max(10),
    }),
  }),
  createUser
);

module.exports = userRouter;
