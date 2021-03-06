---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_nt.lbi" --><!-- #EndLibraryItem --><h1>CALL</h1>  
<p> Call one batch program from another, or call a subroutine.</p>
<pre>Syntax
      CALL [<i>drive</i>:][<i>path</i>]<i>filename</i> [<i><a href="syntax-args.html">parameters</a></i>]

      CALL :<i>label</i> [<i><a href="syntax-args.html">parameters</a></i>]

      CALL <i>internal_cmd</i>

Key:
   pathname     The batch program to run.

   parameters   Any command-line arguments.

   :<i>label</i>       Jump to a label in the current batch script.

   <i>internal_cmd</i> Run an <a href="syntax-internal.html">internal</a> command, first expanding any variables in the argument.</pre>
<h2> CALL a second batch file</h2>
<blockquote>
<p>The CALL command will launch a new batch file context along with any specified parameters. When the end of the second batch file is reached (or if EXIT is used), control will return to just after the initial CALL statement.</p>
<p>Arguments can be passed either as a simple string or using a variable: </p>
<p><span class="code">CALL MyScript.cmd "1234"<br>
CALL OtherScript.cmd %_MyVariable%</span></p>
<p>Example</p>
<p class="code">::----------start main.cmd-----------<br>
 @Echo off <br>
 CALL function.cmd 10 first <br>
Echo    %_description% - %_number% <br>
<br>
CALL function.cmd 15 second <br>
Echo  %_description% - %_number% <br>
 ::----------end main.cmd-------------<br>
 <br>
::----------start function.cmd---------<br>
 @Echo off<br>
 :: Add 25 to %1<br>
 SET /a _number=%1 + 25<br>
 :: Store %2 <br>
  SET _description=[%2]<br>
::----------end function.cmd-----------</p>
<p>In many cases you will also want to use <a href="setlocal.html">SETLOCAL</a> and <a href="endlocal.html">ENDLOCAL</a> to keep variables in different batch files completely separate, this will avoid any potential problems if two scripts use the same variable name.
</p>
<p>If you execute a second batch file <i>without</i> using CALL you may run into some buggy behaviour: if both batch files contain a label with the same name and you have previously used CALL to jump to that label in the first script, you will find execution of the second script starts at the same label. 
Even if the second label does not exist this will still raise an error <i>"cannot find the batch label"</i>. This bug can be avoided by always using CALL.</p>
</blockquote>
<h2>CALL a subroutine (:label)</h2>
<blockquote>
<p>The CALL command will  pass control to the statement after the label specified  along with any specified parameters.<br>
 To exit the  subroutine specify <span class="code">GOTO:eof </span>this will transfer control to the end of  the current subroutine. </p>
<p> A label is defined by a single colon followed by a name. This is the basis of a batch file <a href="syntax-functions.html">function</a>. </p>
<p class="code">CALL :sub_display 123<br>
CALL :sub_display 456<br>
ECHO All Done<br>
GOTO :eof</p>
<p><span class="code">  :sub_display<br>
  ECHO The result is %1<br>
  EXIT /B<br>
  <br>
</span>At the end of the subroutine an <span class="code"><a href="exit.html">EXIT /B</a></span> will return  to the position where you used CALL <br>
(<span class="code">GOTO :eof </span>can also be used for this)</p>
</blockquote>
<h2>Passing by Reference </h2>
<blockquote>
<p>In addition to passing numeric or string values on the command line, it is also possible to pass a <a href="syntax-variables.html">variable</a> name and then use the variable to transfer data between scripts or subroutines. Passing by reference is a slightly more advanced technique but can be particularly useful when the string contains characters that are CMD <a href="syntax-esc.html#delimiters">delimiters</a> or quotes.<br>
</p>
</blockquote>
<pre>    @Echo off
    Echo:
    Set "var1=Red Pippin"
    Set "var2=St Edmunds Pippin"
    Set "var3=Egremont Russet"

    Echo: before: var1=%var1%  var2=%var2% var3=%var3%
    call <b>:myGetFunc</b> var1 var2 var3
    Echo: after: var1=%var1%  var2=%var2% var3=%var3%

    Echo:&amp;pause&amp;goto:eof

    ::----------------------------------------------
    ::-- Function section starts below
    ::----------------------------------------------

    <b>:myGetFunc</b>    - passing a variable by reference
    Set "%~1=return64"
    Set "%~3=return65"
    EXIT /B</pre>
<h2>Buggy behaviour when using CALL</h2>
<blockquote>
<p> Redirection with <span class="code"><a href="syntax-redirection.html">&amp; | &lt;&gt; </a></span> does not work as expected. <br>
If the CALL command contains a caret character within a quoted string "test^ing" , the carets will be <a href="http://stackoverflow.com/a/4095133/1720814">doubled</a>. </p>
</blockquote>
<h2><a id="advanced"></a>Advanced usage : CALLing internal commands</h2>
<pre>    CALL <i>command</i> [<i>command_parameters</i>]</pre>
<blockquote>
<p>CALL can also be used to run any <a href="syntax-internal.html">internal</a> command (SET, ECHO etc) with the exception of FOR and IF.<br>
CALL will  expand any  variables passed on the same line. CALL  <a href="rem.html">REM</a> only partly works:  <a href="syntax-redirection.html">redirection</a> operators, conditional execution operators and <a href="syntax-brackets.html">brackets</a> will be not remarked. </p>
<p>This is undocumented behaviour, in fact whenever CALL is run without a<span class="code"> : </span>prefix, it will always search disk for a batch file/executable called <i>command</i> before running the internal command. The effect of this extra disc access is that CALL SET is significantly slower than CALL, its use in loops or with a large number of variables should be avoided.<br><br>
Example</p>
<pre> @Echo off
 SETLOCAL
 set _server=frodo
 set _var=_server
 <b>CALL SET </b>_result=<b>%%</b>%_var%<b>%%</b>
 echo %_result%</pre>
<p>The line shown in bold has the '%' symbols tripled,  CALL will expand this to: <span class="code">SET _result=frodo</span></p>
<p>Each CALL does one substitution of the variables. (You can also do CALL CALL... for multiple substitutions)</p>
<p>In many cases, <a href="delayedexpansion.html">DelayedExpansion</a> is a better/faster method:</p>
<pre> @Echo Off
 Setlocal EnableDelayedExpansion
 Set _server=frodo
 Set _var=_server
 Set _result=!<b>%_var%</b>!
 Echo %_result%</pre></blockquote>
<h2>Errorlevels</h2>
<blockquote>
<p>If you run <span class="code">CALL SET</span> this will reset <a href="errorlevel.html">%ERRORLEVEL%</a> = 0 even though normally SET ... will fail to reset an ERRORLEVEL<br>
If you CALL a subroutine, the ERRORLEVEL will be left <i>unchanged </i><br>
If you CALL a subroutine, with a label that does not exist %ERRORLEVEL% will be set to 1</p>
</blockquote>
<p>If you CALL an executable or resource kit utility make sure it's available on the machine where the batch will be running, test for it's existence with an <a href="if.html">IF</a> command and throw an error if missing.</p>
<p>CALL is an <a href="syntax-internal.html">internal</a> command, (internally it is closely related to GOTO).<br>
If <a href="cmd.html">Command Extensions</a> are disabled, the CALL command will not accept batch labels. <br>
<br>
<i class="quote">“My mother never saw the irony in calling me a son-of-a-bitch” ~ Jack Nicholson </i> <br>
<b><br>
Related:</b></p>
<p><a href="syntax-functions.html">Syntax: Functions</a> - How to package blocks of code.<br>
<a href="cmd.html">CMD</a> - can be used to call a subsequent batch and ALWAYS return even if errors occur.<br>
<a href="goto.html">GOTO</a> - jump to a label or GOTO :eof <br>
<a href="start.html">START</a> - Start a separate window to run a specified program or command.<br>
Equivalent bash command (Linux): <a href="../bash/source.html">. (source)</a> - Run a command script in the current shell, <a href="../bash/builtin.html">builtin</a> - Run a shell builtin.</p><!-- #BeginLibraryItem "/Library/foot_nt.lbi" --><p><script async="" src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
<!-- windows300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="7649547908"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

