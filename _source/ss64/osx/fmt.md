---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_osx.lbi" --><!-- #EndLibraryItem --><h1>fmt</h1> 
<p>Simple text formatter. Reformat paragraph text, fill and join lines to produce output 
lines of a given width (75 characters by default).</p>
<pre>Syntax
      fmt [-cmnps] [-d <i>chars</i>] [-l <i>num</i>] [-t <i>num</i>]
             [<i>goal </i>[<i>maximum</i>] | -width | -w <i>width</i>] [file ...]

Options
   -c        Center the text, line by line.  In this case, most of the other
             options are ignored; no splitting or joining of lines is done.

   -d <i>chars</i>  Treat the <i>chars</i> (and no others) as sentence-ending characters.
             By default the sentence-ending characters are full stop (`.'),
             question mark (`?') and exclamation mark (`!').  Remember that
             some characters need to be escaped to protect them from your
             shell.

   -l <i>number</i>
             Replace multiple spaces with tabs at the start of each output
             line, if possible. Each <i>number</i> spaces will be replaced with one
             tab.  The default is 8. If <i>number</i> is 0, spaces are preserved.

   -m        Try to format mail header lines contained in the input sensibly.

   -n        Format lines beginning with a `.' (dot) character. Normally, fmt
             does not fill these lines, for compatibility with nroff(1).

   -p        Allow indented paragraphs. Without the -p flag, any change in
             the amount of whitespace at the start of a line results in a new
             paragraph being begun.

   -s        Collapse whitespace inside lines, so that multiple whitespace
             characters are turned into a single space. (Or, at the end of a
             sentence, a double space.)

   -t <i>number</i>
             Assume that the input files' tabs assume <i>number</i> spaces per tab
             stop.  The default is 8.

   -w <i>width</i>  Fill output lines up to WIDTH characters (default 75).</pre>
<p><b>Notes<br></b>The fmt utility is a simple text formatter which reads the concatenation of input files (or standard input if none are given) and produces on standard output a version of its input with lines as close to the goal length as possible without exceeding the maximum. <br>
The fmt utility is meant to format mail messages prior to sending, but can also be useful for other simple tasks.</p>
<p>The <i>goal length</i> defaults to 65 and the <i>maximum length</i> to 10 more than the goal length. </p>
<p>Alternatively, a single width parameter can be specified either by prepending a hyphen to it or by using -w. </p>
<p>For example, `fmt -w 72', `fmt -72', and `fmt 72 72' all produce identical output. </p>
<p>The spacing at the beginning of the input lines is preserved in the output, as are blank lines and interword spacing. Lines are joined or split only at white space; that is, words are never joined or hyphenated.</p>
<p class="quote"><i>"Everything flows and nothing abides; everything gives way and nothing stays fixed" ~ Heraclitus</i></p>
<p><b>Related:</b></p>
<p><a href="https://developer.apple.com/legacy/library/documentation/Darwin/Reference/ManPages/man1/fmt.1.html">fmt man page</a> - Apple.com<br>
<a href="cut.html">cut</a> - Divide a file into several parts<br>
<a href="fold.html">fold</a> - Wrap input lines to fit in specified width<br>
<a href="join.html">join</a> - Join lines on a common field <br>
<a href="paste.html">paste</a> - Merge lines of files<br>
<a href="split.html">split</a> - Split a file into fixed-size pieces<br>
<a href="tr.html">tr</a> - Translate, squeeze, and/or delete characters <br>
<a href="tail.html">tail</a> - Output the last part of files</p><!-- #BeginLibraryItem "/Library/foot_osx.lbi" --><p><script async="" src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
<!-- OSX300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="1823340303"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->
