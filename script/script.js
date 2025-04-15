
    $( document ).ready(function() {
       $("#arrow-features").click(function() {
            $(".list-one").slideToggle();

            var arrow = $("#arrow-down-features");
            if (arrow.attr("src") == "images/icon-arrow-down.svg") {
                arrow.attr("src", "images/icon-arrow-up.svg");  // Change to arrow-up when the menu is shown
            } else {
                arrow.attr("src", "images/icon-arrow-down.svg");  // Change back to arrow-down when the menu is hidden
            }
            
       })

       $("#arrow-company").click(function() {
        $(".list-two").slideToggle();

        var arrow = $("#arrow-down-company");
            if (arrow.attr("src") == "images/icon-arrow-down.svg") {
                arrow.attr("src", "images/icon-arrow-up.svg");  // Change to arrow-up when the menu is shown
            } else {
                arrow.attr("src", "images/icon-arrow-down.svg");  // Change back to arrow-down when the menu is hidden
            }
       })

       $(".login-image").click(function() {
            $("nav").show();
            $("ul").toggle();
            $(".login-image").hide();
            $("main").css("opacity", "0.5");

           
           
       })
       $(".icon-close").click(function() {
        $("nav").hide();
        $("ul").toggle();
        $(".login-image").show();
        $("main").css("opacity", "1")
       })
    });


  