/**
 * Route Mappings
 * (sails.config.routes)
 *
 * Your routes tell Sails what to do each time it receives a request.
 *
 * For more information on configuring custom routes, check out:
 * https://sailsjs.com/anatomy/config/routes-js
 */

module.exports.routes = {

  /***************************************************************************
  *                                                                          *
  * Make the view located at `views/homepage.ejs` your home page.            *
  *                                                                          *
  * (Alternatively, remove this and add an `index.html` file in your         *
  * `assets` directory)                                                      *
  *                                                                          *
  ***************************************************************************/

  'GET /404': {view: '404'},

  '/': { view: 'pages/homepage' },
  'GET /user/login': {view: 'pages/user/login'},
  'POST /user/login': 'UserController.login',
  'GET /personaltrainer/login': {view: 'pages/personaltrainer/login'},
  'POST /personaltrainer/login': 'PersonalTrainerController.login',
  '/user/logout': 'UserController.logout',
  '/personaltrainer/logout': 'PersonalTrainerController.logout',

  'GET /user/register': {view: 'pages/user/register'},
  'POST /user/register': 'UserController.register',
  'GET /personaltrainer/register': {view: 'pages/personaltrainer/register'},
  'POST /personaltrainer/register': 'PersonalTrainerController.register',

  'GET /personaltrainer/createplan': {view: 'pages/personaltrainer/createplan'},
  'POST /personaltrainer/createplan': {view: 'pages/personaltrainer/createplan'},

  'GET /personaltrainer/info': {view: 'pages/personaltrainer/info'},
  'GET /user/info': {view: 'pages/user/info'},

  'GET /membership/create': 'UserController.getAllUsers',
  'POST /membership/create': 'MemberShipController.create',

  /***************************************************************************
  *                                                                          *
  * More custom routes here...                                               *
  * (See https://sailsjs.com/config/routes for examples.)                    *
  *                                                                          *
  * If a request to a URL doesn't match any of the routes in this file, it   *
  * is matched against "shadow routes" (e.g. blueprint routes).  If it does  *
  * not match any of those, it is matched against static assets.             *
  *                                                                          *
  ***************************************************************************/


};
