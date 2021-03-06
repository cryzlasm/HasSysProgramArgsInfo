---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_ps.lbi" --><!-- #EndLibraryItem --><h1>Set-ADUser</h1> 
<p>Modify an Active Directory user.</p>
<pre>Syntax
      Set-ADUser [-Identity] <i>ADUser</i>  <i>ADProperties</i>[...]
         [-AccountExpirationDate <i>DateTime</i>] [-AccountNotDelegated <i>bool</i>]
            [-Add <i>hashtable</i>] [-AllowReversiblePasswordEncryption <i>bool</i>]
               [-AuthType {<u>Negotiate</u> | Basic}][-CannotChangePassword <i>bool</i>]
                  [-Certificates <i>hashtable</i>] [-ChangePasswordAtLogon <i>bool</i>]
                     [-Clear <i>string</i>[]] [-Credential <i>PSCredential</i>] [-Enabled <i>bool</i>]
                        [-Partition <i>string</i>] [-PasswordNeverExpires <i>bool</i>]
                           [-PasswordNotRequired <i>bool</i>] [-ProfilePath <i>string</i>] 
                              [-PassThru] [-Remove <i>hashtable</i>] [-Replace <i>hashtable</i>]
                                 [-SamAccountName <i>string</i>] [-ScriptPath <i>string</i>]
                                    [-Server <i>string</i>] [-ServicePrincipalNames <i>hashtable</i>]
                                       [-SmartcardLogonRequired <i>bool</i>]
                                          [-TrustedForDelegation <i>bool</i>]
                                             [-Confirm] [-WhatIf] [<a href="common.html"><i>CommonParameters</i></a>]

      Set-ADUser -Instance <i>ADUser</i> [-SamAccountName <i>string</i>]
         [-AuthType {<u>Negotiate</u> | Basic}] [-Credential <i>PSCredential</i>]
            [-Partition <i>string</i>] [-PassThru] [-Server <i>string</i>]
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
               [-Organization <i>string</i>] [-OtherName <i>string</i>]
               [-POBox <i>string</i>] [-PostalCode <i>string</i>] [-State <i>string</i>] [-StreetAddress <i>string</i>]
               [-Surname <i>string</i>] [-Title <i>string</i>] [-UserPrincipalName <i>string</i>]

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

   -Add <i>hashtable</i>
       Specify values to add to an object property.
       Use this parameter to add one or more values to a property that cannot be modified
       using a cmdlet parameter. To modify an object property, you must use the LDAP display name.
       Specify multiple values to a property by specifying a comma-separated list of values
       and more than one property by separating them using a semicolon.
       The format for this parameter is 

          <b>-Add @{</b>Attribute1LDAPDisplayName=value1, value2, ...;
                 Attribute2LDAPDisplayName=value1, value2, ...; AttributeNLDAPDisplayName=value1, value2, ...<b>}</b>

        For example, to remove the value "555-222-2222" and add the values "555-222-1111" and "555-222-3333
        " to Phone-Office-Other attribute (LDAP display name 'otherTelephone'), and add the value "555-222-9999" to Pho
        ne-Mobile-Other (LDAP display name 'otherMobile'), set the Add and Remove parameters as follows.

          <b>-Add @{</b>otherTelephone='555-222-1111', '555-222-3333'; otherMobile='555-222-9999' <b>} -Remove @{</b>otherTelephone='
        555-222-2222'<b>}</b>

        When you use the -Add, -Remove, -Replace and -Clear parameters together, the operations will be
        performed in the order: Remove, then Add, then Replace, then clear.

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

   -Clear <i>string</i>[]
       An array of object properties that will be cleared in the directory.
       Use this parameter to clear one or more values of a property that cannot be modified
       using a cmdlet parameter. To modify an object property, you must use the LDAP display name.
       Modify more than one property by specifying a comma-separated list.
       The format for this parameter is
          -Clear Attribute1LDAPDisplayName, Attribute2LDAPDisplayName

       For example, to clear the value for the Phone-Office-Other attribute
       (LDAP display name 'otherTelephone') set the Clear parameter as follows.

          -Clear otherTelephone

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

   -Identity <i>ADUser</i>
       Specify an AD user object by providing one of the following values.
       (The identifier in parentheses is the LDAP display name for the attribute.)

          Distinguished Name 
            Example: CN=JimSmith,OU=europe,CN=users,DC=corp,DC=SS64,DC=com 
          GUID (objectGUID) 
            Example: 599c3d2e-f72d-4d20-8a88-030d99495f20
          Security Identifier (objectSid) 
            Example: S-1-5-21-3165297888-301567370-576410423-1103
          Security Accounts Manager (SAM) Account Name (sAMAccountName)
            Example: AnnualReports

       The cmdlet searches the default naming context or partition to find the object.
       If two or more objects are found, the cmdlet returns a non-terminating error.

       This parameter can also get this object through the pipeline or you can set this
       parameter to an object instance.
       Examples:
          -Identity "CN=JimSmith,OU=europe,CN=users,DC=corp,DC=SS64,DC=com"
          -Identity $ADUserInstance

   -Initials <i>string</i>
       The initials that represent part of a user's name.
       Use this value for the user's middle initial. 
       The <a href="../vb/syntax-userinfo.html">LDAP</a> Display Name for this property is "initials".

   -Instance <i>ADUser</i>
       An ADUser object that identifies the AD user object that should be modified and the
       set of changes that should be made to that object.
       When this parameter is used, any modifications made to the ADUser object are also made
       to the corresponding AD object. The cmdlet only updates the object properties that have changed.  

       The ADUser object specified as the value of the -Instance parameter must be
       retrieved with Get-ADUser.
       Do not specify other parameters that set individual properties on the object.
       Example:

          # Retrieve a local instance of the object.
          $userInstance = Get-ADUser  -Identity GSHeron
          # Modify one or more properties of the object instance.
          $userInstance.EmailAddress = "gill@ss64.com"
          # Save changes
          Set-ADUser -Instance $userInstance

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

   -Office <i>string</i>
       The location of the user's office or place of business. 
       The <a href="../vb/syntax-userinfo.html">LDAP</a> Display Name of this property is "office".

   -OfficePhone <i>string</i>
       The user's office telephone number. 
       The <a href="../vb/syntax-userinfo.html">LDAP</a> Display Name of this property is "telephoneNumber".

   -Organization <i>string</i>
       The user's organization. 
       The <a href="../vb/syntax-userinfo.html">LDAP</a> Display Name of this property is "o".

   -OtherName <i>string</i>
       A name in addition to a user's given name and surname, such as the user's middle name.
       The <a href="../vb/syntax-userinfo.html">LDAP</a> Display Name of this property is "middleName".

   -Partition <i>string</i>
       The distinguished name of an AD partition.
       The distinguished name must be one of the naming contexts on the current
       directory server. The cmdlet searches this partition to find the object defined by
       the -Identity parameter. 
       The following two examples show how to specify a value for this parameter.
          -Partition "CN=Configuration,DC=Europe,DC=Test,DC=SS64,DC=com"
          -Partition "CN=Schema,CN=Configuration,DC=Europe,DC=Test,DC=SS64,DC=com"

       In many cases, a <a href="partition-defaults.html">default value</a> will be used for the Partition parameter if no value
       is specified.

   -PassThru
       Returns the new or modified object.
       By default (i.e. if -PassThru is not specified), this cmdlet does not generate any output.

   -PasswordNeverExpires <i>bool</i>
       Whether the password of an account can expire.
       This parameter also sets the ADS_UF_DONT_EXPIRE_PASSWD flag of the AD UAC attribute.
       Values for this parameter: $false or 0, $true or 1

       Note: This parameter cannot be set to $true for an account that also has ChangePasswordAtLogon set.

   -PasswordNotRequired <i>bool</i>
       Whether the account requires a password.
       This parameter also sets the ADS_UF_PASSWD_NOTREQD flag of the AD UAC attribute.
       Values for this parameter: $false or 0, $true or 1

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

   -Remove <i>hashtable</i>
       Remove values of an object property.
       Use this parameter to remove one or more values of a property that cannot be modified
       using a cmdlet parameter. To remove an object property, you must use the LDAP display name.
       You can remove more than one property by specifying a semicolon-separated list.
       The format for this parameter is 
          -Remove @{Attribute1LDAPDisplayName=value[];   Attribute2LDAPDisplayName=value[]}

       For example, to add the values blue and green and remove the value pink from a property with a LDAP
       display name of FavColors, set the Add and Remove parameters as follows.
          -Add @{FavColors='Blue','Green'} -Remove @{FavColors='Pink'}

        When you use the -Add, -Remove, -Replace and -Clear parameters together, the operations will be
        performed in the order: Remove, then Add, then Replace, then clear.

   -Replace <i>hashtable</i>
       Specify values for an object property that will replace the current values.
       Use this parameter to replace one or more values of a property that cannot be modified
       using a cmdlet parameter. To modify an object property, you must use the LDAP display name.
       You can modify more than one property by specifying a comma-separated list. 
       The format for this parameter is 
          -Replace @{Attribute1LDAPDisplayName=value[],   Attribute2LDAPDisplayName=value[]}

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
       NetBIOS name or Fully qualified directory server name (with or without port number).

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
<p>Terminal Service properties and Remote desktop properties such as tsprofilepath may be set using the Quest <a href="set-qaduser.html">Set-QADUser</a> cmdlet. </p>
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
Method 3: Use <a href="import-csv.html">Import-CSV</a> with the New-ADUser cmdlet to create multiple AD user objects. To
do this, use the Import-CSV cmdlet to create the custom objects from a CSV file that contains a list of object properties. Then pass these objects through the pipeline to  New-ADUser.</p>
<p><b>Examples</b></p>
<p>Set the user with samAccountName JimSmith's property homepage to http://ss64.com/ps/ and the LogonWorkstations property to PC64,PC65:</p>
<p><span class="code">PS C:\&gt; Set-ADUser JimSmith -HomePage 'http://ss64.com/ps/' -LogonWorkstations 'PC64,PC65'</span></p>
<p>Get all the users in the directory that are located underneath the OU=Spain,OU=UserAccounts,DC=SS64,DC=com organizationalUnit. Set the DisplayName property on these user objects to the concatentation of the Surname property and the GivenName property.: </p>
<p><span class="code">PS C:\&gt; Get-ADUser -Filter 'Name -like "*"' -SearchBase 'OU=Spain,OU=UserAccounts,DC=SS64,DC=com' -Prope<br>
rties DisplayName | % {Set-ADUser $_ -DisplayName ($_.Surname + ' ' + $_.GivenName)}</span></p>
<p>Set the property title of the user with samAccountName StevieWonder to director and property mail to stevie@StevieWonder.net: </p>
<p><span class="code">PS C:\&gt; Set-ADUser StevieWonder -Replace @{title="director";mail="stevie@StevieWonder.net"}</span></p>
<p>Set the mail property on the user object with samAccountName StevieWonder  using the instance parameter: </p>
<p><span class="code">PS C:\&gt; $user = Get-ADUser StevieWonder -Properties mail<br>
PS C:\&gt; $user.mail = "stevie@StevieWonder.net"<br>

PS C:\&gt; Set-ADUser -instance $user</span></p>
<p>Set the user logon hours to Monday through Friday from 8:00 AM to 6:00 PM and add a description: <br>
(The logon hours are stored as an <a href="http://msmvps.com/blogs/richardsiddaway/archive/2008/08/18/ad-logon-hours.aspx">array of 21 bytes</a>, 3 bytes per day, 1 bit per hour. For each bit 0 means 'logon denied' and 1 means 'logon allowed'. The default is to allow logon all day: 255,255,255 (ie all bits = 1). You can view the numbers set for an account with <span class="code">ADSIEdit.msc</span>) </p>
<p><span class="code"></span><span class="code">PS C:\&gt; [byte[]]$hours = @(0,0,0,<b>0,255,3</b>,0,255,3,<b>0,255,3</b>,0,255,3,<b>0,255,3</b>,0,0,0) <br>
PS C:\&gt; # create a hashtable to update the logon hours and a description<br>
PS C:\&gt; $replaceHashTable = New-Object HashTable<br>
PS C:\&gt; $replaceHashTable.Add("logonHours", $hours)<br>
PS C:\&gt; $replaceHashTable.Add("description", "Logon M-F from 8:00 AM to 6:00 PM")<br>
PS C:\&gt; Set-ADUser "StevieWonder" -Replace $replaceHashTable</span></p>
<p class="quote"><i> “A human being should be able to change a diaper, plan an invasion, butcher a hog, conn a ship, design a building, write a sonnet, balance accounts, build a wall, set a bone, comfort the dying, take orders, give orders, cooperate, act alone, solve equations, analyze a new problem, pitch manure, program a computer, cook a tasty meal, fight efficiently, die gallantly. Specialization is for insects” ~ Robert Anson Heinlein </i></p>
<p><b>Related:</b></p>
<p><a href="set-qaduser.html">Set-QADUser</a> - Modify attributes of a user account<br>
<a href="new-aduser.html">New-adUser </a>- Create a new AD user<br>
<a href="remove-aduser.html">Remove-adUser</a> - Remove an AD user<br>
<a href="http://msdn.microsoft.com/en-us/library/ms533052%28v=vs.85%29.aspx">Language codes</a> - MSDN</p><!-- #BeginLibraryItem "/Library/foot_ps.lbi" --><p>
<!-- PowerShell300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="6253539900"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="set-aduser.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2015<br>
Some rights reserved</div><!-- #EndLibraryItem -->

