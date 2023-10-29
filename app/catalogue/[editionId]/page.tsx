import Image from 'next/image';
import { notFound } from 'next/navigation';
import { getEditionsWithComposersById } from '../../../database/items';
import paisible_page_2 from '../../../public/images/paisible_Page_2.png';
import AddItem from './AddItem';

export type Props = {
  params: {
    editionId: number;
  };
};

export async function generateMetadata(props: Props) {
  const singleEdition = await getEditionsWithComposersById(
    props.params.editionId,
  );

  return {
    title: singleEdition ? singleEdition.title : '',
  };
}

export default async function EditionPage(props: Props) {
  const singleEdition = await getEditionsWithComposersById(
    props.params.editionId,
  );
  console.log('singleEdition in single product page', singleEdition);
  console.log(
    'length of singleEdition.composers',
    singleEdition?.composers?.length,
  );

  // console.log('info single edition', singleEdition?.composers);
  console.log('props.params.editionId in single edition page', props);
  if (!singleEdition) {
    return notFound();
  }

  /* {return () => {
      if (!singleEdition.composers) {
        return <div>someCase</div>;
      } else {
        return <div>catch all</div>;
      }
    } */

  return (
    <div>
      <div className="information">
        <h1 className="title">{singleEdition.title}</h1>
        <h2 className="supplementaryTitle">
          {singleEdition.supplementaryTitle}
        </h2>
        <div className="composers">
          {!singleEdition.composers
            ? ''
            : singleEdition.composers.map((composer, index) => {
                console.log('index in map', index);
                return (
                  <span key={`composer-id${composer.id}`}>
                    {composer.firstAbbreviation} {composer.lastName}
                    {singleEdition.composers?.length === index + 1 ? '' : ', '}
                  </span>
                );
              })}
        </div>
        <p>{singleEdition.format === null ? '' : singleEdition.format}</p>
      </div>
      <div className="productImage">
        <Image
          data-test-id="product-image"
          src={paisible_page_2}
          alt="a title page"
          height={240}
        />
      </div>
      <div className="price">
        <span>€ </span>
        <span data-test-id="product-price">{singleEdition.price}</span>
      </div>
      <div className="addItemButton">
        <AddItem editionId={props.params.editionId} />
      </div>
    </div>
  );
}
