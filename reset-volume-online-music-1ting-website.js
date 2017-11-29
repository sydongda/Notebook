timeout = 2000;
function adjuest_volume_ting() {
    setTimeout(function() {
        var position = document.getElementById("volume-crontrol").style["background-position"];
        var v = position.substring(0, position.indexOf("px"));
        timeout = 2000;
        if (v > 10) { 
            document.getElementById("volume-min").click();
            timeout = 100;
        } else if (v  == 0) {
            document.getElementById("volume-max").click();
        }
        adjuest_volume_ting();
    }, timeout);
}
adjuest_volume_ting();
