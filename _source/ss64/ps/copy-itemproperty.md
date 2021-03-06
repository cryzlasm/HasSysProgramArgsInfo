---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_ps.lbi" --><!-- #EndLibraryItem --><h1>Copy-ItemProperty</h1> 
<p>Copy a property along with its value</p>
<pre>Syntax
      Copy-ItemProperty [[-path] | [-literalPath] ] <i>string</i>[]
         [[-destination] <i>string</i>[]] [-name <i>string</i>] [-force]
            [-incude <i>string</i>[] ] [-exclude <i>string</i>[] ]
               [-filter <i>string</i>] [-passThru]  [-credential <i>PSCredential</i>]
                  [-whatIf] [-confirm] [-UseTransaction] [<i>CommonParameters</i>]
Key
    -path <i>string</i>
        The items to copy, Wildcards are permitted.

    -literalPath <i>string</i>
        Like Path above, only the value is used exactly as typed.
        No characters are interpreted as wildcards. If the path includes any
        escape characters then enclose the path in single quotation marks.

    -destination <i>string</i>
        Where the items are to be copied.

    -name <i>string</i> 
        The name of the property to copy.

    -force
        Override restrictions that prevent the command from succeeding, apart
        from security settings. e.g. Force will create file path directories 
        or override a files read-only attribute, but will not change file permissions.

    -include <i>string</i>
        Copy only the specified items from the Path. e.g. "May*"

    -exclude <i>string</i>
        Omits the specified items from the Path e.g. "*SS64*"

    -filter <i>string</i>
        A filter in the provider's format or language. 
        The exact syntax of the filter (wildcard support etc) depends on the provider.
        Filters are more efficient than -include/-exclude, because the provider
        applies the filter when retrieving the objects, rather than having 
        PowerShell filter the objects after they are retrieved.

    -credential <i>PSCredential</i>
        Uses a <i>credential</i> to validate access to the file. Credential represents
        a user-name, such as "User01" or "Domain01\User01", or a PSCredential
        object, such as the one retrieved using <a href="get-credential.html">Get-Credential</a>.
        This parameter appears, but it is not yet supported in any PowerShell core 
        cmdlets or providers.

    -passThru 
        Pass the object through the pipeline.

    -whatIf
        Describe what would happen if you executed the command without actually
        executing the command.

    -confirm
        Prompt for confirmation before executing the command.

   -UseTransaction
       Include the command in the active <a href="syntax-transactions.html">transaction</a>.

   <a href="common.html">CommonParameters</a>:
       -Verbose, -Debug, -ErrorAction, -ErrorVariable, -WarningAction, -WarningVariable,
       -OutBuffer -OutVariable.</pre>
<p>
  Standard <a href="get-alias.html">Aliases</a> for Copy-ItemProperty: <span class="code"> <b>cpp</b></span></p>
<p><b>Examples</b></p>
<p>Copy the property named updateMgr from HKLM\Windows\CurrentVersion\Run to HKLM\Windows\CurrentVersion\Backup</p>
<p><span class="code">PS C:\&gt; copy-itemproperty -path HKLM:\Software\Microsoft\Windows\CurrentVersion\Run -destination HKLM:\Software\Microsoft\Windows\CurrentVersion\Backup -name updateMgr</span></p>
<p class="quote"><i>"Thieves respect property. They merely wish the property to become their property that they may more perfectly respect it" ~ G. K. Chesterton</i></p>
<p><b>Related:</b><br>
  <br>
<a href="clear-itemproperty.html">Clear-ItemProperty</a> - Delete the value of a property<br>

<a href="get-itemproperty.html">Get-ItemProperty</a> - Retrieve the properties of an object<br>
<a href="move-itemproperty.html">Move-ItemProperty</a> - Move a property from one location to another<br>
<a href="new-itemproperty.html">New-ItemProperty</a> - Set a new property of an item at a location<br>
<a href="remove-itemproperty.html">Remove-ItemProperty</a> - Delete the property and its value from an item<br>
<a href="rename-itemproperty.html">Rename-ItemProperty</a> - Rename a property of an item<br>
<a href="set-itemproperty.html">Set-ItemProperty</a> - Set the value of a property<br>
<a href="get-help.html">get-help</a> - about_namespace</p><!-- #BeginLibraryItem "/Library/foot_ps.lbi" --><p>
<!-- PowerShell300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="6253539900"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="copy-itemproperty.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

