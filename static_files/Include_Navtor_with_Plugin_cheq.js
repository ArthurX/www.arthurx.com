


document.write("<OBJECT classid=clsid:D27CDB6E-AE6D-11cf-96B8-444553540000");
 document.write("codebase=http://active.macromedia.com/flash2/cabs/swflash.cab#version=3,0,0,0");
 document.write("ID=Navtor WIDTH=230 HEIGHT=500>");
  document.write("<PARAM NAME=movie VALUE=Navtor.swf> ");
  document.write("<PARAM NAME=quality VALUE=autohigh> ");
  document.write("<PARAM NAME=bgcolor VALUE=#FFFFFF> ");
  
  
  
 function checkForShockwave()
{
	navigator.plugins.refresh();
	if ( navigator.plugins["Shockwave Flash"] ){ 
		parent.location.reload();
	} else {
		setTimeout( "checkForShockwave()", 1000 );
	}
}
var ShockMode = 0;
var OldVersionOfPlugin = 0;
if (navigator.mimeTypes && navigator.mimeTypes["application/x-shockwave-flash"] && navigator.mimeTypes["application/x-shockwave-flash"].enabledPlugin) {
	if (navigator.plugins && navigator.plugins["Shockwave Flash"])
		ShockMode = 1;
	else
		OldVersionOfPlugin = 1;
}
if (!ShockMode && navigator.appName && navigator.appName.indexOf("Netscape") != - 1 && navigator.appVersion.indexOf("4.") != - 1
&& navigator.javaEnabled() && netscape.softupdate.Trigger.UpdateEnabled() && document.cookie.indexOf("StartedShockwaveInstall") == -1) {
	var jarPath = new String("");
	if (navigator.platform.indexOf("Win32") >= 0 )
		jarPath = "http://download.macromedia.com/pub/shockwave/jars/english/silentflash32.jar"
	else if (navigator.platform.indexOf("Win16") >= 0 )
		jarPath = "http://download.macromedia.com/pub/shockwave/jars/english/silentflash16.jar"
	else if (navigator.platform.indexOf("MacPPC") >= 0 )
		jarPath = "http://download.macromedia.com/pub/shockwave/jars/english/silentflashppc.jar"
	if (jarPath.length) {
		netscape.softupdate.Trigger.StartSoftwareUpdate (jarPath, netscape.softupdate.Trigger.FORCE_MODE);
		document.cookie='StartedShockwaveInstall;path=/;'
		setTimeout("checkForShockwave()", 1000);
	}
}



document.write("<EMBED src=Navtor.swf");
 document.write("swLiveConnect=FALSE WIDTH=240 HEIGHT=500");
 document.write("QUALITY=autohigh BGCOLOR=#FFFFFF");
 document.write("TYPE=application/x-shockwave-flash PLUGINSPAGE=http://www.macromedia.com/shockwave/download/index.cgi?P1_Prod_Version=ShockwaveFlash>");
document.write("</EMBED></OBJECT>");