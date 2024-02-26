import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import disc from "../assets/discount.svg";
import { Header } from "../components/Header";
import { Loader } from "../components/Loader";
import useFetchData from "../hooks/FetchData";
import "../styles/catalogo.css";
export const Catalogo = () => {
  const { data, loading, error } = useFetchData(
    "https://fenix-api-express.onrender.com/products/"
  );
  const [searchTerms, setSearchTerms] = useState("");
  const [filteredProducts, setFilteredProducts] = useState(null);
  const nav = useNavigate();

  useEffect(() => {
    setFilteredProducts(data);
    if (searchTerms !== "" && data !== null) {
      let dataFiltered = data.filter((item) =>
        item.title.toLowerCase().includes(searchTerms.toLowerCase())
      );
      setFilteredProducts(dataFiltered);
    }
  }, [data, searchTerms]);

  return (
    <section className="catalogo-cnt">
      {filteredProducts === null ? (
        <div className="loader">
          <Loader></Loader>
        </div>
      ) : (
        <React.Fragment>
          <Header></Header>
          <div className="title-catalogo">
            <h2>Nuestros productos</h2>
            <p>
              Escoge el que mas te guste y aprovecha su envío gratis a todo
              España
            </p>
            <input
              type="text"
              placeholder="Busca un producto"
              value={searchTerms}
              onChange={(e) => setSearchTerms(e.target.value)}
            />
          </div>

          <div className="products-cnt">
            {filteredProducts.map((product, index) => (
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
                    nav(`/detail/${product._id}/`);
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
          </div>
        </React.Fragment>
      )}
    </section>
  );
};
