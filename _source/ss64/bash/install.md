---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_bash.lbi" --><!-- #EndLibraryItem --><h1>install</h1> 
<p>Copy files and set attributes, copies files while setting their 
permission modes and, if possible, their owner and group.</p>
<pre>Syntax
      install [<i>options</i>]... <i>SOURCE DEST</i>

      install [<i>options</i>]... <i>SOURCE</i>... <i>DIRECTORY</i>

      install -d [<i>options</i>]... <i>DIRECTORY</i>...
</pre>
<p> The 3 variants above install either a single SOURCE file to DEST target
or copy multiple SOURCE files to the destination. In the last variant,
each DIRECTORY (and any missing parent directories) is created.<br>
<br>
`install' is similar to `cp', but allows you to control the
attributes of destination files.  It is typically used in Makefiles to
copy programs into their destination directories.  It refuses to copy
files onto themselves.<br>
</p>
<pre>Options

-b
--backup
     Make a backup of each file that would otherwise be overwritten or
     removed.  *Note Backup options::.

-C
     Install file, unless target already exists and is the same file,
     in which case the modification time is not changed.

-c
     Ignored; for compatibility with old Unix versions of `install'.

-d
--directory
     Create each given directory and any missing parent directories,
     setting the owner, group and mode as given on the command line or
     to the defaults.  It also gives any parent directories it creates
     those attributes.  (This is different from the SunOS 4.x
     `install', which gives directories that it creates the default
     attributes.)

-g <i>GROUP</i>
--group=<i>GROUP</i>
     Set the group ownership of installed files or directories to
     GROUP. The default is the process's current group.  GROUP can be
     either a group name or a numeric group id.

-m <i>MODE</i>
--mode=<i>MODE</i>
     Set the permissions for the installed file or directory to MODE,
     which can be either an octal number, or a symbolic mode as in
     `chmod', with 0 as the point of departure (*note File
     permissions::).  The default mode is 0755--read, write, and execute
     for the owner, and read and execute for group and other.

-o <i>OWNER</i>
--owner=<i>OWNER</i>
     If `install' has appropriate privileges (is run as root), set the
     ownership of installed files or directories to OWNER. The default
     is `root'.  OWNER can be either a user name or a numeric user ID.

-p
--preserve-timestamps
     Set the time of last access and the time of last modification of
     each installed file to match those of each corresponding original
     file.  When a file is installed without this option, its last
     access and last modification times are both set to the time of
     installation.  This option is useful if you want to use the last
     modification times of installed files to keep track of when they
     were last built as opposed to when they were last installed.

-s
--strip
     Strip the symbol tables from installed binary executables.

-S <i>SUFFIX</i>
--suffix=<i>SUFFIX</i>
     Append SUFFIX to each backup file made with `-b'.

-v
--verbose
     Print the name of each file before copying it.

-V <i>METHOD</i>
--version-control=<i>METHOD</i>
     Change the type of backups made with `-b'.  The METHOD argument
     can be `numbered' (or `t'), `existing' (or `nil'), or `never' (or
     `simple').</pre>
<p><i class="quote">"SysAdmins can't be sued for malpractice but surgeons don't have to deal with patients who install new versions of their own innards"</i><br>
<br>
<b>Related:</b><br>
<br>
<a href="cp.html">cp</a> - Copy one or more files to another location<br>
Equivalent Windows command: <a href="../nt/robocopy.html">ROBOCOPY</a> - Robust File and Folder Copy </p><!-- #BeginLibraryItem "/Library/foot_bash.lbi" --><p>
<!-- bash300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="4615356305"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="install.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

