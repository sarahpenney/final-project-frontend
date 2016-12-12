angular.module('finalProject')
  .config(Router);

Router.$inject = ['$stateProvider', '$urlRouterProvider'];
function Router($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('usersIndex', {
      url: '/users',
      templateUrl: '/templates/usersIndex.html',
      controller: 'UsersIndexController as usersIndex'
    })
    .state('register', {
      url: '/register',
      templateUrl: '/templates/register.html',
      controller: 'RegisterController as register'
    })
    .state('login', {
      url: '/login',
      templateUrl: '/templates/login.html',
      controller: 'LoginController as login'
    })
    .state('usersShow', {
      url: '/users/:id',
      templateUrl: 'templates/usersShow.html',
      controller: 'UsersShowController as usersShow'
    })
    .state('usersEdit', {
      url: '/users/:id/edit',
      templateUrl: 'templates/usersEdit.html',
      controller: 'UsersEditController as usersEdit'
    })
    .state('organismsIndex', {
      url: '/organisms',
      templateUrl: 'templates/organismsIndex.html',
      controller: 'OrganismsIndexController as organismsIndex'
    })
    .state('organismsShow', {
      url: '/organisms/:id',
      templateUrl: 'templates/organismsShow.html',
      controller: 'OrganismsShowController as organismsShow'
    })
    .state('papersShow', {
      url: '/papers/:id',
      templateUrl: 'templates/papersShow.html',
      controller: 'PapersShowController as papersShow'
    })
    .state('papersEdit', {
      url: '/papers/:id/edit',
      templateUrl: 'templates/papersEdit.html',
      controller: 'PapersEditController as papersEdit'
    })
    .state('papersIndex', {
      url: '/papers',
      templateUrl: 'templates/papersIndex.html',
      controller: 'PapersIndexController as papersIndex'
    });

  $urlRouterProvider.otherwise('/organisms');
}
