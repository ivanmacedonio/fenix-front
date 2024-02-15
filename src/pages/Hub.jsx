import React from "react";
import wp from '../assets/wp.svg';
import { About } from "../components/About";
import { Contact } from "../components/Contact";
import { Header } from "../components/Header";
import { List } from "../components/List";
import { Presentation } from "../components/Presentation";
import { Ventajas } from "../components/Ventajas";
export const Hub = () => {
  function handleWhatsapp() {
    const number = "+34654685859";
    const message = "Hola, Necesito ayuda sobre el catalogo de productos";
    window.open(`https://wa.me/${number}?text=${message}`, "_blank");
  }
  return (
    <section className="hub-page">
      <img src={wp} alt="whatsapp" id="wp" onClick={handleWhatsapp} />
      <Header></Header>
      <Presentation></Presentation>
      <List></List>
      <About></About>
      <Ventajas></Ventajas>
      <Contact></Contact>
    </section>
  );
};
