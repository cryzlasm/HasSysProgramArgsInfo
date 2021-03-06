---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_bash.lbi" --><!-- #EndLibraryItem --><h1>ls</h1> 
<p>List information about files.</p>
<pre>Syntax
      ls [<i>Options</i>]... [<i>File</i>]...

Key
      Sort entries alphabetically if none of -cftuSUX nor --sort.

  -a, --all                  List all entries including those starting with a dot .

  -A, --almost-all           List all entries including those starting with a dot .
                             Except for . and .. (implied)

  -b, --escape               Print octal escapes for nongraphic characters

      --block-size=<i>SIZE</i>      Use <i>SIZE</i>-byte blocks

  -B, --ignore-backups       Do not list implied entries ending with ~

  -c                         Sort by change time; with -l: show ctime

  -C                         List entries by columns

      --color[=<i>WHEN</i>]         Control whether color is used to distinguish file
                             types. WHEN can be `never', `always', or `auto'

  -d, --directory            List directory entries instead of contents

  -D, --dired                Generate output designed for Emacs' dired mode

  -f                         Do not sort, enable -aU, disable -lst

  -F, --classify             Append indicator (one of */=@|) to entries

      --format=<i>WORD</i>          Across -x, commas -m, horizontal -x, long -l,
                             single-column -1, verbose -l, vertical -C

      --full-time            List both full date and full time

  -g                         (ignored)

  -G, --no-group             Inhibit display of group information

  -h, --human-readable       Print sizes in human readable format (e.g., 1K 234M 2G)
  -H, --si                   Likewise, but use powers of 1000 not 1024

      --indicator-style=<i>WORD</i> Append indicator with style <i>WORD</i> to entry names:
                             none (default), classify (-F), file-type (-p)

  -i, --inode                Print index number of each file

  -I, --ignore=<i>PATTERN</i>       Do not list implied entries matching shell <i>PATTERN</i>

  -k, --kilobytes            Like --block-size=1024

  -l                         Use a long listing format

  -L, --dereference          List entries pointed to by symbolic links

  -m                         Fill width with a comma separated list of entries

  -n, --numeric-uid-gid      List numeric UIDs and GIDs instead of names

  -N, --literal              Print raw entry names (don't treat e.g. control
                             characters specially)

  -o                         Use long listing format without group info

  -p, --file-type            Append indicator (one of /=@|) to entries

  -q, --hide-control-chars   Print ? instead of non graphic characters

      --show-control-chars   Show non graphic characters as-is (default)

  -Q, --quote-name           Enclose entry names in double quotes
      --quoting-style=<i>WORD</i>   Use quoting style <i>WORD</i> for entry names:
                             literal, shell, shell-always, c, escape

  -r, --reverse              Reverse order while sorting

  -R, --recursive            List subdirectories recursively

  -s, --size                 Print size of each file, in blocks

  -S                         Sort by file size

      --sort=<i>WORD</i>            time -t, version -v, status -c 
                             size -S, extension -X, none -U
                             atime -u, access -u, use -u
                             
      --time=<i>WORD</i>            Show time as <i>WORD</i> instead of modification time:
                               atime, access, use, ctime or status; 
                               also use this as a sort key if --sort=time

  -t                         sort by modification time

  -T, --tabsize=<i>COLS</i>         assume tab stops at each <i>COLS</i> instead of 8

  -u                         sort by last access time; with -l: show atime

  -U                         do not sort; list entries in directory order

  -v                         sort by version

  -w, --width=<i>COLS</i>           assume screen width instead of current value

  -x                         list entries by lines instead of by columns

  -X                         sort alphabetically by entry extension

  -1                         list one file per line

      --help                 display help and exit

      --version              output version information and exit</pre>
<p>The most common options are <span class="code">-a</span> (all files) and <span class="code">-l</span> (long 
or details)</p>
<p>Tab completion is supported and can be configured with <a href="syntax-inputrc.html">.inputrc</a> <br>
  <br>
  When output to file the files are listed one per line. <br>
  <br>
  By default, colour is not used to distinguish types of files. That is equivalent 
  to using --color=none. <br>
  Using the --color option without the optional WHEN argument is equivalent to 
  using --color=always. <br>
  With --color=auto, color codes are output only if standard output is connected 
to a terminal (tty).</p>
<p><b>Examples</b></p>
<pre># List the contents of your home directory
<b>$ ls ~</b>

# list everything in a vertical list:
<b>$ ls -al</b>

total 109
drwxr-xr-x  18 root     root         4096 Jun  9 21:12 ./
drwxr-xr-x  18 root     root         4096 Jun  9 21:12 ../
drwxr-xr-x   2 root     root         4096 Jun  9 21:14 bin/
drwxr-xr-x   3 root     root         1024 Jun  9 20:32 boot/
drwxr-xr-x   6 root     root        36864 Jul 12 10:26 dev/
drwxr-xr-x  34 root     root         4096 Jul 12 10:25 etc/
^
the first column is the file type 
d = directory
f = file

# List the directories in the current directory:
<b>$ ls -d */</b>

# list ALL subdirectories
<b>$ ls *</b></pre> 
<p>The default behaviour of <span class="code">ls</span> is to only pass color control codes to tty output <span class="code">--color=auto</span>.<br>
To pipe the output to a second command complete with color codes then set <span class="body">--color=always</span></p>
<p class="code"><b>$ ls -lAXh --color=auto</b>|less -R</p>
<p>A list of <a href="lsenv.html">environment variables that affect ls</a> (colour, column width, blocksize etc) </p>
<p class="quote"><i> "If the doors of perception were cleansed every thing would appear to man as it is, infinite" ~ William Blake</i></p>
<p><b>Related:</b><br>
<br>
<a href="dir.html">dir</a> - Briefly list directory contents<br>
<a href="dircolors.html">dircolors</a> - Colour setup for `ls' <br>
<a href="dirname.html">dirname</a> - Convert a full pathname to just a path<br>
<a href="lsblk.html">lsblk</a> - List block devices<br>
lspci - List PCI devices
<br>
<a href="quota.html">quota</a> - Display disk usage and limits <br>
<a href="rm.html">rm</a> - Remove files <br>
<a href="rmdir.html">rmdir</a> - Remove folder(s) <br>
<a href="wc.html">wc</a> - Print byte, word, and line counts <br>
Equivalent Windows command: <a href="../nt/dir.html">
DIR</a> - Display a list of files and folders</p><!-- #BeginLibraryItem "/Library/foot_bash.lbi" --><p>
<!-- bash300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="4615356305"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="ls.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

