import { notFound } from 'next/navigation';
import { getEditionsWithComposersById } from '../../../database/items';

type Props = {
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

  if (!singleEdition) {
    return notFound();
  }

  return (
    <>
      <div>
        This is a single product page
        <h1>Single</h1>
      </div>
      page
    </>
  );
}
