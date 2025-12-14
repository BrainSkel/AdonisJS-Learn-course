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
import { request } from 'http';
import User from '#models/user'


router.on('/').render('pages/home');



/* News */

router.resource('news', ArticlesController).params({
  news: 'slug'  
});
// router.get("/news", [ArticlesController, "view"]).as("news.view");
// router.get("/news/create", [ArticlesController, "create"]).as("news.create");
// router.post("/news", [ArticlesController, "store"]).as("news.store");
// router.get("/news/:slug/edit", [ArticlesController, "edit"]).as("news.edit");
// router.patch("/news/:slug", [ArticlesController, "update"]).as("news.update");
// router.delete("/news/:slug", [ArticlesController, "delete"]).as("news.delete");




router.on('/login').render('pages/auth/login').as('auth.login');
router.post('/login', async ({request ,auth, response}) => {
  try {
  console.log('Login attempt')

  const email = request.input('email')
  const password = request.input('password')
  const user = await User.verifyCredentials(email, password)
  await auth.use('web').attemptedViaRemember
  console.log('User logged in successfully')
  return response.redirect("/debug-auth")
  } catch (error) {
    console.log('Login failed:', error)
    return response.redirect().back()
  }
}).as('auth.login.post');


router.get('/debug-auth', async ({ request, auth }) => {
  console.log('Incoming cookies header:', request.header('cookie'))
  console.log('Server auth.user:', auth.user)
  return auth.user ? 'logged in' : 'not logged in'
})

  //named routes
//.as("name")




// router.get('/news',({ view }) => {
//      return view.render('pages/news')
// });

// router.get("/", async ({ view }) => {
//   return "hello world";
// });