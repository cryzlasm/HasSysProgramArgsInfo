---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_nt.lbi" --><!-- #EndLibraryItem --><h1>OPENFILES.exe</h1> 
<p>Query or display open files, disconnect files opened by network 
users.</p>
<pre>Syntax
      Openfiles.exe <b>/query</b> [/s <i>Computer </i>[/u <i>Domain</i>\<i>User</i> [/p <i>Password</i>]]]
        [/fo {TABLE|LIST|CSV}] [/nh] [/v]

      Openfiles.exe <b>/disconnect</b> [/s <i>Computer</i>  [/u <i>Domain</i>\<i>User</i> [/p <i>Password</i>]]]
         {[/id OpenFileID]|[/a <i>UserName</i>]|[/o <i>OpenMode</i>]} [/se <i>SessionName</i>] [/op <i>OpenFileName</i>]

Key
   /s     The name or IP address of a remote computer. (Do not use backslashes.) default=local computer.

   /u     Run the command with the account permissions of <i>user</i>. Default=current logged on user.

   /p     The password of the user account specified with /u.

   /fo    The format to use for the query output. Valid values are TABLE, LIST, and CSV. Default=TABLE.

   /nh    No column headers in the output. Valid only when /fo = TABLE or CSV.

   /id    Disconnect the file opened with the specified numeric <i>OpenFileID</i> on <i>computer</i>
          Use openfiles.exe /query to learn the file ID.
          The wildcard (*) can be used to disconnect all open files on <i>computer</i>.

   /a     Disconnect all open files that were accessed by <i>user</i> on <i>computer</i>.
          The wildcard (*) can be used to disconnect all open files on <i>computer</i>.

   /o     Disconnect all open files with the specified <i>OpenMode</i> on the computer specified by the /s parameter.
          The OpenMode parameter includes the Read/Write and Read modes.
          The wildcard (*) can be used to disconnect all open files on <i>computer</i>.

   /se    Disconnect all open files that were created by the specified session on <i>computer</i>.
          Wildcards (*) can be used. (the /se option is not available under Windows 7)

   /op    Disconnect the open file that was created with the specified <i>OpenFileName</i> on <i>computer</i> 
          The wildcard (*) can be used to disconnect all open files on <i>computer</i>.

   /v     Display verbose information in the output.

   /?     Help.</pre>
<p>Administrator privileges are required to run the OPENFILES command. We can use this fact to detect if the current user is an Admin ( <span class="code"> OPENFILES &gt;nul 2&gt;nul</span> will set %ERRORLEVEL% = 1 if the user is not an administrator.) However this will  fail  when running under WOW64 e.g. running a 32 bit installer on an 64 bit system, so an alternative is to use <a href="net_session.html">NET SESSION</a>.</p>
<p> Running openfiles.exe from within powershell allows the output to be easily assigned to a variable.</p>
<p><b>Examples</b></p>
<p class="code">From the CMD shell:</p>
<p class="code">  C:\&gt; openfiles /query /fo list /v<br>
  C:\&gt; openfiles /query /s Server64 /u SS64Dom\FileAdmin /p password1<br>
  <br>
C:\&gt; openfiles /disconnect /o read/write<br>
  C:\&gt; openfiles /disconnect /op "c:\work\finance.xls"<br>
  C:\&gt; openfiles /disconnect /s Server64 /u SS64Dom\FileAdmin /id 5<br>
  C:\&gt; openfiles /disconnect /s Server64 /u SS64Dom\FileAdmin /p password1 /id *</p>
<p class="code">From PowerShell:</p>
<p class="code">PS C:\&gt; openfiles /query<br>
PS C:\&gt; openfiles /query /fo table /nh<br>
PS C:\&gt; $file_list = openfiles  /query /s Server64 /fo CSV /v /nh
<br>
PS C:\&gt; openfiles /query /s Server64 /fo CSV /v | ConvertFrom-Csv | Out-GridView<br>
<br>
PS C:\&gt; openfiles /disconnect /id 1<br>
PS C:\&gt; openfiles /disconnect /a mike</p>
<p><span class="quote"><i>“Love is a sudden revelation: a kiss is always a discovery” - Anon </i></span><br>
<br>
<b>Related:</b><br>
<br>
<a href="net.html">NET FILE</a> - Force an open file to close<br>
<a href="psfile.html">PsFile</a> - Show files opened remotely, or close an open file<br>
<a href="pslist.html">PsList</a> - List detailed information about processes<br>
<span class="body"><a href="tasklist.html">TASKLIST</a> - List running applications and services</span><br>
Equivalent bash command (Linux): <a href="http://www-128.ibm.com/developerworks/linux/library/l-inotify.html?ca=dgr-lnxw52Inotify">inotify</a> - file-monitoring mechanism</p><!-- #BeginLibraryItem "/Library/foot_nt.lbi" --><p><script async="" src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
<!-- windows300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="7649547908"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

