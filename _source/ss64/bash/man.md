---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_bash.lbi" --><!-- #EndLibraryItem --><h1>man / info / help</h1> 
<p>Format and display help pages.</p>
<pre>Syntax
      man [-acdfFhkKtwW] [--path] [-m <i>system</i>] [-p <i>string</i>] [-C <i>config_file</i>]
             [-M <i>pathlist</i>] [-P <i>pager</i>] [-B <i>browser</i>] [-H <i>htmlpager</i>] [-S <i>section_list</i>]
                [<i>section</i>] <i>name</i> ... 

Key:

   -C <i>config_file</i>  The configuration file to use; the default is /etc/man.config. (See man.config(5).) 

   -M <i>path</i>         The list of directories to search for man pages. Separate the directories with colons.
                   An empty list is the same as not specifying -M at all. See SEARCH PATH FOR MANUAL PAGES. 

   -P <i>pager</i>        Which pager to use. This option overrides the MANPAGER environment variable, which in turn
                   overrides the PAGER variable. By default, man uses /usr/bin/less -is. 

   -B              Which browser to use on HTML files. This option overrides the BROWSER environment variable.
                   By default, man uses /usr/bin/less-is,

   -H              Specify a command that renders HTML files as text. This option overrides the HTMLPAGER environment variable.
                   By default, man uses /bin/cat,

   -S <i>section_list</i> List is a colon separated list of manual sections to search. This option overrides the MANSECT environment variable.

   -a              By default, man will exit after displaying the first manual page it finds.
                   Using this option forces man to display all the manual pages that match name, not just the first.

   -c              Reformat the source man page, even when an up-to-date cat page exists.
                   This can be meaningful if the cat page was formatted for a screen with a different number of columns,
                   or if the preformatted page is corrupted.

   -d              Don't actually display the man pages, but do print gobs of debugging information.

   -D              Both display and print debugging info.

   -f              Equivalent to whatis.

   -F
   --preformat     Format only - do not display. 

   -h              Print a help message and exit.

   -k              Equivalent to apropos.

   -K              Search for the specified string in *all* man pages.
                   Warning: this can be very slow and can match multiple pages! It helps to specify a section.

   -m <i>system</i>       Specify an alternate set of man pages to search based on the system name given.

   -p <i>string</i>       Specify the sequence of preprocessors to run before nroff or troff.
                   Not all installations will have a full set of preprocessors.
                   Some of the preprocessors and the letters used to designate
                   them: eqn (e), grap (g), pic (p), tbl (t), vgrind (v), refer (r).
                   This option overrides the MANROFFSEQ environment variable.

   -t              Use /usr/bin/groff -Tps -mandoc to format the manual page, passing the output to stdout.
                   The default output format of /usr/bin/groff -Tps -mandoc is Postscript, refer to the
                   manual page of /usr/bin/groff -Tps -mandoc for ways to pick an alternate format.
                   Depending on the selected format and the availability of printing devices, the output may
                   need to be passed through some filter or another before being printed.

   -w
   --path          Don't actually display the man pages, but do print the location(s) of the files that
                   would be formatted or displayed. If no argument is given: display (on stdout) the list
                   of directories that is searched by man for man pages. If manpath is a link to man, then
                   "manpath" is equivalent to "man --path". 

   -W              Like -w, but print file names one per line, without additional information.
                   This is useful in shell commands like man -aW man | xargs ls -l 

Press &lt;Space bar&gt; to view the next page
Press &lt;return&gt; to view next line
Press &lt;ctrl-C&gt; to exit</pre>
<p>Man displays help pages. If you specify <span class="code">section</span>, man only looks in that section of the manual. <span class="code">name</span> is normally the name of the manual page, which is typically the name of a command, function, or file. However, if name contains a slash (/) then man interprets it as a file specification, so that you can do <span class="code">man ./foo.5</span> or even <span class="code">man /cd/foo/bar.1.gz</span>. See below for a description of where man looks for the manual page files.</p>
<h2>Internal commands</h2>
<blockquote>
<p>For simplicity, the SS64 website includes both <b>internal</b> GNU bash commands and <b>external</b> unix commands  in a single list. Many more commands are available  and the <span class="code">man</span> command will list the full details of these. </p>
<p><b>Internal</b> means a command built into the  shell,  it's the shell that performs the action. <br>
  <b>External</b> means the shell will fork and execute  an external program as a new subprocess. External commands are available when running  any shell.</p>
<p>For example, the <span class="code">cd</span> command is built-in. The <span class="code">ls</span> command, is external. </p>
<p>The <span class="code">man</span> command lists all the internal commands for bash under <span class="code">man bash</span></p>
</blockquote>
<h2>Search Path for Manual Pages</h2>
<blockquote>
<p> man uses a sophisticated method of finding manual page files, based on the invocation options and environment variables, the /etc/man.config configuration file, and some built in conventions and heuristics.<br>
<br>
First, when the <span class="code">name</span> argument to man contains a slash (/), man assumes it is a file specification itself, and there is no searching involved.<br>
<br>
But in the normal case where name doesn't contain a slash, man searches a variety of directories for a file that could be a manual page for the topic named.<br>
<br>
If you specify the <span class="code">-M pathlist</span> option, pathlist is a colon-separated list of the directories that man searches.<br>
<br>
If you don't specify -<span class="code">-M</span> but set the <span class="code">MANPATH</span> environment variable, the value of that variable is the list of the directories that man searches.<br>
<br>
If you don't specify an explicit path list with <span class="code">-M</span> or <span class="code">MANPATH</span>, man develops its own path list based on the contents of the configuration file /etc/man.config. The <span class="code">MANPATH</span> statements in the configuration file identify particular directories to include in the search path.<br>
<br>
Furthermore, the <span class="code">MANPATH_MAP</span> statements add to the search path depending on your command search path (i.e. your PATH environment variable). For each directory that may be in the command search path, a <span class="code">MANPATH_MAP</span> statement specifies a directory that should be added to the search path for manual page files. man looks at the PATH variable and adds the corresponding directories to the manual page file search path. Thus, with the proper use of <span class="code">MANPATH_MAP</span>, when you issue the command man xyz, you get a manual page for the program that would run if you issued the command xyz.<br>
<br>
In addition, for each directory in the command search path (we'll call it a "command directory") for which you do not have a <span class="code">MANPATH_MAP</span> statement, man automatically looks for a manual page directory "nearby" namely as a subdirectory in the command directory itself or in the parent directory of the command directory.<br>
<br>
You can disable the automatic "nearby" searches by including a <span class="code">NOAUTOPATH</span> statement in /etc/man.config.<br>
<br>
In each directory in the search path as described above, man searches for a file named <span class="code">topic.section</span>, with an optional suffix on the section number and possibly a compression suffix. If it doesn't find such a file, it then looks in any subdirectories named manN or catN where N is the manual section number. If the file is in a catN subdirectory, man assumes it is a formatted manual page file (cat page). Otherwise, man assumes it is unformatted. In either case, if the filename has a known compression suffix (like .gz), man assumes it is gzipped.<br>
  <br>
If you want to see where (or if) man would find the manual page for a particular topic, use the <span class="code">--path (-w)</span> option.</p>
</blockquote>
<h2>Environment</h2>
<blockquote>
<pre>MANPATH     If MANPATH is set, man uses it as the path to search for manual page files.
            It overrides the configuration file and the automatic search path, but is overridden by the -M invocation option.
            See SEARCH PATH FOR MANUAL PAGES. 
MANPL       If MANPL is set, its value is used as the display page length. Otherwise, the entire man page will occupy one (long) page.
MANROFFSEQ  If MANROFFSEQ is set, its value is used to determine the set of preprocessors run before running nroff or troff.
            By default, pages are passed through the tbl preprocessor before nroff. 
MANSECT     If MANSECT is set, its value is used to determine which manual sections to search. 
MANWIDTH    If MANWIDTH is set, its value is used as the width manpages should be displayed.
            Otherwise the pages can be displayed over the whole width of your screen. 
MANPAGER    If MANPAGER is set, its value is used as the name of the program to use to display the man page.
            If not, then PAGER is used. If that has no value either, /usr/bin/less -is is used. 
BROWSER     The name of a browser to use for displaying HTML manual pages. If it is not set, /usr/bin/less -is is used. 
HTMLPAGER   The command to use for rendering HTML manual pages as text. If it is not set, /bin/cat is used. 
LANG        If LANG is set, its value defines the name of the subdirectory where man first looks for man pages.
            Thus, the command 'LANG=dk man 1 foo' will cause man to look for the foo man page in .../dk/man1/foo.1,
            and if it cannot find such a file, then in .../man1/foo.1, where ... is a directory on the search path.
NLSPATH, LC_MESSAGES, LANG
            The environment variables NLSPATH and LC_MESSAGES (or LANG when the latter does not exist) play a role in
            locating the message catalog. (But the English messages are compiled in, and for English no catalog is
            required.) Note that programs like col(1) called by man also use e.g. LC_CTYPE. 
PATH        PATH helps determine the search path for manual page files. See SEARCH PATH FOR MANUAL PAGES.
SYSTEM      SYSTEM is used to get the default alternate system name (for use with the -m option).</pre>
</blockquote>
<h2>Bugs</h2>
<blockquote>
<p>The -t option only works if a troff-like program is installed.<br>
If you see blinking \255 or
<ad> instead of hyphens, put '<span class="code">LESSCHARSET=latin1</span>' in your environment. </ad></p>
</blockquote>
<p><b>Examples</b></p>
<p class="code">$ man intro</p>
<p class="code">$ man 1 rsync</p>
<p class="code">$ man rsync</p>
<p>If you add the line <span class="code">(global-set-key [(f1)] (lambda () (interactive) (manual-entry (current-word))))</span> to your .emacs file, then hitting F1 will give you the man page for the library call at the current cursor position. </p>
<p>To get a plain text version of a man page, without backspaces and underscores, try:</p>
<p class="code">$  man foo | col -b &gt; foo.mantxt </p>
<p><i class="quote">“Education is not the filling of a pail, but the lighting of a fire” ~ W. B. Yeats</i><br>
<br>
<b> Related:</b></p>
<p><a href="more.html">more</a> - Display output one screen at a time<br>
<a href="less.html">less</a> - Display output one screen at a time<br>
Equivalent Windows  command: <a href="../nt/help.html">HELP</a> <i>command</i></p><!-- #BeginLibraryItem "/Library/foot_bash.lbi" --><p><script async="" src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
<!-- bash300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="4615356305"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

