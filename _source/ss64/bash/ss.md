---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_bash.lbi" --><!-- #EndLibraryItem -->
<h1>ss</h1> 
<p>Socket Statistics. Shows information similar to <span class="code">netstat</span>, ss can display more TCP and state information than other tools. </p>
<pre>Syntax:

     ss [<i>options</i>] [<i>FILTER</i>]

Options

  -n, --numeric    Do now try to resolve service names.
  -r, --resolve    Try to resolve numeric address/ports.
  -a, --all        Display all sockets.
  -l, --listening  Display listening sockets.
  -o, --options    Show timer information.
  -e, --extended   Show detailed socket information
  -m, --memory     Show socket memory usage.
  -p, --processes  Show process using socket.
  -i, --info       Show internal TCP information.
  -s, --summary    Print summary statistics.This option does not parse socket lists
                   obtaining summary from various sources. It is useful when amount
                   of sockets is so huge that parsing /proc/net/tcp is painful.

  -A <i>QUERY</i>,
  --query=<i>QUERY</i>,
  --socket=<i>QUERY</i>   List of socket tables to dump, separated by commas.
                   The following identifiers are understood: all, inet, tcp, udp, raw,
                   unix, packet, netlink, unix_dgram, unix_stream, packet_raw, packet_dgram.

  -D <i>FILE</i>, --diag=<i>FILE</i>     Do not display anything, just dump raw information about
                   TCP sockets to <i>FILE</i> after applying filters. If <i>FILE</i> is - stdout is used.

  -f <i>FAMILY</i>, --family=<i>FAMILY</i>     Display sockets of type <i>FAMILY</i>.
                   Currently the following families are supported: unix, inet, inet6, link, netlink.

  -F <i>FILE</i>,
  --filter=<i>FILE</i>    Read filter information from <i>FILE</i>. Each line of <i>FILE</i> is
                   interpreted like single command line option. If <i>FILE</i> is - stdin is used.
                   FILTER := [ state TCP-STATE ] [ EXPRESSION ]

  -4, --ipv4       Display only IP version 4 sockets (alias for -f inet).
  -6, --ipv6       Display only IP version 6 sockets (alias for -f inet6).
  -0, --packet     Display PACKET sockets.
  -t, --tcp        Display only TCP sockets.
  -u, --udp        Display only UDP sockets.
  -d, --dccp       Display only DCCP sockets.
  -w, --raw        Display only RAW sockets.
  -x, --unix       Display only Unix domain sockets.

  -h, --help       Show summary of options.
  -V, --version    Output version information.</pre>
<p>Look at the official docs (Debian package iproute-doc) for details regarding filters.</p>
<p><b>Examples</b></p>
<p>Display all TCP sockets.  ss -u -a     Display all UDP sockets. </p>
<p class="code">ss -t -a </p>
<p>Display all established ssh connections. </p>
<p class="code">ss -o state established '( dport = :ssh or sport = :ssh )' </p>
<p>Find all local processes connected to X server. </p>
<p class="code">ss -x src /tmp/.X11-unix/* </p>
<p>List all the tcp sockets in state FIN-WAIT-1 for our apache to network 193.233.7/24 and look at their timers.</p>
<p class="code">ss -o state fin-wait-1 '( sport = :http or sport = :https )' dst 193.233.7/24 </p>
<p class="quote"><i>"If your experiment needs statistics, you ought to have done a better experiment" ~ Ernest Rutherford</i></p><p><b>Related:</b></p>
<p><a href="ip.html">ip</a> - Routing, devices and tunnels.<br>
<a href="nc.html">nc</a> - Netcat, read and write data across networks.</p>
<!-- #BeginLibraryItem "/Library/foot_bash.lbi" --><p>
<!-- bash300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="4615356305"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="ss.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

