import type { HttpContext } from '@adonisjs/core/http'
import db from '@adonisjs/lucid/services/db'
import { createArticleSchema } from '#validators/create_article';

export default class ArticlesController {
    public async view({ view }: HttpContext) {
        const articles = await db.from('articles').select('*');
        return view.render('pages/news/view', {articles},);
    }

    public create({ view }: HttpContext) {
        return view.render('pages/news/create', { title: 'Create Article' });
    }

    public async store({ response, request }: HttpContext) {

            const payload = await createArticleSchema.validate(request.all());
            await db.table('articles').insert({
                ... payload,
                slug:payload.title,
            });
        return response.redirect().back();

    }


    public async edit({ view, params }: HttpContext) {
        const { slug } = params;
        const article = await db.from("articles").where("slug", slug).first();
        return view.render('pages/news/edit', { article });
    }

    public update() {
        
    }
}