angular.module('finalProject')
.controller('OrganismsIndexController', OrganismsIndexController)
.controller('OrganismsShowController', OrganismsShowController)
.controller('OrganismsEditController', OrganismsEditController);

OrganismsIndexController.$inject = ['Organism'];
function OrganismsIndexController(Organism) {
  const organismsIndex = this;
  organismsIndex.infoVisible = false;

  organismsIndex.all = Organism.query();

  function toggleInfo(organism) {
    // if (organism === organismsIndex.organism) {
    //   organismsIndex.infoVisible = false;
    //   organismsIndex.organism = null;
    // } else {
    organismsIndex.infoVisible = true;
    organismsIndex.organism = organism;
    // }
  }

  organismsIndex.toggleInfo = toggleInfo;

}



OrganismsShowController.$inject = ['Organism', '$state', '$auth'];
function OrganismsShowController(Organism, $state, $auth) {
  const organismsShow = this;

  organismsShow.organism = Organism.get($state.params);

  function deleteOrganism() {
    organismsShow.organism.$remove(() => {
      $state.go('organismsIndex');
    });
  }

  organismsShow.delete = deleteOrganism;
  organismsShow.isLoggedIn = $auth.isAuthenticated;
}


OrganismsEditController.$inject = ['Organism', '$state'];
function OrganismsEditController(Organism, $state) {
  const organismsEdit = this;

  organismsEdit.organism = Organism.get($state.params);

  function update() {
    organismsEdit.organism.$update(() => {
      $state.go('organismsShow', $state.params);
    });
  }

  this.update = update;

}
