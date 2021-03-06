angular.module('finalProject')
.controller('MainController', MainController);

MainController.$inject = ['$auth', '$state', '$rootScope'];
function MainController($auth, $state, $rootScope) {
  const main = this;

  main.isLoggedIn = $auth.isAuthenticated;
  main.message = null;
  main.cssStyle = 'new';

  function logout() {
    $auth.logout()
    .then(() => {
      $state.go('login');
    });
  }

  function toggleStyle() {
    main.cssStyle = main.cssStyle === 'old' ? 'new' : 'old';
  }

  const protectedStates = ['usersEdit', 'usersNew'];

  function secureState(e, toState) {
    main.message = null;
    console.log(toState);
    if(!$auth.isAuthenticated() && protectedStates.includes(toState.name)) {
      e.preventDefault();
      $state.go('login');
      main.message = 'You must be logged in to go there!';

    }

  }

  $rootScope.$on('$stateChangeStart', secureState);

  main.logout = logout;
  main.toggleStyle = toggleStyle;
}
