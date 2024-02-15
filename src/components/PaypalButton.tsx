import emailjs from "@emailjs/browser";
import { PayPalButtons } from "@paypal/react-paypal-js";
import React from "react";
interface PaypalButtonProps {
  totalValue: string;
  invoice: string;
}

export const PaypalButton: React.FC<PaypalButtonProps> = (props, userData) => {
  function sendMail() {
    const serviceId = "service_tc4eqdb";
    const templateId = "template_ytc3c4a";
    const userId = "Iu17bkOMZ1tF0nVOw";

    const templateParams = {
      nombre: userData.nombre,
      apellido: userData.apellido,
      telefono: userData.telefono,
      email: userData.email,
      direccion: userData.direccion,
      ciudad: userData.ciudad,
      provincia: userData.provincia,
      codigo_postal: userData.codigo_postal,
      total: userData.total,
    };
    emailjs
      .send(serviceId, templateId, templateParams, userId)
      .then((response) => {
        console.log("Correo electrónico enviado con éxito:", response);
        window.location.reload();
      })
      .catch((error) => {
        console.error("Error al enviar el correo electrónico:", error);
      });
  }
  return (
    <div>
      <PayPalButtons
        createOrder={(data, actions) => {
          return actions.order.create({
            purchase_units: [
              {
                description: props.invoice,
                amount: {
                  value: props.totalValue,
                  currency_code: "EUR",
                },
                payee: {
                  email_address: "fenixproductoseconomicos@outlook.es",
                },
              },
            ],
          });
        }}
        onApprove={async (data, actions) => {
          const order = await actions.order?.capture();
          sendMail();
        }}
      />
    </div>
  );
};
