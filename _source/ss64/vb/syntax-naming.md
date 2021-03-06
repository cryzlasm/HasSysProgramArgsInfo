---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_vbsyntax.lbi" --><!-- #EndLibraryItem --><h1>VBScript Naming Convention</h1> 
<p>Some recommended prefixes for VBScript variables. </p>
<pre><b>DataType  ShortPrefix Prefix Example</b>

String      s          str   strFirstName
DateTime    t          dtm   dtmStart

Integer     i          int   intQuantity
Double      d          dbl   dblTolerance
Single                 sng   sngAverage
Long        l          lng   lngDistance
Byte                   byt   bytRasterData
Boolean     b          bln   blnFound

Array       a          arr   arrMyArray
Collection  c          col   colMyCollrction
Class                  cls   clsMyObject
Error                  err   errOrderNum
Object      o          obj   objCurrent</pre>
<p>This is designed to generate variable names which are both short and descriptive. For example without a naming convention you might have variables called <span class="code">PartNumber</span>,  <span class="code">PartDescription</span>, and <span class="code">Delivery_Date</span> following this naming convention they would become <span class="code">intPart</span>, <span class="code">strPart</span>, <span class="code">dtmDelivery</span>. </p>
<p>Try to avoid variable names which duplicate the prefix naming, i.e for a <a href="filesystemobject.html">File System Object</a> <span class="code">objFS</span> makes more sense than <span class="code">objFSO</span> (we already know its an object) </p>
<p>The prefix can also be abbreviated to a single digit e.g. <span class="code">sFirstName</span>,  <span class="code">iQuantity</span></p>
<p>All VBScript variables are <i>variants</i> meaning that a variable can contain a string or an integer number or a date etc, This makes it easy to write VBScript code but it can also be easy to lose track of which variable should contain which type of data.</p>
<p class="quote"><i>“If I had to live my life again, I'd make the same mistakes, only sooner” ~ Tallulah Bankhead.</i></p>
<p>Related</p>
<p><a href="../access/syntax-naming.html">The Reddick VBA Naming Conventions</a> (VBA not VBScript)</p><!-- #BeginLibraryItem "/Library/foot_vb.lbi" --><p><script async="" src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
<!-- VB300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="1683739502"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

