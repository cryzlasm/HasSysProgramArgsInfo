---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_osx.lbi" --><!-- #EndLibraryItem --><h1>tar (gnutar)</h1> 
<p>Create, add files to, or extract files from an archive file in gnutar format, called a tarfile. Tape ARchiver; manipulate "tar" archive files. </p>
<pre>Syntax
       tar [[-]<i>function</i>] [<i>options</i>] <i>filenames</i>...

       tar [[-]<i>function</i>] [<i>options</i>] -C <i>directory-name</i>...

   Command-line arguments that specify files to add to, extract from,
   or list from an archive can be given as shell pattern matching strings.

FUNCTIONS
       Exactly one of the following functions must be specified.
       (append, create, difference, replace, table of contents, update, and extract)

     -A
     --catenate
     --concatenate  Append the contents of named file, which must itself be a
                gnutar archive, to the end of the archive (erasing the old
                end-of-archive block).  This has the effect of adding the
                files contained in the named file to the first archive,
                rather than adding the second archive as an element of the
                first.  <i>Note</i>: This option requires a rewritable <i>tarfile</i>,
                and therefore does not work on quarter-inch cartridge
                tapes.  (see notes below)
     -c
     --create   Create a new archive (or truncates an old one) and writes
                the named files to it.
     -d
     --diff
     --compare  Find differences between files in the archive and corresponding
                files in the file system.

     --delete   Delete named files from the archive.  (Does not work on
                quarter-inch tapes).
     -r
     --append   Append files to the end of an archive.  (Does not work on
                quarter-inch tapes).
     -t
     --list     List the contents of an archive; if <i>filename</i> arguments are
                given, only those files are listed, otherwise the entire
                table of contents is listed.
     -u
     --update   Append the named files if the on-disk version has a modification
                date more recent than their copy in the archive
                (if any).  Does not work on quarter-inch tapes.
     -x
     --extract
     --get      Extract files from an archive.  The owner, modification
                time, and file permissions are restored, if possible.  If
                no <i>file</i> arguments are given, extract all the files in the
                archive.  If a <i>filename</i> argument matches the name of a
                directory on the tape, that directory and its contents are
                extracted (as well as all directories under that direc-
                tory).  If the archive contains multiple entries corre-
                sponding to the same file (see the <b>--append</b> command
                above), the last one extracted will overwrite all earlier
                versions.</pre>
<blockquote>
<p>You can specify an argument for the `--file=ARCHIVE-NAME' (`-f ARCHIVE-NAME') option whenever you use `tar'; this option determines the name of the archive file that `tar' will work on.<br>
<br>If you don't specify this argument, then `tar' will use a default, usually some physical tape drive attached to your machine. If there is no tape drive attached, or the default is not meaningful, then `tar' will print an error message. The error message might look roughly like one of the following:</p>
</blockquote>
<pre>     tar: can't open /dev/rmt8 : No such device or address
     tar: can't open /dev/rsmt0 : I/O error</pre>
<blockquote> 
  <p><span class="body"> To avoid confusion, we recommend that you always specify 
    an archive file name by using `--file=ARCHIVE-NAME' (`-f ARCHIVE-NAME') when 
    writing your `tar' commands. </span> </p>
</blockquote>
<pre>     --verbose' (`-v') shows details about the results of running `tar'.</pre>
<blockquote> 
<p>This can be especially useful when the results might not be obvious. For example, if you want to see the progress of `tar' as it writes files into the archive, you can use the `--verbose' option. In the 
beginning, you may find it useful to use `--verbose' at all times; when you are more accustomed to `tar', you will likely want to use it at certain times but not at others. <br>
<br>
Sometimes, a single instance of `--verbose' on the command line will show a full, `ls' style listing of an archive or files, giving sizes, owners, and similar information. Other times, `--verbose' will only show files or members 
that the particular operation is operating on at the time. In the latter case, you can use `--verbose' twice in a command to get a listing such as that in the former case.</p>
</blockquote>
<pre>Options</pre>
<blockquote>
<p>The other options to <b>gnutar</b> may be combined arbitrarily; single-letter options may be bundled in with the command word.  Verbose options which take arguments will be followed by the argument; single-letter options will consume successive command line arguments (see the <i>EXAMPLES</i> below).<br>
<b>gnutar</b> will properly handle option arguments passed either with or without a leading `=` (i.e. either --option=arg or --option arg).</p>
</blockquote>
<pre>     <b>--help</b>               Prints a message listing and briefly describing
                          all the command options to <b>gnutar</b>.
     <b>--atime-preserve</b>     Restore the access times on files which are writ-
                          ten to tape (note that this will change the
                          inode-change time!).
     <b>-b</b>
     <b>--block-size</b> <i>number</i>
     <b>--blocking-factor</b> <i>number</i>
     <b>--record-size</b> <i>size</i>   Sets the block size for reading or writing to
                          <i>number</i> * 512-byte blocks. Or sets block size for
                          reading or writing to <i>size</i> bytes which must be a
                          multiple of 512.
     <b>-B</b>
     <b>--read-full-records</b>  Re-assemble short reads into full records (for
                          reading 4.2BSD pipes).

     <b>--backup</b> <i>control</i>     Backup files before removal.  Optionally, the
                          user can specify a <i>control</i> argument to control
                          how <b>gnutar</b> performs the backups.  Supported values
                          are listed bellow in the <i>ENVIRONMENT</i> section.
     <b>--suffix</b> <i>suffix</i>      Backup files before removal.  Override the normal
                          backup suffix (default: '~'), using <i>suffix</i> instead.

     <b>-C</b> <i>directory</i>
     <b>--directory</b> <i>directory</i>   Change to <i>directory</i> before processing the remaining
                             arguments. (see notes below)

     <b>--checkpoint</b>         Print number of buffer reads/writes while reading/writing the archive.

     <b>-f</b> [<i>hostname</i>:]<i>file</i>
     <b>--file</b> [<i>hostname</i>:]<i>file</i>  Read or write the specified <i>file</i> (default is
                              <i>/dev/sa0</i>).   If a <i>hostname</i> is specified, <b>gnutar</b>

           will use <b>rmt(8)</b> to read or write the specified
           <i>file</i> on a remote machine.  `<i>-</i>' may be used as a
           filename, for reading or writing to/from
           stdin/stdout.

     <b>--force-local</b>        Archive file is local even if it has a colon.

     <b>-F</b> <i>file</i>
     <b>--info-script</b> <i>file</i>
     <b>--new-volume-script</b> <i>file</i>
                          Run a script at the end of each archive volume
                          (implies <b>-M</b>).
     <b>-G</b>
     <b>--incremental</b>        Create/list/extract old GNU-format incremental backup.
     <b>-g</b> <i>file</i>
     <b>--listed-incremental</b> <i>file</i>
                          Create/list/extract new GNU-format incremental backup.

     <b>--group</b> <i>name</i>         Force <i>group</i> as group for added files.
     <b>-h</b>
     <b>--dereference</b>        Don't write symlinks as symlinks; write the data
                          of the files they name.
     <b>-i</b>
     <b>--ignore-zeros</b>       Ignore blocks of zeroes in archive (usually means
                          End-Of-File).
     <b>--ignore-failed-read</b>  Don't exit with non-zero status on unreadable
           files.
     <b>-j</b>
     <b>--bzip2</b>              Filter the archive through <b>bzip2(1)</b>.
     <b>-k</b>
     <b>--keep-old-files</b>     Keep files which already exist on disk; don't
                          overwrite them from the archive.
     <b>-K</b> <i>file</i>
     <b>--starting-file</b> <i>file</i> Begin at <i>file</i> in the archive.
     <b>-l</b>
     <b>--one-file-system</b>    Stay in local file system when creating an
                          archive (do not cross mount points).
     <b>-L</b> <i>number</i>
     <b>--tape-length</b> <i>number</i> Change tapes after writing <i>number</i> * 1024 bytes.
     <b>--mode</b> <i>changes</i>       Force <i>changes</i> to file mode of added files.
     <b>-m</b>
     <b>--modification-time</b>  Don't extract file modified time.
     <b>-M</b>
     <b>--multi-volume</b>      Create/list/extract multi-volume archive.
     <b>--no-recursion</b>      Don't recurse into subdirectories when creating.
     <b>--volno-file</b> <i>file</i>   File name with volume number to start with.
     <b>-N</b> <i>date</i>
     <b>--after-date</b> <i>date</i>
     <b>--newer</b> <i>date</i>       Only store files with creation time newer than
           <i>date</i>.
     <b>--newer-mtime</b> <i>date</i>   Only store files with modification time newer than <i>date</i>.

     <b>--no-same-owner</b>   Do not preserve ownership when extracting files.
                       Extract them all as owned by the current user.
     <b>--no-same-permissions</b>   Do not extract permission information.  Extract
                       them using the default permissions for the cur-
                       rent user.
     <b>--numeric-owner</b>   Use numbers instead of names for owner/group names.
     <b>-o</b>
     <b>--old-archive</b>
     <b>--portability</b>     Write a V7 format archive, rather than POSIX format.

     <b>-O</b>
     <b>--to-stdout</b>       Extract files to standard output.
     <b>--owner</b> <i>name</i>      Force <i>name</i> as owner for added files.
     <b>--overwrite</b>       Overwrite existing files when extracting.
     <b>--overwrite-dir</b>   Overwrite directory metadata when extracting.

     <b>-p</b>
     <b>--same-permissions</b>
     <b>--preserve-permissions</b>  Extract all permission information.
     <b>--preserve</b>        Has the effect of <b>-p</b> <b>-s</b>.

     <b>-P</b>
     <b>--absolute-names</b>  Don't strip leading `/' from file names.
     <b>--posix</b>           Instructs <b>gnutar</b> to create a POSIX compliant
                      `tar' archive.

     <b>-R</b>
     <b>--block-number</b>      Show record number within archive with each message.
     <b>--remove-files</b>      Remove files after adding them to the archive.
     <b>--rsh-command</b> <i>command</i>   Use <i>command</i> instead of rsh for remote archives/files.

     <b>-s</b>
     <b>--same-order</b>
     <b>--preserve-order</b>  List of names to extract is sorted to match archive.
     <b>--same-owner</b>      Try to preserve ownership when extracting files.
     <b>--show-omitted-dirs</b>   Show directories which were omitted while processing the archive.

     <b>-S</b>
     <b>--sparse</b>         Handle `sparse' files efficiently.
     <b>-T</b> <i>file</i>
     <b>--files-from</b> <i>file</i>   Get names of files to extract or create from
                         <i>file</i>, one per line.
     <b>--null</b>           Modifies behavior of <b>-T</b> to expect null-terminated
                      names; disables <b>-C</b>.
     <b>--totals</b>         Prints total bytes written with <b>--create</b>.
     <b>-U</b>
     <b>--unlink-first</b>      Unlink files before creating them.
     <b>--recursive-unlink</b>  Empty hierarchies prior to extracting directory.
     <b>-v</b>
     <b>--verbose</b>        Lists files written to archive with <b>--create</b> or
                      extracted with <b>--extract</b>; lists file protection
                      information along with file names with <b>--list</b>.
     <b>-V</b> <i>volume-name</i>
     <b>--label</b> <i>volume-name</i>     Create archive with the given <i>volume-name</i>.  When
                      used with list or extract, <i>volume-name</i> is used as
                      a globing pattern.
     <b>--version</b>        Print <b>gnutar</b> program version number.
     <b>-w</b>
     <b>--interactive</b>
     <b>--confirmation</b>   Ask for confirmation for every action.
     <b>-W</b>
     <b>--verify</b>       Attempt to verify the archive after writing it.
     <b>--exclude</b> <i>pattern</i>      Exclude files matching the <i>pattern</i> (don't extract
        them, don't add them, don't list them).
     <b>-X</b> <i>file</i>
     <b>--exclude-from</b> <i>file</i>     Exclude files listed in <i>file</i>.
     <b>--anchored</b>        Exclude patterns match file name start (default).
     <b>--no-anchored</b>     Exclude patterns match after any /.
     <b>--ignore-case</b>     Exclude patterns ignore case.
     <b>--no-ignore-case</b>  Exclude patterns are case sensitive (default).
     <b>--wildcards</b>       Exclude patterns use wildcards (default).
     <b>--no-wildcards</b>    Exclude patterns are plain strings.
     <b>--wildcards-match-slash</b>
                       Exclude pattern wildcards match '/' (default).
     <b>--no-wildcards-match-slash</b>
        Exclude pattern wildcards do not match '/'.
     <b>-Z</b>
     <b>--compress</b>
     <b>--uncompress</b>      Filter the archive through <b>compress(1)</b>.
     <b>-z</b>
     <b>--gzip</b>
     <b>--ungzip</b>
     <b>--gunzip</b>       Filter the archive through <b>gzip(1)</b>.
     <b>--use-compress-program</b> <i>program</i>
                    Filter the archive through <i>program</i> (which must
                    accept <b>-d</b> to mean `decompress').
     <b>-</b>[<b>0</b>-<b>7</b>][<b>lmh</b>]    Specify tape drive and density.</pre>
<p><b>Examples</b></p>
<p>To tar and zip a file</p>
<pre>  tar -<b>c</b>zvf MyArchive.tgz Source_file 
or in full
  tar --<b>c</b>reate --g<b>z</b>ip --<b>v</b>erbose --<b>f</b>ile=MyArchive.tgz Source_file
</pre>
<p>To tar a folder (with all sub-folders and files)</p>
<pre>  tar czf /volumes/myexternaldrive/backup01.tgz myfolder</pre>
<p>The reverse process to extract the file </p>
<pre>  tar <b>-x</b>zvf MyArchive.tgz Destination_file 
or
  tar --e<b>x</b>tract --gun<b>z</b>ip --<b>v</b>erbose --<b>f</b>ile=MyArchive.tgz Destination_file

  tar xzvf /volumes/myexternaldrive/backup01.tgz myfolder/subfolder/thefiletorestore</pre>
<p> Extract a file, autodetecting the format, in this case an xz archive:</p>
<pre>  tar -xf some.tar.xz
</pre>
<p>To extract all the C sources and headers from an archive named <i>backup.tar</i>:<br>
</p>
<pre>  tar xf backup.tar '*.[ch]'
</pre>
<p> Note that the pattern must be quoted to prevent the shell from attempting
to expand it according the files in the current working directory (the
shell does not have access to the list of files in the archive, of
course).<br>
<br>
To move file hierarchies, use a command line like this:<br>
</p>
<pre>  tar -cf - -C srcdir . | tar xpf - -C destdir
</pre>
<p> To create a compressed archive on diskette, using <b>gzip(1)</b>, use a command-line like:<br>
</p>
<pre>  tar --block-compress -z -c -v -f /dev/fd1a -b 36 tar/
</pre>
<blockquote>
<p><br>
Note that you cannot mix bundled flags and <b>--style</b> flags; you can use
single-letter flags in the manner above, rather than having to type
<span class="code">tar --block-compress --gzip --verbose --file /dev/fd1a --block-size
20 tar/</span><br>
<br>
The above-created diskette can be listed with<br>
<span class="code">tar tvfbz /dev/fd1a 36</span><br>
</p>
</blockquote>
<p> To join two <b>gnutar</b> archives into a single archive, use</p>
<blockquote>
<p><span class="code"> tar Af archive1.tar archive2.tar</span></p>
</blockquote>
<p> which will add the files contained in <i>archive2.tar</i> onto the end of<br>
<i>archive1.tar</i> (note that this can't be done by simply typing:</p>
<blockquote>
<p class="code"> cat archive2.tar &gt;&gt; archive1.tar</p>
</blockquote>
<p> because of the end-of-file block at the end of a <b>gnutar</b> archive).<br>
<br>
To archive all files from the directory <i>srcdir</i>, which were modified after<br>
Feb. 9th 1997, 13:00 h, use<br>
</p>
<pre>   tar -c -f backup.tar --newer-mtime 'Feb 9 13:15 1997' srcdir/

Other possible time specifications are `02/09/97 13:15', `1997-02-09
13:15', `13:15 9 Feb 1997', `9 Feb 1997 13:15', `Feb. 9, 1997 1:15pm',
`09-Feb', `3 weeks ago' or `May first Sunday'.  To specify the correct
time zone use either e.g. `13:15 CEST' or `13:15+200'.</pre>
<h2>Notes</h2>
<blockquote>
<p>Always <b>tar -t </b>before<b> tar -x </b>to check if the archive contents have been placed inside one subdirectory or will just spill all over the current directory.</p>
<p>The -C feature does not work like historical gnutar programs, and is probably untrustworthy.</p>
<p> The -A command should work to join an arbitrary number of gnutar archives together, but it does not; attempting to do so leaves the end-of-archive blocks in place for the second and subsequent archives. </p>
<p>The gnutar file format is a semi fixed width field format, and the field for device numbers were designed for 16 bit (8 major, 8 minor) and can not absorb our 32 bit (8 major, 16+8 minor) numbers.</p>
</blockquote>
<h2>Environment Variables</h2>
<pre>     POSIXLY_CORRECT  Normally, <b>gnutar</b> will process flag arguments that appear
        in the file list.  If set in the environment, this
        causes <b>gnutar</b> to consider the first non-flag argument to
        terminate flag processing, as per the POSIX specification.

     SHELL       In interactive mode, a permissible response to the
        prompt is to request to spawn a subshell, which will be
        <i>/bin/sh</i> unless the SHELL variable is set.

     SIMPLE_BACKUP_SUFFIX
        Sets the backup suffix used by <b>gnutar</b>.  Default is '~'.

     TAPE       Changes <b>gnutar</b>'s default tape drive /dev/sa0 (which is still
        overridden by the <b>-f</b> flag).

     TAR_OPTIONS      The environment variable TAR_OPTIONS can hold a set of
        default options for <b>gnutar</b>.  These options are inter-
        preted first and can be overwritten by explicit command
        line parameters.

     TAR_RSH       The TAR_RSH environment variable allows you to override
        the default shell used as the transport for <b>gnutar</b>.

     VERSION_CONTROL  Sets the backup method used by <b>gnutar</b>.  Possible values:

        t, numbered      Make numbered backups

        nil, existing    Numbered if numbered backups exist,
           simple otherwise

        never, simple    Always make simple backups
    
        Default behaviour is 'existing'.</pre>
<p class="quote"><i>"To disarm the bomb simply enter a valid tar command on your first try. No Googling" ~ <a href="http://xkcd.com/1168/">XKCD</a></i></p>
<p><b>Related:</b></p>
<p>
<a href="https://developer.apple.com/legacy/library/documentation/Darwin/Reference/ManPages/man1/tar.1.html">tar man page</a> - Apple.com<br>
bzip2(1)<br>
compress - compress and expand data<br>
<a href="gzip.html">gzip</a> - Compress or decompress files<br>
pax(1)<br>
rmt - remote magtape protocol module<br>
info tar</p><!-- #BeginLibraryItem "/Library/foot_osx.lbi" --><p><script async="" src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
<!-- OSX300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="1823340303"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->
