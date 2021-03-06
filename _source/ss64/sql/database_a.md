---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_sql.lbi" --><!-- #EndLibraryItem --><h1> ALTER DATABASE </h1>
<p>Modify a database, or the database files and filegroups. </p>
<pre>Syntax
     ALTER DATABASE <i>database</i>
        ADD FILE <i>filespec</i> [ ,...<i>n</i> ] 
           [TO FILEGROUP {<i>filegroup</i> | DEFAULT} ] [;]
        
     ALTER DATABASE <i>database</i>
        ADD LOG FILE <i>filespec</i> [ ,...n ] [;]

     ALTER DATABASE <i>database</i>
        REMOVE FILE <i>logical_file_name</i>  [;]

     ALTER DATABASE <i>database</i>
        MODIFY FILE <i>filespec</i> [;]

     ALTER DATABASE <i>database</i>
        ADD FILEGROUP <i>filegroup</i> [;]

     ALTER DATABASE database
        REMOVE FILEGROUP <i>filegroup</i> [;]

     ALTER DATABASE <i>database</i>
        MODIFY FILEGROUP <i>filegroup</i> [;]
           { <i>filegroup_updatability_option</i> 
           | DEFAULT
           | NAME = <i>new_filegroup</i> 
           } [;]

     ALTER DATABASE <i>database</i>
        SET <i>optionspec</i> [ ,...n ] [ WITH <i>termination</i> ]  [;]

     ALTER DATABASE <i>database</i>
        MODIFY NAME = <i>new_database_name</i> [;]

     ALTER DATABASE <i>database</i>
        COLLATE <i>collation</i> [;]


filespec: 
(
  NAME = <i>logical_file_name</i>  
     [ , NEWNAME = <i>new_logical_name</i> ] 
        [ , FILENAME = '<i>os_file_name</i>' ] 
           [ , SIZE = size [ KB | MB | GB | TB ] ] 
              [ , MAXSIZE = { max_size [ KB | MB | GB | TB ] | UNLIMITED } ] 
                 [ , FILEGROWTH = <i>growth_increment</i> [ KB | MB | GB | TB| % ] ] 
                    [ , OFFLINE ]
) 

filegroup_updatability_option:
   READ_ONLY
   READ_WRITE

optionspec: 
   ONLINE
   OFFLINE
   EMERGENCY

   SINGLE_USER
   RESTRICTED_USER
   MULTI_USER

   READ_ONLY
   READ_WRITE

   DB_CHAINING {ON | OFF}
   TRUSTWORTHY {ON | OFF}

   CURSOR_CLOSE_ON_COMMIT {ON | OFF}
   CURSOR_DEFAULT {LOCAL | GLOBAL}

   AUTO_CLOSE {ON | OFF} 
   AUTO_CREATE_STATISTICS {ON | OFF} 
   AUTO_SHRINK {ON | OFF} 
   AUTO_UPDATE_STATISTICS {ON | OFF} 
   AUTO_UPDATE_STATISTICS_ASYNC {ON | OFF}

   ANSI_NULL_DEFAULT {ON | OFF} 
   ANSI_NULLS {ON | OFF}
   ANSI_PADDING {ON | OFF} 
   ANSI_WARNINGS {ON | OFF}
 
   ARITHABORT {ON | OFF}
   CONCAT_NULL_YIELDS_NULL {ON | OFF} 
   NUMERIC_ROUNDABORT {ON | OFF}
   QUOTED_IDENTIFIER {ON | OFF} 
   RECURSIVE_TRIGGERS {ON | OFF} 

   RECOVERY {FULL | BULK_LOGGED | SIMPLE} 
   TORN_PAGE_DETECTION {ON | OFF}
   PAGE_VERIFY {<u>CHECKSUM</u> | TORN_PAGE_DETECTION | NONE}
 
   PARTNER = '<i>partner_server</i>' 
   PARTNER FAILOVER 
   PARTNER FORCE_SERVICE_ALLOW_DATA_LOSS
   PARTNER OFF
   PARTNER RESUME 
   PARTNER SAFETY {<u>FULL</u> | OFF}
   PARTNER SUSPEND 
   PARTNER TIMEOUT <i>integer</i>
   WITNESS = '<i>witness_server</i>' 
   WITNESS OFF

   DATE_CORRELATION_OPTIMIZATION {ON | OFF}

   PARAMETERIZATION {SIMPLE | FORCED}

   ENABLE_BROKER
   DISABLE_BROKER
   NEW_BROKER
   ERROR_BROKER_CONVERSATIONS

   ALLOW_SNAPSHOT_ISOLATION {<u>ON</u> | OFF}
   READ_COMMITTED_SNAPSHOT {ON | OFF}

termination: 
   ROLLBACK AFTER <i>integer</i> [SECONDS] 
   ROLLBACK IMMEDIATE 
   NO_WAIT

Key:
   MODIFY FILE Modify file location or properties, Only one &lt;filespec&gt; property
               can be changed at a time.

   FILEGROWTH  Add new space in increments of <i>x</i>, MB, <u>KB</u>, GB, TB, or percent (%)
               A value of 0 will set automatic growth to off.

   filespec OFFLINE    Set the file offline, make all objects in the filegroup inaccessible.
                       To set the file back online restore the file from a backup.

   optionspec OFFLINE  Close the database, clean shut down.

   EMERGENCY   Mark the database as READ_ONLY, disable logging, and restrict access
               to members of the sysadmin fixed server role.

   DB_CHAINING Database can be accessed by external resources (objects from another database)

   AUTO_CLOSE  Cleanly shut down the database when no users are connected, 
               this will free up its resources. Database mirroring requires AUTO_CLOSE OFF.

   AUTO_SHRINK he database files are candidates for periodic shrinking.

</pre>
<p><b>Examples</b></p>
<pre>-- Rename a database
USE master;<br>GO
ALTER DATABASE MyDatabase
  MODIFY NAME = SalesDatabase;
GO

-- Move a file
USE master;<br>GO
ALTER DATABASE MyDatabase
  MODIFY FILE ( NAME = MyData1, FILENAME = 'c:\demo\data_01.mdf' );
GO

-- Drop a file
USE master;<br>GO
ALTER DATABASE MyDatabase<br>  REMOVE FILE MyData1;

-- Add a filegroup and 2 datafiles 
USE master;<br>GO

ALTER DATABASE SS64<br>  ADD FILEGROUP SS64FG1;

ALTER DATABASE SS64<br>ADD FILE<br>( NAME = SS64_dat2,<br>    FILENAME = 'E:\DATA\ss64database\SS64_data2.mdf',<br>    SIZE = 100MB,<br>    MAXSIZE = 150MB,<br>    FILEGROWTH = 25MB ),<br>( NAME = SS64_dat3,<br>    FILENAME = 'E:\DATA\ss64database\SS64_data3.mdf',<br>    SIZE = 100MB,<br>    MAXSIZE = 150MB,<br>    FILEGROWTH = 25MB )<br>)
TO FILEGROUP SS64FG1;<br>GO

-- Gain exclusive access, rollback all incomplete transactions. 
USE master;<br>GO
<br>ALTER DATABASE SS64<br> SET SINGLE_USER<br>  WITH ROLLBACK IMMEDIATE;<br>GO
</pre>
<p class="quote"><i>"All conservatism is based upon the idea that if you leave things 
alone you leave them as they are. But you do not. If you leave a
thing alone you leave it to a torrent of change" ~ G.K. Chesterton</i></p>
<p><b>Related commands:</b><br>
  <br>
  <a href="database_c.html">CREATE DATABASE </a><br>
  <a href="database_d.html">DROP DATABASE </a><br>
  sys.databases  <br>
  <br>
  <b>Equivalent Oracle command</b>:<a href="../bash/export.html"><br>
  <br>
  </a><a href="../ora/database_a.html">ALTER DATABASE </a></p><!-- #BeginLibraryItem "/Library/foot_sql.lbi" --><p>
<!-- ss64-sql -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="6953563613"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="database_a.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

