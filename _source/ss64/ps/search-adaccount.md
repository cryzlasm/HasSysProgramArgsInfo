---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_ps.lbi" --><!-- #EndLibraryItem --><h1>Search-ADAccount</h1> 
<p>Get AD user, computer, or service accounts.</p>
<pre>Syntax
       Search-ADAccount <i>SearchSwitch</i>
          [-AuthType {<u>Negotiate</u> | Basic}] [-ComputersOnly] [-Credential <i>PSCredential</i>]
             [-ResultPageSize <i>int</i>] [-ResultSetSize <i>int</i>] [-SearchBase <i>string</i>]
                [-SearchScope {Base | OneLevel | Subtree}] [-Server <i>string</i>]
                   [-UsersOnly] [<i>CommonParameters</i>]

SearchSwitch:
   -AccountDisabled
   -AccountExpired
   -AccountExpiring [-DateTime <i>DateTime</i>] [-TimeSpan <i>TimeSpan</i>]
   -AccountInactive [-DateTime <i>DateTime</i>] [-TimeSpan <i>TimeSpan</i>]
   -LockedOut
   -PasswordExpired
   -PasswordNeverExpires

Key
   -AccountDisabled
       Search for accounts that are disabled.

   -AccountExpired
       Search for accounts that are expired.
       The ADAccount AccountExpirationDate property is set to a time in the past.
       The LDAP Display Name is accountExpires

   -AccountExpiring [-DateTime <i>DateTime</i>] [-TimeSpan <i>TimeSpan</i>]
       Search for accounts that are expiring.
       To specify a time period, use the -TimeSpan parameter.
       To specify a specific time, use the -DateTime parameter. 

        Search for accounts that expire in the next 10 days:
          -AccountExpiring -TimeSpan 10

        Search for accounts that expire before June 18, 2015 at 2:00 AM:
          -AccountExpiring -DateTime "6/18/2015 2:00:00 AM"

   -AccountInactive [-DateTime <i>DateTime</i>] [-TimeSpan <i>TimeSpan</i>]
       Search for accounts that have not logged in within a given time period
       or since a specified time.  n.b. This requires the domain to be at
       'Windows Server 2003 Domain' Functional Level.

        Search for accounts that have been inactive for the past 10 days:
          -AccountInactive -TimeSpan 10

        Search for accounts that have been inactive since July 16, 2010 at 12:00 AM.
          -AccountInactive -DateTime "7/16/2010"

   -AuthType {<u>Negotiate</u> | Basic}
       The authentication method to use: Negotiate (or 0), Basic (or 1)
       A Secure Sockets Layer (SSL) connection is required for Basic authentication.

   -ComputersOnly
       Search only for computer accounts.

   -Credential <i>PSCredential</i>
       The user account credentials to use to perform this task.
       The default credentials are those of the currently logged on user unless the
       cmdlet is run from an Active Directory PowerShell provider drive.
       If the cmdlet is run from such a provider drive, the account associated with the drive is the default.

       Type a user name, such as "User64" or "Domain64\User64" or specify a
       PSCredential object such as one generated by <a href="get-credential.html">Get-Credential</a> 

       If a user name is specified, the cmdlet will prompt for a password.

   -DateTime <i>DateTime</i>
        Specifies a distinct time value for parameters such as -AccountExpiring,
          -AccountInactive, and -PasswordExpiring.

        Time is assumed to be in local time unless otherwise specified.
        When a time value is not specified, the time is assumed to midnight local time.
        When a date is not specified, the date is assumed to be the current date.
        Examples
          "2:22 PM"
          "2:22:48 PM"
          "4/12/2010"
          "4/12/2010 2:22 PM"
          "Monday, April 12, 2010"
          "Monday, April 12, 2010 2:22:48 PM"
          "Monday, April 12, 2010 2:22 PM"
        Greenwich Mean Time (GMT) /RFC1123 standard:
          "Mon, 12 Apr 2010 21:22:48 GMT"
        Coordinated Universal Time (UTC):
          "2010-04-12T14:22:48.0000000" 

   -LockedOut
       Search for accounts that are locked out.

   -PasswordExpired
       Search for accounts that have an expired password. 

   -PasswordNeverExpires
       Search for accounts that have a password that does not expire.

   -ResultPageSize <i>int</i>
       The number of objects to include in one page for an AD Domain Services query. 
       The default is 256 objects per page. 

   -PassThru <i>switch</i>
       Return the new or modified object.
       By default (i.e. if -PassThru is not specified), this cmdlet
       does not generate any output.

   -ResultSetSize <i>int</i>
       The maximum number of objects to return for an AD Domain Services query.
       The default is $null (receive all objects)
       Ctrl+c will stop a running query and return of objects. 

   -SearchBase <i>string</i>
       An Active Directory path to search under. 

       When a cmdlet is run from an AD provider drive, the default path is
       the current path of the drive.
       Otherwise the default naming context is used (see help for details.

   -SearchScope <i>ADSearchScope</i>
       The scope of an AD search.
       Possible values for this parameter are:
          Base or 0       Search only the current path or object
          OneLevel or 1   Search the immediate children of Base
          Subtree or 2    Search the current path or object and all children

   -Server <i>string</i>
       The AD Domain Services instance to connect to, this may be a Fully qualified domain name,
       NetBIOS name, Fully qualified directory server name (with or without port number)

   -TimeSpan <i>TimeSpan</i>
       A time interval.
       This parameter is used to specify a time value for parameters such as AccountExpiring.

       Format:
           [-]D.H:M:S.F
            where:
              D = Days (0 to 10675199)
              H = Hours (0 to 23)
              M = Minutes (0 to 59)
              S = Seconds (0 to 59)
              F= Fractions of a second (0 to 9999999)

        Note: Time values must be between -10675199:02:48:05.4775808 and 10675199:02:48:05.4775807

        Examples:
          Set the time to 2 days
            -TimeSpan "2"
          Set the time span to the previous 2 days
           -TimeSpan "-2"
          Set the time to 4 hours
            -TimeSpan "4:00"

   -UsersOnly
       Search for user accounts only. 

   <a href="common.html">CommonParameters</a>:
       -Verbose, -Debug, -ErrorAction, -ErrorVariable, -WarningAction, -WarningVariable,
       -OutBuffer -OutVariable.</pre>
<p>Search-ADAccount  retrieves one or more user, computer, or service accounts that meet the criteria specified by the parameters. Search criteria include account and password status.<br>
<br>Some  parameters, such as <span class="code">-AccountExpiring</span> and <span class="code">-AccountInactive</span> use a default time that you can modify, <span class="code">-DateTime</span> specifies a distinct time or <span class="code">-TimeSpan </span>specifies a time range from the current time. </p>
<p>For example, to search for all accounts that expire in 14 days, specify  <span class="code">-AccountExpiring</span> and <span class="code">-TimeSpan</span>  and set the value of TimeSpan to "14.00:00:00". To search for all accounts that expire before December 31, 2012, set the <span class="code">-DateTime</span> parameter to "12/31/2012".</p>
<p><b>Examples</b></p>
<p>Find all users, computers and service accounts that are disabled:</p>
<p><span class="code">PS C:\&gt; Search-ADAccount -AccountDisabled | <a href="format-table.html">Format-Table</a> Name,ObjectClass -A</span></p>
<p>Find all users that are disabled:</p>
<p><span class="code">PS C:\&gt; Search-ADAccount -AccountDisabled -UsersOnly | <a href="format-table.html">Format-Table</a> Name,ObjectClass -A</span></p>
<p>Find all accounts where the password has expired: </p>
<p><span class="code">PS C:\&gt; Search-ADAccount -PasswordExpired | <a href="format-table.html">Format-Table</a> Name,ObjectClass -A</span></p>
<p>Find all accounts that have been inactive for the last 90 days: </p>
<p><span class="code">PS C:\&gt; Search-ADAccount -AccountInactive -TimeSpan 90.00:00:00 | <a href="format-table.html">Format-Table</a> Name,ObjectClass -A</span></p>
<p class="quote"><i> “Anything that excites me for any reason, I will photograph; not searching for unusual subject matter, but making the commonplace unusual” ~ Edward Weston</i></p>
<p><b>Related:</b></p>
<p><a href="disable-adaccount.html">Disable-ADAccount</a> - Disable an Active Directory account. <br>
<a href="new-aduser.html">New-ADUser</a> -  Create a new AD user<br>
<a href="unlock-adaccount.html">Unlock-ADAccount</a> - Unlock an Active Directory account.</p><!-- #BeginLibraryItem "/Library/foot_ps.lbi" --><p>
<!-- PowerShell300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="6253539900"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="search-adaccount.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2015<br>
Some rights reserved</div><!-- #EndLibraryItem -->
