angular.module('finalProject')
  .factory('Organism', Organism);

Organism.$inject = ['$resource', 'API_URL'];
function Organism($resource, API_URL) {
  return new $resource(`${API_URL}/organisms/:id`, { id: '@id' }, {
    update: { method: 'PUT' }
  });
}
