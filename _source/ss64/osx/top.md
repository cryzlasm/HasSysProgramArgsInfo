---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_osx.lbi" --><!-- #EndLibraryItem --><h1>top</h1> 
<p>List running processes on the system, in sorted order.<br>
Periodically displays a list of processes on the system in sorted order. The default key for sorting is pid, but other keys can be used instead. </p>
<pre>Syntax
      top    [-a | -d | -e | -c <i>mode</i>]
             [-F | -f]
             [-h]
             [-i <i>interval</i>]
             [-l <i>samples</i>]
             [-ncols <i>columns</i>]
             [-o <i>key</i>] [-O <i>skey</i>]
             [-R | -r]
             [-S]
             [-s <i>delay</i>]
             [-n <i>nprocs</i>]
             [-stats <i>keys</i>]
             [-pid <i>processid</i>]
             [-user <i>username</i>]
             [-U <i>username</i>]
             [-u]

Options</pre>
<blockquote>
<p>Command line option specifications are processed from left to right. Options can be specified more than once.  If conflicting options  are specified, later specifications override earlier ones. This makes it viable to create a shell alias for top with preferred defaults specified, then override those preferred defaults as desired on the command
line.</p>
</blockquote>
<pre>       -a     Equivalent to -c a.

       -c <i>mode</i>
       Set event counting mode to <i>mode</i>.  The supported modes are:

           a  Accumulative mode. Count events  cumulatively,  starting
              at the launch of top. Calculate CPU usage and CPU time
              since the launch of top.

           d  Delta mode. Count events relative to the previous sample.
              Calculate CPU usage since the previous sample.

           e  Absolute mode. Count events using absolute counters.

           n  Non-event mode (default).  Calculate CPU usage since the
              previous sample.

       -d   Equivalent to -c d.
       -e   Equivalent to -c e.

       -F   Do not calculate statistics on shared libraries, also  known  as
            frameworks.   This substantially reduces the amount of processor
            time top consumes.

       -f   Calculate statistics on shared libraries, also known  as frame-
            works (default).

       -h   Print command line usage information and exit.

       -i <i>interval</i><br>            Update framework (-f) info every <i>interval</i> samples

       -l <i>samples</i>
            Use logging mode and display <i>samples</i> samples, even if standard
            output  is  a  terminal. 0 is treated as infinity.  Rather than
            redisplaying, output is periodically printed in raw form.

       -ncols  <i>columns</i>
            Display <i>columns</i> when using logging mode.  The default is infinite.
            The number must be &gt; 0 or an error will occur.

       -n <i>nprocs</i>
            Only display up to <i>nprocs</i> processes.  nprocs can  be specified
            as the last command line argument without the -n flag preceding it.
            However, doing so is deprecated command line usage.

       -O <i>skey</i>
            Use skey as a secondary <i>key</i> when ordering the process display.
            See -o for key names (pid is default).

       -o <i>key</i>
            Order the process display by sorting on <i>key</i> in descending  order.
            A +  or - can be prefixed to the key name to specify ascending or
            descending order, respectively.

            Some supported keys (see 'man top' for a full list):

              command  Command name.
              cpu      CPU usage.
              cpu_me   CPU time charged to me by other processes.
              cpu_others   CPU time charged to other processes by me.
              csw      Number of context switches.
              pid      Process ID (default).
              prt      Number of Mach ports.
              reg      Number of memory regions.
              rprvt    Resident private address space size.
              rshrd    Resident shared address space size.
              rsize    Resident memory size.
              th       Number of threads.
              time     Execution time.
              threads  alias: th   No. of threads (total/running).
              uid      User ID.
              username Username.
              vprvt    Private address space size.
              vsize    Total memory size.

       -R   Do not traverse and report the memory object map for each process.
            This substantially reduces the amount of processor time top consumes.

       -r   Traverse and report the memory object map for each process (default).

       -S   Display information about swap usage and purgeable memory.

       -s <i>delay</i>
            Set the delay between updates to <i>delay</i> seconds. The default
            delay between updates is 1 second.
       -stats <i>keys</i>
            Only display the comma separated statistics. See the -o flag for the valid <i>keys</i>.

       -pid <i>processid</i>   Only display <i>processid</i> in top.

       -U <i>user</i>
       -user <i>user</i>
            Only  display processes owned by <i>user</i>. Either the username or
            uid number can be specified.

       -u   This is an alias equivalent to: -o cpu -O time.</pre>
<h2>Performance vs. Accuracy</h2>
<blockquote>
<p> Calculating detailed memory statistics is fundamentally resource-inten-        sive.  To reduce the cpu usage in top, the -i parameter has been introduced to allow the user to tune this tradeoff.  With the default  value        of 10, framework stats will be updated once every 10 samples.  Specify-        ing -i 1 will result in the most accurate display, at  the  expense  of        system resources.</p>
</blockquote>
<p><b>Examples</b><br>
<br>
Display processes sorted by CPU usage, updating every 5 seconds:<br>
<span class="code">$ top -ocpu -s 5</span><br class="code">
<br>
Run top in delta mode:<br>
<span class="code">$ top -c d </span></p>
<p>Run top in event counter mode:<br>
<span class="code">$ top -ce</span><br>
<br>
Show deltas for network and paging activity, updating every 10 seconds:<br>
<span class="code">$ top -d -u -s 10</span></p>
<p class="quote"><i>“Venice is like eating an entire box of chocolate liqueurs at one go” ~ Truman Capote </i></p>
<p><b>Related:</b></p>
<p><a href="https://developer.apple.com/legacy/library/documentation/Darwin/Reference/ManPages/man1/top.1.html">top man page</a> - Apple.com<br>
<a href="kill.html">  kill</a> - Stop a process from running<br>
signal(3) - software signal facilities</p><!-- #BeginLibraryItem "/Library/foot_osx.lbi" --><p><script async="" src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
<!-- OSX300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="1823340303"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->
