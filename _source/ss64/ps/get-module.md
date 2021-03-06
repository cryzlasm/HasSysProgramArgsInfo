---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_ps.lbi" --><!-- #EndLibraryItem --><h1>Get-Module</h1> 
<p>Get the modules that have been imported or that can be imported into the current session.</p>
<pre>Syntax
      Get-Module [[-FullyQualifiedName] <i>String</i>[]] [[-Name] <i>String</i>[]]
         [-All] [<a href="common.html"><i>CommonParameters</i></a>]
    
      Get-Module [[-FullyQualifiedName] <i>String</i>[]] [[-Name] <i>String</i>[]]
         [-All] [-Refresh] -ListAvailable [<a href="common.html"><i>CommonParameters</i></a>]
    
      Get-Module [[-Name] <i>String</i>[]] [-CimNamespace <string>] [-CimResourceUri <i>Uri</i>]
         [-ListAvailable] [-Refresh] -CimSession <cimsession> [<a href="common.html"><i>CommonParameters</i></a>]
    
      Get-Module [[-FullyQualifiedName] <i>String</i>[]] [[-Name] <i>String</i>[]]
         [-ListAvailable] [-Refresh] -PSSession  [<a href="common.html"><i>CommonParameters</i></a>]

Key
   -All
       Gets all modules in each module folder, including nested modules, manifest (.psd1) files, script module 
       (.psm1) files, and binary module (.dll) files. Without the All parameter, Get-Module gets only the default 
       module in each module folder.

   -CimNamespace <i>String</i>
       Specifies the namespace of an alternate CIM provider that exposes CIM modules. The default value is the 
       namespace of the Module Discovery WMI provider.

       Use this parameter to get CIM modules from computers and devices that are not running a Windows operating 
       system. (PowerShell 3.0+)

   -CimResourceUri <i>Uri</i>
       Specifies an alternate location for CIM modules. The default value is the resource URI of the Module Discovery 
       WMI provider on the remote computer.

       Use this parameter to get CIM modules from computers and devices that are not running a Windows operating 
       system. (PowerShell 3.0+)

   -ListAvailable
       Gets all installed modules. Get-Module gets modules in paths listed in the PSModulePath environment variable. 
       Without this parameter, Get-Module gets only the modules that are both listed in the PSModulePath environment 
       variable, and that are loaded in the current session. ListAvailable does not return information about modules 
       that are not found in the PSModulePath environment variable, even if those modules are loaded in the current 
       session.

   -FullyQualifiedName <i>String</i>[]
       Gets modules with names that are specified in the form of ModuleSpecification objects (described by the 
       Remarks section of ModuleSpecification Constructor (Hashtable) on MSDN). For example, the FullyQualifiedName 
       parameter accepts a module name that is specified in the format @{ModuleName = "modulename"; ModuleVersion = 
       "version_number"} or @{ModuleName = "modulename"; ModuleVersion = "version_number"; Guid = "GUID"}. ModuleName 
       and ModuleVersion are required, but Guid is optional.

       You cannot specify the -FullyQualifiedName parameter in the same command as a Name parameter; the two 
       parameters are mutually exclusive.

   -Name <i>String</i>[]
       Gets only modules with the specified names or name patterns. Wildcards are permitted. You can also pipe the 
       names to Get-Module. You cannot specify the FullyQualifiedName parameter in the same command as a Name 
       parameter; the two parameters are mutually exclusive. The Name parameter cannot accept a module GUID as a 
       value; to return modules by specifying a GUID, use the FullyQualifiedName parameter instead of the Name 
       parameter.

   -CimSession <i>CimSession</i>
       Specifies a CIM session on the remote computer. Enter a variable that contains the CIM session or a command 
       that gets the CIM session, such as a Get-CIMSession command.

       Get-Module uses the CIM session connection to get modules from the remote computer. When you import the module 
       (by using the Import-Module cmdlet) and use the commands from the imported module in the current session, the 
       commands actually run on the remote computer.

       You can use this parameter to get modules from computers and devices that are not running a Windows operating 
       system, and Windows computers that have Windows PowerShell, but do not have Windows PowerShell remoting 
       enabled.

       The CimSession parameter gets all modules in the CIMSession. However, you can import only CIM-based and Cmdlet 
       Definition XML (CDXML)-based modules.

   -PSSession <i>PSSession</i>
       Gets the modules in the specified user-managed Windows PowerShell session (PSSession). Enter a variable that 
       contains the session, a command that gets the session, such as a Get-PSSession command, or a command that 
       creates the session, such as a New-PSSession command.

       When the session is connected to a remote computer, the ListAvailable parameter is required.

       A Get-Module command with the PSSession parameter is equivalent to using the Invoke-Command cmdlet to run a 
       Get-Module -ListAvailable command in a PSSession. (PowerShell 3.0+)

   -Refresh
       Refreshes the cache of installed commands. The command cache is created when the session starts. It enables 
       the Get-Command cmdlet to get commands from modules that are not imported into the session.

       This parameter is designed for development and testing scenarios in which the contents of modules have changed 
       since the session started.

       When the Refresh parameter is used in a command, the ListAvailable parameter is required. (PowerShell 3.0+)

   <a href="common.html">CommonParameters</a>:
       -Verbose, -Debug, -ErrorAction, -ErrorVariable, -WarningAction, -WarningVariable,
       -OutBuffer -OutVariable.</cimsession></string></pre>
<p>Import-Module  adds one or more modules to the current session. The modules that you import must be      installed on the local computer or a remote computer.          </p>
<p>Beginning in Windows PowerShell 3.0, installed modules are automatically imported to the session when you use any      commands or providers in the module. However, you can still use  Import-Module to import a module and      you can enable and disable automatic module importing by using the <span class="code">$PSModuleAutoloadingPreference</span> <a href="syntax-variables.html">preference      variable</a>. </p>
<p>To manage remote Windows computers that have  PowerShell and PowerShell remoting enabled, create a      PSSession on the remote computer and then use the -PSSession parameter of <span class="code">Get-Module</span> to get the  PowerShell      modules in the PSSession. When you import the modules, and then use the imported commands in the current session,      the commands run implicitly in the PSSession on the remote computer.</p>
<p>Standard <a href="get-alias.html">Aliases</a> for Get-Module:<span class="code"> <b>gmo</b></span></p>
<p><b>Examples</b></p>
<p>Get modules that have been imported into the current session:</p>
<p><span class="code">PS C:\&gt; Get-Module</span><br>
  <br>
  Get the modules that are installed on the computer and can be imported into the current session:</p>
<p class="code">PS C:\&gt; Get-Module -ListAvailable</p>
<p>Get all module files (imported and available) and groups them by module name. This lets you see the      module files that each script is exporting:</p>
<pre>PS C:\&gt; Get-Module -ListAvailable -All | Format-Table -Property Name, Moduletype, Path -Groupby Name</pre>
<p> for more examples see: get-help Get-Module -examples</p>
<p class="quote"><i>“Part of me is afraid to get close to people because I'm afraid that they're going to leave” ~</i> <i>Marilyn Manson</i></p>
<p><b>Related:</b></p>
<p><a href="import-module.html">Import-Module</a> -   Add a module to the session <br>
<a href="new-module.html">New-Module</a> -   Create a new dynamic module (only in memory) <br>
<a href="remove-module.html">Remove-Module</a> -   Remove a module from the current session<br>
</p><!-- #BeginLibraryItem "/Library/foot_ps.lbi" --><p>
<!-- PowerShell300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="6253539900"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="get-module.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2015<br>
Some rights reserved</div><!-- #EndLibraryItem -->

