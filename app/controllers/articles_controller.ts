import type { HttpContext } from '@adonisjs/core/http'
import db from '@adonisjs/lucid/services/db'

export default class ArticlesController {
    public async view({ view }: HttpContext) {
        const articles = await db.from('articles').select('*');
        return view.render('pages/news/news', {articles});
    }

    public create({ view }: HttpContext) {
        return view.render('pages/news/create');
    }

    public async store({ response, request }: HttpContext) {
        const { title, content, image } = request.only(['title', 'content', 'image']);
        await db.table('articles').insert({ title, content, image, created_at: new Date(), updated_at: new Date() });
        return response.redirect().back();
    }
}