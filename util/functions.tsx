import { EditionCompleteInformation } from '../database/items';
import { Composer } from '../migrations/00003-createTableComposers';

// change file name
// names of composers from array of IDs

export type ComposerNamesFromID = {
  editionId: number; // from EditionCompleteInformation
  composerId: number; // from Composer --> find
  lastName: string;
  firstName: string | null;
  firstAbbreviation: string | null;
};

// editionsComposers are needed in the function

/* export function composerNamesFromArray(){
  const editionsComposersArray =

  // for each composer Id inside the composersArray
  // return name

  return

} */

// functioning cart sum function
// cartItems Type needs to be passed from
/* export function cartTotalSum(cartItems) {
  let sum = 0;
  cartItems.forEach((item) => {
    sum += item.price * item.quantity;
  });
  return sum;
} */

/* export function calculateTotalPrice() {
  const addItemsToCart = addToCart();
  const itemsToCalculate = addItemsToCart;
  const totalPrice = itemsToCalculate.reduce(
    (accumulator, currentValue) =>
      accumulator + currentValue.price * currentValue.quantity,
    0,
  );

  return totalPrice; */
