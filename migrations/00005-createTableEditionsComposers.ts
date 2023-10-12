import { Sql } from 'postgres';
import { Composer } from './00003-createTableComposers';

export type EditionsComposers = {
  id: number;
  editionId: number;
  articleNo: string;
  composerId: number | null;
};

export type JsonAgg = Composer[];

export type EditionsComposersWithJsonAgg = {
  id: number;
  editionId: number;
  articleNo: string;
  composerIdArray: JsonAgg | null;
};

export async function up(sql: Sql) {
  await sql`
    CREATE TABLE editions_composers(
      id integer PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
      article_no varchar(10) NOT NULL,
      edition_id integer NOT NULL REFERENCES editions (id),
      composer_id integer REFERENCES composers (id)

    )`;
}

export async function down(sql: Sql) {
  await sql`
    DROP TABLE editions_composers
    `;
}
