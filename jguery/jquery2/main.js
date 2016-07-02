$("#prosto").html();

$("document").ready(function(){   
    
        var vodiy = {                         
            car: null,         
                        
        setcar: function(car){
            this.car = car;        
        },
            
        drive: function (){       
            var doroga = this.find_doroga();
            console.log(doroga);
            var img = '<img src="'+this.car.pic+'">';
            console.log(img);
            doroga.append(img);
        },
            
        find_doroga: function(){
           var doroga = $(".doroga");
            return doroga;
        }

    }    
        
            
        
        
        
    var car1 = {
        pic: "1.jpg",    
    }
    var car2 ={
        pic: "2.png",
    }
    var car3 = {
        pic: "3.jpg",
    }



    vodiy.setcar(car3);
    vodiy.drive();
      
    
    vodiy.setcar(car2);
    vodiy.drive();
     
    
    
    vodiy.setcar(car1);
    vodiy.drive();
        
    
});


