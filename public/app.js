var app = angular.module('Socket.io', []);
var socket = io.connect('http://localhost:8080');

app.controller('DataCtrl', function ($scope){
    console.log('alller');
    $scope.datas = 0;

    $scope.retrieveDatas = function(choice){
        console.log('dataanada');
        socket.emit('dataRetrieve', choice);
    };

    socket.on('dataSend', function(msg){
        $scope.datas = msg;
        $scope.$apply();
    });
});
