'use client';

import { useState } from 'react';

export default function CheckoutForm() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    eMail: '',
    address: '',
    city: '',
    postalCode: '',
    country: '',
    creditCardName: '',
    creditCardNumber: '',
    expirationDate: '',
    securityCode: '',
    confirmOrder: '',
  });

  const handleChange = (event) => {
    const { name, value } = event.currentTarget;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <>
      <form>
        <label htmlFor="firstName">
          First name:
          <input
            data-test-id="checkout-first-name"
            value="firstName"
            onChange={handleChange}
            required
          />
        </label>
        <label htmlFor="lastName">
          Last name:
          <input
            data-test-id="checkout-last-name"
            value="lastName"
            onChange={handleChange}
            required
          />
        </label>
      </form>
      <div>There will be input fields for the address etc.</div>
    </>
  );
}
