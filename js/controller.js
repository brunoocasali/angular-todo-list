/*
    Cria o objeto do módulo.
    Um módulo representa uma aplicação ou parte de uma aplicação maior.
*/
var todoApp = angular.module("todoApp", []);

/*
    Define um objeto controller dentro do módulo.
    O objeto controller recebe como parâmetro um objeto $scope que representa,
    o model associado ao Controller.
*/
todoApp.controller("TodoController", function($scope){
    $scope.list = new Array();
    
    $scope.saveTask = function(){
        $scope.list.push($scope.task);

        localStorage.setItem("tasks_list", JSON.stringify($scope.list));
        
        $scope.loadList();
    };
    
    $scope.loadList = function(){
        var list = localStorage.getItem("tasks_list");
        
        if(list != null) {
          $scope.list = JSON.parse(list);   
        }        
    };
    
    $scope.destroy = function(index){
        $scope.list.splice(index, 1);
        
        localStorage.setItem("tasks_list", JSON.stringify($scope.list));
    };
    
    $scope.loadList();
});