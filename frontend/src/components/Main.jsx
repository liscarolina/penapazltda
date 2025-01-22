import {
  Routes,
  Route,
  Navigate,
  useNavigate,
  useLocation,
} from "react-router-dom";
import BannerWithText from "./BannerWithText";
import Location from "./Location";
import ProductCard from "./ProductCard";
import ImagesSlider from "./ImagesSlider";
import manWithCarEngine from "../images/man-with-car-engine.jpg";
import products from "../utils/products";

function Main({ handleCardClick }) {
  return (
    <>
      <section className="banner" id="somos">
        <BannerWithText
          id="introduction"
          image={manWithCarEngine}
          text="Líderes en el suministro de partes y piezas para automotores a díesel HINO e ISUZU"
          alt="Hombre y motor"
        />
      </section>
      <section className="location" id="agencias">
        <Location
          id="Matriz"
          title="Matriz"
          address="Av. El rey y Carihuayrazo AMBATO"
          hours="L-V 8:30 a 18:00"
          number="+593 32 520296 / +593 32 520247"
          cel="+593 994172113"
        >
          <iframe
            className="location__map-google"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.8795852417943!2d-78.62504008952885!3d-1.2429140987400096!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x91d381a37eced571%3A0xfdd5ba52ed58eafc!2sPe%C3%B1apaz%20Ltda!5e0!3m2!1ses-419!2sec!4v1736199724311!5m2!1ses-419!2sec"
          ></iframe>
        </Location>
        <Location
          id="Bolivariana"
          title="Bolivariana"
          address="Av. Bolivariana y pasaje Leito AMBATO "
          hours="L-V 8:30 a 18:00"
          number="+593 32 520296 / +593 32 520247"
          cel="+593 994698525"
        >
          <iframe
            className="location__map-google"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d534.4345874129926!2d-78.61448453277724!3d-1.2587388458780797!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x91d38180466ad9e7%3A0x774b64a4199753fd!2sE493A%2C%20Ambato!5e0!3m2!1ses!2sec!4v1736203945019!5m2!1ses!2sec"
          ></iframe>
        </Location>
        <Location
          id="Riobamba"
          title="Riobamba"
          address="Av. La Prensa y Rey Cacha RIOBAMBA "
          hours="L-V 8:30 a 17:30"
          number="+593 32 306035"
          cel="+593 994698525"
        >
          <iframe
            className="location__map-google"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.136819508319!2d-78.6643036!3d-1.6635079!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x91d307474804f6d7%3A0xe207e3b76cb82fc3!2sPE%C3%91APAZ%20LTDA!5e0!3m2!1ses!2sec!4v1736203616405!5m2!1ses!2sec"
          ></iframe>
        </Location>
      </section>
      <section className="products" id="productos">
        <h1 className="products__title">Productos</h1>
        <p className="products__description">
          Todo lo que necesitas para mantener siempre a punto tu herramienta
          favorita de trabajo
        </p>
        <div className="products__container">
          {products.map((product) => {
            return (
              <ProductCard
                img={product.img}
                id={product.id}
                alt={product.alt}
                name={product.name}
                key={product.id}
                items={product.items}
                title={product.title}
                handleCardClick={handleCardClick}
              ></ProductCard>
            );
          })}
        </div>
      </section>
      <section className="brands" id="marcas">
        <ImagesSlider></ImagesSlider>
      </section>
    </>

    // <>
    //   <Routes>
    //     <Route
    //       path="/somos"
    //       element={
    //         <section className="banner">
    //           <BannerWithText
    //             id="introduction"
    //             image={manWithCarEngine}
    //             text="Líderes en el suministro de partes y piezas para automotores a díesel HINO e ISUZU"
    //             alt="Hombre y motor"
    //           />
    //         </section>
    //       }
    //     ></Route>
    //     <Route
    //       path="/agencias"
    //       element={
    //         <section className="location">
    //           <Location
    //             id="Matriz"
    //             title="Matriz"
    //             address="Av. El rey y Carihuayrazo AMBATO"
    //             hours="L-V 8:30 a 18:00"
    //             number="+593 32 520296 / +593 32 520247"
    //             cel="+593 994172113"
    //           >
    //             <iframe
    //               className="location__map-google"
    //               src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.8795852417943!2d-78.62504008952885!3d-1.2429140987400096!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x91d381a37eced571%3A0xfdd5ba52ed58eafc!2sPe%C3%B1apaz%20Ltda!5e0!3m2!1ses-419!2sec!4v1736199724311!5m2!1ses-419!2sec"

    //               // allowfullscreen=""
    //               // loading="lazy"
    //               // referrerpolicy="no-referrer-when-downgrade"
    //             ></iframe>
    //           </Location>
    //           <Location
    //             id="Bolivariana"
    //             title="Bolivariana"
    //             address="Av. Bolivariana y pasaje Leito AMBATO "
    //             hours="L-V 8:30 a 18:00"
    //             number="+593 32 520296 / +593 32 520247"
    //             cel="+593 994698525"
    //           >
    //             <iframe
    //               className="location__map-google"
    //               src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d534.4345874129926!2d-78.61448453277724!3d-1.2587388458780797!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x91d38180466ad9e7%3A0x774b64a4199753fd!2sE493A%2C%20Ambato!5e0!3m2!1ses!2sec!4v1736203945019!5m2!1ses!2sec"
    //             ></iframe>
    //           </Location>
    //           <Location
    //             id="Riobamba"
    //             title="Riobamba"
    //             address="Av. La Prensa y Rey Cacha RIOBAMBA "
    //             hours="L-V 8:30 a 17:30"
    //             number="+593 32 306035"
    //             cel="+593 994698525"
    //           >
    //             <iframe
    //               className="location__map-google"
    //               src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.136819508319!2d-78.6643036!3d-1.6635079!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x91d307474804f6d7%3A0xe207e3b76cb82fc3!2sPE%C3%91APAZ%20LTDA!5e0!3m2!1ses!2sec!4v1736203616405!5m2!1ses!2sec"
    //             ></iframe>
    //           </Location>
    //         </section>
    //       }
    //     ></Route>
    //     <Route
    //       path="/productos"
    //       element={
    //         <section className="products">
    //           <h1 className="products__title">Productos</h1>
    //           <p className="products__description">
    //             Todo lo que necesitas para mantener siempre a punto tu
    //             herramienta favorita de trabajo
    //           </p>
    //           <div className="products__container">
    //             {products.map((product) => {
    //               return (
    //                 <ProductCard
    //                   img={product.img}
    //                   id={product.id}
    //                   alt={product.alt}
    //                   name={product.name}
    //                   key={product.id}
    //                   items={product.items}
    //                   title={product.title}
    //                   handleCardClick={handleCardClick}
    //                 ></ProductCard>
    //               );
    //             })}
    //           </div>
    //         </section>
    //       }
    //     ></Route>
    //   </Routes>
    // </>
  );
}

export default Main;
