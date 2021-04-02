import React from "react";
import css from "./style.module.css";

const Product = (props) => {
  return (
    <div className={css.container}>
      <div className={css.productImageContainer}>
        <img src={props.product.zurag} alt="img" />
      </div>
      <div className={css.productDescription}>
        <a href={`product/${props.product.id}`} className={css.productName}>
          {props.product.ner}
        </a>
        <p className={css.productPrice}>{props.product.price}.00 $</p>
      </div>
      <div className={css.buttons}>
        <a className={css.addCartButton} href="/">
          Add Cart
        </a>
        <a className={css.buyNowButton} href="/">
          Buy Now
        </a>
      </div>
    </div>
  );
};

export default Product;
