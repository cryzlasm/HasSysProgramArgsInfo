---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_bash.lbi" --><!-- #EndLibraryItem --><h1>file</h1> 
<p>Determine file type. </p>
<pre>Syntax
      file [-bchikLNnprsvz0] [--apple] [--mime-encoding] [--mime-type] [-e <i>testname</i>]
         [-F <i>separator</i>] [-f <i>namefile</i>] [-m <i>magicfiles</i>] <i>file</i> ... 

      file -C [-m <i>magicfiles</i>]

      file [--help]

Key

   -b, --brief     Do not prepend filenames to output lines (brief mode).
   -C, --compile   Write a magic.mgc output file that contains a pre-parsed version of the magic file or directory.
   -c, --checking-printout
                   Cause a checking printout of the parsed form of the magic file.
                   This is usually used in conjunction with the -m flag to debug a
                   new magic file before installing it.
   -e, --exclude <i>testname</i>
                   Exclude the test named in <i>testname</i> from the list of tests made to
                   determine the file type.
                   Valid test names are:
                      apptype     EMX application type (only on EMX).
                      text        Various types of text files (this test will try to
                                  guess the text encoding, irrespective of the setting
                                  of the 'encoding' option).
                      encoding    Different text encodings for soft magic tests.
                      tokens      Looks for known tokens inside text files.
                      cdf         Prints details of Compound Document Files.
                      compress    Checks for, and looks inside, compressed files.
                      elf         Prints ELF file details.
                      soft        Consults magic files.
                      tar         Examines tar files.
   -F, --separator <i>separator</i>
                   Use the specified string as the separator between the filename and
                   the file result returned. Defaults to ':'.
   -f, --files-from <i>namefile
</i>                   Read the names of the files to be examined from namefile (one per line)
                   before the argument list. Either namefile or at least one filename argument
                   must be present; to test the standard input, use '-' as a filename argument.
   -h, --no-dereference
                   option causes symlinks not to be followed (on systems that support symbolic links).
                   This is the default if the environment variable POSIXLY_CORRECT is not defined.
   -i, --mime      Causes the file command to output mime type strings rather than the more
                   traditional human readable ones. Thus it might say 'text/plain; charset=us-ascii'
                   rather than 'ASCII text'. In order for this option to work, file
                   changes the way it handles files recognized by the command itself
                   (such as many of the text file types, directories etc), and makes
                   use of an alternative 'magic' file. (See the FILES section, below).
   --mime-type, --mime-encoding
                   Like -i, but print only the specified element(s).
   -k, --keep-going
                   Don't stop at the first match, keep going. Subsequent matches will
                   have the string '\012- ' prepended.  (If you want a newline, see -r)
   -L, --dereference
                   option causes symlinks to be followed, as the like-named option
                   in <a href="ls.html">ls</a>(1) (on systems that support symbolic links).
                   This is the default if the environment variable POSIXLY_CORRECT is defined.
   -m, --magic-file magicfiles
                   Specify an alternate list of files and directories containing magic.
                   This can be a single item, or a colon-separated list.
                   If a compiled magic file is found alongside a file or directory, it will be used instead.
   -N, --no-pad    Don't pad filenames so that they align in the output.
   -n, --no-buffer Force stdout to be flushed after checking each file. This is only
                   useful if checking a list of files. It is intended to be used by
                   programs that want filetype output from a pipe.
   -p, --preserve-date
                   On systems that support utime(2) or utimes(2), attempt to preserve
                   the access time of files analyzed, to pretend that file never read them.
   -r, --raw       Don't translate unprintable characters to \ooo. Normally file
                   translates unprintable characters to their octal representation.
   -s, --special-files
                   Normally, file only attempts to read and determine the type of argument
                   files which stat(2) reports are ordinary files. This prevents problems,
                   because reading special files can have peculiar consequences.
                   Specifying the -s option causes file to also read argument files which
                   are block or character special files. This is useful for determining
                   the filesystem types of the data in raw disk partitions, which are
                   block special files. This option also causes file to disregard the
                   file size as reported by stat(2) since on some systems it reports a
                   zero size for raw disk partitions.
   -v, --version   Print the version of the program and exit.
   -z, --uncompress
                   Try to look inside compressed files.
   -0, --print0    Output a null character '\0' after the end of the filename.
                   Nice to <a href="cut.html">cut</a>(1) the output. This does not affect the separator which is still printed.
   --help          Print a help message and exit.</pre>
<h2> Files<br>
</h2>
<pre> /usr/share/misc/magic.mgc  Default compiled list of magic.
 /usr/share/misc/magic      Directory containing default magic files.</pre>
<h2> Return Code<br>
</h2>
<pre> file returns 0 on success, and non-zero on error.</pre>
<p> If the file named by the <i>file</i> operand does not exist, cannot be read, or the type of the file named by the file operand cannot be determined, this is not be considered an error that affects the exit status. <br>
</p>
<p><b> Examples</b><br>
</p>
<pre>$ file file.c file /dev/{wd0a,hda}
file.c:   C program text
file:     ELF 32-bit LSB executable, Intel 80386, version 1 (SYSV),

    dynamically linked (uses shared libs), stripped 

/dev/wd0a: block special (0/0)
/dev/hda: block special (3/0)

$ file -s /dev/wd0{b,d}
/dev/wd0b: data
/dev/wd0d: x86 boot sector

$ file -s /dev/hda{,1,2,3,4,5,6,7,8,9,10}
/dev/hda: x86 boot sector
/dev/hda1: Linux/i386 ext2 filesystem
/dev/hda2: x86 boot sector
/dev/hda3: x86 boot sector, extended partition table
/dev/hda4: Linux/i386 ext2 filesystem
/dev/hda5: Linux/i386 swap file
/dev/hda6: Linux/i386 swap file
/dev/hda7: Linux/i386 swap file
/dev/hda8: Linux/i386 swap file
/dev/hda9: empty
/dev/hda10: empty

$ file -i file.c file /dev/{wd0a,hda}
file.c: text/x-c
file: application/x-executable
/dev/hda: application/x-not-regular-file
/dev/wd0a: application/x-not-regular-file </pre>
<p> file uses several algorithms that favor speed over accuracy, thus it can be misled about the contents of text files.</p>
<p class="quote"><i>#Dance to this fix and flex every muscle<br>
Space can be filled if you rise like my lumber<br>
Advance to the tune but don't do the hustle<br>
Shake, rattle, roll to my magic number# ~ De La Soul (The Magic Number) </i></p>

<p><b>Related:</b><br>
<br>
magic(5), strings(1), od(1), hexdump(1,) file(1posix)</p><!-- #BeginLibraryItem "/Library/foot_bash.lbi" --><p>
<!-- bash300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="4615356305"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="file.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

