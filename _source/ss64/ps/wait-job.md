---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_ps.lbi" --><!-- #EndLibraryItem --><h1>Wait-Job</h1> 
<p>Suppress the command prompt until one or all of the  PowerShell background jobs running in the session are
complete.</p>
<pre>Syntax
      Wait-Job [-Id] <i>Int32</i>[] [-Any] [-Force] [-Timeout <i>int</i>] [<a href="common.html"><i>CommonParameters</i></a>]

      Wait-Job [-Filter] <i>Hashtable</i> [-Any] [-Force] [-Timeout <i>Int32</i>] [<a href="common.html"><i>CommonParameters</i></a>]

      Wait-Job [[-InstanceId] <i>Guid</i>[]] [-Any] [-Force] [-Timeout <i>int</i>] [<a href="common.html"><i>CommonParameters</i></a>]

      Wait-Job [-Job] <i>Job</i>[] [-Any] [-Force] [-Timeout <i>int</i>] [<a href="common.html"><i>CommonParameters</i></a>]

      Wait-Job [[-Name] <i>string</i>[]] [-Any] [-Force] [-Timeout <i>int</i>] [<a href="common.html"><i>CommonParameters</i></a>]

      Wait-Job [-State {NotStarted | Running | Completed | Failed | Stopped | Blocked}]
         [-Any] [-Force] [-Timeout <i>int</i>] [<a href="common.html"><i>CommonParameters</i></a>]

Key
   -Any
       Display the command prompt (and return the job object) when any job completes.
       By default, Wait-Job waits until <b>all</b> of the specified jobs are complete.

   -Filter <i>Hashtable</i>
       Wait for jobs that satisfy all of the conditions established in the associated hash table.
       Enter a hash table where the keys are job properties and the values are job property values.
       This parameter works only on custom job types, such as workflow jobs and scheduled jobs.
       It does not work on standard background jobs, such as those created by using <a href="start-job.html">Start-Job</a>.
       (PowerShell 3.0+)

   -Id <i>Int32</i>[]
       Wait for jobs with the specified IDs. 

       The ID is an integer that uniquely identifies the job within the current session.
       It is easier to remember and to type than the instance ID, but it is unique only
       within the current session. You can type one or more IDs (separated by commas).
       To find the ID of a job, type "Get-Job" without parameters.

   -InstanceId <i>Guid</i>[]
       Wait for jobs with the specified instance IDs.

       An instance ID is a GUID that uniquely identifies the job on the computer.
       To find the instance ID of a job, use Get-Job.

   -Job <i>Job</i>[]
       The the jobs to be deleted.
       Enter a variable that contains the job or a command that gets the job.
       You can also pipe a job object to Receive-Job.

   -Name <i>string</i>[]
       Wait for jobs with the specified friendly name(s).
       
   -State <i>JobState</i>
       Wait for jobs with the specified status.
       Valid values are NotStarted, Running, Completed, Stopped, Failed, and Blocked.

   -Force
       Continue waiting if jobs are in the Suspended or Disconnected state.
       By default, Wait-Job returns (terminates the wait) when jobs are in one of the
       following states: Completed, Failed, Stopped, Suspended, or Disconnected. 
       (PowerShell 3.0+)        

   -Timeout <i>int</i><br>       The maximum wait time for each background job, in seconds.
       The default, -1, waits until the job completes, no matter how long it runs.
       The timing starts when you submit the Wait-Job command. <br>        <br>       If this time is exceeded, the wait will end and the command prompt returns, 
       even if the job is still running. No error message is displayed.

   <a href="common.html">CommonParameters</a>:
       -Verbose, -Debug, -ErrorAction, -ErrorVariable, -WarningAction, -WarningVariable,
       -OutBuffer -OutVariable.</pre>
<p>Standard <a href="get-alias.html">Aliases</a> for Wait-Job: <span class="code">wjb</span></p>
<p>Wait-Job  waits for PowerShell background jobs to complete before it displays the command prompt.<br>
The wait can be for <i>all</i> background jobs or for  specific job(s), a maximum wait time can also be set. <br>

<br>
When the commands in the job are complete, Wait-Job will display the command prompt and return a job object that can be piped  to another command.</p>
<p><b>Examples</b></p>
<p>Wait for all  background jobs running in the session to complete:</p>
<p><span class="code">PS C:\&gt; get-job | wait-job</span></p>
<p>Use Wait-Job to determine whether a command running as a background job on three different computers is complete:</p>
<p><span class="code">PS C:\&gt; $sess = new-pssession server01, server02, server03<br>

PS C:\&gt; invoke-command -session $sess -scriptblock {start-job -name Date1 -scriptblock {get-date{% raw %}}}{% endraw %}<br>
<br>
PS C:\&gt; $done = invoke-command -session $sess -command {wait-job -name Date1}<br>

PS C:\&gt; $done.count<br>
3</span></p>
<p>Use Wait-Job to determine when the first of many background jobs running in the 
current session are complete (local jobs running on remote machines):</p>
<p><span class="code">PS C:\&gt; $sess = new-pssession (get-content machines.txt)  <br>

PS C:\&gt; $commands = 'get-eventlog -log system | where {$_.EntryType -eq "error" -and $_.Source -eq "LSASRV"} | out-file errors.txt'<br>
<br>
PS C:\&gt; invoke-command -session $sess -scriptblock {param($commands)start-job -scriptblock {$commands{% raw %}}}{% endraw %} -ArgumentList $commands<br>
PS C:\&gt; invoke-command -session $sess -scriptblock {wait-job -any}</span><br>
<br>
Identify three jobs by their IDs and wait until any of them are complete:</p>
<p class="code">PS C:\&gt; wait-job -id 1,2,7 -any</p>
<p>Wait 120 seconds (two minutes) for the ss64 job to complete:</p>
<p class="code">PS C:\&gt; wait-job -name ss64 -timeout 120</p>
<p>Run a Get-Process command in each of  three PSSessions against remote machines, using <span class="code">-AsJob</span>, the job is created on the local computer and the results are automatically returned to the local computer, the Wait will return when all 3 jobs are complete:</p>
<p><span class="code">PS C:\&gt; $sess = new-pssession Server64, Server65, Server66<br>

PS C:\&gt; $myjob = invoke-command -session $sess -scriptblock {get-process} -asjob<br>
PS C:\&gt; $myjob | wait-job</span></p>
<p class="quote"><i>“A girl can wait for the right man to come along but in the meantime that still doesn't mean she can't have a wonderful time with all the wrong ones” ~ Cher</i></p>
<p><b>Related:</b><br><br>
<a href="get-job.html">Get-Job</a> - Get PowerShell background jobs that are running<br> 
<a href="invoke-command.html">Invoke-Command</a>        -   Run command
<br>
<a href="stop-job.html">Stop-Job</a> - Stop a PowerShell background job<br>

<a href="wait-event.html">Wait-Event</a> - Wait until a particular event is raised<br>
<a href="wait-process.html">Wait-Process</a> - Wait for a process to stop
<!-- #BeginLibraryItem "/Library/foot_ps.lbi" --></p><p>
<!-- PowerShell300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="6253539900"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="wait-job.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2015<br>
Some rights reserved</div><!-- #EndLibraryItem -->

