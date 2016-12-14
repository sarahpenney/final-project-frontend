angular.module('finalProject')
  .controller('RegisterController', RegisterController)
  .controller('LoginController', LoginController);

RegisterController.$inject = ['$auth', '$state'];
function RegisterController($auth, $state) {

  const register = this;

  register.user = {};

  function submit() {
    console.log('Yo',register.user);
    $auth.signup(register.user)
      .then(() => {
        console.log('pew pew');
        $state.go('login');
      });
  }

  register.submit = submit;
}

LoginController.$inject = ['$auth', '$state'];
function LoginController($auth, $state) {
  const login = this;

  login.credentials = {};

  function submit() {
    $auth.login(login.credentials)
      .then(() => {
        $state.go('organismsIndex');
      });
  }

  function authenticate(provider) {
    $auth.authenticate(provider)
    .then((res) => {
      console.log(res);
    });
  }

  login.submit = submit;
  login.authenticate = authenticate;
}
