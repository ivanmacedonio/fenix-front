import { motion } from "framer-motion";
import React from "react";
import earpods from "../assets/airpods.webp";
import "../styles/about.css";
export const About = () => {
  return (
    <section className="about-cnt">
      <img src={earpods} alt="" />
      <motion.article
        className="text-about"
        initial={{ x: 100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.89 }}
      >
        <h1>Nosotros</h1>
        <p>
          {" "}
          Bienvenido a <b>Fénix</b>, tu tienda de electrónica de confianza donde
          encontrarás productos de calidad a precios accesibles. En Fénix, nos
          enorgullece ofrecer una amplia gama de dispositivos electrónicos,
          desde smartphones y tablets hasta accesorios y gadgets innovadores.
        </p>
        <p>
          Nuestro compromiso es brindarte productos que se ajusten a tus
          necesidades y presupuesto, sin comprometer la calidad. Trabajamos
          arduamente para mantenernos actualizados con las últimas tendencias
          tecnológicas y ofrecerte siempre lo mejor.
        </p>
        <p>
          En Fénix, valoramos a cada uno de nuestros clientes y nos esforzamos
          por brindar un servicio excepcional. ¡Ven a visitarnos y descubre por
          qué somos tu mejor opción en electrónica!
        </p>
      </motion.article>
    </section>
  );
};
