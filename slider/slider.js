function slidLeft(){
    var slider=document.getElementById("slider"); //  находит елемент из DOM по id
    var curent_left = (getComputedStyle(slider)).left; // забирает( считивает)свойство css
    var slider_width = (getComputedStyle(slider)).width;
    
    curent_left =crop_px(curent_left);
    slider_width =crop_px(slider_width);
    
    
    if (curent_left<0){
        curent_left= curent_left*(-1);
    }
    
    
    if(curent_left+960 >= slider_width){
        return;
    }
    
    
    var new_left = curent_left + 960;
    console.log(new_left);
    
    slider.style.left = "-" + new_left + "px";// меняет(устанавливает) свойство css
    

}
function crop_px (str){
    str = +str.substring(0,str.length-2);
    return str;
}
function slidRight(){
    var slider=document.getElementById("slider"); //  находит елемент из DOM
    var curent_left = (getComputedStyle(slider)).left; // забирает( считивает)свойство css
    var slider_width = (getComputedStyle(slider)).width;
    
    curent_left =crop_px(curent_left);
    slider_width =crop_px(slider_width);
    
    
    if (curent_left<0){
        curent_left= curent_left*(-1);
    }
    
  
    
    
    var new_left = curent_left - 960;
    console.log(new_left);
    
    slider.style.left = "-" + new_left + "px";// меняет(устанавливает) свойство css
    

}