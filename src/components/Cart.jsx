import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useStore } from "../hooks/useCounterStore";
import "../styles/cart.css";
export const Cart = () => {
  const products = useStore((state) => state.items);
  const handleDelete = useStore((state) => state.clear);
  const [open, setOpen] = useState(true);
  const [total, setTotal] = useState(0);
  useEffect(() => {
    const totalPrice = products.reduce(
      (acc, product) => acc + parseFloat(product.price),
      0
    );
    setTotal(totalPrice);
  }, [products]);
  return (
    <motion.section className="cart-cnt">
      {open ? (
        <React.Fragment>
          {products.length === 0 ? (
            <div className="items-cart">
              <h4
                id="close"
                onClick={() => {
                  setOpen(false);
                }}
              >
                X
              </h4>
              <h3>Aún no hay elementos</h3>
            </div>
          ) : (
            <div className="items-cart">
              <h4
                id="close"
                onClick={() => {
                  setOpen(false);
                }}
              >
                X
              </h4>
              {products.map((product) => (
                <div className="cart-item">
                  <label>
                    <h2>{product.title}</h2>
                    <h3>{product.price} €</h3>
                  </label>
                </div>
              ))}
              <div className="payment">
                <label>
                  {" "}
                  <h4>Total: </h4> <h4>{total} €</h4>
                </label>
                <div className="buttons">
                  <Link to={"/checkout"}> Ir a Pagar</Link>
                  <p
                    onClick={() => {
                      handleDelete();
                    }}
                  >
                    Vaciar carrito
                  </p>
                </div>
              </div>
            </div>
          )}
        </React.Fragment>
      ) : (
        ""
      )}
    </motion.section>
  );
};
