angular.module('finalProject', ['ngResource', 'ui.router', 'satellizer'])
  .constant('API_URL', 'https://organisms-api.herokuapp.com/api')
  .config(Auth);

Auth.$inject = ['$authProvider', 'API_URL'];
function Auth($authProvider, API_URL) {
  $authProvider.loginUrl = `${API_URL}/login`;
  $authProvider.signupUrl = `${API_URL}/register`;

  $authProvider.tokenPrefix = '';
}
