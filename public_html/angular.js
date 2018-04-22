//Liaison entre la directive ng-app et la couche métier
var deeveadeeModule = angular.module("deeveadee", []);

deeveadeeModule.controller("listeDeFilms", function ($scope, $http) {

    $scope.films = [];

    //Request pour récuperer la liste des films. Stockage de la réponse dans une variable
    $scope.miseAJour = function() {
        $http.get("http://deeveadee.janus-developpement.com/films").then(function (response) {
            $scope.films = response.data;
        });
    };

    //Variable de stockage temporaire des films.
    $scope.film = {
        id: 0,
        titre: "",
        jaquette: "",
        description: ""
    };

    //Permet d'afficher la modal.
    $scope.detail = function (id) {
        $scope.film = $scope.getFilm(id);
        $scope.modalShower = true;
    };

    //Function pour cacher la modal.
    $scope.hideModal = function () {
        $scope.modalShower = false;
    };

    //Function pour récupérer un film grâce à son  ID.
    $scope.getFilm = function (id) {
        for (var i in $scope.films) {
            if ($scope.films[i].id === id) {
                return $scope.films[i];
            }
        }
    };
});