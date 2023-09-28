'use client';
import { useState } from 'react';
import { createOrUpdateCart } from './actions';

export default function AddItem(props) {
  const [quantity, setQuantity] = useState(1);
  return (
    <form>
      <input
        data-test-id="product-quantity"
        value={quantity}
        type="number"
        min={1}
        onChange={(event) => setQuantity(Number(event.currentTarget.value))}
      />

      <button
        data-test-id="product-add-to-cart"
        formAction={async () =>
          await createOrUpdateCart(props.itemId, quantity)
        }
      >
        Add to cart
      </button>
    </form>
  );
}
