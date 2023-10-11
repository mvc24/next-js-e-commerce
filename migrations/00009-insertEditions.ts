import { Sql } from 'postgres';
import { editions } from '../database/tablesJSON/editions';

export async function up(sql: Sql) {
  for (const edition of editions) {
    await sql`
      INSERT INTO editions
        (article_no, title, supplementary_title, price, material_id, category_id, instrument_no)
      VALUES
        (${edition.articleNo}, ${edition.title}, ${edition.supplementaryTitle},${edition.price}, ${edition.materialId}, ${edition.categoryId}, ${edition.instrumentNo} )
  `;
  }
}

export async function down(sql: Sql) {
  for (const edition of editions) {
    await sql`
      DELETE FROM editions WHERE id = ${edition.id}
    `;
  }
}
