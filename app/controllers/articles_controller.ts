import type { HttpContext } from '@adonisjs/core/http'
import db from '@adonisjs/lucid/services/db'

export default class ArticlesController {
    public async view({ view }: HttpContext) {
        const articles = await db.from('articles').select('*');
        return view.render('pages/news/news', {articles});
    }

    public async create({ view }: HttpContext) {
        return view.render('pages/news/create');
    }
}