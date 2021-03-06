---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_ps.lbi" --><!-- #EndLibraryItem --><h1>Set-BitsTransfer</h1> 
<p>Modify the properties of an existing Background Intelligent Transfer Service (BITS) transfer job.</p>
<pre>Syntax
      Set-BitsTransfer [-BitsJob] <i>BitsJob</i>[]
         [-Authentication <i>string</i>] [-Credential <i>PSCredential</i>]
            [-Description <i>string</i>] [-DisplayName <i>string</i>] [-Priority <i>string</i>]
               [-ProxyAuthentication <i>string</i>] [-ProxyBypass <i>string</i>[]]
                  [-ProxyCredential <i>PSCredential</i>] [-ProxyList <i>Uri</i>[]]
                     [-ProxyUsage <i>string</i>] [-RetryInterval <i>int</i>] [-RetryTimeout <i>int</i>]
                        [-SetOwnerToCurrentUser] 
                           [-Confirm] [-WhatIf] [<a href="common.html"><i>CommonParameters</i></a>]

Key
   -BitsJob <i>BitsJob</i>[]
       The BITS transfer job(s) to modify.
       Pipe a value to this parameter from other cmdlets that return BitsJob objects, such as Get-BitsTransfer.

   -Authentication <i>string</i>
       The authentication mechanism to be used at the server.
       Possible values:
         Basic      Send the username and password in clear text to the server or proxy.
         Digest     A challenge-response scheme using a server-specified data string.
         NTLM       A challenge-response scheme using the Windows credentials of the
                    user for domain authentication.
         <u>Negotiate</u>  A challenge-response scheme that negotiates with the server or proxy to
                    determine which scheme to use. For example: Kerberos or NTLM.
         Passport   Use Windows Live ID as the authentication mechanism (live.com).

   -Credential <i>PSCredential</i>
       The credentials to use to authenticate the user at the server.
       The default is the current user. Type a user name, such as "User64", "Domain64\User64"
       or "User@example.com". Or use <a href="get-credential.html">Get-Credential</a> to create the value for this parameter.
       When you type a user name, you will be prompted for a password.

   -Description <i>string</i>
       Up to 1024 characters.

   -DisplayName <i>string</i>
       The display name provides a user-friendly way to differentiate BITS transfer jobs.

   -Priority <i>string</i>
       Set the priority of the BITS transfer job, which affects bandwidth usage.
       Background transfers use the idle network bandwidth of the client computer to transfer files.
       valid values:
        <u>Foreground</u> Transfer the job in the foreground. (highest priority)
                   Foreground transfers compete for network bandwidth with other applications,
                   which can impede the user's overall network experience.
                   However, if Start-BitsTransfer is being used interactively, this is likely the best option.

        High       Transfer the job in the background with a high priority.              
        Normal     Transfer the job in the background with a normal priority. 
        Low        Transfer the job in the background with a low priority.(lowest priority)

   -ProxyAuthentication <i>string</i>
       The authentication mechanism to be used at the server.
       Possible values:
         Basic      Send the username and password in clear text to the server or proxy.
         Digest     A challenge-response scheme using a server-specified data string.
         NTLM       A challenge-response scheme using the Windows credentials of the
                    user for domain authentication.
         <u>Negotiate</u>  A challenge-response scheme that negotiates with the server or proxy to
                    determine which scheme to use. For example: Kerberos or NTLM.
         Passport   Use Windows Live ID as the authentication mechanism (live.com).

   -ProxyBypass <i>string</i>[]
       A list of host names to use for a direct connection.
       The hosts in the list are tried in order until a successful connection is achieved.
       Specifying this parameter bypasses the proxy.
       If this parameter is used, the -ProxyUsage parameter <b>must</b> be set to Override.

   -ProxyCredential <i>PSCredential</i>
       The credentials to use to authenticate the user at the proxy. 
       Use <a href="get-credential.html">Get-Credential</a> to create a value for this parameter.

   -ProxyList <i>Uri</i>[]
       A list of proxies to use.
       The proxies in the list are tried in order until a successful connection is achieved.
       If this parameter is used, the -ProxyUsage parameter <b>must</b> be set to Override.

   -ProxyUsage <i>string</i>
       The proxy usage settings. Possible values:
          <u>SystemDefault</u> Use the system default proxy settings.
          NoProxy       Do not use a proxy to transfer the files.
                        Use this option to transfer files within a local area network (LAN).
          AutoDetect    Automatically detect proxy settings.
                        BITS detects proxy settings for each file in the job.
          Override      Specify the proxies or servers to use.
                        If the -ProxyList parameter is also specified, the proxies in that list are used.
                        If the -ProxyBypass parameter is also specified, the servers in that list are used.
                        In both cases, the first member of the list is used. If the first member is
                        unreachable, the subsequent members are tried until a member is contacted successfully.

   -RetryInterval <i>int</i>
       The minimum length of time, in seconds, that BITS waits before trying to transfer the file
       after BITS encounters a transient error.
       The minimum allowed value is 60 seconds. If this value exceeds the RetryTimeout value from
       the BitsJob object, BITS will not retry the transfer. Instead, BITS sets the state of the
       BITS transfer job to the Error state.  The default is 600 seconds (10 minutes).

   -RetryTimeout <i>int</i>
       The length of time, in seconds, that BITS tries to transfer the file after the first
       transient error occurs. Setting the retry period to 0 prevents retries.
       If the retry period value exceeds the JobInactivityTimeout Group Policy setting (90-day default),
       BITS cancels the job.  The default value is 1,209,600 seconds (14 days).

   -SetOwnerToCurrentUser
       Set the owner of the BITS transfer job to the current user.

   -Confirm
       Prompt for confirmation before executing the command.

   -WhatIf
       Describe what would happen if you executed the command, without actually executing the command.

   <a href="common.html">CommonParameters</a>:
       -Verbose, -Debug, -ErrorAction, -ErrorVariable, -WarningAction, -WarningVariable,
       -OutBuffer -OutVariable.</pre>
<p>Set-BitsTransfer  modifies the properties of an existing BITS transfer job. Specify the job  to modify with the -BitsJob parameter or pass it through the pipeline.</p>
<p><b>Examples</b></p>
<p>Modify the priority of an existing BITS transfer job:</p>
<p><span class="code">PS C:\&gt; $myJob = Get-BitsTransfer -JobId 399a6f60-6a86-4e19-8295-60596019913c<br>
Set-BitsTransfer -BitsJob $myJob -Priority High</span></p>
<p>Retrieve a BITS transfer job and use the current users credentials to authenticate the user at the (autodetected) proxy server:</p>
<p><span class="code">PS C:\&gt; $myJob = Get-BitsTransfer -JobId 076cf8bb-5f79-409a-9d13-14cfd21f3bac<br>
PS C:\&gt; $keys = Get-Credential<br>
PS C:\&gt; Set-BitsTransfer -BitsJob $myJob -ProxyUsage AutoDetect -ProxyAuthentication $keys</span></p>
<p>Retrieve all the BitsJob objects owned by the current user, modify them to set an explicit list of proxy server and bypassed host names:</p>
<pre>PS C:\&gt; Get-BitsTransfer | Set-BitsTransfer -ProxyUsage Override -ProxyList http://proxy1,http://proxy2:81 -ProxyBypass http://directconnect</pre>
<p class="quote"><i>“In this world of change, nothing which comes stays, and nothing which goes is lost” ~ Anne Sophie Swetchine (1782-1857)</i></p>
<p><b>Related:</b></p>
<p><a href="complete-bitstransfer.html">Complete-BitsTransfer</a> - Complete a BITS transfer<br>
<a href="get-bitstransfer.html">Get-BitsTransfer</a> - Get a single or multiple BITS transfer<br>
<a href="bits.html">BITS PowerShell cmdlets</a></p><!-- #BeginLibraryItem "/Library/foot_ps.lbi" --><p>
<!-- PowerShell300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="6253539900"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="set-bitstransfer.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2015<br>
Some rights reserved</div><!-- #EndLibraryItem -->

