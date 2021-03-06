---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_nt.lbi" --><!-- #EndLibraryItem --><h1>Increasing the Desktop Application Heap</h1>
<p> When you run a large number of Windows-based programs, "Out Of Memory" error messages appear when you attempt to start new programs or try to use programs 
  that are already running. <br>
  <br>In the case of WinNT services the process simply dies for no obvious reason.<br>
  <br> This error can occur if the desktop heap in the WIN32 subsystem is depleted; 
  even though you still have plenty of physical and pagefile memory available. 
  <br>
  <br>
Desktop Heap memory is defined in the registry under the (long string) key 'SharedSection'::<br>
  <br>
Default settings Windows XP: </p>
<pre>HKLM\System\CurrentControlSet\Control\Session Manager\SubSystems

%SystemRoot%\system32\csrss.exe 
ObjectDirectory=\Windows 
<b>SharedSection</b>=1024,3072    
Windows=On 
SubSystemType=Windows 
ServerDll=basesrv,1 
ServerDll=winsrv:UserServerDllInitialization,3    
ServerDll=winsrv:ConServerDllInitialization,2 
ProfileControl=Off MaxRequestThreads=16  </pre>
<p>  In this case 1024 defines the system heap size, 3072 controls the size of the 
  interactive desktop heap (used for Windows objects). <br>
  If a third value is present e.g. "1024,3072,512", this covers the non-interactive 
  desktop heap. All values are KBytes. <br>
  If the 3rd value is not present non-interactive desktops will 
default to the same value as interactive desktops (typically 3072 K). </p>
<p>In Vista SP1 or Windows Server 2008 this increases to 12 MB:</p>
<p class="code">HKLM\System\CurrentControlSet\Control\Session Manager\SubSystems\Windows<br>
SharedSection=1024,<b>12288</b>,512</p>
<p>64-bit Windows has a default interactive desktop heap size of 20MB </p>
<p>Microsoft <a href="https://support.microsoft.com/kb/947246">do not recommend</a> that you set a value that is over 20,480 KB for the second SharedSection value.</p>
<p>Lower values increase performance at the risk of crashing any process which 
  can run out of resources. <br>
  <br>
  For many applications (in Win XP) 3072K is too high, although MS recommend 512 K (in <a href="https://support.microsoft.com/kb/142676">Q142676</a>) 
  for many applications this is too low. <br>
  <br>
  512 K will support approximately 2,500 windows, menus, pens, icons, etc. <br>
  1024 K will support approximately 5,000 windows, menus, pens, icons, etc. <br>
  3072 K will support approximately 15,000 windows, menus, pens, icons, etc. <br>
  <br>
  Because the non-interactive desktop heap is mapped into the address space of 
  each and every process', this value should not be set to an arbitrarily high 
  value, but should only be increased sufficiently to allow all the desired applications 
  to run. Note that many server side applications such as Oracle Forms will spawn 
  multiple processes for each user request. <br>
  <br>
  Because NT only supports one interactive session at a time; tuning the interactive 
  desktop heap has less impact on total memory use. <br>
  <br>
  Windows NT has a system wide memory limit of 48 Mb for all the above desktop 
  heaps, if this limit is exceeded there might not be enough memory to create an 
  error message dialog box. As a result, the requested operation fails without 
  any indication.<br>
  <br>
<b>Related</b></p>
<p><a href="http://www.microsoft.com/downloads/details.aspx?familyid=5cfc9b74-97aa-4510-b4b9-b2dc98c8ed8b&amp;displaylang=en">Desktop heap monitor</a> - Examine desktop heap usage for WinXP/2003  <br>
  <a href="https://support.microsoft.com/kb/126962">Q126962</a>    - Desktop Heap - NT 4,  Windows 2000 <br>
<a href="https://support.microsoft.com/kb/184802">Q184802</a> - Desktop Heap - NT 4,  Windows 2000, Windows XP, 2003<br>
<a href="https://support.microsoft.com/kb/947246">Q947246</a> - 
Desktop Heap - Vista<br>
<a href="http://blogs.msdn.com/ntdebugging/archive/2007/01/04/desktop-heap-overview.aspx">Desktop Heap Overview</a> - Blog from the Microsoft Critical Problem Resolution (CPR) Platforms Team.</p><!-- #BeginLibraryItem "/Library/foot_nt.lbi" --><p><script async="" src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
<!-- windows300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="7649547908"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->
