'use server';

import { cookies } from 'next/headers';
import { getCookie } from '../../../util/cookies';

export async function deleteCookie() {
  const cart = await getCookie();
  if (cart) {
    cookies().set('cart', '', { expires: new Date(0) });
  }
  console.log('cart is empty! yay!');
}
