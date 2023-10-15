import { cookies } from 'next/headers';

// nullish coalescing operator
export function getCookie() {
  // get cookie

  const cookieString = cookies().get('cart');

  // parse cookie

  return cookieString
    ? cookieString.value
      ? JSON.parse(cookieString.value)
      : []
    : [];
}
