---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_orav.lbi" --><!-- #EndLibraryItem --><h1>V$SYSTEM_EVENT </h1>  
 <p> Wait events since startup of the instance.</p> 
 
<pre>Columns

 
   EVENT
   TOTAL_WAITS
   TOTAL_TIMEOUTS
   TIME_WAITED
   AVERAGE_WAIT
   TIME_WAITED_MICRO</pre>
<p>total_waits = A  count  of all wait events since startup of the instance.</p>
<p>time_waited = The sum of the wait times for all events in hundreth of a second. (requires timed_statistics=true) </p>
<p>  time_waited_micro = wait times in millionths of a second. </p>
<p><b>Related:</b></p>
<pre><a href="V$GLOBAL_TRANSACTION.html">V$ENQUEUE_STAT</a> 
<a href="V$GLOBAL_TRANSACTION.html">V$GLOBAL_TRANSACTION</a> 
<a href="V$SESSION_EVENT.html">V$SESSION_EVENT</a> 
<a href="V$SHARED_POOL_RESERVED.html">V$SHARED_POOL_RESERVED</a> 
<a href="V$SORT_SEGMENT.html">V$SORT_SEGMENT</a> 
<a href="V$SORT_USAGE.html">V$SORT_USAGE</a> 
<a href="V$STATNAME.html">V$STATNAME</a> 
<a href="V$SYSSTAT.html">V$SYSSTAT</a> 
<a href="V$SYSTEM_CURSOR_CACHE.html">V$SYSTEM_CURSOR_CACHE</a> 
<a href="V$TRANSACTION.html">V$TRANSACTION</a> </pre><!-- #BeginLibraryItem "/Library/foot_orad.lbi" --><p>
<!-- oracle-footer -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="4275490898"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="V$SYSTEM_EVENT.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2015<br>
Some rights reserved</div>
<!-- #EndLibraryItem -->

