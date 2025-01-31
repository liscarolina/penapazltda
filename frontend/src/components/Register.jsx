import { Link } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import Logo from "../images/logo-header.jpg";
import FormValidator from "./FormValidator";

const Register = ({ onRegister, children }) => {
  const formRef = useRef();
  useEffect(() => {
    const formValidator = new FormValidator(formRef.current);
    formValidator.enableValidation();
  }, []);

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
            ref={formRef}
            autoComplete="off"
            className="register__form"
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
            <span className="register__error register__error-email"></span>
            <input
              className="register__input"
              placeholder="Nombre"
              id="nombre"
              name="name"
              type="text"
              value={data.name}
              onChange={handleChange}
              required
              minLength="2"
              maxLength="40"
            />
            <span className="register__error register__error-name"></span>
            <input
              className="register__input"
              placeholder="Apellido"
              id="apellido"
              name="lastname"
              type="text"
              value={data.lastname}
              onChange={handleChange}
              required
              minLength="2"
              maxLength="40"
            />
            <span className="register__error register__error-lastname"></span>
            <input
              className="register__input"
              placeholder="Número de teléfono móvil"
              id="telef"
              name="telef"
              type="text"
              value={data.telef}
              onChange={handleChange}
              required
              minLength="10"
              maxLength="10"
            />
            <span className="register__error register__error-telef"></span>
            <button type="submit" className="register__button">
              Obtener 10% de descuento
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
