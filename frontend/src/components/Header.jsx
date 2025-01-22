import wappLogo from "../images/contact-icon.svg";
import NavBar from "./Navbar";

function Header() {
  return (
    <header className="header">
      <a
        className="header__contact"
        href="https://wa.link/ccwpk7"
        target="_blank"
      >
        <p className="header__contact-info">
          Hacemos envíos a cualquier parte del país
        </p>
        <img
          className="header__contact-image"
          src={wappLogo}
          alt="Icono de whatsapp"
        />
        <p className="header__contact-number">+593 994 69 85 25</p>
      </a>
      <NavBar></NavBar>
    </header>
  );
}

export default Header;
