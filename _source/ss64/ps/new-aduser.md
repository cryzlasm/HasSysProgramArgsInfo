---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_ps.lbi" --><!-- #EndLibraryItem --><h1>New-ADUser</h1> 
<p>Create a new Active Directory user.</p>
<pre>Syntax
      New-ADUser [-Name] <i>string</i>  <i>ADProperties</i>[...]
        [-AccountExpirationDate <i>DateTime</i>] [-AccountNotDelegated <i>bool</i>]
           [-AccountPassword <i>SecureString</i>] [-AllowReversiblePasswordEncryption <i>bool</i>]
              [-AuthType {<u>Negotiate</u> | Basic}] [-CannotChangePassword <i>bool</i>]
                 [-Certificates <i>X509Certificate</i>[]] [-ChangePasswordAtLogon <i>bool</i>]
                    [-Credential <i>PSCredential</i>] [-Enabled <i>bool</i>] [-Instance <i>ADUser</i>] [-PassThru]
                       [-PasswordNeverExpires <i>bool</i>] [-PasswordNotRequired <i>bool</i>]
                          [-Path <i>string</i>] [-ProfilePath <i>string</i>] [-SamAccountName <i>string</i>]
                             [-ScriptPath <i>string</i>] [-Server <i>string</i>] [-ServicePrincipalNames <i>string</i>[]] 
                                [-SmartcardLogonRequired <i>bool</i>] [-TrustedForDelegation <i>bool</i>]
                                   [-Type <i>string</i>] [-UserPrincipalName <i>string</i>]
                                      [-Confirm] [-WhatIf] [<a href="common.html"><i>CommonParameters</i></a>] 

Key
   <i>ADProperties</i>
               [-City <i>string</i>] [-Company <i>string</i>] [-Country <i>string</i>]  
               [-Department <i>string</i>] [-Description <i>string</i>] [-DisplayName <i>string</i>] 
               [-Division <i>string</i>] [-EmailAddress <i>string</i>] [-EmployeeID <i>string</i>]
               [-EmployeeNumber <i>string</i>] [-Fax <i>string</i>] [-GivenName <i>string</i>]
               [-HomeDirectory <i>string</i>] [-HomeDrive <i>string</i>] [-HomePage <i>string</i>] 
               [-HomePhone <i>string</i>] [-Initials <i>string</i>] [-LogonWorkstations <i>string</i>] 
               [-Manager <i>ADUser</i>] [-MobilePhone <i>string</i>] [-Office <i>string</i>] [-OfficePhone <i>string</i>]
               [-Organization <i>string</i>] [-OtherAttributes <i>hashtable</i>] [-OtherName <i>string</i>]
               [-POBox <i>string</i>] [-PostalCode <i>string</i>] [-State <i>string</i>] [-StreetAddress <i>string</i>]
               [-Surname <i>string</i>] [-Title <i>string</i>]

   -AccountExpirationDate <i>[System.DateTime]</i>
       The expiry date for the account. (0=never expires)        
       Use PowerShell <a href="syntax-dateformats.html">DateTime syntax</a>
       Time is assumed to be local time unless otherwise specified.
       The default time is 12:00 (Midday) local time.
       The default date is the current date.
       Examples using GMT, UTC and local time:
        -AccountExpirationDate "Mon, 17 Apr 2011 21:22:48 GMT"
        -AccountExpirationDate "2011-04-17T14:22:48.0000000" 
        -AccountExpirationDate "04/17/2011 2:22:48 PM"
       The LDAP Display name (ldapDisplayName) for this property is accountExpires.

   -AccountNotDelegated <i>bool</i>
       Security delegation. When True, the security context of the user is not
       delegated to a service even when the service account is set as trusted for
       Kerberos delegation. Sets the AccountNotDelegated property for an AD account.
       This parameter also sets the ADS_UF_NOT_DELEGATED flag of the AD User Account
       Control (UAC) attribute.
       Values for this parameter: $false or 0, $true or 1

   -AccountPassword <i>SecureString</i>
       A new password value for an account.
       This value is stored as an encrypted string.
       If an empty or $null password is specified a Random password will be set.
       If the password does not meet password policy the account will be disabled
        
       User accounts, by default, are created without a password.
       A valid user account password may also be specified manually.
       User accounts will never be enabled unless a valid password is set
                
       The following example will prompt for a password.
          -AccountPassword (Read-Host -AsSecureString "AccountPassword")

   -AllowReversiblePasswordEncryption <i>bool</i>
       Whether reversible password encryption is allowed for the account.
       This parameter sets the AllowReversiblePasswordEncryption property of the account.
       This also sets the ADS_UF_ENCRYPTED_TEXT_PASSWORD_ALLOWED flag of
       the AD User Account Control (UAC) attribute.
       Values for this parameter: $false or 0, $true or 1

   -AuthType {<u>Negotiate</u> | Basic}
       The authentication method to use: Negotiate (or 0), Basic (or 1)
       A Secure Sockets Layer (SSL) connection is required for Basic authentication.

   -CannotChangePassword <i>bool</i>
       Whether the account password can be changed.
       Sets the 'CannotChangePassword' property of an account.
       Values for this parameter: $false or 0, $true or 1

   -Certificates <i>X509Certificate[]</i>
       Modifies the DER-encoded X.509v3 certificates of the account.
       These certificates include the public key certificates issued to
       this account by the Microsoft Certificate Service. 
       Sets the Certificates property of the account object.
       The LDAP Display Name for this property is "userCertificate".

       Syntax to add/remove/replace/clear:
         -Certificates @{Add=<i>value1</i>,<i>value2</i>,...}
         -Certificates @{Remove=<i>value3</i>,<i>value4</i>,...}
         -Certificates @{Replace=<i>value1</i>,<i>value2</i>,...}
         -Certificates $null

       Multiple operations may be specified by using a list separated by semicolons.
         -Certificates @{Add=value1,value2,...};@{Remove=value3,value4,...}

   -ChangePasswordAtLogon <i>bool</i>
       Whether a password must be changed during the next logon attempt.
       Values for this parameter: $false or 0, $true or 1
       This cannot be set to $true for an account that also has PasswordNeverExpires set.

   -City <i>string</i>
       The user's town or city.
       The <a href="../vb/syntax-userinfo.html">LDAP</a> display name of the City property is "l".

   -Company <i>string</i>
       The user's company. 
       The <a href="../vb/syntax-userinfo.html">LDAP</a> display name of the Company property is "company". 

   -Country <i>string</i>
       The country or region code for the user's language of choice. 
       The <a href="../vb/syntax-userinfo.html">LDAP</a> Display Name of the Country property is "c".

   -Credential <i>PSCredential</i>
       A user account that has permission to perform this action.
       The default is the current user unless the cmdlet is run from an AD PowerShell provider drive
       in which case the account associated with the drive is the default.

       "User64" or "Domain01\User64" or a <a href="get-credential.html">PSCredential</a> object.

   -Department <i>string</i>
       The user's department. 
       The <a href="../vb/syntax-userinfo.html">LDAP</a> Display Name for this property is "department".

   -Description <i>string</i>
       A description of the object.
       The <a href="../vb/syntax-userinfo.html">LDAP</a> Display Name for this property is "description".

   -DisplayName <i>string</i>
       The display name of the object.
       The <a href="../vb/syntax-userinfo.html">LDAP</a> Display Name for this property is "displayName".

   -Division <i>string</i>
       The user's division.
       The <a href="../vb/syntax-userinfo.html">LDAP</a> Display Name for this property is "division".

   -EmailAddress <i>string</i>
       The user's email address.
       The <a href="../vb/syntax-userinfo.html">LDAP</a> Display Name for this property is "mail".

   -EmployeeID <i>string</i>
       The user's employee ID. 
       The <a href="../vb/syntax-userinfo.html">LDAP</a> Display Name for this property is "employeeID".

   -EmployeeNumber <i>string</i>
       The user's employee number. 
       The <a href="../vb/syntax-userinfo.html">LDAP</a> Display Name for this property is "employeeNumber". 

   -Enabled <i>bool</i>
       Is the account enabled.
       An enabled account requires a password.
       This parameter sets the Enabled property for an account object.
       Also sets the ADS_UF_ACCOUNTDISABLE flag of the AD User Account Control (UAC) attribute.
       Values for this parameter: $false or 0, $true or 1

   -Fax <i>string</i>
       The user's fax phone number. 
       The <a href="../vb/syntax-userinfo.html">LDAP</a> Display Name for this property is "facsimileTelephoneNumber". 

   -GivenName <i>string</i>
       The user's given name. 
       The <a href="../vb/syntax-userinfo.html">LDAP</a> Display Name for this property is "givenName".

   -HomeDirectory <i>string</i>
       Specifies a user's home directory.
       The <a href="../vb/syntax-userinfo.html">LDAP</a> Display Name for the 'HomeDirectory' property is "homeDirectory".

   -HomeDrive <i>string</i>
       Specifies a drive that is associated with the UNC path defined by -HomeDirectory.
       The drive letter is specified as "<i>DriveLetter</i>:" where <i>DriveLetter</i> is a single,
       uppercase letter. 
       The <a href="../vb/syntax-userinfo.html">LDAP</a> Display Name for this property is "homeDrive". 

   -HomePage <i>string</i>
       The URL of the home page of the object.
       The <a href="../vb/syntax-userinfo.html">LDAP</a> Display Name for this property is "wWWHomePage".

   -HomePhone <i>string</i>
       The user's home telephone number. 
       The <a href="../vb/syntax-userinfo.html">LDAP</a> Display Name for this property is "homePhone".

   -Initials <i>string</i>
       The initials that represent part of a user's name.
       Use this value for the user's middle initial. 
       The <a href="../vb/syntax-userinfo.html">LDAP</a> Display Name for this property is "initials".

   -Instance <i>ADUser</i>
       An instance of a user object to use as a template for a new user object.
        
       Method 1: Use an existing user object as a template for a new object. Retrieve an
       instance of an existing computer object with <a href="get-aduser.html">Get-ADUser</a>. Then provide this object
       to the -Instance parameter of New-ADuser to create a new user object.
       property values may also be overridden for the new object by setting the appropriate parameters. 

          $userInstance = Get-ADuser -Identity GSHeron 
          New-ADuser -Name "KWest"  -Instance $userInstance -AccountPassword "ChangeMe2" -samAccountName "Kanye West"

       Method 2: Create a new ADuser object and pass this object to the -Instance parameter
       of the New-ADuser cmdlet to create the new AD user object. 

          $userInstance = <a href="new-object.html">new-object</a> Microsoft.ActiveDirectory.Management.ADcomputer
          $userInstance.DisplayName = "Kanye West"
          New-ADUser -SAMAccountName "KWest"  -Instance $userInstance

   -LogonWorkstations <i>string</i>
       The computers that the user can access.
       To specify more than one computer, create a single comma-separated list.
       Identify each computer with a Security Accounts Manager (SAM) account name or the DNS 
       host name of the computer. The SAM account name is the same as the NetBIOS name of the computer.

       Example using SAMAccountName (NetBIOS) and DNSHostName values:
          -LogonWorkstations "pc064,pc065,pc1025.corp.ss64.com"

       The <a href="../vb/syntax-userinfo.html">LDAP</a> display name for this property is "userWorkStations". 

   -Manager <i>ADUser</i>
       The user's manager. 
       Set this by providing one of the following property values.
          Examples:
          Distinguished Name: CN=JohnDoe,OU=Europe,CN=Users,DC=corp,DC=ss64,DC=com
          GUID (objectGUID) : 599c3d2e-f72d-4d20-8a88-030d99495f20 
          Security Identifier (objectSid) : S-1-5-21-3165297888-301567370-576410423-1103
          SAM Account Name (sAMAccountName): JDoe

       The <a href="../vb/syntax-userinfo.html">LDAP</a> Display Name of this property is "manager".

   -MobilePhone <i>string</i>
       The user's mobile phone number. 
       The <a href="../vb/syntax-userinfo.html">LDAP</a> Display Name of this property is "mobile".

   -Name <i>string</i>
       The name of the object.
       The <a href="../vb/syntax-userinfo.html">LDAP</a> Display Name of this property is "name".

   -Office <i>string</i>
       The location of the user's office or place of business. 
       The <a href="../vb/syntax-userinfo.html">LDAP</a> Display Name of this property is "office".

   -OfficePhone <i>string</i>
       The user's office telephone number. 
       The <a href="../vb/syntax-userinfo.html">LDAP</a> Display Name of this property is "telephoneNumber".

   -Organization <i>string</i>
       The user's organization. 
       The <a href="../vb/syntax-userinfo.html">LDAP</a> Display Name of this property is "o".

   -OtherAttributes <i>hashtable</i>
        Specifies object attribute values for attributes that are not represented by cmdlet parameters.
        Syntax:
        To specify a single value:
           -OtherAttributes @{'<i>AttributeLDAPDisplayName</i>'=<i>value</i>}
        To specify multiple values
           -OtherAttributes @{'<i>AttributeLDAPDisplayName</i>'=<i>value1,value2</i>,...}

        e.g.:
           -OtherAttributes @{'ItemPrice'=123; 'favColors'="red","blue"}

   -OtherName <i>string</i>
       A name in addition to a user's given name and surname, such as the user's middle name.
       The <a href="../vb/syntax-userinfo.html">LDAP</a> Display Name of this property is "middleName".

   -PassThru
       Returns the new or modified object.
       By default (i.e. if -PassThru is not specified), this cmdlet does not generate any output.
        
   -PasswordNeverExpires <i>bool</i>
       Whether the password of an account can expire.
       This parameter also sets the ADS_UF_DONT_EXPIRE_PASSWD flag of the AD UAC attribute.
       Values for this parameter: $false or 0, $true or 1

       Note: This parameter cannot be set to $true for an account that also has the ChangePasswordAtLogon property set.

   -PasswordNotRequired <i>bool</i>
       Whether the account requires a password.
       This parameter also sets the ADS_UF_PASSWD_NOTREQD flag of the AD UAC attribute.
       Values for this parameter: $false or 0, $true or 1

   -Path <i>string</i>
       The X.500 path of the OU or container where the new object is created.         
       In many cases, a <a href="path-defaults.html">default value</a> will be used for -Path.

       Example:
          -Path "ou=test1,dc=demo,dc=ss64,dc=com"

       Note: PowerShell cmdlets, such <a href="new-item.html">New-Item</a>, <a href="remove-item.html">Remove-Item</a>, <a href="remove-itemproperty.html">Remove-ItemProperty</a>, <a href="rename-item.html">Rename-Item</a> and 
       <a href="set-itemproperty.html">Set-ItemProperty</a> also contain a -Path property. However, for the <a href="ad.html">AD Provider cmdlets</a>, -Path 
       identifies the path of the actual object and not the container.

   -POBox <i>string</i>
       The user's post office box number. 
       The <a href="../vb/syntax-userinfo.html">LDAP</a> Display Name of this property is "postOfficeBox".

   -PostalCode <i>string</i>
       The user's postal code or zip code. 
       The <a href="../vb/syntax-userinfo.html">LDAP</a> Display Name of this property is "postalCode".

   -ProfilePath <i>string</i>
       A path to the user's profile.
       This value can be a local absolute path or a UNC path. 
       The <a href="../vb/syntax-userinfo.html">LDAP</a> Display Name of this property is "profilePath".

       Examples:  -ProfilePath "E:\users\profiles\GailMoss"
                  -ProfilePath "\\users\profiles\GailMoss"

   -SamAccountName <i>string</i>
       The Security Account Manager (SAM) account name of the user, group, computer, or service account.
       The maximum length of the description is 256 characters.
       For compatibility with older operating systems use 20 characters or less.
       The <a href="../vb/syntax-userinfo.html">LDAP</a> Display Name of this property is "sAMAccountName".
       If the value provided is not terminated with a '$' character, the system will add one if needed.

   -ScriptPath <i>string</i>
       A path to the user's log-on script.
       The default path is the NetLogon share
       The <a href="../vb/syntax-userinfo.html">LDAP</a> Display Name of this property is "scriptPath".

       Example:
           -ScriptPath "Logon.cmd"

   -Server <i>string</i>
       The AD Domain Services instance to connect to, this may be a Fully qualified domain name,
       NetBIOS name, Fully qualified directory server name (with or without port number) or AD Snapshot instance.

       Examples: demo.SS64.com  demo  demoDC02.demo.ss64.com  demoDC02.demo.ss64.com:3268

   -ServicePrincipalNames <i>string[]</i>
       The service principal names for the account.
       Use the following syntax to add remove, replace or clear service principal name values:

          -ServicePrincipalNames @{Add=<i>value1</i>,<i>value2</i>,...}
          -ServicePrincipalNames @{Remove=<i>value3</i>,<i>value4</i>,...}
          -ServicePrincipalNames @{Replace=<i>value1</i>,<i>value2</i>,...}
          -ServicePrincipalNames $null

       Multiple operations may be specified by using a list separated by semicolons.
         -ServicePrincipalNames @{Add=value1,value2,...};@{Remove=value3,value4,...}

       Example:
         -ServicePrincipalNames @{Add="SQLservice\NewService.ss64.com:1456"};{Remove="SQLservice\demo.ss64.com:1456"}

   -SmartcardLogonRequired <i>bool</i>
       Whether a smart card is required to logon.
       This parameter also sets the ADS_UF_SMARTCARD_REQUIRED flag of the AD User Account
       Control attribute.
       Values for this parameter: $false or 0, $true or 1

   -State <i>string</i>
       The user's or Organizational Unit's state or province.
       The <a href="../vb/syntax-userinfo.html">LDAP</a> Display Name of this property is "st".

   -StreetAddress <i>string</i>
       The user's street address.
       The <a href="../vb/syntax-userinfo.html">LDAP</a> Display Name of this property is "streetAddress".

   -Surname <i>string</i>
       The user's last name or surname.
       The <a href="../vb/syntax-userinfo.html">LDAP</a> Display Name of this property is "sn".

   -Title <i>string</i>
       The user's title.
       The <a href="../vb/syntax-userinfo.html">LDAP</a> Display Name of this property is "title".

   -TrustedForDelegation <i>bool</i>
       Whether an account is trusted for Kerberos delegation.
       A service that runs under an account that is trusted for Kerberos delegation can
       assume the identity of a client requesting the service. 
       This value also sets the ADS_UF_TRUSTED_FOR_DELEGATION flag of the AD UAC attribute.
       Values for this parameter: $false or 0, $true or 1

   -Type <i>string</i>
       The type of object to create. If not specified this will default to "User".
       This option exists to support migrating data from other directory services.
       Set <i>string</i> to the LDAP display name of the AD Schema Class that represents the
       type of object to be created.  The selected type must be a subclass <br>       of the User schema class. e.g. "InetOrgPerson" or "User".<br>
   -UserPrincipalName <i>string</i>
       Each user account has a user principal name (UPN) in the format
         <i>user</i>@<i>DNS-domain-name</i>
       A UPN is a friendly name assigned by an administrator that is shorter than the LDAP 
       distinguished name used by the system and easier to remember.
       The UPN is independent of the user object's DN, so a user object can be moved or
       renamed without affecting the user logon name. When logging on using a UPN, users
       no longer have to choose a domain from a list on the logon dialog box.

   -Confirm
       Prompt for confirmation before executing the command.

    -WhatIf
       Describe what would happen if you executed the command, without actually executing the command.

   <a href="common.html">CommonParameters</a>:
       -Verbose, -Debug, -ErrorAction, -ErrorVariable, -WarningAction, -WarningVariable,
       -OutBuffer -OutVariable.</pre>
<p>New-ADUser  creates a new AD user.<br>
<br>
Property values that are not associated with cmdlet parameters can be set by using the <span class="code">-OtherAttributes</span> parameter.<br>
<br>
You must specify the SAMAccountName parameter to create a user. <br>
<br>
New-ADUser can also create different types of user accounts such as iNetOrgPerson accounts. To do 
this, set the <span class="code">-Type</span> parameter.<br>
<br>
The <span class="code">-Path</span> parameter specifies the container or organizational unit (OU) for the new user. If not specified the user object will be created in the default container for user objects in the domain.<br>
<br>
There are 3 different ways to create a user object with this cmdlet:<br>
<br>
Method 1: Use  New-ADUser, specify the required parameters, and set any additional property values by using the cmdlet parameters.<br>
<br>
Method 2: Use a template to create the new object. Create a new user object or retrieve a copy of an existing user object and set the <span class="code">-Instance</span> parameter to this object. The object provided to the Instance parameter is 
used as a template for the new object.<br>
<br>
Method 3: Use <a href="import-csv.html">Import-CSV</a>  with the New-ADUser cmdlet to create multiple AD user objects. To
do this, use the Import-CSV cmdlet to create the custom objects from a CSV file that contains a list of object properties. Then pass these objects through the pipeline to  New-ADUser.</p>
<p><b>Examples</b></p>
<p>Ceate new user account named "User64" and prompt for a password:</p>
<pre>PS C:\&gt; $pw = <a href="read-host.html">Read-Host</a> -Prompt 'Enter a Password for this user' -AsSecureString 
PS C:\&gt; New-ADUser -Name User64 -SamAccountName user64 -DisplayName 'User 64' -AccountPassword $pw -Enabled $true</pre>
<p>Create a new user named 'GailMoss' and set the title and mail properties on the new object:</p>
<p><span class="code">PS C:\&gt; New-ADUser GailMoss -OtherAttributes @{title="director";mail="GailMoss@ss64.com"}</span></p>
<p>Create a new inetOrgPerson named 'GailMoss' on an AD LDS instance.: </p>
<p><span class="code">PS C:\&gt; New-ADUser GailMoss -Type iNetOrgPerson -Path "DC=AppNC" -server lds.SS64.com:50000</span></p>
<p>Create user accounts from a CSV formatted spreadsheet, (adjust the items in bold to match the s/sheet column names):</p>
<p class="code">PS C:\&gt; <a href="import-csv.html">Import-Csv</a> .\users.csv | foreach-object {<br>
$userprinicpalname = $_.SamAccountName + "@<b>EXAMPLE</b>.com" <br>
New-ADUser -SamAccountName $_.<b>SamAccountName</b> -UserPrincipalName $userprinicpalname -Name $_.<b>name</b> -DisplayName $_.<b>name</b> -GivenName $_.<b>cn</b> -SurName $_.<b>sn</b> -Department $_.<b>Department</b> -Path "<b>CN=Users,DC=EXAMPLE,DC=com</b>" -AccountPassword (ConvertTo-SecureString "<b>PASSWORD1</b>" -AsPlainText -force) -Enabled $True -PasswordNeverExpires $True -PassThru }</p>
<p>Create a new user named 'GailMoss' with a certicate imported from the file "export.cer": </p>
<p><span class="code">PS C:\&gt; New-ADUser GailMoss -Certificate (new-object System.Security.Cryptography.X509Certificates.X509Certificate -ArgumentList "export.cer")</span></p>
<p class="quote"><i> “If there is a sin against life, it consists perhaps not so much in despairing of life as in hoping for another life and in eluding the implacable grandeur of this life” ~ Albert Camus</i></p>
<p><b>Related:</b></p>
<p><a href="new-qaduser.html">New-QADUser</a> - Create a new user account<br>
<a href="remove-aduser.html">Remove-adUser</a> - Remove an AD user. <br>
<a href="set-aduser.html">Set-adUser</a> - Modify an AD user.</p><!-- #BeginLibraryItem "/Library/foot_ps.lbi" --><p>
<!-- PowerShell300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="6253539900"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="new-aduser.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2015<br>
Some rights reserved</div><!-- #EndLibraryItem -->

