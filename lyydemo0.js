var tabctrlul=document.querySelector(".tabcontroler ul");
var tabctrlli=document.querySelectorAll(".tabcontroler ul li");
//console.log(tabctrlli[1].childNodes[0].nodeValue);
var tabcntntp=document.querySelectorAll(".tabcontent p");
var index=0,
		i,
		len=tabctrlli.length;
	setInterval(tauto, 2000);
	function tauto(){
		if(index>=len){
			index=0;
		}
		for(i=0;i<len;i++){
			tabcntntp[i].style.display="none";
			tabctrlli[i].style.color="#3A5CBD";
		}
		tabcntntp[index].style.display="block";
		tabctrlli[index].style.color="#5CD9EF";
		index++;
	}