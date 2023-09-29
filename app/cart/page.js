import Link from 'next/link';
import { items } from '../../database/fakeCatalogue';
import { getCookie } from '../../util/cookies';
import { parseJson } from '../../util/json';
import RemoveItemButton from './RemoveItemButton';

export const metadata = {
  title: 'Cart',
  description: 'Your shopping cart',
};

export default function Cart() {
  const allItemsFromCookie = getCookie('cart');
  const parsedCookie = parseJson(allItemsFromCookie);

  console.log(parsedCookie);

  const addUnfilteredItemsToCart = items.map((item) => {
    const matchIdWithIdFromCookie = parsedCookie.find(
      (itemInCartId) => item.id === itemInCartId.id,
    );
    console.log(matchIdWithIdFromCookie);
    return { ...item, quantity: matchIdWithIdFromCookie?.quantity };
  });

  const addItemsToCart = addUnfilteredItemsToCart.filter((item) => {
    return item.quantity !== undefined;
  });

  function itemSubtotal(quantity, price) {
    return quantity * price;
  }

  const totalPrice = addItemsToCart.reduce(
    (accumulator, currentValue) =>
      accumulator + currentValue.price * currentValue.quantity,
    0,
  );
  console.log(totalPrice);

  /*  const totalPriceReducer = (itemSubtotal, currentValue) =>
    itemSubtotal + currentValue; */

  console.log(addItemsToCart);
  return (
    <>
      <div>this is your cart!</div>

      {addItemsToCart.map((item) => {
        return (
          <div key={`item-${item.id}`}>
            <div data-test-id={`cart-product-${item.id}`}>
              <div>{item.title}</div>

              <div>
                {item.composerFirstName} {item.composerLastName}
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
      <Link href="/cart/checkout">Checkout</Link>
    </>
  );
}
