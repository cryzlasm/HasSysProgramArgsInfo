---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_orav.lbi" --><!-- #EndLibraryItem --><h1>V$SESSION_LONGOPS </h1>  
 <p> Use this feature to indicate the progress of long running PL/SQL operations (set with dbms_application_info.) </p> 
 
<pre>Columns
   ___________________________
 
   SID
   SERIAL#
   OPNAME
   TARGET
   TARGET_DESC
   SOFAR
   TOTALWORK
   UNITS
   START_TIME
   LAST_UPDATE_TIME
   TIME_REMAINING
   ELAPSED_SECONDS
   CONTEXT
   MESSAGE
   USERNAME
   SQL_ADDRESS
   SQL_HASH_VALUE
   QCSID

</pre>
<p><b>Related:</b></p>
<pre><a href="../orap/DBMS_APPLICATION_INFO.html">DBMS_APPLICATION_INFO</a>.set_session_longops
<a href="../orap/DBMS_APPLICATION_INFO.html">DBMS_APPLICATION_INFO</a>.set_module
<a href="V$ACCESS.html">V$ACCESS</a>
<a href="V$MYSTAT.html">V$MYSTAT</a> 
<a href="V$PROCESS.html">V$PROCESS</a>		
<a href="V$SESSION.html">V$SESSION</a>.sid
<a href="V$SESSION_CONNECT_INFO.html">V$SESSION_CONNECT_INFO</a> 
<a href="V$SESSION_CURSOR_CACHE.html">V$SESSION_CURSOR_CACHE</a> 
<a href="V$SESSION_EVENT.html">V$SESSION_EVENT</a> 
<a href="V$SESSION_OBJECT_CACHE.html">V$SESSION_OBJECT_CACHE</a> 
<a href="V$SESSION_WAIT.html">V$SESSION_WAIT</a> 
<a href="V$SESSTAT.html">V$SESSTAT</a> 
<a href="V$SESS_IO.html">V$SESS_IO</a> </pre><!-- #BeginLibraryItem "/Library/foot_orad.lbi" --><p>
<!-- oracle-footer -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="4275490898"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="V$SESSION_LONGOPS.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div>
<!-- #EndLibraryItem -->

