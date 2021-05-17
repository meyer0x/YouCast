import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Users extends BaseSchema {
  protected tableName = 'users'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').primary()

      table.string('first_name', 150).notNullable()

      table.string('name', 150).notNullable()

      table.string('country', 5).notNullable()

      table.string('email', 255).notNullable().unique()

      table.string('password', 180).notNullable()

      table.timestamps(true)
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
