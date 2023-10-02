import Link from 'next/link';
import { numberOfItemsInCart } from './cart/page';

/* !!! When I style the element I have to put the counter in an element with
data-test-id="cart-count"  */

export default function Header() {
  const itemCount = numberOfItemsInCart();
  return (
    <header>
      <Link
        data-test-id="cart-link"
        href="/cart"
      >{`You have ${itemCount} items in your cart`}</Link>
    </header>
  );
}
