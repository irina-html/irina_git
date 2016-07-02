function reset(){
    $('#monitor').val("");
    
}





var monitor = $('#monitor');
var sum_coal = $("#sum_coal");

function caunttable(){
   
    var stroca = monitor.val();
    sum_coal.text(stroca.length);

}