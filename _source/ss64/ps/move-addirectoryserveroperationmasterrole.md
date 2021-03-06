---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_ps.lbi" --><!-- #EndLibraryItem --><h1>Move-ADDirectoryServerOperationMasterRole</h1>
<p>Move the operation master role to an AD directory server.</p>
<pre>Syntax
      Move-ADDirectoryServerOperationMasterRole [-Identity] <i>ADDirectoryServer
        </i> [-OperationMasterRole] <i>ADOperationMasterRole</i>[] [-AuthType {Negotiate | Basic}]
            [-Credential <i>PSCredential</i>] [-Force] [-PassThru]
               [-Server <i>string</i>] [-Confirm] [-WhatIf] [<i>CommonParameters</i>]

Key
   -AuthType {<u>Negotiate</u> | Basic}
       The authentication method to use:
          Negotiate or 0
          Basic or 1
       A Secure Sockets Layer (SSL) connection is required for the Basic authentication method.

   -Credential <i>PSCredential</i>
       A user account that has permission to perform this action.
       The default is the current user unless the cmdlet is run from an AD PowerShell provider drive
       in which case the account associated with the drive is the default.

       "User64" or "Domain01\User64" or a <a href="get-credential.html">PSCredential</a> object.

   -Force

   -Identity <i>ADDirectoryServer</i>
       An AD server object:

        Distinguished Name of the NTDS Settings object
          Example: CN=NTDS Settings,CN=DC064,CN=Servers,CN=eame,CN=Sites,CN=Configuration,DC=corp,DC=SS64,DC=com

        Distinguished Name of the server object that represents the directory server
          Example: CN=DC064,CN=Servers,CN=eame,CN=Sites,CN=Configuration,DC=corp,DC=SS64,DC=com

        GUID (objectGUID) of server object under the configuration partition
          Example: a7ca1c0d-9a72-497b-a1c2-209104124102

        GUID (objectGUID) of NTDS settings object under the configuration partition
          Example: 768c44de-f72d-66e0-8a88-0523ca495f20

       The identifier in parentheses is the LDAP display name for the attribute.

       The cmdlet searches the default naming context or partition to find the object.
       If the identifier given is a DN, the partition to search will be computed from that DN.
       If two or more objects are found, the cmdlet returns a non-terminating error.

       This parameter can also accept an object through the pipeline.

    -OperationMasterRole <i>ADOperationMasterRole</i>[]
       One or more operation master roles to move to the specified directory server in
       AD Domain Services. Possible values:
          PDCEmulator  or 0
          RIDMaster    or 1
          InfrastructureMaster or 2
          SchemaMaster  or 3
          DomainNamingMaster or 4

       To specify multiple operation master roles, use a comma-separated list.

    -PassThru
       Returns the new or modified object.
       By default (i.e. if -PassThru is not specified), this cmdlet does not generate any output.

   -Server <i>string</i>
       The AD Domain Services instance to connect to, this may be any of: AD Lightweight Domain Services,
       AD Domain Services or Active Directory Snapshot instance.

       Examples: demo.SS64.com  demo  demoDC02.demo.ss64.com  demoDC02.demo.ss64.com:3268

   -Confirm
       Prompt for confirmation before executing the command.

    -WhatIf
       Describe what would happen if you executed the command, without actually executing the command.

   <a href="common.html">CommonParameters</a>:
       -Verbose, -Debug, -ErrorAction, -ErrorVariable, -WarningAction, -WarningVariable,
       -OutBuffer -OutVariable.</pre>
<p>Move-ADDirectoryServerOperationMasterRole  moves one or more operation master roles to a directory server. You can move operation master roles to a directory server in a different domain if the credentials are the same in both domains.</p>
<p>The <span class="code">-Identity</span> parameter specifies the directory server that receives the roles.</p>
<p>For AD LDS instances the syntax for the server object name is <span class="code"><i>computer-name</i>$<i>instance-name</i></span>. for 
example: <br>
<span class="code">server64$instance1</span><br>
To type this value in  PowerShell, you must use the backtick (`) as an <a href="syntax-esc.html">escape</a> character for the dollar
sign ($). Therefore, for this example, type the following: <br>
<span class="code">server64`$instance1</span><br>
<br>
Alternatively set the -Identity parameter to a directory server object <a href="syntax-variables.html">variable</a>.</p>
<p><b>Examples</b></p>
<p>Move the PDC Emulator role to the Domain Controller "SS64-DC1":</p>
<p class="code">PS C:\&gt; Move-ADDirectoryServerOperationMasterRole "SS64-DC1" PDCEmulator</p>
<p>Move the PDC Emulator and Schema Master roles to the Domain Controller "SS64-DC2":</p>
<p class="code">PS C:\&gt; Move-ADDirectoryServerOperationMasterRole -Identity "SS64-DC2" -OperationMasterRole PDCEmulator,SchemaMaster</p>
<p class="quote"><i>“The horse, the horse! The symbol of surging potency and power of movement, of action” ~ D.H. Lawrence</i></p>
<p><b>Related:</b></p>
<p><a href="move-addirectoryserver.html">Move-adDirectoryServer</a> - Move a domain controller in AD DS to a new site<a href="set-addomain.html"><br>
</a><a href="set-addomainmode.html">Set-adDomainMode</a> - Set the domain functional level for an AD domain</p><!-- #BeginLibraryItem "/Library/foot_ps.lbi" --><p>
<!-- PowerShell300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="6253539900"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="move-addirectoryserveroperationmasterrole.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

