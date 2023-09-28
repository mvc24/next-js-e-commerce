import { cookies } from 'next/headers';
import Link from 'next/link';
import { getCookie } from '../../util/cookies';
import { parseJson } from '../../util/json';

export const metadata = {
  title: 'Cart',
  description: 'Your shopping cart',
};

// aus value js object machen

// I need to get the items from the cookie
// the id needs to lead to the title
// I need an ul with a map to display the items

export default function Cart() {
  const allItemsFromCookie = getCookie('cart');
  const parsedCookie = parseJson(allItemsFromCookie);
  console.log(parsedCookie);

  return (
    <>
      <div>some day this will be a cart</div>
      <div>and things will show up in here</div>
      <Link href="/cart/checkout">Checkout</Link>
    </>
  );
}
