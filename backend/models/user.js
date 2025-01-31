const mongoose = require("mongoose");
const validator = require("validator");

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
    validate: {
      validator(v) {
        validator.isEmail(v);
      },
      message: "Debes ingresar un email válido",
    },
  },
  name: {
    type: String,
    minlength: 2,
    maxlength: 40,
    required: true,
  },

  lastname: {
    type: String,
    minlength: 2,
    maxlength: 40,
    required: true,
  },

  telef: {
    type: String,
    required: true,
    minlength: 10,
    maxlength: 10,
    validate: {
      validator: function (v) {
        const regex = /^09\d{8}$/;
        return regex.test(v);
      },
      message:
        "Debes ingresar un número de celular válido. En formato 09X XXX XXXX",
    },
  },
});

module.exports = mongoose.model("user", userSchema);
