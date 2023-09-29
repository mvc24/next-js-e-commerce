'use server';

// if i want to change the item quantity, it should go in this file

import { cookies } from 'next/headers';
import { getCookie } from '../../util/cookies';
import { parseJson } from '../../util/json';

export async function deleteItem(itemId) {
  const cartCookie = getCookie('cart');
  const cart = !cartCookie ? [] : parseJson(cartCookie);

  const itemToDelete = cart.filter((cartItem) => {
    return cartItem.id !== itemId;
  });

  console.log('test', itemToDelete);
  if (itemToDelete) {
    itemToDelete.quantity = undefined;
  }

  await cookies().set('cart', JSON.stringify(itemToDelete));
}
