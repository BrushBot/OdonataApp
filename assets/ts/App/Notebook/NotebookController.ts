angular.module('NotebookController', []).controller('NotebookController', function($scope: any) {

    $scope.tagline = 'I Like Odonata';   

});

angular.module('NotebookApplication', ['NotebookController']);