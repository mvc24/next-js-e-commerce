import { Sql } from 'postgres';

export type Material = {
  id: number;
  format: string | null;
};

export async function up(sql: Sql) {
  await sql`
    CREATE TABLE materials(
      id integer PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
      format varchar(100)

    )`;
}

export async function down(sql: Sql) {
  await sql`
    DROP TABLE materials
    `;
}
