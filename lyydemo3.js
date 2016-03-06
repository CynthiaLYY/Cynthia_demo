$(document).ready(function() {
	var $imgcontent=$(".aimgcontent");
	var $button=$(".button span");
	var $imgarrow=$(".imgarrow");
	var currentindex=0;

	$imgarrow.on("click","#prev",goprev);
	function goprev(){
		var nextindex=0;
		var newleft=parseInt($imgcontent.css("left"))-600;
		if(newleft==-3000){
   		    return;
   	    }
		nextindex=currentindex+1;
		$imgcontent.animate({"left":newleft+"px"},500);
		$button.removeClass("on").eq(nextindex).addClass("on");
		currentindex=nextindex;
	}
	$imgarrow.on("click","#next",gonext);
	function gonext(){
		var nextindex=0;
		var newleft=parseInt($imgcontent.css("left"))+600;
		if(newleft>0){
   		    return;
   	    }
		nextindex=currentindex-1;
		$imgcontent.animate({"left":newleft+"px"},500);
		$button.removeClass("on").eq(nextindex).addClass("on");
		currentindex=nextindex;
	}
});