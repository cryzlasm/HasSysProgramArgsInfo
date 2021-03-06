---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_ps.lbi" --><!-- #EndLibraryItem --><h1>Invoke-WmiMethod</h1> 
<p>Call Windows Management Instrumentation (WMI) methods.</p>
<pre>Syntax
    Invoke-WmiMethod <b>[-Class] <i>string</i></b> [[-ArgumentList] <i>Object</i>[]] [-Authentication <i>AuthenticationLevel</i>]
       [-Authority <i>string</i>] [-ComputerName &lt;string[]&gt;] [-Credential <i>PSCredential</i>]
          [-EnableAllPrivileges] [-Impersonation <i>ImpersonationLevel</i>] [-Locale <i>string</i>]
             [-Namespace <i>string</i>] [-Name] <i>string</i> [-AsJob] [-ThrottleLimit <i>int</i>]
                [-Confirm] [-WhatIf] [<i>CommonParameters</i>]

    Invoke-WmiMethod <b>-InputObject <i>ManagementObject</i></b> [-ArgumentList <i>Object</i>[]] [-Name] <i>string</i>
       [-AsJob] [-ThrottleLimit <i>int</i>]
          [-Confirm] [-WhatIf] [<i>CommonParameters</i>]

    Invoke-WmiMethod <b>-Path <i>string</i></b> [-ArgumentList <i>Object</i>[]] [-Authentication <i>AuthenticationLevel</i>]
       [-Authority <i>string</i>] [-ComputerName <i>string</i>[]] [-Credential <i>PSCredential</i>]
          [-EnableAllPrivileges] [-Impersonation <i>ImpersonationLevel</i>] [-Locale <i>string</i>]
             [-Namespace <i>string</i>] [-Name] <i>string</i> [-AsJob] [-ThrottleLimit <i>int</i>]
                [-Confirm] [-WhatIf] [<i>CommonParameters</i>]

    Invoke-WmiMethod  [-Authentication <i>AuthenticationLevel</i>]
       [-Authority <i>string</i>] [-ComputerName <i>string</i>[]] [-Credential <i>PSCredential</i>]
          [-EnableAllPrivileges] [-Impersonation <i>ImpersonationLevel</i>] [-Locale <i>string</i>]
             [-Namespace <i>string</i>] [-Name] <i>string</i> [-AsJob] [-ThrottleLimit <i>int</i>]
                [-Confirm] [-WhatIf] [<i>CommonParameters</i>]

Key
   -ArgumentList <i>Object</i>[]
       The parameters to pass to the called method.
       The value of this parameter must be an array of objects and they must appear in the
       order required by the called method. 

       Important: A second value of $null is required, otherwise the command will generate
       an error, such as "Unable to cast object of type 'System.Byte' to type 'System.Array'.".

       An example using an array of objects ($binSD) followed by a null value ($null) follows:

        PS C:\&gt; $acl = get-acl test.txt
        PS C:\&gt; $binSD = $acl.GetSecurityDescriptorBinaryForm()
        PS C:\&gt; invoke-wmimethod -class Win32_SecurityDescriptorHelper -Name BinarySDToSDDL -argumentlist $binSD, $null

   -AsJob
       Run the command as a background job.
       Results from remote computers are automatically returned to the local computer.
       To get the job results, use -Receive-Job
        
       Note: To use this parameter with remote computers, the local and remote
       computers must be configured for remoting. Additionally, you must start
       PowerShell in Elevated mode/"Run as administrator"

   -Authentication <i>AuthenticationLevel</i>
       The authentication level to be used with the WMI connection:

         Default | None | Connect | Call |  Packet | PacketIntegrity | PacketPrivacy | Unchanged

       -1: Unchanged
        0: Default
        1: None            No authentication in performed.
        2: Connect         Authentication is performed only when the client establishes
                             a relationship with the application.
        3: Call            Authentication is performed only at the beginning of each call
                             when the application receives the request.
        4: Packet          Authentication is performed on all the data that is received from the client.
        5: PacketIntegrity All the data that is transferred between the client
                             and the application is authenticated and verified.
        6: PacketPrivacy   The properties of the other authentication levels are used,
                             and all the data is encrypted.)

   -Authority <i>string</i>
       The authority to use to authenticate a remote WMI connection:
       for NTLM:      ntlmdomain:<i>DomainName</i>
       for Kerberos:  kerberos:<i>DomainName</i>\<i>ServerName</i>

   -class <i>string</i>
       The name of a WMI class (see list below).

   -computerName <i>string</i>[]
       The computer(s) to run against.
       A NETBIOS name, an IP address, full domain name or local (.)
       WMI information is retrieved via the WMI <a href="../nt/syntax-services.html">Service</a> (CIMOM)
       on the specified computers. This does not rely on PowerShell remoting.

   -credential <i>PSCredential</i>
       Use the specified credential to authenticate the user. Type a user name  
       or submit a credential object (created with <a href="get-credential.html">Get-Credential</a>)
       If you supply a user name, you will be prompted for a password.

   -EnableAllPrivileges
       Enable all the privileges of the current user before the command makes the WMI call.

   -Impersonation <i>ImpersonationLevel</i>
       The impersonation level to use:
         Default | Anonymous | Identify | Impersonate | Delegate
        
         0: Default (read the registry for the default, which is usually set to "3".)
         1: Anonymous (Hide the credentials of the caller.)
         2: Identify (Allow objects to query the credentials of the caller.)
         3: Impersonate (Allow objects to use the credentials of the caller.)
         4: Delegate (Allow objects to permit other objects to use the credentials of the caller.)

   -InputObject <i>ManagementObject</i>
       A ManagementObject object to use as input.
       When this parameter is used, all other parameters except -Flag and -Argument are ignored.

   -Locale <i>string</i>
       The preferred locale for WMI objects.
       Specify as an array in MS_<i>LCID</i> format in the preferred order.

   -Name <i>string</i>
       The name of the method to be invoked.
       This parameter is mandatory and cannot be null or empty.

   -namespace <i>string</i>
       When used with the -Class parameter, this parameter specifies the WMI repository namespace.

   -Path <i>string</i><br>       The WMI object path of a WMI class, or the WMI object path of an instance of a WMI class.
       The class or the instance specified must contain the method specified in the -Name parameter.

   -ThrottleLimit int
       Allow the user to specify a throttling value for the number of WMI operations
       that can be executed simultaneously. (Used together with -AsJob.)
         -throttlelimit applies only to the current command, not to the session or to the computer.<br>        <br>   -Confirm
       Prompt for confirmation before executing the command.<br>        <br>   -whatIf
       Describe what would happen if you executed the command without
       actually executing the command.

   <a href="common.html">CommonParameters</a>:
       -Verbose, -Debug, -ErrorAction, -ErrorVariable, -WarningAction, -WarningVariable,
       -OutBuffer -OutVariable.</pre>
<p>Standard <a href="get-alias.html">Aliases</a> for Invoke-WmiMethod:<span class="code"> iwmi</span></p>
<p>Invoke-WmiMethod calls WMI methods.</p>
<p>The WMI classes available will vary according to your operating system, to list WMI classes use<span class="code"> <a href="get-wmiobject.html">Get-WmiObject<br>
</a></span>Some common WMI classes:</p>
<p class="code"> Win32_computerSystem<br>
Win32_bios<br>
Win32_baseboard &nbsp;&nbsp;(Motherboard)<br>
Win32_processor &nbsp;&nbsp;(32+64 bit processor info) <br>
Win32_LogicalDisk &nbsp;(hard disk)<br>
Win32_PhysicalMemory<br>
Win32_operatingSystem &nbsp;(Virtual Memory)</p>
<p><b>Examples</b></p>
<p>Start an instance of Notepad by calling the Create method of the Win32_Process class:</p>
<p><span class="code">PS C:\&gt; invoke-wmimethod -path win32_process -name create -argumentlist notepad.exe</span></p>
<p>Rename a file by applying the Rename method to an instance of the CIM_DataFile class:</p>
<p><span class="code">PS C:\&gt; invoke-wmimethod -path "CIM_DataFile.Name='F:\test.txt'" -Name Rename -ArgumentList "F:\backup.txt"</span><br>
  <br>
  <i class="quote">“Drunk with power isn't the same as being drunk with booze” ~ Craig Ferguson</i></p>
<p><b>Related:</b></p>
<p><a href="get-wmiobject.html">Get-WmiObject</a> - Get WMI class information<br>
<a href="get-credential.html">Get-Credential</a> - Get a security credential object based on a user name and password.<br>
<a href="http://msdn.microsoft.com/en-us/library/aa394606%28VS.85%29.aspx">WQL (WMI Query Language)</a> - msdn.microsoft.com</p><!-- #BeginLibraryItem "/Library/foot_ps.lbi" --><p>
<!-- PowerShell300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="6253539900"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="invoke-wmimethod.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

