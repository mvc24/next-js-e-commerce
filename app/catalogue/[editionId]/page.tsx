import Image from 'next/image';
import { notFound } from 'next/navigation';
import { getEditionsWithComposersById } from '../../../database/items';
import paisible_page_2 from '../../../public/images/paisible_Page_2.png';
import AddItem from './AddItem';

type Props = {
  params: {
    editionId: number;
  };
  quantity: number;
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
    'length of singleEdition.editionComposers',
    singleEdition?.editionComposers?.length,
  );

  // console.log('info single edition', singleEdition?.editionComposers);
  console.log('props.params.editionId in single edition page', props);
  if (!singleEdition) {
    return notFound();
  }

  /* {return () => {
      if (!singleEdition.editionComposers) {
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
          {
            !singleEdition.editionComposers
              ? ''
              : singleEdition.editionComposers.map((composer, index) => {
                  console.log('index in map', index);
                  return (
                    <span key={`composer-id${composer.composerId}`}>
                      {composer.firstAbbreviation} {composer.lastName}
                      {singleEdition.editionComposers?.length === index + 1
                        ? ''
                        : ', '}
                    </span>
                  );
                })
            // : singleEdition.editionComposers.map((composers) => {})
          }
        </div>
        <p>{singleEdition.materials}</p>
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
