---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_osx.lbi" --><!-- #EndLibraryItem --><h1>alias</h1> 
<p>Create an alias. Aliases allow a string to be substituted for a word. An alias can be used as the first word of any simple command. </p>
<pre>Syntax
      alias [-p] [<i>name</i>[=<i>value</i>] ...]

      unalias [-a] [<i>name</i>...]

Key
   -p   Print the current values

   -a   Remove All aliases</pre>
<p>When arguments are supplied, an alias is defined for each name
whose value is given. A trailing space in <i>value</i> causes the next word to be checked for alias<br>
substitution when the alias is expanded.</p>
<p> If no value is given, (or with the -p option) <span class="code">alias</span> will print a list of Aliases along with their current values. For each name in the argument list for which no
value is supplied, the name and value of the alias is printed. </p>
<p>Alias returns true unless a
name is given for which no alias has been defined.</p>
<p>name can not be `alias' or `unalias'.</p>
<p>unalias can be used to remove each <i>name </i>from the list of defined aliases.</p>
<p><b>Alias substitution </b><br>
  The shell maintains a list of aliases which can be set, unset and printed by 
  the alias and unalias commands. After a command line is parsed into simple commands 
  the first word of each command, left-to-right, is checked to see if it has an 
  alias. If so, the first word is replaced by the alias. If the alias contains 
  a history reference, it undergoes History substitution (q.v.) as though the 
  original command were the previous input line. If the alias does not contain 
  a history reference, the argument list is left untouched. </p>
<p>Thus if the alias for <span class="code">ls</span> were <span class="code">ls -l</span> the command <span class="code">ls /usr</span> would become  <span class="code">ls -l /usr</span>, the argument list here being undisturbed. If the alias for <span class="code">lookup </span>were <span class="code">grep !^ /etc/passwd</span>' then <span class="code">lookup bill</span> would become <span class="code">grep bill /etc/passwd</span>.  </p>
<p>Aliases can be used to introduce parser metasyntax. For example, <span class="code">alias print 
  'pr \!* | lpr'</span> defines a command (<span class="code">print</span>) which <a href="pr.html" class="code">pr</a>'s 
  its arguments to the line printer. </p>
<p>The first word of the replacement text is tested for aliases, but a word
that is identical to an alias being expanded is not expanded a second<br>
time. This means that you can alias <span class="code">ls</span> to <span class="code">ls -F</span>, for instance, and
bash does not try to recursively expand the replacement text.</p>
<p>  <b>Examples</b> </p>
<p>Create an alias 'c' that will clear the screen:<br>
<span class="code">$ 
alias c='clear'</span></p>
<p>Create an alias 'ls' that will change the default action of ls:<br>
   
<span class="code">$ alias ls='ls --classify'<br>
$ ls <br>
$ unalias ls</span></p>
<p>More aliases for ls:<span class="code"><br>
<br>
$ alias ls-al='ls -al' &nbsp;&nbsp;#add the missing space <br>
$ alias l="ls -l"  &nbsp;&nbsp;#Long<br>
$ alias la="ls -la"  &nbsp;&nbsp;#Long + show all<br>
$ alias ll='ls -lahL' &nbsp;&nbsp;#Long + show all + follow symlinks w. dest</span></p>
<p>Use alias to fix missing space typos:<br>
<span class="code"> $ alias cd..='cd ..'<br>
$ </span> <span class="code">alias ..='cd ..'<br>
<br>
</span>Display the working directory<span class="code"> <br>
$ alias .='echo $PWD'</span></p>
<p>Prevent accidental deletions by making <a href="rm.html">rm</a> interactive: <br>
<span class="code">$ alias rm='rm -i'</span></p>
<p>Shorten apt-get installation commands: <br>
<span class="code">$ alias canhaz='sudo apt-get install'</span></p>
<p>Run firefox and open a specific website:<br>
<span class="code">$ alias fftr='/Applications/Firefox.app/Contents/MacOS/firefox-bin http://ss64.com'</span></p>
<p>Produce a custom prompt to display which machine you are on, the current 
folder, and the number of the current command:</p>
<pre>   $ alias cd='cd \!*; set currDir = `basename $cwd`; set currDir = `echo
   "&lt;${host}:"$currDir
   " ! &gt;"`; set prompt = "${currDir} "'
   $ cd $cwd

&lt;Mac_One:Work-folder 15 &gt;</pre>
<p> <b>Making an alias permanent:</b></p>
<p>  Assuming you have the BASH shell, then use your favorite text editor to edit or create a file called <span class="code"><a href="syntax-bashrc.html">~/.bash_aliases</a></span> 
and add your alias commands.</p>
<p>alias is a bash built-in command.<br>
  <br>
<i class="quote">“There are many reasons why novelists write, but they all have one thing in common - a need to create an alternative world” ~ John Fowles</i> </p>
<p><b>Related:</b></p>
<p><a href="https://developer.apple.com/legacy/library/documentation/Darwin/Reference/ManPages/man1/alias.1.html">Alias man page</a> - Apple.com<br> 
<a href="env.html">env</a> - Display, set, or remove environment variables<br>
<a href="echo.html">echo</a> - Display message on screen <br>
<a href="set.html">set</a> - Set a shell variable<br>
<a href="shift.html">shift</a> - Shift positional parameters</p><!-- #BeginLibraryItem "/Library/foot_osx.lbi" --><p>
<!-- OSX300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="1823340303"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="alias.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->
