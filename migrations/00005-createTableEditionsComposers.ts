import { Sql } from 'postgres';

export type EditionsComposers = {
  id: number;
  editionId: number;
  articleNo: string;
  composerId: number | null;
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
