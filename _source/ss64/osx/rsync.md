---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_osx.lbi" --><!-- #EndLibraryItem --><h1>rsync</h1> 
<p>Remote file copy (Synchronize file trees)</p>
<pre>Syntax:
       rsync [<i>options</i>] <i>Source</i> [<i>Source...</i>] <i>Destination</i>
</pre>
<p>Quick basic example: backup the desktop to the mybackups folder on an external hard drive: </p>
<pre>   rsync -rlpt --stats  Desktop /volumes/LaCieDrive/mybackups

   Options used above:
     -r = Recursive, traverse into subdirectories
     -l = Treat symlinks as symlinks; don't follow them
     -p = Preserve permissions
     -t = Preserve creation and modification dates and times
     --stats = Show file transfer statistics</pre>
<p><b>Options </b></p>
<pre><i>What to copy:</i>
 -r, --recursive             Recursive, traverse into subdirectories
 -R, --relative              use relative path names
     --exclude=PATTERN       exclude files matching PATTERN
     --exclude-from=FILE     exclude patterns listed in FILE
 -I, --ignore-times          don't exclude files that match length and time
     --size-only             only use file size when determining if a file should be transferred
     --modify-window=NUM     Timestamp window (seconds) for file match (default=0)
     --include=PATTERN       don't exclude files matching PATTERN
     --include-from=FILE     don't exclude patterns listed in FILE

<i>How to copy it:
</i> -n, --dry-run               Show what would have been transferred
 -l, --links                 Treat symlinks as symlinks; don't follow them
 -L, --copy-links            Copy the referent of symlinks
     --copy-unsafe-links     Copy links outside the source tree
     --safe-links            Ignore links outside the destination tree
 -H, --hard-links            Preserve hard links
 -D, --devices               Preserve devices (root only)
 -g, --group                 Preserve group
 -o, --owner                 Preserve owner (root only)
 -p, --perms                 Preserve permissions
 -t, --times                 Preserve creation and modification dates and times
 -S, --sparse                Handle sparse files efficiently
 -x, --one-file-system       Don't cross filesystem boundaries
 -B, --block-size=SIZE       Checksum blocking size (default 700)
 -e, --rsh=COMMAND           Specify rsh replacement
     --rsync-path=PATH       Specify path to rsync on the remote machine
     --numeric-ids           Don't map uid/gid values by user/group name
     --timeout=TIME          Set IO timeout in seconds
 -W, --whole-file            Copy whole files, no incremental checks

<i>Destination options:
</i> -a, --archive               archive mode
 -b, --backup                make backups (default ~ suffix)
     --backup-dir            make backups into this directory
     --suffix=SUFFIX         override backup suffix
 -z, --compress              compress file data
 -c, --checksum              always checksum
 -C, --cvs-exclude           auto ignore files in the same way CVS does
     --existing              only update files that already exist
     --delete                delete files that don't exist on the sending side
     --delete-excluded       also delete excluded files on the receiving side
     --delete-after          delete after transferring, not before
     --force                 force deletion of directories even if not empty
     --ignore-errors         delete even if there are IO errors
     --max-delete=NUM        don't delete more than NUM files
     --log-format=FORMAT     log file transfers using specified format
     --partial               keep partially transferred files
     --progress              show progress during transfer
 -P                          equivalent to --partial --progress
     --stats                 Show file transfer statistics
 -T  --temp-dir=DIR          create temporary files in directory DIR
     --compare-dest=DIR      also compare destination files relative to DIR
 -u, --update                update only (don't overwrite newer files)

<i>Misc Others:
</i>     --address=ADDRESS       bind to the specified address
     --blocking-io           use blocking IO for the remote shell
     --bwlimit=KBPS          limit I/O bandwidth, KBytes per second
     --config=FILE           specify alternate rsyncd.conf file
     --daemon                run as a rsync daemon
     --no-detach             do not detach from the parent
     --password-file=FILE    get password from FILE
     --port=PORT             specify alternate rsyncd port number
 -f, --read-batch=FILE       read batch file
 -F, --write-batch           write batch file
     --version               print version number
 -v, --verbose               increase verbosity
 -q, --quiet                 decrease verbosity
 -h, --help                  show this help screen
</pre>
<p><br>
Tips on how to use each of the options above can be found in the <a href="rsync_options.html">Full list of rsync options and Exit Values</a></p>
<p>In many cases the Source and Destination will simply be a directory path, however <i>either</i> the Source or the Destination can be on a remote host:</p>
<pre>       [<i>User</i>@]<i>Host</i>:<i>Source_or_Destination_directory</i>

       [<i>User</i>@]<i>Host</i>::<i>Source_or_Destination_directory</i>

       rsync://[<i>User</i>@]<i>Host</i>[:<i>Port</i>]/<i>Source_or_Destination_directory</i></pre>
<p><span class="body"><b>Description</b><br>
    <br>
 rsync is a program that behaves in much the same way that <a href="rcp.html">rcp</a> does, but has 
  many more options and uses the rsync remote-update protocol to greatly 
  speed up file transfers when the destination file already exists.<br>
    <br>
  The rsync remote-update protocol allows rsync to transfer just the 
  differences between two sets of files across the network link, using 
  an efficient checksum-search algorithm described in the technical report 
  that accompanies this package.</span></p>
<p>Some of the additional features of rsync are:<br>
<br>
# support for copying links, devices, owners, groups and permissions<br>
# exclude and exclude-from options are similar to GNU tar<br>
# a CVS exclude mode for ignoring the same files that CVS would ignore<br>
# can use any transparent remote shell, including rsh or ssh<br>
# does not require root privileges<br>
# pipelining of file transfers to minimize latency costs<br>
# support for anonymous or authenticated rsync servers (ideal for mirroring)<br>
<br>
<b>GENERAL</b><br>
<br>
There are six different ways of using rsync. They are:<br>
<br>
# for copying local files. This is invoked when neither source nor   
destination path contains a : separator<br>
<br>
# for copying from the local machine to a remote machine using a remote  
shell program as the transport (such as rsh or ssh). <br>  
This is invoked when the destination path contains a single : separator.<br>
<br>
# for copying from a remote machine to the local machine using a remote   
shell program. This is invoked when the source contains a : separator.<br>
<br>
# for copying from a remote rsync server to the local machine.  
This is invoked when the source path contains a :: separator or a rsync:// URL.<br>
<br>
# for copying from the local machine to a remote rsync server.  
This is invoked when the destination path contains a :: separator.<br>
<br>
# for listing files on a remote machine. This is done the same way as rsync   
transfers except that you leave off the local destination.<br>
<br>
Note that in all cases (other than listing) at least one of the source and 
destination paths must be local.</p>
<p><b>USAGE</b><br>
<br>
You use rsync in the same way you use rcp. 
You must specify a source and a destination, one of which can be remote.<br>
<br>
Perhaps the best way to explain the syntax is some examples:</p>
<pre>   rsync *.c foo:Source/</pre>
<p>This would transfer all files matching the pattern *.c from the current directory
to the directory Source on the machine foo. <br>
If any of the files already exist on the remote system then the 
rsync remote-update protocol is used to update the file by sending only the differences. <br>
See the tech report for details.</p>
<pre>   rsync -avz foo:Source/bar /data/tmp</pre>
<p>
this would recursively transfer all files from the directory Source/bar 
on the machine foo into the /data/tmp/bar directory on the local machine. <br>
The files are transferred in "archive" mode, which ensures that symbolic links,
devices, attributes, permissions, ownerships etc are preserved in the transfer. 
Additionally, compression will be used to reduce the size of data portions of the transfer.</p>
<pre>   rsync -avz foo:Source/bar/ /data/tmp</pre>
<p>
a trailing slash on the source changes this behavior to transfer all files
from the directory Source/bar on the machine foo into the /data/tmp/. <br>
A trailing / on a source name means "copy the contents of this directory". 
Without a trailing slash it means "copy the directory". <br>
This difference becomes particularly important when using the --delete option.<br>
<br>
You can also use rsync in local-only mode, where both the source and destination 
don't have a ':' in the name. 
In this case it behaves like an improved copy command.</p>
<pre>  rsync somehost.mydomain.com::</pre>
<p>this would list all the anonymous rsync modules available on
the host somehost.mydomain.com. (See the following section for more details.)<br>
<br>
<b>CONNECTING TO AN RSYNC SERVER</b><br>
<br>
It is also possible to use rsync without using rsh or ssh as the transport. 
In this case you will connect to a remote rsync server running on TCP port 873.<br>
<br>
You can establish the connection via a web proxy by setting the environment variable
RSYNC_PROXY to a hostname:port pair pointing to your web proxy. 
Note that your web proxy's configuration must allow proxying to port 873.<br>
<br>
Using rsync in this way is the same as using it with rsh or ssh except that:</p>
<ul>
<li> you use a double colon :: instead of a single colon to separate the hostname 
from the path.</li>
<li> the remote server might print a message of the day when you connect.</li>
<li> if you specify no path name on the remote server then the list of accessible 
paths on the server will be shown.</li>
<li> if you specify no local destination then a listing of the specified files on 
the remote server is provided.</li>
</ul>
<p> Some paths on the remote server will require authentication. 
If so then you will receive a password prompt when you connect. <br>
You can avoid the password prompt by setting the environment variable
RSYNC_PASSWORD to the password you want to use or using the --password-file option. 
This may be useful when scripting rsync.<br>
<br>
WARNING: On some systems environment variables are visible to all users. 
On those systems using --password-file is recommended.<br>
<br>
<b>RUNNING AN RSYNC SERVER</b><br>
<br>
An rsync server is configured using a config file which by default is <br>
called /etc/rsyncd.conf. Please see the rsyncd.conf(5) man page for more information.<br>
<br>
<b>EXAMPLES</b><br>
<br>To Backup the home directory using a cron job: </p>
<pre>   rsync -Cavz . server64:backup</pre>
<p>Run the above over a PPP link to a duplicate directory on machine "server64".<br>
<br>
To synchronize samba source trees use the following Makefile targets:</p>
<pre>   get:
   rsync -avuzb --exclude '*~' samba:samba/ .

   put:
   rsync -Cavuzb . samba:samba/

   sync: get put</pre>
<p>
this allows me to sync with a CVS directory at the other end of the link. 
I then do cvs operations on the remote machine, which saves a lot of time <br>
as the remote cvs protocol isn't very efficient.<br>
<br>
I mirror a directory between my "old" and "new" ftp sites with the command</p>
<pre>   rsync -az -e ssh --delete ~ftp/pub/samba/ nimbus:"~ftp/pub/tridge/samba"
</pre>
<p>this is launched from cron every few hours.<br>
<br>
<b><a id="exclude"></a>EXCLUDE PATTERNS</b><br>
<br>
The exclude and include patterns specified to rsync allow for flexible selection of
which files to transfer and which files to skip.<br>
<br>
rsync builds an ordered list of include/exclude options as specified on the 
command line. When a filename is encountered, rsync checks the name against each
exclude/include pattern in turn. The first matching pattern is acted on. <br>
If it is an exclude pattern, then that file is skipped. <br>
If it is an include pattern then that filename is not skipped. <br>
If no matching include/exclude pattern is found then the filename is not skipped.<br>
<br>
Note that when used with -r (which is implied by -a), every subcomponent of
every path is visited from top down, so include/exclude patterns get applied <br>
recursively to each subcomponent.<br>
<br>
Note also that the --include and --exclude options take one pattern each.
To add multiple patterns use the --include-from and --exclude-from options<br>
or multiple --include and --exclude options.<br>
<br>
The patterns can take several forms. The rules are:</p>
<ul>
<li>  if the pattern starts with a / then it is matched against the start of the filename,
otherwise it is matched against the end of the filename. 
Thus "/foo" would match a file called "foo" at the base of the tree.  
On the other hand, "foo" would match any file called "foo" anywhere in the tree<br>  
because the algorithm is applied recursively from top down; it behaves as if each  
path component gets a turn at being the end of the file name.</li>
<li> if the pattern ends with a / then it will only match a directory, not a file,  
link or device.</li>
<li> if the pattern contains a wildcard character from the set *?[ then expression  
matching is applied using the shell filename matching rules.  
Otherwise a simple string match is used.</li>
<li> if the pattern includes a double asterisk "**" then all wildcards in the pattern  
will match slashes, otherwise they will stop at slashes.</li>
<li> if the pattern contains a / (not counting a trailing /) then it is matched  
against the full filename, including any leading directory.<br>
If the pattern doesn't contain a / then it is matched only against the final  
component of the filename. Again, remember that the algorithm is applied recursively  
so "full filename" can actually be any portion of a path.</li>
<li> if the pattern starts with "+ " (a plus followed by a space) then it is always  
considered an include pattern, even if specified as part of an exclude option.<br>
The "+ " part is discarded before matching.</li>
<li> if the pattern starts with "- " (a minus followed by a space) then it is always  
considered an exclude pattern, even if specified as part of an include option.  
The "- " part is discarded before matching.</li>
<li> if the pattern is a single exclamation mark ! then the current include/exclude list  
is reset, removing all previously defined patterns.</li>
</ul>
<p> The +/- rules are most useful in exclude lists, allowing you to have a single  
exclude list that contains both include and exclude options.<br>
<br>
If you end an exclude list with --exclude '*', note that since the algorithm is
applied recursively that unless you explicitly include parent directories of files<br>
you want to include then the algorithm will stop at the parent directories and never
see the files below them. <br>
To include all directories, use --include '*/' before the --exclude '*'.<br>
<br>
Here are some exclude/include examples:<br>
<br>
# --exclude "*.o" would exclude all filenames matching *.o<br>
# --exclude "/foo" would exclude a file in the base directory called foo<br>
# --exclude "foo/" would exclude any directory called foo.<br>
# --exclude "/foo/*/bar" would exclude any file called bar two levels below a                          
base directory called foo.<br>
# --exclude "/foo/**/bar" would exclude any file called bar two or more levels below                          
a base directory called foo.<br>
# --include "*/" --include "*.c" --exclude "*" would include all directories                          
and C source files<br>
# --include "foo/" --include "foo/bar.c" --exclude "*"<br>
would include only foo/bar.c (the foo/ directory must be                    
explicitly included or it would be excluded by the "*")<br>
<br>
<b>BATCH MODE</b><br>
<br>
The following call generates 4 files that encapsulate the information for
synchronizing the contents of target_dir with the updates found in Source_dir<br>
<br>
$ rsync -F [other rsync options here] \
/somewhere/Source_dir /somewhere/target_dir<br>
<br>
The generated files are labeled with a common timestamp:<br>
<br>
# rsync_argvs.<timestamp> command-line arguments<br>
# rsync_flist.<timestamp> rsync internal file metadata<br>
# rsync_csums.<timestamp> rsync checksums<br>
# rsync_delta.<timestamp> data blocks for file update &amp; change<br>
<br>
<b>SYMBOLIC LINKS</b><br>
<br>
Three basic behaviours are possible when rsync encounters a symbolic link in
the source directory.<br>
<br>
By default, symbolic links are not transferred at all.
A message "skipping non-regular" file is emitted for any symlinks that exist.<br>
<br>
If --links is specified, then symlinks are recreated with the same target
on the destination. Note that --archive implies --links.<br>
<br>
If --copy-links is specified, then symlinks are "collapsed" by copying their referent,
rather than the symlink.<br>
<br>
rsync also distinguishes "safe" and "unsafe" symbolic links.<br>
An example where this might be used is a web site mirror that wishes ensure the 
rsync module they copy does not include symbolic links to /etc/passwd in the public
section of the site. Using --copy-unsafe-links will cause any links to be copied
as the file they point to on the destination.<br>
Using --safe-links will cause unsafe links to be ommitted altogether.<br>
<br>
<b>DIAGNOSTICS</b><br>
<br>
rsync occasionally produces error messages that may seem a little cryptic. <br>
The one that seems to cause the most confusion is "protocol version mismatch - is your shell clean?".<br>
<br>
This message is usually caused by your startup scripts or remote shell facility
producing unwanted garbage on the stream that rsync is using for its transport. 
The way to diagnose this problem is to run your remote shell like this:</timestamp></timestamp></timestamp></timestamp></p>
<pre>   rsh remotehost /bin/true &gt; out.dat
</pre>
<p>Then look at out.dat. If everything is working correctly then out.dat should be
a zero length file. If you are getting the above error from rsync then you will<br>
probably find that out.dat contains some text or data. 
Look at the contents and try to work out what is producing it. <br>
The most common cause is incorrectly configured shell startup scripts
(such as .cshrc or .profile) that contain output statements for non-interactive logins.<br>
<br>
If you are having trouble debugging include and exclude patterns,
then try specifying the -vv option.
At this level of verbosity rsync will show why each individual file is included or
excluded.<br>
<br>
<b>SETUP</b><br>
<br>
See the file README for installation instructions.<br>
<br>
Once installed you can use rsync to any machine that you can use rsh to. 
rsync uses rsh for its communications, unless both the source and destination are local.<br>
<br>
You can also specify an alternative to rsh, either by using the -e command line 
option, or by setting the RSYNC_RSH environment variable.<br>
<br>
One common substitute is to use ssh, which offers a high degree of security.
Note that rsync must be installed on both the source and destination machines.<br>
<br>
<b>ENVIRONMENT VARIABLES</b></p>
<pre>CVSIGNORE
    The CVSIGNORE environment variable supplements any ignore patterns in .cvsignore files.
    See the --cvs-exclude option for more details.

RSYNC_RSH
    The RSYNC_RSH environment variable allows you to override the default shell used as
    the transport for rsync. This can be used instead of the -e option.

RSYNC_PROXY
    The RSYNC_PROXY environment variable allows you to redirect your rsync client to
    use a web proxy when connecting to a rsync daemon.
    You should set RSYNC_PROXY to a hostname:port pair.

RSYNC_PASSWORD
    Setting RSYNC_PASSWORD to the required password allows you to run authenticated
    rsync connections to a rsync daemon without user intervention.
    Note that this does not supply a password to a shell transport such as ssh.

USER or LOGNAME
    The USER or LOGNAME environment variables are used to determine the default
    username sent to a rsync server.

HOME
    The HOME environment variable is used to find the user's default .cvsignore file.

<b>FILES</b>

/etc/rsyncd.conf</pre>
<p> <b>Download latest version</b> (plus docs)<br>
<a href="http://rsync.samba.org/">rsync.samba.org</a></p>
<p class="quote"><i>“I was the only kid in the audience who didn’t understand why Dorothy would ever want to go home. It was a mystery to me. To that awful black and white farm, with that aunt who was dressed badly, with smelly farm animals around. When she could live with winged monkeys and magic shoes and gay lions. I didn’t get it” ~ John Waters</i></p>
<p><b>Related:</b></p>
<p><a href="https://developer.apple.com/legacy/library/documentation/Darwin/Reference/ManPages/man1/rsync.1.html">rsync man page</a> - Apple.com<br>
<a href="cp.html">cp</a> - Copy files<br>
<a href="install.html">install</a> - Copy files and set attributes <br>
<a href="rcp.html">rcp</a> - Remote file copy<br>
<a href="http://rsnapshot.org/">rsnapshot</a> - Save multiple backups with rsync<br>
<a href="http://www.opbyte.it/grsync/">Grsync</a> - GUI for rsync<br>
<a href="youtube-dl.html">youtube-dl</a> - Download video<br>
<a href="http://en.wikipedia.org/wiki/Rsync">wikipedia entry for rsync</a></p><!-- #BeginLibraryItem "/Library/foot_osx.lbi" --><p><script async="" src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
<!-- OSX300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="1823340303"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->
