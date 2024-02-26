import { motion } from "framer-motion";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import disc from "../assets/discount.svg";
import useFetchData from "../hooks/FetchData";
import "../styles/List.css";
export const List = () => {
  const { data, loading, error } = useFetchData(
    "https://fenix-api-express.onrender.com/products/"
  );
  const nav = useNavigate();
  return (
    <React.Fragment>
      <div className="products-cnt">
        {loading ? (
          "cargando"
        ) : (
          <React.Fragment>
            {Array.isArray(data) &&
              data.slice(0, 6).map((product, index) => (
                <article key={index}>
                  {product.discount !== null ? (
                    <div className="flag">
                      <span>10% descuento semana de la madre</span>
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
                      nav(`detail/${product._id}/`);
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
                              product.available === false
                                ? "line-through"
                                : "none",
                          }}
                        >
                          {product.price} €
                        </h3>
                      )}
                    </div>
                  </motion.div>
                </article>
              ))}
          </React.Fragment>
        )}
        <Link to={"/products"} id="ver">
          Ver más
        </Link>
      </div>
    </React.Fragment>
  );
};
