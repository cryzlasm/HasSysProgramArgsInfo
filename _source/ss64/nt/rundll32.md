---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_nt.lbi" --><!-- #EndLibraryItem --><h1>RunDLL32.exe</h1> 
<p>Run a DLL program. This command is available on all version of 
  Windows from Win95 onwards, but the DLL's and options available do vary considerably. 
  Many options are case sensitive.</p>
<pre>Syntax
       RUNDLL32.EXE <i>dll_name</i>,<i>EntryPoint</i> [<i>options</i>]
</pre>
<p><b> Examples</b></p>
<p>Un-install MS Java Virtual Machine (JVM):<br>
<span class="code">RUNDLL32 advpack.dll,LaunchINFSection java.inf,UnInstall</span><br>
<br>
Copy a floppy disk:<br>
<span class="code">RUNDLL32 diskcopy,DiskCopyRunDll</span><br>
<br>
Lock workstation:<br>
<span class="code">RUNDLL32.exe user32.dll, LockWorkStation</span></p>
<p>Activate registry changes in HKEY_CURRENT_USER without logging off: <br>
<span class="code">RUNDLL32.exe USER32.DLL,UpdatePerUserSystemParameters ,1 ,True</span><br>
<br>
Add a Network Printer:<br>
<span class="code">RUNDLL32 printui.dll,PrintUIEntry /ia /c\\server /m "AGFA-AccuSet v52.3"<br>
&nbsp;&nbsp;&nbsp;/h "Intel" /v "Windows 2000" /f %windir%\inf\ntprint.inf </span><br>
<br> 
Add a Local Printer<br>
<br>   
<span class="code">RUNDLL32 printui.dll,PrintUIEntry /if /b "Test Printer" /c\\SERVER <br>
&nbsp;&nbsp;&nbsp;/f "%windir%\inf\ntprint.inf" /r "lpt1:" /m "AGFA-AccuSet v52.3"</span><br>
<br> 
Add a printer connection that's available to anyone who logs on:<span class="code"><br>   
Rundll32 printui.dll,PrintUIEntry /ga /n\\Server\PrintShare</span></p>
<p>Display the per-Machine printer connections:</p>
<p><span class="code">RUNDLL32 printui.dll,PrintUIEntry /ge /c"\\workstation64"</span><br>
<br> 
Display all the available commands for PRINTUI.DLL - add/remove print drivers, print queues, preferences, properties etc:<br>   
<span class="code">RUNDLL32 printui.dll,PrintUIEntry /?</span><br>
<br>   
Clear IE Tracks</p>
<p class="code">RunDll32.exe InetCpl.cpl,ClearMyTracksByProcess <i>number</i></p>
<blockquote>
<p>where <i class="code">number</i> is one (or several added) of the following values:</p>
<pre>   1   Browsing History
   2   Cookies
   4   Temporary Internet Files
   8   Offline favorites and download history
  16   Form Data
  32   Passwords
  64   Phishing Filter Data
 128   Web page Recovery Data
 256   Do not Show GUI when running the cache clear
 512   Do not use Multi-threading for deletion
1024   Valid only when browser is in private browsing mode
2048   Tracking Data
4096   Data stored by add-ons
8192   Preserve Cached data for Favorite websites</pre></blockquote>
<p><i class="quote">“If you're rich you can buy books. If you're poor, you need a library” ~ John Kenneth Galbraith</i><br>
<br>
<b> Related:</b></p>
<p><a href="../vb/syntax-qchange.html">Qchange.vbs</a> - Change Printer Connection<br>
<a href="prncnfg.html">PRNCNFG</a> - Configure or rename a printer.<br>
<a href="prnmngr.html">PRNMNGR</a> - Add, delete, list printers and printer connections.<br>
<a href="regsvr32.html">REGSVR32</a> - Register or unregister a DLL <br>
<a href="wmic.html">WMIC PRINTER</a> - Set printing options through WMI.  <br>
<a href="http://members.shaw.ca/bsanders/NetPrinterAllUsers.htm">Bruce Sanderson </a>- Setup shared printers (PrintUI.dll)<br>
<a href="http://dx21.com/coding/libraries/rundll32/default.aspx"> DX21.com </a> - A long list of rundll32 options<br>
<a href="https://support.microsoft.com/kb/314486%20">Q314486</a> - Add Printers 
with No User Interaction (Win XP)<br>
PowerShell: 
<a href="../ps/get-wmiobject.html">Get-WmiObject</a> - Get WMI  information</p><!-- #BeginLibraryItem "/Library/foot_nt.lbi" --><p>
<!-- windows300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="7649547908"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="rundll32.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

