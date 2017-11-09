timeout = 2000;
function adjuest_volume_ting() {
    setTimeout(function() {
        var position = $("#volume-crontrol").css("background-position");
        var v = position.substring(0, position.indexOf("px"));
        console.log(v +"," + timeout);
        timeout = 2000;
        if (v > 10) { 
            $("#volume-min").trigger("click");
            timeout = 100;
        } else if (v  == 0) {
            $("#volume-max").trigger("click");
         }
        adjuest_volume_ting();
    }, timeout);
}
adjuest_volume_ting();
