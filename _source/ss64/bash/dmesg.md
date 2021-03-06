---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_bash.lbi" --><!-- #EndLibraryItem --><h1>dmesg </h1> 
<p>Print kernel (and driver) messages,  control the kernel ring buffer.</p>
<pre>Syntax
      dmesg [ -c ] [ -n <i>level</i> ] [ -s <i>bufsize</i> ]</pre>
<p>   The dmesg program allows you to print system  messages  from the buffer (mostly kernel and drivers loading at bootup) and can also be used to configure the kernel ring buffer. </p>

<pre>Options</pre>
<pre>   -c          Clear the ring buffer contents after printing.

   -s <i>bufsize</i>  Use a buffer of size <i>bufsize</i> to query the kernel ring buffer.
               This is 16392 by default. (The default kernel syslog buffer 
               size was 4096 at first, 8192 since 1.3.54, 16384 since 2.1.113.)
               If you have set the kernel buffer to be larger than the default
               then this option can be used to view the entire buffer. 

   -n<i> level</i>    Set the level at which logging of messages is done to the console.
               For example, -n 1 prevents all messages, expect panic messages,
               from appearing on the console. All levels of messages are still
               written to /proc/kmsg, so syslogd(8) can still be used to control exactly
               where kernel messages appear. When the -n option is used, dmesg will not
               print or clear the kernel ring buffer.</pre>
<p> When both options are used, only the last option on the command line will have an effect.<br>
As it's a ring-buffer, it will automatically cycle out old information when the buffer is full.</p>
<p><b>Examples</b></p>
<p>Print all the bootup messages to a file: </p>
<p class="code">$ sudo dmesg &gt; messages.txt</p>
<p>Print recent messages: </p>
<p class="code">$ sudo dmesg | tail -f</p>
<p class="quote"><i>“If we want a love message to be heard, it has got to be sent out. To keep a lamp burning, we have to keep putting oil in it” ~ Mother Teresa</i></p>
<p><b>Related:</b></p>
<p> chkconfig - updates and queries runlevel information for system services<br>
syslogd - Linux system logging utilities.<br>
/var/log/dmesg</p><!-- #BeginLibraryItem "/Library/foot_bash.lbi" --><p><script async="" src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
<!-- bash300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="4615356305"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

