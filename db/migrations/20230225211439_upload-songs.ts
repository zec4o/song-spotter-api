import { Knex } from 'knex'

export async function up(knex: Knex): Promise<void> {
  await knex.schema.createTable('songs', (table) => {
    table.uuid('id').primary()
    table.text('title').notNullable()
    table.text('author').notNullable()
    table.integer('duration').notNullable()
    table.text('uploaded_at')
    table.uuid('session_id').after('id').index()
  })
}

export async function down(knex: Knex): Promise<void> {
  await knex.schema.dropTable('songs')
}
