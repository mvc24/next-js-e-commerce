import Image from 'next/image';
import Link from 'next/link';
import { getEditionsWithComposers } from '../../database/items';
import paisible_page_2 from '../../public/images/paisible_Page_2.png';

export const metadata = {
  title: 'Catalogue',
  description: 'The current Oriana Music Catalogue',
};

export default async function Catalogue() {
  // const editions = await getEditionsWithComposers();
  // console.log('editionsNames', editions);

  const editions = await getEditionsWithComposers();
  editions.forEach((c) => console.log(c.title, c.composers));
  return (
    <div>
      <h1>Oriana Music Catalogue</h1>
      {editions.map((edition) => {
        return (
          <div key={`edition-div${edition.id}`}>
            <Link href={`/catalogue/${edition.id}`}>
              <div>
                {edition.composerFirstName} {edition.composerLastName}
                <br />
                {edition.title}
                <br />
                <div className="productImage">
                  <Image
                    src={paisible_page_2}
                    alt="a title page"
                    height={240}
                  />
                </div>
              </div>
            </Link>
          </div>
        );
      })}
    </div>
  );
}
