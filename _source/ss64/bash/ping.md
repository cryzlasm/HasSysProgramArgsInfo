---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #EndLibraryItem --><h1>ping</h1> 
<p>Test a network connection. When using ping for fault isolation, it should first be run on the local host, to verify that the local network interface is up and running.
Then, hosts and gateways further and further away should be `pinged'.</p>
<pre>Syntax<br>      ping [<i>options</i>] <i>destination_host</i>

Options

   -a         Audible ping. 

   -A         Adaptive ping. Interpacket interval adapts to round-trip time, 
              so that effectively not more than one (or more, if preload is set) unanswered probes
              present in the network. Minimal interval is 200msec for not super-user.
              On networks with low rtt this mode is essentially equivalent to flood mode. 

   -b         Allow pinging a broadcast address. 

   -B         Do not allow ping to change source address of probes. The address is bound to one selected when ping starts.

   -c <i>count</i>   Stop after sending (and receiving) <i>count</i> ECHO_RESPONSE packets.

   -d         Debug, Set the SO_DEBUG option on the socket being used.

   -F <i>flow_label</i>  Allocate and set 20 bit flow label on echo request packets. (Only ping6).
                  If value is zero, kernel allocates random flow label.

   -f         Flood ping, output packets as fast as they come back or 100 times per second.

   -i <i>wait</i>    Set an interval of <i>wait </i>seconds between sending each packet. default=one second.
              Only super-user can set <i>wait</i> to values less 0.2 seconds.
              (incompatible with -f)

   -I <i>interface address<br></i>              Set source address to specified <i>interface_address</i>.
              Argument can be numeric IP address or name of device.
              Required when pinging an IPv6 link-local address.

   -l <i>preload</i> If preload is specified, ping sends that many packets as fast as
              possible before falling into its normal mode of behavior.
              Only the super-user can select preload more than 3.

   -L         Suppress loopback of multicast packets.
              only applies if the ping destination is a multicast address.

   -n         Numeric output only. No attempt will be made to lookup symbolic
              names for host addresses.
   -p <i>pattern</i>
              Specify up to 16 `pad' bytes to fill out the packet sent.
              This is useful for diagnosing data-dependent problems in a
              network. eg, `-p ff' will fill the packet sent with all ones.

   -q         Quiet output. Only display the summary lines at startup time and when finished.
 
   -Q <i>tos    </i> Set Quality of Service -related bits in ICMP datagrams. <i>tos</i> can be a decimal or hex number.
              Multiple TOS bits should not be set simultaneously. For detail see RFC1349 and RFC2474

   -R         Record route(IPv4 only). Includes the RECORD_ROUTE option in the ECHO_REQUEST packet and
              display the route buffer on returned packets.
              Note that the IP header is only large enough for nine such routes.
              Many hosts ignore or discard this option.
 
   -r         Bypass the normal routing tables and send directly to a host on an attached network.
              If the host is not on a directly-attached network, an error is returned.
              This option can be used to ping a local host through an interface that has no route through it
              (e.g., after the interface was dropped by routed(8)).

   -s <i>packetsize
            </i>  The number of data bytes to be sent. The default is 56, which translates into
              64 ICMP data bytes when combined with the 8 bytes of ICMP header data.

   -S <i>sndbuf</i>  Set socket <i>sndbuf</i>. If not specified, it is selected to buffer not more than one packet. <br>
   -t <i>ttl</i>     Set the IP Time to Live. <br>
   -T <i>timestamp_option</i><br>              Set special IP timestamp options, either 'tsonly' (only timestamps),
              'tsandaddr' (timestamps and addresses)
              or 'tsprespec host1 [host2 [host3 [host4]]]' (timestamp prespecified hops). <br>
   -M <i>hint</i>    Select Path MTU Discovery strategy. <i>hint</i> can be either 'do' (prohibit fragmentation,
              even local one), 'want' (do PMTU discovery, fragment locally when packet size is large),
              or 'dont' (do not set DF flag). <br>
   -U         Print full user-to-user latency (the old behaviour).
              Normally ping prints network round trip time, which can be different f.e. due to DNS failures.

   -v         Verbose output. ICMP packets other than ECHO_RESPONSE that are received are listed.
 
</pre>
<p>
Ping is intended for use in network testing, measurement and management. Because of the load it can impose on the network, it is unwise to use ping during normal operations or from automated scripts. </p>
<p>If ping does not receive any reply packets at all it will exit with code 1. If a packet <i>count</i> and <i>deadline</i> are both specified, and fewer than <i>count</i> packets are received by the time the <i>deadline</i> has arrived, it will also exit with code 1. On other error it exits with code 2. Otherwise it exits with code 0. This makes it possible to use the exit code to see if a host is alive or not.</p>
<p>PING is <a href="http://ftp.arl.mil/~mike/ping.html">named</a> after the sound that a sonar makes.</p>
<p>Ping response times below 10 milliseconds often have low accuracy. A time of 10 milliseconds is roughly equal to a distance of 1860 Miles, travelling a straight line route  at the speed of light, (or a round trip of 2 × 930 miles). From this you can see that Ping response times  only give a very rough estimate of the distance to a remote host.</p>
<p><b>Flood Ping</b><br>
For every ECHO_REQUEST sent a period `.' is printed, while for every ECHO_REPLY received a backspace is printed. This provides a rapid display of how many packets are being dropped. Only the super-user can use this option. This can be very hard on a network and should be used with caution.</p>
<p>Round-trip times and packet loss statistics are computed. If duplicate packets are received, they are not included in the packet loss calculation, although the round trip time of these packets is used in calculating the minimum/average/maximum round-trip time numbers. When the specified number of packets have been sent (and received) or if the program is terminated with a SIGINT, a brief summary is displayed.</p>
<p>Flood pinging is not recommended in general, and flood pinging the broadcast address should only be done under very controlled conditions.</p>
<p><b>ICMP Packet Details</b><br>
An IP header without options is 20 bytes. An ICMP ECHO_REQUEST packet contains an additional 8 bytes worth of ICMP header followed by an arbitrary amount of data. When a packetsize is given, this indicated the size of this extra piece of data (the default is 56). Thus the amount of data received inside of an IP packet of type ICMP ECHO_REPLY will always be 8 bytes more than the requested data space (the ICMP header).</p>
<p> If the data space is at least eight bytes large, ping uses the first eight bytes of this space to include a timestamp which it uses in the computation of round trip times. If less than eight bytes of pad are specified, no round trip times are given.</p>
<p><b>Duplicate and Damaged Packets</b><br>
Ping will report duplicate and damaged packets. <br>
Duplicate packets are rarely; if ever; a good sign, although the presence of low levels of duplicates might not always be cause for alarm.<br>
Damaged packets are a serious cause for alarm and often indicate broken hardware somewhere in the ping packet's path (in the network or in the hosts).</p>
<p><b>Different Data Patterns</b><br>
The (inter)network layer should never treat packets differently depending on the data contained in the data portion. Unfortunately, data-dependent<br>
problems have been known to sneak into networks and remain undetected for long periods of time. If you have a data-dependent problem you will probably have to do a lot of testing to find it. If you are lucky, you can manage to find a file that either can't be sent across your network or that takes much longer to transfer than other similar length files. You can then examine this file for repeated patterns that you can test using the -p option of ping.
</p><p><b>TTL Details</b><br>
The <a href="http://en.wikipedia.org/wiki/Time_to_live">Time To Live</a>, (TTL) value of an IP packet represents the maximum number of IP routers that the packet can go through before being thrown away. In current practice you can expect each router in the Internet to decrement the TTL field by exactly one.</p>
<p> The TCP/IP specification states that the TTL field for TCP packets should be set to 60, but many systems use smaller values (4.3 BSD uses 30, 4.2 used 15).</p>
<p> The maximum possible value of this field is 255, and most Unix systems set the TTL field of ICMP ECHO_REQUEST packets to 255. This is why you will find you can `ping' some hosts, but not reach them with telnet(1) or <a href="ftp.html">ftp</a>.</p>
<p> In normal operation ping prints the ttl value from the packet it receives. When a remote system receives a ping packet, it can do one of three things with the TTL field in its response:</p>
<ul>
<li> Not change it; this is what Berkeley Unix systems did before the 4.3BSD-Tahoe release. In this case the TTL value in the received packet will be 255 minus the number of routers in the round-trip path.</li>
<li> Set it to 255; this is what current Berkeley Unix systems do. In this case the TTL value in the received packet will be 255 minus the number of routers in the path from the remote system to the pinging host.</li>
<li> Set it to some other value. Some machines use the same value for ICMP packets that they use for TCP packets, for example either 30 or 60. Others can use completely wild values.</li>
</ul>
<p class="quote"><i>“There's a Nong Nang Ning, Where the trees go Ping!” ~ Spike Milligan </i>  </p>
<p><b> Related:</b></p>
<p>netstat(1), 
ifconfig(8), 
routed(8)<br>
Windows PowerShell equivalent: 
<a href="../ps/test-connection.html">Test-Connection</a> - Ping one or more computers</p><!-- #BeginLibraryItem "/Library/foot_bash.lbi" --><p>
<!-- bash300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="4615356305"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="ping.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

