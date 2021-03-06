---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_osx.lbi" --><!-- #EndLibraryItem --><h1>shopt</h1> 
<p>Set shell options - toggle the value of variables which control optional shell behavior.</p>
<pre>Syntax
      shopt [-pqsu] [-o] [<i>optname</i> ...]

Key
   -s     Enable (set) each <i>optname</i>.
   -u     Disable (unset) each <i>optname</i>.
   -q     Suppress normal output (quiet mode); the return status indicates whether the optname
          is set or unset.
   -o     Restrict the values of <i>optname </i>to be those defined for <a href="set.html">set -o</a>.

Options:

   cdable_vars
          If set, an argument to the cd builtin command that is not a directory is assumed to be
          the name of a variable whose value is the directory to change to.
   cdspell If  set, minor errors in the spelling of a directory component in a cd command will be
          corrected.  The errors checked for are transposed characters, a missing character, and
          one character too many.  If a correction is found, the corrected file name is printed,
          and the command proceeds.  This option is only used by interactive shells.
   checkhash
          If set, bash checks that a command found in the hash table  exists  before  trying  to
          execute  it.  If a hashed command no longer exists, a normal path search is performed.
   checkwinsize
          If set, bash checks the window size after each command and, if necessary, updates  the
          values of LINES and COLUMNS.
   cmdhist If set, bash attempts to save all lines of a multiple-line command in the same history
           entry.  This allows easy re-editing of multi-line commands.
   dotglob If set, bash includes filenames beginning with a `.' in the results of pathname expansion.
   execfail
          If  set, a non-interactive shell will not exit if it cannot execute the file specified
          as an argument to the exec builtin command.  An interactive shell  does  not  exit  if
          exec fails.
   expand_aliases
          If set, aliases are expanded as described above under ALIASES.  This option is enabled
          by default for interactive shells.
   extdebug
          If set, behavior intended for use by debuggers is enabled:
          1.     The -F option to the declare builtin displays the source  file  name  and  line
                 number corresponding to each function name supplied as an argument.
          2.     If the command run by the DEBUG trap returns a non-zero value, the next command
                 is skipped and not executed.
          3.     If the command run by the DEBUG trap returns a value of 2,  and  the  shell  is
                 executing in a subroutine (a shell function or a shell script executed by the .
                 or source builtins), a call to return is simulated.
          4.     BASH_ARGC and BASH_ARGV are updated as described in their descriptions above.
          5.     Function tracing is enabled:  command substitution, shell functions, and subshells
                 invoked with ( command ) inherit the DEBUG and RETURN traps.
          6.     Error tracing is enabled:  command substitution, shell functions, and subshells
                 invoked with ( command ) inherit the ERROR trap.
   extglob
          If set, the extended pattern matching features described above under  Pathname Expansion
          are enabled.
   extquote
          If  set,  $'string'  and $"string" quoting is performed within ${parameter} expansions
          enclosed in double quotes.  This option is enabled by default.
   failglob
          If set, patterns which fail to match filenames during pathname expansion result in  an
          expansion error.
   force_fignore
          If set, the suffixes specified by the FIGNORE shell variable cause words to be ignored
          when performing word completion even if the ignored words are the only possible completions.
          See  SHELL VARIABLES  for a description of FIGNORE.  This option is enabled by default.
   gnu_errfmt
          If set, shell error messages are written in the standard GNU error message format.
   histappend
          If set, the <a href="history.html">history list</a> is appended to the file named by the value of the HISTFILE
          variable when the shell exits, rather than overwriting the file.
   histreedit
          If  set, and readline is being used, a user is given the opportunity to re-edit a
          failed history substitution.
   histverify
          If set, and readline is being used, the results of history substitution are not immediately
          passed  to  the shell parser.  Instead, the resulting line is loaded into the
          readline editing buffer, allowing further modification.
   hostcomplete
          If set, and readline is being used, bash will attempt to perform  hostname  completion
          when  a  word containing a @ is being completed (see Completing under READLINE).
          This is enabled by default.
   huponexit
          If set, bash will send SIGHUP to all jobs when an interactive login shell exits.
   interactive_comments
          If set, allow a word beginning with # to cause that word and all remaining  characters
          on  that line to be ignored in an interactive shell (see COMMENTS).  This option
          is enabled by default.
   lithist If set, and the cmdhist option is enabled, multi-line commands are saved to  the  his-tory history
          tory with embedded newlines rather than using semicolon separators where possible.
   login_shell
          The  shell  sets this option if it is started as a login shell (see INVOCATION).
          The value may not be changed.
   mailwarn
          If set, and a file that bash is checking for mail has been  accessed  since  the  last
          time  it was checked, the message ``The mail in mailfile has been read'' is displayed.
   no_empty_cmd_completion
          If set, and readline is being used, bash will not attempt to search the PATH for  pos-sible possible
          sible completions when completion is attempted on an empty line.
   nocaseglob
          If  set, bash matches filenames in a case-insensitive fashion when performing pathname
          expansion (see Pathname Expansion).
   nocasematch
          If set, bash matches patterns in a case-insensitive fashion when  performing  matching
          while executing case or [[ conditional commands.
   nullglob
          If  set,  bash  allows patterns which match no files (see Pathname Expansion above) to
          expand to a null string, rather than themselves.
   progcomp
          If set, the programmable completion facilities (see Programmable Completion above) are
          enabled.  This option is enabled by default.
   promptvars
          If  set,  prompt strings undergo parameter expansion, command substitution, arithmetic
          expansion, and quote removal after being expanded as  described  in  PROMPTING  above.
          This option is enabled by default.
   restricted_shell
          The  shell  sets this option if it is started in restricted mode (see RESTRICTED SHELL
          below).  The value may not be changed.  This is not reset when the startup  files  are
          executed, allowing the startup files to discover whether or not a shell is restricted.
   shift_verbose
          If set, the shift builtin prints an error message when the  shift  count  exceeds  the
          number of positional parameters.
   sourcepath
          If set, the source (.) builtin uses the value of PATH to find the directory containing
          the file supplied as an argument.  This option is enabled by default.
   xpg_echo
          If set, the echo builtin expands backslash-escape sequences by default.</pre>
<p> With no options, or  with the -p option, a list of all settable options is displayed, with an indication of whether or not each is set. 
</p><p>The -p option causes output to be displayed in a form that may be reused as input. 
</p><p>If either -s or -u is used with no <i>optname</i> arguments, the display is limited to those options which are set or unset, respectively. Unless otherwise noted, the shopt options are disabled (unset) by default.
</p><p> The return status when listing options is zero if all optnames are enabled, non-zero otherwise.<br>If multiple <i>optname</i> arguments are given with -q, the return status is
zero if all <i>optnames</i> are enabled; non-zero otherwise.<br>
When setting or unsetting options, the return status is zero unless an <i>optname</i> is not a valid shell option.</p>
<p><span class="code">shopt</span> is a bash builtin command.</p>
<p class="quote"><i>“Try to be like the turtle - at ease in your own shell” ~ Bill Copeland</i></p>
<p><b>Related:</b></p>
<p> <a href="unset.html">unset</a> - Remove variable or function names</p><!-- #BeginLibraryItem "/Library/foot_osx.lbi" --><p>
<!-- OSX300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="1823340303"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="shopt.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->
