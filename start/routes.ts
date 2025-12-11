/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import router from '@adonisjs/core/services/router'
import db from '@adonisjs/lucid/services/db'

router.on('/').render('pages/home')


router.get("/news", async({ view }) => {
  // fetch data from database
    const articles = await db.from('articles').select('*');
    //return articles;
    return view.render('pages/news', {articles});
}).as("news.view");

router.post("/news", ( {request, response} ) => {
    const { email, password } = request.body();
    console.log(email, password);
    //return {email, password};
    return response.redirect().toPath('/news');
}).as("news.create");


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