const User = require("../models/user");
const {
  ExistingUserError,
} = require("../middlewares/errors/existingUserError");

const createUser = (req, res, next) => {
  const { name, lastname, telef, email } = req.body;
  return User.findOne({ email })
    .then((user) => {
      if (!user) {
        User.create({ name, lastname, telef, email });
        res.send({ status: true });
      }
      if (user) {
        throw new ExistingUserError("Ya estás registrado.");
      }
      //res.send(user);
    })
    .catch(next);
};

module.exports = {
  createUser,
};
