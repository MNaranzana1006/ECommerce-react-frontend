import { useState } from "react";
import Footer from "../../components/Footer";
import Login from "../../components/Login";
import Navbar from "../../components/Navbar";
import Products from "../../components/Products";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import ProductDetail from "../../components/ProductDetail";

function App() {
  const [loginModalShow, setLoginModalShow] = useState(false);
  const [loggedIn, setLoggedIn] = useState(true);

  const toggleLoggedIn = (e) => {
    setLoggedIn(!loggedIn);
    console.log(loggedIn);
  };
  const showLoginModal = () => {
    setLoginModalShow(true);
  };
  return (
    <BrowserRouter>
      <Navbar
        showLoginModal={showLoginModal}
        loggedIn={loggedIn}
        toggleLoggedIn={toggleLoggedIn}
      />
      <Login
        show={loginModalShow}
        onHide={() => setLoginModalShow(false)}
        toggleLoggedIn={toggleLoggedIn}
      />
      <Switch>
        <Route path="/" exact component={Products} />
        <Route path="/product/:id" children={<ProductDetail />} />
      </Switch>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
