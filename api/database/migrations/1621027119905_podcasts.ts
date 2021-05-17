import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Podcasts extends BaseSchema {
  protected tableName = 'podcasts'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('name').notNullable().unique()
      table.string('artist').notNullable()
      table.string('link').notNullable().unique()
      table.string('image').notNullable().unique()
      table.integer('categorie').unsigned().references('id').inTable('categories')
      table.integer('episode').notNullable()
      table.timestamps(true)
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
