import Link from 'next/link';
import { numberOfItemsInCart } from '../util/cartItems';
import styles from './Header.module.scss';

/* !!! When I style the element I have to put the counter in an element with
data-test-id="cart-count"  */

export default function Header(props) {
  const itemCount = numberOfItemsInCart(props.itemsInCart);

  return (
    <header>
      <div className={styles.navigation}>
        <div className="navLinks">
          <Link href="/">Home</Link>
          <Link href="/about ">About</Link>
          <Link href="/catalogue">Catalogue</Link>
          <Link href="/ordering-shipping">Ordering & Shipping</Link>
        </div>
        <div className="navCart">
          <Link
            data-test-id="cart-link"
            href="/cart"
            className="cart"
          >{`You have ${itemCount} items in your cart`}</Link>
        </div>
      </div>
    </header>
  );
}
