define('js/modules/unitCube', [], function(require, exports, module) {

         function move(detailData){
            
              
            //判断它是在向上还是向下
            //
                if(detailData.data < 0) {
                   //向下
             
    
          detailData.element.find('.cube')[0].style.transform  =  "rotateY(" +  detailData.page * -90 + "deg)" ;                 
           console.log(detailData.page)
                              
                }
  
                else {
  
                    
                   
  
                      detailData.element.find('.cube')[0].style.transform  =  "rotateY(" +   detailData.page * -90 + "deg)" ;                 
                }
              
                }
  
  
        return move;

});