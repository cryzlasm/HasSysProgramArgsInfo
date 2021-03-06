---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_nt.lbi" --><!-- #EndLibraryItem --><h1>PING</h1> 
<p> Test a network connection - if successful, ping returns the ip 
address.</p>
<pre>Syntax
      PING [<i>options</i>] <i>destination_host</i>

Options
    -w <i>timeout</i>     Timeout in milliseconds to wait for each reply, default=4000.
    -i <i>TTL</i>         Time To Live.
    -v <i>TOS</i>         Type Of Service.
    -a             Resolve addresses to hostnames.
    -n <i>count</i>       Number of echo requests to send.
    -t             Ping the destination host until interrupted.
                   To see statistics and continue type Control-Break;
                   To stop type Control-C.
    -l <i>size</i>        Send buffer size (default=32).
    -f             Set don’t Fragment flag in packet (IPv4-only).
    -r <i>count</i>       Record route for count hops (IPv4-only).
    -s <i>count</i>       Timestamp for count hops (IPv4-only).
    -j <i>host_list</i>   Loose source route along <i>host_list</i> (IPv4-only).
    -k <i>host_list</i>   Strict source route along <i>host_list</i> (IPv4-only).
 <i>destination_host</i>  The name of the remote host
    -R             Use routing header to test reverse route also (IPv6-only).
    -S <i>srcaddr</i>     Source address to use.
    -4             Force using IPv4.
    -6             Force using IPv6.</pre>
<p> A response of "Request timed out" means there was no response within the default time period of 4 seconds. <br>
If the latency of the response is more than 4 seconds. Use the -w option to increase the time-out. <br>
For example, to allow responses within 10 seconds, use <span class="code">ping -w 10000</span></p>
<p>The IPv6 options are only available on versions of Windows that support IPv6, e.g. Windows 7 /2008</p>
<p>A successful PING does NOT always return an %errorlevel% of 0<b><br>
</b>Therefore to reliably detect a successful ping - pipe the output into FIND and look for the text <span class="code">"TTL"  </span><br>
<br>
Note that "Reply" in the output of PING does not always indicate a positive response. <br>
Example message: <i>Reply from 192.168.1.254: Destination Net Unreachable.</i></p>
<p>Ping response times below 10 milliseconds often have low accuracy. A time of 10 milliseconds is roughly equal to a distance of 1860 Miles, travelling a straight line route  at the speed of light, (or a round trip of 2 × 930 miles). From this you can see that ping response times  will give a very very rough estimate of the distance to a remote host.</p>
<p>Network adminstrators do not appreciate frequent or continual pings to their servers, try not to <a href="http://en.wikipedia.org/wiki/Denial-of-service_attack">overdo</a> it!</p>
<h2>How to test connectivity with ping:</h2>
<blockquote>
<p> 1) Ping the <a href="https://en.wikipedia.org/wiki/Localhost">loopback</a> address to verify that TCP/IP is installed and configured 
correctly on the local computer. <br>
<span class="code">PING 127.0.0.1 </span><br>
<br>
2) Ping the IP address of the local computer to verify that it was added to 
the network correctly. <br>
<span class="code">PING<i> IP_address_of_local_host </i></span><br>
<br>
3) Ping the IP address of the default gateway to verify that the default gateway 
is functioning and that you can communicate with a local host on the local network. 
<br>
<span class="code">PING <i>IP_address_of_default_gateway </i></span><i><br>
</i><br>
4) Ping the IP address of a remote host to verify that you can communicate through 
a router. <br>
<span class="code">PING <i>IP_address_of_remote_host</i></span></p>
</blockquote>
<h2>How to create a timed delay with ping:</h2>
<blockquote>
<p>Create a delay of 1 or more seconds by pinging the  <a href="https://en.wikipedia.org/wiki/Localhost">loopback address</a> (127.0.0.1) multiple times.<br>
The delay <b>between</b> each ping is 1 second, so for  a delay of <b>5</b> seconds ping <b>6</b> times:<br>
<span class="code">PING -n <b>6</b> 127.0.0.1&gt;nul<br>
</span>In tests this consumes less processor time than <a href="sleep.html">Sleep</a> or <a href="timeout.html">Timeout</a> - see <a href="https://groups.google.com/forum/#!msg/alt.msdos.batch.nt/nSRpfQE-lko/WEWG9aCfSoAJ">Clay Calvert's</a> original newsgroup posting.<br>
</p>
</blockquote>
<p><b>Examples</b></p>
<p>Ping a server just once:<br>
<span class="code">PING -n 1 Server64</span><br>
<br>
Check if a host is reachable:
<span class="code"><br>
PING Server64 |find "TTL=" &amp;&amp; ECHO MyHost found<br>
</span><br>
Check if a host is not reachable: <span class="code"><br>
PING Server64 |find "TTL=" || ECHO MyHost not found<br>
</span><br>
Test  which iSCSI IP on a specific NIC is functioning or if a specific teamed NIC is operating as it should:<br>
<span class="code">Ping -S <i>(Source IP: XXX.XXX.XXX.XXX) (Destination IP: XXX.XXX.XXX.XXX)</i><br>
Ping -S 10.5.7.64&nbsp;&nbsp;10.5.7.1</span><br>
<br>
Ping a website 5 times:<br>
<span class="code">PING -n 5 -w 7500 www.microsoft.com</span></p>
<p>Monitor a website (example.com) every 15 seconds:</p>
<pre>@Echo off
Echo Logging ping responses, press CTRL-C to stop
:start
 Ping -n 1 <b>example.com</b> | find "TTL=" &gt;&gt;c:\pingtest.txt
 Echo .
 Ping -n 16 127.0.0.1&gt;nul
goto start</pre>
<p> The script above can be used to test an Internet connection, just replace <b>example.com</b> with your ISP's Default Gateway IP address. This  represents the first physical device on the ISP's side of your connection. You can find the Default Gateway on your <a href="http://192.168.0.1/">router status screen</a>.<br>
</p>
<p>PING is <a href="http://ftp.arl.mil/~mike/ping.html">named</a> after the sound that a sonar makes.</p>
<p><i class="quote">“And now I see with eye serene<br>
The very pulse of the machine” ~ William Wordsworth, (She Was a Phantom of Delight)</i><br>
<br>
<b>Related:</b><br>
<br>
<a href="tracert.html">TRACERT</a> - Trace route to a remote host<br>
<a href="ipconfig.html">IPCONFIG</a> - IP Configuration<br>
<a href="pathping.html">PATHPING</a> - Route Tracing tool<br>
<a href="https://support.microsoft.com/kb/115388">Q115388</a> - Resolving IP Address with Leading Zero <br>
<a href="http://network-tools.com/">FreePing</a> - Freeware Windows GUI  Ping<br>
<a href="http://www.locaping.com/">LocaPing</a> - Online ping<br>
<a href="https://tools.ietf.org/html/rfc5737">RFC5737</a> - IPv4 Address Blocks Reserved for Documentation<br>
 Powershell equivalent: 
<a href="../ps/test-connection.html">Test-Connection</a> - Ping one or more computers, <a href="../ps/syntax-psping.html">psp</a> function<br>
Equivalent bash command (Linux):
ping - Test a network connection</p><!-- #BeginLibraryItem "/Library/foot_nt.lbi" --><p>
<!-- windows300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="7649547908"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="ping.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

