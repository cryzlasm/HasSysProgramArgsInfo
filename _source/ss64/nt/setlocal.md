---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_nt.lbi" --><!-- #EndLibraryItem --><h1>SETLOCAL</h1> 
<p> Set options to control the visibility of environment variables in a batch file.</p>
<pre>Syntax
      SETLOCAL

      SETLOCAL {<a href="delayedexpansion.html">EnableDelayedExpansion</a> | <u>DisableDelayedExpansion</u>}  {<u>EnableExtensions</u> | DisableExtensions}

Key
   EnableDelayedExpansion  Expand variables at execution time rather than at parse time.

   DisableDelayedExpansion Expand variables at parse time rather than at execution time.

   EnableExtensions        Attempt to enable <a href="cmd.html">Command</a> extensions. 

   DisableExtensions       Attempt to disable <a href="cmd.html">Command</a> extensions. </pre>
<p>SETLOCAL on it's own, usually at the start of a batch file, will begin localisation of Environment Variables.</p>
<p>Issuing a SETLOCAL command, the batch script will inherit all current variables from the master environment/session.</p>
<p>Issuing an <a href="endlocal.html">ENDLOCAL</a> command will restore any environment variables present before the SETLOCAL was issued. </p>
<p>If a batch script does not use SETLOCAL and ENDLOCAL then all variables will be Global, i.e. visible and modifiable by other scripts. </p>
<p>Although global variables are easy to work with they are not good practice - for example if you have several batch scripts dealing with filenames (and these scripts are <a href="call.html">CALL</a>ing one another), the first script  has a variable called <span class="code">_filename</span>, the second script a different variable called <span class="code">file-name</span> (a different name to avoid conflicting with the first script) a third script now needs something like <span class="code">file_name</span> this quickly becomes very difficult to manage.</p>
<p>With local variables you are free to  use the same variable names in multiple batch scripts - there is no conflict because the local variables are not visible to any other script. <br>
Local Variables can be passed from one batch routine to another with the <a href="endlocal.html">ENDLOCAL</a> command. </p>
<h2><a id="enabledelayedexpansion"></a>EnableDelayedExpansion</h2>
<blockquote>
<p>Setting <a href="delayedexpansion.html">EnabledDelayedExpansion</a> will cause each  variable to be expanded at execution time rather than at parse time.</p>
</blockquote>
<h2><a id="DisableDelayedExpansion"></a>DisableDelayedExpansion</h2>
<blockquote>
<p>Setting DisabledDelayedExpansion will cause each  variable to be expanded at parse time rather than at execution time,
this is the  default behaviour.</p>
</blockquote>
<h2>Overloading a variable:</h2>
<blockquote>
<p>  SETLOCAL can be used more than once in the same batch file so that multiple 
  values can be stored in the same Environment Variable. To keep track of variable definitions, pair each SETLOCAL with a corresponding ENDLOCAL.</p>
<p>SETLOCAL is limited to <a href="http://ss64.org/viewtopic.php?id=1778">32</a> active instantiations per <a href="call.html">CALL</a> level.
At the root level a script can have up to 32 active SETLOCAL, and then CALL a subroutine that gets its own allocation of up to 32 SETLOCAL, etc.<br>
  <br>
  <span class="code">@Echo off <br>
  SETLOCAL<br>
  ::Standard commission<br>
  Set _Commission=20 <br>
  Echo Standard commission %_Commission% <br>
  <br>
::Premium commission<br>
  SETLOCAL <br>
  Set _Commission=30<br>
  Echo Premium commission %_Commission% <br>
  <br>
  ::back to Standard commission<br>
ENDLOCAL<br>
  Echo %_Commission% </span></p>
</blockquote>
<h2>ErrorLevel</h2>
<blockquote>
<p>When run from a batch file, SETLOCAL will always set an ERRORLEVEL.<br>
If given a valid argument or no arguments, a new environment is created <a href="errorlevel.html">%ERRORLEVEL%</a> = 0<br>
If bad parameters given, %ERRORLEVEL% = 1</p>
</blockquote>
<h2>EnableExtensions / DisableExtensions</h2>
<blockquote>
<p>Command Extensions are enabled by default, there is rarely any need to disable them.</p>
<p>If <a href="cmd.html">Command Extensions</a> are permanently disabled or if a script is running under the Windows 95 command processor <span class="code">command.com</span> then SETLOCAL ENABLEEXTENSIONS will not be able to restore them. <br>
  <br>
A batch file to warn if command extensions are not available (see <a href="http://ss64.org/viewtopic.php?id=1834">forum thread</a>): </p>
</blockquote>
<pre>   VERIFY errors 2&gt;nul
   SETLOCAL ENABLEEXTENSIONS
   IF ERRORLEVEL 1 echo Unable to enable extensions</pre>
<p>SETLOCAL is an <a href="syntax-internal.html">internal</a> command.</p>
<p class="quote"><i>"A local shop for local people" - The League Of Gentlemen</i></p>
<p><b>Related:</b></p>
<p><a href="endlocal.html">ENDLOCAL</a> - End localisation of environment changes in a batch file.<br>
<a href="syntax-functions.html">Syntax: Functions</a> - How to package blocks of code<br>
Powershell:  <a href="../ps/set-psdebug.html">Set-PSdebug -strict </a> - Equivalent to 'Option Explicit' in VB <br>
Equivalent bash command (Linux): <a href="../bash/readonly.html">readonly</a> - Mark variables/functions as readonly</p><!-- #BeginLibraryItem "/Library/foot_nt.lbi" --><p>
<!-- windows300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="7649547908"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="setlocal.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

