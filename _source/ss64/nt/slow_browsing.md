---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_nt.lbi" --><!-- #EndLibraryItem --><h1>Slow network browsing issues in Windows</h1> 
<h2>1) Listing the contents of a shared folder is slow - Desktop.ini</h2>
<p>The file permissions set on   <span class="code">desktop.ini</span> files can slow down browsing the folder structure. This issue affects Windows clients using mapped drives or UNC connections, this issue was  fixed in XP sp2 (<a href="https://support.microsoft.com/kb/840309">Q840309</a>), but from <a href="https://support.microsoft.com/kb/326549">Q326549</a> has re-emerged in Windows 7.</p>
<p>When listing a directory, Windows  will search for and parse Desktop.ini files. This will noticably affect performance when a large number of subfolders are involved, it does this for the current folder and one level down the directory tree.</p>
<p>Desktop.ini can be used to provide a custom icon, thumbnail view, and can make normal file folders into 'Special Folders' (eg Fonts, History, Temporary Internet Files, "My Music", "My Pictures", and "My Documents"). </p>
<p>Desktop.ini files are only visible in Windows Explorer if you first un-check "Hide protected operating system files" (under Tools, Options, View)</p>
<p>To see the file locks created by this process run the following command on the file server, while a client is (slowly) listing a large directory:<br> 
<span class="code">NET FILE | Find "desktop.ini"</span></p>
<p>A quick solution to this performance problem is to remove the READ_ONLY <a href="attrib.html">attribute</a> from the folder and/or delete the non-essential desktop.ini files.</p>
<h2>2) Explorer randomly locks files</h2>
<p>There are <a href="http://www.techspot.com/vb/topic48091.html">reports</a> that Windows Explorer can run very slowly or stop responding if some of the profile permissions get corrupted. </p>
<p>To fix this logout and login with a different (Administrator level) account and rename this folder: </p>
<p class="code">C:\Users\&lt;<i>profilename</i>&gt;\AppData\Local\Microsoft\Windows </p>
<p> When you login again the folder will be re-created with the correct permissions.</p>
<h2>3) Shortcuts in the Windows XP 'My Network Places' make network
  browsing very slow. </h2>
<p> If the 'My Network Places' folder contains a shortcut to a network share, then 
  each refresh of the explorer window will attempt to read icon information from 
  every file in the remote location, causing the system to slow to a crawl. <br>
<br>
Removing all shortcuts from 'My Network Places' will return the system response 
  to normal.<br>
In Windows 7, network places have been moved under 'Computer' and this issue seems to have been fixed.
<br>
<br>
Every time you open a file via a UNC name, Windows XP will automatically add 
  another shortcut to the 'My Network Places' folder - so the issue tends to get 
  worse over time. <br>
<br>
You can prevent the automatic addition of shortcuts with the registry setting below: <br>
<span class="code">Windows Registry Editor Version 5.00<br>
[HKEY_CURRENT_USER\Software\Microsoft\Windows\CurrentVersion\Policies\Explorer]<br>
"NoRecentDocsNethood"=dword:00000001</span></p>
<h2>4) Network Shortcuts on the Start menu and Desktop</h2>
<p>Placing a shortcut to a network 
  resource in either the Start menu or Desktop (including the recycle bin) can drastically slow down system response, particularly 
when the network resource is unavailable. Shortcuts to <i>Domains</i> or <i>Machines</i> don’t suffer from these problems as they always have the same icon. </p>
<p>A sensible routine for managing desktop shortcuts can be found <a href="http://ask.metafilter.com/172010/Shortcuts-and-Memory#2474481">here</a>. </p>
<p>An alternative worksround is to create a shortcut to Explorer.exe and pass the UNC name of the resource.<br>
<span class="code">explorer /e, \\Server\FileShare</span></p>
<p class="quote">  <i>"Total world oil reserves amount to one thousand billion barrels, yearly 
              consumption is 27 billion barrels" ~ BP 
  Amoco </i></p>
<p><b> Related:</b>
</p><p><a href="../vb/syntax-profile.html">CleanRoamingProfile.vbs</a> - VBScript to delete selected files from a roaming profile.<br>
<a href="https://support.microsoft.com/kb/841978">Q841978</a> -  Explorer.exe stops responding when you use network shortcuts (XP)<br>
<a href="http://blogs.technet.com/b/markrussinovich/archive/2005/06/15/an-explosion-of-audit-records.aspx">SysInternals</a> - Mark Russinovich - Desktop.ini files fill up the audit event log. <br>
<a href="http://www.chrisbuchanan.ca/Blog/Lists/Posts/Post.aspx?ID=17">Windows 7 Slow Logon</a> – Waiting for the User Profile Service<br>
<a href="https://support.microsoft.com/kb/904160">Q904160</a> - File sharing on the network is slower than expected (WinServer 2003 SP1)<br>
<a href="https://support.microsoft.com/kb/885189/">Q885189</a> - Slow performance from a mapped drive - Windows Server 2003<br>
<a href="https://support.microsoft.com/kb/841978">Q841978</a> - Explorer.exe stops responding when you use network shortcuts (XP)<br>  
<a href="https://support.microsoft.com/kb/834350">Q834350</a> - Access to network resources is slower<br>
<a href="https://support.microsoft.com/kb/822219">Q822219</a> - Slow File Server Performance<br>
<a href="https://support.microsoft.com/kb/819017">Q819017</a> - Long delay before files appear in My Computer (XP) <br>
<a href="https://support.microsoft.com/kb/816375">Q816375</a> - XP Explorer pane flickers<br>
<a href="https://support.microsoft.com/kb/814112">Q814112</a> - Network shares open slowly SMB/AntiVirus scanning <br>
<a href="https://support.microsoft.com/kb/326549">Q326549</a> - Read-only &amp; System attributes for folders<br>
<a href="https://support.microsoft.com/kb/321281">Q321281</a> - Desktop.ini does not work correctly when you customise the Default Profile<br>
<a href="https://support.microsoft.com/kb/320138">Q320138</a> - Disable automatic search for network printers and folders (XP)<br>
<a href="https://support.microsoft.com/kb/320829">Q320829</a> - Increase the <i>Request Size Buffer</i> on the file server - (try between 32 and 64 Kb)<br>
<a href="https://support.microsoft.com/kb/319470/">Q319470</a> - Office2000: Screen response is slow  in Save As dialog box in Word<br>
<a href="https://support.microsoft.com/kb/315237">Q315237</a> - 100-Megabit network packets<br>

<a href="https://support.microsoft.com/kb/312403">Q312403</a> - Distributed Link Tracking <br>
<a href="https://support.microsoft.com/kb/265396/">Q265396</a> - Slow network performance on a share that uses NTFS
<br>
<a href="https://support.microsoft.com/kb/245800">Q245800</a> - Delay viewing shares (Windows 98/2000) <br>
<a href="cleanmgr.html">CleanMgr</a> - Automated cleanup of Temp files, recycle bin<br>
<!-- #BeginLibraryItem "/Library/foot_nt.lbi" --></p><p>
<!-- windows300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="7649547908"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="slow_browsing.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

