---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_orasyntax.lbi" --><!-- #EndLibraryItem --><h1>Storage - Blocks, Extents, Segments</h1>
<h2> Blocks</h2>
<p>  Oracle database data is stored in data blocks. <br>
One data block corresponds to a specific number of bytes of physical database space on disk. (e.g. 1 block = 16 Kbytes)</p>
<h2>Extents</h2>
<p>  An extent is a specific number of contiguous data blocks, obtained in a single allocation, used to store a specific type of information. </p>
<p>A small table can fit in a single extent, a large table can require multiple extents.</p>
<h2>Segments</h2>
<p>  The level of logical database storage above an extent is called a segment.<br>
  A segment is a set of extents allocated for a certain logical structure: Data /Index /Rollback/ Temporary segment. The allocation of extents for a given segment is handled different for Locally Managed Tablespaces and Dictionary
  Managed Tablespaces.</p>
<h2>Extent deallocation</h2>
<p>  In general, the extents of a segment do not return to the tablespace until you drop the schema object whose data is stored in them.</p>
<p> Exceptions to this include the following:</p>
<ul>
  <li> The<span class="code"> TRUNCATE…DROP STORAGE</span> statement.</li>
  <li>    Rollback segments with the OPTIMAL size specified.</li>
  <li>    Manual deallocation using the following SQL syntax:<br>
    <span class="code">ALTER TABLE table_name DEALLOCATE UNUSED;</span></li>
</ul>
<p>After you DROP a nonclustered table Oracle makes the extents available for other schema objects in the same tablespace.</p>
<h2>Block Sizes</h2>
<p>  The block size of the SYSTEM tablespace is termed the standard block size. This is set when the database is created and can be any valid size. <br>
  Early versions of Oracle supported just one block size set at database creation, you can now specify up to four nonstandard block sizes, in addition to a standard
  block size. </p>
<p>In the initialization file, you can configure subcaches within the buffer cache for each of these block sizes. Subcaches can also be configured while
an instance is running. You can create tablespaces having any of these block sizes. </p>
<p>The standard block size is used for the system tablespace and most other tablespaces. All partitions of a partitioned object must reside in tablespaces of a single
block size. Multiple block sizes are useful primarily when transporting a tablespace from an OLTP database to an enterprise data warehouse.</p>
<h2>Automated Storage Management (ASM)</h2>
<p> ASM is a feature of Oracle 10g. ASM simplifies the organisation of disks and files by enabling ASM Disk Groups - logical units comprised of disks and the files that reside on them. </p>
<p>ASM can be used for:</p>
<ul>
<li> Datafiles</li>
<li> Online redo log files</li>
<li> Control files</li>
<li> Flashback recovery area files.</li>
</ul>
<p> ASM works with raw devices, SAN based storage arrays, or NAS. I/O performance is maximized because files are optimally distributed (and mirrored) across the available devices. Configuration changes can be made while the database is online and the distribution will be re-balanced. ASM mirrors provide an extra layer of protection against data loss.<br>
<br>
<i class="quote">"Ever notice that the area of a department store containing completely useless objects is called 'gifts?' ~ Anon</i><br>
<br>
<b>See also</b></p>
<p><a href="tablespace_c.html">CREATE TABLESPACE</a></p><!-- #BeginLibraryItem "/Library/foot_ora.lbi" --><p><script async="" src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
<!-- oracle-footer -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="4275490898"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

