$(document).ready(function(){
    $("#hike-toggle").click(function(){
        $("#hike-more").slideToggle();
        checkVal("#hike-toggle");
    });
    $("#camp-toggle").click(function(){
        $("#camp-more").slideToggle();
        checkVal("#camp-toggle");
    });
    $("#gear-toggle").click(function(){
        $("#gear-more").slideToggle();
        checkVal("#gear-toggle");
    });
    $("#gal-toggle").click(function(){
        $("#gal-wrap").slideToggle();
        checkVal("#gal-toggle");
    });
    function checkVal(id){
        if($(id).val() == "More"){
            $(id).val("Less");
        }
        else{
            $(id).val("More");
        }
    };
});
