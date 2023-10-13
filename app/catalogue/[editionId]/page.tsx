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

  if (!singleEdition) {
    return notFound();
  }

  return (
    <div>
      <div className="information">
        <h1 className="title">{singleEdition.title}</h1>
        <h2 className="supplementaryTitle">
          {singleEdition.supplementaryTitle}
        </h2>
        <div className="composers">
          {singleEdition.firstName}
          Composer, maybe I need a component
        </div>
        <p>{singleEdition.materials}</p>
      </div>
      <div className="productImage">
        <Image src={paisible_page_2} alt="a title page" height={240} />
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
