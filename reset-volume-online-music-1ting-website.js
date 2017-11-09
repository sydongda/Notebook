function reset_volume_1ting() {
    setTimeout(function() {
    	while (true) {
    	var bgp = $("#volume-crontrol").css("background-position");
    	var min = bgp.split("-")[0];
    	if (min.substring(0, min.length - 3) > 10) {
    		$("#volume-min").trigger("click");
    	} else if (min.substring(0, min.length - 3)  == 0) {
    	 	$("#volume-max").trigger("click");
    	 	break;
    	 } else {
    	 	break;
    	 }
    	 }
    	reset_volume_1ting();
      }, 
	  2000);
}
reset_volume_1ting();
    
    
