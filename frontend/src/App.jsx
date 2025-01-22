import { useEffect, useState } from "react";
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
import {
  Routes,
  Route,
  Navigate,
  useNavigate,
  useLocation,
} from "react-router-dom";

// import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
// import "./App.css";

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
        if (data && data._id) {
          infoTooltipSetIsOpened(true);
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
        {/* <Route
          path="/inicio*"
          element={
            <>
              <Main handleCardClick={onProductCardClick} />
              <ProductPopup
                id="productPopup"
                isOpen={productPopupIsOpened}
                onClose={closeAllPopups}
                title={currentCard.title}
                items={currentCard.items}
              />
            </>
          }
        ></Route> */}
      </Routes>
    </div>
  );

  // return (
  //   <div className="page">
  //     <Routes>
  //       <Route
  //         path="/"
  //         element={
  //           <>
  //             <Header />
  //             <NavBar />
  //           </>
  //         }
  //       />
  //     </Routes>
  //   </div>
  // );
  // const [count, setCount] = useState(0);
  // return (
  //   <>
  //     <div>
  //       <a href="https://vite.dev" target="_blank">
  //         <img src={viteLogo} className="logo" alt="Vite logo" />
  //       </a>
  //       <a href="https://react.dev" target="_blank">
  //         <img src={reactLogo} className="logo react" alt="React logo" />
  //       </a>
  //     </div>
  //     <h1>Vite + React</h1>
  //     <div className="card">
  //       <button onClick={() => setCount((count) => count + 1)}>
  //         count is {count}
  //       </button>
  //       <p>
  //         Edit <code>src/App.jsx</code> and save to test HMR
  //       </p>
  //     </div>
  //     <p className="read-the-docs">
  //       Click on the Vite and React logos to learn more
  //     </p>
  //   </>
  // );
}

export default App;
