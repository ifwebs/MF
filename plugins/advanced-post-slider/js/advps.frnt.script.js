jQuery(document).ready(function(e){e(".advps-flip").click(function(){var t=e(this).attr("sel");var n=e(this).attr("sts");var r=e(this).attr("iuri");var i=e(this).attr("temp");if(n=="played"){e("#"+t).cycle("pause");if(i=="two"){e(this).find("img").attr("src",r+"images/play-two.png")}else{e(this).find("img").attr("src",r+"images/play.png")}e(this).attr("sts","stop");e(this).find("img").attr("alt","play")}else{e("#"+t).cycle("resume");if(i=="two"){e(this).find("img").attr("src",r+"images/pause-two.png")}else{e(this).find("img").attr("src",r+"images/pause.png")}e(this).attr("sts","played");e(this).find("img").attr("alt","pause")}})})