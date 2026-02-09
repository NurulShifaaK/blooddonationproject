import React from 'react';
import emailjs from '@emailjs/browser';

export const sendOrderConfirmation = (order) => {
  const templateParams = {
    name: order.customerName,
    email: order.customerEmail,
    order_number: order.id,
    product_name: order.productName,
    quantity: order.quantity,
    total: order.total
  };

  emailjs.send(
    'service_redc8l9',
    'template_hq18sp8',
    templateParams,
    'Fl4D8Fk5xiO073Vhx'
  )
    .then((response) => {
      console.log('Email sent successfully!', response.status, response.text);
    })
    .catch((error) => {
      console.error('Failed to send email:', error);
    });
};
const Email = () => {
  return (
    <div>Email Utility Ready!</div>
  );
}

export default Email;