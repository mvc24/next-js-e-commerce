import { calculateTotalPrice } from '../page';

export const metadata = {
  title: 'Checkout',
  description: 'Checkout page',
};

export default function Checkout() {
  const totalPrice = calculateTotalPrice();

  return (
    <>
      <h1>Checkout</h1>

      <div>There will be input fields for the address etc.</div>
      <div>Order summary</div>
      <div>{`Total Price: € ${totalPrice}`} </div>
    </>
  );
}
