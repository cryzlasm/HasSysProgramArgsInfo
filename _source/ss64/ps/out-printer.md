---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_ps.lbi" --><!-- #EndLibraryItem --><h1>Out-Printer</h1> 
<p>Send output to a printer.</p>
<pre>Syntax
      Out-Printer [[-name] <i>string</i>] [-inputObject <i>psobject</i>] [<i>CommonParameters</i>]

Key
   -name <i>string</i>
        The printer name, if omitted will go to default printer.

   -inputObject <i>psobject</i>
        The object to be sent to the printer {may be piped}

   <a href="common.html">CommonParameters</a>:
       -Verbose, -Debug, -ErrorAction, -ErrorVariable, -WarningAction, -WarningVariable,
       -OutBuffer -OutVariable.</pre>
<p>Standard <a href="get-alias.html">Aliases</a> for Out-Printer:<span class="code"> lp</span></p>
<p>The final part of displaying PowerShell output is a hidden background call to an Output cmdlet, by default as the last part of the execution process PowerShell calls the default output cmdlet which is typically Out-Host.</p>
<p><b>Examples</b></p>
<p>Print a text file:</p>
<p><span class="code">PS C:\&gt; get-content $pshome\about_signing.help.txt | Out-Printer</span><br>
  <br>
  Print "Hello, World" to a specific printer:</p>
<p class="code">PS C:\&gt; "Hello, World" | out-printer "\\Server64\Prn86754"</p>
<p>Send the content of a variable to the default printer:</p>
<p class="code">PS C:\&gt; $myhelp = get-help -detailed get-wmiobject<br>
out-printer -inputobject $myhelp</p>
<p>Cancel  print Jobs:</p>
<p class="code">PS C:\&gt;<a href="get-wmiobject.html">Get-WmiObject</a> Win32_Printer -computerName "Server64" | Where {$_.Name -eq "My Printer"} | ForEach { $_.CancelAllJobs() } </p>
<p>Print a file from Microsoft Word  (which can apply formatting changes) </p>
<p><span class="code">$WordObj=New-Object -ComObject Word.Application<br>

$WordObj.Documents.Add('<b>C:\test.txt</b>') &gt; $null<br>

$WordObj.ActiveDocument.Content.Font.Size = 12<br>
$WordObj.ActiveDocument.Content.Font.Name = "Verdana"<br>
<br>
</span><span class="code">#Send To Default Printer<br>
$WordObj.PrintOut()<br>
<br>
</span><span class="code">#Close File without saving <br>
$WordObj.ActiveDocument.Close(0)<br>
$WordObj.quit() </span></p>
<p class="quote"><i>“Next time you make a printout from your <b>color</b> laser printer, shine an LED flashlight beam on it and examine it closely with a magnifying glass. You might be able to see the small, scattered yellow dots printed there that could be used to trace the document back to you” ~ Jason Tuohey</i></p>
<p><b>Related:</b><br>
  <br>
  <a href="out-default.html">Out-Default</a> - Send output to default<br>
<a href="out-file.html">Out-File</a> - Send command output to a file <br>
<a href="out-host.html">Out-Host</a> - Send the pipelined output to the host <br>
<a href="out-null.html">Out-Null</a> - Send output to null <br>

<a href="out-string.html">Out-String</a> - Send output to the pipleline as strings<br>
<a href="tee-object.html">Tee-Object</a> - Send input objects to two places<br>
Equivalent bash command: <a href="../bash/syntax-redirection.html">redirection</a> - Redirection and Process Substitution</p><!-- #BeginLibraryItem "/Library/foot_ps.lbi" --><p><script async="" src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
<!-- PowerShell300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="6253539900"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

