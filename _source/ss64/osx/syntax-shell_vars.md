---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #EndLibraryItem --><h1>Special bash shell variables</h1>
<p>Variables SET by the shell and variables <a href="#used">USED</a> by the shell </p>
<pre>The following variables are set by the shell:

       BASH   Expands to the full file name used to invoke this instance of bash.
       BASH_ARGC
              An array variable whose values are the number of parameters in each frame of the current  bash
              execution  call  stack.  The number of parameters to the current subroutine (shell function or
              script executed with . or source) is at the top of the stack.  When a subroutine is  executed,
              the  number of parameters passed is pushed onto BASH_ARGC.  The shell sets BASH_ARGC only when
              in extended debugging mode (see the description of the extdebug option to  the  shopt  builtin
              below)
       BASH_ARGV
              An  array  variable containing all of the parameters in the current bash execution call stack.
              The final parameter of the last subroutine call is at the top of the stack; the first  parame-ter parameter
              ter  of the initial call is at the bottom.  When a subroutine is executed, the parameters sup-plied supplied
              plied are pushed onto BASH_ARGV.  The shell sets BASH_ARGV only  when  in  extended  debugging
              mode (see the description of the extdebug option to the shopt builtin below)
       BASH_COMMAND
              The  command currently being executed or about to be executed, unless the shell is executing a
              command as the result of a trap, in which case it is the command executing at the time of  the
              trap.
       BASH_EXECUTION_STRING
              The command argument to the -c invocation option.
       BASH_LINENO
              An  array  variable  whose  members are the line numbers in source files corresponding to each
              member of FUNCNAME.  ${BASH_LINENO[$i]} is the line number in the source  file  where  ${FUNC-NAME[$ifP]} ${FUNCNAME[$ifP]}
              NAME[$ifP]} was called.  The corresponding source file name is ${BASH_SOURCE[$i]}.  Use LINENO
              to obtain the current line number.
       BASH_REMATCH
              An array variable whose members are assigned by the =~ binary operator to the  [[  conditional
              command.   The  element  with index 0 is the portion of the string matching the entire regular
              expression.  The element with index n is the portion of the string matching the nth  parenthe-sized parenthesized
              sized subexpression.  This variable is read-only.
       BASH_SOURCE
              An  array variable whose members are the source filenames corresponding to the elements in the
              FUNCNAME array variable.
       BASH_SUBSHELL
              Incremented by one each time a subshell or subshell environment is spawned.  The initial value
              is 0.
       BASH_VERSINFO
              A  readonly  array  variable whose members hold version information for this instance of bash.
              The values assigned to the array members are as follows:
              BASH_VERSINFO[0]        The major version number (the release).
              BASH_VERSINFO[1]        The minor version number (the version).
              BASH_VERSINFO[2]        The patch level.
              BASH_VERSINFO[3]        The build version.
              BASH_VERSINFO[4]        The release status (e.g., beta1).
              BASH_VERSINFO[5]        The value of MACHTYPE.

       BASH_VERSION
              Expands to a string describing the version of this instance of bash.

       COMP_CWORD
              An index into ${COMP_WORDS} of the word containing the current cursor position.  This variable
              is  available  only  in shell functions invoked by the programmable completion facilities (see
              Programmable Completion below).

       COMP_LINE
              The current command line.  This variable is available only in  shell  functions  and  external
              commands  invoked  by  the  programmable  completion  facilities  (see Programmable Completion
              below).

       COMP_POINT
              The index of the current cursor position relative to the beginning of the current command.  If
              the  current  cursor position is at the end of the current command, the value of this variable
              is equal to ${% raw %}{#{% endraw %}COMP_LINE}.  This variable is available only in shell  functions  and  external
              commands  invoked  by  the  programmable  completion  facilities  (see Programmable Completion
              below).

       COMP_WORDBREAKS
              The set of characters that the Readline library treats as word separators when performing word
              completion.   If COMP_WORDBREAKS is unset, it loses its special properties, even if it is sub-sequently subsequently
              sequently reset.

       COMP_WORDS
              An array variable (see Arrays below) consisting of the individual words in the current command
              line.   The  words  are split on shell metacharacters as the shell parser would separate them.
              This variable is available only in shell functions  invoked  by  the  programmable  completion
              facilities (see Programmable Completion below).

       DIRSTACK
              An  array  variable (see Arrays below) containing the current contents of the directory stack.
              Directories appear in the stack in the order they are displayed by the dirs builtin.   Assign-ing Assigning
              ing  to members of this array variable may be used to modify directories already in the stack,
              but the pushd and popd builtins must be used to add and  remove  directories.   Assignment  to
              this  variable will not change the current directory.  If DIRSTACK is unset, it loses its spe-cial special
              cial properties, even if it is subsequently reset.

       EUID   Expands to the effective user ID of the current user,  initialized  at  shell  startup.   This
              variable is readonly.

       FUNCNAME
              An  array variable containing the names of all shell functions currently in the execution call
              stack.  The element with index 0 is the name of any currently-executing shell  function.   The
              bottom-most  element is "main".  This variable exists only when a shell function is executing.
              Assignments to FUNCNAME have no effect and return an error status.  If FUNCNAME is  unset,  it
              loses its special properties, even if it is subsequently reset.

       GROUPS An  array  variable  containing  the  list  of  groups  of which the current user is a member.
              Assignments to GROUPS have no effect and return an error status.  If GROUPS is unset, it loses
              its special properties, even if it is subsequently reset.

       HISTCMD
              The  history  number,  or  index  in  the history list, of the current command.  If HISTCMD is
              unset, it loses its special properties, even if it is subsequently reset.

       HOSTNAME
              Automatically set to the name of the current host.

       HOSTTYPE
              Automatically set to a string that uniquely describes the type of machine  on  which  bash  is
              executing.  The default is system-dependent.

       LINENO Each  time  this  parameter is referenced, the shell substitutes a decimal number representing
              the current sequential line number (starting with 1) within a script or function.  When not in
              a  script or function, the value substituted is not guaranteed to be meaningful.  If LINENO is
              unset, it loses its special properties, even if it is subsequently reset.

       MACHTYPE
              Automatically set to a string that fully describes the system type on which bash is executing,
              in the standard GNU cpu-company-system format.  The default is system-dependent.

       OLDPWD The previous working directory as set by the cd command.

       OPTARG The  value  of  the  last  option argument processed by the getopts builtin command (see SHELL
              BUILTIN COMMANDS below).

       OPTIND The index of the next argument to be processed by  the  getopts  builtin  command  (see  SHELL
              BUILTIN COMMANDS below).

       OSTYPE Automatically  set to a string that describes the operating system on which bash is executing.
              The default is system-dependent.

       PIPESTATUS
              An array variable (see Arrays below) containing a list of exit status  values  from  the  pro-cesses processes
              cesses in the most-recently-executed foreground pipeline (which may contain only a single com-mand). command).
              mand).

       PPID   The process ID of the shell's parent.  This variable is readonly.

       PWD    The current working directory as set by the cd command.

       RANDOM Each time this parameter is referenced, a random integer between 0  and  32767  is  generated.
              The  sequence  of random numbers may be initialized by assigning a value to RANDOM.  If RANDOM
              is unset, it loses its special properties, even if it is subsequently reset.

       REPLY  Set to the line of input read by the read builtin command when no arguments are supplied.

       SECONDS
              Each time this parameter is referenced, the  number  of  seconds  since  shell  invocation  is
              returned.  If a value is assigned to SECONDS, the value returned upon subsequent references is
              the number of seconds since the assignment plus the value assigned.  If SECONDS is  unset,  it
              loses its special properties, even if it is subsequently reset.

       SHELLOPTS
              A  colon-separated  list  of enabled shell options.  Each word in the list is a valid argument
              for the -o option to the set builtin command (see SHELL BUILTIN COMMANDS below).  The  options
              appearing  in  SHELLOPTS are those reported as on by set -o.  If this variable is in the envi-ronment environment
              ronment when bash starts up, each shell option in the list will be enabled before reading  any
              startup files.  This variable is read-only.

       SHLVL  Incremented by one each time an instance of bash is started.

       UID    Expands  to  the  user ID of the current user, initialized at shell startup.  This variable is
              readonly.

The<a id="used"></a> following variables are used by the shell.
In some cases, bash assigns a default value to a variable; these cases are noted below.

       BASH_ENV
              If  this parameter is set when bash is executing a shell script, its value is interpreted as a
              filename containing commands to initialize the shell, as in ~/.bashrc.  The value of  BASH_ENV
              is  subjected  to  parameter  expansion, command substitution, and arithmetic expansion before
              being interpreted as a file name.  PATH is not used to search for the resultant file name.
       CDPATH The search path for the cd command.  This is a colon-separated list of  directories  in  which
              the  shell  looks  for destination directories specified by the cd command.  A sample value is
              ".:~:/usr".
       COLUMNS
              Used by the select builtin command to determine the terminal  width  when  printing  selection
              lists.  Automatically set upon receipt of a SIGWINCH.
       COMPREPLY
              An array variable from which bash reads the possible completions generated by a shell function
              invoked by the programmable completion facility (see Programmable Completion below).
       EMACS  If bash finds this variable in the environment when  the  shell  starts  with  value  "t",  it
              assumes that the shell is running in an emacs shell buffer and disables line editing.
       FCEDIT The default editor for the fc builtin command.
       FIGNORE
              A colon-separated list of suffixes to ignore when performing filename completion (see READLINE
              below).  A filename whose suffix matches one of the entries in FIGNORE is  excluded  from  the
              list of matched filenames.  A sample value is ".o:~".
       GLOBIGNORE
              A  colon-separated  list  of  patterns defining the set of filenames to be ignored by pathname
              expansion.  If a filename matched by a pathname expansion pattern also matches one of the pat-terns patterns
              terns in GLOBIGNORE, it is removed from the list of matches.
       HISTCONTROL
              A  colon-separated  list of values controlling how commands are saved on the history list.  If
              the list of values includes ignorespace, lines which begin with  a  space  character  are  not
              saved  in  the history list.  A value of ignoredups causes lines matching the previous history
              entry to not be saved.  A value of ignoreboth is shorthand for ignorespace and ignoredups.   A
              value  of erasedups causes all previous lines matching the current line to be removed from the
              history list before that line is saved.  Any value not in the above list is ignored.  If HIST-CONTROL HISTCONTROL
              CONTROL  is  unset,  or does not include a valid value, all lines read by the shell parser are
              saved on the history list, subject to the value of  HISTIGNORE.   The  second  and  subsequent
              lines of a multi-line compound command are not tested, and are added to the history regardless
              of the value of HISTCONTROL.
       HISTFILE
              The name of the file in which command history is saved (see HISTORY below).  The default value
              is  ~/.bash_history.   If  unset,  the  command history is not saved when an interactive shell
              exits.
       HISTFILESIZE
              The maximum number of lines contained in the history file.  When this variable is  assigned  a
              value, the history file is truncated, if necessary, by removing the oldest entries, to contain
              no more than that number of lines.  The default value is 500.  The history file is also  trun-cated truncated
              cated to this size after writing it when an interactive shell exits.
       HISTIGNORE
              A  colon-separated  list of patterns used to decide which command lines should be saved on the
              history list.  Each pattern is anchored at the beginning of the line and must match  the  com-plete complete
              plete  line  (no implicit `*' is appended).  Each pattern is tested against the line after the
              checks specified by HISTCONTROL are applied.  In addition to the normal shell pattern matching
              characters,  `&amp;' matches the previous history line.  `&amp;' may be escaped using a backslash; the
              backslash is removed before attempting a match.  The second and subsequent lines of  a  multi-line multiline
              line  compound command are not tested, and are added to the history regardless of the value of
              HISTIGNORE.
       HISTSIZE
              The number of commands to remember in the command history (see HISTORY  below).   The  default
              value is 500.
       HISTTIMEFORMAT
              If  this variable is set and not null, its value is used as a format string for strftime(3) to
              print the time stamp associated with each history entry displayed by the history builtin.   If
              this  variable  is  set,  time stamps are written to the history file so they may be preserved
              across shell sessions.
       HOME   The home directory of the current user; the default argument for the cd builtin command.   The
              value of this variable is also used when performing tilde expansion.
       HOSTFILE
              Contains  the  name  of  a  file in the same format as /etc/hosts that should be read when the
              shell needs to complete a hostname.  The list of possible hostname completions may be  changed
              while  the shell is running; the next time hostname completion is attempted after the value is
              changed, bash adds the contents of the new file to the existing list.  If HOSTFILE is set, but
              has no value, bash attempts to read /etc/hosts to obtain the list of possible hostname comple-tions. completions.
              tions.  When HOSTFILE is unset, the hostname list is cleared.
       IFS    The Internal Field Separator that is used for word splitting  after  expansion  and  to  split
              lines  into  words  with  the  read builtin command.  The default value is ``<space><tab><new- line="">''.
       IGNOREEOF
              Controls the action of an interactive shell on receipt of an EOF character as the sole  input.
              If set, the value is the number of consecutive EOF characters which must be typed as the first
              characters on an input line before bash exits.  If the variable exists but  does  not  have  a
              numeric  value, or has no value, the default value is 10.  If it does not exist, EOF signifies
              the end of input to the shell.
       INPUTRC
              The filename for the readline startup file, overriding the default of ~/.inputrc (see READLINE
              below).
       LANG   Used  to determine the locale category for any category not specifically selected with a vari-able variable
              able starting with LC_.
       LC_ALL This variable overrides the value of LANG and any other LC_ variable specifying a locale cate-gory. category.
              gory.
       LC_COLLATE
              This  variable determines the collation order used when sorting the results of pathname expan-sion, expansion,
              sion, and determines the behavior of range expressions,  equivalence  classes,  and  collating
              sequences within pathname expansion and pattern matching.
       LC_CTYPE
              This  variable  determines  the  interpretation  of  characters  and the behavior of character
              classes within pathname expansion and pattern matching.
       LC_MESSAGES
              This variable determines the locale used to translate double-quoted strings preceded by a $.
       LC_NUMERIC
              This variable determines the locale category used for number formatting.
       LINES  Used by the select builtin command to determine  the  column  length  for  printing  selection
              lists.  Automatically set upon receipt of a SIGWINCH.
       MAIL   If this parameter is set to a file name and the MAILPATH variable is not set, bash informs the
              user of the arrival of mail in the specified file.
       MAILCHECK
              Specifies how often (in seconds) bash checks for mail.  The default is 60 seconds.  When it is
              time to check for mail, the shell does so before displaying the primary prompt.  If this vari-able variable
              able is unset, or set to a value that is not a number greater than or equal to zero, the shell
              disables mail checking.
       MAILPATH
              A  colon-separated  list of file names to be checked for mail.  The message to be printed when
              mail arrives in a particular file may be specified by separating the file name from  the  mes-sage message
              sage  with a `?'.  When used in the text of the message, $_ expands to the name of the current
              mailfile.  Example:
              MAILPATH='/var/mail/bfox?"You have mail":~/shell-mail?"$_ has mail!"'
              Bash supplies a default value for this variable, but the location of the user mail files  that
              it uses is system dependent (e.g., /var/mail/$USER).
       OPTERR If  set  to the value 1, bash displays error messages generated by the getopts builtin command
              (see SHELL BUILTIN COMMANDS below).  OPTERR is initialized to 1 each time the shell is invoked
              or a shell script is executed.
       PATH   The  search path for commands.  It is a colon-separated list of directories in which the shell
              looks for commands (see COMMAND EXECUTION below).  A zero-length (null) directory name in  the
              value  of PATH indicates the current directory.  A null directory name may appear as two adja-cent adjacent
              cent colons, or as an initial or trailing colon.  The default path is system-dependent, and is
              set     by     the    administrator    who    installs    bash.     A    common    value    is
              ``/usr/gnu/bin:/usr/local/bin:/usr/ucb:/bin:/usr/bin''.
       POSIXLY_CORRECT
              If this variable is in the environment when bash starts, the shell enters  posix  mode  before
              reading  the  startup  files, as if the --posix invocation option had been supplied.  If it is
              set while the shell is running, bash enables posix mode, as if the command set  -o  posix  had
              been executed.
       PROMPT_COMMAND
              If set, the value is executed as a command prior to issuing each primary prompt.
       PS1    The  value  of this parameter is expanded (see PROMPTING below) and used as the primary prompt
              string.  The default value is ``\s-\v\$ ''.
       PS2    The value of this parameter is expanded as with PS1 and used as the secondary  prompt  string.
              The default is ``&gt; ''.
       PS3    The  value  of  this parameter is used as the prompt for the select command (see SHELL GRAMMAR
              above).
       PS4    The value of this parameter is expanded as with PS1 and the value is printed before each  com-mand command
              mand bash displays during an execution trace.  The first character of PS4 is replicated multi-ple multiple
              ple times, as necessary, to indicate multiple levels of indirection.  The default is ``+ ''.
       SHELL  The full pathname to the shell is kept in this environment variable.  If it is  not  set  when
              the shell starts, bash assigns to it the full pathname of the current user's login shell.
       TIMEFORMAT
              The  value  of this parameter is used as a format string specifying how the timing information
              for pipelines prefixed with the time reserved word  should  be  displayed.   The  %  character
              introduces  an  escape  sequence  that  is expanded to a time value or other information.  The
              escape sequences and their meanings are as follows; the braces denote optional portions.
              %%        A literal %.
              %[p][l]R  The elapsed time in seconds.
              %[p][l]U  The number of CPU seconds spent in user mode.
              %[p][l]S  The number of CPU seconds spent in system mode.
              %P        The CPU percentage, computed as (%U + %S) / %R.

              The optional p is a digit specifying the precision, the number of fractional  digits  after  a
              decimal  point.  A value of 0 causes no decimal point or fraction to be output.  At most three
              places after the decimal point may be specified; values of p greater than 3 are changed to  3.
              If p is not specified, the value 3 is used.

              The optional l specifies a longer format, including minutes, of the form MMmSS.FFs.  The value
              of p determines whether or not the fraction is included.

              If   this   variable   is   not   set,   bash    acts    as    if    it    had    the    value
              $'\nreal\t%3lR\nuser\t%3lU\nsys%3lS'.   If  the  value  is null, no timing information is dis-played. displayed.
              played.  A trailing newline is added when the format string is displayed.

       TMOUT  If set to a value greater than zero, TMOUT is treated as the  default  timeout  for  the  read
              builtin.   The  select  command  terminates  if input does not arrive after TMOUT seconds when
              input is coming from a terminal.  In an interactive shell, the value  is  interpreted  as  the
              number  of  seconds to wait for input after issuing the primary prompt.  Bash terminates after
              waiting for that number of seconds if input does not arrive.

       TMPDIR If set, Bash uses its value as the name of a directory in which Bash creates  temporary  files
              for the shell's use.

       auto_resume
              This  variable  controls how the shell interacts with the user and job control.  If this vari-able variable
              able is set, single word simple commands without redirections are treated  as  candidates  for
              resumption  of  an existing stopped job.  There is no ambiguity allowed; if there is more than
              one job beginning with the string typed, the job most recently accessed is selected.  The name
              of  a stopped job, in this context, is the command line used to start it.  If set to the value
              exact, the string supplied must match the name of a stopped job exactly; if set to  substring,
              the  string  supplied  needs to match a substring of the name of a stopped job.  The substring
              value provides functionality analogous to the %?  job identifier (see JOB CONTROL below).   If
              set  to  any  other  value, the supplied string must be a prefix of a stopped job's name; this
              provides functionality analogous to the %string job identifier.

       histchars
              The two or three characters which control history  expansion  and  tokenization  (see  HISTORY
              EXPANSION below).  The first character is the history expansion character, the character which
              signals the start of a history expansion, normally `!'.  The second  character  is  the  quick
              substitution  character,  which  is  used  as  shorthand  for  re-running the previous command
              entered, substituting one string for another  in  the  command.   The  default  is  `^'.   The
              optional  third character is the character which indicates that the remainder of the line is a
              comment when found as the first character of a word, normally `#'.  The history comment  char-acter character
              acter  causes history substitution to be skipped for the remaining words on the line.  It does
              not necessarily cause the shell parser to treat the rest of the line as a comment.</new-></tab></space></pre>
<p><b>Related commands</b>:<br>
  <a href="syntax.html">OS X Syntax</a></p><!-- #BeginLibraryItem "/Library/foot_osx.lbi" --><p><script async="" src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
<!-- OSX300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="1823340303"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->
