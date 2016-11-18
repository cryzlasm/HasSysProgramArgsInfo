---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_ps.lbi" --><!-- #EndLibraryItem --><h1>Set-ADOrganizationalUnit</h1> 
<p>Modify an Active Directory organizational unit.</p>
<pre>Syntax
      Set-ADOrganizationalUnit [<b>-Identity</b>] <i>ADOrganizationalUnit</i>
         [-Add &lt;hashtable&gt;] [-City <i>string</i>] [-Clear <i>string</i>[]] [-Country <i>string</i>]
            [-Description <i>string</i>] [-DisplayName <i>string</i>] [-ManagedBy <i>ADPrincipal</i>]
               [-Partition <i>string</i>] [-PostalCode <i>string</i>] [-ProtectedFromAccidentalDeletion <i>bool</i>]
                  [-Remove <i>hashtable</i>] [-Replace <i>hashtable</i>] [-State <i>string</i>]
                     [-StreetAddress <i>string</i>] [-AuthType {<u>Negotiate</u> | Basic}]
                        [-Credential <i>PSCredential</i>] [-PassThru] [-Server <i>string</i>]
                           [-Confirm] [-WhatIf] [<i>CommonParameters</i>]

      Set-ADOrganizationalUnit <b>-Instance</b> <i>ADOrganizationalUnit</i>
         [-AuthType {<u>Negotiate</u> | Basic}]
            [-Credential <i>PSCredential</i>] [-PassThru] [-Server <i>string</i>]
               [-Confirm] [-WhatIf] [<i>CommonParameters</i>]

Key
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

   -AuthType {<u>Negotiate</u> | Basic}
       The authentication method to use: Negotiate (or 0), Basic (or 1)
       A Secure Sockets Layer (SSL) connection is required for Basic authentication.

   -City <i>string</i>
       The user's town or city.
       The LDAP display name (ldapDisplayName) of this property is "l".

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

   -Country <i>string</i>
       The country or region code for the user's language of choice (2 character code ISO 3166).
       The LDAP Display Name (ldapDisplayName) of this property is "c".

   -Credential <i>PSCredential</i>
       The user account credentials to use to perform this task.
       The default credentials are those of the currently logged on user unless the
       cmdlet is run from an Active Directory PowerShell provider drive.
       If the cmdlet is run from such a provider drive, the account associated with the drive is the default.

       Type a user name, such as "User64" or "Domain64\User64" or specify a
       PSCredential object such as one generated by <a href="get-credential.html">Get-Credential</a> 

       If a user name is specified, the cmdlet will prompt for a password.

   -Description <i>string</i>
       A description of the object.

   -DisplayName <i>string</i>
       The display name of the object.

   -Identity <i>ADOrganizationalUnit</i>
       An AD organizational unit object. Most often this will be a Distinguished Name (e.g. OU=demo,DC=SS64,DC=com)
       The identity may also be given as a GUID, Security Identifier or sAMAccountName.

       The cmdlet searches the default naming context or partition to find the object.
       If two or more objects are found, the cmdlet returns a non-terminating error.

       The AD OU object may also be passed through the pipeline or set via a variable.

   -Instance <i>ADOrganizationalUnit</i>
       A modified copy of a OU object to use to update the actual AD OU object.
       When this parameter is used, any modifications made to the modified copy of
       the object are also made to the corresponding AD object.
       The cmdlet only updates the object properties that have changed.

       The -Instance parameter can only update OU objects that have been retrieved
       by using <a href="get-adorganizationalunit.html">Get-ADOrganizationalUnit</a>. When you specify the -Instance parameter, you
       cannot specify other parameters that set properties on the object.

       The following is an example of how to use Get-ADOrganizationalUnit to retrieve an
       instance of the AD OU object. The object is modified by using the PowerShell
       command line. Then the Set-ADOrganizationalUnit cmdlet saves the changes to the AD object.

        Step 1: Retrieve a local instance of the object.
            $ouInstance = Get-ADOrganizationalUnit  -Identity "OU=Houston,DC=corp,DC=SS64,DC=com"

        Step 2: Modify one or more properties of the object instance.
            $ouInstance.ManagedBy= "CN=FlightControl,CN=Users,DC=corp,DC=SS64,DC=com"

        Step3: Save your changes to "Houston".
            Set-ADOrganizationalUnit -Instance $ouInstance

   -ManagedBy <i>ADPrincipal</i>
       The user or group that manages the object by providing one of the following property values.
       Note: The identifier in parentheses is the LDAP display name for the property.
          Distinguished Name 
            Example:  CN=demo1,OU=Europe,CN=Users,DC=corp,DC=ss64,DC=com
          GUID (objectGUID) 
            Example: 599c3d2e-f72d-4d20-8a88-030d99495f20 
          Security Identifier (objectSid) 
            Example: S-1-5-64-3265277888-301567356-523410843-1244
          SAM Account Name (sAMAccountName) 
            Example: demo1

   -Partition <i>string</i>
       The distinguished name of an AD partition.
       <i>string</i> must be one of the naming contexts on the current directory server.
       The cmdlet searches this partition to find the object defined by the -Identity parameter.
       Examples:
         -Partition "CN=Configuration,DC=Europe,DC=Test,DC=SS64,DC=COM"
         -Partition "CN=Schema,CN=Configuration,DC=Europe,DC=Test,DC=SS64,DC=COM"

       In many cases, a <a href="partition-defaults.html">default value</a> will be used for -Partition if no value is specified.

   -PassThru <i>switch</i>
       Return the new or modified object.
       By default (i.e. if -PassThru is not specified), this cmdlet does not generate any output.

   -PostalCode <i>string</i>
       The user's postal code or zip code.

   -ProtectedFromAccidentalDeletion <i>bool</i>
       Whether to prevent the object from being deleted.
       When this property is set to true, you cannot delete the corresponding object without
       first changing the value of this property.
       Possible values: $false or 0, $true or 1

   -Remove <i>hashtable</i>
       Remove values of an object property.
       Use this parameter to remove one or more values of a property that cannot be modified
       using a cmdlet parameter. To remove an object property, you must use the LDAP display name.
       You can remove more than one property by specifying a semicolon-separated list.
       The format for this parameter is 
          -Remove @{Attribute1LDAPDisplayName=value[];   Attribute2LDAPDisplayName=value[]}
        
       For example, to add the values blue and green and remove the value pink from a property with a LDAP
       display name of FavColors, set the Add and Remove parameters as follows.
          -Add @{FavColors=Blue,Green} -Remove {FavColors=Pink}

   -Replace <i>hashtable</i>
       Specify values for an object property that will replace the current values.
       Use this parameter to replace one or more values of a property that cannot be modified
       using a cmdlet parameter. To modify an object property, you must use the LDAP display name.
       You can modify more than one property by specifying a comma-separated list. 
       The format for this parameter is 
          -Replace @{Attribute1LDAPDisplayName=value[],   Attribute2LDAPDisplayName=value[]}

   -Server <i>string</i>
       The AD Domain Services instance to connect to, this may be a Fully qualified domain name,
       NetBIOS name, Fully qualified directory server name (with or without port number)

   -State <i>string</i>
       The user's or Organizational Unit's state or province.
        
   -StreetAddress <i>string</i>
       The organizational unit's street address.

   -Confirm
       Prompt for confirmation before executing the command.

   -WhatIf
       Describe what would happen if you executed the command without actually executing the command.

   <a href="common.html">CommonParameters</a>:
       -Verbose, -Debug, -ErrorAction, -ErrorVariable, -WarningAction, -WarningVariable,
       -OutBuffer -OutVariable.</pre>
<p>Set-ADOrganizationalUnit  modifies the properties of an AD Organizational Unit. You can modify commonly used property values by using the cmdlet parameters. Property values that are not associated with cmdlet parameters can be modified by using the <span class="code">-Add, -Replace, -Clear </span>and<span class="code"> -Remove</span> parameters. <br>
<br>
The <span class="code">-Identity</span> parameter specifies the AD organizational unit to modify. Identify an OU by its distinguished name (DN) or GUID. Alternatively set the -Identity parameter to an object <a href="syntax-variables.html">variable</a> or pass an object through the <a href="syntax-pipeline.html">pipeline</a>. e.g. from <a href="get-adorganizationalunit.html">Get-adOrganizationalUnit</a><br>
<br>
The <span class="code">-Instance</span> parameter provides a way to update an OU object by applying the changes made to a copy of the object. To get a copy of an object use <a href="get-adorganizationalunit.html">Get-adOrganizationalUnit</a>, then use <span class="code">Set-ADOrganizationalUnit -Instance</span> to save any changes made back to the original OU object. When the -Instance parameter is specified do not also pass the -Identity parameter. 

For more information  see <a href="get-help.html">help</a> about_ActiveDirectory_Instance.<br>
<br>
<b>Examples</b></p>
<p>Set the description of an OrganizationalUnit:</p>
<p><span class="code">PS C:\&gt; Set-ADOrganizationalUnit -Identity "OU=UserAccounts,DC=SS64,DC=com" -Description "This OU holds all of the users accounts of SS64.com"</span></p>
<p>Set the 'ProtectedFromAccidentalDeletion' property on an OU to $false:</p>
<p><span class="code">PS C:\&gt; Set-ADOrganizationalUnit -Identity "OU=UserAccounts,DC=SS64,DC=com" -ProtectedFromAccidentalDeletion $false</span></p>
<p>Sets the Country, City   and co (friendlyCountryName) properties on an OrganizationalUnit:</p>
<p class="code">PS C:\&gt; Set-ADOrganizationalUnit -Identity "OU=AsiaPacific,OU=Sales,OU=UserAccounts,DC=SS64,DC=com" -Country "AU"
-StreetAddress "45 Martens Place" -City Balmoral -Replace @{co="Australia"}</p>
<p>Edit the properties of an  Organizational Unit:</p>
<p class="code">PS C:\&gt; $WarehouseOU = Get-ADOrganizationalUnit "OU=Warehouse,OU=UserAccounts,DC=SS64,DC=com"<br>
$EuropeSalesOU.Country = "UK"<br>
$EuropeSalesOU.StreetAddress = "22 Taylor St."<br>
$EuropeSalesOU.City = "Seahouses, Northumberland"<br>
$EuropeSalesOU.PostalCode = "NE68 7RB"<br>
$EuropeSalesOU.co ="United Kingdom"<br>
Set-ADOrganizationalUnit -Instance $WarehouseOU</p>
<p class="quote"><i>“Never trust a man who, when left alone with a tea cosy, doesn't try it on” ~ Billy Connolly</i></p>
<p><b>Related:</b></p>
<p> <a href="get-adorganizationalunit.html">Get-adOrganizationalUnit</a> - Get one or more AD OUs<br>
<a href="new-adorganizationalunit.html">New-adOrganizationalUnit</a> - Create a new AD OU<br>
<a href="remove-adorganizationalunit.html">Remove-adOrganizationalUnit</a> - Remove an AD OU</p><!-- #BeginLibraryItem "/Library/foot_ps.lbi" --><p>
<!-- PowerShell300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="6253539900"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="set-adorganizationalunit.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2015<br>
Some rights reserved</div><!-- #EndLibraryItem -->
