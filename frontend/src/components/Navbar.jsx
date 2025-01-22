// import { useContext } from "react";
import { NavLink } from "react-router-dom";
import homeIcon from "../images/home-icon.svg";
import aboutUsIcon from "../images/aboutUs-icon.svg";
import locationIcon from "../images/location-icon.svg";
import productsIcon from "../images/products-icon.svg";
import brandsIcon from "../images/catalog-icon.svg";
import Logo from "../images/logo-header.jpg";
// import "./styles/NavBar.css";
// import { removeToken } from "../utils/token";
// import AppContext from "../context/AppContext";

function NavBar() {
  // Invocar el hook.
  //   const navigate = useNavigate();
  //   const { setIsLoggedIn } = useContext(AppContext);

  // La función signOut elimina el token del almacenamiento
  // local, los envía de vuelta a la página de inicio de sesión, y
  // establece isLoggedIn como falso.
  //   function signOut() {
  //     removeToken();
  //     navigate("/login");
  //     setIsLoggedIn(false);
  //   }

  return (
    <div className="navbar">
      <img className="navbar__logo" src={Logo} alt="Logo Penapaz Ltda" />
      <ul className="navbar__nav">
        <li className="navbar__item">
          <a href="#" className="navbar__link">
            <img className="navbar__icon" src={homeIcon} alt="Icono de incio" />
            Inicio
          </a>
        </li>
        <li className="navbar__item">
          <a href="#somos" className="navbar__link">
            <img
              className="navbar__icon"
              src={aboutUsIcon}
              alt="Icono de somos"
            />
            Somos
          </a>
        </li>
        <li className="navbar__item">
          <a href="#agencias" className="navbar__link">
            <img
              className="navbar__icon"
              src={locationIcon}
              alt="Icono de puntos de venta"
            />
            Puntos de venta
          </a>
        </li>
        <li className="navbar__item">
          <a href="#productos" className="navbar__link">
            <img
              className="navbar__icon"
              src={productsIcon}
              alt="Icono de productos"
            />
            Productos
          </a>
        </li>
        <li className="navbar__item">
          <a href="#marcas" className="navbar__link">
            <img
              className="navbar__icon"
              src={brandsIcon}
              alt="Icono de marcas"
            />
            Marcas
          </a>
        </li>
        {/* <li>
          <button onClick={signOut} className="navbar__link navbar__button">
            Cerrar sesión
          </button>
        </li> */}
      </ul>
    </div>
    // <div className="navbar">
    //   <img className="navbar__logo" src={Logo} alt="Logo Penapaz Ltda" />
    //   <ul className="navbar__nav">
    //     <li className="navbar__item">
    //       <NavLink to="/inicio" className="navbar__link">
    //         <img className="navbar__icon" src={homeIcon} alt="Icono de incio" />
    //         Inicio
    //       </NavLink>
    //     </li>
    //     <li className="navbar__item">
    //       <NavLink to="/somos" className="navbar__link">
    //         <img
    //           className="navbar__icon"
    //           src={aboutUsIcon}
    //           alt="Icono de somos"
    //         />
    //         Somos
    //       </NavLink>
    //     </li>
    //     <li className="navbar__item">
    //       <NavLink to="/agencias" className="navbar__link">
    //         <img
    //           className="navbar__icon"
    //           src={locationIcon}
    //           alt="Icono de puntos de venta"
    //         />
    //         Puntos de venta
    //       </NavLink>
    //     </li>
    //     <li className="navbar__item">
    //       <NavLink to="/productos" className="navbar__link">
    //         <img
    //           className="navbar__icon"
    //           src={productsIcon}
    //           alt="Icono de productos"
    //         />
    //         Productos
    //       </NavLink>
    //     </li>
    //     <li className="navbar__item">
    //       <NavLink to="/login" className="navbar__link">
    //         <img
    //           className="navbar__icon"
    //           src={catalogIcon}
    //           alt="Icono de catálogo"
    //         />
    //         Catálogo
    //       </NavLink>
    //     </li>
    //     {/* <li>
    //       <button onClick={signOut} className="navbar__link navbar__button">
    //         Cerrar sesión
    //       </button>
    //     </li> */}
    //   </ul>
    // </div>
  );
}

export default NavBar;
