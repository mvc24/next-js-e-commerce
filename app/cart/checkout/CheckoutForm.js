'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function CheckoutForm() {
  const router = useRouter();
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
    <form
      onSubmit={(event) => {
        event.preventDefault();

        router.push('/cart/thanks');
      }}
    >
      <label htmlFor="firstName">
        First name:
        <input
          data-test-id="checkout-first-name"
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
          required
        />
      </label>
      <label htmlFor="lastName">
        Last name:
        <input
          data-test-id="checkout-last-name"
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
          required
        />
      </label>
      <label htmlFor="eMail">
        E-mail:
        <input
          data-test-id="checkout-email"
          type="email"
          name="eMail"
          value={formData.eMail}
          onChange={handleChange}
          required
        />
      </label>
      <label htmlFor="address">
        Address:
        <input
          data-test-id="checkout-address"
          name="address"
          value={formData.address}
          onChange={handleChange}
          required
        />
      </label>
      <label htmlFor="city">
        City:
        <input
          data-test-id="checkout-city"
          name="city"
          value={formData.city}
          onChange={handleChange}
          required
        />
      </label>
      <label htmlFor="postal-code">
        Postal code:
        <input
          data-test-id="checkout-postal-code"
          name="postalCode"
          value={formData.postalCode}
          onChange={handleChange}
          required
        />
      </label>
      <label htmlFor="postal-country">
        Country:
        <input
          data-test-id="checkout-country"
          name="country"
          value={formData.country}
          onChange={handleChange}
          required
        />
      </label>
      <label htmlFor="cc-name">
        Name on credit card:
        <input
          name="creditCardName"
          value={formData.creditCardName}
          onChange={handleChange}
          required
        />
      </label>
      <label htmlFor="cc-number">
        Credit card number:
        <input
          data-test-id="checkout-credit-card"
          name="creditCardNumber"
          type="tel"
          inputMode="numeric"
          value={formData.creditCardNumber}
          onChange={handleChange}
          required
        />
      </label>
      <label htmlFor="cc-expiration-date">
        Expiration date:
        <input
          data-test-id="checkout-expiration-date"
          name="expirationDate"
          pattern="([0-9]{2}[/]?){2}"
          value={formData.expirationDate}
          onChange={handleChange}
          required
        />
      </label>
      <label htmlFor="cc-security-code">
        Security code:
        <input
          data-test-id="checkout-security-code"
          name="securityCode"
          type="tel"
          inputMode="numeric"
          pattern="[0-9]{3}"
          value={formData.securityCode}
          onChange={handleChange}
          required
        />
      </label>
      <button name="confirmOrder" onChange={handleChange}>
        Go to checkout
      </button>
    </form>
  );
}
