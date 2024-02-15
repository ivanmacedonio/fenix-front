import { motion } from "framer-motion";
import React from "react";
import cliente from "../assets/cliente.svg";
import envio from "../assets/envio.svg";
import garantia from "../assets/garantia.svg";
import "../styles/ventajas.css";
export const Ventajas = () => {
  return (
    <section className="ventajas-cnt">
      <div className="items-ventajas">
        <motion.article
          className="item-ventaja"
          initial={{ y: -150, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <img src={envio} alt="" />
          <h2>Envió sin costo adicional a toda España</h2>
          <p>
            Envíos a todo el país sin costo adicional. Indica tu dirección en el
            Checkout y entre 2 a 4 días hábiles recibes tu producto
          </p>
        </motion.article>
        <motion.article
          className="item-ventaja"
          initial={{ y: -150, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <img src={cliente} alt="" />
          <h2>Atención al cliente personalizada</h2>
          <p>
            Tu bienestar es nuestra propridad. Usa nuestros canales de contacto
            o redes sociales para ponerte en contacto al instante y resolver tus
            dudas
          </p>
        </motion.article>
        <motion.article
          className="item-ventaja"
          initial={{ y: -150, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <img src={garantia} alt="" />
          <h2>Garantía completa con todos los productos</h2>
          <p>
            Todos nuestros productos cuentan con garantía en caso de querer una
            devolución. Contactate con nosotros por nuestras redes sociales.
          </p>
        </motion.article>
      </div>
    </section>
  );
};
