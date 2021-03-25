import { useState } from "react";
import Footer from "../components/Footer";
import Login from "../components/Login";
import Navbar from "../components/Navbar";
import Products from "../components/Products";
import css from "./style.module.css";

function App() {
  const [loginModalShow, setLoginModalShow] = useState(false);
  const showLoginModal = () => {
    setLoginModalShow(true);
  };
  return (
    <div className={css.container}>
      <Navbar showLoginModal={showLoginModal} />
      <Login show={loginModalShow} onHide={() => setLoginModalShow(false)} />
      <Products />

      <Footer />
    </div>
  );
}

export default App;
