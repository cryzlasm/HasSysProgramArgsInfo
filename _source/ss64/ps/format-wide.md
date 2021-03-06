---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_ps.lbi" --><!-- #EndLibraryItem --><h1>Format-Wide</h1> 
<p>Format objects as a wide table that displays only one property of each object.</p>
<pre>Syntax
      Format-Wide [[-property] <i>Object</i>] [-autosize] [-column <i>int</i>]
          [-groupBy <i>Object</i>] [-view <i>string</i>] [-force]
             [-inputObject <i>psobject</i>] [-expand <i>string</i>]
                [-displayError] [-showError] [<i>CommonParameters</i>]

Key:
   -property <i>Object</i>[]
       The object properties to display (in order)
       Wildcards are permitted.
       You cannot use -Property and -View in the same command.

   -autosize
       Adjust the column sizes based on the width of the data.
       By default, the column size and number are determined by the view.
       You cannot use the AutoSize and Column parameters in the same command.

    -column <i>int</i>
       The number of columns in the display.
       Cannot be combined with the -Autosize parameter

   -hideTableHeaders
       Omit column headings from the table.

   -view <i>string</i>
       The name of an alternate format or "view." 
        
   -groupBy <i>Object</i>
       Format the output in groups based on a shared property or value.
 
   -force 
       Override restrictions that prevent the command from succeeding, 
       without compromising security. Force will override read-only
       attributes but will not change file permissions.

   -inputObject <i>psobject</i>
       The objects to format. (a variable, command or expression that gets the objects)
    
   -expand <i>string</i>
       Where string is either "EnumOnly" (the default), "CoreOnly" or "Both"
       "CoreOnly" will format and display properties of the collection object itself, 
       while 'emumOnly' will enumerate and display the object properties. 
       (designed around the ICollection (System.Collections) interface.)

   -displayError 
       Display errors at the command line.
        
   -showError 
       Send errors through the pipeline.

   <a href="common.html">CommonParameters</a>:
       -Verbose, -Debug, -ErrorAction, -ErrorVariable, -WarningAction, -WarningVariable,
       -OutBuffer -OutVariable.</pre>
<p>Standard <a href="get-alias.html">Aliases</a> for Format-Wide:<span class="code"> <b>fw</b></span></p>
<p>The value of <span class="code">-GroupBy</span> or <span class="code">-Property</span> can be a new calculated property. To create a calculated property, use a hash table. Valid keys are:</p>
<blockquote>
<p class="code">Name (or Label) <i>string</i> &nbsp;&nbsp;&nbsp;(-GroupBy only)<br>
Expression <i>string</i> or <i>script block</i><br>
FormatString <i>string</i></p>
</blockquote>
<p><b>Examples</b></p>
<p>Display filenames in the current directory in 3 columns:</p>
<p><span class="code">PS C:\&gt; get-childitem | format-wide -column 3</span><br>
  <br>
  Display registry key names, the default property "Name" is the full registry pathname:</p>
<p class="code">PS C:\&gt; get-childitem HKCU:\software\microsoft | format-wide  -autosize</p>
<p>Display registry key names:</p>
<p class="code">PS C:\&gt; get-childitem HKCU:\software\microsoft | format-wide -property pschildname -autosize</p>
<p class="quote"><i>"We judge ourselves by what we feel capable of doing, while others judge us by what we have already done" ~ Henry Wadsworth Longfellow </i></p>
<p><b>Related:</b><br>
  <br>
  <a href="format-custom.html">format-custom</a> - Format output using a customized view<br>
<a href="format-list.html">format-list</a> - Format output as a list of properties, each on a new line<br>
<a href="format-table.html">format-table</a> - Format output as a table<br>
<a href="out-file.html">out-file</a> - Send command output to a file<br>
<a href="out-host.html">out-host</a> - Send the pipelined output to the host</p><!-- #BeginLibraryItem "/Library/foot_ps.lbi" --><p>
<!-- PowerShell300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="6253539900"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="format-wide.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2015<br>
Some rights reserved</div><!-- #EndLibraryItem -->

