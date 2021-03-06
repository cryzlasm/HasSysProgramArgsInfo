---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_ps.lbi" --><!-- #EndLibraryItem --><h1>Get-QADComputer</h1> 
<p>Retrieve all computer objects in a domain or container that match the specified conditions.</p>
<pre>Syntax
      Get-QADComputer [[-Identity] <i>IdentityParameter</i>] [-ComputerRole <i>ComputerRole</i>] 
          <i>ADProperties DateTimeOptions Membership</i> <i>Advanced_Options</i>
             [-Tombstone]  [-SizeLimit <i>Int32</i>] [-LdapFilter <i>String</i>]  
                [-IncludeAllProperties] [-SerializeValues]   
Key

   -identity    The Distinguished Name (DN), Canonical Name, GUID or, where applicable,
                the Domain\Name, UPN or SID of the object you wish to find. 

   <i>ADProperties</i> Retrieve objects that match one or more of the properties below:
                [-Description <i>String</i>] [-DisplayName <i>String</i>]
                [-SamAccountName <i>String</i>] [-DnsName <i>String</i>] 
                [-Location <i>String</i>] [-ManagedBy <i>IdentityParameter</i>]
                [-OSName <i>String</i>] [-OSVersion <i>String</i>] [-OSServicePack <i>String</i>] 
                [-Anr <i>String</i>]  (ambiguous name resolution)

<i>   DateTimeOptions</i>
                Only return items matching a date range:
                [-CreatedOn <i>DateTime</i>] [-CreatedAfter <i>DateTime</i>] [-CreatedBefore <i>DateTime</i>]
                [-LastChangedOn <i>DateTime</i>] [-LastChangedAfter <i>DateTime</i>] [-LastChangedBefore <i>DateTime</i>]

<i>   Membership</i>
                Only return items that belong (or don't belong) to given groups:
                [-MemberOf <i>IdentityParameter</i>[]] [-IndirectMemberOf <i>IdentityParameter</i>[]] 
                [-NotMemberOf <i>IdentityParameter</i>[]] [-NotIndirectMemberOf <i>IdentityParameter</i>[]]

   -SizeLimit   Maximum number of items to be returned (default=1000) 

   -LdapFilter  A case-sensitive LDAP search filter.
                If an Identity value is supplied this parameter will be ignored.

   -IncludeAllProperties
                Retrieve all attributes of the computer object

   -SerializeValues
                Output the object properties as a string (serialized) this makes it easy to
                export attribute values to a text file. When used with -IncludeAllProperties,
                an entire object can be exported from AD into a text file.

   <i>Advanced_Options</i>:
                [-LastKnownParent <i>IdentityParameter</i>] [-SecurityMask <i>SecurityMasks</i>]
                [-SearchRoot <i>IdentityParameter</i>] [-SearchScope <i>SearchScope</i>]
                [-AttributeScopeQuery <i>String</i>] [-PageSize <i>Int32</i>]  
                [-WildcardMode <i>WildcardMode</i>] [-ObjectAttributes <i>Object</i>]  [-Anr <i>String</i>]  
                [-DontConvertValuesToFriendlyRepresentation] [-ReturnPropertyNamesOnly]  
                [-UseDefaultExcludedProperties] [-DontUseDefaultIncludedProperties]  
                [-UseDefaultExcludedPropertiesExcept <i>String</i> []] [-ExcludedProperties <i>String</i>[]]
                [-IncludedProperties <i>String</i>[]] [-UseGlobalCatalog] 
                [-Proxy] [-Service <i>String</i>]
                [-ConnectionAccount <i>String</i>] [-ConnectionPassword <i>SecureString</i>]
                [-Credential <i>PSCredential</i>] [-Connection <i>ArsConnection</i>]</pre>
<p><b>Notes:</b><br>
By default <span class="code">Get-QADComputer</span> will connect to any available domain controller with the credentials of the locally logged on user, to connect to a specific domain controller using a specific account, either use the advanced options (-Proxy/-Service/-ConnectionAccount) or use the <span class="code">Connect-QADService</span> cmdlet to make the connection. </p>
<p><b>Examples</b></p>
<p>Connect to a computer on the domain <span class="code">SS64Dom</span></p>
<p><span class="code">PS C:&gt; get-QADComputer 'SS64Dom\MyServer$'</span></p>
<p> Within a specific OU, find all computers that run a particular version (canonical name) of the operating system, and list their names:</p>
<p><span class="code">PS C:&gt; get-QADComputer -SearchRoot 'ss64.com/sampleOU' -OSName '*Vista*' </span></p>
<p>List all domain controllers:</p>
<p class="code">PS C:&gt; get-QADComputer -computerRole 'DomainController'</p>
<p>Use an LDAP search filter to search for 
computers in a specific OU container. Display the name and DN of each 
computer found: </p>
<p><span class="code">PS C:&gt; get-QADComputer -SearchRoot 'ss64.com/sampleOU' -LdapFilter '(description=a*)'</span></p>
<p>Search to find all computers with an empty description, set a description for each one found:</p>
<p class="code">C:\PS&gt; get-QADComputer -SearchRoot 'ss64.com/sampleOU' -description '' | set-QADObject -description 'ACME Corporation PC'</p>
<p class="quote"><i>“The machine does not isolate man from the great problems of nature but plunges him more deeply into them” ~ Antoine de Saint-Exupery</i></p>
<p><b>Related:</b></p>
<p><a href="quest.html">Quest cmdlets</a><br>
<a href="get-qaduser.html">Get-QADUser</a><br>
<a href="remove-qadobject.html">Remove-QADObject</a> - Delete object(s) from Active Directory</p><!-- #BeginLibraryItem "/Library/foot_ps.lbi" --><p>
<!-- PowerShell300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="6253539900"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="get-qadcomputer.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2015<br>
Some rights reserved</div><!-- #EndLibraryItem -->

