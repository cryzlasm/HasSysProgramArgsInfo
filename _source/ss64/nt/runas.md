---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_nt.lbi" --><!-- #EndLibraryItem --><h1>RUNAS</h1>
<p>Execute a program under a different user account (non-elevated).</p>
<pre>Syntax
      RUNAS [ [/noprofile | /profile] [/env] [/savecred | /netonly] ]
         /<b>user</b>:<i>UserName</i> <i>program</i>

      RUNAS [ [/noprofile | /profile] [/env] [/savecred] ]
         /<b>smartcard</b> [/user:<i>UserName</i>] <i>program</i>

      Display the trust levels that can be used:
      RUNAS <b>/showtrustlevels</b>

      Run a program at a given TrustLevel:
      RUNAS /<b>trustlevel</b>:<i>TrustLevel</i> <i>program</i>

Key
   /noprofile       Do not load the user's profile.
                    This causes the application to load more quickly, but
                    can cause some applications to malfunction.

   /profile         Load the user's profile. (default)

   /env             Use the current environment instead of user's.

   /netonly         Use the credentials for remote access only.

   /savecred        Use credentials previously saved by the user.
                    This option is not available on Windows 7 Home or
                    Starter Editions and will be ignored.

   /smartcard       Load the credentials from a smartcard.

   /user            <i>UserName</i> in the form USER@DOMAIN or DOMAIN\USER

   /trustlevel <i>Level</i>  One of levels enumerated in /showtrustlevels.
                      RunAs is not able to launch an application with an <a href="syntax-elevate.html">elevated</a>
                      access token.

   <i>program</i>          The program to run.
</pre>
<p><span class="body">Enter the password  when prompted. </span><br>
<span class="code">/profile</span> is not compatible with <span class="code">/netonly</span>.<br>
<span class="code">/savecred</span> is not compatible with <span class="code">/smartcard.</span></p>
<p>When you start a program with <span class="code">RunAs  /netonly</span>, the program will execute on your local computer as the user you are currently logged on as, but  any connections to other computers on the network will be made using the user account specified. </p>
<p>Without <span class="code">/netonly</span> everything  will run under the user account specified.</p>
<p>RUNAS used  backslash <span class="code">\</span> as an <a href="syntax-esc.html">escape</a> character (not the standard ^ used by other CMD commands).<br>
RunAs Reqires the "Secondary Logon" <a href="syntax-services.html">service</a> to be running.</p>
<p>The error level <span class="code">%ERRORLEVEL%</span> returned by RunAs: success=0, failure=1</p>
<h2>Run with Elevated permissions</h2>
<blockquote>
<p>In Windows Vista and above, you can run a script  with elevated permissions by right clicking and choosing "Run As Administrator"  </p>
<p>The RunAs command predates elevation, so it has no switch for running an elevated command.<br>
An alternative is to  invoke the UAC dialogue by calling the VBScript <span class="code"><a href="../vb/shellexecute.html">.ShellExecute</a></span> function.</p>
<p>If you are already running elevated, for example an elevated CMD shell, then RUNAS will launch an application as elevated, but this is equally true just running them without RUNAS, it makes no difference.</p>
<p>When a script is <a href="../vb/syntax-elevate.html">run with elevated permissions</a> several aspects of the user environment will change: The current directory, the current TEMP folder and any mapped drives will be disconnected.</p>
</blockquote>
<h2>RunAs from   Windows Explorer</h2>
<blockquote>
<p> Select an executable file,  Shift-Right-click   and select <b>Run As..<br>
</b>This option can be hidden by setting<br>
<span class="code">HKLM\Software\Microsoft\Windows\CurrentVersion\Policies\Explorer <br>
HideRunAsVerb=1</span></p>
</blockquote>
<p><b>Examples</b></p>
<p>Run notepad.exe as the user Jdoe on domain SS64dom with no profile:</p>
<pre>C:\&gt; Runas /noprofile /user:SS64Dom\jDoe "notepad.exe"</pre>
<p>Run CMD.exe as the Administrator on the local machine Dellpc64:</p>
<pre>C:\&gt; Runas /profile /user:DELLPC64\administrator CMD</pre>
<p>Run Notepad.exe as 'Natasha' on domain SS64dom using the current environment, and open a file, escape the quote characters around the filename  with <span class="code">\</span> :</p>
<pre>C:\&gt; Runas /profile /env /user:SS64Dom\natasha "notepad \"C:\work\demo file.txt\""</pre>
<p>Run Active Directory Users and Computers (dsa.msc) as the user Jdoe on domain SS64dom</p>
<pre>C:\&gt; Runas /env /user:SS64Dom\jDoe "mmc %windir%\system32\dsa.msc"
</pre>
<p class="quote"><i>“He who reigns within himself, and rules passions, desires, and fears, is more than a king” ~ Milton </i></p>
<p><b>Related:</b><br>
  <br>
  <a href="shellrunas.html">ShellRunAs</a> - Run a command under a different user account<br>
  <a href="http://blogs.msdn.com/b/aaron_margosis/">Aaron Margosis</a> - Running with least privilege <br>
  <a href="http://www.joeware.net/freetools/">joeware.net</a> - CPAU (Create Process 
  As User) like RunAs but with an options to encrypt the password.<br>
<a href="psexec.html">PsExec</a> - Execute process remotely<br>
PowerShell: <a href="../ps/syntax-elevate.html">Run As Admin / 
elevation</a><br>
  Equivalent bash command (Linux): <a href="../bash/su.html">SU</a> - Switch User</p><!-- #BeginLibraryItem "/Library/foot_nt.lbi" --><p>
<!-- windows300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="7649547908"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="runas.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

