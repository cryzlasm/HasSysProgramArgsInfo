---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_osx.lbi" --><!-- #EndLibraryItem --><h1>ftp</h1> 
<p>Internet File Transfer Program. </p>
<pre>Syntax
      ftp [<i>options</i>] -u <i>url file</i> [...]

Options<i>
</i>May be specified at the command line, or to the ftp command interpreter.   

   -n  No `auto-login' upon initial connection.

   -o <i>output</i>
       When auto-fetching files, save the contents in <i>output</i>.  output
       is parsed according to the <a href="ftp_options.html#naming">FILE NAMING CONVENTIONS</a>. If output 
       is not `-' or doesn't start with `|', then only the first
       file specified will be retrieved into output; all other files
       will be retrieved into the basename of their remote name.

   -P <i>port</i>  Sets the port number to <i>port</i>.

   -r <i>wait</i>  Retry the connection attempt if it failed, pausing for <i>wait</i> seconds.

   -u <i>url file</i> [...]
       Upload files on the command line to <i>url</i> where <i>url</i> is one of the
       ftp URL types as supported by auto-fetch (with an optional target
       filename for single file uploads), and file is one or more
       local files to be uploaded.

   -v  Enable verbose and progress.

   -V  Disable verbose and progress.</pre>
<p><span class="body"> Also see the <a href="ftp_options.html"> ftp Advanced options</a> 
  page for further options.</span></p>
<p><span class="body">The client host with which ftp is to communicate can be 
  specified on the command line. If this is done, ftp will immediately attempt 
  to establish a connection to an FTP server on that host; otherwise, ftp will 
  enter its command interpreter and await instructions from the user. When ftp 
  is awaiting commands from the user the prompt `ftp&gt;' is provided to the user.</span> 
  <br>
</p>
<pre>The following commands are recognized by ftp:

  account [<i>passwd</i>]
    Supply a supplemental password required by a remote system
    for access to resources once a login has been successfully
    completed.  If no argument is included, the user will be
    prompted for an account password in a non-echoing input mode.

  append <i>local-file </i>[<i>remote-file</i>]
    Append a local file to a file on the remote machine.  If
    remote-file is left unspecified, the local file name is used
    in naming the remote file after being altered by any ntrans
    or nmap setting.  File transfer uses the current settings for
    type, format, mode, and structure.

  ascii   Set the file transfer type to network ASCII.  This is the
    default type.

  binary  Set the file transfer type to support binary image transfer.

  bye   Terminate the FTP session with the remote server and exit
    ftp.  An end of file will also terminate the session and
    exit.

  case  Toggle remote computer file name case mapping during mget
    commands.  When case is on (default is off), remote computer
    file names with all letters in upper case are written in the
    local directory with the letters mapped to lower case.

  cd <i>remote-directory</i>
    Change the working directory on the remote machine to
    remote-directory.

  cdup  Change the remote machine working directory to the parent of
    the current remote machine working directory.

  chmod <i>mode remote-file</i>
    Change the permission modes of the file remote-file on the
    remote system to mode.

  close  Terminate the FTP session with the remote server, and return
    to the command interpreter.  Any defined macros are erased.

  cr   Toggle carriage return stripping during ascii type file
    retrieval.  Records are denoted by a carriage return/linefeed
    sequence during ascii type file transfer.  When cr is on (the
    default), carriage returns are stripped from this sequence to
    conform with the UNIX single linefeed record delimiter.
    Records on non-UNIX remote systems can contain single line-
    feeds; when an ascii type transfer is made, these linefeeds
    can be distinguished from a record delimiter only when cr is
    off.

  delete <i>remote-file</i>
    Delete the file <i>remote-file</i> on the remote machine.

  dir [<i>remote-path</i> [<i>local-file</i>]]
    Print a listing of the contents of a directory on the remote
    machine.  The listing includes any system-dependent informa-
    tion that the server chooses to include; for example, most
    UNIX systems will produce output from the command `ls -l'.
    If remote-path is left unspecified, the current working
    directory is used.  If interactive prompting is on, ftp will
    prompt the user to verify that the last argument is indeed
    the target local file for receiving dir output.  If no local
    file is specified, or if local-file is `-', the output is
    sent to the terminal.

  fget <i>localfile</i>
    Retrieve the files listed in localfile, which has one line
    per filename.

  form <i>format</i>
    Set the file transfer form to <i>format</i>.  The default format is
    `file'.

  ftp <i>host </i>[<i>port</i>]
    A synonym for open.

  gate [<i>host </i>[<i>port</i>]]
    Toggle gate-ftp mode, which used to connect through the TIS
    FWTK and Gauntlet ftp proxies.   This will not be permitted if
    the gate-ftp server hasn't been set (either explicitly by the
    user, or from the FTPSERVER environment variable).  If host
    is given, then gate-ftp mode will be enabled, and the gate-
    ftp server will be set to host.  If port is also given, that
    will be used as the port to connect to on the gate-ftp
    server.

  get <i>remote-file </i>[<i>local-file</i>]
    Retrieve the remote-file and store it on the local machine.
    If the local file name is not specified, it is given the same
    name it has on the remote machine, subject to alteration by
    the current case, ntrans, and nmap settings.  The current
    settings for type, form, mode, and structure are used while
    transferring the file.

  glob   Toggle filename expansion for mdelete, mget and mput.  If
    globbing is turned off with glob, the file name arguments are
    taken literally and not expanded.  Globbing for mput is done
    as in csh(1).  For mdelete and mget, each remote file name is
    expanded separately on the remote machine and the lists are
    not merged.  Expansion of a directory name is likely to be
    different from expansion of the name of an ordinary file: the
    exact result depends on the foreign operating system and ftp
    server, and can be previewed by doing `mls remote-files -'
    Note: mget and mput are not meant to transfer entire direc-
    tory subtrees of files.  That can be done by transferring a
    tar(1) archive of the subtree (in binary mode).

  hash [<i>size</i>]
    Toggle hash-sign ('#') printing for each data block trans-
    ferred.  The size of a data block defaults to 1024 bytes.
    This can be changed by specifying size in bytes.  Enabling
    hash disables progress.

  help [<i>command</i>]
    Print an informative message about the meaning of command.
    If no argument is given, ftp prints a list of the known com-
    mands.

  lcd [<i>directory</i>]
    Change the working directory on the local machine.  If no
    directory is specified, the user's home directory is used.

  lpwd   Print the working directory on the local machine.

  ls [<i>remote-path</i> [<i>local-file</i>]]
    A synonym for dir.

  mdelete [<i>remote-files</i>]
    Delete the remote-files on the remote machine.

  mdir <i>remote-files local-file</i>
    Like dir, except multiple remote files can be specified.  If
    interactive prompting is on, ftp will prompt the user to ver-
    ify that the last argument is indeed the target local file
    for receiving mdir output.

  mget <i>remote-files</i>
    Expand the remote-files on the remote machine and do a get
    for each file name thus produced.  See glob for details on
    the filename expansion.  Resulting file names will then be
    processed according to case, ntrans, and nmap settings.
    Files are transferred into the local working directory, which
    can be changed with `lcd directory'; new local directories
    can be created with `! mkdir directory'.

  mkdir <i>directory-name</i>
    Make a directory on the remote machine.

  mls <i>remote-files local-file</i>
    Like ls, except multiple remote files can be specified, and
    the local-file must be specified.  If interactive prompting
    is on, ftp will prompt the user to verify that the last argu-
    ment is indeed the target local file for receiving mls out-
    put.

  mlsd [<i>remote-path</i>]
    Display the contents of remote-path (which should default to
    the current directory if not given) in a machine-parsable
    form, using MLSD.  The format of display can be changed with
    `remopts mlst ...'.

  mlst [<i>remote-path</i>]
    Display the details about remote-path (which should default
    to the current directory if not given) in a machine-parsable
    form, using MLST.  The format of display can be changed with
    `remopts mlst ...'.

  mode <i>mode-name</i>
    Set the file transfer mode to <i>mode-name</i>.  The default mode is
    `stream' mode.

  modtime <i>remote-file</i>
    Show the last modification time of the file on the remote
    machine.

  more <i>file</i>   A synonym for page.

  mput <i>local-files</i>
    Expand wild cards in the list of local files given as argu-
    ments and do a put for each file in the resulting list.  See
    glob for details of filename expansion.  Resulting file names
    will then be processed according to ntrans and nmap settings.

  msend <i>local-files</i>
    A synonym for mput.

  newer <i>remote-file </i>[<i>local-file</i>]
    Get the file only if the modification time of the remote file
    is more recent that the file on the current system.  If the
    file does not exist on the current system, the remote file is
    considered newer.  Otherwise, this command is identical to
    get.

  nlist [<i>remote-path</i> [<i>local-file</i>]]
    A synonym for ls.

  open <i>host</i> [<i>port</i>]
    Establish a connection to the specified host FTP server.  An
    optional port number can be supplied, in which case, ftp will
    attempt to contact an FTP server at that port.   If the
    auto-login option is on (default), ftp will also attempt to
    automatically log the user in to the FTP server (see below).

  page <i>file</i>   Retrieve file and display with the program specified
              by the set pager option.

  passive [auto]
    Toggle passive mode (if no arguments are given).  If auto is
    given, act as if FTPMODE is set to `auto'.  If passive mode
    is turned on (default), ftp will send a PASV command for all
    data connections instead of a PORT command.  The PASV command
    requests that the remote server open a port for the data con-
    nection and return the address of that port.  The remote
    server listens on that port and the client connects to it.
    When using the more traditional PORT command, the client lis-
    tens on a port and sends that address to the remote server,
    who connects back to it.  Passive mode is useful when using
    ftp through a gateway router or host that controls the direc-
    tionality of traffic.  (Note that though FTP servers are
    required to support the PASV command by RFC 1123, some do
    not.)

  preserve   Toggle preservation of modification times on retrieved files.

  progress   Toggle display of transfer progress bar.  The progress bar
    will be disabled for a transfer that has local-file as `-' or
    a command that starts with `|'.  Refer to FILE NAMING
    CONVENTIONS for more information.  Enabling progress disables
    hash.

  prompt   Toggle interactive prompting.  Interactive prompting occurs
    during multiple file transfers to allow the user to selec-
    tively retrieve or store files.  If prompting is turned off
    (default is on), any mget or mput will transfer all files,
    and any mdelete will delete all files.

    When prompting is on, the following commands are available at
    a prompt:

       a   Answer `yes' to the current file, and automatically
           answer `yes' to any remaining files for the current command.

       n   Answer `no', and do not transfer the file.


       p   Answer `yes' to the current file, and turn off
           prompt mode (as if 'prompt off' had been given).

       q   Terminate the current operation.

       y   Answer `yes', and transfer the file.

       ?   Display a help message.

    Any other reponse will answer `yes' to the current file.

  put <i>local-file </i>[<i>remote-file</i>]
    Store a local file on the remote machine.  If remote-file is
    left unspecified, the local file name is used after process-
    ing according to any ntrans or nmap settings in naming the
    remote file.  File transfer uses the current settings for
    type, format, mode, and structure.

  pwd  Print the name of the current working directory on the remote
    machine.

  quit  A synonym for bye.

  reget <i>remote-file</i> [<i>local-file</i>]
    reget acts like get, except that if local-file exists and is
    smaller than remote-file, local-file is presumed to be a par-
    tially transferred copy of remote-file and the transfer is
    continued from the apparent point of failure.  This command
    is useful when transferring very large files over networks
    that are prone to dropping connections.

  rename [<i>from</i> [<i>to</i>]]
    Rename the file from on the remote machine, to the file to.

  reset   Clear reply queue.  This command re-synchronizes com-
    mand/reply sequencing with the remote FTP server.  Resynchro-
    nization might be necessary following a violation of the FTP
    protocol by the remote server.

  rhelp [<i>command-name</i>]
    Request help from the remote FTP server.  If a command-name
    is specified it is supplied to the server as well.

  rmdir <i>directory-name</i>
    Delete a directory on the remote machine.

  rstatus [<i>remote-file</i>]
    With no arguments, show status of remote machine.  If
    remote-file is specified, show status of remote-file on
    remote machine.

  type [<i>type-name</i>]
    Set the file transfer type to type-name. If no type is
    specified, the current type is printed. The default type is
    network ASCII.

  usage <i>command</i>
    Print the usage message for command.

  user <i>user-name</i> [<i>password </i>[<i>account</i>]]
    Identify yourself to the remote FTP server.  If the password
    is not specified and the server requires it, ftp will prompt
    the user for it (after disabling local echo).  If an account
    field is not specified, and the FTP server requires it, the
    user will be prompted for it.  If an account field is specified,
    an account command will be relayed to the remote server
    after the login sequence is completed if the remote server
    did not require it for logging in.  Unless ftp is invoked
    with `auto-login' disabled, this process is done automatically
    on initial connection to the FTP server.

  verbose   Toggle verbose mode.  In verbose mode, all responses from the
    FTP server are displayed to the user. In addition, if verbose
    is on, when a file transfer completes, statistics
    regarding the efficiency of the transfer are reported.
    By default, verbose is on.

  xferbuf size
    Set the size of the socket send and receive buffers to size.

  ? [command]
    A synonym for help.</pre>
<p> Command arguments which have embedded spaces can be quoted with quote " marks.<br>
<br>
Commands which toggle settings can take an explicit on or off argument to<br>
force the setting appropriately.<br>
<br>
Commands which take a byte count as an argument (e.g., hash, rate, and<br>
xferbuf) support an optional suffix on the argument which changes the<br>
interpretation of the argument.  Supported suffixes are:<br>
</p>
<pre>    b  Causes no modification. (Optional)
    k  Kilo; multiply the argument by 1024
    m  Mega; multiply the argument by 1048576
    g  Giga; multiply the argument by 1073741824</pre>
<p> If ftp receives a SIGINFO (see the 'status' argument of stty(1)) or
SIGQUIT signal whilst a transfer is in progress, the current transfer
rate statistics will be written to the standard error output, in the same
format as the standard completion message.<br>
</p>
<pre>AUTO-FETCHING FILES</pre>
<p><span class="body"> In addition to standard commands, this version of ftp supports 
  an auto-fetch feature. To enable auto-fetch, simply pass the list of host-names/files 
  on the command line.</span> </p>
<p>The following formats are valid syntax for an auto-fetch element:</p>
<pre>    [user@]host:[path][/]
    `Classic' FTP format.</pre>
<p> If path contains a glob character and globbing is enabled, (see
glob), then the equivalent of `mget path' is performed.<br>
<br>
If the directory component of path contains no globbing characters,
it is stored locally with the name basename (see basename(1)) of
path, in the current directory.  Otherwise, the full remote name is
used as the local name, relative to the local root directory.<br>
</p>
<pre>    ftp://[user[:password]@]host[:port]/path[/][;type=X]</pre>
<p> An FTP URL, retrieved using the FTP protocol if set ftp_proxy isn't
defined.  Otherwise, transfer the URL using HTTP via the proxy
defined in set ftp_proxy.  If set ftp_proxy isn't defined and user
is given, login as user.  In this case, use password if supplied,
otherwise prompt the user for one.<br>
<br>
In order to be compliant with RFC 1738, ftp strips the leading `/'
from path, resulting in a transfer relative from the default login<br>
directory of the user.  If the / directory is required, use a leading path of `%2F'.   If a user's home directory is required (and<br>
the remote server supports the syntax), use a leading path of
`%7Euser/'.  For example, to retrieve <span class="code">/etc/motd</span> from `localhost'
as the user `myname' with the password `mypass', use
`<span class="code">ftp://myname:mypass@localhost/%2fetc/motd</span>'<br>
<br>
If a suffix of `;type=A' or `;type=I' is supplied, then the transfer type will take place as ascii or binary (respectively).  The
default transfer type is binary.<br>
</p>
<pre>    http://[user[:password]@]host[:port]/path</pre>
<p> An HTTP URL, retrieved using the HTTP protocol.  If set http_proxy
is defined, it is used as a URL to an HTTP proxy server.  If HTTP
authorisation is required to retrieve path, and `user' (and optionally `password') is in the URL, use them for the first attempt to
authenticate.<br>
</p>
<pre>    file:///path</pre>
<p> A local URL, copied from /path.<br>
<br>
Unless noted otherwise above, and -o output is not given, the file is stored in the current directory as the basename(1) of path.<br>
<br>
If a classic format or an FTP URL format has a trailing `/' or an empty
path component, then ftp will connect to the site and cd to the directory
given as the path, and leave the user in interactive mode ready for further input.  This will not work if set ftp_proxy is being used.<br>
<br>
Direct HTTP transfers use HTTP 1.1.  Proxied FTP and HTTP transfers use
HTTP 1.0.<br>
<br>
If -R is given, all auto-fetches that don't go via the FTP or HTTP proxies will be restarted.  For FTP, this is implemented by using reget
instead of get.  For HTTP, this is implemented by using the `<span class="code">Range:
bytes=</span>' HTTP/1.1 directive.<br>
<br>
If WWW or proxy WWW authentication is required, you will be prompted to
enter a username and password to authenticate with.<br>
<br>
When specifying IPv6 numeric addresses in a URL, you need to surround the
address in square brackets.  E.g.: `ftp://[::1]:21/'.  This is because
colons are used in IPv6 numeric address as well as being the separator
for the port number.<br>
</p>
<pre>ABORTING A FILE TRANSFER</pre>
<p> To abort a file transfer, use the terminal interrupt key (usually <span class="code">Ctrl-C</span>).<br>
Sending transfers will be immediately halted.<br>
</p>
<pre>FILE TRANSFER PARAMETERS</pre>
<p> The FTP specification specifies many parameters which can affect a file
transfer.  The type can be one of `ascii', `image' (binary),
`ebcdic', and `local byte size' (for PDP-10's and PDP-20's mostly).
ftp supports the ascii and image types of file transfer, plus local byte
size 8 for tenex mode transfers.<br>
<br>
ftp supports only the default values for the remaining file transfer
parameters: mode, form, and struct.</p>
<p><b>Notes<br>
  </b>Also see the <a href="ftp_options.html"> ftp Advanced options</a> page which 
  details:</p>
<ul>
<li> Aborting FTP</li>
  <li> File Naming Conventions</li>
  <li> The .netrc file</li>
  <li> Command Line editing, Command Line Prompt </li>
  <li> Environment.</li>
</ul>
<p class="quote"><i>"Only wimps use tape backup: _real_ men just upload their important stuff on ftp, and let the rest of the world mirror it" ~ <a href="https://www.youtube.com/watch?v=4XpnKHJAok8">Linus Torvalds</a></i></p>
<p><b>Related:</b></p>
<p>
<a href="https://developer.apple.com/legacy/library/documentation/Darwin/Reference/ManPages/man1/ftp.1.html">ftp man page</a> - Apple.com<br>
getservbyname(3), editrc(5), services(5), ftpd(8)<br>
<a href="curl.html">curl</a> - Transfer data  from or to a server<br>
FTP: <a href="http://cyberduck.ch/">Cyberduck</a> - FTP client (free) <br>
FTP: <a href="http://www.panic.com/transmit/">Panic Transmit</a> - FTP client  </p><!-- #BeginLibraryItem "/Library/foot_osx.lbi" --><p>
<!-- OSX300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="1823340303"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="ftp.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->
