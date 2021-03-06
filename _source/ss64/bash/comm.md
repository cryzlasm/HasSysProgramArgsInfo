---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_bash.lbi" --><!-- #EndLibraryItem --><h1>comm</h1> 
<p>Common - compare two sorted files line by line and write to standard output: 
  <br>
the lines that are common, plus the lines that are unique.</p>
<pre>Syntax
      comm [<i>options</i>]... <i>File1 File2</i>

Options
   -1   suppress lines unique to <i>file1</i>
   -2   suppress lines unique to <i>file2</i>
   -3   suppress lines that appear in both files 

   A file name of `-' means standard input.</pre>
<p> Before `comm' can be used, the input files must be sorted using 
  the collating sequence specified by the 'LC_COLLATE' locale, with trailing newlines 
  significant. If an input file ends in a non-newline character, a newline is 
  silently appended. The 'sort' command with no options always outputs a file 
  that is suitable input to 'comm'.<br>
  <br>
  With no options, `comm' produces three column output. Column one contains lines 
  unique to FILE1, column two contains lines unique to FILE2, and column three 
  contains lines common to both files. Columns are separated by a single TAB character.<br>
  <br>
  The options -1, -2, and -3 suppress printing of the corresponding columns.<br>
  <br>
  Unlike some other comparison utilities, `comm' has an exit status that does 
  not depend on the result of the comparison. Upon normal completion `comm' produces 
an exit code of zero. If there is an error it exits with nonzero status. </p>
<p><b>Examples</b></p>
<p><span class="code">$ comm -23 &lt;(sort words.txt | uniq) &lt;(sort countries.txt | uniq)</span></p>
<p>If the file words.txt contains a subset of countries.txt then the above will return nothing.<br>
If the file words.txt contains items that don't exist in countries.txt then the above will return those unique items. </p>
<p>To return the lines that are in both words.txt and countries.txt use:</p>
<p><span class="code">$ comm -12 &lt;(sort words.txt | uniq) &lt;(sort countries.txt | uniq)</span><br>
<i><br>
<span class="quote">"You don't sew with a fork, so I see no reason to eat with knitting needles" ~ Miss Piggy, on eating Chinese Food</span></i><br>
<br>
<b>Related:</b><br>
<br>
<a href="cmp.html">cmp</a> - Compare two files <br>
<a href="diff.html">diff</a> - Display the differences between two files<br>
<a href="diff3.html">diff3</a> - Show differences among three files<br>
<a href="sdiff.html">sdiff</a> - merge two files interactively<br>
<a href="head.html">head</a> - Output the first part of file(s)<br>
<a href="sort.html">sort</a> - Sort text files <br>
Equivalent Windows commands: <a href="../nt/comp.html">COMP</a> / <a href="../nt/fc.html">FC</a> - Compare and display Characters/Lines which do not match.<br>
(also the WINDIFF GUI)</p><!-- #BeginLibraryItem "/Library/foot_bash.lbi" --><p>
<!-- bash300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="4615356305"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="comm.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

