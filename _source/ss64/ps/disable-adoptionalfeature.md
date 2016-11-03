---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_ps.lbi" --><!-- #EndLibraryItem --><h1>Disable-adOptionalFeature</h1> 
<p>Disable an Active Directory optional feature.</p>
<pre>Syntax
      Disable-ADOptionalFeature [-Identity] <i>ADOptionalFeature</i>
         [-Scope] {Unknown | Forest | Domain}
            [-Target] <i>ADEntity</i> [-AuthType {<u>Negotiate</u> | Basic}]
               [-Credential <i>PSCredential</i>] [-PassThru ] [-Server <i>string</i>]
                  [-Confirm] [-WhatIf] [<i>CommonParameters</i>]

Key
   -AuthType {<u>Negotiate</u> | Basic}
       The authentication method to use: Negotiate (or 0), Basic (or 1)
       A Secure Sockets Layer (SSL) connection is required for Basic authentication.

   -Credential <i>PSCredential</i>
       The user account credentials to use to perform this task.
       The default credentials are those of the currently logged on user unless the
       cmdlet is run from an Active Directory PowerShell provider drive.
       If the cmdlet is run from such a provider drive, the account associated with the drive is the default.

       Type a user name, such as "User64" or "Domain64\User64" or specify a
       PSCredential object such as one generated by <a href="get-credential.html">Get-Credential</a> 

       If a user name is specified, the cmdlet will prompt for a password.

    -Identity <i>ADOptionalFeature</i>
       An AD optional feature object, provide one of the following values:
       (The identifier in parentheses is the LDAP display name for the attribute.)

          Fully qualified domain name
            Example: corp.SS64.com
          Feature GUID (featureGUID)
            Example: 564c3d2e-f72d-4d60-8a88-030d69495f21
          Object GUID (objectGUID)
            Example: 482ab21c-823e-601e-649a-ac7643d64ec9

       The cmdlet searches the default naming context or partition to find the object.
       If two or more objects are found, the cmdlet returns a non-terminating error.

       This parameter can also get this object through the pipeline or you can set this
       parameter to an object instance.

       This example shows how to set the parameter to a distinguished name.
          -Identity  "corp.SS64.com"

       This example shows how to set this parameter to a optional feature object instance named "optFeatureInstance".
          -Identity $optFeatureInstance
       
   -PassThru
       Return the new or modified object.
       By default (i.e. if -PassThru is not specified), this cmdlet does not generate any output.

   -Scope <i>ADOptionalFeatureScope</i>
       The scope at which the feature is enabled or disabled.
       Values for this parameter: Domain (or 0), Forest (or 1)

   -Server <i>string</i>
       The AD Domain Services instance to connect to, this may be a Fully qualified domain name,
       NetBIOS name, Fully qualified directory server name (with or without port number)

   -Target <i>ADEntity</i>
       The domain or forest in which to modify the optional feature.
       identify the target domain or forest by providing one of the following values:
          Fully-qualified domain name of the forest or domain
            Example: corp.SS64.com
          NetBIOS name of the forest or domain
            Example: corp
          Distinguished name of the domain naming context (domain NC)
            Example:  DC=corp,DC=SS64,DC=com

   -Confirm
       Prompt for confirmation before executing the command.

   -WhatIf
       Describe what would happen if you executed the command without actually executing the command.

   <a href="common.html">CommonParameters</a>:
       -Verbose, -Debug, -ErrorAction, -ErrorVariable, -WarningAction, -WarningVariable,
       -OutBuffer -OutVariable.</pre>
<p>Disable-ADOptionalFeature disables an AD optional feature that is associated with a particular Domain Mode or Forest Mode.<br>
<br>
The <span class="code">-Identity</span> parameter specifies the AD optional feature  to disable. Identify an optional feature by its distinguished name (DN), feature GUID, or object GUID. Alternatively set the parameter to 
an optional feature object <a href="syntax-variables.html">variable</a>, or  through the <a href="syntax-pipeline.html">pipeline</a>. For example, you can pipe from Get-ADOptionalFeature  to  Disable-ADOptionalFeature.<br>
<br>

The <span class="code">-Target</span> parameter specifies the domain or forest on which the optional feature is disabled. Identify the
domain or forest by its fully-qualified domain name (FQDN), NetBIOS name, or the distinguished name (DN) of the domain naming context (domain NC).</p>
<p><b>Examples</b></p>
<p>Disable the optional feature (name 'Feature 1') for the forest (NetBIOS name 'SS64'). This operation should be 
performed against the DC that holds the naming master FSMO role:</p>
<p><span class="code">PS C:\&gt; Disable-ADOptionalFeature 'Feature 1' -Scope ForestOrConfigurationSet -Target 'SS64' -Server Server64 </span></p>
<p>Disable the optional feature (dn 'CN=Feature 1,CN=Optional Features,CN=Directory Service,CN=Windows NT,CN=Services,CN=Configuration,DC=SS64,DC=com') for the forest (FQDN name 'SS64.com'). This operation should be performed
against the DC that holds the naming master <abbr title="Flexible Single Master Operations">FSMO</abbr> role: </p>
<p><span class="code">PS C:\&gt; Disable-ADOptionalFeature -Identity 'CN=Feature 1,CN=Optional Features,CN=Directory Service,CN=Windows NT,CN=Services,CN=Configuration,DC=SS64,DC=com' -Scope ForestOrConfigurationSet -Target 'SS64.com' -Server Server64</span></p>
<p class="quote"><i>“Disability is a matter of perception. If you can do just one thing well, you're needed by someone” ~ Martina Navratilova</i></p>
<p><b>Related:</b></p>
<p><a href="enable-adoptionalfeature.html">Enable-adOptionalFeature</a> - Enable an AD optional feature<br>
<a href="get-adoptionalfeature.html">Get-adOptionalFeature</a> - Get one or more AD optional features.</p><!-- #BeginLibraryItem "/Library/foot_ps.lbi" --><p>
<!-- PowerShell300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="6253539900"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="disable-adoptionalfeature.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2015<br>
Some rights reserved</div><!-- #EndLibraryItem -->
