import Link from 'next/link';

export const metadata = {
  title: 'Cart',
  description: 'Your shopping cart',
};

export default function Cart() {
  return (
    <>
      <div>some day this will be a cart</div>
      <div>and things will show up in here</div>
      <Link href="/cart/checkout">Checkout</Link>
    </>
  );
}
