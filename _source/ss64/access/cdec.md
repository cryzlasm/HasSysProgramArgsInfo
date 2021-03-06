---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_access.lbi" --><!-- #EndLibraryItem --><h1>CDec</h1>
<p> Function that converts an expression into  a Decimal (Number.) </p>
<pre>Syntax
      CDec (<i>expression</i>)</pre>
<p>The Decimal data type  stores numbers from -10^<sup>28</sup>-1 through 10^<sup>28</sup>-1. <br>
If an ADP file is used (with SQL Server) this increases to -10^<sup>38</sup>-1 through 10^<sup>38</sup>-1</p>
<p>CDec cannot handle Null values, use Nz() to convert Nulls to a valid number.</p>
<p><b>Example</b></p>
<p class="code">Dim dblDemo as Double </p>
<p class="code">dblDemo = CDec(12 * 0.000001)</p>
<p class="quote"><i>“People have a peculiar pleasure in making converts, that is, in causing others to enjoy what they enjoy, thus finding their own likeness represented and reflected back to them” ~ Johann Wolfgang von Goethe </i></p>
<p><b>Related:</b></p>
<p><a href="cbool.html">CBool</a> - Convert to boolean <a href="cbyte.html"><br>
CByte</a> - Convert to byte <a href="ccur.html"><br>
CCur</a> - Convert to currency (number) <a href="cdate.html"><br>
CDate</a> - Convert to Date <a href="cdbl.html"><br>
CDbl</a> - Convert to Double (number) <a href="cdec.html"><br>
</a><a href="cint.html">CInt</a> - Convert to Integer (number) <a href="clng.html"><br>
CLng</a> - Convert to Long (number)
<br>

<a href="syntax-datatypes.html">Number Data Types</a><br>
<a href="../convert.html">Convert to Base 36</a><br>
<a href="nz.html">Nz</a> - Detect a NULL value or Zero Length string.</p><!-- #BeginLibraryItem "/Library/foot_access.lbi" --><p>
<!-- access -->

<hr>
<div id="bl" class="footer"><a href="cdec.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

