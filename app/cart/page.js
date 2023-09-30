import { items } from '../../database/fakeCatalogue';
import { getCookie } from '../../util/cookies';
import { parseJson } from '../../util/json';
import GoToCheckoutButton from './GoToCheckoutButton';
import RemoveItemButton from './RemoveItemButton';

export const metadata = {
  title: 'Cart',
  description: 'Your shopping cart',
};

export function addToCart() {
  const allItemsFromCookie = getCookie('cart');
  const parsedCookie = parseJson(allItemsFromCookie);

  const addUnfilteredItemsToCart = items.map((item) => {
    const matchIdWithIdFromCookie = parsedCookie.find(
      (itemInCartId) => item.id === itemInCartId.id,
    );
    return { ...item, quantity: matchIdWithIdFromCookie?.quantity };
  });

  const addItemsToCart = addUnfilteredItemsToCart.filter((item) => {
    return item.quantity !== undefined;
  });

  return addItemsToCart;
}

export function numberOfItemsInCart() {
  const addItemsToCart = addToCart();
  const itemCount = addItemsToCart.reduce(
    (accumulator, currentValue) => accumulator + currentValue.quantity,
    0,
  );

  return itemCount;
}

export function calculateTotalPrice() {
  const addItemsToCart = addToCart();
  const itemsToCalculate = addItemsToCart;
  const totalPrice = itemsToCalculate.reduce(
    (accumulator, currentValue) =>
      accumulator + currentValue.price * currentValue.quantity,
    0,
  );

  return totalPrice;
}

export default function Cart() {
  const addItemsToCart = addToCart();
  const totalPrice = calculateTotalPrice();

  function itemSubtotal(quantity, price) {
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
