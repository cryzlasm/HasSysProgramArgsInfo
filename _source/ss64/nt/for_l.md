---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_nt.lbi" --><!-- #EndLibraryItem --><h1><a href="for.html">FOR</a> /L</h1>
<p>Conditionally perform a command for a range of numbers.</p>
<pre>Syntax   
      FOR <b>/L</b> %%<i>parameter</i> IN (<i>start,step,end</i>) DO <i>command</i> 

Key
   <i>start</i>       : The first number  
   <i>step</i>        : The amount by which to increment the sequence 
   <i>end</i>         : The last number 

   command     : The command to carry out, including any 
                 command-line parameters.

   %%<i>parameter</i> : A replaceable parameter:
                 in a batch file use %%G (on the command line %G)</pre>
<p>So (20,-5,10) would generate the sequence (20 15 10) 
<br>
<br>
(1,1,5) would generate the sequence 1 2 3 4 5</p>
<p> The numbers must all be within the range of 32 bit signed integer numbers (-2,147,483,648 through 2,147,483,647)</p>
<p> In addition to integer numbers, hex and octal numbers can also be compared <a href="syntax-wildcards.html#numeric">within certain limits</a>.</p>
<p>If the<i> start,step,end</i> are left null or (0) then the command will loop indefinitely, <a href="syntax-keyboard.html">Ctrl-C</a> will abort the whole script.</p>
<p><b>Examples</b></p>
<p>Count from 1 up to 5<br>
  <br>
  <span class="code">FOR /L %%G IN (1,1,5) DO echo %%G </span></p>
<p>Non-numeric lists can use a standard FOR command:</p>
<p class="code">  FOR %%G IN (Sun Mon Tue Wed Thur Fri Sat) DO echo %%G </p>
<p>FOR is an <a href="syntax-internal.html">internal</a> command.</p>
<p><i class="quote">"A great deal of what makes life congenial is a sequence of little white lies" - Philip Terzian</i><br>
<br>
<b>Related:</b><br>
<br>
<a href="for.html">FOR</a> - Loop commands<br>
<a href="for2.html">FOR</a> - Loop through a set of files in one folder<br>
<a href="for_r.html">FOR /R</a> - Loop through files (recurse subfolders) <a href="for_d.html"><br>
FOR /D</a> - Loop through several folders <br>
<a href="for_f.html">FOR /F</a> - Loop through items in a text file<br>
<a href="for_cmd.html">FOR /F</a> - Loop through the output of a command<br>
<a href="forfiles.html">FORFILES</a> - Batch process multiple files<br>
<a href="goto.html">GOTO</a> - Direct a batch program to jump to a labelled line<br>
<a href="if.html">IF</a> - Conditionally perform a command <br>
Powershell: <a href="../ps/foreach-object.html">ForEach-Object</a> - Loop for each object in the pipeline / While <br>
Equivalent bash command (Linux): <a href="../bash/for.html">for</a> - Expand <var>words</var>, and execute <var>commands</var></p><!-- #BeginLibraryItem "/Library/foot_nt.lbi" --><p>
<!-- windows300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="7649547908"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="for_l.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

