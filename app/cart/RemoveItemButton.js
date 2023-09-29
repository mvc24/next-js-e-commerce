'use client';

import { deleteItem } from './actions';

export default function RemoveItemButton(props) {
  return (
    <button
      onClick={async () => {
        await deleteItem(props.itemId);
      }}
    >
      Remove item
    </button>
  );
}
