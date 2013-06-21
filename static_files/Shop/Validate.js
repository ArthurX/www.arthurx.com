<HTML>
<HEAD>
<TITLE>Required Fields</TITLE>
<SCRIPT>
function validate() {
mNv=mainform.Name.value;
if (mNv=='') {
alert('Your name is a required field. Please try again.');
event.returnValue=false;
}
if (!(mainform.Sex[0].checked || mainform.Sex[1].checked)) {
alert('Your sex is a required field. Please try again.');
event.returnValue=false;
}
}
</SCRIPT>
</HEAD>
<BODY>
<FORM NAME="mainform" ACTION="http://yourdomainhere/cgi-bin/post-query" METHOD="post" onsubmit="validate();">
<INPUT TYPE="TEXT" NAME="Name" >Please enter your name (required)
<BR>
<INPUT TYPE="RADIO" NAME="Sex" VALUE="Male">Male
<INPUT TYPE="RADIO" NAME="Sex" VALUE="Female">Female
<BR>
<INPUT TYPE="SUBMIT">
</FORM>
</BODY>
</HTML>