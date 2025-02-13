import popupCloseIcon from "../images/popup-close-icon.svg";

function InfoTooltip({ isOpen, id, onClose, title, img, alt }) {
  return (
    <div className={`popup ${isOpen ? "popup_opened" : ""}`} id={id}>
      <div className="popup__container">
        <img
          className="popup__icon"
          src={popupCloseIcon}
          alt="Cerrar"
          onClick={onClose}
        />

        <img className="popup__image" src={img} alt={alt} />
        <h2 className="popup__title-info">{title}</h2>
      </div>
    </div>
  );
}

export default InfoTooltip;
