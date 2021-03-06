---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_ora.lbi" --><!-- #EndLibraryItem --><h1>RECOVER Clause</h1> 
<p>Perform media recovery - the RECOVER clause must appear as part
  of an <a href="database_a.html">ALTER DATABASE RECOVER</a> command.<br>
  <br>
  Syntax:</p>
<pre>   <a href="database_a.html">ALTER DATABASE</a> <i>database_name</i> RECOVER [AUTOMATIC]
     [FROM 'location'] <i>options</i> [<i>execution_clause</i>]

   <a href="database_a.html">ALTER DATABASE</a> <i>database_name</i> RECOVER CONTINUE [DEFAULT]

   <a href="database_a.html">ALTER DATABASE</a> <i>database_name</i> RECOVER CANCEL</pre>
<p>Options (full recovery):</p>
<pre>   [STANDBY] DATABASE UNTIL CANCEL
   [STANDBY] DATABASE UNTIL TIME <i>date</i>
   [STANDBY] DATABASE UNTIL CHANGE <i>int</i>
   [STANDBY] DATABASE UNTIL CONSISTENT

   [STANDBY] DATABASE USING BACKUP CONTROLFILE
   [STANDBY] DATABASE SNAPSHOT TIME <i>date</i>
</pre>
<p><br>
Options (partial recovery):<br>
</p>
<pre>   TABLESPACE <i>tablespace</i> [,<i>tablespace</i>...]
   LOGFILE '<i>logfilename</i>'
   DATAFILE '<i>filename</i>' [,'<i>filename</i>'...]
   DATAFILE <i>filenunber</i> [,<i>filenunber</i>...]
   STANDBY DATAFILE <i>datafile</i> UNTIL [CONSISTENT WITH] CONTROLFILE 
   STANDBY TABLESPACE <i>tablespace</i> UNTIL [CONSISTENT WITH] CONTROLFILE</pre>
<p>Execution_clauses:<br>
</p>
<pre>   TEST
   ALLOW <i>int</i> CORRUPTION
   [PARALLEL <a href="clause_parallel.html">parallel_clause</a>]
</pre>
<p>The recovery option DATABASE implies a full recovery, while the TABLESPACE or DATAFILE options imply a partial recovery.</p>
<p>It is possible to include more than one DATAFILE or TABLESPACE in a single command (just separate with commas).<br>
<b><br>
Related Commands:</b><br><br>
DATABASE - <a href="database_a.html">ALTER DATABASE</a><br>
RECOVER MANAGED STANDBY <a href="clause_recover_standby.html">standby_recover_clause</a></p>
<p><b>Related Views:</b></p>
<p class="code"> <a href="../orad/DBA_DATA_FILES.html">DBA_DATA_FILES</a><br> 
<a href="../orad/DBA_TABLESPACES.html">DBA_TABLESPACES</a> <br> 
<a href="../orav/V$ARCHIVE.html">V$ARCHIVE</a><br> 
<a href="../orav/V$DATABASE.html">V$DATABASE</a><br> 
<a href="../orav/V$DATAFILE.html">V$DATAFILE</a><br> 
<a href="../orav/V$INSTANCE.html">V$INSTANCE</a><br> 
<a href="../orav/V$INSTANCE_RECOVERY.html">V$INSTANCE_RECOVERY</a><br> 
<a href="../orav/V$RECOVERY_FILE_STATUS.html">V$RECOVERY_FILE_STATUS</a><br> 
<a href="../orav/V$RECOVERY_LOG.html">V$RECOVERY_LOG</a><br> 
<a href="../orav/V$RECOVERY_PROGRESS.html">V$RECOVERY_PROGRESS</a><br> 
<a href="../orav/V$RECOVERY_STATUS.html">V$RECOVERY_STATUS</a><br> 
<a href="../orav/V$RECOVER_FILE.html">V$RECOVER_FILE</a><br> 
<a href="../orav/V$TABLESPACE.html">V$TABLESPACE</a></p><!-- #BeginLibraryItem "/Library/foot_ora.lbi" --><p><script async="" src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
<!-- oracle-footer -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="4275490898"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->
