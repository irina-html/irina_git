$(document).ready(function(){  //сортируемый списк

  $(".sort1").sortable();

});

$(document).ready(function(){  // Элементы одного связанного списка можно перемещать в другой связанный список.
  
  $(".sort1,.sort2").sortable({connectWith:".connect"});

});