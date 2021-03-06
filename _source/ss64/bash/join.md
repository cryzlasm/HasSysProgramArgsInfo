---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_bash.lbi" --><!-- #EndLibraryItem --><h1>join</h1> 
<p>Join lines on a common field, writes to standard output a line 
for each pair of input lines that have identical join fields.</p>
<pre>SYNTAX
      join [<i>Options</i>]... <i>File</i>1 <i>File</i>2</pre>
<p><span class="body"> Description<br>
  <br>
  Either FILE1 or FILE2 (but not both) can be `-', meaning standard input. FILE1 
  and FILE2 should be already sorted in increasing textual order on the join fields, 
  using the collating sequence specified by the `LC_COLLATE' locale. <br>
  <br>
  Unless the `-t' option is given, the input should be sorted ignoring blanks 
  at the start of the join field, as in `sort -b'. If the `--ignore-case' option 
  is given, lines should be sorted without regard to the case of characters in 
  the join field, as in `sort<br>
  -f'.<br>
  <br>
  The defaults are:<br>
  </span><span class="body">The join field is the first field in each line; <br>
  Fields in the input are separated by one or more blanks, with leading blanks 
  on the line ignored; <br>
  Fields in the output are separated by a space; <br>
  Each output line consists of the join field, the remaining fields from FILE1, 
  then the remaining fields from FILE2.</span></p>

<pre>OPTIONS

-a <i>FILE-NUMBER</i>
     Print a line for each unpairable line in file <i>FILE-NUMBER</i> (either
     `1' or `2'), in addition to the normal output.

-e <i>STRING</i>
     Replace those output fields that are missing in the input with
     <i>STRING</i>.

-i
--ignore-case
     Ignore differences in case when comparing keys.  With this option,
     the lines of the input files must be ordered in the same way.  Use
     `sort -f' to produce this ordering.

-1 <i>FIELD</i>
-j1 <i>FIELD</i>
     Join on field <i>FIELD</i> (a positive integer) of file 1.

-2 <i>FIELD</i>
-j2 <i>FIELD</i>
     Join on field <i>FIELD</i> (a positive integer) of file 2.

-j <i>FIELD</i>
     Equivalent to `-1 <i>FIELD</i> -2 <i>FIELD'</i>.

-o <i>FIELD-LIST</i>...
     Construct each output line according to the format in <i>FIELD-LIST</i>.
     Each element in <i>FIELD-LIST</i> is either the single character `0' or
     has the form M.N where the file number, M, is `1' or `2' and N is
     a positive field number.

     A field specification of `0' denotes the join field.  In most
     cases, the functionality of the `0' field spec can be reproduced
     using the explicit M.N that corresponds to the join field.
     However, when printing unpairable lines (using either of the `-a'
     or `-v' options), there is no way to specify the join field using
     M.N in FIELD-LIST if there are unpairable lines in both files.  To
     give `join' that functionality, POSIX invented the `0' field
     specification notation.

     The elements in <i>FIELD-LIST</i> are separated by commas or blanks.
     Multiple <i>FIELD-LIST</i> arguments can be given after a single `-o'
     option; the values of all lists given with `-o' are concatenated
     together.  All output lines - including those printed because of
     any -a or -v option - are subject to the specified <i>FIELD-LIST</i>.

-t <i>CHAR</i>
     Use character <i>CHAR</i> as the input and output field separator.

-v <i>FILE-NUMBER</i>
     Print a line for each unpairable line in file <i>FILE-NUMBER </i>(either
     `1' or `2'), instead of the normal output.</pre>
<p><b><i><br>
  </i></b><i class="quote">"A nation is not in danger of financial disaster merely because it 
  owes itself money" ~ Andrew William Mellon</i><br>
  <br>
  <b> Related commands</b>:<br>
  <br>
  <a href="csplit.html">csplit</a> - Split a file into context-determined pieces<br>
  <a href="cut.html">cut</a> - Divide a file into several parts <br>
  <a href="fmt.html">fmt</a> - Reformat paragraph text <br>
  <a href="fold.html">fold</a> - Wrap input lines to fit in specified width<br>
  <a href="head.html">head</a> - Output the first part of file(s) <br>
  <a href="paste.html">paste</a> - Merge lines of files<br>
  <a href="split.html">split</a> - Split a file into fixed-size pieces<br>
  <a href="tail.html">tail</a> - Output the last part of files <br>
Equivalent Windows command: 
<a href="../nt/fc.html">FC</a> - Compare two files</p><!-- #BeginLibraryItem "/Library/foot_bash.lbi" --><p>
<!-- bash300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="4615356305"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="join.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

