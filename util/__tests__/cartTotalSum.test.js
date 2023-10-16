// Unit: Test function for updating quantity in item of cookie (eg. adding an item to the cart that already exists)
import { expect, test } from '@jest/globals';
import { numberOfItemsInCart } from '../cartFunctions';

test('test get number items in cart', () => {
  const cookieInformation = [
    {
      id: 1,
      quantity: 1,
    },
    {
      id: 2,
      quantity: 2,
    },
  ];

  expect(numberOfItemsInCart(cookieInformation)).toEqual(3);
});
