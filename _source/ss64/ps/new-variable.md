---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_ps.lbi" --><!-- #EndLibraryItem --><h1>New-Variable</h1> 
<p>Create a new variable.</p>
<pre>Syntax
      New-Variable [-Name] <i>String</i> [[-value] <i>Object</i>]
           [-scope <i>string</i>] [-description <i>string</i>] [-Visibility {Public | Private}]
              [-option {<u>None</u> | ReadOnly | Constant | Private | AllScope}]
                 [-force] [-passThru] [-whatIf] [-confirm]
                    [<i>CommonParameters</i>]
Key
   -Name 
       The name of the new variable(s).

   -Value <i>Object</i>
       The value to assign to the variable, may be piped.

   -Scope <i>string</i>
       The scope in which this variable is valid. 
       Valid values are "Global", "<u>Local</u>", "Private" or "Script", or a number 
       relative to the current scope ( 0 through the number of scopes, where 
       0 is the current scope and 1 is its parent). "Local" is the default.
       For more, type "<a href="get-help.html">get-help</a> about_scope<b>".</b>

   -Description <i>string</i>
       A description of the variable

   -Option <i>string</i>
       Where the new variable should be visible/changeable:

       Valid values are:

         <u>None</u>      Set no options. ("None" is the default.)

         ReadOnly  The value of the variable cannot be changed except by using
                   the Force parameter. You can use Remove-Variable to delete the variable.

         Constant  The variable cannot be deleted, and its properties cannot be changed.
                   "Constant" is available only when you are creating an alias.
                   You cannot change the option of an existing variable to "Constant".

         Private   The variable is available only within the scope specified by the Scope parameter.
                   It is inherited by child scopes. (This value is not related to the
                   "Private" value of the Visibility parameter.)

         AllScope  The variable is copied to any new scopes that are created.

       To see the Options property of the variables, type:
          "get-variable| format-table -property name, options -autosize"

   -Force 
       Override restrictions as long as security is not compromised.
       Allow a new variable to be created with the same name as an existing read-only variable.

   -Visibility {Public | Private}
       Whether the variable is visible outside of the session in which it was created.
       This parameter is designed for  use in scripts and commands that will be delivered to other users.

       When a variable is private, it does not appear in lists of variables, such as
       those returned by Get-Variable, or in displays of the Variable: drive.
       Commands to read or change the value of a private variable return an error.
       However, the user can run commands that use a private variable if the commands were
       written in the session in which the variable was defined.

   -PassThru
       Pass the object through the pipeline. By default, New-Variable 
       does not pass any objects through the pipeline.
        
   -WhatIf
       Describe what would happen if you executed the command without
       actually executing the command.
        
   -Confirm
       Prompt for confirmation before executing the command.

   <a href="common.html">CommonParameters</a>:
       -Verbose, -Debug, -ErrorAction, -ErrorVariable, -WarningAction, -WarningVariable,
       -OutBuffer -OutVariable.</pre>
<p>Standard <a href="get-alias.html">Aliases</a> for New-Variable:<span class="code"> <b>nv</b></span></p>
<p>A <span class="code">private</span> variable will be visible only to the current function, by default variables are visible  to the current script, or if typed on the command line, to the current session/<a href="syntax-scopes.html">scope</a>. </p>
<p>A <span class="code">ReadOnly</span> variable can still be changed (or removed) by specifying <span class="code">-force.</span></p>
<p> A <span class="code">constant</span> variable cannot be changed or removed, it is constant for the duration of
the session.</p>
<p>The <span class="code">AllScope</span> option will automatically copy the variable to any new child <a href="syntax-scopes.html">scope</a>.</p>
<p><b>Examples</b></p>
<p>Create a new variable:</p>
<p><span class="code">PS C:\&gt; new-variable delivery_day<br>
</span><span class="code">PS C:\&gt; set-variable delivery_day 'Monday'<br>
PS C:\&gt; "$delivery_day"</span><br>
  <br>
  Create a new variable and assign a  value:</p>
<p class="code">PS C:\&gt; new-variable zipcode -value 90210<br>
PS C:\&gt; "$zipcode" <br>

PS C:\&gt; $zipcode=54398
<br>
PS C:\&gt; "$zipcode"</p>
<p>Create a new private variable:</p>
<p><span class="code">PS C:\&gt; new-variable -name SS64 -visibility private</span></p>
<p class="quote"><i>“Everything is on the move, nothing is constant” ~ Heraclitus</i></p>
<p><b>Related:</b></p>
<p><a href="clear-variable.html">Clear-Variable</a> - Remove the value from a variable<br>
<a href="get-variable.html">Get-Variable</a> - Get a PowerShell variable<br>
<a href="new-variable.html">New-Variable</a> - Create a new variable<br>
<a href="remove-variable.html">Remove-Variable</a> - Remove a variable and its value<br>
<a href="set-variable.html">Set-Variable</a> - Set a variable<br>
<a href="syntax-env.html">Environment Variables</a><br>
Equivalent bash command: <a href="../bash/export.html">export</a> - Set an environment variable. </p><!-- #BeginLibraryItem "/Library/foot_ps.lbi" --><p>
<!-- PowerShell300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="6253539900"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="new-variable.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

