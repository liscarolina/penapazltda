import { Link } from "react-router-dom";
import facebok from "../images/facebook-icon.svg";
import wappIcon from "../images/wapp-icon.svg";
import registerIcon from "../images/register-iconr.svg";

function Footer() {
  return (
    <div className="footer">
      <div className="footer__container">
        <div className="footer__locations">
          <h1 className="footer__title">Encuéntranos</h1>
          <div className="footer__location">
            <p className="footer__location-city">Ambato</p>
            <p className="footer__location-place">| Av. El Rey</p>
          </div>
          <div className="footer__location">
            <p className="footer__location-city">Ambato</p>
            <p className="footer__location-place">| Bolivariana</p>
          </div>
          <div className="footer__location">
            <p className="footer__location-city">Riobamba</p>
            <p className="footer__location-place">| Av. La Prensa</p>
          </div>
        </div>
        <div className="footer__contacts">
          <h1 className="footer__title">Contáctanos</h1>

          <a
            className="footer__link footer__link_facebook"
            href="https://www.facebook.com/penapazltda/"
            target="_blank"
          >
            <img
              className="footer__icon footer__icon_facebook"
              src={facebok}
              alt="ícono de facebook"
            />
            Peñapaz Ltda
          </a>
          <a
            className="footer__link footer__link_whatsapp"
            href="https://wa.link/ccwpk7/"
            target="_blank"
          >
            <img
              className="footer__icon footer__icon_whatsapp"
              src={wappIcon}
              alt="ícono de whatsapp"
            />
          </a>
        </div>
        <div className="footer__register">
          <h1 className="footer__title">Regístrate</h1>
          <Link
            className="footer__link footer__link_register"
            to="/register"
            target="_blank"
          >
            <img
              className="footer__icon footer__icon_register"
              src={registerIcon}
            />
            Recibe el 10% de descuento en tu primera compra
          </Link>
        </div>
      </div>
      <p className="footer__copyright">© 2025 Penapaz Ltda.</p>
    </div>
  );
}

export default Footer;
