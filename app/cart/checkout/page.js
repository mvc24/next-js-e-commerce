import CheckoutForm from './CheckoutForm';

export const metadata = {
  title: 'Checkout',
  description: 'Checkout page',
};

export default function Checkout() {
  return (
    <>
      <h1>Checkout</h1>

      <CheckoutForm />
    </>
  );
}
