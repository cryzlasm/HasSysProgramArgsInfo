---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_osx.lbi" --><!-- #EndLibraryItem --><h1>scutil</h1> 
<p>Manage system configuration parameters.</p>
<pre>Syntax
   Interface to the [raw] stored preference data:
      scutil --prefs [<i>preference-file</i>]

   Check the network reachability of a host, IP address, or a pair of local and remote IP addresses:
      scutil -r [-W] { <i>nodename</i> | <i>address </i>| <i>local-address remote-address</i> }

   Check for (and optionally wait for the creation of or posting of a notification to) a dynamic store key:
      scutil -w <i>dynamic-store-key</i> [-t <i>timeout</i>]

   Report and update a select group of persistent system preferences, e.g. Hostname:
      scutil --get <i>pref</i>
      scutil --set <i>pref</i> [<i>newval</i>]

   Report the current DNS configuration:
      scutil --dns

   Report the current system proxy configuration:
      scutil --proxy

   Commands for monitoring and interacting with VPN connections:
      scutil --nc <i>nc-arguments</i>

   Interactive command line interface to the "dynamic store" data:
   type help for commands (maintained by configd)
      scutil

Key
   -r [-W] { <i>nodename</i> | <i>address </i>| <i>local-address remote-address </i>}
      Check the network reachability of the specified host name, IP
      address, or a pair of local and remote IP addresses.  One or more of
      the following strings will be reported to standard output.

      Not Reachable         The specified nodename/address cannot be
                            reached using the current network configuration.

      Reachable             The specified nodename/address can be reached
                            using the current network configuration.

      Transient Connection  The specified nodename/address can be reached
                            via a transient (e.g. PPP) connection.

      Connection Required   The specified nodename/address can be reached
                            using the current network configuration but a
                            connection must first be established.  As an
                            example, this status would be returned for a
                            dialup connection that was not currently active
                            but could handle network traffic for the target
                            system.

      Connection Automatic  The specified nodename/address can be reached
                            using the current network configuration but a
                            connection must first be established.  Any
                            traffic directed to the specified name/address
                            will initiate the connection.

      Local Address         The specified nodename/address is one associated
                            with a network interface on the system.

      Directly Reachable Addresss
                            Network traffic to the specified node-
                            name/address will not go through a gateway but
                            is routed directly to one of the interfaces on
                            the system.

      The reachability can also be monitored by specifying the -W (watch)
      option.  This will result in the current status being reported as
      well as the status when/if the network configuration changes.

      A zero exit status will be returned when the reachability status is
      reported correctly.  A non-zero exit status will be returned if
      errors are detected with an error reported to standard error.

   -w <i>dynamic-store-key</i> [-t <i>timeout</i>]
      Check if the specified key exists in the "dynamic store" data main-
      tained by configd(8).  If present, scutil will return with a zero
      exit status.  If not present, scutil will wait for the specified time
      for data to be associated with or a notification to be posted using
      the key.  A non-zero exit status will be returned if the key was not
      created/posted within the specified time.

      scutil will wait indefinitely if a timeout of 0 seconds is specified.
      The default timeout is 15 seconds.

   --get <i>pref</i>
      Retrieves the specified preference.  The current value will be
      reported on standard output.

      Supported preferences include:

            ComputerName   The user-friendly name for the system.

            LocalHostName  The local (Bonjour) host name.

            HostName       The name associated with hostname(1) and
                           gethostname(3).

   --set <i>pref</i> [<i>newval</i>]
      Updates the specified preference with the new value.  If the new
      value is not specified on the command line then it will be read from
      standard input.

      Supported preferences include: ComputerName LocalHostName HostName

      The --set option requires super-user access.

   --dns
      Reports the current DNS configuration.

   --proxy
      Reports the current proxy configuration.

   --nc <i>nc-arguments</i>
      Provides a set of commands for monitoring and interacting with VPN
      connections. Use --nc help for a full list of commands.</pre>
<p> <b>Examples</b></p>
<p>Display the current hostname, localhost name and computername</p>
<p><span class="code">scutil --get HostName</span><br>
<span class="code">scutil --get LocalHostName</span><br>
<span class="code">scutil --get ComputerName</span></p>
<p>Change the primary hostname  of the computer to cedric.local (local) or cedric.ss64.com (fully qualified)</p>
<p class="code">sudo scutil --set HostName cedric.local <br>
sudo scutil --set HostName cedric.ss64.com</p>
<p>Change the Bonjour hostname of the computer on the local network, to cedric. </p>
<p class="code">sudo scutil --set LocalHostName cedric</p>
<p>Change the computer name to Cedric, this is the computer name you see in Finder. </p>
<p><span class="code">sudo scutil --set ComputerName Cedric</span><br>
</p>
<p class="quote"><i>“The greater danger for most of us lies not in setting our aim too high and falling short;<br>
but in setting our aim too low, and achieving our mark” ~ Michelangelo</i></p>
<p><b>Related:</b></p>
<p><a href="hostname.html">hostname</a> - set or print name of current host system<br>
<a href="dscacheutil.html">dscacheutil</a> -flushcache<br>
</p><!-- #BeginLibraryItem "/Library/foot_osx.lbi" --><p><script async="" src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
<!-- OSX300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="1823340303"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->
