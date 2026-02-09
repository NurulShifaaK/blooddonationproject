import React, { useState } from 'react';
import { sendOrderConfirmation } from "./Email";

const Footer = () => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');

  const handle = () => {
    if (!email || !name) {
      console.log("⚠️ Please enter both name and email");
      return;
    }

    // Mock order data for testing
    const orderData = {
      customerName: "looser",
      customerEmail: "shifaxoxo24@gmail.com",
      id: '12345',
      productName: 'Aurora Skincare Set',
      quantity: 1,
      total: '$49.99'
    };

    // Call EmailJS function
    sendOrderConfirmation(orderData);
  };

  return (
    <div className='mt-6 p-4 w-full shadow-2xl rounded bg-violet-400/50 text-white'>
      <div>
        <p className='text-center font-bold sm:text-9xl text-6xl'>Aurora</p>
        <p className='text-center mt-2 font-semibold font-serif text-white/70'>
          Radiance redefined for every kind of Beautiful
        </p>
      </div>
      <div className='flex flex-col flex-wrap gap-1 items-center justify-center mt-4'>
        <input
          className="border border-white/40 rounded px-2 py-1 w-[180px] font-semibold text-black/40 "
          type="text"
          placeholder="Your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          className="border border-white/40 rounded px-2 py-1 w-[180px] font-semibold text-black/40"
          type="email"
          placeholder="Your Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button
          onClick={handle}
          className='bg-white/80 rounded text-black/50 px-4 font-semibold py-1 ml-2'
        >
          Send
        </button>
      </div>
    </div>
  );
}

export default Footer;
