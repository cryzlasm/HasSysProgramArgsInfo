---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_ora.lbi" --><!-- #EndLibraryItem --><h1><a href="rman.html">RMAN</a> <code>Restore Clause</code></h1>
<p>Restore RMAN backups and copies.<br>
  <br>
  Syntax:</p>
<pre>   RESTORE
   [(] <a href="rman_restore.html#restoreObject">restoreObject</a> [(<a href="rman_restore.html#restoreSpecOperand">restoreSpecOperand</a> [<a href="rman_restore.html#restoreSpecOperand">restoreSpecOperand</a>]…] [)]… 
   [ CHANNEL ['] <i>channel_id</i> ['] 
   | PARMS [=] '<i>channel_parms</i>' 
   | FROM { BACKUPSET | DATAFILECOPY } 
   | <a href="rman_untilClause.html">untilClause</a> 
   | FROM TAG [=] ['] <i>tag_name</i> ['] 
   | VALIDATE 
   | DEVICE TYPE <a href="rman_devicespecifier.html">deviceSpecifier</a> [, <a href="rman_devicespecifier.html">deviceSpecifier</a>]… 
   .
   .
   .
   ]…;

   restoreObject<a id="restoreObject"></a>::=
     { CONTROLFILE [TO '<i>filename</i>']
     | DATABASE 
       [SKIP [FOREVER] TABLESPACE 
        ['] <i>tablespace_name</i> ['] [, ['] <i>tablespace_name</i> [']]…
       ]
     | DATAFILE <a href="rman_datafile.html">datafileSpec</a> [, <a href="rman_datafile.html">datafileSpec</a>]…
     | TABLESPACE ['] <i>tablespace_name </i>['] [, ['] <i>tablespace_name</i> [']]…
     | <a href="rman_archivelogRecordSpecifier.html">archivelogRecordSpecifier</a>
     | SPFILE [TO [PFILE] '<i>filename</i>']
     }

   restoreSpecOperand<a id="restoreSpecOperand"></a>::=
     { CHANNEL ['] <i>channel_id </i>[']
     | FROM TAG [=] ['] <i>tag_name</i> [']
     | PARMS [=] '<i>channel_parms</i>'
     | FROM 
       { AUTOBACKUP 
         [{ MAXSEQ | MAXDAYS } [=] <i>integer</i>)]… 
       | '<i>media_handle</i>'
       }
     }</pre>
<p><b>Examples</b></p>
<p><span class="BP"><a href="rman_restore_example.html">Full DR recovery</a> - Full Example (restoring to a different machine) <br>
<a href="rman_pitr_example.html">Point in time recovery</a> - Full Example (restoring to the same machine / different date/time) </span></p>
<p>Restore and recover the whole Database:</p>
<pre> RMAN&gt; STARTUP FORCE MOUNT;
 RMAN&gt; RESTORE DATABASE;
 RMAN&gt; RECOVER DATABASE;
 RMAN&gt; ALTER DATABASE OPEN;
</pre>
<p>Restore and recover a Tablespace:</p>
<pre> RMAN&gt; SQL 'ALTER TABLESPACE <i>users</i> OFFLINE';
 RMAN&gt; RESTORE TABLESPACE <i>users</i>;
 RMAN&gt; RECOVER TABLESPACE <i>users</i>;
 RMAN&gt; SQL 'ALTER TABLESPACE <i>users</i> ONLINE';
</pre>
<p>Restore and recover a Datafile:</p>
<pre> RMAN&gt; SQL 'ALTER DATABASE DATAFILE 64 OFFLINE';
 RMAN&gt; RESTORE DATAFILE 64;
 RMAN&gt; RECOVER DATAFILE 64;
 RMAN&gt; SQL 'ALTER DATABASE DATAFILE 64 ONLINE';</pre>
<p class="BP">Restore the Control file, (to all locations specified in the parameter
file) then restore the database, using that control file:</p>
<p class="code">STARTUP NOMOUNT;<br>
  RUN<br>
  {<br>
  ALLOCATE CHANNEL c1 DEVICE TYPE sbt;<br>
  RESTORE CONTROLFILE;<br>
  ALTER DATABASE MOUNT;<br>
  RESTORE DATABASE;<br>
}</p>
<p class="BP">Restore Validation confirms that a restore could be run, by confirming
    that all database files exist and are free of physical and logical corruption,
    this does not generate any output.<br>
  Example:</p>
<pre class="CE"> RMAN&gt; RESTORE DATABASE VALIDATE;</pre>
<p><i class="quote">"Don't count the days, make the days count" ~ Muhammad Ali</i><br>
<br>
<b>Related Commands:</b><br>
<br>
<a href="rman_backup.html">BACKUP</a> - Back up database files, archive logs, backups, or copies. <a href="rman_crosscheck.html"><br>
CROSSCHECK</a> - Check whether backup items still exist. <a href="rman_list.html"><br>
LIST</a> - List backups and copies <a href="rman_recover.html"><br>
RECOVER</a> - Perform media recovery from RMAN backups and copies. <a href="rman_report.html"><br>
REPORT</a> - Report backup status: database, files, backups <a href="rman_run.html"><br>
RUN</a> - Some RMAN commands are only valid inside a RUN block. <a href="rman_set.html"><br>
SET</a> - Settings for the current RMAN session. <a href="rman_show.html"><br>
SHOW</a> - Display the current configuration</p><!-- #BeginLibraryItem "/Library/foot_ora.lbi" --><p>
<!-- oracle-footer -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="4275490898"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="rman_restore.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

