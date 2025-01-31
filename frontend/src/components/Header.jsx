import wappLogo from "../images/contact-icon.svg";
import NavBar from "./Navbar";
import headerLogo from "../images/logo-header.jpg";

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
      <div className="header__contact-mobile">
        <img className="header__contact-logo" src={headerLogo} alt="logo" />
        <a
          className="header__contact-mobile-text"
          href="https://wa.link/ccwpk7"
          target="_blank"
        >
          Hacemos envíos a cualquier parte del país +593 994 69 85 25
        </a>
      </div>
      <NavBar></NavBar>
    </header>
  );
}

export default Header;
