---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_access.lbi" --><!-- #EndLibraryItem --><h1>Dmin</h1>
<p>Return the minimum value from a specified set of records.</p>
<pre>Syntax
      Dmin ( <i>expression, domain</i>, [<i>criteria</i>] )

      =DMin("[<i>Field</i>]", "<i>Table</i>", "[<i>Field</i>] = 'MyValue'")

Key
   <i>expression</i> The field to return.

   <i>domain</i>     The set of records, a table or a query name.

   <i>criteria</i>   Equivalent to an (optional) WHERE clause.
              Any field that is included in <i>criteria</i> must
              also be a field in <i>domain</i>.</pre>
<p>For numerical criteria use <span class="code">"abc=<i>Num</i>"</span><br>
for strings use <span class="code">"abc='<i>string</i>'"<br>
</span>for dates use<span class="code"> "abc=#<i>date</i>#"</span></p>
<p>The DMin() function can be used in VBA or in an <a href="syntax-functions.html">SQL query</a>.</p>
<p><b>Examples</b></p>
<p>In a query:</p>
<blockquote>
<p><img src="dmin.png" width="582" height="105" alt="dmin"></p>
</blockquote>
<p>In VBA:</p>
<p class="code">Dmin("price", "T_Orders", "SupplierID = 64 ")</p>
<p class="quote"><i>“If you are planning for a year, sow rice; if you are planning for a decade, plant trees; if you are planning for a lifetime, educate people” ~ Chinese Proverb</i></p>
<p><b>Related:</b></p>
<p><a href="min.html">Min</a> (SQL) - Return the minimum value from a query.</p><!-- #BeginLibraryItem "/Library/foot_access.lbi" --><p><script async="" src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
<!-- access -->

<hr>
<div id="bl" class="footer"><a href="#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

