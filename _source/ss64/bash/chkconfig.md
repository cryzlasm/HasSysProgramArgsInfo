---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_bash.lbi" --><!-- #EndLibraryItem --><h1>chkconfig</h1> 
<p>Update and query runlevel information for system services.</p>
<pre>Syntax
      chkconfig --list [<i>name</i>]<br>      chkconfig --add <i>name</i><br>      chkconfig --del <i>name</i><br>      chkconfig [--level <i>levels</i>] <i>name</i> &lt;on|off|reset&gt;<br>      chkconfig [--level <i>levels</i>] <i>name</i> 

Options:
   --level <i>levels</i>
             The run levels an operation should pertain to.
             Given as a string of numbers from 0 to 7.
             For example, --level 35 specifies runlevels 3 and 5. 

   --add <i>name</i>
             Add a new service for management by chkconfig.
             When a new service is added, chkconfig ensures that the
             service has either a start or a kill entry in every runlevel.
             If any runlevel is missing such an entry, chkconfig creates
             the appropriate entry as specified by the default values in
             the init script. Note that default entries in LSB-delimited
             'INIT INFO' sections take precedence over the default runlevels
             in the initscript. 
   --del <i>name</i>
             Delete the service from chkconfig management, and remove any 
             links in /etc/rc[0-6].d which pertain to it.

             Note that future package installs for this service may
             run chkconfig --add, which will re-add such links.
             To disable a service, run chkconfig name off. 

   --list <i>name</i>
             List all of the services which chkconfig knows about, and
             whether they are stopped or started in each runlevel.
             If <i>name </i>is specified, information is only displayed about service <i>name</i>. </pre>
<p>chkconfig provides a simple command-line tool for maintaining the /etc/rc[0-6].d directory hierarchy by relieving system administrators of the task of directly manipulating the numerous symbolic links in those directories.</p>
<p>This implementation of chkconfig was inspired by the chkconfig command present in the IRIX operating system. Rather than maintaining configuration information outside of the <span class="code">/etc/rc[0-6].d</span> hierarchy, however, this version directly manages the symlinks in <span class="code">/etc/rc[0-6].d</span>. This leaves all of the configuration information regarding what services init starts in a single location.</p>
<p>chkconfig has five distinct functions: adding new services for management, removing services from management, listing the current startup information for services, changing the startup information for services, and checking the startup state of a particular service.</p>
<p>When chkconfig is run without any options, it displays usage information. If only a service name is given, it checks to see if the service is configured to be started in the current runlevel. If it is, chkconfig returns true; otherwise it returns false. The --level option can be used to have chkconfig query an alternative runlevel rather than the current one.</p>
<p>If one of <b>on, off,</b> or <b>reset</b> is specified after the service name, chkconfig changes the startup information for the specified service. The on and off flags cause the service to be started or stopped, respectively, in the runlevels being changed. The <b>reset</b> flag resets the startup information for the service to whatever is specified in the init script in question.</p>
<p>By default, the on and off options affect only runlevels 2, 3, 4, and 5, while reset affects all of the runlevels. The --level option can be used to specify which runlevels are affected.</p>
<p>Note that for every service, each runlevel has either a start script or a stop script. When switching runlevels, init will not re-start an already-started service, and will not re-stop a service that is not running.</p>
<p>chkconfig also can manage xinetd scripts via the means of xinetd.d configuration files. Note that only the on, off, and --list commands are supported for xinetd.d services. </p>
<p><b>Runlevel Files</b></p>
<p>Each service which should be manageable by chkconfig needs two or more commented lines added to its<span class="code"> init.d</span> script. The first line tells <b>chkconfig</b> what runlevels the service should be started in by default, as well as the start and stop priority levels. If the service should not, by default, be started in any runlevels, a - should be used in place of the runlevels list. The second line contains a description for the service, and can be extended across multiple lines with backslash continuation.</p>
<p>For example, random.init has these three lines:</p>
<p class="code"># chkconfig: 2345 20 80<br>
# description: Saves and restores system entropy pool for \<br>
# higher quality random number generation.</p>
<p>This says that the random script should be started in levels 2, 3, 4, and 5, that its start priority should be 20, and that its stop priority should be 80. You should be able to figure out what the description says; the \ causes the line to be continued. The extra space in front of the line is ignored. </p>
<p><b>Examples</b></p>
<p># List all the startup services, and sort alphabetically:<br>
<span class="code">$ sudo chkconfig --list | sort | less</span></p>
<p># List the finger service:<span class="code"><br>
$ sudo chkconfig --list finger<br>
<br>
</span>#
query a service in /etc/rc.d, and see the service settings for each runlevel<span class="code">:<br>
$ sudo chkconfig --list anacron<br>
anacron 0:off 1:off 2:on 3:on 4:on 5:on 6:off</span></p>
<p># Turn nscd off in runlevels 3, 4, and 5<br>
<span class="code">$ sudo chkconfig --level 345 nscd off</span></p>
<p class="quote"><i>“Did you ever stop to think, and forget to start again?” ~ A. A. Milne</i></p>
<p><b>Related:</b><br>
<br>
init(8) <br>
lspci - list all PCI devices<br>
ntsysv(8) <br>
system-config-services(8) <br>
Windows Equivalent: <a href="../nt/syntax-services.html">Services</a></p><!-- #BeginLibraryItem "/Library/foot_bash.lbi" --><p><script async="" src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
<!-- bash300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="4615356305"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

