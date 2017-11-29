/*
save as manifest.json, and js save to reset-ting.js in same folder, u can load as a chrome extension plugin.
{

 "manifest_version": 2,
 "name": "1ting-reset",
"description": "reset voice volume",
"version": "1.0",
"content_scripts": [
 {
	//Set your address you want the extension will work in mataches!!! 
 "matches": ["http://www.1ting.com/*", "https://www.1ting.com/*"],
  "js": ["reset-ting.js"],
  "run_at": "document_end"
 }
],	
"permissions": [
			  "activeTab",
"https://ajax.googleapis.com/"
			 ],
 "browser_action": {
 }

}

*/
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
