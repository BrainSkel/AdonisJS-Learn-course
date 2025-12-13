import type { HttpContext } from '@adonisjs/core/http'
import { createArticleSchema } from '#validators/create_article';
import Article from '#models/article';

export default class ArticlesController {

    public async index({ view }: HttpContext) {
        const articles = await Article.all();
        return view.render('pages/news/view', {articles},);
    }
        public async show({view, params}: HttpContext) {
        const articles = await Article.findBy('slug', params.slug);
        return view.render('pages/news/show', {articles});
    }

    public create({ view }: HttpContext) {
        return view.render('pages/news/create', { title: 'Create Article' });
    }

    public async store({ response, request }: HttpContext) {

            const payload = await request.validateUsing(createArticleSchema);
            await Article.create(payload);
            // await db.table('articles').insert({
            //     ... payload,
            //     slug:payload.title.replace(/\s+/g, '-').toLowerCase() + '-' + Date.now(),
            // });
        return response.redirect().back();

    }


    public async edit({ view, params }: HttpContext) {
        const article = await await Article.findBy('slug', params.slug);
        return view.render('pages/news/edit', { article });
    }


    public async update( {request, response, params}: HttpContext) {
        const payload = await request.validateUsing(createArticleSchema);
        await Article.query().where('slug', params.slug).update(payload);
        return response.redirect().back();
    }

    public async destroy({ params, response }: HttpContext) {
        const article = await Article
            .query()
            .where('slug', params.slug)
            .firstOrFail();

        await article.delete();
        return response.redirect().back();
    }
    

}