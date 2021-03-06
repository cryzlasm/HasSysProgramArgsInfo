---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_ps.lbi" --><!-- #EndLibraryItem --><h1>Get-Variable</h1> 
<p>Get PowerShell variables in the current console.</p>
<pre>Syntax
      Get-Variable [[-Name] <i>String[] </i>]
         [-Include <i>string</i>] [-Exclude <i>string</i>] 
            [-valueOnly] [-scope <i>string</i>] [<i>CommonParameters</i>]
Key
   -Name 
       The name of the variable(s), may be piped.

   -include <i>string</i>
       Retrieve only the specified items.
       Wildcards are permitted.

   -exclude <i>string</i>
       Omit the specified items. Wildcards are permitted.
 
   -valueOnly
       Get only the value of the variable.

   -scope <i>string</i>
       The scope in which this alias is valid. 
       Valid values are "Global", "Local", "Private" or "Script", or a number 
       relative to the current scope ( 0 through the number of scopes, where 
       0 is the current scope and 1 is its parent). "Local" is the default.
       For more, type "<a href="get-help.html">get-help</a> about_scope<b>".</b>

   <a href="common.html">CommonParameters</a>:
       -Verbose, -Debug, -ErrorAction, -ErrorVariable, -WarningAction, -WarningVariable,
       -OutBuffer -OutVariable.</pre>
<p>
  Standard <a href="get-alias.html">Aliases</a> for Get-Variable:<span class="code"> <b>gv</b></span></p>
<p><b>Examples</b></p>
<p>Display variables with names that begin with var:</p>
<p><span class="code">PS C:\&gt; get-variable p*</span><br>
  <br>
  Display only the values (compare with selecting the value property from the object):</p>
<p class="code">PS C:\&gt; get-variable p* -valueOnly <br>
PS C:\&gt; get-variable p* | select value </p>
 <p>Display variables that have the ReadOnly option set:</p>
<p class="code">PS C:\&gt; get-variable  | Where-Object {$_.Options -like '*ReadOnly*'}</p>
<p>Display and sort variables that begin with either the letter 'S' or the letter 'P':</p>
<p class="code">PS C:\&gt; get-variable -include s*,p* | sort-object name</p>
<p class="quote"><i>"Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it" ~ Brian W. Kernighan</i></p>
<p><b>Related:</b></p>
<p> <a href="clear-variable.html">Clear-Variable</a> - Remove the value from a variable<br>
<a href="new-variable.html">New-Variable</a> - Create a new variable<br>
<a href="remove-variable.html">Remove-Variable</a> - Remove a variable and its value<br>
<a href="set-variable.html">Set-Variable</a> - Set a variable<br>
<a href="syntax-automatic-variables.html">Automatic variables</a> -  Variables  created and maintained by  PowerShell $_, $Args, $Error, $Home etc<br>
<a href="syntax-env.html">Environment Variables</a><br>
Equivalent bash command: <a href="../bash/env.html">env</a> - Display, set, or remove environment variables </p><!-- #BeginLibraryItem "/Library/foot_ps.lbi" --><p>
<!-- PowerShell300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="6253539900"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="get-variable.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

