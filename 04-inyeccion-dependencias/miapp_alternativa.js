angular
    .module("miApp", [])
    .controller("MiAppController", ['$scope', function($scope){
        //Esta manera de inyectar el scope no es la mejor
        $scope.peliculas = [];
        $scope.agregarPelicula = function(){
            $scope.peliculas.push($scope.nuevaPelicula);
        }
    }]);