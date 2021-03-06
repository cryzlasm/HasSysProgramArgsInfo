---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_ntsyntax.lbi" --><!-- #EndLibraryItem --><h1>User Shell Folders - Profile, Start Menu folder...
</h1>
<p>In Windows 7/2008 the main User Profile folder (<span class="code">%USERPROFILE%</span>) has moved from <span class="code">C:\Documents and Settings\</span> to <span class="code">C:\Users\</span> and many profile folders have also changed name or location:</p>
<pre> Windows XP/2003                Windows 7/2008

%USERPROFILE%\Application Data %USERPROFILE%\AppData\Roaming
%USERPROFILE%\Cookies          %USERPROFILE%\AppData\Roaming\Microsoft\Windows\Cookies
%USERPROFILE%\History          %USERPROFILE%\AppData\Local\Microsoft\Windows\History
%USERPROFILE%\Local Settings   %USERPROFILE%\AppData\Local
%USERPROFILE%\My Documents     %USERPROFILE%\Documents
%USERPROFILE%\NetHood          %USERPROFILE%\AppData\Roaming\Microsoft\Windows\Network Shortcuts
%USERPROFILE%\PrintHood        %USERPROFILE%\AppData\Roaming\Microsoft\Windows\Printer Shortcuts
%USERPROFILE%\Recent           %USERPROFILE%\AppData\Roaming\Microsoft\Windows\Recent
%USERPROFILE%\SendTo           %USERPROFILE%\AppData\Roaming\Microsoft\Windows\SendTo
%USERPROFILE%\Start Menu       <abbr title="right-click 'All Programs' under the start menu, and choose Open">%USERPROFILE%\AppData\Roaming\Microsoft\Windows\Start Menu</abbr>
%USERPROFILE%\Templates        %USERPROFILE%\AppData\Roaming\Microsoft\Windows\Templates
%USERPROFILE%\Temporary Internet Files %USERPROFILE%\AppData\Local\Microsoft\Windows\Temporary Internet Files

 Windows XP/2003                Windows 10/2012 R2

%USERPROFILE%\Application Data %USERPROFILE%\AppData\Roaming
%USERPROFILE%\Cookies          %USERPROFILE%\AppData\Local\Microsoft\Windows\<b>INetCookies</b>
%USERPROFILE%\History          %USERPROFILE%\AppData\Local\Microsoft\Windows\History
%USERPROFILE%\Local Settings   %USERPROFILE%\AppData\Local
%USERPROFILE%\My Documents     %USERPROFILE%\Documents
%USERPROFILE%\NetHood          %USERPROFILE%\AppData\Roaming\Microsoft\Windows\Network Shortcuts
%USERPROFILE%\PrintHood        %USERPROFILE%\AppData\Roaming\Microsoft\Windows\Printer Shortcuts
%USERPROFILE%\Recent           %USERPROFILE%\AppData\Roaming\Microsoft\Windows\<b>Recent Items</b>
%USERPROFILE%\SendTo           %USERPROFILE%\AppData\Roaming\Microsoft\Windows\SendTo
%USERPROFILE%\Start Menu       <abbr title="right-click 'All Programs' under the start menu, and choose Open">%USERPROFILE%\AppData\Roaming\Microsoft\Windows\Start Menu</abbr>
%USERPROFILE%\Templates        %USERPROFILE%\AppData\Roaming\Microsoft\Windows\Templates
%USERPROFILE%\Temporary Internet Files %USERPROFILE%\AppData\Local\Microsoft\Windows\<b>INetCache</b></pre>
<p>The values above can  be found in the registry (as REG_EXPAND_SZ values)<br>
<span class="code">HKEY_CURRENT_USER\Software\Microsoft\Windows\CurrentVersion\Explorer\User Shell Folders</span></p>
<p>The following HKCU registry subkeys are common to  Windows XP/2003/7/2008 : </p>
<p class="code">AppData, Cache, Cookies, Desktop, Favorites, History, LocalAppData, My Pictures, NetHood, Personal, PrintHood, Programs, Recent, SendTo, Start Menu, Startup, Templates.</p>
<p>By default these all resolve to subfolders below %USERPROFILE% but they can be redirected to other locations. <br>
The registry locations are always the same, but the files and folders may be in different places.</p>
<p>To provide  backwards compatibility, in Windows 7 and above the old locations under <span class="code">C:\Documents and Settings</span> contain junction points (hidden, protected operating system files) which point to the new user-accessible folders.</p>
<h2><a id="allusers"></a>'All Users' Shell Folders</h2>
<blockquote>
<p>The folders for All Users settings have also moved:</p>
<pre> Windows XP/2003                      Windows 7/2008

%ALLUSERSPROFILE%\Application Data    %ProgramData%
%ALLUSERSPROFILE%\Desktop             %PUBLIC%\Desktop
%ALLUSERSPROFILE%\Documents           %PUBLIC%\Documents
%ALLUSERSPROFILE%\Start Menu\Programs %ProgramData%\Microsoft\Windows\Start Menu\Programs
%ALLUSERSPROFILE%\Start menu          <abbr title="right-click 'All Programs' under the start menu, and choose Open All Users.">%ProgramData%\Microsoft\Windows\Start Menu</abbr>
%ALLUSERSPROFILE%\Start Menu\Programs\Startup  %ProgramData%\Microsoft\Windows\Start Menu\Programs\Startup
%ALLUSERSPROFILE%\Templates           %ProgramData%\Microsoft\Windows\Templates

 Windows XP/2003                      Windows 10/2012 R2

%ALLUSERSPROFILE%\Application Data    %ProgramData%
%ALLUSERSPROFILE%\Desktop             %PUBLIC%\<b>Public Desktop</b>
%ALLUSERSPROFILE%\Documents           %PUBLIC%\<b>Public Documents
</b>%ALLUSERSPROFILE%\Start Menu\Programs %ProgramData%\Microsoft\Windows\Start Menu\Programs  *
%ALLUSERSPROFILE%\Start menu          <abbr title="right-click 'All Programs' under the start menu, and choose Open All Users.">%ProgramData%\Microsoft\Windows\Start Menu</abbr>  *
%ALLUSERSPROFILE%\Start Menu\Programs\Startup  %ProgramData%\Microsoft\Windows\Start Menu\Programs\Startup  *
%ALLUSERSPROFILE%\Templates           %ProgramData%\Microsoft\Windows\Templates
</pre>
<p><span class="code">* </span>In Windows 10 the Start Menu items are held in a <a href="http://arstechnica.com/gadgets/2015/07/review-windows-10-is-the-best-version-yet-once-the-bugs-get-fixed/">database</a> that is stored under <span class="code">C:\Users\<i>accountname</i>\AppData\Local\TileDataLayer</span> this is proprietary, non user editable and limited to 500 shortcuts. It is also used for Cortana Search. The entire database can be copied between accounts - all or nothing.</p>
<p>The values above can  be found in the registry (as REG_EXPAND_SZ values)<br>
<span class="code">HKEY_LOCAL_MACHINE\Software\Microsoft\Windows\CurrentVersion\Explorer\User Shell Folders</span><br>
The entries in this subkey can appear in both the <span class="code">Shell Folders</span> subkey and the <span class="code">User Shell Folders</span> and in both HKLM and HKCU. The entries that appear in  <span class="code">User Shell Folders</span> take precedence over those in <span class="code">Shell Folders</span>. <br>
The entries that appear in HKCU take precedence over those in HKLM</p>
<p>The following HKLM registry subkeys are common to  Windows XP/2003/7/2008 : </p>
<p class="code">Common AppData, Common Desktop, Common Documents, Common Programs, 
Common Start Menu, Common Startup, Common templates</p>
</blockquote>
<h2>Folder Redirection</h2>
<blockquote>
<p>Although it is possible to redirect any of these folders with Group Policy, not all options are fully supported,<br>
for example redirecting IE favorites/cookies will result in <a href="https://blogs.msdn.microsoft.com/oldnewthing/20140702-00/?p=593/">very slow</a> performance.</p>
</blockquote>
<p><b>Examples</b></p>
<p>Find the location of the Start Menu folder:</p>
<p class="code">For /f "tokens=3*" %%G in ('<a href="reg.html">REG QUERY</a> "HKCU\Software\Microsoft\Windows\CurrentVersion\Explorer\User Shell Folders" /v "Start Menu" ^|Find "REG_"') do Call Set _startmenu=%%H<br>
<br>
Echo %_startmenu%</p>
<p>PowerShell <a href="../ps/syntax-functions.html">function</a> to open the Start menu:</p>
<p class="code">function Open-StartMenu { <br>
$drive = dir env:SystemDrive <br>
$w7path = $drive.value + "\ProgramData\Microsoft\Windows\Start Menu" <br>
$xppath = $drive.value + "\Documents and Settings\All Users\Start Menu" <br>
if (test-path $w7path) <br>
&nbsp;{explorer $w7path} <br>
elseif (test-path $xppath) {explorer $xppath} <br>
} </p>
<p class="quote"><i>“There are no shortcuts to any place worth going” -  Beverly Sills</i>
</p><p><b>Related:</b></p>
<p><a href="shell.html">Shell: folder</a> - Shortcuts to key folders.<br>
<a href="syntax-variables.html">Windows Environment Variables</a><br>
<a href="../vb/syntax-profile.html">RoamingProfile.vbs</a> - Cleardown files to improve logon and logoff times.<br>
<a href="http://technet.microsoft.com/en-us/library/cc766489(WS.10).aspx">Managing Roaming User Data Deployment Guide</a> - TechNet (html and .doc)<br>  
<a href="https://support.microsoft.com/kb/886549">Q886549</a> - User Shell Folders</p><!-- #BeginLibraryItem "/Library/foot_nt.lbi" --><p>
<!-- windows300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="7649547908"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="syntax-folders.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

