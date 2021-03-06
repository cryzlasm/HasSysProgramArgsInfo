---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_nt.lbi" --><!-- #EndLibraryItem --><h1>TSKILL</h1>
<p>End a process running in a session on a Remote Desktop Session Host (RD Session Host) server..<br>
  <br>
  Tskill can  be used to end any process that belongs to you, unless you are an administrator. Administrators have full access to all tskill functions and can end processes that are running in other user sessions.</p>
<pre>Syntax
      TSKILL <i>processid</i> | <i>processname</i> [ /SERVER:<i>servername</i>] [ /ID:<i>sessionid</i> | /A] [ /V]

Key
   <i>processid</i>           Process ID for the process to be terminated.

   <i>processname</i>         Process name to be terminated
                       (Usually the name of the executable with trimmed ".exe" suffix).

   /SERVER:<i>servername</i>  Server containing processID (default is current).
                          /ID or /A must be specified when using processname
                          and /SERVER

   /ID:<i>sessionid</i>       End process running under the specified session (default is current).
   /A                  End process running under ALL sessions.

   /V                  Display information about actions being performed.</pre>
<p>processname is limited to 18 characters.</p>
<p> When all processes that are running in a session end, the session also ends.</p>
<p> If you use the <span class="code">ProcessName</span> and the <span class="code">/server:ServerName</span> parameters, you must also specify either the <span class="code">/id:SessionID</span> or the <span class="code">/a</span> parameter. This is because potentially multiple users could be running the same program.</p>
<p><b>Examples:</b><br>
<br>
Terminate a running instance of notepad.</p>
<pre>tskill notepad
</pre>
<p>Terminate the running process #6464.</p>
<pre>tskill 6464</pre>
<p class="quote"><i> "Managers tend to treat organizations as if they are infinitely plastic. They hire and fire, merge, downsize, terminate programs, add capacities. But there are limits to the shifts that organizations can absorb" ~ Kevin Kelly</i></p>
<p>  <b>Related:</b></p>
<p><a href="taskkill.html">TASKKILL</a> - End a running process<br>
<a href="pskill.html">PsKill</a> - Kill processes by name or process ID<br>
<a href="wmic.html">WMIC</a> PROCESS where name='evil.exe' delete / WMIC PROCESS  where processid='6464' delete<br>
Powershell: <a href="../ps/stop-process.html">Stop-Process</a> - Kill a process<br>
Equivalent bash command (Linux): <a href="../bash/kill.html">kill</a> - Kill a process</p><!-- #BeginLibraryItem "/Library/foot_nt.lbi" --><p>
<!-- windows300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="7649547908"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="tskill.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

