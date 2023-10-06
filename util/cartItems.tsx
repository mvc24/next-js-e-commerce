export function numberOfItemsInCart(addItemsToCart) {
  console.log('number', typeof addItemsToCart);
  if (addItemsToCart === undefined) {
    return 0;
  }

  const itemCount = addItemsToCart.reduce(
    (accumulator, currentValue) => accumulator + currentValue.quantity,
    0,
  );

  return itemCount;
}

export function calculateTotalPrice(addItemsToCart) {
  console.log('calculator', typeof addItemsToCart);

  // right now this if statement prevents the code from breaking
  if (addItemsToCart === undefined) {
    return 0;
  }

  const totalPrice = addItemsToCart.reduce(
    (accumulator, currentValue) =>
      accumulator + currentValue.price * currentValue.quantity,
    0,
  );

  return totalPrice;
}
