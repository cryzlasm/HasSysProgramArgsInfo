---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_bash.lbi" --><!-- #EndLibraryItem --><h1>tail</h1> 
<p>Output the last part of files, print the last part (10 lines by 
  default) of each FILE; <br>
tail reads from standard input if no files are given or when given a FILE of<span class="code"> -</span></p>
<pre>Syntax
      tail [<i>options</i>]... [<i>file</i>]...

Key
   -c, --bytes=<i>K</i>
       Output the last K bytes; alternatively, use -c +K to output bytes starting with the <i>K</i>th of each file.

   -f, --follow[={<i>name</i>|<i>descriptor</i>}]
       Output appended data as the file grows; -f, --follow, and --follow=descriptor are equivalent

   -F
       Same as --follow=<i>name</i> --retry 

   -n, --lines=<i>K</i>
       Output the last <i>K</i> lines, instead of the last 10; or use -n +K to output lines starting with the Kth 

   --max-unchanged-stats=<i>N</i>
       With --follow=name, reopen a FILE which has not changed size after N (default 5) iterations
       to see if it has been unlinked or renamed (this is the usual case of rotated log files).
       With inotify, this option is rarely useful. 

   --pid=<i>PID</i>
       With -f, terminate after process ID, <i>PID</i> dies 

   -q, --quiet, --silent
       Never output headers giving file names 

   --retry
       Keep trying to open a file even when it is or becomes inaccessible;
       useful when following by name, i.e., with --follow=<i>name</i>

   -s, --sleep-interval=<i>N</i>
       With -f, sleep for approximately <i>N</i> seconds (default 1.0) between iterations. 
       With inotify and --pid=<i>P</i>, check process <i>P</i> at least once every <i>N</i> seconds. 

   -v, --verbose
       Always output headers giving file names 

   --help
       Display this help and exit 

   --version
       Output version information and exit</pre>
<p> If more than one <i>FILE</i> is specified, `tail' prints a one-line 
header consisting of ==&gt; FILE NAME &lt;== before the output for each <i>FILE</i>. </p>
<p><i>K</i> (the number of bytes or lines) can have a multiplier suffix: b 512, <a href="../convert.html">kB 1000</a>, K 1024, MB 1000*1000, M 1024*1024, GB 1000*1000*1000, G 1024*1024*1024, and so on for T, P, E, Z, Y.</p>
<p>The Process Control <a href="syntax-keyboard.html">keyboard shortcuts</a> can be used while <span class="code">tail</span> is running.</p>
<p>With <span class="code">--follow (-f)</span>, tail defaults to following the file descriptor, which means that even if a tail'ed file is renamed, tail will continue to track its end. This default behavior is not desirable when you really want to track the actual name of the file, not the file descriptor (e.g., log rotation). Use <span class="code">--follow=name</span> in that case. That causes tail to track the named file in a way that accommodates renaming, removal and creation. </p>
<p>  GNU `tail' can output any amount of data (some other versions of `tail' cannot). 
  It also has no `-r' option (print in reverse), since reversing a file is really 
  a different job from printing the end of a file; BSD `tail' (which is the one 
  with `-r') can only reverse files that are at most as large as its buffer, which 
  is typically 32k. A more reliable and versatile way to reverse files is the 
  GNU `<a href="tac.html">tac</a>' command. <br>
  <br>
  `tail' accepts two option formats: the new one, in which numbers are arguments 
  to the options (`-n 1'), and the old one, in which the number precedes any option 
  letters (`-1' or `+1'). If any option-argument is a number N starting with a 
  `+', `tail' begins printing with the <i>N</i>th item from the start of each file, instead 
of from the end. </p>
<p><b>Examples</b></p>
<p>Extract the last 85 lines from a file: </p>
<p class="code"> $ tail -85 file,txt</p>
<p>Output the newly appended lines of a file instantly:</p>
<p class="code">$ tail -f /var/log/wifi.log</p>
<p>Output newly appended lines, and keep trying if the file  is temporarily inaccessible:</p>
<p><span class="code">$ tail -f /var/log/wifi.log --retry<br>
</span>or<span class="code"><br>
$ tail -F /var/log/wifi.log</span></p>
<p>Extract lines 40-50 from a file, first using <span class="body"><a href="head.html">head</a></span> to get the first 50 lines then tail to get the last 10: </p>
<p class="code"> $ head -50 file.txt | tail -10</p>
<p class="quote"><i>“Money will buy a pretty good dog, but it won't buy the wag of his tail” ~ Henry Wheeler Shaw</i></p>
<p><b>Related:</b><br>
<br>
<a href="csplit.html">csplit</a> - Split a file into context-determined pieces<br>
<a href="cut.html">cut</a> - Divide a file into several parts<br>
<a href="fmt.html">fmt</a> - Reformat paragraph text<br>
<a href="head.html">head</a> - Output the first part of file(s)<br>
<a href="join.html">join</a> - Join lines on a common field<br>
<a href="less.html">less</a> - 
Display output one screen at a time (<span class="code">less +F</span> will monitor the tail of a file which is still growing while it is being viewed.)<br>
<a href="paste.html">paste</a> - Merge lines of files<br>
<a href="split.html">split</a> - Split a file into fixed-size pieces<br>
swatch - simple watcher<br>
tailf - follow the growth of a log file<br>
<a href="http://lnav.org/">LNav.org</a> - Log file Navigator<br>
Equivalent Windows command: <a href="../ps/get-content.html">Get-Content -wait</a><!-- #BeginLibraryItem "/Library/foot_bash.lbi" --></p><p>
<!-- bash300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="4615356305"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="tail.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem --><p></p>

