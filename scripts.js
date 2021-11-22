$(function() {

    $("._language_en_p").click(function() {


        if ($("._h_language_notification").is(":hidden")) {



            $("._h_language_notification").delay("500").fadeIn("slow");

        }

        else {

            $("._h_language_notification").fadeOut("normal");
            
        }


    });

});