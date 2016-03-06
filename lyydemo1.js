window.onload=function(){
	/*!
	 * Plain_Carousel-auto
	 */
	var imgs=document.querySelectorAll(".imgcontainer img");
	var imgcontent=document.querySelector(".imgcontent");
	/*console.log(imgs[0].height);//600*400*/
	/*console.log(imgcontent.style.left);*/
	var imglen=imgs.length,
		imgindex=0;
	setInterval(pcauto, 1000);

	function pcauto(){
		if(imgindex>=imglen){
			imgindex=0;
		}
		imgcontent.style.left=imgindex*-600+"px";
		imgindex++;
	}
	/*!
	 * Plain_Carousel-auto
	 */
	
	
};