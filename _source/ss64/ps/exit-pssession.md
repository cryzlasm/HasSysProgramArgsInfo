---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_ps.lbi" --><!-- #EndLibraryItem --><h1>Exit-PSSession</h1> 
<p>End an interactive PowerShell session (with a local or remote computer).</p>
<pre>Syntax
      Exit-PSSession [<i>CommonParameters</i>] <i>ErrorLevel</i>

Key
   <a href="common.html">CommonParameters</a>:
       -Verbose, -Debug, -ErrorAction, -ErrorVariable, -WarningAction, -WarningVariable,
       -OutBuffer -OutVariable.</pre>
<p>Standard <a href="get-alias.html">Aliases</a> for Exit-PSSession:<span class="code"> exsn</span> and <span class="code">exit</span></p>
<p>This cmdlet should not be confused with the exit statement in other languages which can exit a <a href="syntax-functions.html">function</a> and <a href="return.html">return</a> to the caller. Exit-PSSession will always terminate the current script, or at an  interactive PowerShell prompt, will abort the entire PowerShell session. To simply stop script execution use <a href="break.html"><span class="code">break</span></a>.</p>
<h2>Exit Codes</h2>
<blockquote>
<p>In PowerShell<span class="code"> $? </span>contains <span class="code">True</span> if last operation succeeded and <span class="code">False</span> otherwise.</p>
<p>The exit code of the last Win32 executable execution is stored in the automatic variable <span class="code">$LASTEXITCODE</span></p>
<p>To read exit codes (other than 0 or 1) launch the PowerShell script and return the <span class="code">$LASTEXITCODE</span> in a single line like this:</p>
<p><span class="code"><a href="powershell.html">powershell.exe</a> -noprofile C:\scripts\script.ps1; exit $LASTEXITCODE</span></p>
</blockquote>
<p><b>Examples</b></p>
<p>Start and then stop an interactive session with the Server64 remote computer: </p>
<pre>PS C:&gt; Enter-PSSession -computername Server64<br>Server01\PS&gt; Exit-PSSession</pre>
<p>Start and stop an interactive session with  Server64, the status of the PSSession shows that the session is still available when the interactive session ends.:</p>
<pre>PS C:&gt; $sess = new-pssession -computername Server64<br>C:\PS&gt; Enter-PSSession -session $sess<br>Server01\PS&gt; Exit-PSSession<br>C:\PS&gt; $sess<br>    <br>    Id Name            ComputerName    State    ConfigurationName<br>    -- ----            ------------    -----    -----------------<br>    1  Session1        Server64        Opened   Microsoft.PowerShell</pre>
<p>Note that if <span class="code">Enter-PSSession -ComputerName</span> is used (instead of new-psSession), then Enter-PSSession would have automatically created a temporary session that would close as soon as the interactive session ends.</p>
<p>Start PowerShell.exe and run a cmdlet and exit returning an ErrorLevel back to the calling shell (in this case CMD.exe)</p>
<p><span class="code">C:\&gt; powershell.exe -noprofile -command get-process; Exit-PSSession 64 </span><br>
<span class="code">C:\&gt; Echo %ERRORLEVEL%<br>
64 
</span></p>
<p class="quote"><i>“Every exit is an entrance somewhere else” ~ Tom Stoppard</i></p>
<p><b>Related:</b></p>
<p><a href="enter-pssession.html">Enter-PSSession</a> - Start an interactive session with a remote computer<br>
<a href="remove-pssession.html">Remove-PSSession</a> -     Close PowerShell sessions (non-interactive)<br>
<a href="break.html">Break</a> - Exit a program loop<br>
<a href="continue.html">Continue</a> - Skip just this iteration of a loop<br>
<a href="return.html">Return</a> -  Exit the current scope, (function, script, or script block).<br>
</p><!-- #BeginLibraryItem "/Library/foot_ps.lbi" --><p>
<!-- PowerShell300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="6253539900"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="exit-pssession.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

