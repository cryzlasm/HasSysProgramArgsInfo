---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_nt.lbi" --><!-- #EndLibraryItem --><h1>XCACLS.exe (NT 4 Resource Kit, Windows XP and 2003  - download from <a href="https://support.microsoft.com/kb/825751">Q825751</a>)</h1>
<p>Display or modify Access Control Lists (ACLs) for files and folders. For Vista and greater use <a href="icacls.html">icacls</a>.</p>
<pre>Syntax
      XCACLS <i>filename</i> [<i>options</i>]

      XCACLS <i>filename</i><br>
Key
   If no <i>options</i> are specified XCACLS will display the ACLs for the file(s)

   <i>options</i> can be any combination of:

   /T       Traverse all subfolders and change all matching files found. 
<br>   /E       Edit ACL instead of replacing it. 

   /x       Edit ACL instead of replacing it; affect only ACEs that this user already owns*

   /R <i>user</i>  Revoke all access rights from the given user.

   /D <i>user</i>  Deny specified user access, this will over-ride
            all other permissions the user has.

   /C       Continue on access denied errors. 
   /Y       Replace user's rights without verify

   /P <i>user</i>:<i>permision</i>[;<i>FolderSpec</i>]
            Replace user's rights. see /G option below

   /G <i>user</i>:<i>permision</i>[;<i>FolderSpec</i>]
           Grant specified user access rights, <i>permision</i> can be: 
           r  Read 
           c  Change (write) 
           f  Full control
           p  Change Permissions (Special access)
           o  Take Ownership (Special access)
           x  EXecute (Special access)
           e  REad (Special access)
           w  Write (Special access)
           d  Delete (Special access)
           t  Used only by <i>FolderSpec</i>. see below

<b>*</b> Option only valid in Windows 2003</pre>
<p><span class="code">FolderSpec</span> is a permission applied to a folder.  
If <span class="code">FolderSpec</span> is not specified then <span class="code">permission</span> will apply to both files and folders. <br>
This allows you to set different permissions that will apply (through inheritance) when new files are added to the folder.<br>
<br>
<span class="code">FolderSpec = ;T@</span> where @ is one of the rights above, when this is specified new files will  inherit <span class="code">FolderSpec</span> instead of <span class="code">permission</span>. At least one folder access right must follow the T For example <span class="code">;TF</span> will apply full control (but <span class="code"> ;FT</span> is not valid)<br>
<br>
Wildcards can be used to specify more that one file in a command. You can specify more than one <i>user</i> in a command. You can combine access rights.</p>
<p>Although taking ownership is listed as an option it does not work, use <a href="subinacl.html">SUBINACL</a> for this.</p>
<p><b>Inheritance Errors</b></p>
<p> "<i>Permissions incorrectly ordered</i>"  - the quickest way to resolve or avoid these  errors is to use the newer <a href="icacls.html">iCACLS</a> command instead of XCACLS.</p>
<p>Inherited folder permissions are displayed as:</p>
<pre> OI - Object inherit    - This folder and files. (no inheritance to subfolders)
 CI - Container inherit - This folder and subfolders.
 IO - Inherit only      - The ACE does not apply to the current file/directory

These can be combined as folllows:
 (OI)(CI)      This folder, subfolders, and files.
 (OI)(CI)(IO)  Subfolders and files only.
     (CI)(IO)  Subfolders only.
 (OI)    (IO)  Files only. </pre>
<p>So BUILTIN\Administrators:(OI)(CI)F means that both files and Subdirectories will inherit 'F' (Fullcontrol) <br>
similarly (CI)R means Directories will inherit 'R' (Read folders only = List permission)</p>
<p>When xcacls is applied to the current folder only there is no inheritance and so no output.</p>
<p><b>Versions:</b><br>
NTFS standards have changed with different versions of Windows and XCACLS has been updated to suit, early versions  of Xcacls can give unpredictable results against an NTFS v5 partition.</p>
<p>  xcacls<b>.vbs</b> is described in <a href="http://support.microsoft.com/?id=825751">Q825751</a> and can be <a href="http://www.microsoft.com/downloads/details.aspx?FamilyID=0ad33a24-0616-473c-b103-c35bc2820bda&amp;DisplayLang=en">downloaded here</a> -
xcacls.vbs is an unsupported utility released in 2004 that addresses a limitation with the original xcacls.exe, specifically the inability to append permissions to a folder whose child objects have the inheritance flag set. The .vbs version does not suppport unc paths and is very slow to update multiple ACLs.<br>
xcacls.vbs includes a version check function <span class="code">"IsOsSupported()"</span>  and so will not run under Windows 2008.</p>
<p><b>Examples:</b><br>
<br>
Allow <i>guests</i> the right to read and execute in MyFolder<br>
<span class="code">XCACLS MyFolder /E /G guests:rx</span><br>
<br>
Allow <i>guests</i> the Full Control permission in MyFolder and all subfolders<br>
<span class="code">XCACLS MyFolder /T /E /G  guests:f</span><br>
<br>
Grant <i>guests</i> only read access to all files in and below MyFolder, <br>
new folders created will be Read Access only, new files will not inherit any rights.<br>
<span class="code">XCACLS MyFolder /T /P guests:R;Tr </span><br>
<br>
Grant <i>guests</i> only execute access to all files in and below MyFolder<br>
<span class="code">XCACLS MyFolder /T /P guests:x </span></p>
<p><i class="quote">“I spent most of the eighties, most of my life, riding around in somebody else's car, in possession of, or ingested of, something illegal, on my way from something illegal to something illegal with many illegal things happening all around me” - Iggy Pop </i> <br>
<br>
<b>Related:</b></p>
<p><a href="attrib.html">ATTRIB</a> - Display or change file attributes<br>
<a href="cacls.html">CACLS</a> - Change file and folder permissions (ACLs)<br>
<a href="icacls.html">iCACLS</a> - Change file and folder permissions (ACLs) <br>
<a href="subinacl.html">SUBINACL</a> - Edit file and folder Permissions, Ownership and/or Domain<br>
<a href="dir.html">DIR /Q</a> - Display the owner for a list of files (try it for Program files) <br>
<a href="http://technet.microsoft.com/en-US/sysinternals/bb897332.aspx">AccessEnum</a> - SysInternals utility to browse a tree view of user privileges.<br>
<a href="ntrights.html">NTRIGHTS</a> - Edit user account rights      <br>
<a href="perms.html">PERMS</a> - Show permissions for a user<br>
 SHOWACCS - Show ACLs on the registry, file system, file and print shares <br>
<a href="subinacl.html">SUBINACL</a> - Change an ACL's user/domain<br>
<a href="takeown.html">TAKEOWN</a> - Take ownership of files<br>
<a href="syntax-permissions.html">Permissions &amp; Local/Global Workgroups </a>  <br>
<a href="http://go.microsoft.com/fwlink/?LinkId=48679">Permissions explained</a> - Microsoft.com<br>
<a href="http://www.microsoft.com/downloads/details.aspx?FamilyID=04A563D9-78D9-4342-A485-B030AC442084&amp;displaylang=en">Access-based Enumeration</a> - Set file listing to only display files you can read (Win 2003)<br>
<a href="https://support.microsoft.com/kb/318754">Q318754</a> - How to use Xcacls (includes download) <br>
<a href="https://support.microsoft.com/kb/245031">Q245031</a> - Change Registry Permissions from the command line <br>
<a href="https://support.microsoft.com/kb/822790">Q822790</a> - Xcacls /E - Objects do not inherit permissions as expected.<br>
<a href="https://helgeklein.com/setacl/">SetAcl</a> - ACL util<br>
Powershell: <a href="../ps/set-acl.html">Set-Acl</a> - Set permissions<br>
Equivalent bash command (Linux):<a href="../bash/chmod.html">chmod</a> - Change access permissions,  <a href="../bash/chown.html">chown</a> - Change file owner and group</p><!-- #BeginLibraryItem "/Library/foot_nt.lbi" --><p>
<!-- windows300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="7649547908"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="xcacls.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

