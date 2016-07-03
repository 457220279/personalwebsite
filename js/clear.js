"use strict";
	function fn(e) {
	var o=oPage.path();
	o.attr("stroke-width",12),o.attr("stroke","#ffef5c");
	var t=["M",0,0],n=0,f=null;
	f=setInterval(function() {
	t.push(e[n]),n++,o.attr("path",t.join(" ")),n==e.length&&clearInterval(f)
}
,15)}function penMove() {
	document.onmousemove=function(e) {
	oPen.style.left=e.pageX-oC.offsetLeft+"px",oPen.style.top=e.pageY-oC.offsetTop-oPen.offsetHeight+"px"
}
}document.onmousedown=function() {
	return!1
}
,-1!=window.navigator.userAgent.indexOf("MSIE")||-1!=window.navigator.userAgent.indexOf("11.0");
	var winW=document.documentElement.clientWidth,winH=document.documentElement.clientHeight,
	oPage=Raphael(winW/2-400,winH/2-310,800,600),
	aLine= {
	y:[/*刘*/"M",130,35,"L",150,45,"M",80,70,"L",205,70,"M",195,90,"L",90,215,"M",90,90,"L",205,200,"M",225,110,"L",225,150,"M",255,35,"L",255,220,"M",245,215,"L",220,185,
	  /*广*/ "M",360,35,"L",380,45,"M",302,65,"L",440,65,"M",330,75,"L",310,225,
	  /*立*/ "M",540,35,"L",560,45, "M",480,65,"L",640,65, "M",630,80,"L",560,205,"M",490,80,"L",560,205,"M",470,210,"L",655,210,]
}
;for(var name in aLine) {
	var data=[];
	data=aLine[name],fn(data)
}
var oC=document.querySelector(".c1"),gd=oC.getContext("2d");
	oC.width=winW,oC.height=winH,oC.onmousedown=function(e) {
	return document.onmousemove=null,gd.moveTo(e.pageX-oC.offsetLeft,e.pageY-oC.offsetTop),gd.lineWidth=10,gd.strokeStyle="#ffef5c",document.onmousemove=function(e) {
	gd.clearRect(0,0,winW,winH),gd.lineTo(e.pageX-oC.offsetLeft,e.pageY-oC.offsetTop),gd.stroke(),oPen.style.left=e.pageX-oC.offsetLeft+"px",oPen.style.top=e.pageY-oC.offsetTop-oPen.offsetHeight+"px"
}
,document.onmouseup=function() {
	document.onmouseup=null,document.onmousemove=null,penMove()
}
,!1};
	var oPen=document.querySelector(".pen");
	penMove();
	var oBtn=document.querySelector(".clear_btn");
	oBtn.onmousedown=function(e) {
	document.onmousemove=null;
	var o=e||event,t=o.clientX-oBtn.offsetLeft;
	return document.onmousemove=function(e) {
	var o=e||event,n=o.clientX-t;
	-50>n?n=-50:n>oBtn.parentNode.offsetWidth-oBtn.offsetWidth+50&&(n=oBtn.parentNode.offsetWidth-oBtn.offsetWidth+50),oBtn.style.left=n+"px",oPen.style.left=e.pageX-oC.offsetLeft+"px",oPen.style.top=e.pageY-oC.offsetTop-oPen.offsetHeight+"px"
}
,document.onmouseup=function(e) {
	var o=e||event,n=0,f=null,u=o.clientX-t;
	u>oBtn.parentNode.offsetWidth-oBtn.offsetWidth+50?(u=oBtn.parentNode.offsetWidth-oBtn.offsetWidth+50,window.open("init.html","_self"),-1!=window.navigator.userAgent.indexOf("Firefox")&&(oBtn.style.left="0px")):f=setInterval(function() {
	n++,u-=n,-50>u&&(u=-50,clearInterval(f)),oBtn.style.left=u+"px"
}
,30),document.onmousemove=null,document.onmouseup=null,penMove()},!1};