//=====================================================================||
//               NOP Design JavaScript Shopping Cart                   ||
//                                                                     ||
// For more information on SmartSystems, or how NOPDesign can help you ||
// Please visit us on the WWW at http://www.nopdesign.com              ||
//                                                                     ||
// Javascript portions of this shopping cart software are available as ||
// freeware from NOP Design.  You must keep this comment unchanged in  ||
// your code.  For more information contact FreeCart@NopDesign.com.    ||
//                                                                     ||
// JavaScript Shop Module, V.4.2.2                                     ||
//=====================================================================||

//---------------------------------------------------------------------||
//                       Global Options                                ||
//                      ----------------                               ||
// Shopping Cart Options, you can modify these options to change the   ||
// the way the cart functions.                                         ||
//                                                                     ||
// Options For Everyone:                                               ||
// =====================                                               ||
// * DisplayNotice: true/false, controls whether the user is provided  ||
//   with a popup letting them know their product is added to the cart ||
// * DisplayShippingColumn: true/false, controls whether the managecart||
//   and checkout pages display shipping cost column.                  ||
// * DisplayShippingRow: true/false, controls whether the managecart   ||
//   and checkout pages display shipping cost total row.               ||
// * DisplayTaxRow: true/false, controls whether the managecart        ||
//   and checkout pages display tax cost total row.                    ||
// * TaxRate: number, your area's current tax rate, ie: if your tax    ||
//   rate was 7.5%, you would set TaxRate = 0.075                      ||
// * MonetarySymbol: string, the symbol which represents dollars/euro, ||
//   in your locale.                                                   ||
// * Language: string, the two digit language code to display user     ||
//   messages in.  Supported languages:                                ||
//    * English  (en)    * French   (fr)                               ||
//    * Dutch    (nl)    * Spanish  (sp)                               ||
//    * German   (ge)    * Finnish  (fi)                               ||
//    * Swedish  (se)    * Brazilian (br)                              ||
//    * Italian  (it)                                                  ||
//                                                                     ||
// Options For Programmers:                                            ||
// ========================                                            ||
// * OutputItem<..>: string, the name of the pair value passed at      ||
//   checkouttime.  Change these only if you are connecting to a CGI   ||
//   script and need other field names, or are using a secure service  ||
//   that requires specific field names.                               ||
// * AppendItemNumToOutput: true/false, if set to true, the number of  ||
//   each ordered item will be appended to the output string.  For     ||
//   example if OutputItemId is 'ID_' and this is set to true, the     ||
//   output field name will be 'ID_1', 'ID_2' ... for each item.       ||
//---------------------------------------------------------------------||
DisplayNotice         = true;
DisplayShippingColumn = false;
DisplayShippingRow    = false;
DisplayTaxRow         = false;
TaxRate               = 0.0;
MonetarySymbol        = '€';
Language              = 'en';


OutputItemId          = 'ID_';
OutputItemQuantity    = 'QUANTITY_';
OutputItemPrice       = 'PRICE_';
OutputItemName        = 'NAME_';
OutputItemShipping    = 'SHIPPING_';
OutputItemAddtlInfo   = 'ADDTLINFO_';
OutputOrderSubtotal   = 'SUBTOTAL';
OutputOrderShipping   = 'SHIPPING';
OutputOrderTax        = 'TAX';
OutputOrderTotal      = 'TOTAL';
AppendItemNumToOutput = true;


//---------------------------------------------------------------------||
//                      Language Strings                               ||
//                     ------------------                              ||
// Strings displayed to end users, in language specific encoding.      ||
// only modify these strings if you wish to change language specific   ||
// wording for your site.  If you add a new language, please send it   ||
// back to NOP Design (FreeCart@NopDesign.com) so we can add it to the ||
// distribution.                                                       ||
//---------------------------------------------------------------------||
bLanguageDefined = false;

if ( Language == 'en' || !bLanguageDefined ) {
   strSorry  = "I'm Sorry, your cart is full, please proceed to checkout.";
   strAdded  = " added to your shopping cart.";
   strRemove = "Click 'Ok' to remove this product from your shopping cart.";
   strILabel = "Product Id";
   strDLabel = "Product Name/Description";
   strQLabel = "Quantity";
   strPLabel = "Price";
   strSLabel = "Shipping";
   strRLabel = "Remove From Cart";
   strRButton= "Remove";
   strSUB    = "SUBTOTAL";
   strSHIP   = "SHIPPING";
   strTAX    = "TAX";
   strTOT    = "TOTAL";
   strErrQty = "Invalid Quantity.";
   strNewQty = 'Please enter new quantity:';
   bLanguageDefined = true;
}


//=====================================================================||
//---------------------------------------------------------------------||
//    YOU DO NOT NEED TO MAKE ANY MODIFICATIONS BELOW THIS LINE        ||
//---------------------------------------------------------------------||
//=====================================================================||

//---------------------------------------------------------------------||
// FUNCTION:    CKquantity                                             ||
// PARAMETERS:  Quantity to                                            ||
// RETURNS:     Quantity as a number, and possible alert               ||
// PURPOSE:     Make sure quantity is represented as a number          ||
//---------------------------------------------------------------------||
function CKquantity(checkString) {
   var strNewQuantity = "";

   for ( i = 0; i < checkString.length; i++ ) {
      ch = checkString.substring(i, i+1);
      if ( (ch >= "0" && ch <= "9") || (ch == '.') )
         strNewQuantity += ch;
   }

   if ( strNewQuantity.length < 1 )
      strNewQuantity = "1";

   return(strNewQuantity);
}


//---------------------------------------------------------------------||
// FUNCTION:    AddToCart                                              ||
// PARAMETERS:  Form Object                                            ||
// RETURNS:     Cookie to user's browser, with prompt                  ||
// PURPOSE:     Adds a product to the user's shopping cart             ||
//---------------------------------------------------------------------||
function AddToCart(thisForm) {
   var iNumberOrdered = 0;
   var bAlreadyInCart = false;
   var notice = "";
   iNumberOrdered = GetCookie("NumberOrdered");

   if( iNumberOrdered == null )
       iNumberOrdered = 0;

   if ( thisForm.ID_NUM == null )
      strID_NUM    = "";
   else
      strID_NUM    = thisForm.ID_NUM.value;

   if ( thisForm.QUANTITY == null )
      strQUANTITY  = "1";
   else
      strQUANTITY  = thisForm.QUANTITY.value;

   if ( thisForm.PRICE == null )
      strPRICE     = "0.00";
   else
      strPRICE     = thisForm.PRICE.value;

   if ( thisForm.NAME == null )
      strNAME      = "";
   else
      strNAME      = thisForm.NAME.value;

   if ( thisForm.SHIPPING == null )
      strSHIPPING  = "0.00";
   else
      strSHIPPING  = thisForm.SHIPPING.value;
 
   if ( thisForm.ADDITIONALINFO == null )
      strADDTLINFO = "";
   else
      strADDTLINFO = thisForm.ADDITIONALINFO[thisForm.ADDITIONALINFO.selectedIndex].value;

   //Is this product already in the cart?  If so, increment quantity instead of adding another.
   for ( i = 1; i <= iNumberOrdered; i++ ) {
      NewOrder = "Order." + i;
      database = "";
      database = GetCookie(NewOrder);
 
      Token0 = database.indexOf("|", 0);
      Token1 = database.indexOf("|", Token0+1);
      Token2 = database.indexOf("|", Token1+1);
      Token3 = database.indexOf("|", Token2+1);
      Token4 = database.indexOf("|", Token3+1);
 
      fields = new Array;
      fields[0] = database.substring( 0, Token0 );
      fields[1] = database.substring( Token0+1, Token1 );
      fields[2] = database.substring( Token1+1, Token2 );
      fields[3] = database.substring( Token2+1, Token3 );
      fields[4] = database.substring( Token3+1, Token4 );
      fields[5] = database.substring( Token4+1, database.length );
 
      if ( fields[0] == strID_NUM &&
           fields[2] == strPRICE  &&
           fields[3] == strNAME   &&
           fields[5] == strADDTLINFO
         ) {
         bAlreadyInCart = true;
         dbUpdatedOrder = strID_NUM    + "|" +
                          (parseInt(strQUANTITY)+parseInt(fields[1]))  + "|" +
                          strPRICE     + "|" +
                          strNAME      + "|" +
                          strSHIPPING  + "|" +
                          strADDTLINFO;
         strNewOrder = "Order." + i;
         DeleteCookie(strNewOrder, "/");
         SetCookie(strNewOrder, dbUpdatedOrder, null, "/");
         notice = strQUANTITY + " " + strNAME + strAdded;
         break;
      }
   }


   if( !bAlreadyInCart ) {
      iNumberOrdered++;

      if ( iNumberOrdered > 12 )
         alert( strSorry );
      else {
         dbUpdatedOrder = strID_NUM    + "|" + 
                          strQUANTITY  + "|" +
                          strPRICE     + "|" +
                          strNAME      + "|" +
                          strSHIPPING  + "|" +
                          strADDTLINFO;

         strNewOrder = "Order." + iNumberOrdered;
         SetCookie(strNewOrder, dbUpdatedOrder, null, "/");
         SetCookie("NumberOrdered", iNumberOrdered, null, "/");
         notice = strQUANTITY + " " + strNAME + strAdded;
      }
   }

   if( DisplayNotice )
      alert(notice);
}


//---------------------------------------------------------------------||
// FUNCTION:    getCookieVal                                           ||
// PARAMETERS:  offset                                                 ||
// RETURNS:     URL unescaped Cookie Value                             ||
// PURPOSE:     Get a specific value from a cookie                     ||
//---------------------------------------------------------------------||
function getCookieVal (offset) {
   var endstr = document.cookie.indexOf (";", offset);

   if ( endstr == -1 )
      endstr = document.cookie.length;
   return(unescape(document.cookie.substring(offset, endstr)));
}


//---------------------------------------------------------------------||
// FUNCTION:    FixCookieDate                                          ||
// PARAMETERS:  date                                                   ||
// RETURNS:     date                                                   ||
// PURPOSE:     Fixes cookie date, stores back in date                 ||
//---------------------------------------------------------------------||
function FixCookieDate (date) {
   var base = new Date(0);
   var skew = base.getTime();

   date.setTime (date.getTime() - skew);
}


//---------------------------------------------------------------------||
// FUNCTION:    GetCookie                                              ||
// PARAMETERS:  Name                                                   ||
// RETURNS:     Value in Cookie                                        ||
// PURPOSE:     Retrieves cookie from users browser                    ||
//---------------------------------------------------------------------||
function GetCookie (name) {
   var arg = name + "=";
   var alen = arg.length;
   var clen = document.cookie.length;
   var i = 0;

   while ( i < clen ) {
      var j = i + alen;
      if ( document.cookie.substring(i, j) == arg ) return(getCookieVal (j));
      i = document.cookie.indexOf(" ", i) + 1;
      if ( i == 0 ) break;
   }

   return(null);
}


//---------------------------------------------------------------------||
// FUNCTION:    SetCookie                                              ||
// PARAMETERS:  name, value, expiration date, path, domain, security   ||
// RETURNS:     Null                                                   ||
// PURPOSE:     Stores a cookie in the users browser                   ||
//---------------------------------------------------------------------||
function SetCookie (name,value,expires,path,domain,secure) {
   document.cookie = name + "=" + escape (value) +
                     ((expires) ? "; expires=" + expires.toGMTString() : "") +
                     ((path) ? "; path=" + path : "") +
                     ((domain) ? "; domain=" + domain : "") +
                     ((secure) ? "; secure" : "");
}


//---------------------------------------------------------------------||
// FUNCTION:    DeleteCookie                                           ||
// PARAMETERS:  Cookie name, path, domain                              ||
// RETURNS:     null                                                   ||
// PURPOSE:     Removes a cookie from users browser.                   ||
//---------------------------------------------------------------------||
function DeleteCookie (name,path,domain) {
   if ( GetCookie(name) ) {
      document.cookie = name + "=" +
                        ((path) ? "; path=" + path : "") +
                        ((domain) ? "; domain=" + domain : "") +
                        "; expires=Thu, 01-Jan-70 00:00:01 GMT";
   }
}


//---------------------------------------------------------------------||
// FUNCTION:    MoneyFormat                                            ||
// PARAMETERS:  Number to be formatted                                 ||
// RETURNS:     Formatted Number                                       ||
// PURPOSE:     Reformats Dollar Amount to #.## format                 ||
//---------------------------------------------------------------------||
function moneyFormat(input) {
   var dollars = Math.floor(input);
   var tmp = new String(input);

   for ( var decimalAt = 0; decimalAt < tmp.length; decimalAt++ ) {
      if ( tmp.charAt(decimalAt)=="." )
         break;
   }

   var cents  = "" + Math.round(input * 100);
   cents = cents.substring(cents.length-2, cents.length)
           dollars += ((tmp.charAt(decimalAt+2)=="9")&&(cents=="00"))? 1 : 0;

   if ( cents == "0" )
      cents = "00";

   return(dollars + "." + cents);
}


//---------------------------------------------------------------------||
// FUNCTION:    RemoveFromCart                                         ||
// PARAMETERS:  Order Number to Remove                                 ||
// RETURNS:     Null                                                   ||
// PURPOSE:     Removes an item from a users shopping cart             ||
//---------------------------------------------------------------------||
function RemoveFromCart(RemOrder) {
   if ( confirm( strRemove ) ) {
      NumberOrdered = GetCookie("NumberOrdered");
      for ( i=RemOrder; i < NumberOrdered; i++ ) {
         NewOrder1 = "Order." + (i+1);
         NewOrder2 = "Order." + (i);
         database = GetCookie(NewOrder1);
         SetCookie (NewOrder2, database, null, "/");
      }
      NewOrder = "Order." + NumberOrdered;
      SetCookie ("NumberOrdered", NumberOrdered-1, null, "/");
      DeleteCookie(NewOrder, "/");
      location.href=location.href;
   }
}


//---------------------------------------------------------------------||
// FUNCTION:    ChangeQuantity                                         ||
// PARAMETERS:  Order Number to Change Quantity                        ||
// RETURNS:     Null                                                   ||
// PURPOSE:     Changes quantity of an item in the shopping cart       ||
//---------------------------------------------------------------------||
function ChangeQuantity(QtyOrder,CurrQty) {
   var newQty;

   newQty=prompt(strNewQty,CurrQty);
   if( isNaN(newQty) ) {
      alert( strErrQty );
   } else {
      NewOrder = "Order." + QtyOrder;
      database = "";
      database = GetCookie(NewOrder);
 
      Token0 = database.indexOf("|", 0);
      Token1 = database.indexOf("|", Token0+1);
      Token2 = database.indexOf("|", Token1+1);
      Token3 = database.indexOf("|", Token2+1);
      Token4 = database.indexOf("|", Token3+1);
 
      fields = new Array;
      fields[0] = database.substring( 0, Token0 );
      fields[1] = database.substring( Token0+1, Token1 );
      fields[2] = database.substring( Token1+1, Token2 );
      fields[3] = database.substring( Token2+1, Token3 );
      fields[4] = database.substring( Token3+1, Token4 );
      fields[5] = database.substring( Token4+1, database.length );
 
      dbUpdatedOrder = fields[0] + "|" +
                       newQty    + "|" +
                       fields[2] + "|" +
                       fields[3] + "|" +
                       fields[4] + "|" +
                       fields[5];
      strNewOrder = "Order." + QtyOrder;
      DeleteCookie(strNewOrder, "/");
      SetCookie(strNewOrder, dbUpdatedOrder, null, "/");

      return true;
   }

   return false;
}


//---------------------------------------------------------------------||
// FUNCTION:    GetFromCart                                            ||
// PARAMETERS:  Null                                                   ||
// RETURNS:     Product Table Written to Document                      ||
// PURPOSE:     Draws current cart product table on HTML page          ||
//---------------------------------------------------------------------||
function GetFromCart( fShipping ) {
   if( fShipping )
      WriteToForm( true, fShipping );
   else
      WriteToForm( true, 0 );
}


//---------------------------------------------------------------------||
// FUNCTION:    WriteToForm                                            ||
// PARAMETERS:  Null                                                   ||
// RETURNS:     Product hidden fields Written to Document              ||
// PURPOSE:     Draws current cart product hidden fields on HTML form  ||
//              if bDisplay == true, shows cart output as HTML table   ||
//---------------------------------------------------------------------||
function WriteToForm( bDisplay, fShipping ) {
   var iNumberOrdered = 0;
   var fTotal         = 0;
   var fTax           = 0;
   var strTotal       = "";
   var strTax         = "";
   var strShipping    = "";
   var strOutput      = "";
   iNumberOrdered = GetCookie("NumberOrdered");

   if( iNumberOrdered == null )
    iNumberOrdered = 0;

   if ( bDisplay )
      strOutput = "<TABLE CLASS=\"nopcart\"><TR>" +
                  "<TD CLASS=\"nopheader\"><B>"+strILabel+"</B></TD>" +
                  "<TD CLASS=\"nopheader\"><B>"+strDLabel+"</B></TD>" +
                  "<TD CLASS=\"nopheader\"><B>"+strQLabel+"</B></TD>" +
                  "<TD CLASS=\"nopheader\"><B>"+strPLabel+"</B></TD>" +
                  (DisplayShippingColumn?"<TD CLASS=\"nopheader\"><B>"+strSLabel+"</B></TD>":"") +
                  "<TD CLASS=\"nopheader\"><B>"+strRLabel+"</B></TD></TR>";

   for ( i = 1; i <= iNumberOrdered; i++ ) {
      NewOrder = "Order." + i;
      database = "";
      database = GetCookie(NewOrder);

      Token0 = database.indexOf("|", 0);
      Token1 = database.indexOf("|", Token0+1);
      Token2 = database.indexOf("|", Token1+1);
      Token3 = database.indexOf("|", Token2+1);
      Token4 = database.indexOf("|", Token3+1);

      fields = new Array;
      fields[0] = database.substring( 0, Token0 );
      fields[1] = database.substring( Token0+1, Token1 );
      fields[2] = database.substring( Token1+1, Token2 );
      fields[3] = database.substring( Token2+1, Token3 );
      fields[4] = database.substring( Token3+1, Token4 );
      fields[5] = database.substring( Token4+1, database.length );

      fTotal     += (parseInt(fields[1]) * parseFloat(fields[2]) );
      fShipping  += (parseInt(fields[1]) * parseFloat(fields[4]) );
      fTax        = (fTotal * TaxRate);
      strTotal    = moneyFormat(fTotal);
      strTax      = moneyFormat(fTax);
      strShipping = moneyFormat(fShipping);

      if ( bDisplay ) {
         strOutput += "<TR><TD CLASS=\"nopentry\">"  + fields[0] + "</TD>";

         if ( fields[5] == "" )
            strOutput += "<TD CLASS=\"nopentry\">"  + fields[3] + "</TD>";
         else
            strOutput += "<TD CLASS=\"nopentry\">"  + fields[3] + " - <I>"+ fields[5] + "</I></TD>";

         strOutput += "<TD CLASS=\"nopentry\">" + fields[1] + "</TD>" +
                      "<TD CLASS=\"nopentry\">"+ MonetarySymbol + moneyFormat(fields[2]) + "/ea</TD>";

         if ( DisplayShippingColumn ) {
            if ( parseFloat(fields[4]) > 0 )
               strOutput += "<TD CLASS=\"nopentry\">"+ MonetarySymbol + moneyFormat(fields[4]) + "/ea</TD>";
            else
               strOutput += "<TD CLASS=\"nopentry\">N/A</TD>";
         }

         strOutput += "<TD CLASS=\"nopentry\" ALIGN=CENTER><input type=button value=\" "+strRButton+" \" onClick=\"RemoveFromCart("+i+")\" class=\"nopbutton\"></TD></TR>";
      }

      if( AppendItemNumToOutput ) {
         strFooter = i;
      } else {
         strFooter = "";
      }
      strOutput += "<input type=hidden name=\"" + OutputItemId        + strFooter + "\" value=\"" + fields[0] + "\">";
      strOutput += "<input type=hidden name=\"" + OutputItemQuantity  + strFooter + "\" value=\"" + fields[1] + "\">";
      strOutput += "<input type=hidden name=\"" + OutputItemPrice     + strFooter + "\" value=\"" + fields[2] + "\">";
      strOutput += "<input type=hidden name=\"" + OutputItemName      + strFooter + "\" value=\"" + fields[3] + "\">";
      strOutput += "<input type=hidden name=\"" + OutputItemShipping  + strFooter + "\" value=\"" + fields[4] + "\">";
      strOutput += "<input type=hidden name=\"" + OutputItemAddtlInfo + strFooter + "\" value=\"" + fields[5] + "\">";

   }

   if ( bDisplay ) {
      strOutput += "<TR><TD CLASS=\"noptotal\" COLSPAN=4><B>"+strSUB+"</B></TD>";
      strOutput += "<TD CLASS=\"noptotal\" COLSPAN=2><B>" + MonetarySymbol + strTotal + "</B></TD>";
      strOutput += "</TR>";

      if ( DisplayShippingRow ) {
         strOutput += "<TR><TD CLASS=\"noptotal\" COLSPAN=4><B>"+strSHIP+"</B></TD>";
         strOutput += "<TD CLASS=\"noptotal\" COLSPAN=2><B>" + MonetarySymbol + strShipping + "</B></TD>";
         strOutput += "</TR>";
      }

      if ( DisplayTaxRow ) {
         strOutput += "<TR><TD CLASS=\"noptotal\" COLSPAN=4><B>"+strTAX+"</B></TD>";
         strOutput += "<TD CLASS=\"noptotal\" COLSPAN=2><B>" + MonetarySymbol + strTax + "</B></TD>";
         strOutput += "</TR>";
      }

      strOutput += "<TR><TD CLASS=\"noptotal\" COLSPAN=4><B>"+strTOT+"</B></TD>";
      strOutput += "<TD CLASS=\"noptotal\" COLSPAN=2><B>" + MonetarySymbol + moneyFormat((fTotal + fShipping + fTax)) + "</B></TD>";
      strOutput += "</TR>";
      strOutput += "</TABLE>";

      strOutput += "<input type=hidden name=\""+OutputOrderSubtotal+"\" value=\""+ MonetarySymbol + strTotal + "\">";
      strOutput += "<input type=hidden name=\""+OutputOrderShipping+"\" value=\""+ MonetarySymbol + strShipping + "\">";
      strOutput += "<input type=hidden name=\""+OutputOrderTax+"\"      value=\""+ MonetarySymbol + strTax + "\">";
      strOutput += "<input type=hidden name=\""+OutputOrderTotal+"\"    value=\""+ MonetarySymbol + moneyFormat((fTotal + fShipping + fTax)) + "\">";
   }

   document.write(strOutput);
   document.close();
}

//=====================================================================||
//               END NOP Design SmartPost Shopping Cart                ||
//=====================================================================||

