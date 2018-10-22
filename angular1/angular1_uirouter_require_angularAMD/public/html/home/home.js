
    /*
        define([], function(){})中第一个参数是"依赖的名称数组"，第二个参数是"函数"，在模块的所有依赖加载完毕后，
        该函数会被调用来定义该模块。
        依赖关系会以参数的形式注入到该函数上，参数列表与依赖名称列表一一对应。
    */
define([
    'app1',
    '../../services/home-service',
    '../testAMD/test0',
    '../testAMD/test1'
],function(app,homeService,test,test1){  //依赖app.js  function 参数即是《对应依赖的返回值》
    test.method1();
    test1.method2();
    app.controller('homeCtrl', [ '$scope','homeService', function($scope,homeService){
        console.log('this is HOme page')
        $scope.name = 'welcome to homePage';
        homeService.searchAllMenu().then(function(res){
          
        });
    }])  
}) ;