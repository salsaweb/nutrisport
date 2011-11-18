$(document).ready(function(){
    /*CUFON*/
    Cufon.replace(".btn-ns,.mp-font",{
        fontFamily:"Myriad Pro"
        /*letterSpacing: "-0.5px",*/

    });

    Cufon.replace(".header-nav a", {
        fontFamily:"Myriad Pro",
        hover:{color:"red"}
    });

    Cufon.replace("ul.links-tabs li a", {
        fontFamily:"Myriad Pro",
        hover:{color:"#fff"}
    });

    /*styling select*/
    
     $("select").uniform();



/*component gallery*/



    $(".open-exp").click(function(){
         stopTimer();
        var id_parent = $(this).parents(".comp-gallery").attr("id");


            $("#"+id_parent+" .acord-slide-second").slideToggle();

    });

    var slide_index=0; // index of slider
    var count_slide =5-1; // count of slider
    var timer; // val of timer

    $(".nav-splash ul li a").mousemove(function(){
      stopTimer();
      var id_parent = $(this).parents(".comp-gallery").attr("id");
      slide_index= $(".nav-splash ul li a").index(this);
      $("#"+id_parent+" .splash-slide:eq("+slide_index+")").fadeIn("1600").siblings(".splash-slide").fadeOut("1000");
      $("#"+id_parent+" .nav-splash ul li a:eq("+slide_index+")").addClass("active").parent(".nav-splash ul li").siblings("li").children("a").removeClass("active");

    });

    $(".nav-splash ul li a").mouseout(function(){
        startTimer();
    });

    $(".splash-slide").mouseover(function(){
        stopTimer();
    });
    $(".splash-slide").mouseout(function(){
        startTimer();
    });




    /*Slide show*/



    slidshow ()
    startTimer();

    function stopTimer(){
          clearTimeout(timer);
    }

    function startTimer(){

           timer= setTimeout(function(){
               slidshow ();
               startTimer()
           },5000)
    }




    function slidshow (){
            $(".comp-gallery").each(function() {
            var id_parent = $(this).attr("id");
            if (slide_index>count_slide) slide_index=0

                $("#"+id_parent+" .splash-slide:eq("+slide_index+")").fadeIn("1600").siblings(".splash-slide").fadeOut("1000");
                $("#"+id_parent+" .nav-splash ul li a:eq("+slide_index+")").addClass("active").parent(".nav-splash ul li").siblings("li").children("a").removeClass("active");
                slide_index++;
             })
        }
/**navigation */

    $(".item-nav .active-nav").next("div.body-nav").css("display","block");
     $(".title-nav").click(function(){
         $(this).next("div.body-nav").slideDown("200").siblings("div.body-nav").slideUp("200");
         Cufon.refresh();

    });
    $(".item-nav .active-nav-sub").next("div.body-nav-sub").css("display","block");
   $(".title-nav-sub").click(function(){

         $(this).next("div.body-nav-sub").slideDown(200).siblings().parent().siblings().children("div.body-nav-sub").slideUp("200").siblings();
         Cufon.refresh();

    });
});



