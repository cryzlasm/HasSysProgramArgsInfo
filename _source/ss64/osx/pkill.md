---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_osx.lbi" --><!-- #EndLibraryItem --><h1>pkill</h1> 
<p>Kill processes by a full  or partial name.</p>
<pre>Syntax
      pgrep [-Lafilnoqvx] [-F <i>pidfile</i>] [-G <i>gid</i>] [-P <i>ppid</i>] [-U <i>uid</i>] [-d <i>delim</i>]
            [-g <i>pgrp</i>] [-t <i>tty</i>] [-u <i>euid</i>] <i>pattern</i> ...

      pkill [-<i>signal</i>] [-ILafilnovx] [-F <i>pidfile</i>] [-G <i>gid</i>] [-P <i>ppid</i>] [-U <i>uid</i>]
            [-g <i>pgrp</i>] [-t <i>tty</i>] [-u <i>euid</i>] <i>pattern</i> ...

Key
   -F <i>pidfile</i>  Restrict matches to a process whose PID is stored in the
               pidfile file.

   -G <i>gid</i>      Restrict matches to processes with a real group ID in the
               comma-separated list gid.

   -I          Request confirmation before attempting to signal each
               process.

   -L          The pidfile file given for the -F option must be locked with
               the flock(2) syscall or created with pidfile(3).

   -P <i>ppid</i>     Restrict matches to processes with a parent process ID in the
               comma-separated list ppid.

   -U <i>uid</i>      Restrict matches to processes with a real user ID in the
               comma-separated list uid.

   -d <i>delim</i>    Specify a delimiter to be printed between each process ID.
               The default is a newline.  This option can only be used with
               the pgrep command.

   -a          Include process ancestors in the match list.  By default, the
               current pgrep or pkill process and all of its ancestors are
               excluded (unless -v is used).

   -f          Match against full argument lists.  The default is to match
               against process names.

   -g <i>pgrp</i>     Restrict matches to processes with a process group ID in the
               comma-separated list pgrp.  The value zero is taken to mean
               the process group ID of the running pgrep or pkill command.

   -i          Ignore case distinctions in both the process table and the
               supplied pattern.

   -l          Long output.  For pgrep, print the process name in addition
               to the process ID for each matching process.  If used in conjunction
               with -f, print the process ID and the full argument
               list for each matching process.  For pkill, display the kill
               command used for each process killed.

   -n          Select only the newest (most recently started) of the matching
               processes.

   -o          Select only the oldest (least recently started) of the matching
               processes.

   -q          Do not write anything to standard output.

   -t <i>tty</i>      Restrict matches to processes associated with a terminal in
               the comma-separated list tty.  Terminal names can  be of the
               form ttyxx or the shortened form xx.  A single dash (`-')
               matches processes not associated with a terminal.

   -u <i>euid</i>     Restrict matches to processes with an effective user ID in
               the comma-separated list euid.

   -v          Reverse the sense of the matching; display processes that do
               not match the given criteria.

   -x          Require an exact match of the process name, or argument list
               if -f is given.  The default is to match any substring.

   -<i>signal</i>     A non-negative decimal number or symbolic signal name specifying
               the signal to be sent instead of the default TERM.
               This option is valid only when given as the first argument to
               pkill.</pre>
<p><span class="code">pgrep</span> searches the process table on the running system and prints the process IDs of all processes that match the criteria given on the command line.</p>
<p><span class="code">pkill</span> searches the process table on the running system and signals all processes that match the criteria given on the command line.</p>
<p> If any pattern operands are specified, they are used as regular expressions to match the command name or full argument list of each process.</p>
<p> A running pgrep or pkill process will never consider itself as a potential match.</p>
<blockquote>
<table>
<caption>
Common Kill Signals
</caption>
<tbody><tr>
<th scope="col">Signal name</th>
<th scope="col">Signal value</th>
<th scope="col">Effect</th>
</tr>
<tr>
<td>SIGHUP</td>
<td>1</td>
<td>Hangup</td>
</tr>
<tr>
<td>SIGINT</td>
<td>2</td>
<td>Interrupt from keyboard </td>
</tr>
<tr>
<td>SIGQUIT</td>
<td>3</td>
<td>Quit</td>
</tr>
<tr>
<td>SIGABRT</td>
<td>6</td>
<td>Abort</td>
</tr>
<tr>
<td>SIGKILL</td>
<td>9</td>
<td>Kill signal </td>
</tr>
<tr>
<td>SIGTERM</td>
<td>15</td>
<td>Termination signal - allow an orderly shutdown</td>
</tr>
<tr>
<td>SIGSTOP</td>
<td>17,19,23</td>
<td>Stop the process</td>
</tr>
</tbody></table>
</blockquote>
<h2>Exit Status</h2>
<blockquote>
<p> 0       &nbsp;One or more processes were matched. <br>
1       &nbsp;No processes were matched. <br>
2       &nbsp;Invalid options were specified on the command line. <br>
3       &nbsp;An internal error occurred.</p>
</blockquote>
<p><b>Examples</b></p>
<p>Kill all the processes called com.IconServicesAgent, (<a href="https://discussions.apple.com/thread/6468254?start=0&amp;tstart=0">stray processes after a user logout</a> in OS X 10.9.4 and above)</p>
<p class="code">$ sudo pkill -9 -fx com.IconServicesAgent</p>

<p><b><i>  </i></b><i class="quote">"Love never dies a natural death. It dies because we don't know how to replenish it's source. It dies of blindness and errors and betrayals.<br>
It dies of illness and wounds; it dies of weariness, of witherings, of tarnishings" ~ Anais Nin</i></p>
<p><b>Related:</b></p>
<p><a href="https://developer.apple.com/legacy/library/documentation/Darwin/Reference/ManPages/man1/pkill.1.html">pkill man page</a> - Apple.com<br>
<a href="syntax-bashkeyboard.html">ctrl+z /   ctrl+c</a> - Suspend/Interrupt a program<br>
<a href="kill.html">kill</a> - Kill a process by specifying its PID<br>
<a href="killall.html">killall</a> - Kill processes by name.<br> 
flock(2)<br>
<a href="ps.html">ps</a> - Process status<br>
</p><!-- #BeginLibraryItem "/Library/foot_osx.lbi" --><p>
<!-- OSX300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="1823340303"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="pkill.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->
