---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_bash.lbi" --><!-- #EndLibraryItem --><h1>watch</h1> 
<p>Execute a program periodically, showing output full screen</p>
<pre>Syntax
      watch [<i>options</i>] <i>command</i> <i>options</i>

Options

   -<i>n</i>
   --interval=<i>n</i> 
                 Specify an interval <i>n</i> seconds to run <i>command</i>

   -d
   --differences[=cumulative]]
                 Highlight the differences between successive updates

   -h
   --help        Display Help

   -v
   --version     Display version</pre>
<p> watch  runs command repeatedly, displaying its output (the first screenfull).  This allows you to watch  the  program<br>
output  change  over time. By default, the program is run every 2 seconds.<br>
<br>
The <span class="code">--cumulative</span> option makes highlighting "sticky", presenting a running display of all positions that have ever changed.<br>
<br>
watch will run until interrupted.<br>
<br>
Note that <i>command</i> is given to "sh -c" which means that you might need to use extra quoting to get the desired effect.<br>
<br>
POSIX  option processing is used (i.e., option processing stops at the first non-option argument). This means  that  <i>command_options</i> don't get interpreted by watch itself.</p>
<p><b>Examples:</b></p>
<pre>       To watch for mail, you might do

              watch -n 60 from

       To watch the contents of a directory change, you could use

              watch -d ls -l

       If  you're only interested in files owned by user joe, you
       might use

              watch -d 'ls -l | fgrep joe'

       To see the effects of quoting, try these out

              watch echo $$

              watch echo '$$'

              watch echo "'"'$$'"'"

       You can watch for your administrator to install the latest
       kernel with

              watch uname -r

       (Just kidding.)
</pre>
<p>  Bugs<br>
  Upon  terminal  resize,  the  screen will not be correctly
  repainted until the next scheduled update.  All differences highlighting is lost on that update as well.<br>
  Non-printing  characters are stripped from program output.       
  Use "cat -v" as part of the command pipeline if  you  want       
  to see them.</p>
<p><i class="quote">"Advertising may be described as the science of arresting the human intelligence long enough to get money from it" ~ Stephen 
Leacock </i><br>
<br>
<b> Related:</b><br>
<br>
<a href="builtin.html">builtin</a> - Run a shell builtin<br>
<a href="crontab.html">crontab</a> - Schedule a command to run at a later time<br>
<a href="chroot.html">chroot</a> - Run a command with a different root directory<br>
<a href="exec.html">exec</a> - Execute a command<br>
<a href="if.html">if</a> - Conditionally perform a command<br>
<a href="nohup.html">nohup</a> - Run a command immune to hangups<br>
<a href="su.html">su</a> - Run a command with substitute user and group id<br>
<a href="watch.html">watch</a> - Execute/display a program periodically<br>
<a href="source.html">.period</a> - Run commands from a file<br>
Equivalent Windows command: <a href="../nt/schtasks.html">SCHTASKS</a> - Manage scheduled tasks.</p><!-- #BeginLibraryItem "/Library/foot_bash.lbi" --><p><script async="" src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
<!-- bash300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="4615356305"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

