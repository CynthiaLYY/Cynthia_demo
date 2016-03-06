/*!
	 * Plain_Carousel-hover
	 */
	var hoverimgs=document.querySelectorAll(".hoverimgcontainer img");
	var hoverimgcontent=document.querySelector(".hoverimgcontent");
	var hoverimglen=hoverimgs.length,
		hoverimgindex=0,
		timer=null;
	hoverimgcontent.addEventListener("mouseover", function(event){
		timer=setInterval(hoverpcauto, 1000);
	});
	hoverimgcontent.addEventListener("mouseout", function(event){
		clearInterval(timer);
		timer=null;
	});

	function hoverpcauto(){
		if(hoverimgindex>=hoverimglen){
			hoverimgindex=0;
		}
		hoverimgcontent.style.left=hoverimgindex*-600+"px";
		hoverimgindex++;
	}
	/*!
	 * Plain_Carousel-hover
	 */