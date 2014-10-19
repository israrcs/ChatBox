var msgModule = angular.module('chatModule',[]);
msgModule.run(function($rootScope){
    $rootScope.chat = [
        {sender: 'User', text: 'hi computer !'},
        {sender: 'Computer', text: 'hello user, how are you there ?'},
        {sender: 'User', text: 'I am good and you ? !'}
    ];
});
msgModule.controller('userCtrl',function($scope,$rootScope){
    $scope.sendMessage = function(){
        $rootScope.chat.push({
            sender : 'User',
            text : $scope.text
        });
        $scope.text = '';
    };

});
msgModule.controller('computerCtrl',function($scope,$rootScope){
    $scope.sendMessage = function(){
        $rootScope.chat.push({
            sender : 'Computer',
            text : $scope.text
        });
        $scope.text = '';
    };
});

