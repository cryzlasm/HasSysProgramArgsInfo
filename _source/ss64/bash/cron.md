---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_bash.lbi" --><!-- #EndLibraryItem --><h1>cron</h1> 
<p>daemon to execute scheduled commands</p>
<pre>Syntax
      cron [-n | -p | -s | -m&lt;<i>mailcommand</i>&gt;]

      cron -x [ext,sch,proc,pars,load,misc,test,bit] 

Key
   -s  This option will direct cron to send job output to the system log using syslog(3).
       This is useful if your system has no sendmail(8), or if mail is disabled using -m off.

   -m  This option allows you to specify a shell command string to use for sending cron
       mail output instead of sendmail(8). This command must accept a fully formatted mail
       message (with headers) on stdin and send it as a mail message to the recipients
       specified in the mail headers.

   -n  This option changes default behavior causing it to run crond in the foreground.
       This can be useful when starting it out of init.

   -p  Permit any crontab, which user set.

   -x  This option sets debug flags.

   As a special case, the string <b>off</b> will disable sending mail.
</pre>
<p> How to run the cron daemon: Cron should be started from <span class="code">  /etc/init.d or /etc/rc.d/init.d</span> (older systems may also use /etc/rc 
or /etc/rc.local). It will return immediately, so you don't need to start it with '&amp;'.</p>
<h2> What cron does</h2>
<blockquote>
<p> Cron searches<span class="code"> /var/spool/cron</span> for <a href="crontab.html">crontab</a> files which are named after accounts in /etc/passwd; crontabs found are loaded into memory. Cron also searches for /etc/crontab and the files in the /etc/cron.d/ directory, which are in a different format. </p>
<p>Cron then wakes up every minute, examining all stored <a href="crontab.html">crontabs</a>, checking each command to see if it should be run in the current minute.</p>
<p>cron will normally allow a task to run indefinitely. Consider using options of the program you’re calling to implement a timeout, or utilise the <a href="timeout.html">timeout</a> command wrapper.</p>
</blockquote>
<h2> Modifying a cron job</h2>
<blockquote>
<p> To edit a users crontab entry,  log into your system for that particular user and type crontab -e.<br> 
The default editor for the 'crontab -e' command is vi.<br>
Change the default editor by running: <span class="code">export VISUAL='<i>editor</i>'</span><br>
<br>
cron checks each minute to see if its spool directory's modtime (or the modtime on /etc/crontab) has changed, and if it has, cron will then examine the modtime on all crontabs and reload those which have changed. Thus cron need not be restarted whenever a crontab file is modfied. Note that the <a href="crontab.html">crontab</a> command updates the modtime of the spool directory whenever it changes a crontab. </p>
</blockquote>
<h2>Mailing output</h2>
<blockquote>
<p> Cron will email to  the <span class="code">user</span> all output of the commands it runs, to silence this, redirect the output to a log file or to /dev/null<br>
You can also redirect email to the user named in the MAILTO environment variable in the crontab, if such exists. </p>
</blockquote>
<p>Cron comes from the word chronos, the Greek word for time.</p>
<p><span class="quote"><i>"If you do not love your job, change it. Instead of pushing paper, push ideas. Instead of sitting down, stand up and be heard. Instead of complaining, contribute. Don't get stuck in a job description" ~ <a href="http://www.socresonline.org.uk/1/4/1.html">Microsoft job advert</a></i></span> <br>
<br>
<b>Related:</b></p>
<p>anacron - Run commands periodically (does not assume that the machine is running continuously)<br>
<a href="crontab.html">crontab</a> - Schedule a command to run at a later time<br>
<a href="chroot.html">chroot</a> - Run a command with a different root directory<br>
<a href="exec.html">exec</a> - Execute a command<br>
<a href="if.html">if</a> - Conditionally perform a command<br>
<a href="nohup.html">nohup</a> - Run a command immune to hangups<br>
<a href="su.html">su</a> - Run a command with substitute user and group id<br>
<a href="watch.html">watch</a> - Execute/display a program periodically<br>
<a href="source.html">.period</a> - Run commands from a file <br>
Equivalent Windows commands: 
<a href="../nt/schtasks.html">schtasks</a> - Schedule a command to run at a later time</p>
<!-- #BeginLibraryItem "/Library/foot_bash.lbi" --><p>
<!-- bash300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="4615356305"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="cron.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

