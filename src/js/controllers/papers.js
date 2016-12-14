angular.module('finalProject')
  .controller('PapersIndexController', PapersIndexController)
  .controller('PapersShowController', PapersShowController)
  .controller('PapersCreateController', PapersCreateController)
  .controller('PapersEditController', PapersEditController);

PapersIndexController.$inject = ['Paper', '$state'];
function PapersIndexController(Paper, $state) {
  const papersIndex = this;

  const params = {};

  if($state.params.organismId) {
    params.organism_id = $state.params.organismId;
  }

  papersIndex.all = Paper.query(params);

}

PapersShowController.$inject = ['Paper', '$state', '$auth'];
function PapersShowController(Paper, $state, $auth) {
  const papersShow = this;
  papersShow.currentUser = $auth.getPayload();
  papersShow.paper = Paper.get($state.params);

  function deletePaper() {
    papersShow.paper.$remove(() => {
      $state.go('papersIndex');
    });
  }

  papersShow.deletePaper = deletePaper;
  papersShow.isLoggedIn = $auth.isAuthenticated;
}


PapersEditController.$inject = ['Paper', '$state', '$auth'];
function PapersEditController(Paper, $state, $auth) {
  const papersEdit = this;

  papersEdit.paper = Paper.get($state.params);
  papersEdit.currentUser = $auth.getPayload();

  function update() {
    if(papersEdit.currentUser.id === papersEdit.paper.user.id) {
      papersEdit.paper.$update(() => {
        $state.go('papersShow', $state.params);
      });
    }
  }

  this.update = update;

}


PapersCreateController.$inject = ['Paper', '$state', '$auth'];
function PapersCreateController(Paper, $state, $auth) {
  const papersCreate = this;

  papersCreate.paper = {};

  function create(){
    papersCreate.paper.user_id = $auth.getPayload().id;
    Paper.save(papersCreate.paper);
    $state.go('papersIndex');
  }
  papersCreate.create = create;
}
