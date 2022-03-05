var scu=document.getElementById('muiscu');
// console.log(scu);
var mui=document.querySelector('audio');
// console.log(mui);
var i=0;
scu.onclick=function(){
	if(i==0)
	{
		i=1;
		scu.style.animation="rot 300s infinite";
		mui.play();
	}
	else
	{
		i=0;
		scu.style.animation="0";
		mui.pause();
	}
}
