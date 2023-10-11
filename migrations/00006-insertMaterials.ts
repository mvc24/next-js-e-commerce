import { Sql } from 'postgres';
import { materials } from '../database/tablesJSON/materials';

export async function up(sql: Sql) {
  for (const material of materials) {
    await sql`
      INSERT INTO materials
        (format)
      VALUES
        (${material.format})
  `;
  }
}

export async function down(sql: Sql) {
  for (const material of materials) {
    await sql`
      DELETE FROM materials WHERE id = ${material.id}
    `;
  }
}
