---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_nt.lbi" --><!-- #EndLibraryItem --><h1>NTBACKUP (XP/2003)</h1> 
<p>Backup to tape: drives,  folders and  systemstate. <br>
In Vista and above <span class="code">wbadmin</span> and PowerShell have replaced NTBACKUP.</p>
<p>To recover backups on Windows Server 2008/Vista that were created using ntbackup a 'restore-only' version   of NTBACKUP is <a href="http://go.microsoft.com/fwlink/?LinkId=82917">available as a download</a>.</p>
<pre><b>Syntax</b>:

    NTBACKUP backup [systemstate] "<i>@bks file name</i>"
                /J {"<i>job name</i>"} [<i>options</i>] [/SNAP:{on|off}] [/um]

<b>Options</b>:

<i>systemstate</i>
  Back up the System State data. 
  This will also force the backup type to normal or copy.

@<i>bks file name</i>
  The name of the backup selection file (.bks file).
  In WinXP the at (@) character must precede this name.
  A backup selection file contains information on the files and folders 
  to be backed up. 
  You have to create the file using the GUI version of NT Backup.

/J {"job name"}
  The job name to be used in the log file 
  Describe the files and folders and the backup date-time.

/P {"pool name"}
  The media pool from which you want to use media. 
  Usually a subpool of the Backup media pool, such as 4mm DDS.
  If you select this you cannot use /A, /G, /F, or /T

/G {"guid name"}
  Overwrite or append to this tape. 
  Don’t use with a media Pool (/P).

/T {"tape name"}
  Overwrite or append to this tape.
  don’t use with a media Pool (/P).

/A
  Perform an append operation. 
  Either "guid name" (/G) or "tape name" (/T) must be specified with this switch. 
  don’t use with a media Pool (/P).

/N {"media name"}
  The new tape name. don’t use with Append (/A).

/F {"file name"}
  Backup to a file - logical disk path and file name.
  Do not use with the switches: /P /G /T.

/D {"set description"}
  Label for each backup set

/DS {"server name"}
  Back up the directory service file for MS Exchange 5.5 server. 
  This is not needed/does not work with Exchange 2000 since Exchange 2000
  uses Active Directory.

/IS {"server name"}
  Back up the Information Store file for an MS Exchange 5.5 Server.

/V:{yes|no}
  Verify the data after the backup is complete.

/R:{yes|no}
  Restrict access to this tape to the Owner/AdministratorS

/L:{f|s|n}
  The type of log file: f=full, s=summary, n=none

/M {<i>backup type</i>}
  The backup type. One of: normal, copy, differential, incremental, or daily

/RS:{yes|no}
  Backs up the migrated data files located in Remote Storage. 
  The /RS command-line option is not required to back up the local Removable 
  Storage database (that contains the Remote Storage placeholder files). 
  When you backup the %systemroot% folder, Backup automatically backs up the 
  Removable Storage database as well.

/HC:{on|off}
  Use hardware compression, if available, on the tape drive.

/SNAP:{on|off}
  Copy open/locked files, requires XP or 2003,
  creates a temporary snapshot for the <a href="http://en.wikipedia.org./wiki/Shadow_Copy">volume shadow copy</a>.

/um  (Windows 2000 only)
  Find the first available media, format it, and use for the current backup.
  Use with the /p switch to scan for available media pools. 
  This command is only for standalone tape devices (not tape loaders.)
  The /UM switch must be at the end of the command line.</pre>
<p>NTBackup has a reputation for being clumsy and unreliable, <a href="http://www.microsoft.com/en-us/server-cloud/products/system-center-2012-r2/">Microsoft Data Protection Manager</a> is a more robust solution for Windows backup and recovery. Third party and cross platform tools are also available: <a href="http://en.wikipedia.org/wiki/List_of_backup_software">List of backup software</a></p>
<p>NTBackup is not available  in Windows Vista/Windows 7 but utilities to restore old backup files are available (links below)</p>
<p><i class="quote">Mick Jagger  sang backup vocals for "You're so Vain" by Carly Simon</i><br>
<br>
<b>Related:</b></p>
<p><a href="http://www.microsoft.com/downloads/details.aspx?FamilyID=7da725e2-8b69-4c65-afa3-2a53107d54a7&amp;DisplayLang=en">Microsoft utility to restore NT Backups</a> for Windows Vista/Server 2008 <br>
<a href="https://support.microsoft.com/kb/974674">Microsoft utility to restore NT Backups</a> for Windows 7/Server 2008 R2<br>
Wbadmin - back up and restore the OS, volumes, files, folders, and applications.<br>
<a href="http://technet.microsoft.com/library/jj902428.aspx">Windows Server  PowerShell Backup Cmdlets</a><br>
<a href="http://www.backupassist.com/">BackupAssist</a> - 3rd party backup software  for small and medium businesses<br>
<a href="at.html"> </a><a href="https://support.microsoft.com/kb/814583">Q814583</a> /<a href="https://support.microsoft.com/kb/821730">Q821730</a> - NT Backup in Windows Server 2003 <br>
<a href="https://support.microsoft.com/kb/237310">Q237310</a> - Manually Edit Ntbackup.exe Selection Script Files <br>
Equivalent bash command (Linux): <a href="http://www.diffingo.com/oss/fwbackups">fwbackups</a> or <a href="../bash/rsync.html">rsync</a> - Synchronize file trees.</p><!-- #BeginLibraryItem "/Library/foot_nt.lbi" --><p>
<!-- windows300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="7649547908"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="ntbackup.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

