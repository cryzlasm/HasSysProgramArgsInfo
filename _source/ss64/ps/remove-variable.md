---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_ps.lbi" --><!-- #EndLibraryItem --><h1>Remove-Variable</h1> 
<p>Delete a variable and its value.</p>
<pre>Syntax
      Remove-Variable [[-Name] <i>String[] </i>]
         [-Include <i>string</i>] [-Exclude <i>string</i>] 
            [-scope <i>string</i>] [-force] [-whatIf]
               [-confirm] [<i>CommonParameters</i>]
Key
   -Name 
       The name of the variable(s) to be removed.

   -include <i>string</i>
       Delete only the specified items.
       Wildcards are permitted.
       Qualifies the -Name parameter.

   -Exclude <i>string</i>
       Omit the specified items. Wildcards are permitted.
       Qualifies the -Name parameter.

   -Scope <i>string</i>
       The scope in which this alias is valid. 
       Valid values are "Global", "Local", "Private" or "Script", or a number 
       relative to the current scope ( 0 through the number of scopes, where 
       0 is the current scope and 1 is its parent). "Local" is the default.
       For more, type "<a href="get-help.html">get-help</a> about_scopes<b>".</b>

   -Force
       Override restrictions that prevent the command from succeeding, apart
       from security settings. e.g. -force will override a files read-only
       attribute, but will not remove a constant.

   -WhatIf
       Describe what would happen if you executed the command without
       actually executing the command.

   -Confirm
       Prompt for confirmation before executing the command.

   <a href="common.html">CommonParameters</a>:
       -Verbose, -Debug, -ErrorAction, -ErrorVariable, -WarningAction, -WarningVariable,
       -OutBuffer -OutVariable.</pre>
<p>Standard <a href="get-alias.html">Aliases</a> for Remove-Variable:<span class="code"> <b>rv</b></span></p>
<p>Remove-Variable  deletes a variable and its value from the scope in which it is defined, such as the current session.<br>
This cmdlet cannot delete variables that are set as constants or those that are owned by the system.</p>
<p><b>Examples</b></p>
<p>Remove an existing variable $myvar:</p>
<p><span class="code">PS C:\&gt; remove-variable myvar</span><br>
<br>
<i class="quote">"If any question why we died, Tell them, because our fathers lied" ~ Rudyard Kipling</i></p>
<p><b>Related:</b></p>
<p><a href="clear-variable.html">Clear-Variable</a> - Remove the value from a variable<br>
<a href="get-variable.html">Get-Variable</a> - Get a PowerShell variable<br>
<a href="new-variable.html">New-Variable</a> - Create a new variable<br>
<a href="set-variable.html">Set-Variable</a> - Set a variable and a value<br>
<a href="syntax-env.html">Environment Variables</a><br>
Equivalent bash command: <a href="../bash/unset.html">unset</a> - Remove variable or function names</p><!-- #BeginLibraryItem "/Library/foot_ps.lbi" --><p><script async="" src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
<!-- PowerShell300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="6253539900"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

