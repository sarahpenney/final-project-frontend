angular.module('finalProject', ['ngResource', 'ui.router', 'satellizer'])
  .constant('API_URL', 'http://localhost:3000/api')
  .config(Auth)
  .filter('dasherize', dasherize);

Auth.$inject = ['$authProvider', 'API_URL'];
function Auth($authProvider, API_URL) {
  $authProvider.loginUrl = `${API_URL}/login`;
  $authProvider.signupUrl = `${API_URL}/register`;

  $authProvider.tokenPrefix = '';
}

function dasherize() {
  return function (input) {
    return input.replace(/ /g, '-');
  };
}
