---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_orasyntax.lbi" --><!-- #EndLibraryItem --><h1>Instance startup and shutdown</h1>
<p>   Every running Oracle database is associated with an Oracle instance. <br>
  An Oracle instance is a combination of the System Global Area (SGA) and other
    Oracle processes running in memory.<br>
  After starting an instance, Oracle
  associates the instance with the specified database.<br>
  This is called mounting the database. The database is then ready to be opened,
  which makes it accessible to authorized users.<br>
  <br>
  <b>  Startup<br>
  </b><br>
  The  steps to start an Oracle database and make it available for
  system-wide use are:<br>
  1. Start an instance.<br>
  2. Mount the database.<br>
  3. Open the database.<br>
  <br>
This can be done using the SQL*Plus <a href="startup.html">STARTUP</a> command
or via Enterprise Manager. An administrator level Oracle logon (sysdba) is required to startup or shutdown the database instance. </p>
<p>To start an instance, Oracle must read  the init.ora file, this contains
  a list of configuration parameters for the instance and database, Oracle then
  allocates
  memory and creates background processes. Until it is mounted, no database is
  associated with these memory structures and processes.</p>
<p>Changes made by editing the init.ora file will take effect when the instance
  is next started. Some init.ora parameters can be changed dynamically by using
  the <a href="session_a.html">ALTER
    SESSION</a>  or <a href="system_a.html">ALTER SYSTEM</a> statement
  while the instance is running. </p>
<p>You can start an instance in restricted mode (or later alter an existing instance
  to be in restricted mode). This restricts connections to only those users who
  have been granted the RESTRICTED SESSION system privilege.</p>
<p>In addition to init.ora, every Oracle database has a control file this lists
   the
  datafiles and redo log files.<br>
  The control file must
be available  for the open database operation to succeed.</p>
<p><b>Restricted Session Mode</b><br>
  You can start an instance in restricted mode (or later alter an existing instance
    to be in restricted mode). This restricts connections to only those users
    who have been
granted the RESTRICTED SESSION system privilege.</p>
<p><b>Read-Only Mode</b><br>
  You can open any database in read-only mode to prevent its data contents from
    being modified by user transactions.<br>
  Datafiles and temporary tablespaces (but not permanent tablespaces) can be
  taken offline and online.<br>
  Recovery of offline datafiles and tablespaces can be performed<br>
The control file remains available for updates about the state of the database</p>
<p>One useful application of read-only mode occurs when standby databases function
  as temporary reporting databases.</p>
<p><b>Shutdown</b><br>
  The  steps to shutting down a database and its associated instance are:<br>
  1. Close the database.<br>
  2. Unmount the database.<br>
  3. Shut down the instance.<br>
  This can be done with the <a href="shutdown.html">SHUTDOWN</a> command
  or via Enterprise Manager. Oracle automatically performs all three steps when
  an instance
  is shut
down.</p>
<p>In unusual circumstances, shutdown of an instance might not occur cleanly,
  e.g. all memory structures might not be removed from memory. In this case,
  subsequent instance startup might fail. <br>
  In such situations, the DBA can force the new instance to start up by manually
  terminating the old processes and then starting a new instance, or by issuing
a SHUTDOWN ABORT statement.</p>
<p><b>Database Quiesce<br>
</b>You can prevent new database activity, but allow running commands to complete
  with the  <a href="system_a.html">ALTER
    SYSTEM </a>QUIESCE RESTRICTED
command.</p>
<p>Issuing this statement will have the following effect:<br>
  - All <i>inactive </i>sessions (other than SYS and SYSTEM) will be prevented from
  becoming <i>active</i>. </p>
<p>- No user other than SYS and SYSTEM can start a new transaction,
      a
      new query,
        a new fetch, or a new PL/SQL operation.<br>
        <br>
  - Oracle will then wait for existing transactions  to finish (either commit
      or abort). </p>
<p>- For shared server mode instances only, Oracle will block logins (other than
  SYS or SYSTEM)</p>
<p>- Oracle does not wait for multiple successive
            OCI  fetches to finish, but will wait
        for all sessions
          (other than those of SYS or SYSTEM) that hold any shared resource (such
            as
          enqueues) to release the resource. After all such operations finish,
            Oracle
        finishes executing the QUIESCE
          RESTRICTED statement.<br>
        <br>
The ALTER SYSTEM UNQUIESCE command puts all running instances back into
normal mode, so that all blocked actions can proceed.</p>
<p><i class="quote">"We actually had the engine running until touchdown. Not that that was intended, necessarily. It was a very gentle touchdown. It was hard to tell when we were on" ~ Neil Armstrong</i><br>
<br>
<b>Related</b></p>
<p><a href="shutdown.html">SHUTDOWN</a><br>
<a href="startup.html">STARTUP</a></p><!-- #BeginLibraryItem "/Library/foot_ora.lbi" --><p>
<!-- oracle-footer -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="4275490898"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="syntax-startup.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

