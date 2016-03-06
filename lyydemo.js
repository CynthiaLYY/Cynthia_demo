window.onload=function(){

	/*!
	 * Auto_Tabs
	 */
	/*var tabcontroler=document.getElementsByClassName("tabcontroler");
	var tabcontent=document.getElementsByClassName("tabcontent");*/
	var tabctrlul=document.querySelector(".tabcontroler ul");
	var tabctrlli=document.querySelectorAll(".tabcontroler ul li");
	//console.log(tabctrlli[1].childNodes[0].nodeValue);
	var tabcntntp=document.querySelectorAll(".tabcontent p");
	/*tabctrlul.addEventListener("click", function(event){
		switch(event.target.childNodes[0].nodeValue){
			case "JS":
				tabcntntp[0].style.display="block";
				tabcntntp[1].style.display="none";
				tabcntntp[2].style.display="none";
				break;
			case "CSS":
				tabcntntp[0].style.display="none";
				tabcntntp[1].style.display="block";
				tabcntntp[2].style.display="none";
				break;
			case "HTML":
				tabcntntp[0].style.display="none";
				tabcntntp[1].style.display="none";	
				tabcntntp[2].style.display="block";
				break;
		}
	},false);*/
	
	/*!
	 * Auto_Tabs
	 */
	
	/*!
	 * Hover_Tabs
	 */
	var hovertabctrlul=document.querySelector(".hovertabcontroler ul");
	var hovertabctrlli=document.querySelectorAll(".hovertabcontroler ul li");
	var hovertabcntntp=document.querySelectorAll(".hovertabcontent p");
	hovertabctrlul.addEventListener("mouseover", function(event){
		switch(event.target.childNodes[0].nodeValue){
			case "JS":
				hovertabcntntp[0].style.display="block";
				break;
			case "CSS":
				hovertabcntntp[1].style.display="block";
				break;
			case "HTML":
				hovertabcntntp[2].style.display="block";
				break;
		}
	},false);
	hovertabctrlul.addEventListener("mouseout", function(event){
		switch(event.target.childNodes[0].nodeValue){
			case "JS":
				hovertabcntntp[1].style.display="none";
				hovertabcntntp[2].style.display="none";
				break;
			case "CSS":
				hovertabcntntp[0].style.display="none";
				hovertabcntntp[2].style.display="none";
				break;
			case "HTML":
				hovertabcntntp[0].style.display="none";
				hovertabcntntp[1].style.display="none";	
				break;
		}
	},false);
	/*!
	 * Hover_Tabs
	 */
};