---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_nt.lbi" --><!-- #EndLibraryItem --><h1>COMP.exe</h1> 
<p>Compare two files (or sets of files). Display items which do
  not 
match.</p>
<pre>Syntax
      COMP [<i>pathname1</i>] [<i>pathname2</i>] [/D] [/A] [/L] [/N=<i>number</i>] [/C]

Key
   <i>pathname1</i> The path and filename of the first file(s)<br>
   <i>pathname2</i> The path and filename of the second file(s)<br>
   /D        Display differences in decimal format. (default)
   /A        Display differences in ASCII characters.<br>
   /L        Display line numbers for differences.
   /N=number Compare only the first X number of lines in the file.
   /C        do a case insensitive string comparison</pre>
<p> Running COMP with no parameters will result in a prompt for the 2 files and any options<br>
<br>
To compare sets of files, use wildcards in pathname1 and pathname2 parameters.<br>
<br>
When used with the /A option COMP is similar to the FC command but it displays the individual characters that differ between the files rather than the whole line.</p>
<p>To  compare files of different sizes, use  /N= to compare only the first <i>n </i>lines (common portion of each file.)<br>
<br>
COMP will normally finish with a <i>Compare more files (Y/N) </i> prompt<br>
to suppress this:<span class="code"> ECHO n|COMP &lt;options&gt;</span></p>
<p><b>Errorlevel</b></p>
<p>COMP will return an <a href="errorlevel.html">ErrorLevel</a> as follows:</p>
<blockquote>
<p> <span class="code">0 </span>Files are identical <br>
<span class="code">1 </span>Files are different<br>
<span class="code">2 </span>Cannot open one of the files or invalid arguments or invalid switch</p>
</blockquote>
<p><i class="quote">“Shall I compare thee to a summer's day” ~ William Shakespeare</i><br>
<br>
<b>Related:</b><br>
<br>
<a href="fc.html">FC</a> - Compare two files and display any LINES which do not match<br>
Powershell: <a href="../ps/compare-object.html">Compare-Object</a> - Compare the properties of objects, e.g. compare content of files. <br>
Equivalent bash command (Linux): <a href="../bash/cmp.html">cmp</a> - Compare two files</p><!-- #BeginLibraryItem "/Library/foot_nt.lbi" --><p><script async="" src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
<!-- windows300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="7649547908"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

