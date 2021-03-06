---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_nt.lbi" --><!-- #EndLibraryItem --><h1>ADmodcmd.exe</h1> 
<p>Active Directory Bulk Modify Tool (<a href="http://blogs.technet.com/b/exchange/archive/2004/08/04/208045.aspx">Command Line Version</a>) There is also a GUI for this tool called admodify.exe</p>
<pre>Syntax
      admodcmd [-dn <i>BaseDN</i>] [-p <i>pagesize</i>] [-s] [-server <i>servername</i>]
        [-f <i>LDAPFilter</i>] [<i>modification</i>]

Key
   -dn <i>BaseDN</i>      Base DN to begin the LDAP query.

   <i>modification</i>    Modification to perform:
                   <a href="admodcmd-ts.html">Terminal Server Attributes</a> | <a href="admodcmd-ex.html">Exchange Related Attributes</a>
                   <a href="admodcmd-mail.html">Mailbox Rights</a> | <a href="admodcmd-user.html">User Account Settings</a> | <a href="admodcmd-custom.html">Custom Attributes</a>                  

   -p <i>pagesize</i>     LDAP Page size to use for query.

   -s              Perform a subtree search 
                   (Default = one level search)

   -server <i>servername
                   </i>The server to make the changes to.
                   by default, changes  are made locally if on a DC.
                   If on a member, DNS is used to find a DC.

   -f <i>LDAPFilter</i>   A Valid LDAP filter to use when enumerating objects
                   The default filter is (objectClass=user).   
</pre>
<p> Changes made with ADModcmd can be undone, as long as the xml log file that
logged the changes still exists. These log files are typically located in
the same folder as the admodify executable.</p>
<pre>Syntax:
      admodcmd [-dn <i>BaseDN</i>] [-p <i>pagesize</i>] [-s] [-server <i>servername</i>]
         -undo <i>logfilename</i> -server <i>servername</i>]

Key: 
   <i>logfilename</i>     The log file that contains the changes to be undone.</pre>
<pre>   servername      The DC to write the changes to.
                   by default, changes  are made locally if on a DC.
                   If on a member, DNS is used to find a DC.</pre>
<p>For information on users that were skipped during an undo process, refer
to the undo.log file.</p>
<p class="quote"><i>“A free people claim their rights as derived from the laws of nature, and not as the gift of their magistrate” - Thomas Jefferson</i></p>
<p><b>Related:</b><br>
<br>
<a href="dsquery.html">DSQuery</a> - Search for items in active directory (<a href="dsquery-user.html">user</a> <a href="dsquery-group.html">group</a> <a href="dsquery-computer.html">computer</a>)<br> 
<a href="dsmod.html">DSMod</a> - Modify items in active directory (<a href="dsmod-user.html">user</a> <a href="dsmod-group.html">group</a> <a href="dsmod-computer.html">computer</a>)</p><!-- #BeginLibraryItem "/Library/foot_nt.lbi" --><p>
<!-- windows300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="7649547908"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="admodcmd.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

