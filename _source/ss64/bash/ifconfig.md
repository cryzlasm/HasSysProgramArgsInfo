---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_bash.lbi" --><!-- #EndLibraryItem --><h1>ifconfig</h1> 


<p><b>I</b>nter<b>f</b>ace <b>config</b>urator - display your ip address, network interfaces, transferred and received data information, configure a network interface. On most modern distributions <span class="code">ifconfig</span> has been depracated, use <a href="ip.html">ip</a> instead.</p>
<pre>Syntax
      ifconfig [<i>interface</i>]

      ifconfig <i>interface</i> [<i>aftype</i>] <i>options</i> | <i>address </i>...

Options
   interface    The name of the interface.
                Usually a driver name followed by a unit number, eth0 = 1st Ethernet interface. 

   up           This flag causes the interface to be activated.
                It is implicitly specified if an address is assigned to the interface. 

   down         This flag causes the driver for this interface to be shut down. 

   [-]arp       Enable or disable the use of the ARP protocol on this interface. 

   [-]promisc   Enable or disable the promiscuous mode of the interface.
                If selected, all packets on the network will be received by the interface. 

   [-]allmulti  Enable or disable all-multicast mode.
                If selected, all multicast packets on the network will be received by the interface. 

   metric <i>N</i>     Set the interface metric. 

   mtu <i>N</i>        Set the Maximum Transfer Unit (MTU) of an interface.
                To make this change permanent, edit:
                /etc/network/interfaces    Debian / Ubuntu
                /etc/sysconfig/network-scripts/ifcfg-eth0   CentOS/RHEL/Fedora

   dstaddr <i>addr</i>    Set the remote IP address for a point-to-point (PPP)link (obsolete; use pointopoint instead) 

   netmask <i>addr</i>    Set the IP network mask for this interface.
                   This value defaults to the usual class A, B or C network mask
                   (as derived from the interface IP address), but it can be set to any value. 

   add <i>addr/prefixlen</i>    Add an IPv6 address to an interface. 

   del <i>addr/prefixlen</i>    Remove an IPv6 address from an interface. 

   tunnel <i>aa.bb.cc.dd</i>    Create a new SIT (IPv6-in-IPv4) device, tunnelling to the given destination. 

   irq <i>addr</i>         Set the interrupt line used by this device.
                    Not all devices can dynamically change their IRQ setting. 

   io_addr <i>addr</i>    Set the start address in I/O space for this device. 

   mem_start <i>addr</i>  Set the start address for shared memory used by this device.
                   Only a few devices need this. 

   media <i>type</i>      Set the physical port or medium type to be used by the device.
                   Not all devices can change this setting, and those that can vary
                   in what values they support. Typical values for type are 10base2 (thin Ethernet),
                   10baseT (twisted-pair 10Mbps Ethernet), AUI (external transceiver) and so on.
                   The special medium type of auto can be used to tell the driver to auto-sense the
                   media. Again, not all drivers can do this. 

   [-]broadcast [<i>addr</i>]    If the address argument is given, set the protocol broadcast address
                          for this interface. Otherwise, set (or clear) the IFF_BROADCAST flag for
                          the interface. 

   [-]pointopoint [<i>addr</i>]  This keyword enables the point-to-point mode of an interface,meaning that 
                          it is a direct link between two machines with nobody else listening on it.
                          If the address argument is also given, set the protocol address of the other
                          side of the link, just like the obsolete dstaddr keyword does.
                          Otherwise, set or clear the IFF_POINTOPOINT flag for the interface. 

   hw <i>class address</i>    Set the hardware address of this interface, if the device driver supports
                       this operation. The keyword must be followed by the name of the hardware class
                       and the printable ASCII equivalent of the hardware address. Hardware classes
                       currently supported include ether (Ethernet), ax25 (AMPR AX.25), ARCnet and
                       netrom (AMPR NET/ROM). 

   multicast           Set the multicast flag on the interface. Not normally be needed as
                       the drivers set the flag correctly themselves. 

   address             The IP address to be assigned to this interface. 

   txqueuelen <i>length</i>   Set the length of the transmit queue of the device.
                       It is useful to set this to small values for slower devices with a high
                       latency (modem links, ISDN) to prevent fast bulk transfers from disturbing
                       interactive traffic like telnet too much.</pre>
<p> ifconfig is used at boot time to set up interfaces as necessary. After that, it is usually only needed when debugging or when system tuning is needed.</p>
<p>If no arguments are given, ifconfig displays the status of the currently active interfaces. If a single interface argument is given, it displays the status of the given interface only; if a single -a argument is given, it displays the status of all interfaces, even those that are down. Otherwise, it configures an interface.</p>
<p>If the first argument after the interface name is recognized as the name of a supported address family, that address family is used for decoding and displaying all protocol addresses. Currently supported address families include <b>inet</b> (TCP/IP, default), <b>inet6</b> (IPv6), <b>ax25</b> (AMPR Packet Radio), <b>ddp</b> (Appletalk Phase 2), <b>ipx</b> (Novell IPX) and <b>netrom</b> (AMPR Packet radio). </p>
<p>All numbers supplied as parts in IPv4 dotted decimal notation can be decimal, octal, or hexadecimal, as specified in the ISO C standard (that is, a leading 0x or 0X implies hexadecimal; otherwise, a leading '0' implies octal; otherwise, the number is interpreted as decimal). Use of hexamedial and octal numbers is not RFC-compliant and therefore its use is discouraged and might go away.</p>
<p><b>Examples</b>:</p>
<p>Change the state of the network interface device(s) to UP:<br>
<span class="code">$ ifconfig eth0 up</span></p>
<p>Change the state of the network interface device(s) to DOWN: (see also <span class="code">ip link</span>)<br>
<span class="code">$ ifconfig eth0 dn</span></p>
<p>Display the mac address for <span class="code">eth0</span> (via <a href="http://stackoverflow.com/questions/245916/best-way-to-extract-mac-address-from-ifconfigs-output">StackOverflow</a>)<br>
<span class="code">$ ifconfig eth0 | grep -o -E '([[:xdigit:]]{1,2}:){5}[[:xdigit:]]{1,2}'</span></p>
<p>Change/spoof the hardware mac address of <span class="code">eth0</span> to  <span class="code">41:5b:8f:64:64:ef</span><br>
<span class="code"> $
sudo ifconfig eth0 down hw ether 41:5b:8f:64:64:ef<br>
$ sudo ifconfig eth0 up</span><br>
By default the MAC address will be reset when you restart the computer. To make the change permanent, modify the appropriate boot configuration file under <span class="code">/etc/network/interfaces.d/</span> or  <span class="code">/etc/network/interfaces</span></p>
<p class="quote"><i>“A Connection Manager connection does not connect after being disconnected” ~ Title of Microsoft <a href="http://support.microsoft.com/default.aspx?scid=kb;en-us;325331">KnowledgeBase</a> article</i></p>

<p><b>Related:</b><br>
<br>
route(8)<br>
netstat(1) - Networking information<br>
arp(8), 
rarp(8)<br>
<a href="ip.html">ip</a> - Routing, devices and tunnels<br> 
ipchains(8)<br>
 Equivalent Windows command: 
<a href="../nt/netsh.html">NETSH</a> - Configure Interfaces</p><!-- #BeginLibraryItem "/Library/foot_bash.lbi" --><p><script async="" src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
<!-- bash300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="4615356305"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

