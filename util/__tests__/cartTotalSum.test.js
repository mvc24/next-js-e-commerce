import { expect, test } from '@jest/globals';
import { cartTotalSum } from '../cartFunctions';

test('test get total sum for items in cart', () => {
  const cartItems = [
    {
      id: 1,
      articleNo: 'abc',
      title: 'title1',
      price: 10,
      quantity: 1,
    },
    {
      id: 2,
      articleNo: 'abc',
      title: 'title2',
      price: 20,
      quantity: 2,
    },
  ];

  expect(cartTotalSum(cartItems)).toBe(50);
});
