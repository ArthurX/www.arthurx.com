/** mailto.js : A JavaScript to email the results of a form to a specified
                email address.  This script attempts to limit the amount
                of form specific JavaScript that must be embedded into the
                HTML file containing the form.  Ideally the user would have
                to do nothing but name the form elements and specific that
                this JavaScript is to be run with the 'submit' button is
		pressed.
    Version :	1.0
    Created:	1999-01-15
    Modified:	1999-01-18
    Author:	Michael McDonnell <michael@winterstorm.org>
    License:	GPL 2.0 (or newer)
    Copyright:	(c) 1999 Michael McDonnell

 **/

function sendEmail(myForm, Address, Subject) {
myBody = "Hi Elizabeth,\n\nI want to order the following:\n\n";
	for(i = 0; i < myForm.elements.length; i++) {
		fe = myForm.elements[i];
		switch(fe.type) {
			case "hidden_no_show":
			case "password":
			case "text":
			case "textarea":
				myBody += fe.name + ": " + fe.value + "\n";
				break;
			case "select-multiple":
			case "select-one":
				myNotFirst = false;
				myBody += fe.name + ": "
				for(j = 0; j < fe.options.length; j++) {
					if(fe.options[j].selected) {
						if(myNotFirst) {
							myBody += ", " + fe.options[j].value;
						} else {
							myNotFirst = true;
							myBody += fe.options[j].value;
						}
					}
				}
				myBody += "\n";
				break;
			case "radio":
				myBody += fe.name + ": ";
				if(fe.checked) {
					myBody += fe.value;
				}
				myBody += "\n";
				break;
			case "checkbox":
				if(fe.checked) {
					myBody += fe.name + ": " + fe.value + "\n";
				}
				break;
		}
	}

	myBody += "\n\nGreetings  ";

	fe = myForm.elements[(myForm.elements.length -12)];
	myBody +=  fe.value + ".\n";
	
	
	myURL = "mailto:" + escape(Address) + "?subject=" + 
		escape(Subject) + "&body=" + escape(myBody);

	window.location = myURL;
	return true;
}

