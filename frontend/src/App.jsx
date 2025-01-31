import { useState } from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import ProductPopup from "./components/ProductPopup";
import Footer from "./components/Footer";
import FixedButton from "./components/FixedButton";
import Register from "./components/Register";
import api from "./utils/api";
import InfoTooltip from "./components/InfoToolTip";
import successfulRegister from "./images/succesful-register.svg";
import errorRegister from "./images/error-register.svg";
import { Routes, Route } from "react-router-dom";

function App() {
  const [currentCard, setCurrentCard] = useState({
    title: "",
    items: [],
  });

  const [productPopupIsOpened, productCardSetPopoupIsOpened] = useState(false);
  const [infoTooltipIsOpened, infoTooltipSetIsOpened] = useState(false);
  const [infoTooltipErrIsOpened, infoTooltipErrSetIsOpened] = useState(false);

  function onProductCardClick(title, items) {
    productCardSetPopoupIsOpened(true);
    setCurrentCard({ title, items });
  }

  function closeAllPopups() {
    productCardSetPopoupIsOpened(false);
    infoTooltipSetIsOpened(false);
    infoTooltipErrSetIsOpened(false);
  }

  function onRegister({ email, name, lastname, telef }) {
    return api
      .register(email, name, lastname, telef)
      .then((data) => {
        if (data && data.status) {
          infoTooltipSetIsOpened(true);
        } else {
          infoTooltipErrSetIsOpened(true);
        }
      })
      .catch(() => {
        infoTooltipErrSetIsOpened(true);
      });
  }

  return (
    <div className="page">
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Header />
              <Main handleCardClick={onProductCardClick} />
              <ProductPopup
                id="productPopup"
                isOpen={productPopupIsOpened}
                onClose={closeAllPopups}
                title={currentCard.title}
                items={currentCard.items}
              />
              <Footer />
              <FixedButton />
            </>
          }
        />
        <Route
          path="/register"
          element={
            <>
              <Register onRegister={onRegister}>
                <InfoTooltip
                  id="registro exitoso"
                  title="¡Correcto ya estás registrado.!"
                  alt="Registro exitoso"
                  img={successfulRegister}
                  onClose={closeAllPopups}
                  isOpen={infoTooltipIsOpened}
                ></InfoTooltip>
                <InfoTooltip
                  id="registro fallido"
                  title="Lo sentimos, ya estabas registrado"
                  alt="registro fallido"
                  onClose={closeAllPopups}
                  isOpen={infoTooltipErrIsOpened}
                  img={errorRegister}
                ></InfoTooltip>
              </Register>
            </>
          }
        ></Route>
      </Routes>
    </div>
  );
}

export default App;
