---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_bash.lbi" --><!-- #EndLibraryItem --><h1>vmstat </h1> 
<p> Report virtual memory statistics: processes, memory, paging, block IO, traps, and cpu activity.</p>
<pre>Syntax
      vmstat [-a] [-n] [<i>delay</i> [ <i>count</i>]]
      vmstat [-f] [-s] [-m]
      vmstat [-S unit]
      vmstat [-d]
      vmstat [-p disk partition]
      vmstat [-V] 

Options

   -a   Display active/inactive memory, given a 2.5.41 kernel or better.

   -f   Display the number of forks since boot.
        This includes the fork, vfork, and clone system calls, and is
        equivalent to the total number of tasks created.
        Each process is represented by one or more tasks, depending on
        thread usage. This display does not repeat.

   -m   Displays slabinfo.

   -n   Cause the header to be displayed only once rather than periodically.

   -s   Display a table of various event counters and memory statistics.
        This display does not repeat.

 <i>delay</i>  The delay between updates in seconds.
        If no delay is specified, only one report is printed with the average values since boot.

 <i>count</i>  The number of updates. If no count is specified and delay is defined, count defaults to infinity.

   -d   Report disk statistics (2.5.70 or above required)

   -p followed by some partition name for detailed statistics (2.5.70 or above required)

   -S followed by k or K or m or M switches outputs between 1000, 1024, 1000000, or 1048576 bytes

   -V   Display version information.  </pre>
<p><b> Field Description For Vm Mode</b></p>
<p>Procs</p>
<p>r: The number of processes waiting for run time.<br>
b: The number of processes in uninterruptible sleep.</p>
<p>Memory</p>
<p>swpd: the amount of virtual memory used.<br>
free: the amount of idle memory.<br>
buff: the amount of memory used as buffers.<br>
cache: the amount of memory used as cache.<br>
inact: the amount of inactive memory. (-a option)<br>
active: the amount of active memory. (-a option)</p>
<p>Swap</p>
<p>si: Amount of memory swapped in from disk (/s).<br>
so: Amount of memory swapped to disk (/s).</p>
<p>IO</p>
<p>bi: Blocks received from a block device (blocks/s).<br>
bo: Blocks sent to a block device (blocks/s).</p>
<p>System</p>
<p>in: The number of interrupts per second, including the clock.<br>
cs: The number of context switches per second.</p>
<p>CPU</p>
<p>These are percentages of total CPU time.</p>
<p>us: Time spent running non-kernel code. (user time, including nice time)<br>
sy: Time spent running kernel code. (system time)<br>
id: Time spent idle. Prior to Linux 2.5.41, this includes IO-wait time.<br>
wa: Time spent waiting for IO. Prior to Linux 2.5.41, included in idle.<br>
st: Time stolen from a virtual machine. Prior to Linux 2.6.11, unknown.</p>
<p><b>Field Description For Disk Mode</b></p>
<p>Reads</p>
<p>total: Total reads completed successfully<br>
merged: grouped reads (resulting in one I/O)<br>
sectors: Sectors read successfully<br>
ms: milliseconds spent reading</p>
<p>Writes</p>
<p>total: Total writes completed successfully<br>
merged: grouped writes (resulting in one I/O)<br>
sectors: Sectors written successfully<br>
ms: milliseconds spent writing</p>
<p>IO</p>
<p>cur: I/O in progress<br>
s: seconds spent for I/O</p>
<p><b>Field Description For Disk Partition Mode</b></p>
<p>reads: Total number of reads issued to this partition<br>
read sectors: Total read sectors for partition<br>
writes : Total number of writes issued to this partition<br>
requested writes: Total number of write requests made for partition</p>
<p><b>Field Description For Slab Mode</b></p>
<p>cache: Cache name<br>
num: Number of currently active objects<br>
total: Total number of available objects<br>
size: Size of each object<br>
pages: Number of pages with at least one active object<br>
totpages: Total number of allocated pages<br>
pslab: Number of pages per slab</p>
<p><b>Notes</b></p>
<p>vmstat does not require special permissions.</p>
<p>These reports are intended to help identify system bottlenecks. Linux vmstat does not count itself as a running process.</p>
<p>All linux blocks are currently 1024 bytes. Old kernels might report blocks as 512 bytes, 2048 bytes, or 4096 bytes.</p>
<p>Since procps 3.1.9, vmstat lets you choose units (k, K, m, M) default is K (1024 bytes) in the default mode</p>
<p>vmstat uses slabinfo 1.1 FIXME</p>
<p>Files</p>
<p>/proc/meminfo<br>
/proc/stat<br>
/proc/*/stat</p>
<p class="quote"><i>“The moment one definitely commits oneself then Providence moves too. All sorts of things occur to help one that would never otherwise have occurred” ~ W.H. Murray</i></p>
<p><b>Related:</b></p>
<p>iostat(1), sar(1), mpstat(1)<br>
free - Display memory usage<br>
<a href="ps.html">ps</a> - Process status<br>
<a href="top.html">top</a> - List processes running on the system</p><!-- #BeginLibraryItem "/Library/foot_bash.lbi" --><p>
<!-- bash300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="4615356305"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="vmstat.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

