"use strict";function Auth(e,r){e.loginUrl=r+"/login",e.signupUrl=r+"/register",e.tokenPrefix=""}function dasherize(){return function(e){return e.replace(/ /g,"-")}}function RegisterController(e,r){function t(){console.log("Yo",o.user),e.signup(o.user).then(function(){console.log("pew pew"),r.go("login")})}var o=this;o.user={},o.submit=t}function LoginController(e,r){function t(){e.login(n.credentials).then(function(){r.go("papersIndex")})}function o(r){e.authenticate(r).then(function(e){console.log(e)})}var n=this;n.credentials={},n.submit=t,n.authenticate=o}function MainController(e,r,t){function o(){e.logout().then(function(){r.go("login")})}function n(t,o){l.message=null,console.log(o),!e.isAuthenticated()&&s.includes(o.name)&&(t.preventDefault(),r.go("login"),l.message="You must be logged in to go there!")}var l=this;l.isLoggedIn=e.isAuthenticated,l.message=null;var s=["usersEdit","usersNew"];t.$on("$stateChangeStart",n),l.logout=o}function Organism(e,r){return new e(r+"/organisms/:id",{id:"@id"},{update:{method:"PUT"}})}function OrganismsIndexController(e){function r(e){t.infoVisible=!0,t.organism=e}var t=this;t.infoVisible=!1,t.all=e.query(),t.toggleInfo=r}function OrganismsShowController(e,r,t){function o(){n.organism.$remove(function(){r.go("organismsIndex")})}var n=this;n.organism=e.get(r.params),n.delete=o,n.isLoggedIn=t.isAuthenticated}function OrganismsEditController(e,r){function t(){o.organism.$update(function(){r.go("organismsShow",r.params)})}var o=this;o.organism=e.get(r.params),this.update=t}function Paper(e,r){return new e(r+"/papers/:id",{id:"@id"},{update:{method:"PUT"}})}function PapersIndexController(e){var r=this;r.all=e.query()}function PapersShowController(e,r,t){function o(){n.paper.$remove(function(){r.go("papersIndex")})}var n=this;n.paper=e.get(r.params),n.delete=o,n.isLoggedIn=t.isAuthenticated}function PapersEditController(e,r){function t(){o.paper.$update(function(){r.go("papersShow",r.params)})}var o=this;o.paper=e.get(r.params),this.update=t}function Router(e,r){e.state("usersIndex",{url:"/users",templateUrl:"/templates/usersIndex.html",controller:"UsersIndexController as usersIndex"}).state("register",{url:"/register",templateUrl:"/templates/register.html",controller:"RegisterController as register"}).state("login",{url:"/login",templateUrl:"/templates/login.html",controller:"LoginController as login"}).state("usersShow",{url:"/users/:id",templateUrl:"templates/usersShow.html",controller:"UsersShowController as usersShow"}).state("usersEdit",{url:"/users/:id/edit",templateUrl:"templates/usersEdit.html",controller:"UsersEditController as usersEdit"}).state("organismsIndex",{url:"/organisms",templateUrl:"templates/organismsIndex.html",controller:"OrganismsIndexController as organismsIndex"}).state("organismsShow",{url:"/organisms/:id",templateUrl:"templates/organismsShow.html",controller:"OrganismsShowController as organismsShow"}).state("papersShow",{url:"/papers/:id",templateUrl:"templates/papersShow.html",controller:"PapersShowController as papersShow"}).state("papersEdit",{url:"/papers/:id/edit",templateUrl:"templates/papersEdit.html",controller:"PapersEditController as papersEdit"}).state("papersIndex",{url:"/papers",templateUrl:"templates/papersIndex.html",controller:"PapersIndexController as papersIndex"}),r.otherwise("/organisms")}function User(e,r){return new e(r+"/users/:id",{id:"@id"},{update:{method:"PUT"}})}function UsersIndexController(e){var r=this;r.all=e.query()}function UsersShowController(e,r,t){function o(){n.user.$remove(function(){r.go("usersIndex")})}var n=this;n.user=e.get(r.params),n.delete=o,n.isLoggedIn=t.isAuthenticated}function UsersEditController(e,r){function t(){o.user.$update(function(){r.go("usersShow",r.params)})}var o=this;o.user=e.get(r.params),this.update=t}angular.module("finalProject",["ngResource","ui.router","satellizer"]).constant("API_URL","http://localhost:3000/api").config(Auth).filter("dasherize",dasherize),Auth.$inject=["$authProvider","API_URL"],angular.module("finalProject").controller("RegisterController",RegisterController).controller("LoginController",LoginController),RegisterController.$inject=["$auth","$state"],LoginController.$inject=["$auth","$state"],angular.module("finalProject").controller("MainController",MainController),MainController.$inject=["$auth","$state","$rootScope"],angular.module("finalProject").factory("Organism",Organism),Organism.$inject=["$resource","API_URL"],angular.module("finalProject").controller("OrganismsIndexController",OrganismsIndexController).controller("OrganismsShowController",OrganismsShowController).controller("OrganismsEditController",OrganismsEditController),OrganismsIndexController.$inject=["Organism"],OrganismsShowController.$inject=["Organism","$state","$auth"],OrganismsEditController.$inject=["Organism","$state"],angular.module("finalProject").factory("Paper",Paper),Paper.$inject=["$resource","API_URL"],angular.module("finalProject").controller("PapersIndexController",PapersIndexController).controller("PapersShowController",PapersShowController).controller("PapersEditController",PapersEditController),PapersIndexController.$inject=["Paper"],PapersShowController.$inject=["Paper","$state","$auth"],PapersEditController.$inject=["Paper","$state"],angular.module("finalProject").config(Router),Router.$inject=["$stateProvider","$urlRouterProvider"],angular.module("finalProject").factory("User",User),User.$inject=["$resource","API_URL"],angular.module("finalProject").controller("UsersIndexController",UsersIndexController).controller("UsersShowController",UsersShowController).controller("UsersEditController",UsersEditController),UsersIndexController.$inject=["User"],UsersShowController.$inject=["User","$state","$auth"],UsersEditController.$inject=["User","$state"];
//# sourceMappingURL=app.js.map
