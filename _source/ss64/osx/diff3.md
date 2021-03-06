---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_osx.lbi" --><!-- #EndLibraryItem --><h1>diff3</h1> 
<p>Show differences among three files. <br>
When two people have made independent changes to a common original, `diff3' can report the differences between the original and the two changed versions, and can produce a merged file that contains both persons' changes together with 
warnings about conflicts. <br>
The files to compare are <i>mine</i>, <i>older</i>, and <i>yours</i>. At most one of these three file names can be -, which tells diff3 to read the standard input for that file.</p>
<pre>Syntax
      diff3 [<i>options</i>] <i>mine older yours</i>

Options
       -a     Treat all files as text and compare them line-by-line,
              even if they do not appear to be text.

       -A     Incorporate all changes from <i>older</i> to <i>yours</i> into <i>mine</i>, 
              surrounding all conflicts with bracket lines.

       -e     Generate an ed script  that  incorporates  all  the
              changes from <i>older</i> to <i>yours</i> into <i>mine</i>.

       -E     Like  -e,  except  bracket  lines  from overlapping
              changes' first and third files.  With -e, an  over-
              lapping change looks like this:

              &lt;&lt;&lt;&lt;&lt;&lt;&lt; mine
              lines from mine
              =======
              lines from yours
              &gt;&gt;&gt;&gt;&gt;&gt;&gt; yours

       --ed   Generate  an  ed  script  that incorporates all the
              changes from <i>older</i> to <i>yours</i> into <i>mine</i>.

       --easy-only
              Like -e, except output only the nonoverlapping changes.

       -i     Generate w and q commands at the end of the ed
              script for System V compatibility. This option
              must be combined with one of the -AeExX3 options,
              and can not be combined with -m.

       --initial-tab
              Output a tab rather than two spaces before the text
              of a line in normal format.  This causes the alignment
              of tabs in the line to look normal.

       -L <i>label</i>
       --label=<i>label</i>
              Use the label <i>label</i> for the brackets output by  the
              -A, -E and -X options.  This option can be given up
              to three times,  one  for  each  input  file.   The
              default  labels  are  the names of the input files.
              Thus diff3 -L X -L Y -L Z -m A B C acts like  diff3
              -m  A  B  C  , except that the output looks like it
              came from files named X, Y and Z rather  than  from
              files named A, B and C.

       -m
       --merge
              Apply the edit script to the first file and send
              the result to standard output.  Unlike piping the
              output from diff3 to ed, this works even for binary
              files and incomplete lines.  -A is assumed if no
              edit script option is specified.

       --overlap-only
              Like  -e, except output only the overlapping changes.

       --show-all
              Incorporate all unmerged changes from older  to
              yours into mine, surrounding all overlapping
              changes with bracket lines.

       --show-overlap
              Like -e,  except  bracket lines from overlapping
              changes' first and third files.

       -T     Output a tab rather than two spaces before the text
              of a line in normal format.  This causes the align-
              ment of tabs in the line to look normal.

       --text Treat all files as text and compare them line-by-
              line, even if they do not appear to be text.

       -v
       --version
              Output the version number of diff3.

       -x     Like  -e, except output only the overlapping
              changes.

       -X     Like -E, except output only the overlapping changes.
              In other words, like -x, except bracket changes as in -E.

       -3     Like  -e, except output only the nonoverlapping
              changes.</pre>
<p><b>Notes<br></b>Multiple single letter options (unless they take an argument) can be combined into a single command line argument.</p>
<p>`diff3' normally compares three input files line by line, finds groups of lines that differ, and reports each group of differing lines. Its output is designed to make it easy to inspect two different sets of changes 
to the same file. </p>
<p>An exit status of 0 means diff3 was successful, 1 means some conflicts were found, and 2 means trouble.</p>
<p class="quote"><i> “One person can make a difference and every person must try” ~ John F. Kennedy</i></p>
<p><b>Related:</b></p>
<p><a href="https://developer.apple.com/legacy/library/documentation/Darwin/Reference/ManPages/man1/diff3.1.html">diff3 man page</a> - Apple.com<br>
<a href="cmp.html">cmp</a> - Compare two files<br>
<a href="comm.html">comm</a> - Compare two sorted files line by line<br>
<a href="diff.html">diff</a> - Display the differences between two files<br>
ed(1)<br>
patch(1)<br>
<a href="sdiff.html">sdiff</a> - merge two files interactively</p><!-- #BeginLibraryItem "/Library/foot_osx.lbi" --><p>
<!-- OSX300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="1823340303"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="diff3.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->
