import { getEditions } from '../../database/items';
import { Edition } from '../../migrations/00004-createTableEditions';
import { getCookie } from '../../util/cookies';
import {
  CartItem,
  cartTotalSum,
  CookieInformation,
  getItemsInCart,
  itemSubtotal,
} from '../../util/functions';
import GoToCheckoutButton from './GoToCheckoutButton';
import RemoveItemButton from './RemoveItemButton';

export const metadata = {
  title: 'Cart',
  description: 'Your shopping cart',
};

//  const editions: EditionInfoForCart[] = getEditionInfoForCart();

export default async function Cart() {
  // database
  const editionsFromDatabase: Edition[] = await getEditions();

  // cookies
  const cookie: CookieInformation[] = await getCookie();

  // I'm calling an async function, so I need to await

  const cartItems: CartItem[] = await getItemsInCart(
    cookie,
    editionsFromDatabase,
  );

  return (
    <>
      <div>this is your cart</div>
      <div>
        {cartItems.map((edition) => {
          return (
            <div key={`item-${edition.id}`}>
              <div data-test-id={`cart-product-${edition.id}`}>
                <div>{`Title: ${edition.title}`}</div>

                <div data-test-id={`cart-product-quantity-${edition.quantity}`}>
                  {`Quantity:
                ${edition.quantity}`}
                </div>
                <div>€ {itemSubtotal(edition.price, edition.quantity)}</div>
                <RemoveItemButton itemId={edition.id} />
              </div>
            </div>
          );
        })}
        <div>Total € {cartTotalSum(cartItems)}</div>
        <GoToCheckoutButton />
      </div>
    </>
  );
}
