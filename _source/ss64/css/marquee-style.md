---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_css.lbi" --><!-- #EndLibraryItem --><h1>Marquee-style</h1>
<p>The   style of marquee motion.</p>
<pre>Syntax
      marquee-style <i>style</i></pre>
<blockquote>
<p> <span class="code">alternate</span> - The marquee shifts back and forth.<br>
<span class="code">none</span> - The marquee does not move. <br>
<span class="code"><u>scroll</u></span> - The marquee loops in its specified direction.<br>
<span class="code">slide</span> - The marquee moves in its specified direction, but stops either when the entirety of its content has been displayed or the content reaches the opposite border of its box, whichever comes second.<br>
</p>
</blockquote>
<p>Examples:<br>
<span class="code">h1 { marquee-style: alternate; }<br>
#ss64id { marquee-style: scroll</span><span class="code">; }<br>
  .ss64class { 
  marquee-style: slide; }</span><br>
</p>
<p>The marquee CSS properties are a replacement for the non-standard HTML <a href="http://en.wikipedia.org/wiki/Marquee_element"><span class="code">&lt;marquee&gt;</span></a> tag.<br>
The <a href="overflow-x.html">overflow-x</a> property also has to be set before the marquee will take effect.</p>
<p>Try it:</p>
<input type="button" onclick="ApplyStyle()" value="Apply Changes">
<table>
  <tbody><tr>
    <td><textarea name="tryit" id="trycode" cols="50" rows="6" onfocus="this.style.background='#fff';" onblur="this.style.background='#eee';" tabindex="1">overflow-x: -webkit-marquee;
overflow-x: marquee-line; /* W3C */
-webkit-marquee-repetition: infinite;
  marquee-play-count: infinite; /* W3C */
-webkit-marquee-style: alternate;
        marquee-style: alternate; /* W3C */
-webkit-marquee-speed: fast;
        marquee-speed: fast; /* W3C */
margin: 100px;
</textarea></td>

    <td><div id="tryresult">A stationary object remains stationary if the sum of the forces acting upon it - resultant force - is zero. A moving object with a zero resultant force keeps moving at the same speed and in the same direction.</div></td>
  </tr>
</tbody></table>
<p>(CSS 3) Browser Support: <b>None</b>. Use the equivalent <span class="code">-webkit-marquee-style</span> for Safari and Chrome.</p>
<p class="quote"><i>“I was listening, listening to the rain, I was hearing, hearing something else” ~ Television (Marquee Moon)</i></p>
<p><b>Related:</b></p>
<p><a href="marquee-direction.html">marquee-direction</a> - Direction of moving content.<br>
<a href="marquee-play-count.html">marquee-play-count</a> - The number of times a marquee box repeats.<br>
<a href="marquee-speed.html">marquee-speed</a> - How fast to scroll the content.<br>
<b><a href="marquee.html">marquee</a></b> - Shorthand to set all the marquee properties in one declaration</p><!-- #BeginLibraryItem "/Library/foot_css.lbi" --><p><script async="" src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
<!-- CSS -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="2739097502"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->


