---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_nt.lbi" --><!-- #EndLibraryItem --><h1>TASKLIST</h1>
<p>TaskList
  displays all running applications and <a href="syntax-services.html">services</a> 
  with their Process ID (PID) 
This can be run on either a local or a remote computer.</p>
<pre>Syntax
      Tasklist <i>options</i>

Options:

   /s <i>computer</i>  Name or IP address of a remote computer.
                Don’t use backslashes. Default = local computer.

   /u <i>domain</i>\<i>user</i> [/p <i>password</i>]]
                Run under a different account.

   /P [<i>password</i>]
                The password for the given user context. Prompts for input if omitted.

   /M [<i>module</i>]
                List all tasks currently using the given exe/dll name.
                If the module name is not specified all loaded modules are displayed.

   /svc         List information for each process without truncation.
                Valid when /fo=TABLE. Cannot be used with /m or /v

   /APPS        Display Store Apps and their associated processes. (Windows 8.1+)

   /V           Verbose task information.

   /FO {<u>TABLE</u>|LIST|CSV}]
                Output format, the default is TABLE.

   /NH          No Headers in the output (does not apply to LIST output)

   /FI <i>FilterName</i> [/FI <i>FilterName2</i> [ ... ]]
                Apply one of the Filters below:

                   ImageName   eq, ne                  Image Name <i>String</i>
                   PID         eq, ne, gt, lt, ge, le  Process ID, A Positive integer.
                   Session     eq, ne, gt, lt, ge, le  Any valid session number.
                   SessionName eq, ne                  <i>String</i>
                   Status      eq, ne                  RUNNING | NOT RESPONDING | UNKNOWN
                   CPUTime     eq, ne, gt, lt, ge, le  <i>Time</i> hh:mm:ss
                   MemUsage    eq, ne, gt, lt, ge, le  Memory usage in KB, specify a valid integer.
                   Username    eq, ne                  <i>User name</i> ([Domain\]User).
                   Services    eq, ne                  Service Name <i>String</i>
                   Windowtitle eq, ne                  Window Title <i>String</i>
                   Modules     eq, ne                  DLL Name <i>String</i></pre>
<blockquote>
<blockquote>
<p> Image Name is the name of the process or the executable file running the process, often svchost.exe</p>
<p>Filters must be surrounded with double quotation marks, if a filter string itself includes a double quotation mark, this must be escaped with a backslash<span class="code"> \" </span>one exception to this is a double quote at the end, which can be matched using a wildcard:<span class="code"> *</span></p>
<p>if a filter string  includes a backslash, that can be escaped with a double backslash<span class="code"> \\</span></p>
</blockquote>
</blockquote>
<p>Home editions of Windows do not have TASKLIST, use <a href="query-process.html">QPROCESS</a> instead.</p>
<p><b>Examples:</b></p>
<p>List the services running under each process:</p>
<p class="code">TASKLIST /svc</p>
<p>List the services running under each <span class="code">SvcHost</span> 
process:</p>
<p class="code">TASKLIST /FI "imagename eq svchost.exe" /svc</p>
<p>List the services running now: <br>
<br>
<span class="code">TASKLIST /v /fi "STATUS eq running"</span></p>
<p>List the services with an ImageName that starts with "C" - notice that a wildcard can only be used at the <b>end</b> of the string: </p>
<p class="code">TASKLIST /FI "IMAGENAME eq c*"</p>
<p>List the services running under a specific user account: <br>
<span class="code"><br>
TASKLIST /v /fi "username eq SERVICE_ACCT05"</span><br>
<br>
<i class="quote">“Here's to the success of our impossible task!” ~ Soviet dissidents, 1975</i></p>
<p>  <b>Related:</b></p>
<p><a href="query-process.html">Query Process</a> - Display processes (TS/Remote Desktop)<br>
<a href="pslist.html">PsList</a> - List detailed information about processes<br>
<a href="tlist.html">TLIST</a> - Task list with full path <br>
PSTAT - display running tasks including all Process Threads.<br>
  <a href="mem.html">MEM</a> - Display memory usage <br>
  <a href="winmsd.html">WINMSD</a> - Windows NT Diagnostics (including Physical 
  Memory)<br>
<span class="code"><a href="wmic.html">WMIC</a> /OUTPUT:C:\Procs.txt PROCESS get Caption,Commandline,Processid</span><br>
Powershell: <a href="../ps/get-process.html">Get-Process</a> - Get a list of processes on a machine (ps/gps) <br>
Equivalent bash command (Linux): <a href="../bash/ps.html">ps</a> - Process status, information about processes running in memory.</p><!-- #BeginLibraryItem "/Library/foot_nt.lbi" --><p>
<!-- windows300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="7649547908"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="tasklist.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

