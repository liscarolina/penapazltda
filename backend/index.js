const express = require("express");
const mongoose = require("mongoose");
const userRoutes = require("./routes/user");
const cors = require("cors");
const { errors } = require("celebrate");
const { requestLogger, errorLogger } = require("./middlewares/logger");
const app = express();
const { PORT = 3000 } = process.env;

const corsOptions = {
  origin: [
    "http://localhost:3000",
    "http://localhost:3001",
    "http://localhost:5173",
    "https://penapaz.com",
    "https://www.penapaz.com",
  ],
};
app.use(cors(corsOptions));
app.listen(PORT, () => {});

mongoose.connect("mongodb://localhost:27017/penapazltda");

// Revisar: Esta base es nueva. le acabo de poner nombre

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(requestLogger);
app.use(userRoutes);

app.all("*", (req, res) => {
  res.status(404).send({
    message: "Recurso solicitado no encontrado prueba1",
  });
});

app.use(errorLogger);
app.use(errors());

app.use((err, req, res, next) => {
  const { statusCode = 500, message } = err;
  res.status(statusCode).send({
    err,
    error: message,
    message:
      statusCode === 500 ? "Se ha producido un error en el servidor" : message,
  });
});
