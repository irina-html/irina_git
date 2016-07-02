 $(document).ready(function() {  // перетаскиваемый элемент

           $("div").draggable();

});

 $(document).ready(function() {  // перетаскиваемый элемент по оси X и по Y

           $(".second_x").draggable({axis:"x"});
            $(".second_y").draggable({axis:"y"});

});

 $(document).ready(function() {  // перетаскиваемый элемент курсор меняет свой вид

           $(".move").draggable({cursor:"move"});

});

$(document).ready(function() {  // перетаскиваемый элемент возвращается на начальное место

           $(".ago").draggable({revert:true});

});