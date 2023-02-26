import { Knex } from 'knex'

export async function up(knex: Knex): Promise<void> {
  await knex.schema.alterTable('songs', (table) => {
    table.dropColumn('updated_at')
  })
}

export async function down(knex: Knex): Promise<void> {
  await knex.schema.alterTable('songs', (table) => {
    table.text('updated_at')
  })
}
