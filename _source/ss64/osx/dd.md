---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_osx.lbi" --><!-- #EndLibraryItem --><h1>dd</h1> 
<p>Convert and copy a file. 
Copy standard input to the standard output. </p>
<p>Input data is read and written 
  in 512-byte blocks. If input reads are short, input from multiple reads are 
  aggregated to form the output block. When finished, dd displays the number of 
  complete and partial input and output blocks and truncated input records to 
the standard error output. </p>
<pre>Syntax
      dd [<i>operands</i> ...]

<i>operands</i>
     bs=<i>n</i>     Set both input and output block size to n bytes, superseding the
              ibs and obs operands.  If no conversion values other than
              noerror, notrunc or sync are specified, then each input block is
              copied to the output as a single block without any aggregation
              of short blocks.

     cbs=<i>n</i>    Set the conversion record size to n bytes.  The conversion
              record size is required by the record oriented conversion values.

     count=<i>n</i>  Copy only <i>n</i> input blocks.

     files=<i>n</i>  Copy n input files before terminating.  This operand is only
              applicable when the input device is a tape.

     ibs=<i>n</i>    Set the input block size to n bytes instead of the default 512.

     if=<i>file</i>  Read input from file instead of the standard input.

     iseek=<i>n</i>  Seek on the input file n blocks. This is synonymous with
        skip=<i>n</i>.

     obs=<i>n</i>    Set the output block size to n bytes instead of the default 512.

     of=<i>file</i>  Write output to <i>file</i> instead of the standard output.  Any regular
              output file is truncated unless the notrunc conversion value
              is specified.  If an initial portion of the output file is
              seeked past (see the oseek operand), the output file is truncated
              at that point.

     oseek=<i>n</i>  Seek on the output file n blocks.
              This is synonymous with  seek=n.

     seek=<i>n</i>   Seek n blocks from the beginning of the output before copying.
              On non-tape devices, an lseek(2) operation is used.  Otherwise,
              existing blocks are read and the data discarded.  If the user
              does not have read permission for the tape, it is positioned
              using the tape ioctl(2) function calls.  If the seek operation
              is past the end of file, space from the current end of file to
              the specified offset is filled with blocks of NUL bytes.

     skip=<i>n</i>   Skip n blocks from the beginning of the input before copying.
              On input which supports seeks, an lseek(2) operation is used.
              Otherwise, input data is read and discarded.  For pipes, the
              correct number of bytes is read.  For all other devices, the
              correct number of blocks is read without distinguishing between
              a partial or complete block being read.

     conv=<i>value</i>[,<i>value</i> ...]
              Where <i>value</i> is one of the symbols from the following list:</pre>
<blockquote>
<blockquote>
<blockquote>
<blockquote>
<p> <span class="code">ascii, oldascii</span><br>
The same as the unblock value except that characters
are translated from EBCDIC to ASCII before the records<br>
are converted.  (These values imply unblock if the
operand cbs is also specified.)  There are two conversion maps for ASCII.  The value ascii specifies the
recommended one which is compatible with AT&amp;T System V
UNIX.  The value oldascii specifies the one used in
historic AT&amp;T UNIX and pre-4.3BSD-Reno systems.<br>
<br>
<span class="code">block</span><br>
Treats the input as a sequence of newline or end-of-
file terminated variable length records independent of
input and output block boundaries.  Any trailing new-line character is discarded.  Each input record is converted to a fixed length output record where the length
is specified by the cbs operand.   Input records shorter
than the conversion record size are padded with spaces.
Input records longer than the conversion record size
are truncated.  The number of truncated input records,
if any, are reported to the standard error output at
the completion of the copy.<br>
</p>
<p><span class="code">ebcdic, ibm, oldebcdic, oldibm</span><br>
The same as the block value except that characters are
translated from ASCII to EBCDIC after the records are
converted.  (These values imply block if the operand
cbs is also specified.)  There are four conversion maps
for EBCDIC.  The value ebcdic specifies the recommended
one which is compatible with AT&amp;T System V UNIX.   The
value ibm is a slightly different mapping, which is
compatible with the AT&amp;T System V UNIX ibm value.  The
values oldebcdic and oldibm are maps used in historic
AT&amp;T UNIX and pre-4.3BSD-Reno systems.<br>
<br>
<span class="code">lcase</span> Transform uppercase characters into lowercase characters.<br>
<br>
<span class="code">noerror</span><br>
Do not stop processing on an input error.  When an
input error occurs, a diagnostic message followed by
the current input and output block counts will be written to the standard error output in the same format as
the standard completion message.   If the sync conversion is also specified, any missing input data will be
replaced with NUL bytes (or with spaces if a block oriented conversion value was specified) and processed as
a normal input buffer.  If the sync conversion is not<br>
specified, the input block is omitted from the output.
On input files which are not tapes or pipes, the file
offset will be positioned past the block in which the
error occurred using lseek(2).<br>
<br>
<span class="code">notrunc</span><br>
Do not truncate the output file.   This will preserve
any blocks in the output file not explicitly written by
dd.  The notrunc value is not supported for tapes.<br>
<br>
<span class="code">osync</span><br>
Pad the final output block to the full output block
size.  If the input file is not a multiple of the output block size after conversion, this conversion forces
the final output block to be the same size as preceding
blocks for use on devices that require regularly sized
blocks to be written.  This option is incompatible with
use of the bs=n block size specification.<br>
<br>
<span class="code">sparse</span><br>
If one or more output blocks would consist solely of
NUL bytes, try to seek the output file by the required
space instead of filling them with NULs, resulting in a
sparse file.<br>
<br>
<span class="code">swab</span><br>
Swap every pair of input bytes.  If an input buffer has
an odd number of bytes, the last byte will be ignored
during swapping.<br>
<br>
<span class="code">sync</span><br>
Pad every input block to the input buffer size.  Spaces
are used for pad bytes if a block oriented conversion
value is specified, otherwise NUL bytes are used.<br>
<br>
<span class="code">ucase</span> Transform lowercase characters into uppercase characters.<br>
<br>
<span class="code">unblock</span><br>
Treats the input as a sequence of fixed length records
independent of input and output block boundaries.  The
length of the input records is specified by the cbs
operand.   Any trailing space characters are discarded
and a newline character is appended.</p>
</blockquote>
</blockquote>
</blockquote>
</blockquote>
<p>Where sizes are specified, a decimal, octal, or hexadecimal number of bytes is expected. If the number ends with a <span class="code">b, k, m, g, or w</span>, the number is multiplied by 512, 1024 (1K), 1048576 (1M), 1073741824 (1G) or the number of bytes in an integer, respectively. Two or more numbers can be separated by an <span class="code">x</span> to indicate a product. </p>
<p>When finished, dd displays the number of complete and partial input and output blocks, truncated input records and odd-length byte-swapping blocks to the standard error output. A partial input block is one where less 
than the input block size was read. A partial output block is one where less than the output block size was written. Partial output blocks to tape devices are considered fatal errors. Otherwise, the rest of the block will be written. 
Partial output blocks to character devices will produce a warning message. A truncated input block is one where a variable length record oriented conversion value was specified and the input line was too long to fit in the conversion 
record or was not newline ter- minated. </p>
<p>Normally, data resulting from input or conversion or both are aggregated into output blocks of the specified size. After the end of input is reached, any remaining output is written as a block. This means that the 
final output block might be shorter than the output block size. </p>
<p> The name <span class="code">dd</span> is thought to be an allusion to the DD statement found in <a href="http://www.catb.org/jargon/html/D/dd.html">IBM's</a> Job Control Language (JCL), where the acronym stands for "Data Description".</p>
<p>If <span class="code">dd</span> receives a SIGINFO   signal, the current input and output block counts will be written to the standard error output in the same format as the standard completion message. If <span class="code">dd</span> receives 
a SIGINT signal, the current input and output block counts will be written to the standard error output in the same format as the standard completion message and dd will exit.</p>
<p><b>Examples:</b></p>
<p>Clone the drive sda onto drive sdb<span class="code">:<br>
$ dd if=/dev/sda of=/dev/sdb</span></p>
<p>Clone the drive hda onto an image file:<br>
<span class="code">$ dd if=/dev/hda of=/image.img</span></p>
<p>Copy a CD or DVD disc to a .iso image file, first unmounting the disc:<br>
<span class="code">sudo umount /dev/<i>dvd-device</i><br>
dd if=/dev/<i>dvd-device</i> of=<i>dvd.iso</i></span><span class="code"> bs=2048 conv=sync,notrunc</span><br>
#  dvd-device will typically be <span class="code">dvd</span> for a dvd disc or <span class="code">cdrom</span> for a cdrom disc.</p>
<p>Clone a hard drive to a zipped image file in 100Mb blocks:<span class="code"><br>
$ dd if=/dev/hda bs=100M | gzip -c &gt; /image.img</span></p>
<p>Create a 10 KB file filled with random data (10 x 1K blocks):<span class="code"><br>
$ dd if=/dev/random of=random.bin bs=1024 count=10</span></p>
<p>Completely wipe the hard drive hdz by overwriting it with random data<span class="code">:<br>
$ dd if=/dev/urandom of=/dev/hdz</span></p>
<p><b><i> </i></b><i class="quote">“Success isn't something you chase. It's something you have to put forth the effort for constantly. Then maybe it'll come when you least expect it. Most people don't understand that” - Michael Jordan </i></p>
<p><b>Related:</b></p>
<p><a href="https://developer.apple.com/legacy/library/documentation/Darwin/Reference/ManPages/man1/dd.1.html">dd man page</a> - Apple.com<br>
Apple Disk Utility  can create DMG files or ISO files (select the "CD/DVD Master" option) <br>
<a href="cp.html">cp</a> - Copy one or more files to another location<br>
<a href="hdiutil.html">hdiutil</a> - Manipulate iso disk images<br>
<a href="install.html">install</a> - Copy files and set attributes<br>
<a href="mv.html">mv</a> - Move or rename files or directories <br>
<a href="tr.html">tr</a> - Translate, squeeze, and/or delete characters</p><!-- #BeginLibraryItem "/Library/foot_osx.lbi" --><p>
<!-- OSX300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="1823340303"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="dd.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->
