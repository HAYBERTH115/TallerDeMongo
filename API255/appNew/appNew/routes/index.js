// const routerComments = require('./routesComments');
// const routerMovies = require('./routesMovies');
const routerInsumosArray= require('./routesSessions');
const routerFicha_tecnica = require('./routesTheaters');
const routerInsumos = require('./routesUsers');

function routerApi(app){
    // app.use('/comments', routerComments);//La app que creamos con appexpress va a asociar "movies" con el controlador routesMovies
    // app.use('/movies', routerMovies);
    app.use('/insumosarray', routerInsumosArray);
    app.use('/fichatecnica', routerFicha_tecnica);
    app.use('/insumos', routerInsumos);
}

module.exports = routerApi;