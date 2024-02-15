import React from "react";
import { useNavigate } from "react-router-dom";
import fb from "../assets/face.svg";
import ig from "../assets/ig.svg";
import tiktok from "../assets/tiktok.svg";

import "../styles/contact.css";
export const Contact = () => {
  const nav = useNavigate();
  return (
    <footer className="contact-cnt">
      <h1>Encuentranos en las Redes Sociales</h1>
      <div className="redes-link">
        <img
          src={fb}
          alt=""
          onClick={() => {
            window.location.href =
              "https://www.facebook.com/profile.php?id=61556261163403";
          }}
        />
        <img
          src={ig}
          alt=""
          onClick={() => {
            window.location.href =
              "https://www.instagram.com/productosmaseconomicos?igsh=MXB2eWgyYTUwYWJ0cw%3D%3D&utm_source=qr";
          }}
        />
        <img
          src={tiktok}
          alt=""
          onClick={() => {
            window.location.href =
              "https://www.tiktok.com/@fenixproductosmaseconomi?_t=8jruaj9a7sX&_r=1";
          }}
        />
      </div>
    </footer>
  );
};
