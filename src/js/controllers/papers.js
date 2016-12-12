angular.module('finalProject')
  .controller('PapersIndexController', PapersIndexController)
  .controller('PapersShowController', PapersShowController)
  .controller('PapersEditController', PapersEditController);

PapersIndexController.$inject = ['Paper'];
function PapersIndexController(Paper) {
  const papersIndex = this;

  papersIndex.all = Paper.query();

}

PapersShowController.$inject = ['Paper', '$state', '$auth'];
function PapersShowController(Paper, $state, $auth) {
  const papersShow = this;

  papersShow.paper = Paper.get($state.params);

  function deletePaper() {
    papersShow.paper.$remove(() => {
      $state.go('papersIndex');
    });
  }

  papersShow.delete = deletePaper;
  papersShow.isLoggedIn = $auth.isAuthenticated;
}


PapersEditController.$inject = ['Paper', '$state'];
function PapersEditController(Paper, $state) {
  const papersEdit = this;

  papersEdit.paper = Paper.get($state.params);

  function update() {
    papersEdit.paper.$update(() => {
      $state.go('papersShow', $state.params);
    });
  }

  this.update = update;

}
