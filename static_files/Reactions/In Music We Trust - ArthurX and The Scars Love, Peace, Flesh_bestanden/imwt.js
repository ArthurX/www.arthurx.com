/*********************************
 *  Floating div script for inmusicwetrust.com
 *  Code stolen, amalgamated and mutilated from dynamicdrive.com and glassdog.com
 *  Feel free to rip off.
 */

var div_id = 'mnu';

var top_offset = 10;   /* offset down from the top of the browser window */
var absolute_top = 65; /* highest you want the div to go on your page (has nothing to do with top_offset) */

var xstep = .5;        /* higher values = faster */
var delay_time = 50;   /* lower values = smoother, slower */

var ie=document.all?1:0;
var ns4=document.layers?1:0;
var w3c=document.getElementById?1:0;
var mac_ie=ie&&((navigator.appVersion.indexOf("Mac")!=-1)&&(navigator.appVersion.substring(0,3)>=4.5)&&(navigator.appVersion.substring(0,1)<=5))?1:0;

function onloader(){
	if(mac_ie)window.onscroll=loopfunc;
	else setInterval('loopfunc()',delay_time);
}

function loopfunc(){
	if(mac_ie){
		if(document.body.scrollTop<absolute_top)
			document.all[div_id].style.pixelTop=absolute_top;
		else
			document.all[div_id].style.pixelTop=document.body.scrollTop+top_offset;
	}else if(ie){
		if(document.body.scrollTop<absolute_top)
			var dif=parseInt((absolute_top-document.all[div_id].offsetTop)*xstep);
		else
			var dif=parseInt((document.body.scrollTop+top_offset-document.all[div_id].offsetTop)*xstep);
		if(dif!=0)document.all[div_id].style.pixelTop+=dif;
	}else if(ns4){
		if (window.pageYOffset<absolute_top)
			var dif=parseInt((absolute_top-eval('document.'+div_id+'.top'))*xstep);
		else
			var dif=parseInt((window.pageYOffset+top_offset-eval('document.'+div_id+'.top'))*xstep);
		if(!isNaN(dif)&&(dif!=0))eval('document.'+div_id+'.pageY+='+dif);
	}else if(w3c){
		if (window.pageYOffset<absolute_top)
			var dif=parseInt((absolute_top-parseInt(document.getElementById(div_id).style.top))*xstep);
		else
			var dif=parseInt((window.pageYOffset+top_offset-parseInt(document.getElementById(div_id).style.top))*xstep);
		if(dif&&(dif!=0))document.getElementById(div_id).style.top=parseInt(document.getElementById(div_id).style.top)+dif;
	}
}

if(ie||ns4||w3c)window.onload=onloader;




/* you won't need this */
function chcolor (el, col) {
	if(ie||w3c)el.style.background=col;
}
