import axios from "axios";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { Header } from "../components/Header";
import { PaypalButton } from "../components/PaypalButton";
import { useStore } from "../hooks/useCounterStore";
import "../styles/checkout.css";
export const Checkout = () => {
  const [total, setTotal] = useState(null);
  const { register, handleSubmit } = useForm({
    shouldUseNativeValidation: true,
  });
  const [userData, setUserData] = useState(null);
  const [accepted, setAccepted] = useState(false);
  const nav = useNavigate();
  const products = useStore((state) => state.items);
  useEffect(() => {
    if (products.length === 0) {
      nav("/");
    }
    const totalPrice = products.reduce(
      (acc, product) => acc + parseFloat(product.price),
      0
    );
    setTotal(totalPrice);
  }, [products]);

  async function storeData(data) {
    try {
      const newData = { ...data, total: total };
      const res = await axios.post("http://localhost:9000/store/", {
        dataUser: newData,
      });
      console.log(res.data);
      console.log(res.status);
      setAccepted(true);
    } catch (error) {
      console.log(error);
    }
  }

  function submit(data) {
    setUserData(data);
    storeData(data);
  }

  return (
    <section className="checkout-cnt">
      <Header></Header>
      <form className="formularios" onSubmit={handleSubmit(submit)}>
        <div className="form1">
          <h3> Facturación y envío</h3>
          <p>Nombre</p>
          <input type="text" {...register("nombre", { required: true })} />
          <p>Apellido</p>
          <input type="text" {...register("apellido", { required: true })} />
          <p>Teléfono </p>
          <input type="number " {...register("telefono", { required: true })} />
          <p>Email</p>
          <input type="email" {...register("email", { required: true })} />
          <p>Dirección</p>
          <input type="text" {...register("direccion", { required: true })} />
          <p>Ciudad</p>
          <input type="text" {...register("ciudad", { required: true })} />
          <p>Provincia</p>
          <input type="text" {...register("provincia", { required: true })} />
          <p>Código postal</p>
          <input
            type="number"
            {...register("codigo_postal", { required: true })}
          />
        </div>
        <div className="form2">
          <div className="form2-grid">
            <h4>Producto</h4>
            <h4>Subtotal</h4>
            {products.map((product) => (
              <React.Fragment>
                <h5>{product.title}</h5>
                <h5>{product.price} €</h5>
              </React.Fragment>
            ))}
            <h5>Envío</h5>
            <h5 id="free">Gratis</h5>
            <h5>Total</h5>
            <h5>{total} €</h5>
          </div>
          <hr />
          <div className="checkout">
            {accepted ? (
              <PaypalButton
                totalValue={total}
                invoice={"Compra via paypal"}
                userData={userData}
              />
            ) : (
              <button type="submit">Realizar pedido</button>
            )}
          </div>
        </div>
      </form>
    </section>
  );
};
