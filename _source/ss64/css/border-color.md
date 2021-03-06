---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_css.lbi" --><!-- #EndLibraryItem --><h1>Border-Color</h1>
<p>Set the <a href="color.html">color</a> of the  four borders.</p>
<p>The borders do not  have to be the same, they can be set individually using from one to four values:<br>
  <span class="code"><i>Top &nbsp;Right &nbsp;Bottom &nbsp;Left<br>
Top &nbsp;&nbsp;Right&amp;Left &nbsp;Bottom <br>
Top&amp;Bottom &nbsp;Right&amp;Left<br>
AllBorders</i></span><br>
Use the mnemonic TRouBLe to remember the  order.</p>
<p><span class="code">border-color: inherit</span> will inherit border color from the parent element, this is required for  elements such as <span class="code">&lt;HR&gt;</span> which do not inherit by default.</p>
<p>The <span class="code"><a href="border-style.html">border-style</a></span> property must be set before any border color properties can be applied.</p>
<p>Examples:<br>
  <span class="code">h1 { border-color: rgb(0,255,0); }<br>
    .ss64class { border-color: #93622f #000000; }</span><br>
    <span class="code">#SS64id { border-color: #2b5e55 #ff0000 #000000 #ffffff;  }</span>    <br>
</p>
<p>Try it:</p><input type="button" onclick="ApplyStyle()" value="Apply Changes">
<table>
  <tbody><tr>
    <td><textarea name="tryit" id="trycode" cols="60" rows="6" onfocus="this.style.background='#fff';" onblur="this.style.background='#eee';" tabindex="1">border-style: solid;
border-color: #0000ff #ff0000;
</textarea></td>
    <td><div id="tryresult">This is a sample of text with a CSS border. Each of the 4 borders can be styled together or separately with CSS.</div></td>
  </tr>
</tbody></table>
<p>(CSS 1) Browser Support:  All major browsers.</p>
<p class="quote"><i>“Growing up, I never imagined a girl from a border town could one day become a governor” ~ Susana Martinez</i></p><p><b>Related:</b></p>
<p><a href="border-bottom-color.html">border-bottom-color</a> - Color of the bottom border.<br>
<a href="border-left-color.html">border-left-color</a> - Color of the left border. <br>
<a href="border-right-color.html">border-right-color</a> - Color of the right border.<br>
<a href="border-top-color.html">border-top-color</a> - Color of the top border.<br>
<a href="border-style.html">border-style</a> - Style of the four borders.<br>
<a href="border-width.html">border-width</a> - Width of the four borders.<br>
<a href="border.html"><b>border</b></a> - Shorthand to set all  border properties.<br>
<a href="outline-color.html">outline-color</a> - Color of an outline.<br>
</p><!-- #BeginLibraryItem "/Library/foot_css.lbi" --><p>
<!-- CSS -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="2739097502"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="border-color.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->
