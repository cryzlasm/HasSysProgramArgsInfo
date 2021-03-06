---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_orad.lbi" --><!-- #EndLibraryItem --><h1>DBA_SEGMENTS </h1><p> Storage allocated for all database segments </p> 
 
<pre>Columns
   ___________________________
 
   OWNER
      Username of the segment owner
   SEGMENT_NAME
      Name,if any,of the segment
   PARTITION_NAME
      Partition/Subpartition Name,if any,of the segment
   SEGMENT_TYPE
      "Type of segment: "TABLE","CLUSTER","INDEX","ROLLBACK","DEFERRED
   TABLESPACE_NAME
      Name of the tablespace containing the segment
   HEADER_FILE
      ID of the file containing the segment header
   HEADER_BLOCK
      ID of the block containing the segment header
   BYTES
      Size,in bytes of the segment
   BLOCKS
      Size,in Oracle blocks of the segment
   EXTENTS
      Number of extents allocated to the segment
   INITIAL_EXTENT
      Size,in bytes,of the initial extent of the segment
   NEXT_EXTENT
      Size,in bytes,of the next extent to be allocated to the segment
   MIN_EXTENTS
      Minimum number of extents allowed in the segment
   MAX_EXTENTS
      Maximum number of extents allowed in the segment
   PCT_INCREASE
      Percent by which to increase the size of the next extent to be allocated
   FREELISTS
      Number of process freelists allocated in this segment
   FREELIST_GROUPS
      Number of freelist groups allocated in this segment
   RELATIVE_FNO
      Relative number of the file containing the segment header
   BUFFER_POOL
      The default buffer pool to be used for segments blocks</pre>
<p><b>Example sql:</b></p>
<p>-- Total size allocated for each tablespace: </p>
<p class="code">COLUMN tablespace_name FORMAT A21<br>
COLUMN Sum(bytes/(1024*1024)) FORMAT 999,999,999,999<br>
<br>
Select tablespace_name,<br>
Sum(bytes/(1024*1024)) TotalMB<br>
From dba_segments<br>
Group By tablespace_name;</p>
<p> -- Total space allocated by Owner:</p>
<pre>Select owner,
sum(blocks) Totalblocks,
sum<span class="code">(bytes/(1024*1024))</span> TotalMB
From <span class="code">dba_segments</span>
Group By owner</pre>
<p>-- Total space allocated by Tablespace:</p>
<pre>Select tablespace_name,
sum(blocks) Totalblocks,
sum<span class="code">(bytes/(1024*1024))</span> TotalMB
From <span class="code">dba_segments</span>
Group By tablespace_name 
</pre>
<p>-- Space used in each Segment:</p>
<p class="code">SET LINESIZE 150<br>
COLUMN tablespace_name FORMAT A15<br>
COLUMN owner FORMAT A10<br>
COLUMN segment_name FORMAT A35<br>
COLUMN segment_type FORMAT A10<br>
COLUMN extents FORMAT 9,999<br>
COLUMN blocks FORMAT 999,999<br>
COLUMN bytes FORMAT 999,999,999,999</p>
<p class="code">Select tablespace_name, <br>
owner, <br>
segment_name, <br>
segment_type, /* TABLE,INDEX */ <br>
extents, /* No. of extents in the segment*/ <br>
blocks, /* No. of db blocks in the segment*/ <br>
bytes /* No. of bytes in the segment*/ <br>
From dba_segments<br>
Where owner NOT IN('SYSTEM','DBSNMP', 'ORDSYS', 'OUTLN','SYS')<br>
Order By bytes ;</p>
<p><b>Related</b></p>
<p><a href="DBA_FREE_SPACE.html">DBA_FREE_SPACE</a><br>
<a href="DBA_DATA_FILES.html">DBA_DATA_FILES</a><br>
<a href="DBA_EXTENTS.html">DBA_EXTENTS</a><br>
<a href="DBA_ROLLBACK_SEGS.html">DBA_ROLLBACK_SEGS</a><br>
DBA_SEGMENTS_OLD<br>
<a href="DBA_TABLESPACES.html">DBA_TABLESPACES</a><br>
Storage - <a href="../ora/syntax-storage.html">Blocks, Extents, Segments</a></p><!-- #BeginLibraryItem "/Library/foot_orad.lbi" --><p>
<!-- oracle-footer -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="4275490898"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="DBA_SEGMENTS.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div>
<!-- #EndLibraryItem -->

