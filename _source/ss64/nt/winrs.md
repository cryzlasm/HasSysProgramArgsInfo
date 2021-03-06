---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_nt.lbi" --><!-- #EndLibraryItem --><h1>WINRS</h1> 
<p>Windows Remote Shell</p>
<pre>Syntax
      winrs [-/<i>SWITCH</i>[:<i>VALUE</i>]] <i>COMMAND</i>

Key
   <i>COMMAND</i>    Any string that can be executed as a command in the cmd.exe shell.

           (All switches accept both short form or long form. For example both -r and 
            -remote are valid.)

   -r[emote]:<i>ENDPOINT</i>        The target endpoint using a NetBIOS name or the standard
                             connection URL: [<i>TRANSPORT</i>://]<i>TARGET</i>[:<i>PORT</i>].
                             If not specified  -r:localhost is used.

   -un[encrypted]            Messages to the remote shell will not be encrypted. This is useful for
                             troubleshooting, or when the network traffic is already encrypted using
                             ipsec, or when physical security is enforced.
                             By default the messages are encrypted using Kerberos or NTLM keys.
                             This switch is ignored when HTTPS transport is selected. 

   -u[sername]:<i>USERNAME</i>      Username. If -username is specified, -password must be as well.
                             If not specified Winrs will negotiate authentication or prompt. 

   -p[assword]:<i>PASSWORD</i>      Password. If not specified winrs will prompt for it.

   -d[irectory]:<i>PATH</i>         The starting directory for remote shell.
                             If not specified the remote shell will start in %USERPROFILE%.

   -env[ironment]:<i>STRING</i>=<i>VALUE</i>
                             A single environment variable to be set when shell starts.
                             This allows changing default environment for the shell.
                             Multiple occurrences of this switch can be used.

   -noe[cho]                 Disable echo. This might be necessary to ensure that user's answers
                             to remote prompts are not displayed locally. By default echo is "on".

   -nop[rofile]              Do not load the user's profile. By default the server will attempt to load
                             the user profile. If the remote user is not a local administrator on the
                             target system then this option will be required.

   -comp[ression]            Turn on compression.  Older installations on remote machines may
                             not support compression so it is off by default.

   -[use]ssl                 Use an SSL connection when using a remote endpoint. Specifying this instead
                             of the transport "https:" will use the default WinRM default port. 

   -?                        Help</pre>
<p> To terminate the remote command press Ctrl-C or Ctrl-Break, which will be sent to the remote shell. The second Ctrl-C will force termination of winrs.exe.<br>The URI alias to manage active shells is shell/cmd. The URI alias for WinRS configuration is winrm/config/winrs.</p>
<p><b>Examples</b></p>
<p>Configure Windows Remote Management on the server (<span class="code">DemoServer2</span>), run this from an elevated CMD (or powershell) prompt:<br>
<span class="code">C:\&gt; <a href="winrm.html">winrm</a> quickconfig</span></p>
<blockquote>
<p>On a client you can then open a remote shell connected to <span class="code">DemoServer2</span> with:<br>
<span class="code">winrs -r:DemoServer2 cmd</span></p>
</blockquote>
<p>Batch file to quickly open a remote cmd shell:<br>
[rshell.cmd]<br>
<span class="code">@echo off<br>
winrs -r:%1 cmd</span></p>
<p>Run a dir command on a remote machine: <br>
<span class="code">C:\&gt; winrs -r:DemoServer3 dir</span></p>
<p> Run an install package on a remote server:<br>
<span class="code">C:\&gt; winrs -r:Server25 msiexec.exe /i c:\install.msi /quiet </span></p>
<p>Run a powershell script on the remote box:</p>
<pre>C:\&gt; winrs /r:DemoServer2 powershell.exe -nologo -noprofile -command d:\test\test.ps1</pre>
<p>You can't open a full interactive remote PowerShell console, but as remoting  is built-in to PowerShell 2.0 there is no need. </p>
<p>Connecting to the remote server 'myserver'</p>
<p><span class="code">winrs -r:https://myserver.com command<br>
winrs -r:myserver.com -usessl command<br>
winrs -r:myserver command<br>
winrs -r:http://127.0.0.1 command<br>
winrs -r:http://169.51.2.101:80 -unencrypted command<br>
winrs -r:https://[::FFFF:129.144.52.38] command<br>
winrs -r:http://[1080:0:0:0:8:800:200C:417A]:80 command<br>
winrs -r:https://myserver.com -t:600 -u:administrator -p:$%fgh7 ipconfig<br>
winrs -r:myserver -env:PATH=^%PATH^%;c:\tools -env:TEMP=d:\temp config.cmd<br>
winrs -r:myserver netdom join myserver /domain:testdomain /userd:johns /passwordd:$%fgh789</span></p>
<p class="quote"><i>“Perhaps when distant people on other planets pick up some wavelength of ours all they hear is a continuous scream” ~ Iris Murdoch</i></p>
<p><b>Related:</b></p>
<p><a href="winrm.html">WINRM</a> - Windows Remote Management, manage active remote shells &amp; WinRS configuration.<br>
Powershell: <a href="../ps/enable-psremoting.html">Enable-PSRemoting</a> - Configure the computer to receive remote commands.</p>
<!-- #BeginLibraryItem "/Library/foot_nt.lbi" --><p>
<!-- windows300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="7649547908"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="winrs.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

