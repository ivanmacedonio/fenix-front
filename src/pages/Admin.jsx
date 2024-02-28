import axios from "axios";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import "../styles/admin.css";
export const Admin = () => {
  const { register, handleSubmit } = useForm({
    shouldUseNativeValidation: true,
  });

  const [image, setImage] = useState(null);
  const [products, setProducts] = useState([]);
  function handleChange(e) {
    setImage(e.target.files[0]);
  }

  useEffect(() => {
    async function getProductsAdmin() {
      try {
        const res = await axios.get(
          "https://fenix-api-express.onrender.com/products/"
        );
        console.log(res.data);
        setProducts(res.data.products);
      } catch (error) {
        console.log(error);
      }
    }
    getProductsAdmin();
  }, []);

  const deleteProduct = async (pk) => {
    const res = await axios.delete(
      `https://fenix-api-express.onrender.com/products/${pk}`
    );
    console.log(res.data);
    alert("producto eliminado");
    window.location.reload();
  };

  const submit = async (data) => {
    try {
      const formData = new FormData();
      formData.append("title", data.title);
      formData.append("description", data.description);
      formData.append("price", data.price);
      formData.append("discount", data.discount);
      formData.append("available", data.available);
      formData.append("image", image);
      const res = await axios.post(
        "https://fenix-api-express.onrender.com/products/",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      console.log(formData);
      alert("Producto creado exitosamente!");
      window.location.reload();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <section className="admin-cnt">
      <h2>Crear producto</h2>
      <form onSubmit={handleSubmit(submit)}>
        <input
          type="text"
          placeholder="Ingresa el titulo"
          {...register("title", {
            required: true,
          })}
        />
        <input
          type="text"
          placeholder="Ingresa la descripcion"
          {...register("description", {
            required: true,
          })}
        />
        <input
          type="number"
          placeholder="Ingresa el precio"
          {...register("price", {
            required: true,
          })}
          step="any"
        />

        <input
          type="number"
          placeholder="Ingresa el descuento"
          {...register("discount", {
            required: false,
          })}
        />
        <input
          type="file"
          name="image"
          placeholder="Ingresa la imagen del producto"
          onChange={handleChange}
        />
        <input
          type="checkbox"
          defaultChecked={true}
          placeholder="Esta disponible?"
          {...register("available", {
            required: true,
          })}
        />
        <button type="submit">Crear producto!</button>
      </form>
      <div className="acciones-cnt">
        <h2>Lista de acciones</h2>
        {products &&
          products.map((product) => (
            <div className="product-item-admin">
              <p key={product.id}>{product.title}</p>
              <p key={product.id}>{product.price} EUROS</p>
              <button
                onClick={() => {
                  deleteProduct(product._id);
                }}
              >
                ELIMINAR
              </button>
            </div>
          ))}
      </div>
    </section>
  );
};
