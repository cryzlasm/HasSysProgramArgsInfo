---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #EndLibraryItem --><h1>Command line arguments - bash</h1>
<p>PARAMETERS</p>
<p>A parameter is an entity that stores values. It can be a name, a number, or one of the special characters {Special Parameters}. A variable is a parameter denoted by a name. A variable has a value and zero or more attributes. Attributes are assigned using <a href="declare.html">declare</a></p>
<p>A parameter is set if it has been assigned a value. The null string is a valid value. Once a variable is set, it may be unset only by using <a href="unset.html">unset</a>.</p>
<p>A variable may be assigned to by a statement of the form</p>
<p class="code"> name=[value]</p>
<p>If <i>value</i> is not given, the variable is assigned the null string. All values undergo tilde expansion,parameter and variable expansion, command substitution, arithmetic expansion, and quote removal (see EXPANSION ). If the variable has its integer attribute set, then <i>value</i> is evaluated as an arithmetic expression even if the $((...)) expansion is not used (see Arithmetic Expansion below).</p>
<p>Word splitting is not performed, with the exception of "$@" as explained below under Special Parameters. Pathname expansion is not performed. Assignment statements may also appear as arguments to the alias, declare, typeset, export, readonly, and local builtin commands.</p>
<p>In the context where an assignment statement is assigning a value to a shell variable or array index, the += operator can be used to append to or add to the variable's previous value. When += is applied to a variable for which the integer attribute has been set, value is evaluated as an arithmetic expression and added to the variable's current value, which is also evaluated. When += is applied to an array variable using compound assignment (see Arrays below), the variable's value is not unset (as it is when using =), and new values are appended to the array beginning at one greater than the array's maximum index. When applied to a string-valued variable, value is expanded and appended to<br>
the variable's value.</p>
<h2>Positional Parameters</h2>
<blockquote>
<p> A positional parameter is a parameter denoted by one or more digits, other than the single  digit  0.<br>       
Positional  parameters  are  assigned from the shell's arguments when it is invoked, and may be reas-signed reassigned       
signed using the set builtin command.  Positional parameters may not be assigned to  with  assignment       
statements.   The  positional  parameters  are temporarily replaced when a shell function is executed       
(see FUNCTIONS below).<br>
<br>       
When a positional parameter consisting of more than a single digit is expanded, it must  be  enclosed       
in braces (see EXPANSION below).</p>
</blockquote>
<p><b>Special Parameters </b></p>
<p> The shell treats several parameters specially. These parameters may only be referenced; assignment to them is not allowed.</p>
<pre>    *      Expands to the positional parameters, starting from one.  When  the  expansion  occurs  within
            double  quotes,  it expands to a single word with the value of each parameter separated by the
            first character of the IFS special variable.  That is,  "$*"  is  equivalent  to  "$1c$2c...",
            where c is the first character of the value of the IFS variable.  If IFS is unset, the parame-ters parameters
            ters are separated by spaces.  If IFS is null, the parameters are joined  without  intervening
            separators.

    @      Expands  to  the  positional  parameters, starting from one.  When the expansion occurs within
            double quotes, each parameter expands to a separate word.  That is, "$@" is equivalent to "$1"
            "$2"  ...   If  the  double-quoted  expansion occurs within a word, the expansion of the first
            parameter is joined with the beginning part of the original word, and  the  expansion  of  the
            last  parameter  is  joined  with the last part of the original word.  When there are no posi-tional positional
            tional parameters, "$@" and $@ expand to nothing (i.e., they are removed).

    #      Expands to the number of positional parameters in decimal.

    ?      Expands to the status of the most recently executed foreground pipeline.

    -      Expands to the current option flags as specified upon invocation, by the set builtin  command,
            or those set by the shell itself (such as the -i option).

    $      Expands to the process ID of the shell.  In a () subshell, it expands to the process ID of the
            current shell, not the subshell.

    !      Expands to the process ID of the most recently executed background (asynchronous) command.

    0      Expands to the name of the shell or shell script.  This is set at  shell  initialization.   If
            bash  is  invoked  with  a  file  of commands, $0 is set to the name of that file.  If bash is
            started with the -c option, then $0 is set to the first argument after the string to  be  exe-cuted, executed,
            cuted, if one is present.  Otherwise, it is set to the file name used to invoke bash, as given
            by argument zero.

    _      At shell startup, set to the absolute pathname used to invoke the shell or shell script  being
            executed  as  passed  in  the environment or argument list.  Subsequently, expands to the last
            argument to the previous command, after expansion.  Also set to  the  full  pathname  used  to
            invoke  each  command  executed  and placed in the environment exported to that command.  When
            checking mail, this parameter holds the name of the mail file currently being checked.</pre>
<p><b>Related:</b></p>
<p><a href="syntax.html">OS X Syntax</a></p><!-- #BeginLibraryItem "/Library/foot_osx.lbi" --><p>
<!-- OSX300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="1823340303"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="syntax-args.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->
