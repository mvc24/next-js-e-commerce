export function numberOfItemsInCart(addItemsToCart) {
  if (addItemsToCart === undefined) {
    return 0;
  }
  console.log('log', typeof addItemsToCart);
  const itemCount = addItemsToCart.reduce(
    (accumulator, currentValue) => accumulator + currentValue.quantity,
    0,
  );

  return itemCount;
}
