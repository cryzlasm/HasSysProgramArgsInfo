---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_osx.lbi" --><!-- #EndLibraryItem --><h1><a href="rsync.html">rsync</a></h1> 
<p>Remote file copy (Synchronize file trees)</p>
<pre><b>FULL LIST OF Options</b>

rsync uses the GNU long options package. 
Many of the command line options have two variants, one short and one long. 
These are shown below, separated by commas. 
Some options only have a long variant. 
The '=' for options that take a parameter is optional; whitespace can be used instead.

-h, --help
    Print a short help page describing the options available in rsync

--version
    print the rsync version number and exit

-v, --verbose
    This option increases the amount of information you are given during the transfer. 
    By default, rsync works silently. 
    A single -v will give you information about what files are being transferred 
    and a brief summary at the end. 
    Two -v flags will give you information on what files are being skipped and
    slightly more information at the end.
    More than two -v flags should only be used if you are debugging rsync.

-q, --quiet
    This option decreases the amount of information you are given during the transfer,
    notably suppressing information messages from the remote server.
    This flag is useful when invoking rsync from cron.

-I, --ignore-times
    Normally rsync will skip any files that are already the same length and 
    have the same time-stamp. This option turns off this behavior.

--size-only
    Normally rsync will skip any files that are already the same length and 
    have the same time-stamp.
    With the --size-only option files will be skipped if they have the same size,
    regardless of timestamp. This is useful when starting to use rsync after
    using another mirroring system which may not preserve timestamps exactly.

--modify-window
    When comparing two timestamps rsync treats the timestamps as being equal if
    they are within the value of modify_window. 
    This is normally zero, but you may find it useful to set this to a larger value
    in some situations. In particular, when transferring to/from FAT filesystems
    which cannot represent times with a 1 second resolution this option is useful.

-c, --checksum
    This forces the sender to checksum all files using a 128-bit MD4 checksum
    before transfer. The checksum is then explicitly checked on the receiver and
    any files of the same name which already exist and have the same checksum and 
    size on the receiver are skipped. This option can be quite slow.

-a, --archive
    This is equivalent to -rlptgoD. It is a quick way of saying you want recursion and
    want to preserve almost everything.

    Note however that -a does not preserve hardlinks, because finding multiply-linked
    files is expensive. You must separately specify -H.

-r, --recursive
    This tells rsync to copy directories recursively. 
    If you don't specify this then rsync won't copy directories at all.

-R, --relative
    Use relative paths. This means that the full path names specified on the
    command line are sent to the server rather than just the last parts of the
    filenames. This is particularly useful when you want to send several different
    directories at the same time.
    For example, if you used the command

     rsync foo/bar/foo.c remote:/tmp/

    then this would create a file called foo.c in /tmp/ on the remote machine. 
    If instead you used

     rsync -R foo/bar/foo.c remote:/tmp/

    then a file called /tmp/foo/bar/foo.c would be created on the remote machine.
    The full path name is preserved.

-b, --backup
    With this option preexisting destination files are renamed with a ~ extension as
    each file is transferred.
    You can control the backup suffix using the --suffix option.

--backup-dir=DIR
    In combination with the --backup option, this tells rsync to store all
    backups in the specified directory. This is very useful for incremental backups.

--suffix=SUFFIX
    This option allows you to override the default backup suffix
    used with the -b option. The default is a ~.

-u, --update
    This forces rsync to skip any files for which the destination file already
    exists and has a date later than the source file.

-l, --links
    When symlinks are encountered, recreate the symlink on the destination.

-L, --copy-links
    When symlinks are encountered, the file that they point to is copied,
    rather than the symlink.

--copy-unsafe-links
    This tells rsync to copy the referent of symbolic links that point outside
    the source tree. Absolute symlinks are also treated like ordinary files,
    and so are any symlinks in the source path itself when --relative is used.

--safe-links
    This tells rsync to ignore any symbolic links which point outside the
    destination tree. All absolute symlinks are also ignored.
    Using this option in conjunction with --relative may give unexpected results.

-H, --hard-links
    This tells rsync to recreate hard links on the remote system to be the same
    as the local system. Without this option hard links are treated like regular files.

    Note that rsync can only detect hard links if both parts of the link are
    in the list of files being sent.

    This option can be quite slow, so only use it if you need it.

-W, --whole-file
    With this option the incremental rsync algorithm is not used and the whole
    file is sent as-is instead. The transfer may be faster if this option is
    used when the bandwidth between the source and target machines is higher
    than the bandwidth to disk (especially when the "disk" is actually a networked file system).
    This is the default when both the source and target are on the local machine.

-p, --perms
    This option causes rsync to update the remote permissions to be the same as
    the local permissions.

-o, --owner
    This option causes rsync to set the owner of the destination file to be the
    same as the source file. On most systems, only the super-user can set file ownership.

-g, --group
    This option causes rsync to set the group of the destination file to be the
    same as the source file. If the receiving program is not running as the super-user,
    only groups that the receiver is a member of will be preserved
    (by group name, not group id number).

-D, --devices
    This option causes rsync to transfer character and block device information to
    the remote system to recreate these devices.
    This option is only available to the super-user.

-t, --times
    This tells rsync to transfer modification times along with the files and update
    them on the remote system. Note that if this option is not used,
    the optimization that excludes files that have not been modified cannot be effective;
    in other words, a missing -t or -a will cause the next transfer to behave as if
    it used -I, and all files will have their checksums compared and show up in log
    messages even if they haven't changed.

-n, --dry-run
    This tells rsync to not do any file transfers, instead it will just report the
    actions it would have taken.

-S, --sparse
    Try to handle sparse files efficiently so they take up less space on the
    destination.

    NOTE: Don't use this option when the destination is a Solaris "tmpfs" filesystem.
    It doesn't seem to handle seeks over null regions correctly and ends up corrupting
    the files.

-x, --one-file-system
    This tells rsync not to cross filesystem boundaries when recursing.
    This is useful for transferring the contents of only one filesystem.

--existing
    This tells rsync not to create any new files - only update files that already
    exist on the destination.

--max-delete=NUM
    This tells rsync not to delete more than NUM files or directories.
    This is useful when mirroring very large trees to prevent disasters.

--delete
    This tells rsync to delete any files on the receiving side that aren't on
    the sending side. Files that are excluded from transfer are excluded from
    being deleted unless you use --delete-excluded.

    This option has no effect if directory recursion is not selected.

    This option can be dangerous if used incorrectly! It is a very good idea to
    run first using the dry run option (-n) to see what files would be deleted
    to make sure important files aren't listed.

    If the sending side detects any IO errors then the deletion of any files at
    the destination will be automatically disabled.
    This is to prevent temporary filesystem failures (such as NFS errors) on the
    sending side causing a massive deletion of files on the destination.
    You can override this with the --ignore-errors option.

--delete-excluded
    In addition to deleting the files on the receiving side that are not on
    the sending side, this tells rsync to also delete any files on the receiving side
    that are excluded (see --exclude).

--delete-after
    By default rsync does file deletions before transferring files to try to
    ensure that there is sufficient space on the receiving filesystem.
    If you want to delete after transferring then use the --delete-after switch.

--ignore-errors
    Tells --delete to go ahead and delete files even when there are IO errors.

--force
    This options tells rsync to delete directories even if they are not empty.
    This applies to both the --delete option and to cases where rsync tries to
    copy a normal file but the destination contains a directory of the same name.

    Since this option was added, deletions were reordered to be done depth-first
    so it is hardly ever needed anymore except in very obscure cases.

-B , --block-size=BLOCKSIZE
    This controls the block size used in the rsync algorithm.
    See the technical report for details.

-e, --rsh=COMMAND
    This option allows you to choose an alternative remote shell program to
    use for communication between the local and remote copies of rsync.
    By default, rsync will use rsh, but you may like to instead use ssh because
    of its high security.

    You can also choose the remote shell program using the RSYNC_RSH
    environment variable.

    See also the --blocking-io option which is affected by this option.

--rsync-path=PATH
    Use this to specify the path to the copy of rsync on the remote machine.
    Useful when it's not in your path. Note that this is the full path to the binary,
    not just the directory that the binary is in.

--exclude=PATTERN
    This option allows you to selectively exclude certain files from the list of
    files to be transferred.
    This is most useful in combination with a recursive transfer.

    You may use as many --exclude options on the command line as you like to
    build up the list of files to exclude.

    See the <a href="rsync.html#exclude">section on exclude patterns</a> for information on the syntax of this option.

--exclude-from=FILE
    This option is similar to the --exclude option, but instead it adds all exclude
    patterns listed in the file FILE to the exclude list.
    Blank lines in FILE and lines starting with ';' or '#' are ignored.

--include=PATTERN
    This option tells rsync to not exclude the specified pattern of filenames.
    This is useful as it allows you to build up quite complex exclude/include rules.

    See the section of exclude patterns for information on the syntax of this option.

--include-from=FILE
    This specifies a list of include patterns from a file.

-C, --cvs-exclude
    This is a useful shorthand for excluding a broad range of files that you often
    don't want to transfer between systems.
    It uses the same algorithm that CVS uses to determine if a file should be ignored.

    The exclude list is initialized to:

    RCS SCCS CVS CVS.adm RCSLOG cvslog.* tags TAGS .make.state .nse_depinfo *~ #* .#* ,* *.old *.bak *.BAK *.orig *.rej .del-* *.a *.o *.obj *.so *.Z *.elc *.ln core

    then files listed in a $HOME/.cvsignore are added to the list and any files
    listed in the CVSIGNORE environment variable (space delimited).

    Finally, any file is ignored if it is in the same directory as a .cvsignore file
    and matches one of the patterns listed therein.
    See the cvs(1) manual for more information.

--csum-length=LENGTH
    By default the primary checksum used in rsync is a very strong 16 byte MD4 checksum.
    In most cases you will find that a truncated version of this checksum is quite
    efficient, and this will decrease the size of the checksum data sent over the link,
    making things faster.

    You can choose the number of bytes in the truncated checksum
    using the --csum-length option. Any value less than or equal to 16 is valid.

    Note that if you use this option then you run the risk of ending up with an
    incorrect target file. The risk with a value of 16 is microscopic and can be
    safely ignored (the universe will probably end before it fails)
    but with smaller values the risk is higher.

    Current versions of rsync actually use an adaptive algorithm for the checksum
    length by default, using a 16 byte file checksum to determine if a 2nd pass is
    required with a longer block checksum.
    Only use this option if you have read the source code and know what you are doing.

-T, --temp-dir=DIR
    This option instructs rsync to use DIR as a scratch directory when creating
    temporary copies of the files transferred on the receiving side.
    The default behavior is to create the temporary files in the receiving directory.

--compare-dest=DIR
    This option instructs rsync to use DIR on the destination machine as an
    additional directory to compare destination files against when doing transfers.
    This is useful for doing transfers to a new destination while leaving existing
    files intact, and then doing a flash-cutover when all files have been successfully
    transferred (for example by moving directories around and removing the old
    directory, although this requires also doing the transfer with -I to avoid
    skipping files that haven't changed).
    This option increases the usefulness of --partial because partially transferred
    files will remain in the new temporary destination until they have a chance to be
    completed. If DIR is a relative path, it is relative to the destination directory.

-z, --compress
    With this option, rsync compresses any data from the files that it sends to the
    destination machine. This option is useful on slow links. The compression method
    used is the same method that gzip uses.

    Note this this option typically achieves better compression ratios that can be
    achieved by using a compressing remote shell, or a compressing transport,
    as it takes advantage of the implicit information sent for matching data blocks.

--numeric-ids
    With this option rsync will transfer numeric group and user ids rather than
    using user and group names and mapping them at both ends.

    By default rsync will use the user name and group name to determine what
    ownership to give files. The special uid 0 and the special group 0 are never
    mapped via user/group names even if the --numeric-ids option is not specified.

    If the source system is a daemon using chroot, or if a user or group name
    does not exist on the destination system, then the numeric id from the
    source system is used instead.

--timeout=TIMEOUT
    This option allows you to set a maximum IO timeout in seconds.
    If no data is transferred for the specified time then rsync will exit.
    The default is 0, which means no timeout.

--daemon
    This tells rsync that it is to run as a daemon.
    The daemon may be accessed using the host::module or rsync://host/module/ syntax.

    If standard input is a socket then rsync will assume that it is being
    run via inetd, otherwise it will detach from the current terminal and 
    become a background daemon. The daemon will read the config file (/etc/rsyncd.conf)
    on each connect made by a client and respond to requests accordingly.
     See the rsyncd.conf(5) man page for more details.

--no-detach
    When running as a daemon, this option instructs rsync to not detach itself and
    become a background process.
    This option is required when running as a service on Cygwin, and may also be useful
    when rsync is supervised by a program such as daemontools or AIX's System Resource
    Controller. --no-detach is also recommended when rsync is run under a debugger.
    This option has no effect if rsync is run from inetd or sshd.

--address
    By default rsync will bind to the wildcard address when run as a daemon with
    the --daemon option or when connecting to a rsync server.
    The --address option allows you to specify a specific IP address (or hostname) to
    bind to. This makes virtual hosting possible in conjunction with the --config option.

--config=FILE
    This specifies an alternate config file than the default /etc/rsyncd.conf.
    This is only relevant when --daemon is specified.

--port=PORT
    This specifies an alternate TCP port number to use rather than the default port 873.

--blocking-io
    This tells rsync to use blocking IO when launching a remote shell transport.
    If -e or --rsh are not specified or are set to the default "rsh",
    this defaults to blocking IO, otherwise it defaults to non-blocking IO.
    You may find the --blocking-io option is needed for some remote shells that can't
    handle non-blocking IO. Ssh prefers blocking IO.

--log-format=FORMAT
    This allows you to specify exactly what the rsync client logs to stdout on
    a per-file basis. The log format is specified using the same format conventions
    as the log format option in rsyncd.conf.

--stats
    This tells rsync to print a verbose set of statistics on the file transfer,
    allowing you to tell how effective the rsync algorithm is for your data.

--partial
    By default, rsync will delete any partially transferred file if the transfer
    is interrupted. In some circumstances it is more desirable to keep partially
    transferred files. Using the --partial option tells rsync to keep the partial
    file which should make a subsequent transfer of the rest of the file much faster.

--progress
    This option tells rsync to print information showing the progress of the transfer.
    This gives a bored user something to watch.

    This option is normally combined with -v. Using this option without the -v option
    will produce weird results on your display.

-P
    The -P option is equivalent to --partial --progress.
    I found myself typing that combination quite often so I created an option to make
    it easier.

--password-file
    This option allows you to provide a password in a file for accessing a
    remote rsync server. Note that this option is only useful when accessing a
    rsync server using the built in transport, not when using a remote shell as
    the transport. The file must not be world readable.
    It should contain just the password as a single line.

--bwlimit=KBPS
    This option allows you to specify a maximum transfer rate in kilobytes per second.
    This option is most effective when using rsync with large files
    (several megabytes and up). Due to the nature of rsync transfers,
    blocks of data are sent, then if rsync determines the transfer was too fast,
    it will wait before sending the next data block.
    The result is an average transfer rate equalling the specified limit.
    A value of zero specifies no limit.

--read-batch
    Apply a previously generated change batch.

--write-batch
    Generate a set of files that can be transferred as a batch update.


<b>EXIT VALUES</b>

RERR_SYNTAX 1
    Syntax or usage error

RERR_PROTOCOL 2
    Protocol incompatibility

RERR_FILESELECT 3
    Errors selecting input/output files, dirs

RERR_UNSUPPORTED 4
    Requested action not supported: an attempt was made to manipulate 
    64-bit files on a platform that cannot support them; or an option was
    speciifed that is supported by the client and not by the server.

RERR_SOCKETIO 10
    Error in socket IO

RERR_FILEIO 11
    Error in file IO

RERR_STREAMIO 12
    Error in rsync protocol data stream

RERR_MESSAGEIO 13
    Errors with program diagnostics

RERR_IPC 14
    Error in IPC code

RERR_SIGNAL 20
    Received SIGUSR1 or SIGINT

RERR_WAITCHILD 21
    Some error returned by waitpid()

RERR_MALLOC 22
    Error allocating core memory buffers

RERR_TIMEOUT 30
Timeout in data send/receive
</pre>
<p> <b>Download latest version</b> (plus docs)<br>
<a href="http://rsync.samba.org/">rsync.samba.org</a> </p>
<p><b>Related:</b></p>
<p>
<a href="cp.html">cp</a> - Copy files<br>
<a href="install.html">install</a> - Copy files and set attributes <br>
<a href="rcp.html">rcp</a> - Remote file copy<br>
rsyncd.conf(5)</p><!-- #BeginLibraryItem "/Library/foot_osx.lbi" --><p>
<!-- OSX300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="1823340303"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="rsync_options.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->
