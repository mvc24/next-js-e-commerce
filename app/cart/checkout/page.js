import { cartTotalSum } from '../../../util/functions';
import CheckoutForm from './CheckoutForm';

export const metadata = {
  title: 'Checkout',
  description: 'Checkout page',
};

export default function Checkout() {
  const totalPrice = cartTotalSum();

  return (
    <>
      <h1>Checkout</h1>

      <CheckoutForm />
      <div>Order summary</div>
      <div>{`Total Price: € ${totalPrice}`} </div>
    </>
  );
}
