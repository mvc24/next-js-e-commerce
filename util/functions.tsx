import { Edition } from '../migrations/00004-createTableEditions';

export type EditionInfoForCart = {
  editionId: number;
  articleNo: string;
  title: string;
  price: number;
};

export type CookieInformation = {
  id: number;
  quantity: number;
};

export type CartItem = {
  id: number;
  articleNo: string;
  title: string;
  price: number;
  quantity: number;
};

export async function getItemsInCart(
  cartInfoFromCookie: CookieInformation[],
  editions: Edition[],
): Promise<CartItem[]> {
  try {
    const cartItemsWithQuantity = await cartInfoFromCookie.map(
      (item: CookieInformation) => {
        const itemId: number = Number(item.id);
        const edition: Edition = editions.find(
          (ed: Edition) => Number(ed.id) === itemId,
        )!;

        const quantity = item.quantity;

        return {
          id: edition.id,
          title: edition.title,
          price: edition.price,
          quantity: quantity,
        } as CartItem;
      },
    );
    return cartItemsWithQuantity;
  } catch (error) {
    console.error('Error: ', error);
    throw error;
  }
}

export function itemSubtotal(price: number, quantity: number) {
  return price * quantity;
}

export function cartTotalSum(cartItems: CartItem[]) {
  let sum = 0;
  cartItems.forEach((item) => {
    sum += item.price * item.quantity;
  });
  return sum;
}

// functioning cart sum function
// cartItems Type needs to be passed from
/* export function cartTotalSum(cartItems) {
  let sum = 0;
  cartItems.forEach((item) => {
    sum += item.price * item.quantity;
  });
  return sum;
} */
