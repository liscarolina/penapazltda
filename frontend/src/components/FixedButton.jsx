import wappIcon from "../images/wapp-icon.svg";

function FixedButton() {
  return (
    <a className="fixedButton" href="https://wa.link/ccwpk7" target="_blank">
      <img className="fixedButton__icon" src={wappIcon} />
      <p className="fixedButton__text">Escríbenos</p>
    </a>
  );
}

export default FixedButton;
