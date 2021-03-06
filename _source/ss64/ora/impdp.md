---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_ora.lbi" --><!-- #EndLibraryItem --><h1>IMPDP</h1> 
<p>Import data with Oracle Data Pump. <br>
  <br>
  Syntax:</p>
<pre>   IMPDP <i>username</i>/<i>password</i>@<i>connect_string</i> [AS SYSDBA] <b><abbr title="Attach to existing job">ATTACH</abbr></b> [=[<i>schema_name</i>.]<i>job_name</i>]

   IMPDP <i>username</i>/<i>password</i>@<i>connect_string</i> [AS SYSDBA] <b><abbr title="Import entire database">FULL</abbr></b>=Y <i>options</i>

   IMPDP <i>username</i>/<i>password</i>@<i>connect_string</i> [AS SYSDBA] <b><abbr title="List of schemas to import">SCHEMAS</abbr></b>=<i>schema_name
     </i> [,<i>schema_name2</i>...] <i>options</i>

   IMPDP <i>username</i>/<i>password</i>@<i>connect_string</i> [AS SYSDBA] <b><abbr title="A list of tables to import - Wildcards are supported: TABLES=emp%">TABLES</abbr></b>=[<i>schema_name</i>.]<i>table_name</i> [:<i>partition_name</i>]
      [,<i>table_name2</i>...] <i>options</i>

   IMPDP <i>username</i>/<i>password</i>@<i>connect_string</i> [AS SYSDBA] <b><abbr title="A list of tablespaces to import">TABLESPACES</abbr></b>=<i>tablespace_name</i>
      [,<i>tablespace_name2</i>...] <i>options</i>

   IMPDP <i>username</i>/<i>password</i>@<i>connect_string</i> [AS SYSDBA] <b><abbr title="The datafiles must first be copied over to the target system">TRANSPORT_DATAFILES</abbr></b>=<i>datafile_name</i>
      [,<i>datafile_name2</i>...] <i>options</i>

   IMPDP help=Y

Options

  CONTENT={ ALL | DATA_ONLY | METADATA_ONLY }
  <b>DIRECTORY</b>=<i>directory_object</i>
  DUMP<b>FILE</b>=[<i>directory_object</i>:]<i>file_name</i> [,[<i>directory_object</i>:]<i>file_name...</i>]
  ESTIMATE={ BLOCKS | STATISTICS}
  ENCRYPTION_PASSWORD=<i>password</i>
  EXCLUDE = <i>object_type</i> [:<i>name_clause</i>] [, EXCLUDE...]
  FLASHBACK_SCN=<i>scn_value</i>
  FLASHBACK_TIME=<i>timestamp</i>
  INCLUDE = <i>object_type</i> [:<i>name_clause</i>] [, INCLUDE...]
  JOB_NAME=<i>jobname_string</i>
  LOG<b>FILE</b>=[<i>directory_object</i>:]<i>file_name</i>
  NETWORK_LINK=<i>database_link</i>
  NOLOG<b>FILE</b>={Y|N}
  PARALLEL=<i>int</i>
  PAR<b>FILE</b>=[<i>directory_path</i>]<i>file_name</i>        The name of an import parameter file.
  QUERY=[<i>schema_name</i>.][<i>table_name</i>:]<i>query_clause</i>
  REUSE_DATAFILES={Y|N}
  REMAP_DATAFILE=<i>source_datafile</i>:<i>target_datafile</i>
  REMAP_SCHEMA=<i>source_schema</i>:<i>target_schema</i>
  REMAP_TABLESPACE=<i>source_tablespace</i>:<i>target_tablespace</i>
  SKIP_UNUSABLE_INDEXES={Y|N}
  SQL<b>FILE</b>=[<i>directory_object:</i>]<i>file_name</i>
  STREAMS_CONFIGURATION={Y|N}
  STATUS [=<i>int</i>]
  TABLE_EXISTS_ACTION={SKIP | APPEND | TRUNCATE | REPLACE }
  TRANSFORM={ SEGMENT_ATTRIBUTES | STORAGE | OID | PCTSPACE}:<i>value</i>[:<i>object_type</i>]
  TRANSPORT_TABLESPACES = <i>tblspace_name</i> [,<i>tblspace_name</i>...] [TRANSPORT_FULL_CHECK ={Y|N}]
  USERID=<i>username</i>   The username performing the import, don't confuse with SCHEMAS=<i>schema_name</i>.
  VERSION={COMPATIBLE | LATEST | <i>version_string</i>}
</pre>
<p> Options can be supplied as part of the IMPDP command line or within an import parameter file.<br>
On the command line, the Username (or USERID) must be the first parameter.<br>
</p>
<pre>Interactive mode options:
  CONTINUE_CLIENT     Return to logging mode. Job will be re-started if idle.
  EXIT_CLIENT         Quit client session and leave job running.
  HELP                Summarize interactive commands.
  KILL_JOB            Detach and delete job.
  PARALLEL            Change the number of active workers for current job.
                      PARALLEL=.
  START_JOB           Start/resume current job.
  STATUS              Frequency (secs) job status is to be monitored where
                      the default (0) will show new status when available.
                      STATUS=<i>integer</i>
  STOP_JOB            Orderly shutdown of job execution and exits the client.
                      STOP_JOB=IMMEDIATE performs an immediate shutdown of the
                      Data Pump job.</pre>
<p>IMPDP is a server side utility for loading an export dump file set into a target system.</p>
<p>A dump file set is made up of one or more disk files that contain table data, database object metadata, and control information.  IMPDP can also be used to load a target database directly from a source  database with no intervening dump files. This allows export and import  operations to run concurrently, minimizing total elapsed time. This is  known as a network import.</p>
<p><b>Examples</b></p>
<p>Full import:</p>
<pre>IMPDP system/password@sid full=Y directory=export_dir dumpfile=ss64.dmp logfile=impSS64.log
</pre>
<p>Import a single schema:</p>
<pre class="code">IMPDB system/password@sid <b>schemas</b>=SCOTT directory=export_dir dumpfile=ss64.dmp logfile=impSS64.log
</pre>
<p>Import selected tables:</p>
<pre class="code">IMPDB system/password@sid <b>tables</b>=EMP,DEPT directory=export_dir dumpfile=ss64.dmp logfile=ImpSS64.log
</pre>
<p><i class="quote">"It's part of a trilogy, a musical trilogy that I'm doing in D minor  which I always find is really the saddest of all keys really, I don't know why but it makes people weep instantly..." ~ <a href="http://www.youtube.com/watch?v=NgViOqGJEvM">Spinal Tap</a></i><b><br>  
<br>
Related:</b>
</p><p><a href="expdp.html">expdp</a> - Export data with Oracle Data Pump.
<!-- #BeginLibraryItem "/Library/foot_ora.lbi" --></p><p>
<!-- oracle-footer -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="4275490898"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="impdp.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem --><p></p>

