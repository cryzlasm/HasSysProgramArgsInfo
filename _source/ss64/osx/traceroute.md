---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_osx.lbi" --><!-- #EndLibraryItem --><h1>traceroute</h1> 
<p>Print the route packets take to network host.</p>
<pre>Syntax
      traceroute [<i>options</i>] host [<i>packetsize</i>]

Options<i>

</i>     <b>host    </b>Host name or IP number<b>

     -m</b> <i>max</i><b>_</b><i>ttl</i>
      Set the max time-to-live (max number of hops) used in outgoing
      probe packets.  The default is 30 hops (the same default used for
      TCP connections).

     <b>-n</b>
      Print hop addresses numerically rather than symbolically and
      numerically (saves a nameserver address-to-name lookup for each
      gateway found on the path).

     <b>-p</b> <i>port</i>
      Set the base UDP <i>port</i> number used in probes (default is 33434).
      <b>Traceroute</b> hopes that nothing is listening on UDP ports <i>base</i> to
      <i>base+nhops-1</i> at the destination host (so an ICMP PORT_UNREACHABLE
      message will be returned to terminate the route tracing). If
      something is listening on a port in the default range, this
      option can be used to pick an unused port range.

 <i>packetsize</i>  The default probe datagram length is 38 bytes, but this may be
             increased  by specifying a packet size (in bytes) after the
             destination host name.

     <b>-q</b> <i>nqueries</i>
      Set the number of probes per `ttl' to <i>nqueries</i> (default is
      three probes).

     <b>-r
</b>      Bypass the normal routing tables and send directly to a host on
      an attached network.  If the host is not on a directly-attached
      network, an error is returned.  This option can be used to ping a
      local host through an interface that has no route through it
      (e.g., after the interface was dropped by <b>routed(8)</b>).

     <b>-s</b> <i>src</i><b>_</b><i>addr</i>
      Use the following IP address (which must be given as an IP num-
      ber, not a hostname) as the source address in outgoing probe
      packets.  On hosts with more than one IP address, this option can
      be used to force the source address to be something other than
      the IP address of the interface the probe packet is sent on.  If
      the IP address is not one of this machine's interface addresses,
      an error is returned and nothing is sent.

     <b>-t</b> <i>tos</i>
      Set the <i>type-of-service</i> in probe packets to the following value
      (default zero).  The value must be a decimal integer in the range
      0 to 255. This option can be used to see if different types-of-
      service result in different paths.  (If you are not running a
      4.3BSD-Tahoe or later system, this may be academic since the nor-
      mal network services like telnet and ftp don't let you control
      the TOS). Not all values of TOS are legal or meaningful - see
      the IP spec for definitions.  Useful values are probably `-t 16'
      (low delay) and `-t 8' (high throughput).

     <b>-v</b>
      Verbose output.  Received ICMP packets other than TIME_EXCEEDED
      and UNREACHABLEs are listed.

     <b>-w
</b>      Set the time (in seconds) to wait for a response to a probe
      (default 3 sec.).</pre>
<p><span class="body"> This program attempts to trace the route an IP packet would 
  follow to some internet host by launching UDP probe packets with a small ttl 
  (time to live) then listening for an ICMP "time exceeded" reply from a gateway.<br>
  We start our probes with a ttl of one and increase by one until we get an ICMP 
  "port unreachable" (which means we got to "host") or hit a max (which defaults 
  to 30 hops &amp; can be changed with the <b>-m</b> flag). Three probes (changed 
  with <b>-q</b> flag) are sent at each ttl setting and a line is printed showing 
  the ttl, address of the gateway and round trip time of each probe. If the probe 
  answers come from different gateways, the address of each responding system 
  will be printed. If there is no response within a 3 sec. timeout interval (changed 
  with the <b>-w</b> flag), a "*" is printed for that probe.<br>
  <br>
  We don't want the destination host to process the UDP probe packets so the destination 
  port is set to an unlikely value (if some clod on the destination is using that 
  value, it can be changed with the <b>-p</b> flag).</span> </p>
<pre>     A sample use and output might be:

     [yak 71]% traceroute nis.nsf.net.
     traceroute to nis.nsf.net (35.1.1.48), 30 hops max, 56 byte packet
     1 helios.ee.lbl.gov (128.3.112.1)  19 ms 19 ms  0 ms
     2 lilac-dmc.Berkeley.EDU (128.32.216.1)  39 ms  39 ms  19 ms
     3 lilac-dmc.Berkeley.EDU (128.32.216.1)  39 ms  39 ms  19 ms
     4 ccngw-ner-cc.Berkeley.EDU (128.32.136.23)  39 ms  40 ms  39 ms
     5 ccn-nerif22.Berkeley.EDU (128.32.168.22)  39 ms  39 ms 39 ms
     6 128.32.197.4 (128.32.197.4)  40 ms  59 ms  59 ms
     7 131.119.2.5 (131.119.2.5)  59 ms  59 ms  59 ms
     8 129.140.70.13 (129.140.70.13)  99 ms  99 ms  80 ms
     9 129.140.71.6 (129.140.71.6)  139 ms  239 ms  319 ms
     10  129.140.81.7 (129.140.81.7)  220 ms  199 ms  199 ms
     11  nic.merit.edu (35.1.1.48)  239 ms  239 ms  239 ms
     Note that lines 2 &amp; 3 are the same.  This is due to a buggy kernel on the
     2nd hop system - lbl-csam.arpa - that forwards packets with a zero ttl (a
     bug in the distributed version of 4.3 BSD).  Note that you have to guess
     what path the packets are taking cross-country since the NSFNet (129.140)
     doesn't supply address-to-name translations for its NSSes.

     A more interesting example is:

     [yak 72]% traceroute allspice.lcs.mit.edu.
     traceroute to allspice.lcs.mit.edu (18.26.0.115), 30 hops max
     1 helios.ee.lbl.gov (128.3.112.1)  0 ms  0 ms  0 ms
     2 lilac-dmc.Berkeley.EDU (128.32.216.1)  19 ms  19 ms  19 ms
     3 lilac-dmc.Berkeley.EDU (128.32.216.1)  39 ms  19 ms  19 ms
     4 ccngw-ner-cc.Berkeley.EDU (128.32.136.23)  19 ms  39 ms  39 ms
     5 ccn-nerif22.Berkeley.EDU (128.32.168.22)  20 ms  39 ms 39 ms
     6 128.32.197.4 (128.32.197.4)  59 ms  119 ms  39 ms
     7 131.119.2.5 (131.119.2.5)  59 ms  59 ms  39 ms
     8 129.140.70.13 (129.140.70.13)  80 ms  79 ms  99 ms
     9 129.140.71.6 (129.140.71.6)  139 ms  139 ms  159 ms
     10  129.140.81.7 (129.140.81.7)  199 ms  180 ms  300 ms
     11  129.140.72.17 (129.140.72.17) 300 ms 239 ms 239 ms
     12  * * *
     13  128.121.54.72 (128.121.54.72) 259 ms 499 ms 279 ms
     14  * * *
     15  * * *
     16  * * *
     17  * * *
     18  ALLSPICE.LCS.MIT.EDU (18.26.0.115)  339 ms  279 ms  279 ms
     Note that the gateways 12, 14, 15, 16 &amp; 17 hops away either don't send
     ICMP "time exceeded" messages or send them with a ttl too small to reach
     us.  14 - 17 are running the MIT C Gateway code that doesn't send "time
     exceeded"s.  God only knows what's going on with 12.

     The silent gateway 12 in the above may be the result of a bug in the
     4.[23] BSD network code (and its derivatives):  4.x (x &lt;= 3) sends an
     unreachable message using whatever ttl remains in the original datagram.
     Since, for gateways, the remaining ttl is zero, the ICMP "time exceeded"
     is guaranteed to not make it back to us.  The behavior of this bug is
     slightly more interesting when it appears on the destination system:

     1 helios.ee.lbl.gov (128.3.112.1)  0 ms  0 ms  0 ms
     2 lilac-dmc.Berkeley.EDU (128.32.216.1)  39 ms  19 ms  39 ms
     3 lilac-dmc.Berkeley.EDU (128.32.216.1)  19 ms  39 ms  19 ms
     4 ccngw-ner-cc.Berkeley.EDU (128.32.136.23)  39 ms  40 ms  19 ms
     5 ccn-nerif35.Berkeley.EDU (128.32.168.35)  39 ms  39 ms 39 ms
     6 csgw.Berkeley.EDU (128.32.133.254)  39 ms  59 ms  39 ms
     7 * * *
     8 * * *
     9 * * *
     10  * * *
     11  * * *
     12  * * *
     13  rip.Berkeley.EDU (128.32.131.22)  59 ms !  39 ms !  39 ms !
     Notice that there are 12 "gateways" (13 is the final destination) and
     exactly the last half of them are "missing".  What's really happening is
     that rip (a Sun-3 running Sun OS3.5) is using the ttl from our arriving
     datagram as the ttl in its ICMP reply.  So, the reply will time out on
     the return path (with no notice sent to anyone since ICMP's aren't sent
     for ICMP's) until we probe with a ttl that's at least twice the path
     length.  I.e., rip is really only 7 hops away.  A reply that returns with
     a ttl of 1 is a clue this problem exists. <b>Traceroute</b> prints a "!" after
     the time if the ttl is &lt;= 1.  Since vendors ship a lot of obsolete (DEC's
     Ultrix, Sun 3.x) or non-standard (HPUX) software, expect to see this
     problem frequently and/or take care picking the target host of your
     probes.  Other possible annotations after the time are <b>!H</b>, <b>!N</b>, <b>!P</b> (got a
     host, network or protocol unreachable, respectively), <b>!S</b> or <b>!F</b> (source
     route failed or fragmentation needed - neither of these should ever occur
     and the associated gateway is busted if you see one).  If almost all the
     probes result in some kind of unreachable, <b>traceroute</b> will give up and
     exit.

     This program is intended for use in network testing, measurement and man-
     agement.  It should be used primarily for manual fault isolation.
     Because of the load it could impose on the network, it is unwise to use
     <b>traceroute</b> during normal operations or from automated scripts.</pre>
<p class="quote"><i>“The Net interprets censorship as damage and routes around it” ~ John Gilmore</i></p>
<p><b>Related:</b></p>
<p><a href="https://developer.apple.com/legacy/library/documentation/Darwin/Reference/ManPages/man8/traceroute.8.html">traceroute man page</a> - Apple.com<br>
netstat - Show network status<br>
<a href="ping.html">ping</a> - Test a network connection</p><!-- #BeginLibraryItem "/Library/foot_osx.lbi" --><p>
<!-- OSX300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="1823340303"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="traceroute.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->
