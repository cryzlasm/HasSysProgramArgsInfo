---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_ps.lbi" --><!-- #EndLibraryItem --><h1>Get-ScheduledJobOption (PowerShell 3.0+)</h1> 
<p>Get the job options of scheduled jobs.</p>
<pre>Syntax
      Get-ScheduledJobOption [-InputObject] <i>ScheduledJobDefinition</i> [<a href="common.html"><i>CommonParameters</i></a>]

      Get-ScheduledJobOption [-Id] <i>Int32</i> [<a href="common.html"><i>CommonParameters</i></a>]

      Get-ScheduledJobOption [-Name] <i>String</i> [<a href="common.html"><i>CommonParameters</i></a>]

Key
   -Id <i>Int32</i>
        The identification number of a scheduled job. Get the job options of the specified job.
        The identification numbers are returned by <a href="get-scheduledjob.html">Get-ScheduledJob</a>.

    -InputObject <i>ScheduledJobDefinition</i>
        Specify a scheduled job.
        Enter a variable, or pipe an object that contains a ScheduledJob object (or type a command
        or expression that gets a ScheduledJob object, such as <a href="get-scheduledjob.html">Get-ScheduledJob</a>.)

    -Name <i>String</i>
        The names of scheduled jobs. Get the job options of the specified scheduled job.
        Wildcards are supported.

   <a href="common.html">CommonParameters</a>:
       -Verbose, -Debug, -ErrorAction, -ErrorVariable, -WarningAction, -WarningVariable,
       -OutBuffer -PipelineVariable, -OutVariable.</pre>
<p>Use this command to examine the      job options or to pipe the job options to other cmdlets.</p>
<p>Job options are not saved to disk independently; they are part of a scheduled job. To get the job options of a      scheduled job, specify the scheduled job.          </p>
<p>Use the parameters of the Get-ScheduledJobOption cmdlet to identify the scheduled job. You can identify scheduled      jobs by their names or identification numbers, or by entering or piping ScheduledJob objects, such as the those      that are returned by <a href="get-scheduledjob.html">Get-ScheduledJob</a></p>
<p>The scheduled job options determine how the job runs when it is started by Task Scheduler. <br>
These options do not      apply when you use <a href="start-job.html">Start-Job</a>  to start a scheduled job.</p>
<p><b>Examples</b></p>
<p>Get the job options of scheduled jobs that have "BackUp" in their names:</p>
<pre><span class="code">PS C:\&gt; Get-ScheduledJobOption -Name *Backup*</span></pre>
<p>Get all job options of all scheduled jobs on the local computer:</p>
<pre><span class="code">PS C:\&gt;</span> Get-ScheduledJob | Get-ScheduledJobOptions</pre>
<p> Find specific job options:</p>
<p class="code">PS C:\&gt; Get-ScheduledJob | Get-ScheduledJobOption | Where {$_.RunElevated -and !$_.WaketoRun}</p>
<p>Display the job definitions for those jobs:</p>
<p class="code">PS C:\&gt; Get-ScheduledJob | Get-ScheduledJobOption | Where {$_.RunElevated -and !$_.WaketoRun} <b>| ForEach-Object      {$_.JobDefinition}</b></p>
<p class="quote"><i>“You were born to win, but to be a winner, you must plan to win, prepare to win, and expect to win” ~  Zig Ziglar</i></p><p><b>Related:</b></p>
<p><a href="scheduler.html">Scheduler cmdlets</a> - Get/Set scheduled jobs<br>
<a href="set-scheduledjoboption.html">Set-ScheduledJobOption</a> - Change the options of a scheduled job<br>
</p><!-- #BeginLibraryItem "/Library/foot_ps.lbi" --><p>
<!-- PowerShell300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="6253539900"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="get-scheduledjoboption.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2015<br>
Some rights reserved</div><!-- #EndLibraryItem -->

