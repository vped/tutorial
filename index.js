

var app = angular.module('you',['ui.router']);

app.run(function ($state) {

});

app.config(function ($stateProvider, $urlRouterProvider){
    $stateProvider
        .state('class1',{
            url : '/class1',
            templateUrl : 'tutorial/view/class_1.html',
            controller : 'class1Ctrl'
        })



        .state('class2',{
            url : '/class2',
            templateUrl : 'tutorial/view/class_2.html',
            controller : 'class2Ctrl'
        })
        .state('class3',{
            url : '/class3',
            templateUrl : 'tutorial/view/class_3.html',
            controller : 'class3Ctrl'
        })
        .state('class4',{
            url : '/class4/{id}',
            templateUrl : 'tutorial/view/class_4.html',
            controller : 'class4Ctrl'
        })
        .state('theory',{
            url : '/theory',
            templateUrl : 'tutorial/view/theory.html',
            controller : 'theoryCtrl'
        })
        .state('task',{
            url : '/task',
            templateUrl : 'tutorial/view/task.html',
            controller : 'taskCtrl'
        });

    $urlRouterProvider.otherwise('/');
});

