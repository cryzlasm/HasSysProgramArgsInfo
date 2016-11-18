---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_osx.lbi" --><!-- #EndLibraryItem --><h1>dig (domain information groper)</h1> 
<p>A flexible tool for interrogating DNS name servers. It performs DNS lookups and displays the answers that are returned from the name server(s) that were queried. Most DNS administrators use dig to troubleshoot DNS problems because of its flexibility, ease of use and clarity of output. Other lookup tools tend to have less functionality than dig.</p>
<pre>Syntax:
     dig [@<i>server</i>] [-b <i>address</i>] [-c <i>class</i>] [-f <i>filename</i>] [-k <i>filename</i>] [-m]
             [-p <i>port#</i>] [-q name] [-t <i>type</i>] [-x <i>addr</i>] [-y [hmac:]<i>name</i>:<i>key</i>] 
                [-4] [-6] [<i>name</i>] [<i>type</i>] [<i>class</i>] [<i>queryopt</i>...]<br>     dig [-h]

     dig [<i><a href="dig-queryopt.html">global-queryopt</a></i>...] [<i>query</i>...]

Options:

   -4    Force dig to only use IPv4 query transport.

   -6    Force dig to only use IPv6 query transport.

   -b <i>address</i>
         Set the source IP address of the query to address.
         This must be a valid address on one of the host's network interfaces or "0.0.0.0" or "::".
         An optional port can be specified by appending "#<i>port</i>"

   -c <i>class</i>
         Over-ride the default query class (IN for internet).
         class is any valid class, such as HS for Hesiod records or CH for CHAOSNET records.

   -f <i>filename</i> 
         Operate in batch mode by reading a list of lookup requests to process from a file.
         The file contains a number of queries, one per line.
         Each entry in the file should be organised in the same way they would be presented
         as queries to dig using the command-line interface.

   -m    Enable memory usage debugging.

   -p <i>port#</i>
        Specify a non-standard port number to be queried,
        default = the standard DNS port number 53.
        This option would be used to test a name server that has been configured
        to listen for queries on a non-standard port number.

   -t <i>type</i>
        Set the query type to <i>type</i>, any valid query type which is supported in BIND9.
        The default query type "A", unless the -x option is supplied to indicate a reverse lookup.
        A zone transfer can be requested by specifying a type of AXFR.
        When an incremental zone transfer (IXFR) is required, type is set to ixfr=N.
        The incremental zone transfer will contain the changes made to the zone since the
        serial number in the zone's SOA record was N.

   -x <i>addr
       </i> Reverse lookups - mapping addresses to names: <i>addr</i> is an IPv4 address in dotted-
        decimal notation, or a colon-delimited IPv6 address. When this option is used,
        there is no need to provide the name, class and type arguments. dig automatically
        performs a lookup for a name like 11.12.13.10.in-addr.arpa and sets the query type
        and class to PTR and IN respectively. By default, IPv6 addresses are looked up using
        nibble format under the IP6.ARPA domain. To use the older RFC1886 method using the
        IP6.INT domain specify the -i option. Bit string labels (RFC2874) are now experimental
        and are not attempted.

   -k <i>filename</i>
        Sign the DNS queries sent by dig and their responses using transaction signatures
        (TSIG key file). You can also specify the TSIG key itself on the command line
        using the -y option; <i>name</i> is the name of the TSIG key and <i>key</i> is the actual key.
        The key is a base-64 encoded string, typically generated by dnssec-keygen(8).
        Caution should be taken when using the -y option on multi-user systems as the key
        can be visible in the output from ps(1 ) or in the shell's history file.
        When using TSIG authentication with dig, the name server that is queried needs to
        know the key and algorithm that is being used. In BIND, this is done by providing
        appropriate key and server statements in named.conf.

   -h   Print a brief summary of the command-line arguments and options.</pre>
<p> Although dig is normally used with command-line arguments, it also has a batch mode of operation for reading lookup requests from a file. Unlike earlier versions, the BIND9 implementation of dig allows multiple lookups to be issued from the command line.</p>
<p>Unless it is told to query a specific name server, dig will try each of the servers listed in <span class="code">/etc/resolv.conf</span></p>
<p>When no command line arguments or options are given, will perform an NS query for "." (the root).</p>
<p>It is possible to set per-user defaults for dig via <span class="code">${HOME}/.digrc</span>. This file is read and any options in it are applied before the command line arguments.</p>
<p>The IN and CH class names overlap with the IN and CH top level domains names. Either
  use the -t and -c options to specify the type and class, use the -q the specify the
  domain name, or use "IN." and "CH." when looking up these top level domains.</p>
<p>Mac OS X NOTICE<br>
The dig command does not use the host name and address resolution or
the DNS query routing mechanisms used by other processes running on Mac
OS X.  The results of name or address queries printed by dig might differ from those found by other processes that use the Mac OS X native name
and address resolution mechanisms.  The results of DNS queries can also
differ from queries that use the Mac OS X DNS routing library.</p>
<p><b>Examples</b></p>
<p>List the DNS A records for ss64.com:<span class="code"><br>
$ 
dig ss64.com</span><br>
or <br>
<span class="code">$ dig ss64.com A</span></p>
<p>List the DNS AAAA (ipv6) records for ss64.com:<br>
<span class="code">$ dig ss64.com AAAA </span></p>
<p>List the DNS A records for ss64.com using Google DNS  (8.8.8.8) instead of your local cache:<span class="code"><br>
$ 
dig ss64.com @8.8.8.8</span></p>
<p>List the  Signature record (SIG record)  for ss64.com:<span class="code"><br>
$ dig ss64.com SIG</span></p>
<p>List the Mail exchanger record (MX record)  for ss64.com:<span class="code"><br>
$ dig ss64.com MX <br>
</span></p>
<p>Test your DNS resolver's source port behavior:<span class="code"><br>
$ dig +short porttest.<a href="https://www.dns-oarc.net/oarc/services/porttest">dns-oarc.net</a> TXT</span></p>
<p class="quote"><i> “Businessmen they drink my wine, Plowmen dig my earth, But none of them along the line, Know what any of it is worth” - Bob Dylan</i></p>
<p><b>Related:</b></p>
<p><a href="https://developer.apple.com/legacy/library/documentation/Darwin/Reference/ManPages/man1/dig.1.html">dig man page</a> - Apple.com<br>
<a href="dscacheutil.html">dscacheutil</a> - Query or flush the Directory Service/DNS cache<br>
<a href="http://viewdns.info/">ViewDNS.info</a> - IP and DNS lookups<br>
<a href="http://en.wikipedia.org/wiki/List_of_DNS_record_types">List of DNS record types</a> - Wikipedia</p><!-- #BeginLibraryItem "/Library/foot_osx.lbi" --><p>
<!-- OSX300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="1823340303"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="dig.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->