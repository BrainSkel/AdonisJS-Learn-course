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


router.on('/').render('pages/home');

/* News */
router.get("/news", [ArticlesController, "view"]).as("news.view");
router.get("/news/create", [ArticlesController, "create"]).as("news.create");
router.post("/news", [ArticlesController, "store"]).as("news.store");

router.get("/news/:slug/edit", [ArticlesController, "edit"]).as("news.edit");

router.patch("/news/:slug", [ArticlesController, "update"]).as("news.update");

router.delete("/news/:slug", [ArticlesController, "delete"]).as("news.delete");

  //named routes
//.as("name")




// router.get('/news',({ view }) => {
//      return view.render('pages/news')
// });

// router.get("/", async ({ view }) => {
//   return "hello world";
// });