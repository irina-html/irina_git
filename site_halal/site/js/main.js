$(document).ready(function(){     // меняются табы
    $(".tab1").click(function(){
        $(".group_tab .wrapper .tab").hide();
        $(".group_tab .wrapper .item1").show();
    });
    
    $(".tab2").click(function(){
        $(".group_tab .wrapper .tab").hide();
        $(".group_tab .wrapper .item2").show();
    });
    
    $(".tab3").click(function(){
        $(".group_tab .wrapper .tab").hide();
        $(".group_tab .wrapper .item3").show();
    });
    
    $(".tab4").click(function(){
        $(".group_tab .wrapper .tab").hide();
        $(".group_tab .wrapper .item4").show();
    });
    
});




$(document).ready(function(){   // меняются текстовый слайдер по клику на читаем дальше
    $(".group_text_slid .page1 .but").click(function(){
        $(".group_text_slid .slid").hide();
        $(".group_text_slid .page2").show();
    });
    
     $(".group_text_slid .page2 .but").click(function(){
        $(".group_text_slid .slid").hide();
        $(".group_text_slid .page3").show();
    });
    
     $(".group_text_slid .page3 .but").click(function(){
        $(".group_text_slid .slid").hide();
        $(".group_text_slid .page1").show();
    });
});




$(document).ready(function(){   // меняются текстовый слайдер по клику на направляющие
    $(".group_text_slid .page1 .left").click(function(){
        $(".group_text_slid .slid").hide();
        $(".group_text_slid .page2").show();
    });
    
     $(".group_text_slid .page2 .left").click(function(){
        $(".group_text_slid .slid").hide();
        $(".group_text_slid .page3").show();
    });
    
     $(".group_text_slid .page2 .right").click(function(){
        $(".group_text_slid .slid").hide();
        $(".group_text_slid .page1").show();
    });
    
     $(".group_text_slid .page3 .right").click(function(){
        $(".group_text_slid .slid").hide();
        $(".group_text_slid .page2").show();
    });
});






$(document).ready(function(){          // иконка маштабируется в клиентах
    $(".group_clients .wrepper .box_hover").click(function(event){
        $(".big").show();
        $(event.target).closest(".boxes").find(".big_click").show();

    }) ; 
    
     $(".group_clients .wrepper .box .click").click(function(){
      $(".big").hide();
        $(".group_clients .wrepper .big_click").hide();
    }) ; 

    
});




$(document).ready(function(){    // выборка по группа в клиентах
     $(".group_clients .aside .meat").click(function(){
        $(".group_clients .wrepper .boxes").hide();
        $(".group_clients .wrepper .meat").show();
     });
    
     $(".group_clients .aside .milk").click(function(){
        $(".group_clients .wrepper .boxes").hide();
        $(".group_clients .wrepper .milk").show();
     });
    
    $(".group_clients .aside .drinks").click(function(){
        $(".group_clients .wrepper .boxes").hide();
        $(".group_clients .wrepper .drinks").show();
     });
    
    $(".group_clients .aside .grocery").click(function(){
        $(".group_clients .wrepper .boxes").hide();
        $(".group_clients .wrepper .grocery").show();
     });
    
    $(".group_clients .aside .sweet").click(function(){
        $(".group_clients .wrepper .boxes").hide();
        $(".group_clients .wrepper .sweet").show();
     });
    
    $(".group_clients .aside .other").click(function(){
        $(".group_clients .wrepper .boxes").hide();
        $(".group_clients .wrepper .other").show();
     });
    
     $(".group_clients .aside .all").click(function(){
        $(".group_clients .wrepper .boxes").show();        
     });
});






$(document).ready(function(){         // форма обратной связи
        $("input").on('click', function(){
            $(".msg").html("");
            $(".error").removeClass('error');
        });

        $("textarea").on('click', function(){
            $(".msg").html("");
            $(".error").removeClass('error');


        });

        $(".form_button").on('click', function(){

            $(".msg").html("");
            $(".error").removeClass('error');
;

            $(".form_ok").html("");


            var data = {};
            data['name']    = $("input[name='name']").val();
            data['tell']    = $("input[name='tell']").val();
            data['email']   = $("input[name='email']").val();
            data['message'] = $("textarea[name='message']").val();

            $.ajax({
                url: '/msg.php',   
                type: 'POST',
                data: data,
                success: function(a){
                    if(a['error']==1){
                        $("."+a['name']).addClass('error');
                        $("."+a['name']+"_msg").html(a['msg']);
                    }

                    if(a['error']==0){
                        $('.form_ok').html(a['msg']);
                    }                
                }

                });      
        });
    });










$(document).ready(function(){         // форма на отправку получения сертификата
        $("input").on('click', function(){
            $(".msgf").html("");
            $(".error").removeClass('error');
        });

        

        $(".form_button").on('click', function(){

            $(".msgf").html("");
            $(".error").removeClass('error');
;

            $(".form_ok").html("");


            var data = {};
            data['name']    = $("input[name='name']").val();
            data['individual_name']    = $("input[name='individual_name']").val();
            data['address']    = $("input[name='address']").val();
            data['tell']    = $("input[name='tell']").val();
            data['email']   = $("input[name='email']").val();
            data['services']   = $("input[name='services']").val();

            $.ajax({
                url: '/msgf.php',    
                type: 'POST',
                data: data,
                success: function(a){
                    if(a['error']==1){
                        $("."+a['name']).addClass('error');
                        $("."+a['name']+"_msgf").html(a['msgf']);
                    }

                    if(a['error']==0){
                        $('.form_ok').html(a['msgf']);
                    }                
                }

                });      
        });
    });




$(document).ready(function(){    // оживляет видео-слайдер
     $(".group_media .left").click(function(){
        $(".group_media .video .vd1").hide();
        $(".group_media .video .vd2").show();
     });
    
});