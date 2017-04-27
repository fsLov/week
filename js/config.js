/**
 * Created by ’≈«‡”Ò on 2017/4/26.
 */
var app=angular.module("app",["ui.router"]);
    app.config(function($stateProvider,$urlRouterProvider){
       $urlRouterProvider.otherwise("/home");
        $stateProvider
            .state({
                name:"home",
                url:"/home",
                templateUrl:"../page/home.html"
            })
            .state({
                name:"service",
                url:"/service",
                templateUrl:"../page/service.html"
            })
            .state({
                name:"service.referral",
                url:"/referral",
                templateUrl:"../page/referral.html"
            })
            .state({
                name:"service.check",
                url:"/check",
                templateUrl:"../page/check.html"
            })
            .state({
                name:"service.summary",
                url:"/summary",
                templateUrl:"../page/summary.html"
            })
            .state({
                name:"tissue",
                url:"/tissue",
                templateUrl:"../page/tissue.html"
            })
            .state({
                name:"swaraj",
                url:"/swaraj",
                templateUrl:"../page/swaraj.html"
            })
    })
app.directive('inputFile',function () {
    return {
        template:'<div class="input-file">'+
        '<label for="{{inputId}}"></label>'+
        '<input type="file" id="{{inputId}}">'+
        '</div>',
        restrict:'E',
        scope:{},
        controller:function ($scope) {
            $scope.inputId = 'inputFile'+$scope.$id
        },
        link:function (scope,ele) {
            var inputFile = ele.find('div');
            var input = $(inputFile).find('input');
            input.on('change',function () {
                var reader = new FileReader();

                reader.readAsDataURL(this.files[0]);

                reader.onload = function () {
                    console.log($(inputFile).find('label'));
                    $(inputFile).find('label')[0].style.background = 'url('+this.result+') no-repeat center center'
                }
            })
        }
    }
});