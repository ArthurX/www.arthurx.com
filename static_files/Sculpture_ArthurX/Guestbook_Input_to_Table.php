<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.0 Transitional//EN"><html>
<HEAD>
  <LINK REL="icon" HREF="images/mozilla-16.png" TYPE="image/png">
 <link rel="shortcut icon" href="favicon.ico">
<LINK REL=StyleSheet HREF="style.css" TYPE="text/css" MEDIA=screen>
<LINK REL="icon" HREF="images/mozilla-16.png" TYPE="image/png">
<link rel="shortcut icon" href="favicon.ico">

<TITLE>ArthurX: Artist, Rocker, Painter.</TITLE>

</HEAD>
<?php
//  Include Top Banner   ************************************************

include("Top_Banner.inc");
?>




<div class="Navtor">
<SCRIPT LANGUAGE=JavaScript src=Include_Navtor_Short.js>
</SCRIPT>
</div>

<div class="Main" >
<H1><br>GuestBook<BR>Feel free to write<br> in my Guestbook!</H1>
 <?php

require("Login_data.php");

mysql_connect("localhost", $User_Name, $Password) or die(mysql_error());
//echo "Connected to MySQL<br>" ;

mysql_select_db($Database_Name) or die(mysql_error());
echo "Connected to Database <p>";


//      Create output of the entries                         ***************

mysql_query("INSERT INTO guestbook
(name, email, date, text) VALUES('Megan','sony-vid@sony-vid.net','2006-10-20 10:05:54','You\'re website looks very good, it was a pleasure to be on you\'re. Keep on the good work :-)') ")
or die(mysql_error());

mysql_query("INSERT INTO guestbook
(name, email, date, text) VALUES('Ed interactive film company',' ','2006-10-14 19:19:44','hallo Elizabeth,

Wat een toffe website !!!! Ik heb hem bij mijn favo\'s gezet en zal je zeker in gedachten houden als ik op zoek ben naar kunst !!

Het ga je goed en tot in de toekomst ergens !!

Grtz,

Ed ;-))') ")
or die(mysql_error());

mysql_query("INSERT INTO guestbook
(name, email, date, text) VALUES('Ala','Ala','2006-10-01 20:50:45','Hello!!!
Thank u sooooooooo much for sending me the painting I like them a lot!!! I visited also the web and you have done a great job.Is like reading a comic of your journey!!
I hope everithing goes good with the gallery thing. Call me if you are back...last time I was away and I could not make it...such a pity...
Big hug and kisses for the 3 of you!!!
Ala') ")
or die(mysql_error());

mysql_query("INSERT INTO guestbook
(name, email, date, text) VALUES('Norman','derbaettmaenn@web.de','2006-08-29 15:54:48','I\'ve seen many of ur pictures in magazins and mow i enjoy ur music im a german musician who lives near cologne i hope u know it.

respectful greetz from me and my band BEACHNOISE') ")
or die(mysql_error());

mysql_query("INSERT INTO guestbook
(name, email, date, text) VALUES('Binlamin','art@binlamin.com','2006-08-22 20:40:30','Crazily: nice site & art from the moon, I like it.


www.binlamin.com ') ")
or die(mysql_error());

mysql_query("INSERT INTO guestbook
(name, email, date, text) VALUES('Oko drammeh','drammehoko@yahoo.com','2006-07-26 18:16:12','Great job Arthur X and Co,
Congratulation to you and Elizebath for holding the April 2006 exhibition in Bercelona.
I hope that your Art and Music will make it to the shores of Africa. It will be an inspiration for young Africa painters.
I look forward to our exhibitions in The Gambia and The Republic of Senegal in 2007.
Be Excellent
Oko Drammeh
') ")
or die(mysql_error());

mysql_query("INSERT INTO guestbook
(name, email, date, text) VALUES('Catherine Rogers Jonsson','shalimarstudio@yahoo.com','2006-06-25 09:19:03','Did you know that Toni Van Schaik\'s Galeria Art-Works SL of Barcelona closed without notice, the web site is down, the telephone is disconnected and that he has abandoned or stolen the art works of over 20 artists..... 6 of my paintings as well? If you have ANY INFORMATION about this please contact me!') ")
or die(mysql_error());

mysql_query("INSERT INTO guestbook
(name, email, date, text) VALUES('Anne Bijlmer','abijlmer@hotmail.com','2006-06-13 19:18:12','Beste Arthur,

Van maandag 26 juni tot woensdag 29 juni zijn Manon en ik in Barcelona. Als jij in die periode ook al daar bent lijkt het mij leuk om wat af te spreken.

Groeten,

Anne') ")
or die(mysql_error());



mysql_query("INSERT INTO guestbook
(name, email, date, text) VALUES('Hans Bienfait','hpbienfait@tiscali.nl','2006-06-05 21:50:40','Beste Arthur en Els,

Ik heb jullie site bekeken. Een hele artistieke prestatie op zich, vind ik. Al die foto\'s in Barcelona van jullie allebei heb ik bekeken. Ik heb nog lang niet alles gezien. Ga het in delen bekijken, al die info.Ook filosofisch van aard, zo komt dat alllemaal op mij over.
Er is toch wel wat van waar, van dat interview in het AD. Eerst leek het mij allemaal verzinsel dat je die journalist op de mouw spelde en er in slaagde om hem dat te laten opschrijven. Ik weet niet meer precies wat er in stond, maar nu ik de site gezien heb herkende ik flarden uit dat interview en wordt het voor mij ook aannemelijker.
Ook Sam herkende ik onmiddellijk op jullie foto.
Wat een werk om dat allemaal te doen!Maar kennelijk met plezier, dat maak ik er wel uit op.
We praten nog wel verder als we elkaar zien op za 17 juni a.s. Domplein 4, Centrum voor de Kunsten van Utrecht. 13:30.

Vr gr
Hans.


') ")
or die(mysql_error());

mysql_query("INSERT INTO guestbook
(name, email, date, text) VALUES('Art','art@gmail.com','2006-05-26 18:36:46','Looks like bananas,
And it feels like pain.

Hooga, hooga, hooga, hooga,
Hook, hook, hook!

Drives like a Rolls,
And feels like Jane.

Hooga, hooga, hooga, hooga,
Hook, hook, hook!

Smells like hell,
And it feels like cream.

Hooga, hooga, hooga, hooga,
Hook, hook, hook!') ")
or die(mysql_error());

mysql_query("INSERT INTO guestbook
(name, email, date, text) VALUES('Art','Arthurx@thescars.com','2006-05-25 13:24:37','Turning me up,
Turning me up,
and I don’t know why ....

She makes me
wish to cry.
She makes me think
I could fly.') ")
or die(mysql_error());


mysql_close();
?>







// Insert a row of information into the table "example"
mysql_query("INSERT INTO example
(name, age) VALUES('Timmy Mellowman', '23' ) ")
or die(mysql_error());


















</div>
</HTML>
