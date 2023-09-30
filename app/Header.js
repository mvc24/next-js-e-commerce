import Link from 'next/link';
import { numberOfItemsInCart } from './cart/page';

export default function Header() {
  const itemCount = numberOfItemsInCart();
  return (
    <header>
      <Link href="/cart">{`You have ${itemCount} items in your cart`}</Link>
    </header>
  );
}
