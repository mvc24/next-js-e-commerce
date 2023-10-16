import { expect, test } from '@jest/globals';
import { getItemsInCart } from '../cartFunctions';

test('test get items from cart', async () => {
  const cartInfoFromCookie = [
    {
      id: 1,
      quantity: 1,
    },
    {
      id: 2,
      quantity: 2,
    },
  ];

  const editions = [
    {
      id: 1,
      articleNo: 'abc',
      title: 'title1',
      supplementaryTitle: 'something',
      price: 10,
      materialId: 1,
      categoryId: 1,
      instrumentNo: 1,
    },
    {
      id: 2,
      articleNo: 'abc2',
      title: 'title2',
      supplementaryTitle: 'something',
      price: 15,
      materialId: 1,
      categoryId: 1,
      instrumentNo: 1,
    },
  ];
  expect(await getItemsInCart(cartInfoFromCookie, editions)).toEqual([
    {
      id: 1,
      title: 'title1',
      price: 10,
      quantity: 1,
    },
    {
      id: 2,
      title: 'title2',
      price: 15,
      quantity: 2,
    },
  ]);
});
