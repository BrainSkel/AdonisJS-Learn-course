import { DateTime } from 'luxon'
import { BaseModel, beforeCreate,column } from '@adonisjs/lucid/orm'
import string from '@adonisjs/core/helpers/string'

export default class Article extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare title: string

  @column()
  declare content: string
  
  @column()
  declare image: string | null

  @column()
  declare slug: string

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime


  @beforeCreate()
  public static async createslug(article: Article) {

    const base = await (article.title ?? 'article')
    const slugBase = string.slug(base)
    article.slug = `${slugBase}-${Date.now()}`
  }
}

