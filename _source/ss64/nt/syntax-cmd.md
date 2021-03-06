---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_ntsyntax.lbi" --><!-- #EndLibraryItem --><h1>CMD Shell</h1>
<p>Notes on working with the Windows <a href="cmd.html">CMD</a> shell.</p>
<h2>Pausing or stopping a batch script</h2>
<p> Execution of any batch script can be paused by pressing <span class="code">CTRL-S</span> this also works for pausing a single command such as a <a href="dir.html">DIR</a> listing. 
Pressing any key will resume the operation.<b><br>
<br>
</b> Execution of any batch script can be canceled by pressing <span class="code">CTRL-C</span><br>
<br>
If one batch file <a href="call.html">CALL</a>s another batch file CTRL-C will 
      exit both batch scripts.<br>
If CMD /c is used to call one batch file from another then CTRL-C will cause 
only one of the batch scripts to terminate. (see also <a href="exit.html">EXIT</a>)</p>
<h2> Copy and Paste / QuickEdit </h2>
<p>In Windows 10 the standard Ctrl-X &amp; Ctrl-C shortcuts are supported.</p>
<p>For earlier versions of Windows you can enable <span class="code">QuickEdit</span> cut and paste at the Command Prompt as follows:</p>
<blockquote>
<p>Activate  the control menu at the top left of the current cmd window, go to Properties, Options tab and then tick against QuickEdit Mode. Now you can select  text with the mouse  and  hit Enter (or right click) to copy it to the clipboard. Paste anywhere using Control+V (or Right Click)  or via the menu.</p>
<p> ESC will cancel any selection and return to editing mode.<br>
When copying between windows, you  need one click to select the window and a second click to paste.</p>
</blockquote>
<h2>History of Previous Commands</h2>
<blockquote>
<p> Pressing the UP arrow will list previous commands entered at the command prompt.<br>
Other <a href="doskey.html#shortcuts">DOSKEY</a> function keys are loaded by 
default (F7, F8, F9)</p>
</blockquote>
<h2>Quote Characters in a command</h2>
<blockquote>
<p>If <span class="code">/C</span> or <span class="code">/K</span> is specified, then the remainder of the command line is interpreted as a command and the following logic is used to process quote (") characters:<br>
<br>
1.  If all of the following conditions are met, then quote characters        
on the command line are preserved:</p>
<blockquote>
<p>- No /S switch (Strip quotes) <br>
- Exactly two quote characters<br>
- No <i>special</i> characters between the two quote characters,          
where <i>special</i> is one of: <span class="code">&amp; &lt; &gt;( ) @ ^ |</span><br>
- There are one or more whitespace characters between the          
the two quote characters<br>
- The string between the two quote characters is the name          
of an executable file.</p>
</blockquote>
<p>2.  Otherwise, old behavior is to see if the first character is        
a quote character and if so, strip the leading character and        
remove the last quote character on the command line, preserving        
any text after the last quote character. To negate this behaviour use a double set of quotes "" at the start and end of the command line.</p>
<p><span class="code">CMD /c ""c:\work\my reports\profit ^&amp; Loss.doc""</span></p>
</blockquote>
<h2>Command.com vs CMD.exe</h2>
<blockquote>
<p> All the commands on these pages assume you are running the 32 bit or 64 bit command line  (cmd.exe) <br>
<br>
The  old 16 bit command processor <span class="code">command.com</span> is supplied to provide backward compatibility for 16 bit DOS applications. Command.com has very limited functionality compared to <span class="code">cmd.exe</span> e.g. it will fail to set an %errorlevel% after many commands.<br>
<br>
If you name your batch scripts with the extension .CMD rather than .BAT then they will not run under command.com even if  copied to a Windows 95 machine.<br>
<br>
The <span class="code">%COMSPEC%</span> environment variable will show if you are running CMD.EXE or command.com<br>
</p>
<p>One key difference between .CMD and .BAT scripts (running under  CMD.EXE) is that with extensions enabled, commands like PATH/APPEND/PROMPT/SET/ASSOC will reset ERRORLEVEL to 0 if they succeed. In the old style .BAT file, the ERRORLEVEL 
will not be changed unless there is a new error (<a href="https://groups.google.com/forum/#!msg/microsoft.public.win2000.cmdprompt.admin/XHeUq8oe2wk/LIEViGNmkK0J">source</a>).</p>
<p> On 64 bit versions of Windows, the 32 bit CMD.exe can be found at <span class="code">%windir%\SysWoW64\cmd.exe</span> To reduce compatibility issues, the WOW64 subsystem isolates 32-bit binaries from 64-bit binaries by redirecting registry calls and some file system calls.</p>
</blockquote>
<h2>Opening CMD from Windows Explorer</h2>
<blockquote>
<p>You can open a new CMD prompt by choosing START, Search box, <span class="code">cmd</span>, OK</p>
</blockquote>
<h2>Registry Keys:</h2>
<blockquote>
<pre><span class="body">Allow UNC paths at command prompt</span>
[HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Command Processor]
"DisableUNCCheck"=dword:00000001

<span class="body">Run a command when CMD.exe starts</span>
[HKEY_LOCAL_MACHINE\Software\Microsoft\Command Processor]
"AutoRun"=-

<span class="body">Activate <a href="https://support.microsoft.com/kb/310530">Automatic Completion</a></span>
[HKEY_LOCAL_MACHINE\Software\Microsoft\Command Processor]
"CompletionChar"=0x9

<span class="body">For Windows 7: Add an elevated 'Open CMD prompt here (Admin)' option to the 
context menu for file system folders</span>:
[HKEY_CLASSES_ROOT\Directory\shell\runas]<br>@="Open CMD prompt here (Admin)"
[HKEY_CLASSES_ROOT\Directory\shell\runas\command]
@="cmd.exe /k pushd %L"

<span class="body">For Windows 7: Add an elevated 'Open CMD prompt here (Admin)' option to the 
My Computer context menu</span>:
[HKEY_CLASSES_ROOT\CLSID\{20D04FE0-3AEA-1069-A2D8-08002B30309D}\shell\runas]
@="Open CMD prompt here (Admin)"
[HKEY_CLASSES_ROOT\CLSID\{20D04FE0-3AEA-1069-A2D8-08002B30309D}\shell\runas\command]
@="cmd.exe"</pre>
<p>For Windows 10<br>
See <a href="http://www.tenforums.com/tutorials/59686-open-command-window-here-administrator-add-windows-10-a.html">this article on TenForums</a></p>
</blockquote>
<h2>Run multiple instances of  CMD.exe</h2>
<blockquote>
<p> At the command line or in a batch script <span class="code">CMD</span> will start a new instance of CMD.exe which will appear 
  in the same window. The <a href="exit.html">EXIT</a> command will close the second CMD instance and 
  return to the previous shell.<br>
<br>
A method of calling one Batch script from another is to run a command like <span class="code"> CMD /c C:\docs\myscript.cmd</span><br>
<br>
The output of CMD can be redirected into a text file. When <span class="code">CMD 
  /c</span> is used, the EXIT command is not required.<br>
<br>
The environment Variable %CMDCMDLINE% will expand into the original 
command line passed to CMD.EXE</p>
<p>The native version of CMD.exe is always in <span class="code">%windir%\system32</span>, on 64 bit operating systems there is also a 32 bit CMD.exe in <span class="code">%windir%\SysWOW64</span><b><br>
</b></p>
</blockquote>
<h2>Long Commands and long filenames</h2>
<blockquote>
<p>The maximum length of any command line (or variable) within CMD is <a href="https://support.microsoft.com/kb/830473">8191</a> characters.<br>
For all versions of Windows,  NTFS and FAT allows <a href="path.html">pathnames</a> of up to 260 characters. <br>
<br>
A workaround for the limited pathname length is to prefix \\?\ <br>
for example:<br>
<span class="code">\\?\C:\TEMP\Long_Directory\Long_Filename.txt</span></p>
</blockquote>
<p class="quote"><i>“The method of the enterprising is to plan with audacity and execute with vigor” ~ John Christian Bovee</i>
</p><p><b>Related</b>
</p><p><a href="cmd.html">CMD</a> - Start a new CMD shell.<br>
<a href="syntax-internal.html">CMD Internal</a> - Commands that are Internal to the CMD shell.<br>
<a href="https://code.google.com/p/conemu-maximus5/">ConEmu-Maximus5</a> - a Windows console emulator with tabs<!-- #BeginLibraryItem "/Library/foot_nt.lbi" --></p><p><script async="" src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
<!-- windows300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="7649547908"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

