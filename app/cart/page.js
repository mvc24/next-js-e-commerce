import { cookies } from 'next/headers';
import Link from 'next/link';

export const metadata = {
  title: 'Cart',
  description: 'Your shopping cart',
};

// aus value js object machen

// I need to get the items from the cookie
// the id needs to lead to the title

const allItems = cookies().get('cart');
console.log(allItems);

export default function Cart() {
  return (
    <>
      <div>some day this will be a cart</div>
      <div>and things will show up in here</div>
      <Link href="/cart/checkout">Checkout</Link>
    </>
  );
}
