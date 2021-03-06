---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_ps.lbi" --><!-- #EndLibraryItem --><h1>Invoke-WSManAction</h1> 
<p>Invoke an action on a specified object via WSMan (Web Services-Management). The objects is specified with -ResourceURI</p>
<pre>Syntax
      Invoke-WSManAction [-ApplicationName <i>string</i>] [-ComputerName <i>string</i>]
         [-Credential <i>PSCredential</i>] [-Port <i>int</i>] [-UseSSL] [-ResourceURI] <b><i>Uri</i></b>
            [-Action] <i>string</i> [-Authentication <i>AuthMechanism</i>]
               [-FilePath <i>File</i>] [-OptionSet <i>hashtable</i>] [-SelectorSet <i>hashtable</i>]
                  [-SessionOption <i>hashtable</i>] [-ValueSet <i>hashtable</i>] [<i>CommonParameters</i>]<br>
      Invoke-WSManAction [-ConnectionURI <i>Uri</i>] [-ResourceURI] <b><i>Uri</i></b>
         [-Action] <i>string</i> [-Authentication <i>AuthenticationMechanism</i>]
            [-FilePath <i>File</i>] [-OptionSet <i>hashtable</i>] [-SelectorSet <i>hashtable</i>]
               [-SessionOption <i>hashtable</i>] [-ValueSet <i>hashtable</i>] [<i>CommonParameters</i>]

Key
   -Action <i>string</i>
       The method to run on the management object specified by -ResourceURI and selectors.

   -ApplicationName <i>string</i>
      The application name in the connection. The default Application Name is "WSMAN"
      The complete identifier for the remote endpoint is in the following format:
           <i>transport</i>://<i>server</i>:<i>port</i>/<i>ApplicationName</i>
      For example:
           http://server64:8080/WSMAN

      IIS will forward requests with this endpoint to the specified application.

      This default setting of "WSMAN" is appropriate for most uses. This parameter
      is designed to be used when numerous computers establish remote connections to
      one computer that is running PowerShell.
      In this case, IIS hosts Web Services for Management (WS-Management) for efficiency.

   -Authentication <i>AuthMechanism</i>
      The authentication mechanism to be used at the server. Possible values are:
        
      - Basic      Send username and password in clear text.
      - Default    Use the authentication method implemented by WS-Management protocol. This is the default.
      - Digest     Challenge-response scheme using a server-specified data string for the challenge.
      - Kerberos   Authenticate by using Kerberos certificates.
      - Negotiate  Challenge-response that negotiates an authentication scheme.
                    e.g. Kerberos protocol or NTLM.
      - CredSSP    Use Credential Security Service Provider (CredSSP) authentication, delegate
                   credentials to a remote computer. This increases the security risk, if the remote 
                   computer is compromised, the credentials could be used to control the network session.

   -ComputerName <i>string</i>
      The computer against which you want to run the management operation.
      A fully qualified domain name, NetBIOS name, or an IP address.
      Use the local computer name, localhost, or a dot (.) to specify the local computer.
      The local computer is the default. When the remote computer is in a different domain,
      use a fully qualified domain name. You can pipe a value for ComputerName.
        
   -ConnectionURI <i>Uri</i>
      The connection endpoint. The format of this string is: 
        
         <i>Transport</i>://<i>Server</i>:<i>Port</i>/<i>ApplicationName</i>. 
        
      The following string is a properly formatted value for this parameter: 
        
         http://Server01:8080/WSMAN. The URI must be fully qualified.
        
   -Credential <i>PSCredential</i>
      A user account that has permission to perform this action. default=current user.
      e.g. "User01", "Domain01\User01", or "User@Domain.com". Or a PSCredential object, such as 
      returned by the Get-Credential cmdlet. When you type a user name, you will be prompted for a password.

   -FilePath <i>File</i>
      The path of a file that is used to update a management resource.
      Specify the management resource by using the -ResourceURI parameter and the -SelectorSet parameter.
      For example, the following command uses the -FilePath parameter:

        invoke-wsmanaction -action stopservice -resourceuri wmicimv2/Win32_Service -SelectorSet @{Name="spooler"} -FilePath:c:\input.xml -authentication default

      This command calls the StopService method on the Spooler service by using input from a file.
      The file, Input.xml, contains the following:

      &lt;p:StopService_INPUT xmlns:p="http://schemas.microsoft.com/wbem/wsman/1/wmi/root/cimv2/Win32_Service"/&gt;

   -OptionSet <i>hashtable</i>
      Pass a set of switches to the service to modify or refine the nature of the request.
      These are similar to switches used in command-line shells in that they are service specific.
      Any number of options can be specified. 
        
      The following example demonstrates the syntax that passes the values 1, 2, and 3 for
      the a, b, and c parameters:
        
              -OptionSet @{a=1;b=2;c=3}

   -Port <i>int</i>
      The port to use when the client connects to the WinRM service.
      When the transport is HTTP, the default port is 80.
      When the transport is HTTPS, the default port is 443.
      When you use HTTPS as the transport, the value of the -ComputerName parameter must match the server's 
      certificate common name (CN). However, if the SkipCNCheck parameter is specified as 
      part of the SessionOption parameter, then the certificate common name of the server does not have 
      to match the host name of the server. The SkipCNCheck parameter should be used only for trusted
      computers.

   -ResourceURI <i>Uri</i>
      Contains the Uniform Resource Identifier (URI) of the resource class or instance.
      The URI is used to identify aspecific type of resource, such as disks or processes, on a computer.
      A URI consists of a prefix and a path to a resource. For example:

             http://schemas.microsoft.com/wbem/wsman/1/wmi/root/cimv2/Win32_LogicalDisk
             http://schemas.dmtf.org/wbem/wscim/1/cim-schema/2/CIM_NumericSensor

   -SelectorSet <i>hashtable</i><br>      A set of value pairs that are used to select particular management resource instances.
      The SelectorSet parameter is used when more than one instance of the resource exists.
        <br>      The following example shows how to enter a value for this parameter: <br>        <br>            -SelectorSet @{Name="WinRM";ID="yyy"}

   -SessionOption <i>hashtable</i>
      Define a set of extended options for the WS-Management session.
      Enter a SessionOption object that you create by using <a href="new-wsmansessionoption.html">New-WSManSessionOption</a>.
        
   -UseSSL
      Use the Secure Sockets Layer (SSL) protocol to establish a connection to the remote computer.
      By default, SSL is not used. 
        
      WS-Management encrypts all PowerShell content that is transmitted over the network.
      The UseSSL parameter lets you specify the additional protection of HTTPS instead of HTTP.
      This will fail if SSL is not available on the port that is used for the connection.

   -ValueSet <i>hashtable</i><br>      A hash table that helps modify a management resource.
      Specify the management resource by using -ResourceURI and -SelectorSet.

   <a href="common.html">CommonParameters</a>:
       -Verbose, -Debug, -ErrorAction, -ErrorVariable, -WarningAction, -WarningVariable,
       -OutBuffer -OutVariable.</pre>
<p>Invoke-WSManAction  uses the WSMan connection/transport layer to run the action.</p>
<p><b>Examples</b></p>
<p>Call the StartService method of the Win32_Service WMI class instance that corresponds to the Spooler 
service: </p>
<p><span class="code">PS C:\&gt;    invoke-wsmanaction -action startservice -resourceuri wmicimv2/win32_service -selectorset @{name="spooler"} -authentication default</span></p>
<p>Call  the StartService method of the Win32_Service WMI class instance that corresponds to the Spooler 
service. Because the ComputerName parameter is specified, the command runs against the remote server64 computer: </p>
<p><span class="code">PS C:\&gt; invoke-wsmanaction -action startservice -resourceuri wmicimv2/win32_service  -selectorset @{name="spooler"} -computername server64 -authentication default</span></p>
<p>The return value indicates whether the action was successful. In this case, a return value of 0 indicates success. 
A return value of 5 indicates that the service is already started.<br>
<i><br>
<span class="quote">“Action conquers fear” ~ Peter Nivio Zarlenga</span></i></p>
<p><b>Related:</b><br>
<br>
  <a href="connect-wsman.html">Connect-WSMan</a> - Connect to the WinRM service on a remote computer<br>
<a href="../nt/psexec.html">psExec</a> - Execute process remotely
</p><!-- #BeginLibraryItem "/Library/foot_ps.lbi" --><p><script async="" src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
<!-- PowerShell300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="6253539900"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2015<br>
Some rights reserved</div><!-- #EndLibraryItem -->

