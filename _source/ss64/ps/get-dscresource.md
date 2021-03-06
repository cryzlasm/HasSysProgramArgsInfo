---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_ps.lbi" --><!-- #EndLibraryItem --><h1>Get-DscResource</h1> 
<p>Get Desired State Config. resources from a computer.</p>
<pre>Syntax
      Get-DscResource [[-Name] <i>String</i>[]] [-Syntax] [<a href="common.html"><i>CommonParameters</i></a>]

Key
   -Name <i>String</i>[]  An array of names of the Desired State Configuration resource to view.

   -Syntax         Indicates that the cmdlet returns the syntax view of the specified
                   Desired State Configuration resources.
                   The returned syntax shows how to use the resources in a PowerShell script.

   <a href="common.html">CommonParameters</a>:
       -Verbose, -Debug, -ErrorAction, -ErrorVariable, -WarningAction, -WarningVariable,
       -OutBuffer -OutVariable.</pre>
<p>Get-DscResource retrieves the Desired State Configuration resources present on the computer. It shows built-in and custom providers (created by the user), as well as composite resources (other configurations that are packaged as module or created at run time in the session).</p>
<p><b>Examples</b></p>
<p>Get all resources on the local computer:<br>
<span class="code">PS C:\&gt; Get-DscResource</span></p>
<p>Get the WindowsFeature resource:<span class="code"><br>
PS C:\&gt; Get-DscResource –Name WindowsFeature</span></p>
<p>Get the WindowsFeature resource, and show the syntax:<br>
<span class="code">PS C:\&gt; Get-DscResource –Name WindowsFeature -Syntax</span>
</p>
<p>Get the User resource, and then use the pipeline operator to return all the properties for the User resource.<br>
<span class="code">PS C:\&gt; Get-DscResource User | Select-Object -ExpandProperty Properties</span>
</p>
<p class="quote"><i>“ I wanted to be a pharmacist. I liked the way our local pharmacist was always dressed in a nice white coat; he looked very calm, you'd give him money, and he'd give you something that you wanted to buy” ~ Walter Matthau</i></p><p><b>Related:</b></p>
<p><a href="new-dscchecksum.html">New-DSCCheckSum</a> - Create checksum files for DSC docs/resources.<br>
<a href="get-dscconfiguration.html">Get-DscConfiguration</a> - Get the current config. of a node.<br>
<a href="start-dscconfiguration.html">Start-DscConfiguration</a> - Apply Desired State config to nodes.<br>
<a href="get-dsclocalconfigurationmanager.html">Get-DscLocalConfigurationManager</a> - Get Local Config Manager settings.<br> 
<a href="https://technet.microsoft.com/en-us/library/dn249912.aspx">TechNet</a> - Desired State Configuration Overview<br>
</p><!-- #BeginLibraryItem "/Library/foot_ps.lbi" --><p>
<!-- PowerShell300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="6253539900"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="get-dscresource.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2015<br>
Some rights reserved</div><!-- #EndLibraryItem -->

