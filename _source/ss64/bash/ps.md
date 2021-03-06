---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_bash.lbi" --><!-- #EndLibraryItem --><h1>ps</h1> 
<p>Process status, information about processes running in memory. 
If you want a repetitive update of this status, use top.</p>
<pre>Syntax
         ps <i>option(s)</i>
         ps [-L]

Options
      -L   List all the <a href="ps_keywords.html">keyword</a> options</pre>
<p>This version of ps accepts 3 kinds of option:<br>
<br>
-Unix98 options can be grouped and must be preceeded by a dash.<br>

BSD options can be grouped and must not be used with a dash.<br>
--GNU long options are preceeded by two dashes.<br>
<br>
Options of different types can be freely mixed. The <a href="ps_keywords.html">PS_PERSONALITY</a> environment variable provides more detailed control  of ps behavior.<br>
<br>
The Options below are listed side-by-side (unless there are differences).</p>
<pre>Simple Process Selection:
       -A  a        select all processes (including those of other users)
       -a           select all with a tty except session leaders
       -d           select all, but omit session leaders
       -e           select all processes
       g            really all, even group leaders (does nothing w/o SunOS settings)
       -N           negate selection
       r            restrict output to running processes
       T            select all processes on this terminal
       x            select processes without controlling ttys
       --deselect   negate selection

Process Selection by List:

     -C              select by command name
     -G              select by RGID (supports names)
     -g              select by session leader OR by group name
            --Group  select by real group name or ID
            --group  select by effective group name or ID
     -p  p  --pid    select by process ID (PID)
     -s     --sid    select by session ID
     -t     --tty    select by terminal (tty)
     -u  U           select by effective user ID (supports names)
     -U              select by RUID (supports names)
            --User   select by real user name or ID
            --user   select by effective user name or ID

     -<i>123</i>      implied --sid
     <i>123</i>       implied --pid

Output Format Control:

       -c         Different scheduler info for -l option
       -f         Full listing
       -j  j      Jobs format
       -l  l      Long format
       -O  O      Add the information associated with the space or comma separated
                  list of <a href="ps_keywords.html">keywords</a> specified, after the <b>process ID</b>, in the default
                  information display.

       -o  o      Display information associated with the space or comma separated
                  list of <a href="ps_keywords.html">keywords</a> specified.
       --format   <a href="ps_keywords.html">user-defined format</a>
        s         display signal format
        u         display user-oriented format
        v         display virtual memory format
        X         old Linux i386 register format
       -y         do not show flags; show rss in place of addr

Output Modifiers:
       C              use raw CPU time for %CPU instead of decaying average
       c              true command name
       e              show environment after the command
       f              ASCII-art process hierarchy (forest)
       -H             show process hierarchy (forest)
       h              do not print header lines (repeat header lines in BSD personality)
       -m  m          show all threads
       -n             set namelist file
       n              numeric output for WCHAN and USER
       N              specify namelist file
       O              <a href="ps_keywords.html">sorting</a> order (overloaded)
       S              include some dead child process data (as a  sum  with the parent)
       -w  w          wide output
       --cols         set screen width
       --columns      set screen width
       --forest       ASCII art process tree
       --html         HTML escaped output
       --headers      repeat header lines
       --no-headers   print no header line at all
       --lines        set screen height
       --nul          unjustified output with NULs
       --null         unjustified output with NULs
       --rows         set screen height
       --sort         specify <a href="ps_keywords.html">sorting</a> order
       --width        set screen width
       --zero         unjustified output with NULs

Information:
       -V  V       print version
       L           list all format specifiers
       --help      print help message
       --info      print debugging info
       --version   print version

Obsolete:
       A        increase the argument space (DecUnix)
       M        use alternate core (try -n or N instead)
       W        get swap info from ... not /dev/drum (try -n or N instead)
       k        use /vmcore as c-dumpfile (try -n or N instead)</pre>
<p>The "-g" option can select by session leader OR by group name.  Selection by session leader is  specified  by  many standards,  but selection by group is the logical behavior that several other operating systems  use.  This  ps  will select  by  session  leader  when  the  list is completely numeric (as sessions are). Group ID numbers will work only when some group names are also specified.<br>
<br>
The "m" option should not be used. Use "-m" or "-o" with a list.  ("m" displays memory info, shows threads, or  sorts by memory use)<br>
<br>
The "h" option varies between BSD personality and Linux usage (not printing  the  header) Regardless of the current personality,  
you can use the long options --headers and --no-headers<br>  
<br>  
Terminals (ttys, or screens of text output) can be  specified in several forms: /dev/ttyS1, ttyS1, S1. Obsolete "ps t" (your own terminal) and "ps t?" (processes without a terminal) syntax  is  supported, but modern options ("T","-t" with  list,  "x",  "t" with  list)  should  be  used instead.<br>
<br>
The  BSD "O" option can act like "-O" (user-defined output format with some common fields predefined) or can be used to specify  sort order.  Heuristics are used to determine  
the behavior of this option. To ensure  that  the  desired 
behavior is obtained, specify the other option (sorting or  
formatting) in some other way.<br>
<br>
For sorting, BSD "O" option syntax is  <span class="code">O[+|-]k1[,[+|-]k2[,...]]</span><br>
Order   the   process  listing according to the multilevel sort specified by the sequence of short keys from SORT KEYS, k1, k2, ... The `+' is quite  optional, merely re-iterating the default direction  on  a key.  `-'  reverses direction only on the key it precedes.<br>  
The O option must be the last option in a  single  command argument,  but  specifications in successive arguments are catenated.<br>
<br>  
GNU  sorting  syntax  is  <span class="code">--sortX[+|-]key[,[+|-]key[,...]]</span><br>  
Choose  a  multi-letter  key from the SORT KEYS section. X  
can be any convenient separator character. To  be  GNU-ish
use  `='.  The `+' is really optional since default direction is increasing numerical or lexicographic  order.  For  
example, ps jax --sort=uid,-ppid,+pid<br>
<br>  
This  ps works by reading the virtual files in /proc. This ps does not need to be suid kmem or have any privileges to run. Do not give this ps any special permissions.<br>
  <br>  
  This  ps  needs access to a namelist file for proper WCHAN display.  The namelist file must match the  current Linux  kernel exactly for correct output.<br>
  <br>
 To produce the WCHAN field, ps needs to read the System.map file created when  the  kernel  is  compiled.  The search path is:</p>
<pre>   $PS_SYSTEM_MAP
   /boot/System.map-`uname -r`
   /boot/System.map
   /lib/modules/`uname -r`/System.map
   /usr/src/linux/System.map
   /System.map</pre>
<p>The member <span class="code">used_math  of task_struct</span> is not shown, since
crt0.s checks to see if math is present. This causes the math flag to be set for all processes, and so it is Programs swapped out to disk will be shown without command line  arguments,  and  unless  the  c  option is given, in brackets.<br>
<br>
<span class="code">%CPU</span> shows the cputime/realtime percentage. It will  not add up to 100%  unless you are lucky. It is time used divided by the time the process has been running.<br>
<br>
The SIZE and RSS fields don't count the page tables  and the  task_struct of a proc; this is at least 12k of memory that is always resident. SIZE is the virtual size  of  the
proc (code+data+stack).<br>
<br>
Processes  marked <i>defunct</i> are dead processes (so-called"zombies")  that  remain  because  their parent has not destroyed them properly. These processes will be destroyed by init(8) if the parent process exits.</p>
<pre>   PROCESS FLAGS
       ALIGNWARN    001   print alignment warning msgs
       STARTING     002   being created
       EXITING      004   getting shut down
       PTRACED      010   set if ptrace (0) has been called
       TRACESYS     020   tracing system calls
       FORKNOEXEC   040   forked but didn't exec
       SUPERPRIV    100   used super-user privileges
       DUMPCORE     200   dumped core
       SIGNALED     400   killed by a signal

   PROCESS STATE CODES
       D   uninterruptible sleep (usually IO)
       R   runnable (on run queue)
       S   sleeping
       T   traced or stopped
       Z   a defunct ("zombie") process

       For BSD formats and when the "stat" keyword is used, 
       additional letters can be displayed:
       W   has no resident pages
       &lt;   high-priority process
       N   low-priority task
       L   has pages locked into memory (for real-time and custom IO)

<a href="ps_keywords.html">ENVIRONMENT VARIABLES and PERSONALITY</a> (posix,linux,bsd,sun)
</pre>
<p><b>Examples:</b></p>
<p>List every process on the system using standard syntax:<br>   
<span class="code">ps -e</span><br>
<br>       
List every process on the system using BSD syntax:<br>    
<span class="code">ps ax</span></p>
<p>List the top 10 CPU users.<br>
<span class="code">ps -e -o pcpu -o pid -o user -o args | sort -k 1 | tail -21r</span><br>
<br>

List every process except those running as root (real &amp; effective ID)<br>
<span class="code">ps -U root -u root -N</span><br>
<br>
List every process with a user-defined format:<br>
<span class="code">ps -eo pid,tt,user,fname,tmout,f,wchan</span><br>
<br>
Odd display with AIX field descriptors:<br>
<span class="code">ps -o "%u : %U : %p : %a"</span><br>
<br>
Print only the process IDs of syslogd:<br>
<span class="code">ps -C syslogd -o pid=</span></p>
<span class="body"> </span> 
<p>When displaying multiple fields,  part of the output might be truncated, to avoid this supply a width to the arguments: </p>
<pre>ps -e -o user:20,args.</pre>
<p>Since ps cannot run faster than the system and is run as any other 
  scheduled process, the information it displays can never be exact.</p>
<p class="quote"><i>"Life is a process of becoming, a combination of states we have to go through. Where people fail is that they wish to elect a state and remain in it. This is a kind of death" ~ Anaïs Nin</i></p>
<p><b>Related:</b><br>
<br>
<a href="top.html">top</a> - List running processes on the system<br>
pstree(1) <br>
proc(5)<br> 
Performance monitoring tools: <a href="http://freshmeat.net/projects/atop/">atop</a>, <a href="http://freshmeat.net/projects/bmon/">bmon</a>, <a href="http://dag.wieers.com/home-made/dstat/">dstat</a>, <a href="http://hisham.hm/htop/">htop</a>,
<a href="http://gael.roualland.free.fr/ifstat/">ifstat</a>, <a href="http://www.ex-parrot.com/pdw/iftop/">iftop</a>, <a href="http://pagesperso-orange.fr/sebastien.godard/">sysstat</a><br>
Equivalent Windows command:
<a href="../nt/pslist.html">pslist</a> - List detailed information about processes</p><!-- #BeginLibraryItem "/Library/foot_bash.lbi" --><p><script async="" src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
<!-- bash300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="4615356305"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

