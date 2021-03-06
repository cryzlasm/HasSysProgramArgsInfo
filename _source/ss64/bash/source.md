---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_bash.lbi" --><!-- #EndLibraryItem --><h1>. (source or dot operator) </h1>
<p>Read and execute commands from the <var>filename</var> argument in the current shell context. </p>
<pre>Syntax
      . <var>filename</var> [<var>arguments</var>]

      source <var>filename</var> [<var>arguments</var>]</pre>
<p><span class="code">source</span> is a synonym for   dot/period '<span class="code">.</span>' in bash, but not in POSIX sh, so for maximum compatibility use the period.</p>
<p>When a script is run using <span class="code">source</span> it runs within the existing shell, any variables created or modified by the script will remain available after the script completes. In contrast if the script is run just as <span class="code"><i>filename</i></span>, then a separate subshell (with a completely separate set of variables) would be spawned to run the script. </p>
<p>There is a subtle difference between executing a script by  running<span class="code"> .ss64script </span>(dot ss64script) and<span class="code"> . ss64script </span>(dot space ss64script)<br>
the first is running a file thats been hidden from the 'ls' command, (although <a href="ls.html">ls</a> -a will show hidden files) the second option will execute ss64script even if it has not been set as an executable with chmod.</p>
<p>Unless you provide an exact path to  <span class="code"><i>filename</i></span> then bash will look first via the <code>PATH</code> variable 
  and then in the current directory (only if <span class="code"><i>filename</i></span> is not found in <code>$PATH</code>.)
  If any <var>arguments</var> are supplied, they become the positional parameters 
  when <span class="code"><i>filename</i></span> is executed. Otherwise the positional parameters are 
  unchanged. </p>
<p>When a script is run using  `source'  it runs  within the existing shell, any variables created or modified by the script will remain available after the script completes.</p>
<p>If a script is run just as <span class="code">ss64script</span>, then a separate subshell (with a separate set of variables) will be spawned to run the script. </p>
<p>Other ways that the bash shell can interpret a dot/period: 
<br>
A dot can represent the current <a href="cd.html">directory</a> ("<span class="code">./filename</span>") <br>
In a regular expression, "." will match any single character, (not zero or more characters.)</p>
<p>source is a bourne shell builtin and a POSIX `special' builtin<br>
<br>
  The return status is the exit status of the last command executed, or zero if 
  no commands are executed. If <span class="code"><i>filename</i></span> is not found, or cannot be 
read, the return status is non-zero.</p>
<p><b>Examples</b></p>
<p class="code">$ source ~/myscript </p>
<p class="quote"><i>"Although the world is full of suffering, it is also full of the overcoming of it" ~ 
Helen Keller</i></p>
<p><b>Related:</b><br>
<br>
<a href="command.html">command</a> - Run a command - ignoring shell functions 
<br>
<a href="builtin.html">builtin</a> - Run a shell builtin<br>
<a href="crontab.html">crontab</a> - Schedule a command to run at a later time<br>
<a href="chroot.html">chroot</a> - Run a command with a different root directory<br>
<a href="exec.html">exec</a> - Execute a command<br>
<a href="if.html">if</a> - Conditionally perform a command<br>
<a href="nohup.html">nohup</a> - Run a command immune to hangups<br>
<a href="su.html">su</a> - Run a command with substitute user and group id<br>
<a href="type.html">type</a> - Describe a command <br>
<a href="watch.html">watch</a> - Execute/display a program periodically <br>
Equivalent Windows  command: <a href="../nt/setlocal.html">SETLOCAL</a> - Set options to control the visibility of  variables</p><!-- #BeginLibraryItem "/Library/foot_bash.lbi" --><p><script async="" src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
<!-- bash300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="4615356305"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

