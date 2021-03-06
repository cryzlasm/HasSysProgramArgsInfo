---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_osx.lbi" --><!-- #EndLibraryItem --><h1>cron</h1> 
<p>Daemon to execute scheduled commands (Vixie Cron). </p>
<pre>Syntax
      cron [-s] [-o] [-x <i>debugflag</i>[,...]]

Options
     -o      Disable the special handling of situations when the GMT offset of
             the local timezone changes, to be compatible with the old (default)
             behavior.

     -s      Enable special handling of situations when the GMT offset of the
             local timezone changes, such as the switches between the standard
             time and daylight saving time.

             The jobs run during the GMT offset changes time as intuitively
             expected.  If a job falls into a time interval that disappears
             (for example, during the switch from standard time) to daylight
             saving time or is duplicated (for example, during the reverse
             switch), then it's handled in one of two ways:

             The first case is for the jobs that run every at hour of a time
             interval overlapping with the disappearing or duplicated inter-
             val.  In other words, if the job had run within one hour before
             the GMT offset change (and cron was not restarted nor the
             <a href="crontab.html">crontab</a> changed after that) or would run after the change at
             the next hour.  They work as always, skip the skipped time or run
             in the added time as usual.

             The second case is for the jobs that run less frequently.  They
             are executed exactly once, they are not skipped nor executed
             twice (unless cron is restarted or the user's <a href="crontab.html">crontab</a> is
             changed during such a time interval).  If an interval disappears
             due to the GMT offset change, such jobs are executed at the same
             absolute point of time as they would be in the old time zone.
             For example, if exactly one hour disappears, this point would be
             during the next hour at the first minute that is specified for
             them in <a href="crontab.html">crontab</a>.

     -x <i>debugflag</i>[,...]

             Enable writing of debugging information to standard output.
             One or more of the following comma separated debugflag identifiers
             must be specified:

             bit   currently not used
             ext   make the other debug flags more verbose
             load  be verbose when loading crontab files
             misc  be verbose about miscellaneous one-off events
             pars  be verbose about parsing individual crontab lines
             proc  be verbose about the state of the process, including all of
                   its offspring
             sch   be verbose when iterating through the scheduling algorithms
             test  trace through the execution, but do not perform any actions

If both options -o and -s are specified, the option specified last wins.</pre>
<p> Although cron(8) and crontab(5) are officially supported      under Darwin, their functionality has been absorbed into launchd(8),      which provides a more flexible way of automatically executing commands.      See <a href="launchctl.html">launchctl</a> for more information.</p>
<p>Cron should be started from /etc/rc or /etc/rc.local. It will 
  return immediately, so you don't need to start it with '&amp;'. </p>
<p>Cron searches /var/cron/tabs for crontab files which are named 
  after accounts in /etc/passwd; crontabs found are loaded into memory. Cron also 
  searches for /etc/crontab which is in a different format (see <a href="crontab.html">crontab</a>). 
  Cron then wakes up every minute, examining all stored crontabs, checking each 
  command to see if it should be run in the current minute. When executing commands, 
  any output is mailed to the owner of the crontab (or to the user named in the 
  MAILTO environment variable in the crontab, if such exists). </p>
<p>Additionally, cron checks each minute to see if its spool directory's 
  modtime (or the modtime on /etc/crontab) has changed, and if it has, cron will 
  then examine the modtime on all crontabs and reload those which have changed. 
  Thus cron need not be restarted whenever a crontab file is mod- ified. Note 
  that the <a href="crontab.html">crontab</a> command updates the modtime of the 
  spool directory whenever it changes a crontab.</p>
<p>Directory for personal crontab files:<br>
<span class="code">/usr/lib/cron/tabs  </span></p>
<p class="quote"><i>”Time is what prevents everything from happening at once” ~ John Archibald Wheeler</i></p>
<p><b>Related:</b></p>
<p>
<a href="crontab.html">crontab</a> - Schedule a command to run at a later time.<br>
<a href="http://developer.apple.com/macosx/launchd.html">launchd</a> - System startup program (daemon) + <a href="https://www.peterborgapps.com/lingon/">Lingon GUI</a></p><!-- #BeginLibraryItem "/Library/foot_osx.lbi" --><p>
<!-- OSX300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="1823340303"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="cron.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->
