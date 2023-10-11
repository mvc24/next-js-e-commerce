import { Sql } from 'postgres';

export type Edition = {
  id: number;
  articleNo: string;
  title: string;
  supplementaryTitle: string | null; // could be null
  price: number;
  materialId: number | null; // could be null
  categoryId: number;
  instrumentNo: number;
};

export async function up(sql: Sql) {
  await sql`
    CREATE TABLE editions(
      id integer PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
      article_no varchar(10) NOT NULL,
      title varchar(300) NOT NULL,
      supplementary_title varchar(300),
      price integer NOT NULL,
      material_id integer REFERENCES materials (id),
      category_id integer NOT NULL REFERENCES categories (id),
      instrument_no integer NOT NULL
    )`;
}

export async function down(sql: Sql) {
  await sql`
    DROP TABLE editions
    `;
}
