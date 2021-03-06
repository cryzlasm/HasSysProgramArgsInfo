---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_ps.lbi" --><!-- #EndLibraryItem --><h1>Start-Job</h1> 
<p>Start a PowerShell background job.</p>
<pre>Syntax
      Start-Job [<b>-ScriptBlock</b>] <i>scriptblock</i> [[-InitializationScript] <i>scriptblock</i>]
         [-ArgumentList <i>Object</i>[]] [-Authentication <i>AuthenticationMechanism</i>]
            [-Credential <i>PSCredential</i>] [-InputObject <i>psobject</i>]
               [-Name <i>string</i>] [-RunAs32] [<i>CommonParameters</i>]

      Start-Job [[<b>-FilePath</b>] <i>string</i>] [[-InitializationScript] <i>scriptblock</i>]
         [-ArgumentList <i>Object</i>[]] [-Authentication <i>AuthenticationMechanism</i>]
            [-Credential <i>PSCredential</i>] [-InputObject <i>psobject</i>]
               [-Name <i>string</i>] [-RunAs32] [<i>CommonParameters</i>]

Key
  -ArgumentList <i>Object</i>[]
       The arguments (parameter values) for the script specified by the -FilePath parameter. 
       Because all of the values that follow -ArgumentList are interpreted as being values
       of ArgumentList, the ArgumentList parameter should be the last parameter in the command.

   -Authentication <i>AuthenticationMechanism</i>
       The mechanism that is used to authenticate the user's credentials.
       Valid values are Default, Basic, Credssp, Digest, Kerberos, Negotiate, and
       NegotiateWithImplicitCredential.  The default value is Default.
       CredSSP authentication is available only in Vista, Windows Server 2008, and later.

       <a href="http://www.google.co.uk/search?q=msdn+System.Management.Automation.Runspaces.AuthenticationMechanism">MSDN description</a>.
       CAUTION: Accessing a remote resource via CredSSP) authentication presents
       a security risk if the remote computer is compromised.

   -Credential <i>PSCredential</i>
       A user account that has permission to perform this action.
       The default is the current user.
       Type a user name, such as "User01" or "Domain01\User01", or enter a PSCredential
       object, such as one from <a href="get-credential.html">Get-Credential</a>.

   -FilePath <i>string</i>
       Run the specified local script as a background job.
       Enter the path and file name of the script or pipe a script path
       to Start-Job. The script must reside on the local computer or in a directory that
       the local computer can access. 
       PowerShell will convert the contents of the script file to a script block
       and run it as a background job.

   -InitializationScript <i>scriptblock</i>
       Specify commands that run before the job starts.
       Enclose the commands in braces { } to create a script block. 
       Use this parameter to prepare the session in which the job runs.
       For example, use it to add functions, snap-ins, and modules to the session.

   -InputObject <i>psobject</i>
       Input to the command.
       Enter a variable that contains the objects, or type a command or expression that
       generates the objects.
       In the value of the ScriptBlock parameter, use the $input automatic variable to
       represent the input objects.

   -Name <i>string</i>
       A friendly name for the new job.
       This name can be used toidentify the job to other job cmdlets, such as Stop-Job. 
       The default friendly name is Job#, where "#" is an ordinal number that is incremented for each job.

   -RunAs32
       Run the job in a 32-bit process. 
       Use this parameter to force the job to run in a 32-bit process on a 64-bit operating system.

   -ScriptBlock <i>scriptblock</i>
       The commands to run in the background job.
       Enclose the commands in braces { } to create a script block.
       This parameter is required.

   <a href="common.html">CommonParameters</a>:
       -Verbose, -Debug, -ErrorAction, -ErrorVariable, -WarningAction, -WarningVariable,
       -OutBuffer -OutVariable.</pre>
<p> Standard <a href="get-alias.html">Aliases</a> for Start-Job:<span class="code"> <b>sajb</b></span></p>
<p>Start-Job  starts a  PowerShell background job on the local computer.</p>
<p>When a background job is started, a job object is returned immediately, even if the job takes an extended time to complete. You can continue to work in the session without interruption while the job runs. <br>
<br>
The job object contains useful information about the job, but it does not contain the job results. When the job completes, use <a href="receive-job.html">Receive-Job</a> to get the results of the job. For more information about background jobs, see about_Jobs.<br>
<br>
To run a background job on a remote computer, use the AsJob parameter that is available on many cmdlets, or use 
<a href="invoke-command.html">Invoke-Command</a>  to run a Start-Job command on the remote computer. For more information, see about_Remote_Jobs.</p>
<p>In PowerShell 3.0 and above, jobs can be scheduled using the PowerShell <a href="scheduler.html">Scheduling cmdlets</a>.</p>
<p><b>Examples</b></p>
<p>Start a background job that runs a Get-Process command:</p>
<p><span class="code">PS C:\&gt; start-job -scriptblock {get-process}<br>
</span>or<span class="code"><br>
PS C:\&gt; start-job -command "get-process"</span></p>
<p>Start a background job (using <span class="code">Invoke-Command... -AsJob</span>) that runs "get-service winrm" on numerous computers. To limit the number of concurrent commands to 16, the -ThrottleLimit parameter is used:</p>
<p><span class="code">PS C:\&gt; $jobWRM = invoke-command -computerName (get-content servers.txt) -scriptblock {get-service winrm} -jobname WinRM -throttlelimit 16 <b>-AsJob</b></span></p>
<p>Get all events from the System log in Event Viewer, then use Receive-Job to get the results and store in a variable:</p>
<p><span class="code">PS C:\&gt; $myjob = start-job -scriptblock {get-eventlog -log system}<br>
PS C:\&gt; $results = receive-job -job $</span><span class="code">myjob</span><br>
<br>
Run a PowerShell script as a background job:</p>
<p class="code">PS C:\&gt; start-job -filepath c:\scripts\ss64.ps1</p>
<p>Run a PowerShell cmdlet (Get-Process) as a background job:</p>
<p class="code">PS C:\&gt; start-job -name WinRm -scriptblock {get-process winrm}</p>
<p class="quote"><i>“The beautiful thing about learning is nobody can take it away from you” ~ B. B. King</i></p>
<p><b>Related:</b><br><br>
<a href="get-job.html">Get-Job</a> - Get PowerShell background jobs that are running<br> 
<a href="invoke-command.html">Invoke-Command</a>        -   Run command<br>
<a href="http://support.microsoft.com/kb/2009703">Q2009703</a> - 
Possible deadlock  when trying to manage jobs called with Start-Job (WinXP/2003 only)
<!-- #BeginLibraryItem "/Library/foot_ps.lbi" --></p><p>
<!-- PowerShell300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="6253539900"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="start-job.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2015<br>
Some rights reserved</div><!-- #EndLibraryItem -->

