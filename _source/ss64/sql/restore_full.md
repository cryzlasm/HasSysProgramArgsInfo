---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_sql.lbi" --><!-- #EndLibraryItem --><h1>RESTORE Database </h1>
<p>Complete Database Restore - an entire database from a full  backup.</p>
<pre>Syntax
      RESTORE DATABASE {<b><i>database</i></b> | @<i>database_var</i>} 
         [FROM <i>backup_device</i> [ ,...<i>n</i> ] ]
            [WITH <i>option</i> [,<i>option</i>...]] 
               [;]

   Options:
      {CHECKSUM | NO_CHECKSUM } 
      {CONTINUE_AFTER_ERROR | <u>STOP_ON_ERROR</u> } 
      ENABLE_BROKER
      ERROR_BROKER_CONVERSATIONS 
      FILE = { <i>backup_set_file_number</i> | @<i>backup_set_file_number</i> } 
      KEEP_REPLICATION 
      MEDIANAME = { <i>media</i> | @<i>media_variable</i> } 
      MEDIAPASSWORD = { <i>mediapassword</i> | @<i>mediapw_variable</i> } 
      MOVE '<i>logical_file_name_in_backup</i>' TO '<i>operating_system_file_name</i>'   [ ,...<i>n</i> ] 
      NEW_BROKER 
      PASSWORD = { <i>password</i> | @<i>password_variable</i> } ] 
      {<u>RECOVERY</u> | NORECOVERY | STANDBY = 
          {<i>standby_file_name</i> | @<i>standby_file_name_var</i> }  } 
      REPLACE 
      RESTART 
      RESTRICTED_USER 
      {<u>REWIND</u> | NOREWIND } 
      {<u>UNLOAD</u> | NOUNLOAD } 
      STATS [ = percentage ] 
      { STOPAT = { <i>date_time</i> | @<i>date_time_var</i> } 
       | STOPATMARK = { '<i>mark</i>' | '<i>lsn:lsn_number</i>' }  [ AFTER <i>datetime</i> ] 
       | STOPBEFOREMARK = { '<i>mark</i>' | '<i>lsn:lsn_number</i>' }  [ AFTER <i>datetime</i> ] 
      } 

   backup_device:
      <i>logical_backup_device</i>
      @<i>logical_backup_device_var</i>
      {DISK | TAPE } = '<i>physical_backup_device</i>'
      {DISK | TAPE } = @<i>physical_backup_device_var</i></pre>
<p>  Key:<br>
  DATABASE - The target database.<br> 
  FROM
<i>backup_device</i> - The backup device from which to restore.<br>
CHECKSUM - verify all backup checksums (or fail)<br>
NO_CHECKSUM - Disable  validation of checksums<br>
ENABLE_BROKER - Start Service Broker  so that messages may be sent  ( default = disabled  during a restore)<br>
ERROR_BROKER_CONVERSATIONS - End all conversations, disable broker until  operation is complete.<br>
FILE  - The backup set to be restored.<br>
KEEP_REPLICATION - Retain replication settings for log shipping. Recover a warm standby.<br>
LOADHISTORY -  Load  information about the restore operation into the msdb history tables.<br>
MEDIANAME - Specify the name for the media, check for a matching media name on the backup volume.<br>
MOVE - The data or log file (logical name) should be moved by restoring it to the file location specified.<br>
NEW_BROKER - Create a new <i>service_broker_guid </i>value in both sys.databases and the restored database.<br>
RECOVERY- After the restore, roll back any uncommitted transactions.<br>
NORECOVERY- Do not roll back any uncommitted transactions. Use if applying  another tx log later.<br>
STANDBY - Specify a standby (undo) file that allows the recovery to be undone, for  offline restore only.<br>
REPLACE - Overwrite  any existing database with the same name.<br>
RESTART - Restart a restore operation that has been interrupted.<br>
RESTRICTED_USER - Restrict access to the newly restored db to the db_owner, dbcreator, or sysadmin roles.<br>
UNLOAD - Automatically rewind and unload the backup tape when the backup is finished.<br>
STATS - Display a message each time <i>n</i> percentage completes.<br>
STOPATMARK - Recover to a marked transaction or log sequence number<br>
STOPBEFOREMARK - Recover to a marked transaction or log sequence number</p>
<p>Examples</p>
<p>Restore one database onto another, replacing everything:</p>
<pre>use master
BACKUP DATABASE Sales TO DISK='d:\backups\sales.bak' with init
RESTORE DATABASE SalesTrain FROM DISK='d:\backups\sales.bak' WITH REPLACE
</pre>
<p>Restore one database from another:</p>
<pre>RESTORE DATABASE ss64<br>   FROM ss64_1
GO</pre>
<p>Restore file list:</p>
<pre>RESTORE FILELISTONLY <br>   FROM DISK = 'C:\db_backup_file.bak'
GO</pre>
<p>Restore one database from another and specify a new location for the data files:</p>
<pre>RESTORE DATABASE NewDB <br>   FROM DISK = 'C:\ss64db_backup.bak'<br>   WITH MOVE 'SS64_Data' TO 'C:\Newdb.mdf',<br>   MOVE 'SS64_Log' TO 'C:\Newdb.ldf'<br>GO</pre>
<p>In SQL Server 2005 DTS was replaced with SSIS,  it is often much quicker and easier
to just backup and restore than to write, publish and execute a simple SSIS package that does the same thing. </p>
<p class="quote"><i>"We don't want to go back to tomorrow, we want to go.. forward" - Dan Quale</i></p>
<p><b>Related commands:</b></p>
<p>   <a href="restore_partial.html">Partial Restore</a> - part of database/point in time <a href="restore_files.html"><br>
  Restore Files</a> - Files, Filegroups, or Pages <a href="restore_logs.html"><br>
LOG Restore</a> - a Transaction Log<br>
RESTORE FILELISTONLY - List  database and log files<br>
<a href="restore_snap.html">RESTORE DATABASE_SNAPSHOT</a> <br>
  RESTORE VERIFYONLY  - Verify the backup but don't restore it<br>
  <a href="backup.html">BACKUP</a>  <br>
Equivalent Oracle command:  <a href="../ora/rman.html">RMAN</a> - Recovery Manager</p><!-- #BeginLibraryItem "/Library/foot_sql.lbi" --><p>
<!-- ss64-sql -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="6953563613"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="restore_full.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

