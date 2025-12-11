import type { HttpContext } from '@adonisjs/core/http'
import db from '@adonisjs/lucid/services/db'
import vine from '@vinejs/vine';

export default class ArticlesController {
    public async view({ view }: HttpContext) {
        const articles = await db.from('articles').select('*');
        return view.render('pages/news/news', {articles});
    }

    public create({ view }: HttpContext) {
        return view.render('pages/news/create');
    }

    public async store({ response, request }: HttpContext) {
        const createArticleSchema =vine.compile(vine.object({
            title: vine.string(),
            content: vine.string(),
            image: vine.string(),
        }));

        try {
            const payload = await request.validateUsing(createArticleSchema);
            await db.table('articles').insert({
                ... payload,
                slug:payload.title,
            });
        return response.redirect().back();
        } catch (error) {
            response.badRequest(error.messages);
        }

    }
}