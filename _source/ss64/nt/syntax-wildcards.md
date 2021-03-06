---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_ntsyntax.lbi" --><!-- #EndLibraryItem --><h1>Wildcards</h1> 
<pre>The * wildcard will match any sequence of characters
               (0 or more, including NULL characters)

The ? wildcard will match a single character
               (or a NULL at the end of a filename)</pre>
<p> A few quirks affect the operation of wildcards which are best illustrated 
  by example:<br>
  <br>
  To match the filename BAR.TXT any of the following patterns will match 
  <br>
  ?AR.TXT <br>
BAR.*<br>
  ??R.TXT <br>
  B?R.??? <br>
  BA?.TXT <br>
  BA??.TXT <br>
  <br>
  However the following will fail to match with BAR.TXT <br>
  ??AR.TXT <br>
  ?BAR.TXT <br>
B??AR.TXT</p>
<h2>Wildcard matching rules</h2>
<blockquote>
<p><span class="code">* </span>Generally matches any 0 or more characters, with one exception (see next rule). The non-greedy wildcard is free to match as many or as few characters as are necessary for the remainder of the mask to match. </p>
<p><span class="code">*. </span>At end of mask matches any 0 or more characters except for {dot}. In actuality, the rule applies with any number of {dot} and {space} characters between the * and terminal {dot}. The regular expression for this term is <span class="code">"[*][. ]*[.]$"</span> </p>
<p><span class="code">? </span>Match  0 or one character, except for {dot}.<br>
The only time it matches 0 characters is when it matches the end of the name, or the position before a {dot}.<br>
The question mark can also be used more than once to match more than one character.</p>
</blockquote>
<h2>Wildcards  match both the Short and Long filename</h2>
<p>The command DIR /X will reveal short filenames if they exist, where many similar names exist 
  in the same folder the short file name (SFN) will not always be an obvious contraction 
  of the long name. e.g. </p>
<pre>DIR /X

      2012-05-12 01:12 96 DIABLO~1 diablo1640
      2012-05-12 01:12 96 DIABLO~2 diablo1641
      2012-05-12 01:12 96 DIABLO~3 diablo1642
      2012-05-12 01:12 96 DIABLO~4 diablo1643
      2012-05-12 01:12 96 DI<b>E359</b>~1 diablo1644
      2012-05-12 01:12 96 DI<b>C49C</b>~1 diablo1648
      2012-05-12 01:12 96 DI<b>F2E9</b>~1 diablo1740
      2012-05-12 01:12 96 DI<b>E2EF</b>~1 diablo1649</pre>
<p>As you can see, the first four short filenames follow the usual numeric tails (~1, ~2, 
  ~3, ~4). <br>
  Then, from fifth and more files with similar beginning, the short names
have four hex digits  in the middle. This is actually a hex <a href="https://usn.pw/blog/gen/2015/06/09/filenames/">checksum of the long filename</a>. (If you need a true file checksum look at <a href="certutil.html#hashfile" class="code">CertUtil -hashfile</a>)
</p><p>Wildcards are supported by the following commands:<br>
  <a href="attrib.html">ATTRIB</a>, <a href="cacls.html">CACLS</a>, <a href="cipher.html">CIPER</a>, <a href="compact.html">COMPACT</a>, <a href="copy.html">COPY</a>, <a href="del.html">DEL</a>, <a href="dir.html">DIR</a>, 
  <a href="expand.html">EXPAND</a>, <a href="extract.html">EXTRACT</a>, <a href="find.html">FIND</a>, <a href="findstr.html">FINDSTR</a>, <a href="for.html">FOR</a>, <a href="forfiles.html">FORFILES</a>, 
  <a href="ftp.html">FTP</a>, <a href="icacls.html">ICACLS</a>, <a href="if.html">IF</a> EXIST, <a href="more.html">MORE</a>, <a href="move.html">MOVE</a>, 
  MV, <a href="net.html">NET</a> (*=Any Drive), 
  <a href="perms.html">PERMS</a>, <a href="print.html">PRINT</a>, 
  <a href="qgrep.html">QGREP</a>, <a href="ren.html">REN</a>, <a href="replace.html">REPLACE</a>, <a href="robocopy.html">ROBOCOPY</a>, 
  <a href="route.html">ROUTE</a>, <a href="takeown.html">TAKEOWN</a>, <a href="type.html">TYPE</a>, <a href="where.html">WHERE</a>, 
<a href="xcacls.html">XCACLS</a>, <a href="xcopy.html">XCOPY</a>
</p><p>The commands COPY and REN accept two sets of wildcards, there are some subtle differences between how these are treated, see the <a href="ren.html">REN</a> page for details.
</p><h2>Undocumented Wildcards</h2>
<p>The two undocumented wildcards,  &lt; and &gt; can be used with commands like DIR and COPY, or to supply a command name but only if quoted:  <span class="code">DIR /b "&lt;demo&lt;"</span></p>
<blockquote>
<p><span class="code">&lt; </span>Matches any 0 or more characters in either the base name or the extension, but never both. <br>
Unlike the * wildcard, a single &lt; cannot match characters in both the base name and the extension. <br>
The {dot} is considered to be part of the base name, not the extension. There is one exception - If the name consists solely of an extension, without a base name, then the {dot} is considered to be part of the extension. This non-greedy wild card is free to match as many or as few characters as are necessary for the remainder of the mask to match. </p>
<p> <span class="code">&gt; </span>Is identical to <span class="code">?. </span>The only difference is that it can be placed after a {dot} to prevent the {dot} from matching the end of the name.
</p>
</blockquote>
<p>Examples at <a href="http://www.dostips.com/forum/viewtopic.php?f=3&amp;t=6207" title="props to Dave Benham for unpicking this syntax,">Dostips</a>
</p><p>The &lt; and &gt; wildcards work with the following commands: <a href="cacls.html">CACLS</a>, <a href="cipher.html">CIPHER</a>, <a href="copy.html">COPY</a>, <a href="del.html">DEL</a>, <a href="dir.html">DIR</a>, <a href="findstr.html">FINDSTR</a>, <a href="if.html">IF</a> EXIST, <a href="move.html">MOVE</a>, <a href="type.html">TYPE</a></p><h2><a id="numeric"></a>Numeric Comparisons</h2>
<p>There are several contexts where CMD.EXE will parse a string as a numeric expression:
</p><blockquote>
<p> <a href="if.html">IF</a> comparisons -<a href="equ.html"> EQU</a>, <a href="neq.html">NEQ</a>, <a href="lss.html">LSS</a>, <a href="leq.html">LEQ</a>, <a href="geq.html">GEQ</a>, <a href="gtr.html">GTR</a><br>
 <a href="set.html">SET /A</a><br>
<a href="syntax-substring.html">variable substring expansion</a> -  %var:~<i>n,m</i>%<br>
FOR /F "TOKENS=<i>n</i>"<br>
FOR /F "SKIP=<i>n</i>"<br>
<a href="for_l.html">FOR /L </a>%%A in (<i>n1 n2 n3</i>) </p>
</blockquote>
<p>For many purposes a 4 byte signed integer value ranging from -2,147,483,648 to 2,147,483,647 will suffice, but in the above contexts it is also possible to express the numbers in  hexadecimal or octal notation.</p>
<p>e.g. Octal: 00, 07 Hex: 0x00, 0xFF</p>
<p>There are a number of subtle differences (Negative numbers, command, version of Windows) which affect how these numbers are parsed and these are described in the DosTips forum thread <a href="http://www.dostips.com/forum/viewtopic.php?f=3&amp;t=3758">Rules for how CMD.EXE parses numbers</a>.</p>
<p class="quote"><i>“We usually see only the things we are looking for, so much that we sometimes see them where they are not” ~ Eric Hoffer </i>
</p><p><b>Related:</b><br>
<br>
<a href="findstr.html">FINDSTR</a><br>
<a href="ren.html">REN</a> - Rename files <br>
<a href="syntax-filenames.html">Long and short filename issues</a>
<!-- #BeginLibraryItem "/Library/foot_nt.lbi" --></p><p>
<!-- windows300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="7649547908"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="syntax-wildcards.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

