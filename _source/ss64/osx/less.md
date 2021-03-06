---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_osx.lbi" --><!-- #EndLibraryItem --><h1>less</h1> 
<p>Page through text one screenful at a time, search through output. <span class="code">less</span> provides <a href="more.html" class="code">more</a> emulation plus extensive enhancements such as allowing backward paging through a file as well as forward movement.</p>
<pre>Syntax
      less [-[+]aBcCdeEfFgGiIJmMnNqQrRsSuUVwWX~]
              [-b <i>space</i>] [-h <i>lines</i>] [-j <i>line</i>] [-k <i>keyfile</i>]
                 [-{oO} <i>logfile</i>] [-p <i>pattern</i>] [-P <i>prompt</i>] [-t <i>tag</i>]
                    [-T <i>tagsfile</i>] [-x <i>tab</i>,...] [-y <i>lines</i>] [-[z] lines]
                       [-# <i>shift</i>] [+[+]cmd] [--] [<i>filename</i>]...

      less -?
      less --help
      less -V
      less --version

Options - <a href="less_options.html">The options above are described in full on this page</a>

Commands</pre>
<p>In  the following descriptions, ^X means control-X.  ESC stands for the
ESCAPE  key;  for  example  ESC-v  means   the  two  character  sequence "ESCAPE", then "v".</p>
<pre>   h or H    Help: display a summary of these commands. If you forget all
                  the other commands, remember this one.

   SPACE or ^V or f or ^F
        Scroll forward N  lines, default one window (see  option  -z
        below).  If N is more  than  the screen size, only the final
        screenful is displayed.  Warning: some systems use ^V as a  spe-
        cial literalization character.

   z      Like  SPACE, but if N is specified, it becomes the new window
        size.

   ESC-SPACE
        Like SPACE, but scrolls a full screenful, even i  it reaches
        end-of-file in the process.

   RETURN or ^N or e or ^E or j or ^J
        Scroll  forward N lines, default 1. The entire N lines are dis-
        played, even if N is more than the screen size.

   d or ^D
        Scroll forward N lines, default one half of the screen size.  If
        N   is specified, it becomes the new default for subsequent d and
        u commands.

   b or ^B or ESC-v
        Scroll backward N lines, default one window  (see  option  -z
        below).  If N is more than the screen size, only the final
        screenful is displayed.

   w      Like ESC-v, but if N is specified, it becomes  the  new  window
        size.

   y or ^Y or ^P or k or ^K
        Scroll backward N lines, default 1.  The entire N lines are dis-
        played, even if N is more than the screen size.  Warning:  some
        systems use ^Y as a special job control character.

   u or ^U
        Scroll  backward  N  lines, default one half of the screen size.
        If N is specified, it becomes the new default for   subsequent  d
        and u commands.
   ESC-) or RIGHTARROW
        Scroll  horizontally right N characters, default half the screen
        width (see the -# option). If a  number  N is  specified,  it
        becomes  the  default  for  future RIGHTARROW and LEFTARROW com-
        mands.  While the text is scrolled, it acts  as  though  the  -S
        option (chop lines) were in effect.
   ESC-( or LEFTARROW
        Scroll horizontally left N characters, default half the screen
        width (see the -# option). If a  number   N  is  specified,  it
        becomes the default for future RIGHTARROW and LEFTARROW com-
        mands.

   r or ^R or ^L
        Repaint the screen.

   R      Repaint the screen, discarding any buffered input. Useful  if
        the file is changing while it is being viewed.
   F      Scroll  forward, and keep trying to read when the end of file is
        reached.  Normally this command would be used  when  already  at
        the  end of the file. It is a way to monitor the tail of a file
        which is growing while it is being viewed. (The  behavior  is
        similar to the "tail -f" command.)

   g or &lt; or ESC-&lt;
        Go to line N in the file, default 1 (beginning of file). (Warn-
        ing: this can be slow if N is large.)

   G or &gt; or ESC-&gt;
        Go to line N in the file, default the end of the  file. (Warn-
        ing:  this can be slow if N is large, or if N is not specified
        and standard input, rather than a file, is being read.)

   p or % Go to a position N percent into the file. N should be between 0
        and 100.

   {      If a left curly bracket appears in the top line displayed on the
        screen, the { command will go to  the  matching  right   curly
        bracket.   The matching right curly bracket is positioned on the
        bottom line of the screen. If there is more than one left curly
        bracket on the top line, a number N can be used to specify the
        N-th bracket on the line.

   }      If a right curly bracket appears in the bottom line displayed on
        the  screen, the   }  command will go to the matching left curly
        bracket.  The matching left curly bracket is positioned  on  the
        top  line   of the screen.   If there is more than one right curly
        bracket on the top line, a number N can be used to  specify  the
        N-th bracket on the line.
   (      Like {, but applies to parentheses rather than curly brackets.

   )      Like }, but applies to parentheses rather than curly brackets.

   [      Like  {, but applies to square brackets rather than curly brackets.

   ]      Like }, but applies to square brackets rather than curly  brackets.

   ESC-^F Followed  by two characters, acts like {, but uses the two char-
        acters as open and close brackets, respectively.   For  example,
        "ESC  ^F &lt; &gt;" could be used to go forward to the &gt; which matches
        the &lt; in the top displayed line.

   ESC-^B Followed by two characters, acts like }, but uses the two   char-
        acters  as  open and close brackets, respectively. For example,
        "ESC ^B &lt; &gt;" could be used to go backward to the &lt; which matches
        the &gt; in the bottom displayed line.

   m      Followed  by  any lowercase letter, marks the current position
        with that letter.

   '      (Single quote.)  Followed by any lowercase  letter,  returns  to
        the position which was previously marked with that letter.  Fol-
        lowed by another single quote, returns to the position at   which
        the last "large" movement command was executed. Followed by a ^
        or $, jumps to the beginning or end of  the  file  respectively.
        Marks  are  preserved when a new file is examined, so the ' com-
        mand can be used to switch between input files.

   ^X^X   Same as single quote.

   /<i>pattern</i>
        Search forward in the file for the <i>N</i>-th line containing the pat-
        tern.  <i>N</i> defaults to 1.  The pattern is a regular expression, as
        recognized by ed.   The search starts at  the  second  line  dis-
        played (but see the -a and -j options, which change this).

        Certain  characters  are  special if entered at the beginning of
        the pattern; they modify the type of search rather  than  become
        part of the pattern:

         ^N or !
          Search for lines which do NOT match the pattern.
         ^E or *
          Search multiple files. That is, if the search reaches
          the END of the current file without finding a match,  the
          search  continues in the  next file in the command line
          list.

         ^F or @
          Begin the search at the first line of the FIRST  file  in
          the  command line list, regardless of what is currently
          displayed on the screen or the settings of the -a  or  -j
          options.

         ^K
         Highlight any text which matches the pattern on the
          current screen, but don't move to the first match
         (KEEP current position).

   ^R     Don't interpret regular expression metacharacters; that
         is, do a simple textual comparison.

   ?pattern
        Search backward in the file for the  N-th   line  containing  the
        pattern.   The  search starts at the line immediately before the
        top line displayed.

        Certain characters are special as in the / command:
   ^N or !
         Search for lines which do NOT match the pattern.

   ^E or *
         Search multiple files.  That is, if  the  search  reaches
         the  beginning  of the current file  without finding a
         match, the search continues in the previous file  in  the
         command line list.

   ^F or @
         Begin the search at the last line of the last file in the
         command line list, regardless of what is  currently  dis-
         played  on the screen  or  the settings of the -a or -j
         options.

   ^K     As in forward searches.

   ^R     As in forward searches.

   ESC-/pattern
        Same as "/*".

   ESC-?pattern
        Same as "?*".

   n      Repeat previous search, for N-th line containing the  last  pat-
        tern.   If the previous search was modified by ^N, the search is
        made for the N-th line NOT containing the pattern.  If the  pre-
        vious  search  was  modified  by ^E, the search continues in the
        next (or previous) file if not satisfied in  the  current   file.
        If  the  previous   search was modified by ^R, the search is done
        without using regular expressions.  There is no  effect  if  the
        previous search was modified by ^F or ^K.

   N      Repeat previous search, but in the reverse direction.
   ESC-n  Repeat previous  search, but  crossing  file  boundaries.  The
        effect is as if the previous search were modified by *.
   ESC-N  Repeat previous search, but in the reverse direction and  cross-
        ing file boundaries.

   ESC-u  Undo  search  highlighting.   Turn  off  highlighting of strings
        matching the current search pattern.  If highlighting is already
        off  because of a previous ESC-u command, turn highlighting back
        on.  Any search command will also   turn  highlighting  back  on.
        (Highlighting can also be disabled by toggling the -G option; in
        that case search commands do not turn highlighting back on.)

   :e [<i>filename</i>]
        Examine a new file.  If the filename is missing,  the  "current"
        file  (see  the :n and :p commands below) from the list of files
        in the command line is re-examined. A percent sign (%) in  the
        filename  is  replaced by the name of the current file.  A pound
        sign (#) is replaced by the name  of  the  previously examined
        file.    However,   two  consecutive percent  signs  are  simply
        replaced with a single percent sign. This allows you to enter a
        filename  that  contains a percent sign in the name.  Similarly,
        two consecutive pound signs are replaced  with a  single   pound
        sign.   The  filename  is inserted into the command line list of
        files so that it can be seen by subsequent :n and  :p  commands.
        If the filename consists of several files, they are all inserted
        into the list of files and the first one is  examined. If  the
        filename contains one or more spaces, the entire filename should
        be enclosed in double quotes (also see the -" option).

   ^X^V or E
        Same as :e.  Warning: some systems use ^V as a special literal-
        ization character. On such systems, you might not be able to use
        ^V.

   :n     Examine the next file (from the list of files given in the command
         line). If a number N is specified, the N-th next file is
        examined.

   :p     Examine the previous file in the command line list. If a number
        N is specified, the N-th previous file is examined.

   :x     Examine  the first file in the command line list. If a number N
        is specified, the N-th file in the list is examined.

   :d     Remove the current file from the list of files.

   t      Go to the next tag, if there were more than one matches for  the
        current tag.  See the -t option for more details about tags.

   T      Go  to the previous tag, if there were more than one matches for
        the current tag.

   = or ^G or :f
        Prints some information about the file being  viewed,  including
        its  name and the line number and byte offset of the bottom line
        being displayed.  If possible, it also prints the length of  the
        file,  the  number  of  lines in the file and the percent of the
        file above the last displayed line.

   -      Followed by one of the command line option letters (see  Options
        below),  this will change the setting of that option and print a
        message describing the new setting. If  a  ^P  (CONTROL-P)  is
        entered immediately after the dash, the setting of the option is
        changed but no message is printed. If the option letter  has  a
        numeric  value (such as -b or -h), or a string value (such as -P
        or -t), a new value can be entered after the option letter.   If
        no  new  value is entered, a message describing the current setting
        is printed and nothing is changed.

   --     Like the - command, but takes a long option  name   (see  Options
        below)  rather  than  a  single  option  letter.  You must press
        RETURN after typing the option name.  A ^P immediately after the
        second  dash suppresses printing of a message describing the new
        setting, as in the - command.

   -+     Followed by one of the command line  option  letters  this  will
        reset  the  option to its  default setting and print a message
        describing the new setting. (The "-+X" command  does  the  same
        thing  as  "-+X"  on  the command line.) This does not work for
        string-valued options.

   --+    Like the -+ command, but takes a long option name rather than  a
        single option letter.

   -!     Followed  by  one of the command line option letters, this will
        reset the option to the "opposite" of its default  setting  and
        print  a message describing the new setting.  This does not work
        for numeric or string-valued options.

   --!    Like the -! command, but takes a long option name rather than  a
        single option letter.

   _      (Underscore.)  Followed  by one of the command line option let-
        ters, this will print a message describing the current  setting
        of that option.  The setting of the option is not changed.

   __     (Double underscore.)  Like the _ (underscore) command, but takes
        a long option name rather than a single option letter.  You must
        press RETURN after typing the option name.

   +cmd   Causes  the specified cmd to be executed each time a new file is
        examined.   For example, +G causes less to initially display each
        file starting at the end rather than the beginning.

   V      Prints the version number of less being run.

   q or Q or :q or :Q or ZZ
        Exits less.

The  following four commands might not be valid, depending on your
particular installation.


   v      Invokes an editor to edit the current file  being viewed. The
        editor is taken from the environment variable VISUAL if defined,
        or EDITOR if VISUAL is not defined, or defaults to "vi" if  neither
        VISUAL  nor EDITOR is defined.  See also the discussion of
        LESSEDIT under the section on PROMPTS below.

   ! <i>shell-command</i>
        Invokes a shell to run the shell-command given.  A percent  sign
        (%)  in the command is replaced by the name of the current file.
        A pound sign (#) is replaced by the name of the previously examined
        file.   "!!"  repeats the last shell command.  "!" with no
        shell command simply invokes a  shell.   On  Unix   systems,  the
        shell  is taken from the environment variable SHELL, or defaults
        to "sh".  On MS-DOS and OS/2 systems, the shell  is  the  normal
        command processor.

   | <i>m</i> <i>shell-command</i>
        <i>m</i>  represents  any  mark letter. Pipes a section of the input
        file to the given shell command. The section of the file to  be
        piped  is   between  the first line on the current screen and the
        position marked by the letter. <i>m</i> can also be ^ or $ to indicate
        beginning or end of file respectively.  If <i>m</i> is . or newline,
         the current screen is piped.

   s <i>filename</i>
        Save the input to a file. This only works if  the  input   is  a
        pipe, not an ordinary file.

Also: <a href="less_options.html">Options, Line editing and Language support</a></pre>
<p> less does not have to read the entire input file before starting, so with large input files it starts up faster than text editors like vi.</p>
<p>When the output of <span class="code">less</span> is redirected to a file, it behaves like <a href="cat.html">cat</a>, no additional output is added or input requested.</p>
<p class="quote"><i>“Counter to the widely held belief that industrial agriculture is more efficient and productive, small farms produce far more per acre than large farms” ~ <a href="http://www.foodfirst.org/en/node/3049">Christos Vasilikiotis</a></i> (University of California, Berkeley)</p>
<p><b>Related:</b></p>
<p><a href="https://developer.apple.com/legacy/library/documentation/Darwin/Reference/ManPages/man1/less.1.html">less man page</a> - Apple.com<br>
lesskey - specify key bindings for less<br>
<a href="echo.html">echo</a> - Display message on screen<br>
<a href="tee.html">tee</a> - Redirect output to multiple files <br>
The <a href="http://www.greenwoodsoftware.com/less/">less home 
page</a> (Mark Nudelman)<br>
AquaLess - OSX file pager.</p><!-- #BeginLibraryItem "/Library/foot_osx.lbi" --><p><script async="" src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
<!-- OSX300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="1823340303"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->
