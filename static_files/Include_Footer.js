document.write('<br><br><br><hr/><div>');



/*
// facebook
document.write('<div id=fb-root></div>');
(function(d, s, id) {
  var js, fjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) {return;}
  js = d.createElement(s); js.id = id;
  js.src = "//connect.facebook.net/en_US/all.js#xfbml=1";
  fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));
document.write('<div class=fb-like data-send=false data-width=250 data-show-faces=true></div>');

// twitter
document.write('<script src=//platform.twitter.com/widgets.js type=text/javascript></script>');
document.write('&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;<a href=https://twitter.com/share class=twitter-share-button data-count=none data-via=X7Art>Tweet</a>&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;');
src="//platform.twitter.com/widgets.js"


// google
document.write('<div class=g-plusone data-size=medium ></div>');
(function() {
    var po = document.createElement('script'); po.type = 'text/javascript'; po.async = true;
    po.src = 'https://apis.google.com/js/plusone.js';
    var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(po, s);
  })();



document.write('</div>');
*/

// contact
document.write('<hr/><center><br><small><b><a href=index.html>Home</a>&nbsp; &nbsp;<a href=Contact.html>Contact</a> &nbsp; &nbsp; elizabeth@thescars.com &nbsp; &nbsp; 0031-6-14748466 <br> &copy; ArthurX ');

var curdate = new Date();
var year = curdate.getYear();
document.write((year + 1900) + "</b></small></center>");

// google analytics
  var _gaq = _gaq || [];
  _gaq.push(['_setAccount', 'UA-2189632-1']);
  _gaq.push(['_trackPageview']);

  (function() {
    var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
    ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
    var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
  })();











