import React from "react";
import { Link } from "react-router-dom";
import css from "./style.module.css";
import { FaShoppingCart, FaShopify } from "react-icons/fa";

const Navbar = (props) => {
  return (
    <nav className={css.navbar}>
      <div className={css.container}>
        <div className={css.logoAndLinks}>
          <div className={css.logo}>
            <FaShopify />
            <Link to="/">ECommerce</Link>
          </div>

          {/* <ul className={css.navLinks}>
            <li className={css.navLink}>
              <Link to="/">Home</Link>
            </li>
            <li className={css.navLink}>
              <Link to="/products">Products</Link>
            </li>
          </ul> */}
        </div>
        <div className={css.subNav}>
          {props.loggedIn ? (
            <div className={css.login}>
              <Link to="#">Munkhbaatar</Link>
              <Link to="#" onClick={props.toggleLoggedIn}>
                Log Out
              </Link>
            </div>
          ) : (
            <div className={css.login}>
              <Link to="#" onClick={props.showLoginModal}>
                Log In
              </Link>
              <Link to="/signUp">Sign Up</Link>
            </div>
          )}
          <div className={css.shoppingCartContainer}>
            <Link to="/shoppingCart">
              <FaShoppingCart />
            </Link>
            <p className={css.shoppingCartItemsCount}>10</p>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
