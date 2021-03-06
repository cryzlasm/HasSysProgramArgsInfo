---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_ps.lbi" --><!-- #EndLibraryItem --><h1>Rename-Item</h1> 
<p>Rename an item, in a PowerShell provider namespace.</p>
<pre>Syntax
      Rename-Item [-path] <i>string</i>[] [-newName] <i>string</i> [-force]
              [-passThru] [-credential <i>PSCredential</i>] [-whatIf]
                  [-confirm] [-UseTransaction] [<i>CommonParameters</i>]

Key
   -path <i>string</i>
       The path(s) to the item(s) to be renamed. Wildcards are permitted.

   -newName <i>string</i> 
       The new name for the item.

   -force
       Override restrictions that prevent the command from succeeding, apart
       from security settings. e.g. Force will create file path directories 
       or override a files read-only attribute, but will not change file permissions.

   -passThru 
        Pass the object created by Rename-Item along the pipeline. 

   -credential<i>PSCredential</i>
       Use a credential to validate access to the file. <i>Credential</i> represents
       a user-name, such as "User64" or "Domain64\User64", or a PSCredential
       object, such as the one retrieved by using the Get-Credential cmdlet.
       If you type a user name, you will be prompted for a password.
       This parameter is not supported by any PowerShell core cmdlets or providers.
 
   -whatIf
       Describe what would happen if you executed the command without
       actually executing the command.

   -confirm
       Prompt for confirmation before executing the command.

   -UseTransaction
       Include the command in the active <a href="syntax-transactions.html">transaction</a>.

   <a href="common.html">CommonParameters</a>:
       -Verbose, -Debug, -ErrorAction, -ErrorVariable, -WarningAction, -WarningVariable,
       -OutBuffer -OutVariable.</pre>
<p>Standard <a href="get-alias.html">Aliases</a> for Rename-Item:<span class="code"> ren, <b>rni</b></span></p>
<p>Rename-Item  changes the name of an item, it does not affect the content of the item being renamed.<br>
Rename-Item cannot be used to move an item. To move and rename an item, use  <a href="move-item.html">Move-Item</a>.</p>
<p>The <span class="code">-Newname</span> parameter does not accept wildcards, but you can use  a <span class="code"><a href="replace.html">-replace</a></span> expression to calculate  the new name. </p>
<p><b>Examples</b></p>
<p>Rename a file:</p>
<p class="code">PS C:\&gt; rename-item -path c:\docs\dump.csv -newname Report.xls</p>
<p>Rename all .TXT files as .LOG files in the current  directory:</p>
<p><span class="code">PS C:\&gt; get-childitem -Path *.txt | rename-item -NewName {$_.name <a href="replace.html">-replace</a> ".txt",".log"}</span></p>
<p>Rename all the files in the current directory, prefixing each with "Top Secret - ":</p>
<p><span class="code">PS C:\&gt; get-childitem | % { rename-item $_ "Top Secret - $_"} </span></p>
<p>Rename  a registry key:</p>
<p><span class="code">PS C:\&gt; rename-item HKLM:\Software\SS64\Demo1 -NewName Test2</span></p>
<p>Rename all the .MP3 files in the C:\Music\ folder, using the <a href="syntax-f-operator.html">-F operator</a> to prefix them with "Song" then a six digit number, incremented for each file:</p>
<pre>$i = 0
Get-ChildItem -Path C:\music -Filter *.mp3 |
ForEach-Object {
   $extension = $_.Extension
   $newName = "Song {0:d6}{1}" -f  $i, $extension
   $i++
   <b>Rename-Item</b> -Path $_.FullName -NewName $newName
}</pre>
<p class="quote"><i>“It is the function of art to renew our perception. What we are familiar with we cease to see. The writer shakes up the familiar scene, and, as if by magic, we see a new meaning in it” - Anais Nin</i></p>
<p><b>Related:</b><br>
<br>
<a href="clear-item.html">clear-item</a> - Remove content from a variable or an alias<br>
<a href="copy-item.html">Copy-Item</a> - Copy an item from a namespace location<br>
<a href="get-item.html">get-item</a> - Return an object that represents an item in a namespace<br>
<a href="invoke-item.html">invoke-item</a> - Invoke an executable or open a file (START)<br>
<a href="move-item.html">move-item</a> - Move an item from one location to another<br>
<a href="new-item.html">new-item</a> - Create a new item in a namespace<br>
<a href="set-item.html">set-item</a> - Set the value of a provider pathname<br>
<a href="remove-item.html">remove-item</a> - Remove an item<br>
<a href="syntax-stampme.html">StampMe</a> - Script to rename a file with the current Date/Time<br>
Equivalent bash command: <a href="../bash/mv.html">mv</a> - Move or rename files or directories</p><!-- #BeginLibraryItem "/Library/foot_ps.lbi" --><p>
<!-- PowerShell300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="6253539900"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="rename-item.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

