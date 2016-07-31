define('js/modules/checkwheel', [], function(require, exports, module) {

      //判断浏览器兼容问题
      function check(event){
               event = event || window.event;
              //阻止默认事件
              if(event.preventDefault){
                  event.preventDefault();
              }else{
                  event.returnValue = false;
              }
              //Chrome、IE用的是event.wheelDelta;
              if(event.wheelDelta){
                  var direction = event.wheelDelta > 0 ? 1 : -1;
              }else if(event.detail){
                  //火狐用的是event.detail;
                  var direction = event.detail > 0 ? -1 : 1;
              }
  
              return direction; 
  
          }
  
      return check;

});