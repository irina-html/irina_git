var slider_pic = 0;
var picture_items = count_slid();// TODO: исправить, вінимать динамически
var slider = document.getElementById("slider");



var slider_first = document.getElementsByClassName("slid");
    slider_first = slider_first[0];



var slider_last = document.getElementsByClassName("slid");
    slider_last = slider_last[slider_last.length-1];


function count_slid (){ // виймае слайди з html і підраховуе їх кількість
     var sum_slids = document.getElementsByClassName("slid");
     return sum_slids.length;
}





function slidLeft(){
    if (slider_pic == picture_items-1){       
        slider_last.className='slid slid_fi';
        return ;
    }

            slider_pic++; 

   

    var curent_left = "-" + slider_pic * 960 + "px";
    slider.style.left = curent_left;

    
    var all_slider = document.getElementsByClassName("slid");
    // удаляемо
    all_slider.removeClass("BIG");
    // добавляемо
    all_slider[slider_pic].className= all_slider[slider_pic].className + " BIG";

}

function slidRight(){
    if (slider_pic == 0){  
        slider_first.className='slid slid_la';
        return;
    }
    
        slider_pic--;
    

    
    var curent_left = "-" + slider_pic * 960 + "px";
    slider.style.left = curent_left;
    console.log(slider_pic);     
    
    
    var all_slider = document.getElementsByClassName("slid");
    // удаляемо
    all_slider.removeClass("BIG");
    // добавляемо
    all_slider[slider_pic].className= all_slider[slider_pic].className + " BIG";
    

}



function bounce(timeFraction) {
  for (var a = 0, b = 1, result; 1; a += b, b /= 2) {
    if (timeFraction >= (7 - 4 * a) / 11) {
      return -Math.pow((11 - 6 * a - 11 * timeFraction) / 4, 2) + Math.pow(b, 2)
    }
  }
}