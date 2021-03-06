---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_ps.lbi" --><!-- #EndLibraryItem --><h1>Clear-Item</h1> 
<p>Remove content from a variable, or alias. Remove a registry entry.<br> 
Clearing an alias will also delete the alias, clearing a variable will empty the variable contents. </p>
<pre>Syntax
      Clear-item <b>[</b>[-path] | [-literalPath] <b>]</b> <i>string</i>[]
         [-include <i>string</i>[]] [-exclude <i>string</i>[] ]
            [-filter <i>string</i>] [-force] [-credential <i>PSCredential</i>] [-confirm]
               [-whatIf] [-UseTransaction] [<i>CommonParameters</i>]

Key
   -Path <i>string</i>
       The paths to the items from which content is deleted.
       Wildcards are permitted.

   -LiteralPath <i>string</i>
       Like Path above, only the value is used exactly as typed.
       No characters are interpreted as wildcards. If the path includes any
       escape characters then enclose the path in single quotation marks.

   -Include <i>string</i>
       Clear only the specified items from the Path. e.g. "May*"

   -Exclude <i>string</i>
       Omits the specified items from the Path e.g. "*SS64*"

   -Filter <i>string</i>
       A filter in the provider's format or language. 
       The exact syntax of the filter (wildcard support etc) depends on the provider.
       Filters are more efficient than -include/-exclude, because the provider
       applies the filter when retrieving the objects, rather than having 
       PowerShell filter the objects after they are retrieved.

   -Force
       Override any restrictions that would prevent the command from succeeding,
       apart from security settings. e.g. Force will create file path directories
       or override a files read-only attribute, but will not change file permissions.

   -Credential <i>PSCredential</i>
       Uses a <i>credential</i> to validate access to the file. Credential represents
       a user-name, such as "User01" or "Domain01\User01", or a PSCredential
       object, such as the one retrieved using <a href="get-credential.html">Get-Credential</a>.
       This parameter appears, but it is not yet supported in any PowerShell core 
       cmdlets or providers.

   -Confirm
       Prompt for confirmation before executing the command.

   -WhatIf
       Describe what would happen if you executed the command without actually
       executing the command.
 
   -UseTransaction
       Include the command in the active <a href="syntax-transactions.html">transaction</a>.

   <a href="common.html">CommonParameters</a>:
       -Verbose, -Debug, -ErrorAction, -ErrorVariable, -WarningAction, -WarningVariable,
       -OutBuffer -OutVariable.</pre>
<p>Standard <a href="get-alias.html">Aliases</a> for Clear-Item: <span class="code"> <b>cli</b></span></p>
<p><b>Examples</b></p>
<p>Delete the content of a MyTestVariable: </p>
<pre>PS C:&gt; clear-item Variable:MyTestVariable
or
PS C:&gt; Set-location Variable:
PS Variable:\&gt; clear-item MyTestVariable
</pre>
<p>Remove the aliases: ss64demo1, ss64demo2:</p>
<pre>PS C:&gt; clear-item Alias:ss64* -include *demo*
</pre>
<p>Remove all the registry entries under : hklm\Software\SS64\DemoKey:</p>
<pre>PS C:&gt; clear-item registry::HKLM\Software\SS64\DemoKey</pre>
<p class="quote"><i>"All of Western logic is based upon the law of
contradiction -- if two things contradict, then
at least one of them is false. But Islamic logic
is dualistic; two things can contradict each
other and both are true" ~ Bill Warner</i></p>
<p><b>Related:</b></p>
<p><a href="clear-content.html">Clear-Content</a> is similar to Clear-Item, but works on files, instead of aliases and variables.<br>
<a href="remove-item.html">remove-item</a> - Remove an item</p><!-- #BeginLibraryItem "/Library/foot_ps.lbi" --><p><script async="" src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
<!-- PowerShell300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="6253539900"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2015<br>
Some rights reserved</div><!-- #EndLibraryItem -->

