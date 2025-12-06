/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import router from '@adonisjs/core/services/router'

router.on('/').render('pages/home')


router.on("/news").render("pages/news");



// router.get('/news',({ view }) => {
//      return view.render('pages/news')
// });

// router.get("/", async ({ view }) => {
//   return "hello world";
// });