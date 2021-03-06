---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_ps.lbi" --><!-- #EndLibraryItem --><h1>Remove-ADUser</h1> 
<p>Remove an Active Directory user.</p>
<pre>Syntax
      Remove-ADUser [-Identity] <i>ADUser</i> [-AuthType {<u>Negotiate</u> | Basic}]
         [-Credential <i>PSCredential</i>] [-Partition <i>string</i>]
            [-Server <i>string</i>] [-Confirm] [-WhatIf] [<a href="common.html"><i>CommonParameters</i></a>]

Key
   -AuthType {<u>Negotiate</u> | Basic}
       The authentication method to use: Negotiate (or 0), Basic (or 1)
       A Secure Sockets Layer (SSL) connection is required for Basic authentication.

   -Credential <i>PSCredential</i>
       A user account that has permission to perform this action.
       The default is the current user unless the cmdlet is run from an AD PowerShell provider drive
       in which case the account associated with the drive is the default.

       "User64" or "Domain01\User64" or a <a href="get-credential.html">PSCredential</a> object.

   -Identity <i>ADUser</i>
       Specify an AD user object by providing one of the following values.
       (The identifier in parentheses is the LDAP display name for the attribute.)

          Distinguished Name 
            Example: CN=GailMoss,OU=europe,CN=users,DC=corp,DC=SS64,DC=com 
          GUID (objectGUID) 
            Example: 599c4d2e-f72d-4d20-8a78-030d69495f20
          Security Identifier (objectSid) 
            Example: S-1-5-21-5165297888-301467370-576410423-1803
          Security Accounts Manager (SAM) Account Name (sAMAccountName)
            Example: GailMoss

       The cmdlet searches the default naming context or partition to find the object.
       If two or more objects are found, the cmdlet returns a non-terminating error.

       This parameter can also get this object through the pipeline or you can set this
       parameter to an object instance.

   -Partition <i>string</i>
       The distinguished name of an AD partition.
       The distinguished name must be one of the naming contexts on the current
       directory server. The cmdlet searches this partition to find the object defined by
       the -Identity parameter. 
       The following two examples show how to specify a value for this parameter.
          -Partition "CN=Configuration,DC=EUROPE,DC=TEST,DC=SS64,DC=COM"
          -Partition "CN=Schema,CN=Configuration,DC=EUROPE,DC=TEST,DC=SS64,DC=COM"
          
       In many cases, a <a href="partition-defaults.html">default value</a> will be used for the Partition parameter if no value
       is specified.

   -Server <i>string</i>
       The AD Domain Services instance to connect to, this may be a Fully qualified domain name,
       NetBIOS name, Fully qualified directory server name (with or without port number) or AD Snapshot instance.

       Examples: demo.SS64.com  demo  demoDC02.demo.ss64.com  demoDC02.demo.ss64.com:3268

   -Confirm
       Prompt for confirmation before executing the command.

    -WhatIf
       Describe what would happen if you executed the command, without actually executing the command.

   <a href="common.html">CommonParameters</a>:
       -Verbose, -Debug, -ErrorAction, -ErrorVariable, -WarningAction, -WarningVariable,
       -OutBuffer -OutVariable.</pre>
<p>Remove-ADUser  removes an Active Directory user.<br>
<br>
The <span class="code">-Identity</span> parameter specifies the AD user to remove. Identify a user with a distinguished 
name (DN), GUID, security identifier (SID) or security accounts manager (SAM) account name. The Identity parameter can also be set to a user object <a href="syntax-variables.html">variable</a>, or a user object (<a href="get-aduser.html">Get-ADUser</a>) passed through the <a href="syntax-pipeline.html">pipeline</a>. <br>
If the ADUser is being identified by its DN, the -Partition parameter will be automatically determined.<br>
<br>
For AD LDS environments, the -Partition parameter must be specified except in the following two conditions:<br>
-The cmdlet is run from an Active Directory provider drive.<br>
-A default naming context or partition is defined for the AD LDS environment. To specify a default naming context
for an AD LDS environment, set the msDS-defaultNamingContext property of the Active Directory directory service agent (DSA) object (nTDSDSA) for the AD LDS instance.</p>
<p><b>Examples</b></p>
<p>Remove the user with samAccountName 'GailMoss':</p>
<p><span class="code">PS C:\&gt; Remove-ADUser -Identity GailMoss</span></p>
<p>Search for any users that have disabled accounts and remove them: </p>
<p><span class="code">PS C:\&gt; Search-ADAccount -AccountDisabled | where {$_.ObjectClass -eq 'user'} | Remove-ADUser</span></p>
<p>Remove the user with DistinguishedName 'CN=Gail Moss,OU=UserAccounts,DC=SS64,DC=com': </p>
<p><span class="code">PS C:\&gt; Remove-ADUser -Identity "CN=Gail Moss,OU=UserAccounts,DC=SS64,DC=com"</span></p>
<p class="quote"><i> “.. almost everything – all external expectations, all pride, all fear of embarrassment or failure - these things just fall away in the face of death, leaving only what is truly important” ~ Steve Jobs</i></p>
<p><b>Related:</b></p>
<p><a href="remove-qadobject.html">Remove-QADObject</a> - Delete object(s) from Active Directory (Quest) <br>
<a href="new-aduser.html">New-adUser</a> - Create a new AD user.<br>
<a href="set-aduser.html">Set-adUser</a> - Modify an AD user.</p><!-- #BeginLibraryItem "/Library/foot_ps.lbi" --><p>
<!-- PowerShell300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="6253539900"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="remove-aduser.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2015<br>
Some rights reserved</div><!-- #EndLibraryItem -->

