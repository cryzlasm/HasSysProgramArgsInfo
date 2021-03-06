---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_ps.lbi" --><!-- #EndLibraryItem --><h1>Set-ADDefaultDomainPasswordPolicy</h1> 
<p>Modify the default password policy for an Active Directory domain.</p>
<pre>Syntax
      Set-ADDefaultDomainPasswordPolicy [-Identity] ADDefaultDomainPasswordPolicy
         [-AuthType {<u>Negotiate</u> | Basic}] [-ComplexityEnabled <i>bool</i>]
            [-Credential <i>PSCredential</i>] [-LockoutDuration <i>TimeSpan</i>]
               [-LockoutObservationWindow <i>TimeSpan</i>] [-LockoutThreshold <i>int</i>]
                  [-MaxPasswordAge <i>TimeSpan</i>] [-MinPasswordAge <i>TimeSpan</i>]
                     [-MinPasswordLength <i>int</i>] [-PassThru] [-PasswordHistoryCount <i>int</i>]
                        [-ReversibleEncryptionEnabled <i>bool</i>] [-Server <i>string</i>]
                           [-Confirm] [-WhatIf] [<a href="common.html"><i>CommonParameters</i></a>]

Key
   -AuthType {<u>Negotiate</u> | Basic}
       The authentication method to use: Negotiate (or 0), Basic (or 1)
       A Secure Sockets Layer (SSL) connection is required for Basic authentication.

   -ComplexityEnabled <i>bool</i>
       Is password complexity enabled for this password policy?
       If enabled, the password must contain two of the following character types:
          Uppercase characters (A, B, C...)
          Lowercase characters (a, b, c...)
          Numerals (0,1,2,3,...)

       This parameter sets the ComplexityEnabled property of a password policy.

       values:
          $false or 0 - Password complexity disabled
          $true or 1  - Password complexity enabled

   -Credential <i>PSCredential</i>
       A user account that has permission to perform this action.
       The default is the current user unless the cmdlet is run from an AD PowerShell provider drive
       in which case the account associated with the drive is the default.

       "User64" or "Domain01\User64" or a <a href="get-credential.html">PSCredential</a> object.

   -Identity <i>ADDefaultDomainPasswordPolicy</i>
       Specify an AD domain object by providing one of the following values.
       (The identifier in parentheses is the LDAP display name for the attribute.)

          Distinguished Name 
            Example: DC=Helvetia,DC=corp,DC=SS64,DC=com 
          GUID (objectGUID) 
            Example: 599c4d2e-f72d-4d20-8a78-030d69495f20
          Security Identifier (objectSid) 
            Example: S-1-5-21-5165297888-301467370-576410423-1803
          Security Accounts Manager (SAM) Account Name (sAMAccountName)
            Example: Helvetia

       The cmdlet searches the default naming context or partition to find the object.
       If two or more objects are found, the cmdlet returns a non-terminating error.

       This parameter can also get this object through the pipeline or you can set this
       parameter to an object instance.

   -LockoutDuration <i>TimeSpan</i>
       The length of time that an account is locked after the number of failed login attempts
       exceeds the lockout threshold. You cannot login to an account that is locked until the
       lockout duration time period has expired.
       The LDAP display name for lockoutDuration is "msDS-LockoutDuration".

       The lockout duration must be greater than or equal to the lockout observation time
       for a password policy. Use the LockOutObservationWindow parameter to set the lockout observation time. 

       Time interval format:
            [-]<i>D</i>.<i>H</i>:<i>M</i>:<i>S</i>.<i>F</i>
       where:
              D = Days (0 to 10675199)
              H = Hours (0 to 23)
              M = Minutes (0 to 59)
              S = Seconds (0 to 59)
              F= Fractions of a second (0 to 9999999)

       Examples:
          Set the time to 2 days
            -LockoutDuration "2"
          Set the time to 4 hours
            -LockoutDuration "4:00"
          Set the time to 5 minutes
            -LockoutDuration "0:5"
          Set the time to 45 seconds
            LockoutDuration "0:0:45"

   -LockoutObservationWindow <i>TimeSpan</i>
       The maximum time interval between two unsuccessful login attempts before the number
       of unsuccessful login attempts is reset to 0.
       An account is locked when the number of unsuccessful login attempts exceeds the password
       policy lockout threshold.
       The LDAP Display Name of this property is "msDS-lockoutObservationWindow".

       The lockout observation window must be smaller than or equal to the lockout duration for a
       password policy. Use the LockoutDuration parameter to set the lockout duration time.

       Time interval format:
           [-]<i>D</i>.<i>H</i>:<i>M</i>:<i>S</i>.<i>F</i>
       where:
              D = Days (0 to 10675199)
              H = Hours (0 to 23)
              M = Minutes (0 to 59)
              S = Seconds (0 to 59)
              F= Fractions of a second (0 to 9999999)

       Note: Time values must be between the following values: 0:0:0:0.0 and 10675199:02:48:05.4775807.

       Examples:
          Set the time to 2 days
            -LockoutObservationWindow "2"
          Set the time to 4 hours
            -LockoutObservationWindow "4:00"
          Set the time to 5 minutes
            -LockoutObservationWindow "0:5"
          Set the time to 45 seconds
            -LockoutObservationWindow "0:0:45"

    -LockoutThreshold <i>int</i>
       The number of unsuccessful login attempts that are permitted before an
       account is locked out. This number increases when the time between
       unsuccessful login attempts is less than the time specified for the
       lockout observation time window.

    -MaxPasswordAge <i>TimeSpan</i>
       The maximum length of time that you can have the same password.
       After this time period, the password expires and you must create a new one. 
        
       The LDAP Display Name for this property is "maxPwdAge".

       Time interval format:
           [-]<i>D</i>.<i>H</i>:<i>M</i>:<i>S</i>.<i>F</i>
       where:
              [-] = Specifies a negative time interval
              D = Days (0 to 10675199)
              H = Hours (0 to 23)
              M = Minutes (0 to 59)
              S = Seconds (0 to 59)
              F= Fractions of a second (0 to 9999999)

       Time values must be between the following values: -10675199:02:48:05.4775808 and 10675199:02:48:05.4775807

       Examples:
          Set the time span to 2 days
            MaxPasswordAge "2"
          Set the time span to the previous 2 days
            MaxPasswordAge "-2"
          Set the time span to 4 hours
            MaxPasswordAge "4:00"
          Set the time span to 5 minutes
            MaxPasswordAge "0:5"
          Set the time span to 45 seconds
            MaxPasswordAge "0:0:45"

   -MinPasswordAge <i>TimeSpan</i>
       The minimum length of time before you can change a password.
       The LDAP Display Name for this property is "minPwdAge".

       Time interval format:
           [-]<i>D</i>.<i>H</i>:<i>M</i>:<i>S</i>.<i>F</i>
       where:
              [-] = Specifies a negative time interval
              D = Days (0 to 10675199)
              H = Hours (0 to 23)
              M = Minutes (0 to 59)
              S = Seconds (0 to 59)
              F= Fractions of a second (0 to 9999999)

       Note: Time values must be between the following values: -10675199:02:48:05.4775808 and 10675199:02:48:05.4775807.

       Examples
          Set the time span to 2 days
            -MinPasswordAge "2"
          Set the time span to 4 hours
            -MinPasswordAge "4:00"
          Set the time span to 5 minutes
            -MinPasswordAge "0:5"
          Set the time span to 45 seconds
            -MinPasswordAge "0:0:45"

   -MinPasswordLength <i>int</i>
       The minimum number of characters that a password must contain.

   -PassThru
       Returns the new or modified object.
       By default (i.e. if -PassThru is not specified), this cmdlet does not 
       generate any output.

   -PasswordHistoryCount <i>int</i>
       The number of previous passwords to save.
       A user cannot reuse a password in the list of saved passwords.
       This parameter sets the PasswordHistoryCount property for a password policy. 

   -ReversibleEncryptionEnabled <i>bool</i>
       Whether the directory must store passwords using reversible encryption.
       This parameter sets the ReversibleEncryption property for a password policy.
       Values:<br>          $false or 0<br>          $true or 1 

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
<p>Set-ADDefaultDomainPasswordPolicy  modifies the properties of the default password policy for a domain.
The <span class="code">-Identity</span> parameter specifies the domain whose default password policy is to be modified. </p>
<p><b>Examples</b></p>
<p>Set the default domain password policy for a given domain. Note: setting MaxPwdAge to 0 will convert it to 'never' (Int64.MinValue or -9223372036854775808 in the directory).:</p>
<p><span class="code">PS C:\&gt; Set-ADDefaultDomainPasswordPolicy -Identity SS64.com -LockoutDuration 00:40:00 -LockoutObservationWindow 00:20:00 -ComplexityEnabled $true -ReversibleEncryptionEnabled $false -MaxPasswordAge 10.00:00:00</span></p>
<p>Set the default domain password policy for the current logged on user domain:</p>
<p><span class="code">PS C:\&gt; Get-ADDefaultDomainPasswordPolicy -Current LoggedOnUser | Set-ADDefaultDomainPasswordPolicy -LockoutDuration 00:40:00 -LockoutObservationWindow 00:20:00 -ComplexityEnabled $true -ReversibleEncryptionEnabled $false -MinPasswordLength 12</span></p>
<p class="quote"><i>“All progress is based upon a universal innate desire on the part of every organism to live beyond its income” ~ Samuel Butler </i></p>
<p><b>Related:</b></p>
<p> <a href="get-addefaultdomainpasswordpolicy.html">Get-adDefaultDomainPasswordPolicy</a>  - Get the default password policy for an Active Directory domain.</p><!-- #BeginLibraryItem "/Library/foot_ps.lbi" --><p>
<!-- PowerShell300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="6253539900"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="set-addefaultdomainpasswordpolicy.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2015<br>
Some rights reserved</div><!-- #EndLibraryItem -->

