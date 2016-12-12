angular.module('finalProject')
  .factory('Paper', Paper);

Paper.$inject = ['$resource', 'API_URL'];
function Paper($resource, API_URL) {
  return new $resource(`${API_URL}/papers/:id`, { id: '@id' }, {
    update: { method: 'PUT' }
  });
}
