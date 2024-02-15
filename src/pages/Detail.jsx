import { motion } from "framer-motion";
import React, { useState } from "react";
import { useParams } from "react-router-dom";
import disc from "../assets/discount.svg";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { Loader } from "../components/Loader";
import useFetchData from "../hooks/FetchData";
import { useStore } from "../hooks/useCounterStore";
import "../styles/detail.css";
export const Detail = () => {
  const productId = useParams();
  const { data, loading, error } = useFetchData(
    `https://fenixapiecommerce.onrender.com/detail/${productId.id}/`
  );
  const [add, setAdd] = useState(false);
  const products = useStore((state) => state.items);
  const handleAdd = useStore((state) => state.add);
  function execute(title, price) {
    handleAdd({
      title: title,
      price: price,
    });
    setAdd(true);
  }
  if (error) {
    console.log(error);
  }

  return (
    <section>
      <Header></Header>
      {data === null ? (
        <div className="loader">
          <Loader />
        </div>
      ) : (
        <article className="detail-cnt">
          <div className="img-detail">
            <img src={`http://127.0.0.1:9000${data.image}`} alt="" />
          </div>
          <div className="detail-card">
            <h2 id="envio">Envío gratis</h2>
            <h2>{data.title}</h2>
            <p>{data.description}</p>
            {data.discount === null ? (
              <h3>{data.price} €</h3>
            ) : (
              <section>
                <h3 id="price-discounted">{data.price} €</h3>
                <label>
                  <img src={disc} alt="" />
                  <h3 id="discount">{data.price - data.discount}€</h3>
                </label>
              </section>
            )}
            {add ? (
              <motion.p
                id="added"
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                Producto añadido correctamente.
              </motion.p>
            ) : (
              ""
            )}
            {data.available === true ? (
              <motion.button
                onClick={() => execute(data.title, data.price)}
                whileTap={{ scale: 1.1 }}
              >
                Añadir al carrito
              </motion.button>
            ) : (
              <button>No disponible</button>
            )}
          </div>
        </article>
      )}
      <article className="related">
        <Footer></Footer>
      </article>
    </section>
  );
};
