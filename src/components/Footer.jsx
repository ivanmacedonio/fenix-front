import { motion } from "framer-motion";
import React from "react";
import { useNavigate } from "react-router-dom";
import disc from "../assets/discount.svg";
import { Loader } from "../components/Loader";
import useFetchData from "../hooks/FetchData";
import "../styles/footer.css";
export const Footer = () => {
  const { data, loading, error } = useFetchData(
    "https://fenix-api-express.onrender.com/products/"
  );
  const nav = useNavigate();
  return (
    <React.Fragment>
      {loading ? (
        <Loader></Loader>
      ) : (
        <footer className="products-cnt" style={{ marginBottom: "10rem" }}>
          {data.slice(0, 3).map((product, index) => (
            <article key={index}>
              {product.discount !== null ? (
                <div className="flag">
                  <span>10% de descuento</span>
                </div>
              ) : (
                ""
              )}
              <motion.div
                className="product-item"
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                onClick={() => {
                  nav(`/products`);
                }}
              >
                {product.available === false ? (
                  <aside className="stock">Sin stock</aside>
                ) : (
                  ""
                )}
                <img src={product.image} alt="" />
                <div className="text-item">
                  <h3>{product.title}</h3>
                  <p>{product.description}</p>
                  {product.discount !== null ? (
                    <section className="discount-div">
                      <h3 id="price-discounted">{product.price} €</h3>
                      <label>
                        <img src={disc} alt="" />
                        <h3 id="discount">
                          {product.price - product.discount}€
                        </h3>
                      </label>
                    </section>
                  ) : (
                    <h3
                      id="price"
                      style={{
                        textDecoration:
                          product.available === false ? "line-through" : "none",
                      }}
                    >
                      {product.price} €
                    </h3>
                  )}
                </div>
              </motion.div>
            </article>
          ))}
        </footer>
      )}
    </React.Fragment>
  );
};
