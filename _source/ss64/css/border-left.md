---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_css.lbi" --><!-- #EndLibraryItem --><h1>Border-Left</h1>
<p>Shorthand to set the 3 properties:</p>
<pre><i>element</i> { border-left: <i>Border-left-width Border-left-style Border-left-color </i>;}</pre>
<p>This shorthand is equivalent to the following:<br>
</p>
<pre><i>element</i> {
  <a href="border-left-width.html">border-left-width:</a> thin | <u>medium</u> | thick | <i>length</i> | inherit ;
  <a href="border-left-style.html">border-left-style</a>: <i>style</i> ;
  <a href="border-left-color.html">border-left-color</a>: <i>color</i> ;
}</pre>
<p>Alternatively you can choose to inherit from a parent element:<span class="code"> border-left: inherit ;</span></p>
<p>The <a href="border-style.html">Border-Style</a> property must be set for the Border-Width or Border-Color properties to have any effect.</p>
<p>The default  property values, any value that is not specified in the shorthand will be set to the     default. </p>
<pre>  border-left-width: medium;
  border-left-style: none;
  border-left-color: 0;</pre>
<p><b>Examples</b></p>
<p>Set the left border of H1 to a 2px dashed green line:</p>
<p class="code">h1 {border-left: 2px dashed green;}</p>
<p>Set a large left border on a 0px element to create a right pointing triangle:</p>
<p class="code">.right-arr {<br>
&nbsp;width: 0px;<br>
&nbsp;height: 0px;<br>
&nbsp;border-bottom: 20px solid transparent;<br>
&nbsp;border-top: 20px solid transparent;<br>
&nbsp;border-left: 20px solid black;<br>
}</p>
<p>Try it:</p>
<input type="button" onclick="ApplyStyle()" value="Apply Changes">
<table>
  <tbody><tr>
    <td><textarea name="tryit" id="trycode" cols="60" rows="6" onfocus="this.style.background='#fff';" onblur="this.style.background='#eee';" tabindex="1">border-style: solid;
border-left: 2px dashed green;</textarea></td>
    <td><div id="tryresult">This is a sample of text with a CSS border.</div></td>
  </tr>
</tbody></table>
<p>Browser Support: All major browsers (CSS 1)</p>
<p class="quote"><i>“I've learned that our background and circumstances may have influenced who we are, but we are responsible for who we become” ~ James Rhinehart</i></p>
<p><b>Related:</b></p>
<p><a href="border-bottom.html">border-bottom</a> - Shorthand to set all the border-bottom properties.<br>
<a href="border-right.html">border-right</a> - Shorthand to set all the border-right properties.<br>
<a href="border-top.html">border-top</a> - Shorthand to set all the border-top properties.<br>
<a href="border.html">border</a> - Shorthand to set all the border properties</p><!-- #BeginLibraryItem "/Library/foot_css.lbi" --><p><script async="" src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
<!-- CSS -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="2739097502"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->


