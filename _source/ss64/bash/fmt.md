---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_bash.lbi" --><!-- #EndLibraryItem --><h1>fmt</h1> 
<p>Reformat paragraph text, fill and join lines to produce output 
  lines of a given width (75 characters by default).<br>
</p>
<pre>Syntax
     fmt [<i>option(s)</i>]... [<i>file</i>]...

Options

   -c
   --crown-margin
       "Crown margin" mode: preserve the indentation of the first two
       lines within a paragraph, and align the left margin of each
       subsequent line with that of the second line.

   -t
   --tagged-paragraph
       "Tagged paragraph" mode: like crown margin mode, except that if indentation
       of the first line of a paragraph is the same as the indentation of the
       second, the first line is treated as a one-line paragraph.

   -s
   --split-only
       Split lines only.  Do not join short lines to form longer ones.
       This prevents sample lines of code, and other such "formatted" text from
       being unduly combined.

   -u
   --uniform-spacing
       Uniform spacing.  Reduce spacing between words to one space, and spacing 
       between sentences to two spaces.

   -<i>WIDTH</i>
   -w <i>WIDTH</i>
   --width=<i>WIDTH</i>
       Fill output lines up to WIDTH characters (default 75).  `fmt' initially tries to 
       make lines about 7% shorter than this, to give it room to balance line lengths. 

   -p <i>PREFIX</i>
   --prefix=<i>PREFIX</i>
       Only lines beginning with PREFIX (possibly preceded by whitespace) are subject
       to formatting. The prefix and any preceding whitespace are stripped for the
       formatting and then re-attached to each formatted output line.
       One use is to format certain kinds of program comments, while leaving the code unchanged.</pre>
<p><b>Notes<br>
  </b>`fmt' reads from the specified FILE arguments (or standard input if none 
  are given), and writes to standard output.</p>
<p>The fmt utility is meant to format mail messages prior to sending, 
  but can also be useful for other simple tasks. </p>
<p>By default, blank lines, spaces between words, and indentation are preserved in the output; successive input lines with different indentation 
  are not joined; tabs are expanded on input and introduced on output. </p>
<p>`fmt' prefers breaking lines at the end of a sentence, and tries to avoid line breaks after the first word of a sentence or before the last word 
  of a sentence. A "sentence break" is defined as either the end of a paragraph or a word ending in any of `.?!', followed by two spaces or end of line, ignoring 
  any intervening parentheses or quotes.</p>
<p><i class="quote">"Everything flows and nothing abides; everything gives way and nothing stays fixed" ~ Heraclitus 
</i><br>
<br>
<b> Related:</b><br>
<br>
mail(1), nroff(1)<br>
<a href="csplit.html">csplit</a> - Split a file into context-determined pieces<br>
<a href="cut.html">cut</a> - Divide a file into several parts<br>
<a href="fold.html">fold</a> - Wrap input lines to fit in specified width<br>
<a href="join.html">join</a> - Join lines on a common field <br>
<a href="paste.html">paste</a> - Merge lines of files<br>
<a href="split.html">split</a> - Split a file into fixed-size pieces<br>
<a href="tr.html">tr</a> - Translate, squeeze, and/or delete characters <br>
<a href="tail.html">tail</a> - Output the last part of files </p><!-- #BeginLibraryItem "/Library/foot_bash.lbi" --><p>
<!-- bash300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="4615356305"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="fmt.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

