'use server';

// das passiert nachdem ich den button gedrückt hab
// in der ui sag ich wie viel ich haben möchte. das muss im cart landen. das soll erhalten bleiben, daher muss es in ein cookie gespeichert werden. die info wird an den server geschickt. der schickt das dann an den client zurück und das wird beim client gespeichert.

// quantity von einem gewissen produkt

import { cookies } from 'next/headers';
import { getCookie } from '../../../util/cookies';
import { parseJson } from '../../../util/json';

export async function createOrUpdateCart(editionId, quantity) {
  const cartCookie = getCookie('cart');
  const cart = !cartCookie ? [] : parseJson(cartCookie);

  const cartToUpdate = cart.find((cartItem) => {
    return cartItem.id === editionId;
  });

  if (cartToUpdate) {
    cartToUpdate.quantity += quantity;
  } else {
    cart.push({
      id: Number(editionId),
      quantity: Number(quantity),
    });
  }
  await cookies().set('cart', JSON.stringify(cart));
}
