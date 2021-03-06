---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_bash.lbi" --><!-- #EndLibraryItem --><h1>time</h1> 
<p>Measure  the running time of a program. </p>
<p> The `time' command will run another program, and record the elapsed time or CPU Resource Used time used by that program.<br>
The information mmay be displayed on screen  or saved in a file. </p>
<pre>Syntax
      time [<i>option</i>...] <i>command</i> [<i>arg</i>...]

Options

 -o <i>FILE</i>
 --output=<i>FILE</i>
     Write the resource use statistics to FILE.

 -a
 --append
     *Append* the resource use information to the output file instead
     of overwriting it.

 -f <i>FORMAT</i>
 --format=<i>FORMAT</i>
     Use <i>FORMAT</i> as the format string, see below for formatting options.

 --help
     Summary of the command line options.

 -o <i>FILE</i>
 --output=<i>FILE</i>
     Write the resource use statistics to FILE.  By default, this
     *overwrites* the file, destroying the file's previous contents.

 -a
 --append
     *Append* the resource use information to the output file instead
     of overwriting it.  This option is only useful with the `-o' or
     `--output' option.

 -p
 --portability
     Use the POSIX format.

 -v
 --verbose
     Use the built-in verbose format, which displays each available
     piece of information on the program's resource use on its own
     line, with an English description of its meaning.

-V
--version
     Print the version number of `time' and exit.

Options to `time' must appear on the command line before COMMAND.
Anything on the command line after COMMAND is passed as arguments to
COMMAND.</pre>
<p>Setting the Output Format<br>
`time' uses a "format string" to determine which information to display about the resources used by the command it runs. You can specify a format string with the options listed above. <br>
If no format is specified on the command line, but the `TIME' environment variable is set, its value is used as the format string. Otherwise, the default format built into `time' is used:</p>
<pre>   %Uuser %Ssystem %Eelapsed %PCPU (%Xtext+%Ddata %Mmax)k 
   %Iinputs+%Ooutputs (%Fmajor+%Rminor)pagefaults %Wswaps</pre>
<h2>The Format String</h2>
<blockquote>
<p> The "format string" controls the contents of the `time' output.  It consists of "resource specifiers" and "escapes", interspersed with<br>
plain text.<br>
<br>
A backslash introduces an "escape", which is translated into a single printing character upon output.  The valid escapes are listed<br>
below.  An invalid escape is output as a question mark followed by a backslash.</p>
<pre> \t     a tab character
 \n     a newline
 \\     a literal backslash</pre>
<p>`time' always prints a newline after printing the resource use information, so normally format strings do not end with a newline<br>
character (or `\n').<br>
<br>
A resource specifier consists of a percent sign followed by another character.  An invalid resource specifier is output as a question mark<br>
followed by the invalid character.  Use `%%' to output a literal percent sign.</p>
</blockquote>
<p><b>Time Resources</b></p>
<pre> %E   Elapsed real (wall clock) time used by the process, in [hours:]minutes:seconds.

 %e   Elapsed real (wall clock) time used by the process, in seconds.

 %S   Total number of CPU-seconds used by the system on behalf of the
      process (in kernel mode), in seconds.

 %U   Total number of CPU-seconds that the process used directly (in user
      mode), in seconds.

 %P   Percentage of the CPU that this job got.  This is just user +
      system times divied by the total running time.

<b>Memory Resources</b>

 %M   Maximum resident set size of the process during its lifetime, in
      Kilobytes.

 %t   Average resident set size of the process, in Kilobytes.

 %K   Average total (data+stack+text) memory use of the process, in
      Kilobytes.

 %D   Average size of the process's unshared data area, in Kilobytes.

 %p   Average size of the process's unshared stack, in Kilobytes.

 %X   Average size of the process's shared text, in Kilobytes.

 %Z   System's page size, in bytes.  This is a per-system constant, but
       varies between systems.

<b>I/O Resources</b>

 %F   Number of major, or I/O-requiring, page faults that occurred while
      the process was running.  These are faults where the page has
      actually migrated out of primary memory.

 %R   Number of minor, or recoverable, page faults.  These are pages
      that are not valid (so they fault) but which have not yet been
      claimed by other virtual pages.  Thus the data in the page is
      still valid but the system tables must be updated.

 %W   Number of times the process was swapped out of main memory.

 %c   Number of times the process was context-switched involuntarily
      (because the time slice expired).

 %w   Number of times that the program was context-switched voluntarily,
      for instance while waiting for an I/O operation to complete.

 %I   Number of file system inputs by the process.

 %O   Number of file system outputs by the process.

 %r   Number of socket messages received by the process.

 %s   Number of socket messages sent by the process.

 %k   Number of signals delivered to the process.

<b>Command Info</b>

 %C   Name and command line arguments of the command being timed.

 %x   Exit status of the command.


<b>Examples</b>

Run the command `wc /etc/hosts' and show the default information:

$ time wc /etc/hosts
           35     111    1134 /etc/hosts
     0.00user 0.01system 0:00.04elapsed 25%CPU (0avgtext+0avgdata 0maxresident)k
     1inputs+1outputs (0major+0minor)pagefaults 0swaps

Run the command `ls -Fs' and show the user, system, and wall-clock time:

$ time -f "\t%E real,\t%U user,\t%S sys" ls -Fs
     total 16
     1 account/      1 db/           1 mail/         1 run/
     1 backups/      1 emacs/        1 msgs/         1 rwho/
     1 crash/        1 games/        1 preserve/     1 spool/
     1 cron/         1 log/          1 quotas/       1 tmp/
             0:00.03 real,   0.00 user,      0.01 sys

Run the command `cat' and record the elapsed time (stopwatch) until `cat' is closed with Ctrl-D

$ time cat
^d
             0:16.55,        726</pre>
<p class="quote"><i>"T NOW! what do we want? <br>
MORE TIME-TRAVEL JOKES!<br>
when do we want them? RIGH"</i> ~ <a href="https://twitter.com/johnfreiler/status/350757308105621504">John Freiler</a></p>
<p><b>Related:</b><br>
<br>
<a href="times.html">times</a> - User and system times<br>
<a href="timeout.html">timeout</a> - Run a command with a time limit<br>
Equivalent Windows command:
PERFMTR - Performance Monitor</p><!-- #BeginLibraryItem "/Library/foot_bash.lbi" --><p><script async="" src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
<!-- bash300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="4615356305"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

