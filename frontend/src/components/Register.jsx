import { Link } from "react-router-dom";
import { useState } from "react";
import Logo from "../images/logo-header.jpg";

const Register = ({ onRegister, children }) => {
  const [data, setData] = useState({
    name: "",
    lastname: "",
    email: "",
    telef: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onRegister(data).catch(() => {});
  };

  return (
    <>
      {children}
      <div className="register">
        <div className="register__header">
          <img className="register__logo" src={Logo} />
        </div>
        <div className="register__container">
          <h1 className="register__welcome">Regístrate</h1>
          <form
            className="register__form"
            autoComplete="off"
            onSubmit={handleSubmit}
          >
            <input
              className="register__input"
              placeholder="Correo electrónico"
              id="email"
              name="email"
              type="email"
              value={data.email}
              onChange={handleChange}
              required
              minLength="2"
              maxLength="40"
            />
            <input
              className="register__input"
              placeholder="Nombre"
              id="nombre"
              name="nombre"
              type="text"
              value={data.name}
              onChange={handleChange}
              required
              minLength="2"
              maxLength="40"
            />

            <input
              className="register__input"
              placeholder="Apellido"
              id="apellido"
              name="apellido"
              type="text"
              value={data.lastname}
              onChange={handleChange}
              required
              minLength="2"
              maxLength="40"
            />

            <input
              className="register__input"
              placeholder="Número de teléfono móvil"
              id="telef"
              name="telef"
              type="text"
              value={data.telefono}
              onChange={handleChange}
              required
              minLength="10"
              maxLength="10"
            />

            <button type="submit" className="register__button">
              Regístrate
            </button>
          </form>
          <div className="register__signin">
            <Link to="/" className="register__login-link">
              Regresar
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
