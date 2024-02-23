import axios from 'axios';
import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import disc from "../assets/discount.svg";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { Loader } from "../components/Loader";
import { useStore } from "../hooks/useCounterStore";
import "../styles/detail.css";
export const Detail = () => {
  const productId = useParams();
  const [data, setData] = useState([]);

  useEffect(() => {
    async function getProducts() {
      try {
        const res = await axios.get(`https://fenix-api-express.onrender.com/products/${productId.id}`);
        console.log(res.data);
        setData(res.data)
      } catch (error) {
        console.log(error);
      }
    }
    getProducts()
  }, []);
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

  return (
    <section>
      <Header></Header>
      {data.length === 0 ? (
        <div className="loader">
          <Loader />
        </div>
      ) : (
        <article className="detail-cnt">
          <div className="img-detail">
            <img src={data.product.image} alt="" />
          </div>
          <div className="detail-card">
            <h2 id="envio">Envío gratis</h2>
            <h2>{data.product.title}</h2>
            <p>{data.product.description}</p>
            {data.discount === null ? (
              <h3>{data.product.price} €</h3>
            ) : (
              <section>
                <h3 id="price-discounted">{data.product.price} €</h3>
                <label>
                  <img src={disc} alt="" />
                  <h3 id="discount">{data.product.price - data.product.discount}€</h3>
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
            {data.product.available === true ? (
              <motion.button
                onClick={() => execute(data.product.title, data.product.price)}
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
