---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_nt.lbi" --><!-- #EndLibraryItem --><h1>LOGMAN.exe</h1> 
<p>Manage Performance Monitor &amp; performance logs from the command line.</p>
<pre>Syntax
      logman [create|query|start|stop|delete|update|import|export] [<i>options</i>]

Verbs:
  create           Create a new data collector.
  query            Query data collector properties. 
                   If no <i>name</i> is given all data collectors are listed.
  start            Start an existing data collector and set the begin time to manual.
  stop             Stop an existing data collector and set the end time to manual.
  delete           Delete an existing data collector.
  update           Update an existing data collector's properties.
  import           Import a data collector set from an XML file.
  export           Export a data collector set to an XML file.

Adverbs:
  counter          Create a counter data collector.
  trace            Create a trace data collector.
  alert            Create an alert data collector.
  cfg              Create a configuration data collector.
  providers        Show registered providers.

Options (counter):
   -c <i>path</i> [<i>path</i> [...]]
                     The <a href="syntax-performance-counters.html">performance counters</a> to collect.
                     To collect remotely, prefix with the \\machine name.
   -cf <i>filename      </i>File listing performance counters to collect,one per line.
   -f {<u>bin</u>|bincirc|csv|tsv|sql}
                     The log format for the data collector. For SQL database format,
                     you must use the -o option in the command line with the DNS!log option.
                     The defaults is binary.
   -sc <i>value</i>         Maximum number of samples to collect with a performance counter data collector.
   -si [[<i>hh</i>:]<i>mm</i>:]<i>ss</i>  Sample interval for performance counter data collectors.

Options (trace):
   -f {<u>bin</u>|bincirc|csv|tsv|sql}
                     The log format for the data collector. For SQL database format,
                     you must use the -o option in the command line with the DNS!log option.
                     The defaults is binary.
   -mode <i>trace_mode</i>  Event Trace Session <a href="http://go.microsoft.com/fwlink/?LinkID=136464">logger mode</a>.           
   -ct {perf|system|cycle}
                     The clock resolution to use when logging the time stamp for
                     each event: query performance counter, system time, or CPU cycle.
   -ln <i>logger_name</i>   Logger name for Event Trace Sessions.
   -ft [[<i>hh</i>:]<i>mm</i>:]<i>ss</i>  Event Trace Session flush timer.
   -[-]p <i>provider</i> [<i>flags</i> [<i>level</i>]]
                     A single Event Trace provider to enable.
                     The terms 'Flags' and 'Keywords' are synonymous in this context.
   -pf <i>filename</i>      File listing multiple Event Trace providers to enable.
   -[-]rt            Run the Event Trace Session in real-time mode.
   -[-]ul            Run the Event Trace Session in user mode.
   -bs <i>value</i>         Event Trace Session buffer size in kb.
   -nb <i>min max </i>      Number of Event Trace Session buffers.

Options (alert):
   -[-]el             Enable/Disable event log reporting.
   -th <i>threshold</i> [<i>threshold</i> [...]]
                      Specify counters and a threshold values for an alert.
   -[-]rdcs <i>name</i>      Data collector set to start when alert fires.
   -[-]tn <i>task</i>        Scheduled Task to run when alert fires.
   -[-]targ <i>argument</i>  Scheduled Task arguments.
   -si [[<i>hh</i>:]<i>mm</i>:]<i>ss   </i>Sample interval for performance counter data collectors.

Options (cfg):
   -[-]ni                    Enable/Disable network interface query.
   -reg <i>path</i> [<i>path</i> [...]]    Registry values to collect.
   -mgt <i>query</i> [<i>query</i> [...]]  WMI objects to collect.
   -ftc <i>path</i> [<i>path</i> [...]]    Full path to the files to collect.

Options:
   -?                        Display context sensitive help.
   -s <i>computer</i>               Perform the command on specified remote system.
   -config <i>filename</i>          Settings file containing command options.
   <b>[-n] <i>name</i>                 Name of the target object.</b>
   -pid <i>pid</i>                  Process identifier.
   -xml <i>filename</i>             Name of the XML file to import or export.
   -as                       Perform the requested operation asynchronously.
   -[-]u <i>user</i> [<i>password</i>]     User to Run As. Entering a * for the password produces a prompt
                             The interactive password is not displayed on screen.

   -m [<i>start</i>] [<i>stop</i>]         Change to manual start or stop instead of a scheduled begin or end time.
   -rf [[<i>hh</i>:]<i>mm</i>:]<i>ss</i>          Run the data collector for the specified period of time.
   -b <i>dd/MM/yyyy HH:mm:ss</i>[AM|PM] Begin the data collector at specified time.
   -e <i>dd/MM/yyyy HH:mm:ss</i>[AM|PM] End the data collector at specified time.
   -[-]r                     Repeat the data collector daily at the specified begin and end times.

   -o {<i>path</i>|dsn!log}         Path of the output log file or the DSN and log set name in a
                             SQL database. The default path is '%systemdrive%\PerfLogs\Admin'.
   -[-]a                     Append to an existing log file.
   -[-]ow                    Overwrite an existing log file.
   -[-]v {<i>nnnnnn</i> | <i>mmddhhmm</i>} Attach file versioning information to the end of the log name.
   -[-]rc <i>task</i>               Run the command specified each time the log is closed.
   -[-]max <i>value</i>             Maximum log file size in MB or number of records for SQL logs.
   -[-]cnf [[<i>hh</i>:]<i>mm</i>:]<i>ss</i>      Create a new file when the specified time has elapsed or when the max size is exceeded.

   -y                        Answer yes to all questions without prompting.
   -fd                       Flush all the active buffers of an existing Event Trace Session to disk.
   -ets                      Send commands to Event Trace Sessions directly without saving or scheduling.
</pre>
<p>Note: 
Where [-] is listed, an extra - negates the option.
For example <span class="code">--u</span> turns off the <span class="code">-u</span> option.</p>
<p>This page describes the Windows 7/2008 version of Logman, the<a href="http://technet.microsoft.com/en-us/library/bb490956.aspx"> XP version</a> only supports the Counter and Trace Adverbs (no Alerts/thresholds). </p>
<p><b>Examples:</b></p>
<p> Create a counter to Log the % Processor Time on the local machine: </p>
<p class="code">C:\&gt; set _mycounters="\Processor(_Total)\%% Processor Time"<br>
C:\&gt; set _mylogfile=C:\docs\ss64.blg<br>
C:\&gt; Logman.exe create counter ss64_CPU -f bincirc -v mmddhhmm -max 250 -c %_mycounters% -o %_mylogfile% </p>
<p>Start the counter running (and then run whatever other process you wish to monitor):<br>
<span class="code">C:\&gt; Logman.exe start ss64_CPU<br>
<br>
</span>
Stop the counter <br>
<span class="code">C:\&gt; Logman.exe stop ss64_CPU</span><br>
The above creates a file like <span class="code">C:\docs\ss64_09031235.blg<br>
<br>
</span>To convert this to  text/CSV format<span class="code">:<br>
C:\&gt; relog C:\docs\ss64_09031235.blg -f csv -o proc_time.csv -t 2<br>
<br>
</span>We can now delete the counter (unless intending to reuse it again)<br>
<span class="code">C:\&gt; Logman.exe delete ss64_CPU</span></p>
<pre><span class="body">Run a scheduled task if % Processor Time &gt; 5 (this assumes that </span>demo_task<span class="body"> already exists)</span>
Logman.exe create alert <span class="code">ss64_alert</span> -th "\Processor(_Total)\%% Processor Time&gt;5" -tn "demo_task"</pre>
<p>More examples: </p>
<pre> logman start perf_log
 logman update perf_log -si 10 -f csv -v mmddhhmm
  
 logman create counter perf_log -c "\Processor(_Total)\% Processor Time"
 logman create counter perf_log -c "\Processor(_Total)\% Processor Time" -max 10 -rf 01:00
  
 logman create trace trace_log -nb 16 256 -bs 64 -o c:\logfile
  
 logman create alert new_alert -th "\Processor(_Total)\% Processor Time&gt;50"
  
 logman create cfg cfg_log -reg "HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Windows NT\CurrentVersion\\"
 logman create cfg cfg_log -mgt "root\cimv2:SELECT * FROM Win32_OperatingSystem"
  
 logman query providers
 logman query providers Microsoft-Windows-Diagnostics-Networking
  
 logman start process_trace -p Microsoft-Windows-Kernel-Process 0x10 win:Informational -ets
 logman start process_trace -p Microsoft-Windows-Kernel-Process -mode newfile -max 1 -o output%d.etl -ets

 logman start usermode_trace -p "Service Control Manager Trace" -ul -ets
 logman query usermode_trace -p "Service Control Manager Trace" -ul -ets
 logman stop usermode_trace -p "Service Control Manager Trace" -ul -ets
  
 logman start "NT Kernel Logger" -o log.etl -ets
 logman start "NT Kernel Logger" -p "Windows Kernel Trace" (process,thread) -ets</pre>
<p class="quote"><i>“Painting is just another way of keeping a diary” - Pablo Picasso</i></p>
<p><b>Related:</b><br>
<br>
<a href="http://go.microsoft.com/fwlink/?LinkID=136332">Microsoft Help page</a><br>
<a href="lodctr.html">LODCTR</a> - Load PerfMon performance counters<br>
<a href="sysmon.html">SYSMON</a> - Monitor and log system activity to the Windows event log<br>
<a href="typeperf.html">TypePerf</a> - Write performance data to  a log file.
<br>
<a href="eventcreate.html">EVENTCREATE</a> - Add a message to the Windows event log.<br>
Powershell: <a href="../ps/new-object.html">New-Object</a> System.Diagnostics.PerformanceCounter </p><!-- #BeginLibraryItem "/Library/foot_nt.lbi" --><p><script async="" src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
<!-- windows300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="7649547908"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

