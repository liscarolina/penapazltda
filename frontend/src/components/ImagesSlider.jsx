import maseiro from "../images/brands/masiero.jpg";
import exedy from "../images/brands/exedy.jpg";
import npr from "../images/brands/npr.jpg";
import eaton from "../images/brands/eaton.jpg";
import garret from "../images/brands/garret.jpg";
import samgong from "../images/brands/samgong.jpg";
import hino from "../images/brands/hino.jpg";
import izusu from "../images/brands/izusu.jpg";
import daido from "../images/brands/daido.jpg";
import sexel from "../images/brands/sexel.jpg";

function ImagesSlider() {
  return (
    <div className="slider">
      <h1 className="slider__title">Nuestras Marcas</h1>
      <div className="slider__container">
        <img className="slider__image" src={maseiro} alt="maseiro"></img>
        <img className="slider__image" src={exedy} alt="exedy"></img>
        <img className="slider__image" src={hino} alt="hino"></img>
        <img className="slider__image" src={samgong} alt="samgong"></img>
        <img className="slider__image" src={eaton} alt="eaton"></img>
      </div>
      <div className="slider__container-reverse">
        <img className="slider__image" src={garret} alt="garret"></img>
        <img className="slider__image" src={izusu} alt="exedy"></img>
        <img className="slider__image" src={npr} alt="npr"></img>
        <img className="slider__image" src={daido} alt="sangong"></img>
        <img className="slider__image" src={sexel} alt="sexel"></img>
      </div>
    </div>
  );
}

export default ImagesSlider;
