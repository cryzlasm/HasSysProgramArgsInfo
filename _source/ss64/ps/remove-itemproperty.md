---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_ps.lbi" --><!-- #EndLibraryItem --><h1>Remove-ItemProperty</h1> 
<p>Delete a property and its value from an item. This cmdlet can delete registry values and the data that they store.</p>
<pre>Syntax
      Remove-ItemProperty <b>{</b> [-path] <i>string</i>[] <b>|</b> [-literalPath] <i>string</i>[] <b>}</b>
         [[-name] <i>string</i>[]] [-include <i>string</i>[]] [-exclude <i>string</i>[]]
            [-filter <i>string</i>] [-force] [-whatIf] [-confirm]
                [-credential <i>PSCredential</i>] [-UseTransaction] [<i>CommonParameters</i>]

Key
   -Path <i>string</i>
       The path(s) to the item whose properties are being removed.
       Wildcards are permitted.

   -LiteralPath <i>string</i>
       Like Path above, only the value is used exactly as typed.
       No characters are interpreted as wildcards. If the path includes any
       escape characters then enclose the path in single quotation marks.

   -Name <i>string</i>
       The name(s) of the property to be retrieved.

   -Include <i>string</i>
       Delete only the specified items from the Path e.g. "May*"
       this only works when the path includes a wildcard character.
        
   -Exclude <i>string</i>
       Omit the specified items from the Path e.g. "*SS64*"
       this only works when the path includes a wildcard character.
        
   -Filter <i>string</i>
       A filter in the provider's format or language. 
       The exact syntax of the filter (wildcard support etc) depends on the provider.
       Filters are more efficient than -include/-exclude, because the provider
       applies the filter when retrieving the objects, rather than having 
       PowerShell filter the objects after they are retrieved.

   -WhatIf
       Describe what would happen if you executed the command without
       actually executing the command.
        
   -Confirm
       Prompt for confirmation before executing the command.

   -Credential <i>PSCredential</i>
       Use a credential to validate access to the file. <i>Credential</i> represents
       a user-name, such as "User64" or "Domain64\User64", or a PSCredential
       object, such as one retrieved by Get-Credential.
       If you type a user name, you will be prompted for a password.

   -UseTransaction
       Include the command in the active <a href="syntax-transactions.html">transaction</a>.

   <a href="common.html">CommonParameters</a>:
       -Verbose, -Debug, -ErrorAction, -ErrorVariable, -WarningAction, -WarningVariable,
       -OutBuffer -OutVariable.</pre>
<p>Standard <a href="get-alias.html">Aliases</a> for Remove-ItemProperty:<span class="code"> <b>rp</b></span> </p>
<p>Remove-ItemProperty  deletes a property and its value from an item. You can use it to delete registry values and the data that they store.</p>
<p><b>Examples</b></p>
<p>Delete the 'Demo' registry value, and its data, from  HKEY_LOCAL_MACHINE\Software\SS64</p>
<p><span class="code">PS C:\&gt; Remove-itemproperty -path HKLM:\Software\SS64 -name Demo </span></p>
<p>  Again delete the 'Demo' registry value, but this time by changing location, and using a dot (.) to indicate the current location:</p>
<p class="code">PS C:\&gt; Set-location HKLM:\Software\SS64<br>
PS HKLM:\Software\SS64&gt; Remove-itemproperty -path . -Name Demo</p>
<p class="quote"><i>“He that filches from me my good name Robs me of that, which not enriches him, And makes me poor indeed” ~ Shakespeare (Othello) </i></p>
<p><b>Related:</b></p>
<p>  <a href="clear-itemproperty.html">Clear-ItemProperty</a> - Delete the value of a property<br>
<a href="copy-itemproperty.html">Copy-ItemProperty</a> - Copy a property along with its value<br>
<a href="get-itemproperty.html">Get-ItemProperty</a> - Retrieve the properties of an object<br>
<a href="move-itemproperty.html">Move-ItemProperty</a> - Move a property from one location to another<br>
<a href="new-itemproperty.html">New-ItemProperty</a> - Set a new property of an item at a location<br>
<a href="remove-item.html"><b>Remove-Item</b></a> - Remove an item<br>
<a href="rename-itemproperty.html">Rename-ItemProperty</a> - Rename a property of an item<br>
<a href="set-itemproperty.html">Set-ItemProperty</a> - Set the value of a property</p><!-- #BeginLibraryItem "/Library/foot_ps.lbi" --><p>
<!-- PowerShell300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="6253539900"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="remove-itemproperty.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

