import 'server-only';
import { cache } from 'react';
import { Composer } from '../migrations/00003-createTableComposers';
import { Edition } from '../migrations/00004-createTableEditions';
import { EditionsComposers } from '../migrations/00005-createTableEditionsComposers';
import { EditionInfoForCart } from '../util/functions';
import { sql } from './connect';

export const getEditions = cache(async () => {
  const editions = await sql<Edition[]>`
    SELECT * FROM editions
  `;
  return editions;
});

export const getComposers = cache(async () => {
  const composers = await sql<Composer[]>`
    SELECT * FROM composers
  `;
  return composers;
});

export const getComposersById = cache(async (id: number) => {
  const [composer] = await sql<Composer[]>`
    SELECT
      *
    FROM
      composers
    WHERE
      id = ${id}
  `;
  return composer;
});

export const getMaterials = cache(async () => {
  const materials = await sql<{ id: number; format: string | null }[]>`
    SELECT * FROM materials
  `;
  return materials;
});

export const getCategories = cache(async () => {
  const categories = await sql<{ id: number; name: string | null }[]>`
    SELECT * FROM categories
  `;
  return categories;
});

export const getEditionsComposers = cache(async () => {
  const editionsComposers = await sql<EditionsComposers[]>`
    SELECT * FROM editions_composers
  `;
  return editionsComposers;
});

export type EditionCompleteInformation = {
  editionId: number;
  articleNo: string;
  title: string;
  supplementaryTitle: string | null;
  price: number;
  category: string;
  materials: string | null;
  editionComposers:
    | [
        {
          composerId: number;
          lastName: string;
          firstName: string | null;
          firstAbbreviation: string | null;
        },
      ]
    | null;
};

export const getEditionsWithComposers = cache(async () => {
  const editions = await sql<EditionCompleteInformation[]>`
    SELECT
      editions.id,
      editions.article_no,
      editions.title,
      editions.supplementary_title,
      editions.price,
      categories.name,
      materials.format,
      editions.instrument_no,
      (
        SELECT

          json_agg(composers)
        FROM
          editions_composers
        INNER JOIN
          composers ON editions_composers.composer_id = composers.id
        WHERE
          editions_composers.edition_id = editions.id

      ) AS composers

    FROM
      editions
    INNER JOIN
      categories ON categories.id = editions.category_id
    INNER JOIN
      materials ON materials.id = editions.material_id

  `;
  return editions;
});

export const getEditionsWithComposersById = cache(async (id: number) => {
  const [edition] = await sql<EditionCompleteInformation[]>`
    SELECT
      editions.id,
      editions.article_no,
      editions.title,
      editions.supplementary_title,
      editions.price,
      categories.name,
      materials.format,
      editions.instrument_no,
      (
        SELECT

          json_agg(composers)
        FROM
          editions_composers
        INNER JOIN
          composers ON editions_composers.composer_id = composers.id
        WHERE
          editions_composers.edition_id = editions.id

      ) AS edition_composers

    FROM
      editions
    INNER JOIN
      categories ON categories.id = editions.category_id
    INNER JOIN
      materials ON materials.id = editions.material_id


    WHERE
      editions.id = ${id}

  `;
  return edition;
});
