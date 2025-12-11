/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import ArticlesController from '#controllers/articles_controller';
import router from '@adonisjs/core/services/router'
import db from '@adonisjs/lucid/services/db'

router.on('/').render('pages/home')


// router.get("/news", async (ctx) => {
//   return new ArticlesController().view(ctx);
// }).as("news.view");

router.get("/news", [ArticlesController, "view"]).as("news.view");

// router.post("/news", ( {request, response} ) => {
//     const { email, password } = request.body();
//     console.log(email, password);
//     //return {email, password};
//     return response.redirect().toPath('/news');
// }).as("news.create");

router.get("/news/create", [ArticlesController, "create"]).as("news.create");

 router.patch("/news/:id", ( {params} ) => {
    console.log(params);
     return {params};
 }).as("news.update");

 router.delete("/news/:id", ( {params} ) => {
    return {params};
  }).where("id", {
    match: /^[0-9]+$/,
    cast: (id) => Number(id),
  }).as("news.delete");


  //named routes
//.as("name")




// router.get('/news',({ view }) => {
//      return view.render('pages/news')
// });

// router.get("/", async ({ view }) => {
//   return "hello world";
// });