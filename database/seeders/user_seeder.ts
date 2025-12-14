import { BaseSeeder } from '@adonisjs/lucid/seeders'
import User from '#models/user'

export default class extends BaseSeeder {
    public async run () {
        await User.create({
          fullName: 'Test User',
          email: 'test@example.com',
          password: 'secret',   // will be hashed by beforeSave hook
        })
      }
}