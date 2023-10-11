import { Sql } from 'postgres';
import { composers } from '../database/tablesJSON/composers';

export async function up(sql: Sql) {
  for (const composer of composers) {
    await sql`
      INSERT INTO composers
        (last_name, first_name, first_abbreviation)
      VALUES
        (${composer.lastName}, ${composer.firstName}, ${composer.firstAbbreviation} )
  `;
  }
}

export async function down(sql: Sql) {
  for (const composer of composers) {
    await sql`
      DELETE FROM composers WHERE id = ${composer.id}
    `;
  }
}
