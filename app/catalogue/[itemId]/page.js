import { notFound } from 'next/navigation';
import { getItem } from '../../../database/fakeCatalogue';
import AddItem from './AddItem';

export function generateMetadata({ params }) {
  const singleItem = getItem(Number(params.itemId));
  return {
    title: singleItem ? singleItem.title : '',
  };
}

export default function ItemPage(props) {
  const singleItem = getItem(Number(props.params.itemId));

  if (!singleItem) {
    return notFound();
  }

  return (
    <div>
      This is a single product page
      <h1>
        {singleItem.composerFirstName} {singleItem.composerLastName} |{' '}
        {singleItem.title}
        <div>This will be an image</div>
        <p>this is some information about {singleItem.title}</p>
        <div>
          <span>€ </span>
          <span data-test-id="product-price">{singleItem.price}</span>
          <AddItem itemId={props.params.itemId} />
        </div>
      </h1>
    </div>
  );
}
