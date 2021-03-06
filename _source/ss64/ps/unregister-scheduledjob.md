---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_ps.lbi" --><!-- #EndLibraryItem --><h1>Unregister-ScheduledJob (PowerShell 3.0+)</h1> 
<p>Delete scheduled jobs on the local computer.</p>
<pre>Syntax
      Unregister-ScheduledJob [-InputObject] <i>ScheduledJobDefinition</i>[]
         [-Force] [-Confirm] [-WhatIf] [<a href="common.html"><i>CommonParameters</i></a>]

      Unregister-ScheduledJob [-Name] <i>String</i>[] 
         [-Force] [-Confirm] [-WhatIf] [<a href="common.html"><i>CommonParameters</i></a>]

      Unregister-ScheduledJob [-Id] <i>Int32</i>[]
         [-Force] [-Confirm] [-WhatIf] [<a href="common.html"><i>CommonParameters</i></a>]

Key
   -Force
       Delete the scheduled job even if an instance of the job is running.
       By default, Unregister-ScheduledJob does not interrupt running jobs.
        
   -Id <i>Int32</i>[]
       Delete the scheduled jobs with the specified identification numbers (ID).
       Enter the IDs of scheduled jobs on the computer.

   -InputObject <i>ScheduledJobDefinition</i>[]
       Specifies a scheduled job. Enter a variable that contains  ScheduledJob objects or type a command or 
       expression that gets ScheduledJob objects, such as <a href="get-scheduledjob.html">Get-ScheduledJob</a>. You can also pipe ScheduledJob 
       objects to Unregister-JobTrigger.
        
   -Name <i>String</i>[]
       Delete the scheduled jobs with the specified names.
       Enter the names of one or more scheduled jobs on the computer. Wildcards are supported.

   -Confirm
       Prompt for confirmation before running the cmdlet.

   -WhatIf
       Show what would happen if the cmdlet runs. The cmdlet is not run.

   <a href="common.html">CommonParameters</a>:
       -Verbose, -Debug, -ErrorAction, -ErrorVariable, -WarningAction, -WarningVariable,
       -OutBuffer -PipelineVariable, -OutVariable.</pre>
<p>When Unregister-ScheduledJob deletes or "unregisters" a scheduled job, it deletes the directory for the scheduled      job (  <span class="code">$home\AppData\Local\Microsoft\Windows\PowerShell\ScheduledJobs</span>), which contains the XML file      that defines the scheduled job, the job execution history, and all job results. This action also deletes the job      from Task Scheduler.          </p>
<p>Unregister-ScheduledJob deletes only the scheduled jobs that are created by using  <a href="register-scheduledjob.html">Register-ScheduledJob</a> . It does not delete scheduled jobs that are created in <a href="../nt/schtasks.html">Task Scheduler</a>.          </p>
<p>Use the parameters of Unregister-ScheduledJob to delete scheduled jobs by ID or name, or pipe scheduled      jobs from <a href="get-scheduledjob.html">Get-ScheduledJob</a> to Unregister-ScheduledJob.</p>
<p><b>Examples</b></p>
<p>Delete the scheduled job called SS64Job:</p>
<p><span class="code">C:\PS&gt; Unregister-ScheduledJob SS64Job</span></p>
<p>Delete all (PowerShell) scheduled jobs:</p>
<p> <span class="code">C:\PS&gt; Get-ScheduledJob | Unregister-ScheduledJob -Force</span><br>
<br>
Delete a scheduled job on a remote computer:</p>
<p class="code">PS C:\&gt; Invoke-Command -ComputerName Server64 { Unregister-ScheduledJob -Name SS64*}</p>
<p class="quote"><i>“Every act of creation is first of all an act of destruction” ~  Pablo Picasso</i></p><p><b>Related:</b><br>
<br>
<a href="scheduler.html">Scheduler cmdlets</a> - Get/Set scheduled jobs<br>
<a href="disable-scheduledjob.html">Disable-ScheduledJob</a> - Disable a scheduled job <br>
<a href="get-scheduledjob.html">Get-ScheduledJob</a> - Get scheduled jobs on the local computer<br>
</p><!-- #BeginLibraryItem "/Library/foot_ps.lbi" --><p><script async="" src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
<!-- PowerShell300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="6253539900"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2015<br>
Some rights reserved</div><!-- #EndLibraryItem -->

