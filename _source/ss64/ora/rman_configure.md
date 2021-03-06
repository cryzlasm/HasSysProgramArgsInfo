---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_ora.lbi" --><!-- #EndLibraryItem --><h1><a href="rman.html">RMAN</a> <code>Configure Clause</code></h1> 
<p>Change persistent RMAN configuration settings.<br>
  <br>
  Syntax:</p>
<pre>&nbsp;  CONFIGURE <a href="#deviceConf">deviceConf</a>;

&nbsp;  CONFIGURE <a href="#backupConf">backupConf</a>;

&nbsp;  CONFIGURE AUXNAME FOR DATAFILE <a href="rman_datafile.html">datafileSpec</a> { TO '<i>filename</i>' | CLEAR };

&nbsp;  CONFIGURE SNAPSHOT CONTROLFILE NAME { TO '<i>filename</i>' | CLEAR };

&nbsp;  CONFIGURE <a href="#cfauConf">cfauConf</a>;

deviceConf<a id="deviceConf"></a>::=
   { DEFAULT DEVICE TYPE { TO <a href="rman_devicespecifier.html">deviceSpecifier</a> | CLEAR }
   | DEVICE TYPE <a href="rman_devicespecifier.html">deviceSpecifier</a> { PARALLELISM <i>integer</i> | CLEAR }
   | [AUXILIARY] CHANNEL [<i>integer</i>] DEVICE TYPE <a href="rman_devicespecifier.html">deviceSpecifier</a>
     { <a href="#allocOperandList">allocOperandList</a> | CLEAR }
   }

allocOperandList<a id="allocOperandList"></a>::=
   { PARMS [=] '<i>channel_parms</i>' 
   | FORMAT [=] '<i><a href="rman_format_string.html">format_string</a></i>' [, '<i><a href="rman_format_string.html">format_string</a></i>']…
   | { MAXPIECESIZE [=] <i>integer</i> | RATE [=] <i>integer</i> } [ K | M | G ] 
   .
   .
   .
   }…
connectStringSpec<a id="connectStringSpec"></a>::=
   ['] [<i>userid</i>] [/ [<i>password</i>]] [@<i>net_service_name</i>] [']

<a id="backupConf"></a>backupConf::=
   { RETENTION POLICY { TO { RECOVERY WINDOW OF <i>integer</i> DAYS
                             | REDUNDANCY [=] <i>integer</i>
                             | NONE
                            }
                         | CLEAR
                      }
    | MAXSETSIZE { TO { <i>integer</i> [ K | M | G ]
                       | UNLIMITED
                      }
                  | CLEAR
                 }
    | { ARCHIVELOG | DATAFILE }
   BACKUP COPIES FOR DEVICE TYPE <a href="rman_devicespecifier.html">deviceSpecifier</a>
   { TO <i>integer</i> | CLEAR }
    | BACKUP OPTIMIZATION { ON | OFF | CLEAR }
    | EXCLUDE FOR TABLESPACE <i>tablespace_name</i> [CLEAR]
   }

cfauConf<a id="cfauConf"></a>::==
   CONTROLFILE AUTOBACKUP
   { ON
   | OFF
   | CLEAR
   | FORMAT FOR DEVICE TYPE <a href="rman_devicespecifier.html">deviceSpecifier</a> { TO '<i><a href="rman_format_string.html">format string</a></i>' | CLEAR }
   }</pre>
<p><b>Examples</b></p>
<p>Show all configurable settings:</p>
<pre>  RMAN&gt; SHOW ALL;</pre>
<p>Write disk backups to
  the <code>/tmp</code> directory:<br>
  (%U will be replaced with unique
filenames)</p>
<pre>  RMAN&gt; CONFIGURE CHANNEL DEVICE TYPE DISK FORMAT '/tmp/%U';</pre>
<p>Backup using a flash recovery area rather than disk</p>
<pre>  RMAN&gt; CONFIGURE CHANNEL DEVICE TYPE DISK FORMAT CLEAR;</pre>
<p>Configure RMAN to back up the control file after each backup
</p>
<pre>   RMAN&gt; CONFIGURE CONTROLFILE AUTOBACKUP ON; </pre>
<p>By default, RMAN automatically names control file backups and
  stores them in the flash recovery area. <br>
  To configure RMAN
  to write control file backups to the <code>/cfilebackups</code> directory:<br>
  (
  %F will generate a unique filename)</p>
<pre>RMAN&gt; CONFIGURE CONTROLFILE AUTOBACKUP FORMAT 
         FOR DEVICE TYPE DISK TO '/cfilebackups/cf%F';</pre>

<p>Ensure that RMAN retains all backups needed to recover the
  database
to any point in time in the last 7 days:</p>
<pre>  RMAN&gt; CONFIGURE RETENTION POLICY TO RECOVERY WINDOW OF 7 DAYS;</pre>
<p>Retain three backups of each datafile:</p>
<pre>  RMAN&gt; CONFIGURE RETENTION POLICY TO REDUNDANCY 3;</pre>

<p>Delete
backups no longer required by the retention policy: </p>
<pre>  RMAN&gt; DELETE OBSOLETE</pre>
<p>  To override the configured retention policy for individual backups
- use <code>BACKUP.. KEEP</code> (or <code>CHANGE.. KEEP)</code></p>
<p>Configure  backups to run in parallel by assigning two <code>sbt</code> channels:</p>
<pre>  RMAN&gt; CONFIGURE DEVICE TYPE sbt PARALLELISM 2;</pre>
<p>Reset any <code>CONFIGURE</code> setting to its default by running the command
  with the <code>CLEAR</code> option</p>
<pre>  RMAN&gt; CONFIGURE CHANNEL DEVICE TYPE sbt CLEAR; 
  RMAN&gt; CONFIGURE RETENTION POLICY CLEAR;</pre>
<p>Unique filenames are:<br> 
  DBID, day, month, year, and sequence
      number.</p>
<p><i>"The desire for safety stands against every great and noble enterprise"
- Cornelius Tacitus </i><b><br>
            <br>
        Related Commands:<br>
        <br>
            </b> <a href="rman_backup.html">BACKUP</a> - Back up database files, archive
        logs, backups, or copies. <a href="rman_change.html"><br>
        </a><a href="rman_crosscheck.html">
      CROSSCHECK</a> - Check whether backup items still exist. <a href="rman_delete.html"><br>
      </a><a href="rman_recover.html">
      RECOVER</a> - Perform media recovery from RMAN backups and copies. <a href="rman_report.html"><br>
      </a><a href="rman_restore.html">
      RESTORE</a> - Restore RMAN backups and copies. <a href="rman_run.html"><br>
      RUN</a> - Some RMAN commands are only valid inside a RUN block. <a href="rman_set.html"><br>
      SET</a> - Settings for the current RMAN session. <a href="rman_show.html"><br>
SHOW</a> - Display the current configuration</p>
<p><b>Related Views:</b></p>
<pre>RMAN persistent configuration settings:
   RC_RMAN_CONFIGURATION   V$RMAN_CONFIGURATION </pre><!-- #BeginLibraryItem "/Library/foot_ora.lbi" --><p><script async="" src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
<!-- oracle-footer -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="4275490898"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

