---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_ora.lbi" --><!-- #EndLibraryItem --><h1>RECOVER (SQL Plus command) </h1> 
<p>Recover a Database, Tablespace, Data or Log file.<br>
  <br>
  Syntax:</p>
<pre>Full recovery:
  
   RECOVER [AUTOMATIC]<i> </i>[FROM '<i>location</i>']
      [STANDBY] <b>DATABASE</b> 
         [UNTIL CANCEL] | [UNTIL TIME <i>date</i>] | [UNTIL CHANGE <i>int</i>] | [USING BACKUP CONTROLFILE]
              [TEST | ALLOW <i>int</i> CORRUPTION ]

   RECOVER [AUTOMATIC]<i> </i>[FROM '<i>location</i>']
      [STANDBY] DATABASE 
         <b>CANCEL</b>

Tablespace recovery:

   RECOVER [AUTOMATIC]<i> </i>[FROM '<i>location</i>']
      <b>TABLESPACE</b> <i>tablespace</i> [, <i>tablespace2</i>…]
         [TEST | ALLOW <i>int</i> CORRUPTION ]

   RECOVER [AUTOMATIC]<i> </i>[FROM '<i>location</i>']
      <b>STANDBY TABLESPACE</b> <i>tablespace</i> [, <i>tablespace2</i>…]
         UNTIL [CONSISTENT] [WITH] CONTROLFILE
           [TEST | ALLOW <i>int</i> CORRUPTION ]

   RECOVER [AUTOMATIC]<i> </i>[FROM '<i>location</i>']
      [STANDBY] TABLESPACE <i>tablespace</i> [, <i>tablespace2</i>…] <b>CANCEL</b>

Datafile Recovery:

   RECOVER [AUTOMATIC]<i> </i>[FROM '<i>location</i>']
      <b>DATAFILE</b> '<i>filename</i>' [, <i>filename2</i>…]
         [TEST | ALLOW <i>int</i> CORRUPTION ]

   RECOVER [AUTOMATIC]<i> </i>[FROM '<i>location</i>']
      <b>STANDBY DATAFILE</b> '<i>filename</i>' [, <i>filename2</i>,…]
         UNTIL [CONSISTENT] [WITH] CONTROLFILE
            [TEST | ALLOW <i>int</i> CORRUPTION ]

   RECOVER [AUTOMATIC]<i> </i>[FROM '<i>location</i>']
      [STANDBY] DATAFILE '<i>filename</i>' [, <i>filename2</i>…] <b>CANCEL</b>

Continue media recovery by applying a specific redo log file

   RECOVER [AUTOMATIC]<i> </i>[FROM '<i>location</i>']
      <b>LOGFILE</b> '<i>filename</i>'

Managed Standby:

   RECOVER MANAGED STANDBY DATABASE 
   RECOVER MANAGED STANDBY DATABASE NODELAY
   RECOVER MANAGED STANDBY DATABASE TIMEOUT <i>int</i>
   RECOVER MANAGED STANDBY DATABASE DISCONNECT [FROM SESSION] ] [FINISH [NOWAIT] ]
   RECOVER MANAGED STANDBY DATABASE CANCEL [IMMEDIATE] [NOWAIT]}  </pre>
<p>Parallel option - add to any of the above:</p>

<pre>   PARALLEL <i>int</i></pre>
<p>Parallel media recovery allows you to use multiple CPU's /processes to recover a single instance. To make the recovery more efficient, Oracle will allocate each process to a different data block while rolling forward.</p>
<p>For example, if parallel recovery is performed with PARALLEL 4, and only one datafile is recovered, then four spawned processes read blocks from the datafile and apply records instead of only one process.<br>
  <br>
  Key:<br>
</p>
<pre>AUTOMATIC Automatically generate the name of the next archived
          redo log file needed to continue the recovery operation.
FROM <i>location</i>
          The location from which the archived redo log file group is read.
STANDBY
          Recover the standby database using the control file and archived
          redo log files copied from the primary database. 
          The standby database must be mounted but not open.
UNTIL CANCEL
          Partial recovery. Recovery proceeds by prompting you with the 
          suggested filenames of archived redo log files, and recovery completes
          when you specify CANCEL instead of a filename.
UNTIL CHANGE <i>int</i>
          An incomplete, change-based recovery. integer is the System Change Number
          (SCN) following the last change you wish to recover.
UNTIL TIME <i>date</i>
          Partial time-based recovery. Use the format:
           'YYYY-MM-DD:HH24:MI:SS'
UNTIL [CONSISTENT] [WITH] CONTROLFILE
          Recover an old standby datafile or tablespace using the current
          standby database control file.
TABLESPACE <i>tablespace</i>
          Recover a tablespace.
          You can recover up to 16 tablespaces in one statement.
CONTINUE [DEFAULT]
          Continues multi-instance recovery after it has been
          interrupted to disable a thread.
          Continues recovery using the redo log file that Oracle
          would automatically generate if no other logfile were specified.
          This option is equivalent to specifying AUTOMATIC, except that Oracle
          does not prompt for a filename.
CANCEL
          Terminates cancel-based recovery.
MANAGED STANDBY DATABASE
          Sustained standby recovery mode. 
TIMEOUT <i>int</i>
          The number of MINUTES = the wait period of a sustained recovery operation.</pre>
<p>Because of possible network timeouts, it is recommended that you use SQL*Plus  command-line for long running DBA operations such as RECOVER. </p>
<p>The RECOVER command is available in SQL*Plus, (the syntax ALTER DATABASE RECOVER… is provided for backwards compatibility with older versions)<br>
<br>
<i class="quote">"All those who drink of this remedy recover in a short time, except those whom it does not help, who die. Therefore, it is obvious that it fails only in incurable cases" ~ Galen (circa 100 A.D.)</i></p>
<p><b>Related Commands:</b></p>
<p><a href="rman_recover.html">RMAN  Recover</a> <br>
<a href="database_a.html">ALTER DATABASE</a><br>
<a href="http://www.jlcomp.demon.co.uk/faq/ind_faq.html#Recovery">Recovery - 
FAQ</a><br>
<br>
<b>Related Views:</b></p>
<p class="code">&nbsp;<a href="../orad/GLOBAL_NAME.html">GLOBAL_NAME</a> <br>  
&nbsp;<a href="../orad/DBA_DATA_FILES.html">DBA_DATA_FILES</a><br>  
&nbsp;<a href="../orav/V$CONTROLFILE.html">V$CONTROLFILE</a><br>  
&nbsp;<a href="../orav/V$DATABASE.html">V$DATABASE</a><br>  
&nbsp;<a href="../orav/V$DATAFILE.html">V$DATAFILE</a><br>  
&nbsp;<a href="../orav/V$LOG.html">V$LOG</a><br>  
&nbsp;<a href="../orav/V$LOGFILE.html">V$LOGFILE</a></p><!-- #BeginLibraryItem "/Library/foot_ora.lbi" --><p>
<!-- oracle-footer -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="4275490898"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="recover.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

