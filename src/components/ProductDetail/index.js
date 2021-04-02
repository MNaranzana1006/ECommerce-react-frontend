import React, { useState, useEffect } from "react";
import css from "./style.module.css";
import { useParams } from "react-router-dom";
import axios from "axios";
import Spinner from "../Spinner";

const ProductDetail = (props) => {
  let { id } = useParams();
  const [product, setProduct] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    axios
      .get(`https://1234.mn/api/courses/${id}`)
      .then((res) => {
        setProduct(res.data[0]);
        setIsLoading(false);
      })
      .catch((err) => console.log(err));
  }, [id]);

  return (
    <div className={css.container}>
      {!isLoading ? (
        <div className={css.product}>
          <h1>Product NAME: {product.ner}</h1>
        </div>
      ) : (
        <Spinner />
      )}
    </div>
  );
};

export default ProductDetail;
