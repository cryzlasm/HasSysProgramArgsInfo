---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_ps.lbi" --><!-- #EndLibraryItem --><h1>Get-Service</h1> 
<p>Get the services on the local computer.</p>
<pre>Syntax
      Get-Service { [-name] <i>string</i>[] | -displayName <i>string</i>[]
                                     | -inputObject <i>ServiceController</i>[] }
         [-ComputerName <i>string</i>[]] [-DependentServices] 
             [-include <i>string</i>[]] [-exclude <i>string</i>[]]
                [-RequiredServices] [<i>CommonParameters</i>]
Key
   -name
       Service names to retrieve. Wildcards are permitted. 
   
   -displayName
       Display names of services to retrieve. Wildcards permitted.

   -inputObject
       ServiceController object(s) to retrieve.
       A variable containing objects or a command / expression that
       gets the objects.

   -ComputerName <i>string</i>[]
       Get the services running on the specified computers.
       The default is the local computer.

       Type the NetBIOS name, an IP address, or a fully qualified domain
       name of a remote computer.
       To specify the local computer, type the computer name, a dot (.), or "localhost".

       This parameter does not rely on PowerShell remoting.

    -DependentServices
       Get only the services that depend upon the specified service. 
       By default, Get-Service gets all services.

   -Include
       Retrieve only the Service Name(s) specified.
       Qualifies the -Name parameter, Wildcards are permitted.

   -Exclude
       Omit the Service Name(s) specified.
       Qualifies the -Name parameter, Wildcards are permitted.

   -RequiredServices
       Get only the services that this service requires. 

       This parameter gets the value of the ServicesDependedOn property of the service.
       By default, Get-Service gets all services.

   <a href="common.html">CommonParameters</a>:
       -Verbose, -Debug, -ErrorAction, -ErrorVariable, -WarningAction, -WarningVariable,
       -OutBuffer -OutVariable.</pre>
<p>
  Standard <a href="get-alias.html">Aliases</a> for Get-Service:<span class="code"> <b>gsv</b></span></p>
<p>By default, Get-Service will return <b>all </b>the services on the computer.</p>
<p><b>Examples</b></p>
<p>Get all the services on the computer.:</p>
<p><span class="code">PS C:\&gt; get-service</span><br>
  <br>
  Get all the services on the computer <span class="code">Server64</span>:</p>
<p><span class="code">PS C:\&gt; get-service -computername Server64</span></p>
<p>Get  services with names that begin "WMI" and sort the result by the service status (running/stopped):</p>
<p class="code">PS C:\&gt; get-service wmi* | sort-object status</p>
<p>Display only  services that are currently running:</p>
<p class="code">PS C:\&gt; get-service | where-object {$_.Status -eq 'Running'}</p>
<p>Status is only one property of service objects, to see all  the properties: <span class="code">get-service | get-member<br>
</span>To retrieve the <i>description</i> of a service use the Win32_Service WMI class:</p>
<p class="code">PS C:\&gt; get-wmiobject win32_service | where-object {$_.Name -eq 'Schedule'} | format-list Name, Description</p>
<p class="quote"><i>"Events dear boy, events" ~ Harold Macmillan (response when asked "what is most likely to blow governments off course")</i></p>
<p><b>Related:</b></p>
<p> 
  <a href="new-service.html">New-Service</a> - Create a new service <a href="restart-service.html"><br>
Restart-Service</a> - Restart a stopped service <a href="resume-service.html"><br>
Resume-Service</a> - Resume a suspended service <a href="set-service.html"><br>
Set-Service</a> - Make and set changes to the properties of a service <a href="start-service.html"><br>
Start-Service</a> - Start a stopped service <a href="stop-service.html"><br>
Stop-Service</a> - Stop a running service <a href="suspend-service.html"><br>
Suspend-Service</a> - Suspend a running service<br>
  Windows cmd command: <a href="../nt/net.html">NET START</a> / <a href="../nt/sc.html">SC</a> - Service Control</p><!-- #BeginLibraryItem "/Library/foot_ps.lbi" --><p>
<!-- PowerShell300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="6253539900"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="get-service.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

