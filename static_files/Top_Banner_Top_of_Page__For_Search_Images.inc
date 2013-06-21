<?

//  Create Top_Banner



// Create Div



echo ("<Div class=TopBanner>");


require ("Top_Banner_Barcelona_1_Array.inc") ;
require ("Top_Banner_Barcelona_2_July_2006_Array.inc") ;
//require ("Top_Banner_Quote.inc") ;























//      Thomas_Bayes Array                 ***********************************



 $Thomas_Bayes_Names =  Array("140_Height_Bayes_Evert_and_ArthurX.jpg",

"140_Height_Bayes_Thomas_Almost_finished_by_ArthurX.jpg",

"140_Height_Bayes_Thomas_Almost_finished_Close_by_ArthurX.jpg",

"140_Height_Bayes_Thomas_Almost_finished_Front_by_ArthurX.jpg",

"140_Height_Bayes_Thomas_Almost_Hand_finished_by_ArthurX.jpg",

"140_Height_Bayes_Thomas_Blue_by_ArthurX.jpg",

"140_Height_Bayes_Thomas_Mathematicus_Painting_by_ArthurX_August_2006.jpg",

"140_Height_Bayes_Thomas_Purple_by_ArthurX.jpg",

"140_Height_Bayes_through_window_and_Niels_Brouwer_and_ArthurX.jpg",

"140_Height_Bayes_through_window_by_ArthurX.jpg",

"140_Height_Evert_and_Round_Round_Wubble_litho_by_ArthurX.jpg",

//"140_Height_Evert_and_Round_Round_Wubble_litho_by_ArthurX_wide.jpg",

"140_Height_Niels_Arthurx_and_Thomas_Bayes.jpg");









//     Function     Random Image from Array                       ********



function Random_Image($Image_Name_Array , $Number_Wanted , $URL, $Directory){









$DoubleChequer = array ();



for( $i=0; $i<$Number_Wanted; $i++){







$randomno=rand(0, sizeof($Image_Name_Array)-1 );



for( $j=0; $j< sizeof($DoubleChequer) ; $j++){

     if ( $DoubleChequer[$j] == $randomno){



       $randomno=rand(0, sizeof($Image_Name_Array)-1 );

       $j = 0 ;

      }  ;

    } ;

$DoubleChequer[$j] = $randomno ;

//$randomno = sizeof($Image_Name_Array)-1;

echo("<a href="); echo ($URL); echo(">") ;

echo("<img src=\"Top_Banner/");  echo ($Directory);  echo( "/")  ;

echo($Image_Name_Array[$randomno]. "\"")  ;

echo(" height='140' border='0' ></a>")  ;



if( $Image_Name_Array[$randomno]=="Anna_In_BioShop_Avinyo_and_El_140_height.jpg"){

 echo("<img src=Top_Banner/Barcelona/Anna_No_Green_NoFlash_140_height.jpg border=0>");

 $i++  ;

} ;

if($Image_Name_Array[$randomno]=="Cathedral_Seu_Photo_140)height.jpg"){

 echo("<img src=Top_Banner/Barcelona/Painting_Cathedral_Seu_140_height.jpg border=0>");

 $i++  ;

} ;

} ;



};



//           Create   Left Top Banner                             *************************



Random_Image($Barcelona_July_2006_Names , 3 , 'Barcelona_July_2006.html', 'Barcelona_July_2006') ;

 echo ("</Div>");



//           Create  Middle Top Banner                             ************************



 echo("&nbsp;<OBJECT classid=clsid:D27CDB6E-AE6D-11cf-96B8-444553540000");

  echo("codebase=http://fpdownload.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=4,0,0,0");

 echo ('ID=Navtor WIDTH="300" HEIGHT="140">');

  echo("<PARAM NAME=movie VALUE=Top_Banner/TopBanner_ArthurX_Art_Music_Architecture_300x140.swf> ");

  echo("<PARAM NAME=quality VALUE=autohigh> ");

 echo ("<PARAM NAME=bgcolor VALUE=#FFFFFF> ");





 echo('<EMBED SRC="Top_Banner/TopBanner_ArthurX_Art_Music_Architecture_300x140.swf"');

 echo(' swLiveConnect=FALSE WIDTH="300" HEIGHT="140"');

  echo(' QUALITY=autohigh BGCOLOR=#FFFFFF');

  echo(' TYPE="application/x-shockwave-flash" PLUGINSPAGE="http://www.macromedia.com/shockwave/download/index.cgi?P1_Prod_Version=ShockwaveFlash">');

  echo("</EMBED></OBJECT>&nbsp;  ");











//           Create   Right Top Banner                             *************************



//Random_Image($Thomas_Bayes_Names , 5 , 'Thomas_Bayes_painted_by_ArthurX.html', 'Thomas_Bayes') ;

echo ("<Div class=RightTop>");


Random_Image($Barcelona_Names , 5 , 'Barcelona.html', 'Barcelona') ;







 echo ("</Div>");
 
 ?>