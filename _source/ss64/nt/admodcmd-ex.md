---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_nt.lbi" --><!-- #EndLibraryItem --><h1><a href="admodcmd.html">ADmodcmd</a> Exchange Server attributes </h1> 
<p>Exchange Related Attributes:</p>
<pre>   -killmail   Remove Exchange Attributes.

   -includeinrecipientpolicy
               Check "<i>Automatically Update E-mail Addresses
                  Based on Recipient Policy</i>" Check box.

   -excludefromrecipientpolicy
               Uncheck "<i>Automatically Update E-mail Addresses
                  Based on Recipient Policy</i>" Check box.

   -hidefromaddresslists
               Hide the user from all Address Lists.

   -showinaddresslists
               Show the user in address lists.

   -includeinmailboxmanager
               Include the user in mailbox manager policies.

   -excludefrommailboxmanager
               Exclude the user from mailbox manager policies.

   -enablehttp
               Enable HTTP for the user.

   -disablehttp
               Disable HTTP for the user.

   -enablepop3 Enable POP3 for the user.

   -disablepop3
               Disable POP3 for the user.

   -enableimap4
               Enable IMAP4 for the user.

   -disableimap4
               Disable IMAP4 for the user.

   -enablemapi Enable MAPI access for the user.

   -disablemapi
               Disable MAPI access for the user.

   -enablecachedmapi
               Enable MAPI access for users in cached mode only.

   -addsmtp <i>address</i> [-setasprimary] [-updatemail]
               Add an SMTP address to the user.
               email Address in the form: <a href="admodcmd-custom.html">variable</a>@example.com 

               -setasprimary sets the address as primary email
               (default is secondary).
 
               -updatemail saves the email address on the ADUC General tab.

   -removeaddress <i>address</i>
               Remove any address that matches the specified filter.
               Wild cards are allowed:
                 smtp:*@example.com
                 smtp:*@exa??.com

               Normal * and ? wildcard matching rules apply.  
               This can be used to remove any match found in the users Proxy
               Addresses list, not just SMTP addresses. Matches are case-insensitive.</pre>
<p>The three MAPI settings above require that the users mailbox is homed on an Exchange 2003 SP2 or later server.</p>
<p class="quote"><i>“I did not fully understand the dread term 'terminal illness' until I saw Heathrow for myself” - </i>Dennis Potter</p>
<p><b>Related:</b><br>
<br>
<a href="admodcmd.html">ADmodcmd</a> - Active Directory Bulk Modify Tool<br>
<a href="admodcmd-ts.html">Terminal Server Attributes</a> | <a href="admodcmd-mail.html">Mailbox Rights</a> | <a href="admodcmd-user.html">User Account Settings</a> |<a href="admodcmd-custom.html"> Custom Attributes</a></p><!-- #BeginLibraryItem "/Library/foot_nt.lbi" --><p>
<!-- windows300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="7649547908"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="admodcmd-ex.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->
