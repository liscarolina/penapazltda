const User = require("../models/user");
import { ExistingUserError } from "../middlewares/errors/existingUserError";

const createUser = (req, res, next) => {
  const { name, lastname, telef, email } = req.body;
  return User.findUserByCredentials(email)
    .then((user) => {
      if (!user) {
        User.create({ name, lastname, telef, email });
      }
      if (user) {
        throw new ExistingUserError("Ya estás registrado");
      }
      res.send(user);
    })
    .catch(next);
};

module.exports = {
  createUser,
};
