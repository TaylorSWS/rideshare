
		function loadPopup(){  
    //loads popup only if it is disabled  
    if($("#helpOverlaybg").data("state")==0){  
        $("#helpOverlaybg").css({  
            "opacity": "0.7"  
        });  
        $("#helpOverlaybg").fadeIn("medium");  
        $("#helpOverlay").fadeIn("medium");  
        $("#helpOverlaybg").data("state",1);  
    }  
}  
  
function disablePopup(){  
    if ($("#helpOverlaybg").data("state")==1){  
        $("#helpOverlaybg").fadeOut("medium");  
        $("#helpOverlay").fadeOut("medium");  
        $("#helpOverlaybg").data("state",0);  
    }  
}  
  
function centerPopup(){  
    var winw = $(window).width();  
    var winh = $(window).height();  
    var popw = $('#helpOverlay').width();  
    var poph = $('#helpOverlay').height();  
    $("#helpOverlay").css({  
        "position" : "absolute",  
        "top" : winh/2-poph/2,  
        "left" : winw/2-popw/2  
    });  
    //IE6  
    $("#helpOverlaybg").css({  
        "height": winh    
    });  
}  