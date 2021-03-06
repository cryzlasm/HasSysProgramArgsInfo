---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_osx.lbi" --><!-- #EndLibraryItem --><h1>curl</h1> 
<p>Transfer data  from or to a server, using one of the  protocols: HTTP, HTTPS, FTP, FTPS, SCP, SFTP, TFTP, DICT, TELNET, LDAP or FILE. (To transfer multiple files use wget or FTP.)</p>
<pre>Syntax
      curl [<i>options</i>] [<i>URL</i>...]

Key
   <i>url</i>  One or multiple URLs that will be fetched in sequence.

        Multiple URLs or parts of URLs can be specified by writing part sets within braces as in:

        http://site.<b>{</b>one,two,three<b>}</b>.com

        or get sequences of alphanumeric series by using [] as in:

        ftp://ftp.numericals.com/file<b>[</b>1-100<b>]</b>.txt
        ftp://ftp.numericals.com/file<b>[</b>001-100<b>]</b>.txt (with leading zeros)
        ftp://ftp.letters.com/file<b>[</b>a-z<b>]</b>.txt

   -A "<i>agent string</i>"
   --user-agent "<i>agent string</i>"
        Specify the User-Agent string to send to the HTTP server.
        To encode blanks in the string, surround the string with single
        quote marks. This can also be set with -H, --header option. (HTTP)

   -b <i>name</i>=<i>data</i>
   --cookie <i>name</i>=<i>data
</i>        Send the data to the HTTP server as a cookie. It is supposedly the data
        previously received from the server in a "Set-Cookie:" line.
        The data should be in the format  "NAME1=VALUE1; NAME2=VALUE2".

   -c <i>filename</i>
   --cookie-jar <i>file name</i>
        Save cookies to <i>file</i> after a completed operation.
        Curl writes all cookies previously read from a specified file
        as well as all cookies received from remote server(s).
        If no cookies are known, no file will be written.
        TO write to stdout, set the file name to a single dash,  "-"

   --compressed
         Request a compressed response using one of the algorithms
        curl supports (gzip), and save  the  uncompressed  document.
        If this option  is  used  and  the server sends an unsupported encoding,
        curl will report an error.(HTTP)

   -d @<i>file</i>
   -d "<i>string</i>"
   --data "<i>string</i>"
        Send the specified data in an (HTTP) POST request, in the same way that a
        web browser does.
        This  will pass the data using the content-type
        application/x-www-form-urlencoded.  Compare to -F, --form.

        -d, --data is the same as  --data-ascii.  To post data in pure binary, use --data-binary.
        To URL-encode the value of a form field you may use --data-urlencode.

        Multiple date options will be merged together.
        Thus,  using  '-d  name=daniel  -d skill=lousy' would generate a post
        that looks like  'name=daniel&amp;skill=lousy'.

        If the data starts with @, the rest should be a filename containing the data.
  
   -F <i>name</i>=@<i>file</i>
   -F <i>name</i>=<i>content</i>
    --form <i>name</i>=<i>content</i>
        Emulate a filled-in form in which a user has pressed the submit button.
        This will POST data using the Content-Type  multipart/form-data according
        to  RFC 2388.  This enables uploading of binary files etc.

        If the data starts with @, the rest should be a filename.
        To just get the content part from a file, prefix the file name with the
        symbol &lt;. The difference between @ and &lt;  is that  @  makes a file get
        attached in the post as a file upload, while the &lt; makes a text field
        and gets the contents for that text field from a file.

        Example, to send your password file to the server, where 'password' is
        the name of the form-field to which /etc/passwd will be the input:

        curl -F password=@/etc/passwd www.mypasswords.com

   -k
   --insecure
        This option explicitly allows curl to  perform  "insecure" SSL connections
        and transfers. All SSL connections are attempted in secure mode using the
        CA certificate  bundle  installed by  default. This  makes  all connections
        considered "insecure" fail unless -k, --insecure is used.(SSL)

   --limit-rate <i>speed</i>
        Specify the maximum transfer rate.  This feature is useful if you have a
        limited pipe and you'd like your transfer not to use your entire bandwidth.

        The given speed is measured in bytes/second, unless a suffix  is appended.
        Appending 'k' or 'K' will count the number as kilobytes/sec, 'm' or M' megabytes,
        while 'g' or 'G' makes it gigabytes/sec. Eg: 200K, 3m, 1G.

   -m <i>seconds</i>
   --max-time <i>seconds</i>
        Maximum time that you allow the whole operation to take.
        This is useful for preventing your batch jobs from  hanging for hours due to
        slow networks or links going down.  See also the --connect-timeout option.

   -o <i>file</i>
   --output <i>file</i>
        Write output to <i>file</i> instead of stdout. If you are using {} or [] to fetch
        multiple documents, you can use '#' followed by a number  in  the <i>file</i> specifier.
        That variable will be replaced with the current string for the URL being fetched.
        Like in:
                 curl http://{one,two}.site.com -o "file_#1.txt"
        or use several variables like:
                 curl http://{site,host}.host[1-5].com -o "#1_#2"
        You may use this option as many times as the number of URLs you have.

        See also --create-dirs option to create the local directories dynamically.
        Specify '-' to force the output to stdout.  

   -O
   --remote-name
        Write output to a local file named like the remote file we get.
        (Only the file part of the remote file is used, the path is cut off.)
        The  remote file name to use for saving is extracted from the given URL, nothing else.
        Consequentially, the file will be saved in the  current  working directory.

    -s
    --silent
        Silent or quiet mode. Don't show progress meter or error messages.

   --trace-ascii <i>file</i>
        Enable a full trace dump of all  incoming  and  outgoing  data, including
        descriptive information, to the given output file.
        Use "-" as filename to have the output sent to stdout.
        This option overrides previous uses of -v, --verbose or --trace-ascii.
        If this option is used several times, the last one will be used.

   -T <i>file</i>
   --upload-file <i>file</i>
        Transfer the specified local file to the remote  URL.  PUT
        If there is no file part in the specified URL, Curl will append the local
        file name. You must use a trailing / on the last directory to really prove
        to Curl that there is no file name or curl will think that the last
        directory name is the remote file name to use.
        Use the file name "-" to use stdin

        You can specify one -T for each URL on the command line. Each -T
        + URL pair specifies what to upload and to where. curl also supports "globbing"
        of the -T argument, meaning that you can upload multiple files to a single URL
        like this:

        curl -T "{file1,file2}" http://www.uploadtothissite.com
        or even
        curl -T "img[1-1000].png" ftp://ftp.picturemania.com/upload/

   -I
    --head
        Fetch the HTTP-header only! (HTTP/FTP/FILE) 
        HTTP-servers feature the  command  HEAD which this uses to get nothing but
        the header of a document. When used on an FTP or <i>FILE</i> file, curl displays
        the file size and last modification time only.

    -u <i>user</i>:<i>password</i>
   --user <i>user</i>:<i>password</i>
        The username and password to use for server authentication.
        Overrides -n, --netrc and --netrc-optional.

        If you just give the user name (without entering a  colon) curl will prompt
        for a password.

        If you use an SSPI-enabled curl binary and do NTLM authentication, you can
        force curl to pick up the username and password from your environment by
        specifying a single colon with this option: "-u :".

        If this option is used several times, the last one will be used.

   -w
   --write-out <i>format</i>
        Define extra info to display on stdout after a completed and successful operation.
        The <i>format</i> is a string that may contain plain text mixed with any
        number of variables. The <i>format</i> string can be specified  as "<i>string</i>", or to
        read from a file specify  "@filename" 
        to read the format from stdin use "@-".

        Various variables may be included in the format and will be substituted by
        curl (file size, ip address etc see man curl for details).
        variables are specified as %{<i>variable_name</i>} 

        Output a newline using \n, a carriage return with \r and a tab space with \t.

   -x <i>host</i>:<i>port</i>
   -x  [<i>protocol</i>://][<i>user</i>:<i>password</i>@]<i>proxyhost</i>[:<i>port</i>]
   --proxy [<i>protocol</i>://][<i>user</i>:<i>password</i>@]<i>proxyhost</i>[:<i>port</i>]
        Use the  specified HTTP proxy.
        If the port number is not specified, it is assumed at port 1080.


   -H "<i>name</i>: <i>value</i>"
   --header "<i>name</i>: <i>value</i>"
        Add Header when getting a web page.
        You may specify any number of extra headers.

   -H "<i>name</i>:"
    --header "<i>name</i>:"
        Remove Header, remove an internal header.

   -L
   --location
        Follow redirects if the server reports that the requested page has moved
        (indicated with a Location: header and a 3XX response code)

   -v
   --verbose
        Make more verbose/talkative. Mostly useful for debugging.</pre>
<p>This page is a heavily abbreviated selection of the full options, for more detail including return codes, run <span class="code">man curl</span><br>
<br>
curl is a powerful tool, please use it <a href="http://stackoverflow.com/questions/13314123/curl-and-ddos-problems">responsibly</a>.</p>
<p>The return status is zero if no errors occur, non-zero otherwise.</p>
<p><b>Examples</b><br>
<br>
Retrieve a web page and display in the terminal,  use  --include (-i) option to also display header information:</p>
<p><span class="code">$ curl http://ss64.com<br>
$ curl http://ss64.com -i</span><br>
<br>
Retrieve a web page and save to a file<br>
<span class="code">$ curl http://ss64.com/bash/ -o ss64.html</span><br>
<br>
Retrieve a web page, or its redirected target:<br>
<span class="code">$ curl ss64.co/bash/ <br>
$ curl ss64.co/bash/ --location</span></p>
<p>Limit the rate of data transfer to 1 Kilobytes/sec:<br>
<span class="code">$ curl http://ss64.com/bash/ --limit-rate 1k -o ss64.html</span></p>
<p>Download via a proxy server:<br>
<span class="code">$ curl -x proxy.example.com:3128 http://ss64.com/bash/</span></p>
<p>Post to Twitter.com using SuperTweet: </p>
<pre class="code">curl -u <i>user:password</i> -d "status=My first Tweet"&nbsp;http://api.supertweet.net/1/statuses/update.xml</pre>
<p class="quote"><i>“Let us curl, my lady. Let us throw and sweep between until the heavens themselves droop their jaws in wonder and envy” - Homer Simpson (Boy Meets Curl) </i></p>
<p><b>Related:</b></p>
<p>
<a href="https://developer.apple.com/legacy/library/documentation/Darwin/Reference/ManPages/man1/curl.1.html">curl man page</a> - Apple.com<br>
<a href="ftp.html">ftp</a> - Internet file transfer program<br>
wget -
non-interactive network downloader. </p><!-- #BeginLibraryItem "/Library/foot_osx.lbi" --><p>
<!-- OSX300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="1823340303"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="curl.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->
