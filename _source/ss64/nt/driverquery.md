---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_nt.lbi" --><!-- #EndLibraryItem --><h1>DriverQuery.exe</h1>
<p>Display a list of all installed device drivers and their properties.</p>
<pre>Syntax
      driverquery  [/s <i>Computer</i>] [/u <i>Domain</i>\<i>User</i> /p <i>Password</i>]
         [/fo {TABLE|LIST|CSV}] [/nh] [/v] [/si]

Key
   /s <i>Computer</i>     The name or IP address of a remote computer
                  (do not use backslashes). Default = local computer.

   /u <i>Domain</i>\<i>User</i>  Run the command with the account permissions of the
                   user specified. Default = the currently logged on user.

   /p <i>Password</i>     The password of the user account that is specified in the /u parameter.

   /fo { TABLE | LIST | CSV } 
                   Format the output. Default = TABLE.

   /nh   Omit the header row from the displayed driver information.
         Valid when the /fo parameter is set to TABLE or CSV.

   /v    Display verbose driver information.

   /si   Display digital signature information for all device drivers. </pre>
<p>
<b>Examples</b></p>
<p>Show all installed device drivers in Table output:<br>
<span class="code">driverquery</span></p>
<p>Show all installed device drivers in a CSV format: <span class="code"><br>
DriverQuery /fo csv<br>
<br>
</span>Without a header:<span class="code"> <br>
DriverQuery /nh<br>
<br>
</span>Drivers that are not signed:<br>
<span class="code">DriverQuery /si | findstr FALSE</span></p>
<p>Find drivers that are currently Running:<br>
<span class="code">Driverquery.exe /v |findstr Running</span></p>
<p>Show installed device drivers on a remote machine<span class="code"> <br>
driverquery /s ipaddress<br>
</span><span class="code"><br>

</span>
Show installed device drivers on server64 and authenticate as a different user:<br>
<span class="code">driverquery /s server64 /u ss64Ddom\user123 /p p@sswor3d /fo list</span></p>
<p>Export a verbose listing of drivers to a file<span class="code"> <br>
driverquery /v /fo csv &gt; T:\driverlist.csv</span></p>
<p>When running DriverQuery within PowerShell, the CSV output format can be used to turn the output into objects. The PowerShell function below  turns DriverQuery into a graphical tool that will list drivers from both local and remote systems (assuming you have the appropriate permissions.)</p>
<pre>function Show-DriverDialog {
    param(
        $ComputerName = $env:computername
    )
    
    driverquery.exe /S $ComputerName /FO CSV  | 
      ConvertFrom-Csv | 
      Out-GridView -Title "Driver on \\$ComputerName"
}</pre>
<p>Function via <a href="http://powershell.com/cs/blogs/tips/archive/2012/01/13/create-own-driver-tool.aspx">Peter Bishop</a> @ Powershell.com </p>
<p class="quote">“He who asks a question is a fool for five minutes; he who does not ask a question remains a fool forever” ~ Chinese Prover</p>
<p><b>Related:</b><br>
<br>
<a href="devcon.html">DevCon</a> - Device Manager Command Line Utility</p><!-- #BeginLibraryItem "/Library/foot_nt.lbi" --><p>
<!-- windows300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="7649547908"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="driverquery.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

