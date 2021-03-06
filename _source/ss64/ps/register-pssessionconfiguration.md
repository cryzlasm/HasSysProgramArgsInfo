---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_ps.lbi" --><!-- #EndLibraryItem --><h1>Register-PSSessionConfiguration</h1> 
<p>Create and register a new PS session configuration.<br>
This is an advanced cmdlet for system administrators to manage custom session configurations for their users.</p>
<pre>Syntax
      Register-PSSessionConfiguration [-Name] <i>string</i> [-Force] 
         [-AssemblyName] <i>string</i> [-ConfigurationTypeName] <i>string</i> 
            [-ApplicationBase <i>string</i>] [-MaximumReceivedDataSizePerCommandMB <i>double</i>]
               [-MaximumReceivedObjectSizeMB <i>double</i>] [-NoServiceRestart]
                  [-ProcessorArchitecture <i>string</i>] [-SecurityDescriptorSDDL <i>string</i>]
                     [-ShowSecurityDescriptorUI] [-StartupScript <i>string</i>]
                        [-ThreadApartmentState {STA | MTA | <u>Unknown</u>}]
                           [-ThreadOptions {Default | UseNewThread | ReuseThread | UseCurrentThread}]
                              [-Confirm] [-WhatIf] [<i>CommonParameters</i>]

Key
   -Name <i>string</i>
       A name for the session configuration. This parameter is required.

   -ApplicationBase 
       The path to the assembly file (*.dll) that is specified in the value of -AssemblyName.
       Use this parameter when the value of the AssemblyName parameter does not include a path.
       The default is the current directory.
        
   -AssemblyName 
       The name of an assembly file (*.dll) in which the configuration type is defined.
       You can specify the path to the .dll in this parameter or in the value of -ApplicationBase.
        
       This parameter is required when -ConfigurationTypeName is specified.
        
    -ConfigurationTypeName <i>string</i>
       The fully qualified name of the Microsoft .NET Framework type that is used for this configuration. 
       The type that you specify must implement the
          System.Management.Automation.Remoting.PSSessionConfiguration class.
        
       To specify the assembly file (.dll) that implements the configuration type, use -AssemblyName
       and -AssemblyBase parameters.
        
       Creating a type allows you to control more aspects of the session configuration, such as
       exposing or hiding certain parameters of cmdlets, or setting data size and object size limits
       that users cannot override. 
        
       If you omit this parameter, the DefaultRemotePowerShellConfiguration class is used for
       the session configuration.
        
   -Force
       Suppress all user prompts and restart the WinRM service without prompting.
       Restarting the service makes the configuration change effective.
        
       To prevent a restart and suppress the restart prompt, use -NoServiceRestart.
        
   -MaximumReceivedDataSizePerCommandMB double
       Limit the amount of data that can be sent to this computer in any single remote command. 
       Enter the data size in megabytes (MB). The default is 50 MB.
        
       If a data size limit is defined in the configuration type that is specified in
       -ConfigurationTypeName, the limit in the configuration type is used and the value of
       this parameter is ignored.
        
   -MaximumReceivedObjectSizeMB <i>double</i>
       Limit the amount of data that can be sent to this computer in any single object. 
       Enter the data size in megabytes (MB). The default is 10 MB.
        
       If an object size limit is defined in the configuration type that is specified
       in -ConfigurationTypeName, the limit in the configuration type is used and the value of
       this parameter is ignored.
        
   -NoServiceRestart
       Do not restart the WinRM service and suppress the prompt to restart the service.
        
       By default, when you enter a Register-PSSessionConfiguration command, you are prompted to
       restart the WinRM service to make the new session configuration effective.
       Until the WinRM service is restarted, the new session configuration is not effective.
        
       To restart the WinRM service without prompting, use -Force.
       To restart the WinRM service manually, use <a href="restart-service.html">Restart-Service</a>.
        
   -ProcessorArchitecture <i>string</i>
       A processor architecture for the configuration.
       This value determines whether a 32-bit or 64-bit version of the process that hosts
       PowerShell is started when the configuration is used.
       Valid values are x86, AMD64, and IA64.
        
       The default is determined by the processor architecture of the computer that hosts
       the session configuration.
        
   -SecurityDescriptorSDDL <i>string</i>
       A Security Descriptor Definition Language (SDDL) string for the configuration. 
        
       This string determines the permissions that are required to use the new session configuration.
       To use a session configuration in a session, users must have at least "Execute(Invoke)"
       permission for the configuration.
        
       If the security descriptor is complex, consider using the ShowSecurityDescriptorUI parameter
       instead of this parameter. You cannot use both parameters in the same command.
        
       If you omit this parameter, the root SDDL for the WinRM service is used for this configuration.
       To view or change the root SDDL, use the WS-Management provider.
       For example "get-item wsman:\localhost\service\rootSDDL".
       For more information about the WS-Management provider, type "get-help wsman".
        
   -ShowSecurityDescriptorUI
       Display a property sheet that help create the SDDL for the session configuration.
       The property sheet appears after you run Register-PSSessionConfiguration and restart the WinRM service.
        
       When setting the permissions for the configuration, remember that users must have at
       least "Execute(Invoke)" permission to use the session configuration in a session.
        
       You cannot use -SecurityDescriptorSDDL and -ShowSecurityDescriptorUI in the same command.
        
   -StartupScript <i>string</i>
       The fully qualified path to a Windows PowerShell script. The specified script runs in
       the new session that uses the session configuration. 
        
       You can use the script to further configure the session. If the script generates an error
       (even a non-terminating error), the session is not created and the user's New-PSSession command fails.
        
   -ThreadApartmentState {STA | MTA | <u>Unknown</u>}
       The apartment state for threads in the session.
        
   -ThreadOptions <i>PSThreadOptions</i>
       Define how threads are created and used when a command is executed in the session.
       Valid values are Default, ReuseThread, UseCurrentThread, and UseNewThread.
       UseCurrentThread is the default.

   -confirm
       Prompt for confirmation before executing the command.

   -whatIf
       Describe what would happen if you executed the command without actually
       executing the command.

   <a href="common.html">CommonParameters</a>:
       -Verbose, -Debug, -ErrorAction, -ErrorVariable, -WarningAction, -WarningVariable,
       -OutBuffer -OutVariable.</pre>
<p> Every Windows PowerShell remote session uses a session configuration. When users create a session that connects to 
the computer, they can select a configuration or use the default configurations that are registered when you enable
Windows PowerShell remoting. Users can also set the $PSSessionConfigurationName preference variable, which specifies a default configuration for sessions created in the current session. <br>
<br>
The session configuration configures the environment for the session. You can define the configuration by using an 
assembly that implements a new configuration class and by using a script that runs in the session. The configuration can determine which commands are available in the session, and it can include settings that protect the computer,
such as those that limit the amount of data that the session can receive remotely in a single object or command. 
You can also specify a security descriptor that determines the permissions that are required to use the configuration.</p>
<p><b>Examples</b></p>
<p>Register a  session configuration called SS64, also use -ConfigurationTypeName to specify a new class that further configures the session: </p>
<pre>PS C:&gt; register-pssessionConfiguration -name SS64 -applicationBase c:\ps_cfg\ -assemblyName SS64.dll -configurationTypeName SS64</pre>
<p>Register a  configuration called Tortoise on the local computer, and assign a startup script:</p>
<pre>PS C:&gt; register-pssessionConfiguration -name Tortoise -startupScript c:\ps\ss64.ps1</pre>
<p>Register the AdminShell session configuration:</p>
<pre>PS C:&gt; $sddl = "O:NSG:BAD:P(A;;GA;;;BA)S:P(AU;FA;GA;;;WD)(AU;FA;SA;GWGX;;WD)"
PS C:&gt; register-pssessionconfiguration -name AdminShell -securityDescriptorSDDL $sddl _
-maximumReceivedObjectSizeMB 20</pre>
<blockquote>
<p> The first command saves a custom SDDL in the $sddl variable. <br>
<br>
The second command registers the new shell using the SecurityDescritorSDDL parameter to specify the SDDL in the value of the $sddl variable and the MaximumReceivedObjectSizeMB parameter to increase the object size limit. <br>
<br>
As an alternative to using <span class="code">-SecurityDescriptorSDDL</span>, you can use <span class="code">-ShowSecurityDescriptorUI</span>, which displays a property sheet that you can use to set permissions for the session configuration. When you click "OK" in the property sheet, the tool generates an SDDL for the session configuration.</p>
</blockquote>
<p>Use dir (Get-ChildItem) to display Shell configurations, including the two default configurations that come with Windows PowerShell:</p>
<pre>PS C:&gt; dir wsman:\localhost\plugin
</pre>
<p>Creates and register the 'WithProfile' session configuration on the local computer, assign a StartupScript. The content of the specified script, Add-Profile.ps1, is also displayed. The script contains a single command that 
uses <a href="syntax-operators.html#dot">dot sourcing</a> to run the user's CurrentUserAllHosts profile in the current scope of the session.:</p>
<pre>PS C:&gt; register-pssessionconfiguration -name WithProfile -startupScript add-profile.ps1
    
    # Add-Profile.ps1<br>    . c:\users\demo1\documents\windowspowershell\profile.ps1</pre>
<p class="quote"><i>"All of Western logic is based upon the law of
contradiction - if two things contradict, then
at least one of them is false. But Islamic logic
is dualistic; two things can contradict each
other and both are true" - Bill Warner</i></p>
<p><b>Related:</b></p>
<p><a href="get-pssessionconfiguration.html">Get-PSSessionConfiguration</a> - Get the registered PS session configuration<br>
<a href="unregister-pssessionconfiguration.html">Unregister-PSSessionConfiguration</a> - Delete registered PS session configuration</p><!-- #BeginLibraryItem "/Library/foot_ps.lbi" --><p>
<!-- PowerShell300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="6253539900"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="register-pssessionconfiguration.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2015<br>
Some rights reserved</div><!-- #EndLibraryItem -->

