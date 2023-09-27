import Link from 'next/link';
import { getItems } from '../../database/fakeCatalogue';

export const metadata = {
  title: 'Catalogue',
  description: 'The current Oriana Music Catalogue',
};

export default function Catalogue() {
  const items = getItems();
  return (
    <div>
      <h1>Oriana Music Catalogue</h1>
      {items.map((item) => {
        return (
          <div key={`item-div${item.id}`}>
            <Link href={`/catalogue/${item.id}`}>
              <div>
                {item.composerFirstName} {item.composerLastName}
                <br />
                {item.title}
                <br />
              </div>
            </Link>
          </div>
        );
      })}
    </div>
  );
}
