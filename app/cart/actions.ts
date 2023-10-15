'use server';

// if i want to change the item quantity, it should go in this file

import { cookies } from 'next/headers';
import { getCookie } from '../../util/cookies';
import { parseJson } from '../../util/json';

export async function deleteItem(itemId: number) {
  const cart = getCookie();

  const itemToDelete = cart.filter(
    (cartItem: { id: number; quantity: number }) => {
      return cartItem.id !== itemId;
    },
  );

  if (itemToDelete) {
    itemToDelete.quantity = undefined;
  }

  await cookies().set('cart', JSON.stringify(itemToDelete));
}
