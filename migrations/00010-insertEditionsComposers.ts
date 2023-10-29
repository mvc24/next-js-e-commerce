import { Sql } from 'postgres';
import { editionsComposers } from '../database/tablesJSON/editions_composers';

export async function up(sql: Sql) {
  for (const editionComposer of editionsComposers) {
    await sql`
      INSERT INTO editions_composers
        (edition_id, article_no, composer_id)
      VALUES
        (${editionComposer.editionId}, ${editionComposer.articleNo}, ${editionComposer.composerId} )
  `;
  }
}

export async function down(sql: Sql) {
  for (const editionComposer of editionsComposers) {
    await sql`
      DELETE FROM editions_composers WHERE id = ${editionComposer.id}
    `;
  }
}
