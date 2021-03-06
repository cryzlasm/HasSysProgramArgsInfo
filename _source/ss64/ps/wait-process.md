---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_ps.lbi" --><!-- #EndLibraryItem --><h1>Wait-Process</h1> 
<p>Wait for one or more processes to be stopped before accepting more input.</p>
<pre>Syntax
      Wait-Process -name <i>string</i>[] [[-Timeout] <i>int</i>] [<i>CommonParameters</i>]
    
      Wait-Process [-id] <i>Int32</i>[] [[-Timeout] <i>int</i>] [<i>CommonParameters</i>]
    
      Wait-Process -inputObject <i>Process</i>[] [[-Timeout] <i>int</i>] [<i>CommonParameters</i>]

Key
   -Name 
       Process name(s)
       Separate multiple process names with commas or use wildcard characters. 

   -id <i>Int32</i>
       Process ID(s) (PID). Use commas to separate multiple PIDs.
       To find the PID of a process, type "get-process".
   
   -inputObject 
       Accept a process object as input to Wait-Process.  
       A variable, command or expression that returns the process object(s)

   -Timeout <i>int</i><br>       The maximum time, in seconds, that Wait-Process will wait for the processes to stop.
       When this interval expires, the command displays a non-terminating error that
       lists the processes that are still running, and ends the wait.

   <a href="common.html">CommonParameters</a>:
       -Verbose, -Debug, -ErrorAction, -ErrorVariable, -WarningAction, -WarningVariable,
       -OutBuffer -OutVariable.</pre>
<p>
  Wait-Process works only on processes running on the local computer.</p>
<p><b>Examples</b></p>
<p>Stop  the Notepad process and then wait for the process to be stopped before proceeding with the next
command:</p>
<p><span class="code">PS C:\&gt; $nid = (get-process notepad).id<br>

PS C:\&gt; stop-process -id $nid<br>

PS C:\&gt; wait-process -id $nid</span><br>
  <br>
  Waits 30 seconds for both the Outlook and Winword processes to stop:</p>
<p class="code">PS C:\&gt; wait-process -name outlook, winword -timeout 30</p>
<p>Show three different methods of specifying a process to the Wait-Process cmdlet:</p>
<p class="code">PS C:\&gt; $p = get-process notepad<br>

PS C:\&gt; wait-process -id $p.id<br>
<br>
PS C:\&gt; wait-process -name notepad<br>
<br>
PS C:\&gt; wait-process -inputobject $p</p>
<p class="quote"><i>“So what do we do? Anything. Something. So long as we just don't sit there. If we screw it up, start over. Try something else. If we wait until we've satisfied all the uncertainties, it may be too late” ~ Lee Iacocca</i></p>
<p><b>Related:</b><br>
  <br>
  <a href="get-process.html">Get-Process</a> - Get a list of processes on a machine<br>
  <a href="wait-job.html">Wait-Job</a> - Wait for a background job<br>
<a href="wait-event.html">Wait-Event</a> - Wait until a particular event is raised</p><!-- #BeginLibraryItem "/Library/foot_ps.lbi" --><p>
<!-- PowerShell300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="6253539900"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="wait-process.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2015<br>
Some rights reserved</div><!-- #EndLibraryItem -->

