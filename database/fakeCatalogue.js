const items = [
  {
    id: 1,
    composerFirstName: 'William',
    composerLastName: 'Lawes',
    title: 'Pavane',

    price: 10,
  },
  {
    id: 2,
    composerFirstName: 'Arcangelo',
    composerLastName: 'Corelli',
    title: 'Sonatas',
    price: 10,
  },
  {
    id: 3,
    composerFirstName: 'Jacques',
    composerLastName: 'Paisible',
    title: 'Aires',
    price: 32,
  },
  {
    id: 4,
    composerFirstName: 'William',
    composerLastName: 'Byrd',
    title: 'Lullaby',
    price: 14,
  },
  {
    id: 5,
    composerFirstName: 'Alfonso',
    composerLastName: 'Ferrabosco I',
    title: 'Fantasy No. 2',
    price: 15,
  },
];

export function getItems() {
  return items;
}

export function getItem(id) {
  return items.find((item) => item.id === id);
}
