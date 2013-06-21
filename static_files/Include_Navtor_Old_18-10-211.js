





document.write("<OBJECT classid=clsid:D27CDB6E-AE6D-11cf-96B8-444553540000");

 document.write("codebase=http://active.macromedia.com/flash2/cabs/swflash.cab#version=3,0,0,0");

 document.write("ID=Navtor WIDTH=230 HEIGHT=900>");

  document.write("<PARAM NAME=movie VALUE=Navtor.swf> ");

  document.write("<PARAM NAME=quality VALUE=autohigh> ");

  document.write("<PARAM NAME=bgcolor VALUE=#FFFFFF> ");



  document.write('<EMBED SRC="Navtor.swf"');

  document.write(' swLiveConnect=FALSE WIDTH=240 HEIGHT=900');

  document.write(' QUALITY=autohigh BGCOLOR=#FFFFFF');

  document.write(' TYPE="application/x-shockwave-flash" PLUGINSPAGE="http://www.macromedia.com/shockwave/download/index.cgi?P1_Prod_Version=ShockwaveFlash">');

  document.write('</EMBED></OBJECT>');



    document.write('<center><br>Contact: <br>Elizabeth Kaskens<br>elizabeth@thescars.com<br>0031-6-14748466<br> &copy; ArthurX ');

    var curdate = new Date()

var year = curdate.getYear()

document.write((year + 1900) + "<br></center>")



document.write("</DIV> ");

document.write("<DIV class=TopBanner >");





 //Create Top Banner

 // Paintings List


// Bethanien
 var Bethanien = new Array("https://lh6.googleusercontent.com/-nR8tw2Y48LQ/Tj0caPQk44I/AAAAAAAAEBk/EyXeDnYTL-Q/s288/IMG_1732.JPG",
"https://lh6.googleusercontent.com/-rGDxna6pK1A/Tj0WqyZB_mI/AAAAAAAAEA4/BMVwylWLuyA/s288/IMG_1285.JPG",
"https://lh6.googleusercontent.com/-N_ekzA7KxM4/Tj0eD0iRXfI/AAAAAAAAEB0/wId5MCE8Jzs/s288/IMG_1151.JPG",
"https://lh6.googleusercontent.com/-hEqI3Z3opP8/Tj0cLkuaxDI/AAAAAAAAEBg/jTguKfFgF4s/s288/IMG_1334.JPG",
"https://lh3.googleusercontent.com/-eFmFBUIwpzs/TnWzO1pqC8I/AAAAAAAAEL8/DPslIe4dZ5A/s288/IMG_1740.JPG",

"https://lh4.googleusercontent.com/-OnoZhpd4qAk/TpSeoUe-F1I/AAAAAAAAETQ/3njlVdSHKLo/s288/elibetha.jpg",

"https://lh6.googleusercontent.com/-Hg7yJB4BmsA/Tj0box-RXNI/AAAAAAAAEBY/pwURO1yybCw/s288/IMG_1182.JPG",

"https://lh4.googleusercontent.com/-0nDhph9zKZs/Tj0dCqdQaiI/AAAAAAAAEBs/-PUEaq1Hti8/s288/IMG_1357.JPG");







var DoubleChequer = new Array

DoubleChequer[0] = Bethanien.length



for(i=0; i<4; i++){







randomno=Math.floor((Math.random()*Bethanien.length));



for(j=0; j<DoubleChequer.length ; j++){

     if (DoubleChequer[j] == randomno){

       randomno=Math.floor((Math.random()*Bethanien.length))

       j = 0

      }

    }

DoubleChequer[j] = randomno





document.write("<a href='index.html'>")

document.write("<img src=")

document.write(Bethanien[randomno])

document.write(" height=140 border=0 ></a>")
}
// End Bethanien





// Barcelona 1


/*
  var Barcelona_Names = new Array("140_Height_ala-davinyo_Painting.jpg",

"140_Height_Ala_Back_Art.jpg",

"140_Height_Ala_Back_Paints_Crop.jpg",

"140_Height_Ala_Black_Blue_Arthur_Whole.jpg",

"140_Height_Ala_Black_Blue_Face_Hand_Arthur_Crop_Color.jpg",

"140_Height_Ala_Body_Paints.jpg",

"140_Height_Ala_Hand.jpg",

"140_Height_Arc_Bisbe_Building.jpg",

"140_Height_Arc_Bisbe_Building_Barcelona.jpg",

"140_Height_arc_bisbe_Front_Barcelona.jpg",

"140_Height_Arc_Bisbe_Painting_Barcelona_diagonal.jpg",

"140_Height_Arc_Bisbe_Painting_Front.jpg",

"140_Height_ArthurX_Painting_D_Avinyo_Rasta_Dance_Barcelona_2006.jpg",

"140_Height_ArthurX_Paints_Fatty_Catty_and_Cathedral_Seu_Barcelona_2006.jpg",

"140_Height_ArthurX_Paints_Fatty_Catty_Tit.jpg",

"140_Height_ArthurX_Paints_Fille_sur_Pelouse_paris.jpg",

"140_Height_ArthurX_paints_Heart_Paris_hart_pelouse.jpg",

"140_Height_ArthurX_paints_Violist_of_Church_de_la_Merce_in_Barcelona_2006.jpg",

"140_Height_ArthurX_paints_Violist_of_Church_de_la_Merce_Tit_in_Barcelona_2006.jpg",

"140_Height_ArthurX_Sam_Looking_Rasta_Painting_Barcelona.jpg",

"140_Height_Art_Atelier_Painting_Paris_Color.jpg",

"140_Height_Cathedral_ArthurX_Woman_Barcelona.jpg",

"140_Height_Cathedral_Painting_Barcelona.jpg",

"140_Height_Fatty_Catty_Painting_Finished.jpg",

"140_Height_Rasta_Avinyo_Dance.jpg",

"140_Height_Taragons_Platja_Painting_Finished.jpg",

"140_Height_Tarragona_Platja_Model.jpg",

"140_Height_Tarragona_Platja_Photo.jpg",

"140_Height_Violist_Painting_finished.jpg",

"140_Height_vioolmeisje_bij_willemiijn-in-huis_Crop+Color.jpg",

"140_Height_Willemijn_Crop_Color.jpg");







var DoubleChequer = new Array

DoubleChequer[0] = Barcelona_Names.length



for(i=0; i<4; i++){







randomno=Math.floor((Math.random()*Barcelona_Names.length));



for(j=0; j<DoubleChequer.length ; j++){

     if (DoubleChequer[j] == randomno){

       randomno=Math.floor((Math.random()*Barcelona_Names.length))

       j = 0

      }

    }

DoubleChequer[j] = randomno





document.write("<a href='index.html'>")

document.write("<img src=\"Top_Banner/Barcelona_July_2006/")

document.write(Barcelona_Names[randomno], "\"")

document.write(" height=140 border=0 ></a>")



if(Barcelona_Names[randomno]=="Anna_In_BioShop_Avinyo_and_El_140_height.jpg"){

 document.write("<img src=Top_Banner/Barcelona/Anna_No_Green_NoFlash_140_height.jpg border=0>")

 i++

}

if(Barcelona_Names[randomno]=="Cathedral_Seu_Photo_140_height.jpg"){

 document.write("<img src=Top_Banner/Barcelona/Painting_Cathedral_Seu_140_height.jpg border=0>")

 i++

}

}



*/

















// Insert Flash ArthurX Art Music Architecture



 document.write("\&nbsp;<OBJECT classid=clsid:D27CDB6E-AE6D-11cf-96B8-444553540000");

 document.write("codebase=http://active.macromedia.com/flash2/cabs/swflash.cab#version=3,0,0,0");

 document.write('ID=Top_Choice WIDTH="300" HEIGHT="140">');

  document.write("<PARAM NAME=movie VALUE=TopBanner_ArthurX_Art_Music_Architecture_300x140.swf> ");

  document.write("<PARAM NAME=quality VALUE=autohigh> ");

  document.write("<PARAM NAME=bgcolor VALUE=#FFFFFF> ");





 document.write('<EMBED SRC=\"TopBanner_ArthurX_Art_Music_Architecture_300x140.swf\"');

  document.write(' swLiveConnect=FALSE WIDTH=\"300\" HEIGHT=\"140\"');

  document.write(' QUALITY=autohigh BGCOLOR=#FFFFFF');

  document.write(' TYPE=\"application/x-shockwave-flash\" PLUGINSPAGE=\"http://www.macromedia.com/shockwave/download/index.cgi?P1_Prod_Version=ShockwaveFlash\">');

  document.write("</EMBED></OBJECT> \&nbsp;");





// Bethanien Right side
 var Bethanien = new Array("https://lh6.googleusercontent.com/-bmpW_IyiYtk/Tha-AiJxUxI/AAAAAAAAD5M/XNzIIUX_who/s288/IMG_1501.JPG",
"https://lh4.googleusercontent.com/-RStiXLoxoGY/Tha4wf0EAFI/AAAAAAAAD30/a7lx3o_QwCI/s288/IMG_1445.JPG",
"https://lh6.googleusercontent.com/-9Jy17_LUL30/Tha-TCXHz5I/AAAAAAAAD5U/Ol8_epXrVvo/s288/IMG_1656.JPG",
"https://lh5.googleusercontent.com/-HP_n0iyHYPU/TnWz2a0qVII/AAAAAAAAEMI/ijI-_nzBeSE/s288/IMG_1725.JPG",
"https://lh3.googleusercontent.com/-zF6j9bbYTSA/Tj0cr2LqsZI/AAAAAAAAEBo/E4T6M9KAn-8/s288/IMG_1726.JPG",
"https://lh6.googleusercontent.com/-4ZuD2o-H1WU/Tha9zsDdGxI/AAAAAAAAD5I/ehgPJyWSC4Q/s288/IMG_1420.JPG",
"https://lh6.googleusercontent.com/--oFav1M-tLQ/Tha4yX7miXI/AAAAAAAAD34/e0Vvmbf1-zs/s288/IMG_1448.JPG",
"https://lh5.googleusercontent.com/-8JtJfUl3gnQ/Tha7QDlOv_I/AAAAAAAAD4o/atG2B4JysYI/s288/IMG_1610.JPG",
"https://lh6.googleusercontent.com/-3wXzUWWdEPA/Tj0fEZpXUSI/AAAAAAAAEB8/DmLcT-aJDn4/s288/IMG_1187.JPG",
"https://lh6.googleusercontent.com/-1lx1td6l_3I/Tha79UCmOdI/AAAAAAAAD4w/f_vPp3224GM/s288/IMG_1589.JPG",
"https://lh3.googleusercontent.com/-MtMDhT6QUU0/Tha-Jw-lLAI/AAAAAAAAD5Q/gwKkjU4LmIo/s288/IMG_1691.JPG",
"https://lh3.googleusercontent.com/-6o3ldnh3IL0/Tj-u7vLZMGI/AAAAAAAAECY/z1sQA1ouG-c/s288/IMG_1201.JPG",
"https://lh6.googleusercontent.com/-hRQuAm7k3iE/Tj-vcmCoFpI/AAAAAAAAECc/rb0SS3umcAA/s288/IMG_1231.JPG",

"https://lh5.googleusercontent.com/-L5JF1NVSamc/Tj0ewuIRk-I/AAAAAAAAEB4/cIyOFt9vJQ0/s288/IMG_1161.JPG");







var DoubleChequer = new Array

DoubleChequer[0] = Bethanien.length



for(i=0; i<4; i++){







randomno=Math.floor((Math.random()*Bethanien.length));



for(j=0; j<DoubleChequer.length ; j++){

     if (DoubleChequer[j] == randomno){

       randomno=Math.floor((Math.random()*Bethanien.length))

       j = 0

      }

    }

DoubleChequer[j] = randomno





document.write("<a href='index.html'>")

document.write("<img src=")

document.write(Bethanien[randomno])

document.write(" height=140 border=0 ></a>")
}
// End Bethanien right













//  Architecture

/*

  var Barcelona_Names = new Array("Anna_Blauw_Zwart_140_height.jpg",



"Hush_Woman_Cat_Contrast_extra_140_height.jpg",

"Anna_Black_Blue_Purple_140_height.jpg",

"Anna_In_BioShop_Avinyo_and_El_140_height.jpg",

"Anna_No_Green_NoFlash_140_height.jpg",

"Anna_OnlyBlack_140_height.jpg" ,

"Art_Paints_pizzaGirl_Behind_Canvas_140_height.jpg"  ,



"Anna_Outside_Stone_Whole_Painting_140_height.jpg"  ,







"Art_Paints_pizzaGirl_behind_Canvas_2_140_height.jpg"  ,

"Art_Paints_PizzaGirl_Front_Red_140_height.jpg",

"Art_Paints_PizzaGirl_Looking_on_Canvas_140_height.jpg"  ,



"Art_Shows_Lorry_Leg_of_PizzaGirl_140_height.jpg"  ,



"Arthur_painting_Cat_NoFlash_140_height.jpg"  ,



"Arthur_painting_Violist_Black_Flash_140_height.jpg"  ,



"Cathedral_Seu_Photo_140_height.jpg"  ,



"Church_La_Merce_Art+volist_140_height.jpg"  ,

"Crawling_BackWay_Future_140_height.jpg" ,

"El_Hldong_Pizza_Outside_Gallery_140_height.jpg" ,

"El+Palm_140_height.jpg",

"Galeria_Pizza_Girl_SpanishMan_140_height.jpg",

"Little_King_of_Sitges_Blue+Purple_140_height.jpg",

"Lorry_Art_HushHush_140_height.jpg",

"Painting_Cathedral_Seu_140_height.jpg",

"PizzaGirl_Finished_140_height.jpg",

"Nude_Man_Complete_140_height.jpg",

"PizzaGirl_Takes_Break_140_height.jpg",

"Sketch_Anna_Avinyo_140_height.jpg",

"Sketch_Violist_140_height.jpg",

"Tony_Sarah_Art_tlaking_Cat_Flash_140_height.jpg",

"Tony_sitting_in_front_of_Gallery_140_height.jpg",

"Tony_Talking_Arthur_Cat_NoFlash_140_height.jpg",

"Vilolist_All_140_height.jpg",

"Violist_NudeMan_Painting_140_height.jpg",

"Violist_Painting_Finished_Outside_140_height.jpg",

"Violist_Painting_Red_Blue_140_height.jpg",

"Violist_Ready_Outside_Hold_by_el_140_height.jpg")







var DoubleChequer = new Array

DoubleChequer[0] = Barcelona_Names.length



for(i=0; i<5; i++){







randomno=Math.floor((Math.random()*Barcelona_Names.length));



for(j=0; j<DoubleChequer.length ; j++){

     if (DoubleChequer[j] == randomno){

       randomno=Math.floor((Math.random()*Barcelona_Names.length))

       j = 0

      }

    }

DoubleChequer[j] = randomno





document.write("<a href='index.html'>")

document.write("<img src=\"Top_Banner/Barcelona/")

document.write(Barcelona_Names[randomno], "\"")

document.write(" height=140 border=0 ></a>")



if(Barcelona_Names[randomno]=="Anna_In_BioShop_Avinyo_and_El_140_height.jpg"){

 document.write("<img src=Top_Banner/Barcelona/Anna_No_Green_NoFlash_140_height.jpg border=0>")

 i++

}

if(Barcelona_Names[randomno]=="Cathedral_Seu_Photo_140_height.jpg"){

 document.write("<img src=Top_Banner/Barcelona/Painting_Cathedral_Seu_140_height.jpg border=0>")

 i++

}
}
*/




 //           Create Quote                                          ***********************


//             Quote Array



Quote_array = new Array ("If live is like <br> a prison without escape,<p> A Painting is a message to<br> Prisoners after you. <br>Killroy was here.",

                          "A Spy of his own Mind,<br>That's an Artist.",

                          "A Spy of his own Mind,<br>That's an Artist.",

                          "Poorest <br>The slave <br>To no one.",

                          "A friend is like an oracle:<p>Difficult to understand,<br>Impossible to interpret, <br>Slowly sinking away in a boggy marsh.",

                           "I eat dreams and <br> Kill you on the way.",

                           "Thinking is,<br>Directed dreaming.",

                           "What is never dreamed,<br> Will never be.",

                           "The Rich getting richer,<br> Is not wrong.<p>But the Poor getting rich,<br>Is better,<br>Even for the Rich.",

                           "Senseless is the whole life,<br>No way of stopping it.",

                           "For the Pope it's hard to choose between<br>anticonception and war.<p>Because he can't follow the perpetual logic of:<br>Population growth => Famine => War.",

                           "She moved her whole slender body. <br>We were all chasing our dreams.",

                           "To protect a building against decay,<br> You have to turn it into a work of Art.",

                           "If you take the most exclusive palace,<br> And copy it 10 times,<br>It will be the most boring street on earth.",

                           "You can't win, <br> By killing your enemy.",

                           "The Graveyard of Dreams,<br>The place to make friends.",

			   "We all will end up in the same place,<br>Only pretence separates us.",

			   "All friendship is Sterbe-Begleitung." ,

                           "An economist is someone,<br>who switches of his brains today,<br>'cause he knows they will have more value tomorrow." ,
                         
                           "We have some time to kill, <br> before we die, <br> so let's make the best of it.") ;





randomno=Math.floor((Math.random()*Quote_array.length));



document.write( "<div class='Quote'><p>");

document.write( "<i><b><br> \"", Quote_array[randomno] , "\"</i><p> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; ArthurX</b>");

document.write( "<br><br>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;<g:plusone size=\"medium\"></g:plusone></div>");

  (function() {
    var po = document.createElement('script'); po.type = 'text/javascript'; po.async = true;
    po.src = 'https://apis.google.com/js/plusone.js';
    var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(po, s);
  })();






