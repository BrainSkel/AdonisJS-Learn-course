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

router.post("/news", ( {request, response} ) => {
    const { email, password } = request.body();
    console.log(email, password);
    //return {email, password};
    return response.redirect().toPath('/news');
});


 router.patch("/news/:id", ( {params} ) => {
    console.log(params);
     return "patch rotue";
 });
// router.get('/news',({ view }) => {
//      return view.render('pages/news')
// });

// router.get("/", async ({ view }) => {
//   return "hello world";
// });