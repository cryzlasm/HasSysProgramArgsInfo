---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_ps.lbi" --><!-- #EndLibraryItem --><h1>Write-Error</h1> 
<p>Write an object to the error pipeline. Write error messages along with other information such as an id, object data, and suggested actions.</p>
<pre>Syntax
      Write-Error [-message] <i>string</i> [-exception <i>Exception</i>] [-category <i>ErrorCategory</i>]
             [-errorId <i>string</i>] [-targetObject <i>Object</i>] [-recommendedAction <i>string</i>]
                [-categoryActivity <i>string</i>] [-categoryReason <i>string</i>]
                   [-categoryTargetName <i>string</i>] [-categoryTargetType <i>string</i>]
                      [<i>CommonParameters</i>]

      Write-Error -errorRecord <i>ErrorRecord</i> [-recommendedAction <i>string</i>]
                [-categoryActivity <i>string</i>] [-categoryReason <i>string</i>]
                   [-categoryTargetName <i>string</i>] [-categoryTargetType <i>string</i>]
                      [<i>CommonParameters</i>]

Key
   -Message <i>string</i>
       The message text of the error.

   -Exception <i>Exception</i>
       The exception type of the error. This can be used in place of Message and
       ErrorRecord, in which case it should appear as the first parameter.

   -Category <i>ErrorCategory</i>
       The category of the error:

         NotSpecified, OpenError, CloseError, DeviceError, DeadlockDetected,
         InvalidArgument, InvalidData, InvalidOperation, InvalidResult, InvalidType,
         MetadataError, NotImplemented, NotInstalled, ObjectNotFound, OperationStopped,
         OperationTimeout, SyntaxError, ParserError, PermissionDenied, ResourceBusy,
         ResourceExists, ResourceUnavailable, ReadError, WriteError, FromStdErr, SecurityError

   -ErrorId <i>string</i>
       A unique ID to associate with the error.

   -TargetObject <i>Object</i>
       The object with which the error is associated.

   -RecommendedAction <i>string</i>
       Describe the recommended response to the error.

   -CategoryActivity <i>string</i>
       Describe the action which overrides the ErrorCategoryInfo default.

   -CategoryReason <i>string</i>
       Describes the reason the ErrorCategoryInfo default is overridden.

   -CategoryTargetName string
       The target name of the ErrorCategoryInfo override.
        
   -CategoryTargetType <i>string</i>
       The target type to override the ErrorCategoryInfo default.

   -ErrorRecord <i>ErrorRecord</i>
       An error record describing details about the error. This can be used in
       place of Message and Exception, in which case it should appear as the
       first parameter.

   <a href="common.html">CommonParameters</a>:
       -Verbose, -Debug, -ErrorAction, -ErrorVariable, -WarningAction, -WarningVariable,
       -OutBuffer -OutVariable.</pre>
<p>
  <span class="code">$error</span> is an array containing recent errors, $error[0] is the most recent.<br>
<span class="code">$?</span> is a boolean variable for executable status, it will be true if an entire script succeded, if any operations generated an error then $? will be false.
</p>
<p><b>Examples</b></p>
<p>Force a single error using Get-Date and then display the $error[0] variable:</p>
<p><span class="code">PS C:\&gt; Get-Date | foreach-Object {Write-Error "Demo Error" -errorID T1 -targetobject $_}<br> 
</span><span class="code">PS C:\&gt; $error[0]</span><br>
<i><br>
<span class="quote">“Knowledge rests not upon truth alone, but upon error also” ~ Carl Gustav Jung</span></i></p>
<p><b>Related:</b><br>
  <br>
 <a href="write-debug.html">Write-Debug</a> - Write a debug message to the host display<br>
<a href="write-host.html">Write-Host</a> - Display objects through the host user interface<br>
<a href="write-output.html">Write-Output</a> - Write an object to the pipeline <br>
<a href="write-progress.html">Write-Progress</a> -  Display a progress bar <br>
<a href="write-verbose.html">Write-Verbose</a> - Write a string to the host’s verbose display<br>
<a href="write-warning.html">Write-Warning</a> - Write a warning message</p><!-- #BeginLibraryItem "/Library/foot_ps.lbi" --><p><script async="" src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
<!-- PowerShell300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="6253539900"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

