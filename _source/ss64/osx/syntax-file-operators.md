---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #EndLibraryItem --><h1>bash file operators</h1>
<p>The following operators return TRUE if.. </p>
<pre> -a    file exists  This is identical in effect to -e. It has been "deprecated," [1] and its use is discouraged.
 -b    file is a block device
 -c    file is a character device  [ -b "/dev/sda2" ]
 -d    file is a directory
 -e    file exists
<b> -f    file is a regular file</b> (not a directory or device file)
 -G    group-id of file same as yours
 -g    set-group-id (sgid) flag set on file or directory
          If a directory has the sgid flag set, then a file created within that directory belongs to the group
          that owns the directory, not necessarily to the group of the user who created the file.
 -h    file is a symbolic link
 -k    sticky bit<sup><b>1</b></sup> set
 -L    file is a symbolic link
 -N    file modified since it was last read
 -O    you are owner of file
 -p    file is a pipe  [ -p /dev/fd/0 ]
 -r    file has read permission (for the user running the test)
 -S    file is a socket
 -s    file is not zero size
 -t    file (descriptor) is associated with a terminal device.
 -u    set-user-id<b><sup>2</sup></b> (suid) flag set on file
 -w    file has write permission (for the user running the test)
 -x    file has execute permission (for the user running the test)

 -nt   file f1 is newer than f2   f1 -nt f2
 -ot   file f1 is older than f2   f1 -ot f2
 -ef   files f1 and f2 are hard links to the same file   f1 -ef f2
    
 !     "not" -- reverses the sense of the tests above (returns true if condition absent).</pre>
<p> <sup>1</sup> Commonly known as the sticky bit, the save-text-mode flag is a special type of file permission.<br>
If a file has this flag set, that file will be kept in cache memory, for quicker access.</p>
<p> If set on a directory, it restricts write permission.
 Setting the sticky bit adds a<span class="code"> t</span> to the permissions on the file or directory listing.
 This restricts altering or deleting specific files in that directory to the owner of those files.</p>
<p class="code">drwxrwxrwt    7 root         1024 May 19 21:26 tmp/</p>
<p>If a user does not own a directory that has the sticky bit set, but has write permission in that directory,
  she can only delete those files that she owns in it.
This keeps users from inadvertently overwriting or deleting each other's files in a publicly accessible directory, such as /tmp. (The owner of the directory or root can, of course, delete or rename files there.) </p>
<p><sup>2</sup> A binary owned by root with set-user-id flag set runs with root privileges, even when an ordinary user invokes it.
  This is useful for executables (such as pppd and cdrecord) that need to access system hardware. 
Lacking the suid flag, these binaries could not be invoked by a non-root user.</p>
<p>A file with the suid flag set shows an s in its permissions. </p>
<p class="code">-rwsr-xr-t    1 root       178236 Oct  2  2000 /usr/sbin/pppd</p>
<p><b>Example</b></p>
<p> Check if a file exists:</p>
<p><span class="code">if [ -f ~/some-file ]; then<br> 
&nbsp;Echo the file exists <br>
fi</span></p>
<p><b>Related:</b></p>
<p><a href="syntax.html">OS X Syntax</a>
<!-- #BeginLibraryItem "/Library/foot_osx.lbi" --></p><p>
<!-- OSX300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="1823340303"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="syntax-file-operators.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->
