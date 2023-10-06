import { items } from '../../database/fakeCatalogue';
import { calculateTotalPrice } from '../../util/cartItems';
import { getCookie } from '../../util/cookies';
import { parseJson } from '../../util/json';
import GoToCheckoutButton from './GoToCheckoutButton';
import RemoveItemButton from './RemoveItemButton';

export const metadata = {
  title: 'Cart',
  description: 'Your shopping cart',
};

export type CartItemsNoQuantity = {
  id: number;
  composerFirstName: string;
  composerLastName: string;
  title: string;
  price: number;
};
export type CartItemsWithQuantity = {
  quantity: number;
  id: number;
  composerFirstName: string;
  composerLastName: string;
  title: string;
  price: number;
};

type CartCookie = {
  id: number;
  quantity: number;
};

export function addToCart() {
  const allItemsFromCookie = getCookie('cart');
  const cookieContent = !allItemsFromCookie
    ? []
    : parseJson(allItemsFromCookie) || [];

  const combineCartAndProductInformation = items.map((item) => {
    const matchIdWithIdFromCookie: {
      id: number;
      quantity: number;
    } = cookieContent.find(
      (itemInCartId: CartCookie) => item.id === itemInCartId.id,
    );
    return { ...item, quantity: matchIdWithIdFromCookie.quantity };
  });

  const addItemsToCart = combineCartAndProductInformation.filter((item) => {
    return item.quantity > 0;
  });

  return addItemsToCart;
}

export default function Cart() {
  const addItemsToCart = addToCart();
  const totalPrice = calculateTotalPrice();
  console.log('price on cart page', calculateTotalPrice());

  function itemSubtotal(quantity: number, price: number) {
    return quantity * price;
  }

  return (
    <>
      <div>this is your cart!</div>

      {addItemsToCart.map((item) => {
        return (
          <div key={`item-${item.id}`}>
            <div data-test-id={`cart-product-${item.id}`}>
              <div>{`Title: ${item.title}`}</div>

              <div>
                {`Composer: ${item.composerFirstName} ${item.composerLastName}`}
              </div>
              <div data-test-id={`cart-product-quantity-${item.quantity}`}>
                {`Quantity:
                ${item.quantity}`}
              </div>
              <div>€ {itemSubtotal(item.quantity, item.price)}</div>
              <RemoveItemButton itemId={item.id} />
            </div>
          </div>
        );
      })}
      <div>total price € {totalPrice} </div>
      <GoToCheckoutButton />
    </>
  );
}
