import { Sql } from 'postgres';

export type Composer = {
  id: number;
  lastName: string;
  firstName: string | null; // nullable
  firstAbbreviation: string | null; // nullable
};

export async function up(sql: Sql) {
  await sql`
    CREATE TABLE composers(
      id integer PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
      last_name varchar(100) NOT NULL,
      first_name varchar(100),
      first_abbreviation varchar(10)

    )`;
}

export async function down(sql: Sql) {
  await sql`
    DROP TABLE composers
    `;
}
