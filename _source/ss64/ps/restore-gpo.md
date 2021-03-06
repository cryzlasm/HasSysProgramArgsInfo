---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_ps.lbi" --><!-- #EndLibraryItem -->
<h1>Restore-GPO</h1> 
<p>Restore one or all GPOs in a domain from a GPO backup.</p>
<pre>Syntax
      Restore-GPO <b>-All</b> -Path <i>string</i>  [-Domain <i>string</i>]
         [-Server <i>string</i>] [-Confirm] [-WhatIf] [<i>CommonParameters</i>]

      Restore-GPO <b>-BackupId</b> <i>Guid</i> -Path <i>string</i> [-Domain <i>string</i>]
         [-Server <i>string</i>] [-Confirm] [-WhatIf] [<i>CommonParameters</i>]

      Restore-GPO <b>-Guid</b> <i>Guid</i> -Path <i>string</i>  [-Domain <i>string</i>]
         [-Server <i>string</i>] [-Confirm] [-WhatIf] [<i>CommonParameters</i>]

      Restore-GPO [<b>-Name</b>] <i>Name</i> -Path <i>string</i> [-Domain <i>string</i>]
         [-Server <i>string</i>] [-Confirm] [-WhatIf][<i>CommonParameters</i>]

Key
   -All  Restore all GPOs in the domain that have backups in the backup directory.
         Each GPO is restored from its most recent backup in the directory.

   -BackupId <i>Guid</i>
         The backup ID of a GPO backup.
         The backup ID is a globally unique identifier (GUID) that uniquely identifies the backup. 

   -Domain <i>string</i>
         The domain in which you want to restore the GPO, requires a trust relationship if
         not the current domain.

   -Guid <i>Guid</i>
         Specifies the GPO to restore by its globally unique identifier (GUID).

   -Name<i> Name
</i>         Specifies the GPO to restore by its display name. The GPO is restored from its most
         recent backup in the backup directory. To specify an older backup, use -BackupId.

   -Path <i>string</i>
         The path to the backup directory; for example, "C:\Backups" or "\\Server64\Backups".

   -Server <i>string</i>
         The name of the domain controller that should complete the operation.
         Specify either a fully qualified domain name (FQDN) or the host name.
         For example: 
         FQDN:      DomainController1.europe.ss64.com
         Host Name: DomainController1

   -Confirm
       Prompt for confirmation before executing the command.

   -WhatIf
       Describe what would happen if you executed the command without actually executing the command.

   <a href="common.html">CommonParameters</a>:
       -Verbose, -Debug, -ErrorAction, -ErrorVariable, -WarningAction, -WarningVariable,
       -OutBuffer -OutVariable.</pre>
<p>The current/default domain is that of the user that is running the session or, for startup and shutdown scripts, the computer.</p>
<p><b>Examples</b></p>
<p>Restore the GPO named SS64 from the \\Server64\Backups directory. The most recent backup is restored:</p>
<p><span class="code">PS C:\&gt; Restore-GPO -Name "SS64" -Path \\Server64\Backups</span></p>
<p>Restore the GPO with the given GUID from the \\Server64\Backups directory. The most recent backup is restored:</p>
<p class="code">PS C:\&gt; Restore-GPO -GUID fa4a6473-6a2a-4b87-ab78-164e68d94bce -Path \\Server64\Backups</p>
<p>Restore all of the GPOs in the ss64.com domain previously backed up to \\Server64\Backups. Each GPO is restored using its most recent backup.</p>
<p class="code">PS C:\&gt; Restore-GPO -All -Domain ss64.com -Path \\Server64\Backups</p>
<p class="quote"><i>“I have to be alone very often. I'd be quite happy if I spent from Saturday night until Monday morning alone in my apartment. That's how I refuel” ~ </i><i>Audrey Hepburn</i></p>
<p><b>Related:</b></p>
<p><a href="backup-gpo.html">Backup-GPO</a> - Backup group policy objects (GPOs)<br>
<a href="import-gpo.html">Import-GPO</a> - Import Group Policy settings  into a specified GPO from a GPO backup.</p>
<!-- #BeginLibraryItem "/Library/foot_ps.lbi" --><p><script async="" src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
<!-- PowerShell300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="6253539900"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

