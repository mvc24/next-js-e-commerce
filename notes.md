const cartCookie = getCookie('cart');
const cart = !cartCookie ? [] : parseJson(cartCookie);
const cartToUpdate = cartCookie.find((cartItem) => {
return cartItem.id === singleItem.id;
});
