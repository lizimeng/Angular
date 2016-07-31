define('js/modules/app', ['css/index.css', 'css/download.css', 'js/modules/download', 'js/modules/checkwheel', 'js/modules/throttle', 'js/modules/animate', 'js/modules/clock-1.1.0.min'], function(require, exports, module) {

  
  
  require('css/index.css');
  require('css/download.css');
  var download = require('js/modules/download');
  var detail = require('js/modules/checkwheel');
  var throttle =  require('js/modules/throttle');
  var animate = require('js/modules/animate')
  require('js/modules/clock-1.1.0.min');
  angular.module('main',[])
  .directive('myDirective',function(){
  
       return {
  
          redirect : 'E',
  
          templateUrl : '/view/main.html',
          controller : function($scope,$element,$timeout){
          
            window.location.hash = '#/home';
           //调用时钟的插件
           var clock = $element.find("#clock").clock(),
              data = clock.data('clock');
  
              //把下载简历按钮的插件线保存起来，等模板加载进来，我们在调用这个方法
             download();
             $scope.page = 0;
           var  firstIn = true;
  
             //把假元素准备好为第二屏幕的元素做准备
                for(var i = 0 ;i < 5; i++){
                    for(var j = 0; j< 5; j++){
                         
                        $('<div></div>').css({
                           'width': "88px",
                           "height" : '76px',
                           'background': 'url(../img/1.png) ' +  -j * 88 + 'px '+ -i * 76+ 'px' ,
                            'opacity' : 0,
                           'position': 'absolute',
                           'top' : 1000 - Math.random()*2000   + 'px',
                           'left' : 1000 - Math.random()*2000  + 'px',
                           // 'transform': 'rotateX(360deg)',
                           'transition': 'all 1s ease 0s'
                        })
                        .appendTo(".clone")
  
  
                    }
                  }
  
            
      document.onmousewheel = unit;
      
  
        function unit(e){
          
          var detailData = detail(); 
          throttle(move,{
                  settimeout : $timeout,
                  cleartimeout : $timeout.cancel,
                  data : detailData
  
              })
          }
  
           function move(detailData){
            
              
            //判断它是在向上还是向下
            //
                if(detailData < 0) {
                   //向下
                 $scope.page -= detailData ;
              
    
      $element.find('.cube')[0].style.transform  =  "rotateY(" +  $scope.page * -90 + "deg)" ;                 
       
                              
                }
  
                else {
  
                     $scope.page -= detailData ;
                   
  
                      $element.find('.cube')[0].style.transform  =  "rotateY(" +  $scope.page * -90 + "deg)" ;                 
                }
  
                //在move里面设置路由hash
                 // $scope.page %= 4;
                
                switch($scope.page%4){
  
                  case 0 : {
                     window.location.hash = '#/home';
                     
                   break;
                  }
                    case 1:
                   window.location.hash = '#/skil';
                   break;
                    case 2 :
                   window.location.hash = '#/project';
                   break;
                    case 3 :
                   window.location.hash = '#/info';
                   break;
                }  
              
                }
  
          //封装一个函数用来进行动画渲染
           window.addEventListener('hashchange',function(){
  
                var arrIn = [];
           
                 arrIn[0] = function(){  
                   firstIn = false;       
                  $element.find('.face_home .summary li').each(function(i){
                     $(this).animate({
                        'left' : 0,
                          'top' : i * 15,
                          'opacity' : 1
                     },++i*500,function(){
                        //这里是名称的动画
                         $element.find('.face_home .summary h1').css({
                             'opacity' : 1,
                              'top' : 0
                         })
                     })
                  })
  
                 }
               arrIn[1] = function(){
                 
              $('.clone div').each(function(i){
                      
                    $(this).animate({
                         
                            'left' :  i % 5 * 88 + 'px',
                             'top': parseInt( i /5 ) *76 + 'px',
                             'opacity' : 1,
                        },i*50,function(){
  
                        })
  
                  $timeout(function(){
                       $('.clone div').css({
                               'transform':'rotateX(90deg)'
                           })
  
                        $('.face_skil .content-skil').css({
                           "display": 'block'
                        })
  
                  },2000)
  
  
              })
                  
               }
             
              if(firstIn){
                $timeout(function(){
                  
                  arrIn[$scope.page](); 
                },2500)
              }
              else {
                 arrIn[$scope.page]();
  
              }
                
               
  
           })
     
            $scope.Down = function(){
          
             window.location.href="/Myresume.doc"; 
            
            
             
           }  
            }
  
          }
       
         
  })
  
  
  return 100

});