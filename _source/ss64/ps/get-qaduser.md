---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_ps.lbi" --><!-- #EndLibraryItem --><h1>Get-QADUser</h1> 
<p>Retrieve  users from a domain or OU container that match specified conditions.</p>
<pre>Syntax
      Get-QADUser [[-Identity] <i>IdentityParameter</i>] <i>ADProperties</i>
         [-Disabled] [-Enabled] [-Locked] <i>DateTimeOptions</i>
            [-AccountNeverExpires] [-PasswordNeverExpires]
               [-IncludeAllProperties] [-SerializeValues] [-Tombstone]<i>
                   Membership</i> [-SizeLimit <i>Int32</i>] [-LdapFilter <i>String</i>]
                      <i>Advanced_Options</i>
Key

   -identity    The Distinguished Name (DN), Canonical Name, GUID or, where applicable,
                the Domain\Name, UPN or SID of the object you wish to find. 

   -Disabled    Find only disabled accounts

   -Enabled     Find only enabled accounts

   <i>ADProperties</i> Retrieve objects that match one or more of the properties below:
 
                [-Manager <i>IdentityParameter</i>] [-City <i>String</i>] [-Company <i>String</i>]
                [-Department <i>String</i>] [-Fax <i>String</i>] [-FirstName <i>String</i>]
                [-HomePhone <i>String</i>] [-Initials <i>String</i>]  [-LastName <i>String</i>]
                [-MobilePhone <i>String</i>] [-Notes <i>String</i>] [-Office <i>String</i>]
                [-Pager <i>String</i>] [-PhoneNumber <i>String</i>] [-PostalCode <i>String</i>]
                [-PostOfficeBox <i>String</i>] [-SamAccountName <i>String</i>] [-StateOrProvince <i>String</i>]
                [-StreetAddress <i>String</i>] [-Title <i>String</i>] [-UserPrincipalName <i>String</i>]
                [-WebPage <i>String</i>] [-HomeDirectory <i>String</i>] [-HomeDrive <i>String</i>]
                [-ProfilePath <i>String</i>] [-LogonScript <i>String</i>] [-Email <i>String</i>] 
                [-Description <i>String</i>] [-DisplayName <i>String</i>] [-Name <i>String</i>]

   <i>DateTimeOptions</i>
                Only return items matching a date range:
                [-AccountExpiresBefore <i>DateTime</i>] [-AccountExpiresAfter <i>DateTime</i>]
                [-CreatedOn <i>DateTime</i>] [-CreatedAfter <i>DateTime</i>] [-CreatedBefore <i>DateTime</i>]
                [-LastChangedOn <i>DateTime</i>] [-LastChangedAfter <i>DateTime</i>] [-LastChangedBefore <i>DateTime</i>]

   <i>Membership</i>
                Only return items that belong (or don't belong) to given groups:

                [-MemberOf <i>IdentityParameter</i>[]] [-IndirectMemberOf <i>IdentityParameter</i>[]] 
                [-NotMemberOf <i>IdentityParameter</i>[]] [-NotIndirectMemberOf <i>IdentityParameter</i>[]]

   -SizeLimit   Maximum number of items to be returned (default=1000) 

   <i>Advanced_Options</i>:
      [-LastKnownParent <i>IdentityParameter</i>] [-SecurityMask <i>SecurityMasks</i>]
      [-SearchRoot <i>IdentityParameter</i>] [-SearchScope <i>SearchScope</i>]
      [-AttributeScopeQuery <i>String</i>] [-PageSize <i>Int32</i>]  
      [-WildcardMode <i>WildcardMode</i>] [-ObjectAttributes <i>Object</i>]  [-Anr <i>String</i>]  
      [-DontConvertValuesToFriendlyRepresentation]  
      [-ReturnPropertyNamesOnly] [-DontUseDefaultIncludedProperties] 
      [-UseDefaultExcludedProperties] [-ExcludedProperties <i>String</i>[]]
      [-IncludedProperties <i>String</i>[]] [-UseGlobalCatalog] 
      [-Proxy] [-Service <i>String</i>]
      [-ConnectionAccount <i>String</i>] [-ConnectionPass <i>ArsConnection</i>]</pre>
<p>
  <b>Notes:</b>        <br>
By default <span class="code">Get-QADUser</span> will connect to any available domain controller with the credentials of the locally logged on user, to connect to a specific domain controller using a specific account, either use the advanced options (-Proxy/-Service/-ConnectionAccount) or use the <span class="code">Connect-QADService</span> cmdlet to make the connection. </p>
<p><b>Examples</b></p>
<p>Display the user description of JohnDoe </p>
<p><span class="code">PS C:&gt; (get-QADUser 'SS64Domain\JohnDoe').DirectoryEntry.description</span></p>
<p> List the values of all properties of the user account: </p>
<p><span class="code">PS C:&gt; Get-QADUser JDoe -IncludeAllProperties -SerializeValues | Format-List</span></p>
<p>Export a user account to a CSV file (so it can be used later to create new accounts with <span class="code">import-csv | New-QADUser</span>) </p>
<p class="code">PS C:&gt; Get-QADuser JDoe -SerializeValues | export-csv user.csv</p>
<p>Retrieve user accounts that are direct or indirect members of a 
group:</p>
<p><span class="code">PS C:&gt; get-QADUser -SearchRoot 'CN=Users,DC=SS64,DC=com' -IndirectMemberOf 'SS64Domain\TestGrp'</span></p>
<p>Retrieve user accounts created since the start of the year </p>
<p><span class="code">PS C:&gt; Get-QADUser -CreatedAfter "January 1, 2009" -SearchRoot SS64Domain/employees</span></p>
<p>Export password expiry details to a spreadsheet:</p>
<p><span class="code">PS C:&gt; Get-QADUser * -sizelimit 0 |  select -property  name,accountexpires,pass*,accountisdisabled,lastlog*,canonicalname |  export-csv -path d:\Passwords.csv</span></p>
<p class="quote"><i>“Everybody, come on dance and sing, Everybody, get up and do your thing” ~ Madonna </i></p>
<p><b>Related:</b></p>
<p><a href="http://wiki.powergui.org/index.php/New-QADUser">PowerGui Wiki</a> for New-QADUser<br>
  <a href="get-qadcomputer.html">Get-QADComputer</a><br>
<a href="get-qadgroup.html">Get-QADGroup</a></p><!-- #BeginLibraryItem "/Library/foot_ps.lbi" --><p><script async="" src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
<!-- PowerShell300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="6253539900"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2015<br>
Some rights reserved</div><!-- #EndLibraryItem -->

