import ProductList from "./ProductList";
import closeIcon from "../images/popup-close-icon.svg";

function ProductPopup({ isOpen, id, onClose, title, items }) {
  return (
    <div className={`popup ${isOpen ? "popup_opened" : ""}`} id={id}>
      <div className="popup__container popup__container-window">
        <img
          className="popup__icon popup__icon_type_close"
          src={closeIcon}
          alt="Cerrar"
          id="window-close-button"
          onClick={onClose}
        />
        <ul className="popup__title">{title}</ul>
        {items.map((item, index) => {
          return <ProductList key={index}>{item}</ProductList>;
        })}
      </div>
    </div>
  );
}

export default ProductPopup;
