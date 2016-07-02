$(document).ready(function(){
    
    $(".arcad .arcadion").click(function(event){
        
    var text_block = $(event.target).next();
        
        
        
       $('.text').css("display","none");
        
        
        
         text_block.slideToggle();
    
    
    })
    
})