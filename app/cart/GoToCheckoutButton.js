'use client';

import { useRouter } from 'next/navigation';

export default function GoToCheckoutButton(props) {
  const router = useRouter();
  return (
    <button
      onClick={async () => {
        await props.totalPrice;
        router.push('/cart/checkout');
      }}
    >
      Go to Checkout
    </button>
  );
}
