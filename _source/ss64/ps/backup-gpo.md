---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_ps.lbi" --><!-- #EndLibraryItem --><h1>Backup-GPO</h1> 
<p>Backup individual group policy objects (GPOs) or all the GPOs in a domain.</p>
<pre>Syntax
      Backup-GPO [-Name] <i>string</i> -Path <i>string</i>
         [-Comment <i>string</i>] [-Domain <i>string</i>] [-Server <i>string</i>] [<i>CommonParameters</i>]

      Backup-GPO <b>-All</b> -Path <i>string
        </i> [-Comment <i>string</i>] [-Domain <i>string</i>] [-Server <i>string</i>] [<i>CommonParameters</i>]

      Backup-GPO <b>-Guid</b> &lt;Guid&gt; -Path <i>string</i>
         [-Comment <i>string</i>] [-Domain <i>string</i>] [-Server <i>string</i>] [<i>CommonParameters</i>]

Key
   -All  Backup all GPOs in the domain.

   -Comment <i>string</i> 
         Include a comment for the backed-up GPO.

   -Domain string
         The domain containing the GPOs to backup, requires a trust relationship if not the current domain.

   -Guid <i>Guid</i>
         Specify the GPO to backup by its globally unique identifier (GUID).

   -Name <i>string
</i>         Specify the display name of the GPO to backup.

   -Path <i>string</i>
         The path to the backup directory; for example, "C:\Backups" or "\\Server64\Backups".

   -Server <i>string</i>
         The name of the domain controller that should complete the operation.
         Specify either a fully qualified domain name (FQDN) or the host name.
         For example: 
         FQDN:      DomainController1.europe.ss64.com
         Host Name: DomainController1

   <a href="common.html">CommonParameters</a>:
       -Verbose, -Debug, -ErrorAction, -ErrorVariable, -WarningAction, -WarningVariable,
       -OutBuffer -OutVariable.</pre>
<p>The current/default domain is that of the user that is running the session or, for startup and shutdown scripts, the computer.</p>
<p><b>Examples</b></p>
<p>Back up the "SS64" GPO to the C:\GpoBackups directory:</p>
<p><span class="code">PS C:\&gt; Backup-Gpo -Name SS64 -Path C:\GpoBackups -Comment "Weekly Backup"</span></p>
<p>Back up the GPO with the specified GUID:</p>
<p class="code">PS C:\&gt; Backup-Gpo -GUID 3a4a6473-6b2a-4c84-ab78-175e68d64bdf -Domain ss64.com -Server DC1 -Path \\Server64\GpoBackups</p>
<p>Back up all the GPOs in the current domain to \\Server64\GpoBackups:</p>
<p class="code">PS C:\&gt; Backup-Gpo -All -Path \\Server64\GpoBackups</p>
<p class="quote"><i>“I have a very strict gun control policy: if there's a gun around, I want to be in control of it” ~ </i><i>Clint Eastwood</i></p>
<p><b>Related:</b></p>
<p><a href="restore-gpo.html">Restore-GPO</a> - Restore one or all GPOs  from a GPO backup.<br>
<a href="import-gpo.html">Import-GPO</a> - Import Group Policy settings  into a specified GPO from a GPO backup.<br>
Copy-CPO - Copy a Group Policy Object.
</p><!-- #BeginLibraryItem "/Library/foot_ps.lbi" --><p><script async="" src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
<!-- PowerShell300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="6253539900"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

