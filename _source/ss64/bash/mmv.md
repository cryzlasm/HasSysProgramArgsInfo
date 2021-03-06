---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_bash.lbi" --><!-- #EndLibraryItem --><h1>mmv</h1> 
<p>Mass Move and rename - Move, copy, append or link Multiple <b>files</b> using wildcard patterns.</p>
<pre>Syntax
      mmv [<i>Source_Option</i>] [-h] [-d|p] [-g|t] [-v|n] [--] [<i>from</i> <i>to</i>] 

Options:
   -h   help

   -d   Delete
   -p   Protect (don't delete or overwrite)
   -g   Go
   -t   Terminate
   -v   verbose mode
   -n   no-execute mode (display messages about what would have been done)

Source_Options:

   -m   <b>Move</b> source file to target name. 
        Both must be on the same device. Will not move directories.
        If the source file is a symbolic link, moves the link without checking
        if the link's target from the new directory is different than the old.

   -x   same as -m, except cross-device moves are done by copying, then deleting source.
        When copying, sets the permission bits and file modification time of the target
        file to that of the source file.

   -r   <b>Rename</b> source file or directory to target name.
        The target name must not include a path: the file remains in the same directory
        in all cases. This option is the only way of renaming directories under mmv.

   -c   <b>Copy</b> source file to target name.
        Sets the file modification time and permission bits of the target file to that
        of the source file, regardless of whether the target file already exists.
        Chains and cycles (to be explained below) are not allowed.

   -o   <b>Overwrite</b> target name with source file.
        If target file exists, it is overwritten, keeping its original owner and
        permission bits. If it does not exist, it is created, with read-write permission
        bits set according to <a href="umask.html">umask</a>, and the execute permission bits copied from the
        source file. In either case, the file modification time is set to the current time.

   -a   <b>Append</b> contents of source file to target name.
        Target file modification time is set to the current time. If target file does not
        exist, it is created with permission bits set as under -o.
        Unlike all other options, -a allows multiple source files to have the same target name,
        e.g. "mmv -a \*.c big" will append all ".c" files to "big".
        Chains and cycles are also allowed, so "mmv -a f f" will double up "f".

   -l   <b>Link</b> target name to source file.
        Both must be on the same device, and the source must not be a directory.
        Chains and cycles are not allowed.

   -s   Same as -l, but use symbolic links instead of hard links.
        For the resulting link to aim back at the source, either the source name
        must begin with a '/', or the target must reside in either the current or the
        source directory. If none of these conditions are met, the link is refused.
        However, source and target can reside on different devices, and the source can be a directory. 

   If no <i>source_option</i> is specified, the task is given by the command name under which mmv was invoked (argv[0]):
 
   command_name   default task
 
   mmv            -x (Move except cross device)
   mcp            -c (Copy)
   mad            -a (Append)
   mln            -l (Link)

Options need not be given separately, i.e. "mmv -mk" is allowed.</pre>
<p>Mmv moves (or copies, appends, or links, as specified) each source file
matching a <b>from</b> pattern to the target name specified by the <b>to</b> pattern.</p>
<p>This multiple action is performed safely, i.e. without any unexpected
deletion of files due to collisions of target names with existing filenames or with other target names. Furthermore, before doing anything,
mmv attempts to detect any errors that would result from the entire set
of actions specified and gives the user the choice of either proceeding
by avoiding the offending parts or aborting. </p>
<p>mmv does support large
files (LFS) but it does *NOT* support sparse files (i.e. it explodes
them).</p>
<h2>Multiple Pattern Pairs</h2>
<blockquote>
<p> Multiple<span class="code"> from -- to</span> pattern pairs can be specified by omitting the pattern pair on the command line, and entering them on the standard input,
one pair per line. (If a pattern pair is given on the command line,
the standard input is not read.) Thus,<br>
<br>
<span class="code">mmv<br>
a b<br>
c d</span><br>
<br>
would rename "a" to "b" and "c" to "d". </p>
<p>If a file can be matched to
several of the given from patterns, the to pattern of the first matching pair is used. Thus,<br>
<br>
<span class="code">mmv<br>
a b<br>
a c</span><br>
<br>
would give the error message "a -&gt; c : no match" because file "a" (even
if it exists) was already matched by the first pattern pair.</p>
</blockquote>
<h2>The From Pattern</h2>
<blockquote>
<p> The <span class="code">from</span> pattern is a filename with embedded wildcards: ’<span class="code">*</span>’, ’<span class="code">?</span>’,
’<span class="code">[</span>’...’<span class="code">]</span>’, and ’<span class="code">;</span>’. The first three have their usual sh(1) meanings
of, respectively, matching any string of characters, matching any single character, and matching any one of a set of characters.<br>
<br>
Between the ’[’ and ’]’, a range from character ’a’ through character ’z’ is specified with "a-z". The set of matching characters can be
negated by inserting a ’<span class="code">^</span>’ after the ’[’. Thus, <span class="code">"[^b-e2-5_]"</span> will
match any character but ’b’ through ’e’, ’2’ through ’5’, and ’_’.<br>
<br>
Note that paths are allowed in the patterns, and wildcards can be
intermingled with slashes arbitrarily. The ’;’ wildcard is useful for
matching files at any depth in the directory tree. It matches the same
as "*/" repeated any number of times, including zero, and can only
occur either at the beginning of the pattern or following a ’/’. Thus<span class="code"> ";*.c"</span> will match all ".c" files in or below the current directory,
while "/;*.c" will match them anywhere on the file system.<br>
<br>
In addition, if the from pattern (or the to pattern) begins with "~/", 
the ’~’ is replaced with the home directory name. (Note that the "~user" feature of csh(1) is not implemented.) However, the ’~’ is not
treated as a wildcard, in the sense that it is not assigned a wildcard
index (see below).<br>
<br>
Since matching a directory under a task option other than -r or -s
would result in an error, tasks other than -r and -s match directories
only against completely explicit from patterns (i.e. not containing
wildcards). Under -r and -s, this applies only to "." and "..".<br>
<br>
Files beginning with ’.’ are only matched against from patterns that
begin with an explicit ’.’. However, if -h is specified, they are
matched normally.<br>
<br>
Warning: since the shell normally expands wildcards before passing the
command-line arguments to mmv, it is usually necessary to enclose the
command-line from and to patterns in quotes.</p>
</blockquote>
<h2> The To Pattern</h2>
<blockquote>
<p> The <span class="code">to</span> pattern is a filename with embedded wildcard indexes, where an
index consists of the character ’<span class="code">#</span>’ followed by a string of digits.</p>
<p>When a source file matches a <span class="code">from</span> pattern, a target name for the file
is constructed out of the <span class="code">to</span> pattern by replacing the wildcard indexes
by the actual characters that matched the referenced wildcards in the
source name. Thus, if the from pattern is <span class="code">"abc*.*"</span> and the to pattern
is <span class="code">"xyz#2.#1"</span>, then "abc.txt" is targeted to "xyztxt.". (The first ’<span class="code">*</span>’ 
matched <span class="code">""</span>, and the second matched "txt".) Similarly, for the pattern
pair <span class="code">";*.[clp]" -&gt; "#1#3/#2"</span>, "foo1/foo2/prog.c" is targeted to "foo1/foo2/c/prog". Note that there is no ’/’ following the "#1" in
the to pattern, since the string matched by any ’;’ is always either
empty or ends in a ’/’. In this case, it matches "foo1/foo2/".<br>
<br>
To convert the string matched by a wildcard to either lowercase or
uppercase before embedding it in the target name, insert ’<span class="code">l</span>’ or ’<span class="code">u</span>’,
respectively, between the ’#’ and the string of digits.<br>
<br>
The <span class="code">to</span> pattern, like the <span class="code">from</span> pattern, can begin with a "~/" (see
above). This does not necessitate enclosing the <span class="code">to</span> pattern in quotes
on the command line since csh(1) expands the ’~’ in the exact same manner as mmv (or, in the case of sh(1), does not expand it at all).<br>
<br>
For all task options other than -r, if the target name is a directory,
the real target name is formed by appending a ’/’ followed by the last
component of the source file name. For example, <span class="code">"mmv dir1/a dir2"</span>
will, if "dir2" is indeed a directory, actually move "dir1/a" to "dir2/a". However, if "dir2/a" already exists and is itself a directory, this is considered an error.<br>
<br>
To strip any character (e.g. ’*’, ’?’, or ’#’) of its special meaning
to mmv, as when the actual replacement name must contain the character ’<span class="code">#</span>’, precede the special character with a ´<span class="code">\</span>’ (and enclose the argument
in quotes because of the shell). This also works to terminate a wildcard index when it has to be followed by a digit in the filename, e.g. 
<span class="code">"a#1\1"</span>.</p>
</blockquote>
<h2>Chains and Cycles</h2>
<blockquote>
<p> A chain is a sequence of specified actions where the target name of one
action refers to the source file of another action. For example,<br>
<br>
<span class="code">mmv<br>
a b<br>
b c</span><br>
<br>
specifies the chain "a" -&gt; "b" -&gt; "c". A cycle is a chain where the
last target name refers back to the first source file, e.g. "mmv a a".</p>
<p> Mmv detects chains and cycles regardless of the order in which their
constituent actions are actually given. Where allowed, i.e. in moving,
renaming, and appending files, chains and cycles are handled gracefully, by performing them in the proper order. Cycles are broken by
first renaming one of the files to a temporary name (or just remembering its original size when doing appends).</p>
</blockquote>
<h2>Collisions and Deletions</h2>
<blockquote>
<p> When any two or more matching files would have to be moved, copied, or
linked to the same target filename, mmv detects the condition as an
error before performing any actions. Furthermore, mmv checks if any of
its actions will result in the destruction of existing files. </p>
<p>If the
<span class="code">-d (delete)</span> option is specified, all file deletions or overwrites are
done silently. </p>
<p>Under <span class="code">-p (protect)</span>, all deletions or overwrites (except
those specified with "(*)" on the standard input, see below) are
treated as errors. And if neither option is specified, the user is
queried about each deletion or overwrite separately. (A new stream to "/dev/tty" is used for all interactive queries, not the standard
input.)</p>
</blockquote>
<h2> Error Handling</h2>
<blockquote>
<p> Whenever any error in the user’s action specifications is detected, an
error message is given on the standard output, and mmv proceeds to
check the rest of the specified actions. Once all errors are detected,
mmv queries the user whether he wishes to continue by avoiding the
erroneous actions or to abort altogether. This and all other queries
may be avoided by specifying either the <span class="code">-g (go) or -t (terminate)</span><br>
option. The former will resolve all difficulties by avoiding the erroneous actions; the latter will abort mmv if any errors are detected.<br>
Specifying either of them defaults mmv to -p, unless -d is specified
(see above). Thus, -g and -t are most useful when running mmv in the
background or in a shell script, when interactive queries are undesirable.</p>
</blockquote>
<h2> Reports</h2>
<blockquote>
<p> Once the actions to be performed are determined, mmv performs them
silently, unless either the -v (verbose) or -n (no-execute) option is
specified. The former causes mmv to report each performed action on
the standard output as<br>
<br>
<span class="code">a -&gt; b : done.</span><br>
<br>
Here, "a" and "b" would be replaced by the source and target names,
respectively. If the action deletes the old target, a "(*)" is
inserted after the the target name. Also, the "-&gt;" symbol is modified
when a cycle has to be broken: the ’&gt;’ is changed to a ’^’ on the
action prior to which the old target is renamed to a temporary, and the’-’ is changed to a ’=’ on the action where the temporary is used.<br>
<br>
Under <span class="code">-n</span>, none of the actions are performed, but messages like the
above are printed on the standard output with the ": done." omitted.<br>
<br>
The output generated by <span class="code">-n</span> can (after editing, if desired) be fed back
to mmv on the standard input (by omitting the <span class="code">from -- to </span>pair on the
mmv command line). To facilitate this, mmv ignores lines on the standard input that look like its own error and "done" messages, as well as
all lines beginning with white space, and will accept pattern pairs<br>
with or without the intervening "-&gt;" (or "-^", "=&gt;", or "=^"). Lines
with "(*)" after the target pattern have the effect of enabling <span class="code">-d</span> for
the files matching this pattern only, so that such deletions are done
silently. When feeding mmv its own output, one must remember to specify again the task option (if any) originally used to generate it.<br>
<br>
Although mmv attempts to predict all mishaps prior to performing any
specified actions, accidents can happen. For example, mmv does not
check for adequate free space when copying. Thus, despite all efforts,
it is still possible for an action to fail after some others have
already been done. To make recovery as easy as possible, mmv reports
which actions have already been done and which are still to be performed after such a failure occurs. It then aborts, not attempting to
do anything else. Once the user has cleared up the problem, he can
feed this report back to mmv on the standard input to have it complete
the task. (The user is queried for a file name to dump this report if
the standard output has not been redirected.)</p>
</blockquote>
<h2>Exit</h2>
<blockquote>
<p>Mmv exits with status 1 if it aborts before doing anything, with status
2 if it aborts due to failure after completing some of the actions, and
with status 0 otherwise.<br>
</p>
</blockquote>
<h2>Bugs</h2>
<blockquote>
<p> If the search pattern is not quoted, the shell expands the wildcards.
Mmv then (usually) gives some error message, but can not determine that
the lack of quotes is the cause.<br>
<br>
To avoid difficulties in semantics and error checking, mmv refuses to
move or create directories.</p>
<p>If the mmv tool is not installed on your distro, get it with: <span class="code">apt-get install mmv</span></p>
</blockquote>
<p><b><a id="examples"></a>Examples</b></p>
<p>Rename the file extension of all .csv files in the current directory to .xls</p>
<p class="code">mmv "<b>*</b>.csv" "<b>#1</b>.xls"</p>
<p>Copy <span class="code">report6part4.txt</span> to <span class="code">./french/rapport6partie4.txt</span> along with all similarly named files: </p>
<p class="code">mmv -c "report<b>*</b>part<b>*</b>.txt" "./french/rapport<b>#1</b>partie<b>#2</b>.txt"</p>
<p>Append the contents of all .txt files into one file:</p>
<p class="code">mmv -a "*.txt" "all.txt" </p>
<p class="quote"><i>“All things change, nothing is extinguished. There is nothing in the whole world which is permanent. Everything flows onward; all things are brought into being with a changing nature; the ages themselves glide by in constant movement” ~ Ovid</i></p>
<p><b>Related bash commands</b>:<br>
<br>
<a href="mv.html">mv</a> - Move or rename files or directories<br>
<a href="cp.html">cp</a> - Copy one or more files to another location<br>
<a href="ln.html">ln</a> - Make links between files<br>
<a href="umask.html">umask</a> - Users file creation mask</p><!-- #BeginLibraryItem "/Library/foot_bash.lbi" --><p>
<!-- bash300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="4615356305"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="mmv.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

