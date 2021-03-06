---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_ps.lbi" --><!-- #EndLibraryItem --><h1>Get-Alias</h1> 
<p>Return alias names for Cmdlets. An alias is an alternate (usually shorter) name for a cmdlet, script, function, or executable file. By default, Get-Alias takes an alias and returns the command name, 
with the <span class="code">-Definition</span> parameter set, Get-Alias
will accept a command name and return its alias.</p>
<pre>Syntax
      Get-Alias [ [-Name] <i>string</i>[] ]
         [-scope <i>string</i>] [-exclude <i>string</i>[] ] [<i>CommonParameters</i>]

      Get-Alias [-Definition <i>string</i>[]]
         [-scope <i>string</i>] [-exclude <i>string</i>[] ] [<i>CommonParameters</i>]

Key
   -Name <i>string</i>[]
       The alias to retrieve. By default, all aliases defined for the current session.
       (the "-Name" is optional)

   -Definition <i>string</i>[]<br>       Get the aliases for the specified item.
       Enter the name of a cmdlet, function, script, file, or executable.<br><br>       The alias object contains a property called 'Definition' which
       holds this information for each Alias.

   -scope <i>string</i>
       The scope in which this alias is valid. 
       Valid values are "Global", "Local", or "Script", or a number relative
       to the current scope ( 0 through the number of scopes, where 0 is the
       current scope and 1 is its parent). "Local" is the default.
       For more, type "<a href="get-help.html">get-help</a> about_scope".

   -exclude <i>string</i>[]
       Omit the specified items, wildcards allowed e.g. "*ms*"

   <a href="common.html">CommonParameters</a>:
       -Verbose, -Debug, -ErrorAction, -ErrorVariable, -WarningAction, -WarningVariable,
       -OutBuffer -OutVariable.</pre>
<p>Standard <a href="get-alias.html">Aliases</a> for Get-Alias:<span class="code"> <b>gal</b></span></p>
<p>The 'built-in' aliases supplied with PowerShell have the option <span class="code">AllScope</span> set, so they will survive any changes in scope.<br>
The 'built-in' aliases that are idiomatic to PowerShell also have the <span class="code">ReadOnly</span> option set.</p>
<p>Aliases are primarily designed to promote high-speed interactive use of PowerShell, when writing scripts that will be shared with other users it is often better to use the full cmdlet names as this will improve the scripts readability.</p>
<p>You can also   view  aliases via the <a href="syntax-env.html">Alias provider</a> that exposes a drive called <span class="code">Alias:</span> much like a file system drive:</p>
<p class="code">Set-Location alias:<br>
Get-Childitem</p>
<p><b>Examples</b></p>
<p>Retrieve all aliases for the current session, displaying the cmdlet and the alias name:</p>
<p><span class="code">PS C:\&gt; get-alias</span><br>
<br>
Retrieve all aliases that start with the letter S</p>
<p class="code">PS C:\&gt; get-alias -name s*</p>
<p>Retrieve all aliases that reference the <span class="code"><a href="set-location.html">Set-Location</a></span> cmdlet:</p>
<p class="code">PS C:\&gt; get-alias | where-object {$_.Definition -eq 'Set-Location'}</p>
<p>Retrieve all the aliases that have the ReadOnly option set:</p>
<p class="code">PS C:\&gt; get-alias | where-object {($_.Options -split ',') <a href="contains.html">-contains</a> 'ReadOnly'}</p>
<p>Retrieve all  aliases and display their definition and options:</p>
<p class="code">PS C:\&gt; get-alias | format-table name,definition,options -auto</p>
<p class="quote"><i>#There are places I remember <br>
All my life, though some have changed# ~ The Beatles (In My Life) </i></p>
<p><b>Related:</b></p>
<p>  <a href="export-alias.html">export-alias</a> epal Export an alias list to a file<br>
<a href="import-alias.html">import-alias</a> - Import an alias list from a file<br>
<a href="new-alias.html">new-alias</a> - Create a new Cmdlet-alias pairing<br>
<a href="set-alias.html">set-alias</a> - Map an alias to a Cmdlet</p><!-- #BeginLibraryItem "/Library/foot_ps.lbi" --><p><script async="" src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
<!-- PowerShell300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="6253539900"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2015<br>
Some rights reserved</div><!-- #EndLibraryItem -->
