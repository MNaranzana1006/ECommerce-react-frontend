import React, { useState, useEffect } from "react";
import axios from "axios";
import css from "./style.module.css";
import Product from "../Product";
import Loader from "../Spinner";
const Products = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(
    () =>
      axios
        .get("https://1234.mn/api/courses")
        .then((data) => {
          setProducts(data.data);
          setIsLoading(true);
        })
        .catch((err) => setIsLoading(false))
        .finally(setIsLoading(false)),
    []
  );
  return (
    <div>
      {!isLoading ? (
        <div className={css.loader}>
          <Loader />
        </div>
      ) : (
        <div className={css.container}>
          {products.map((el) => (
            <Product key={el.id} product={el} />
          ))}
        </div>
      )}
    </div>
  );
};
export default Products;
