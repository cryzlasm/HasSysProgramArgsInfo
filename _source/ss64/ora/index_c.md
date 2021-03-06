---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_ora.lbi" --><!-- #EndLibraryItem --><h1>CREATE INDEX</h1> 
<p>Create an index.<br>
  <br>
  Syntax:</p>
<pre><i>Table Index
</i>   CREATE [UNIQUE|BITMAP] INDEX [schema.]<i>index_name</i>
      ON [schema.]<i>table_name</i> [tbl_alias]
         (<b>col</b> [ASC | DESC]) <i>index_clause index_attribs

Bitmap Join Index
</i>   CREATE [UNIQUE|BITMAP] INDEX [schema.]<i>index_name</i>
      ON [schema.]<i>table_name</i> [tbl_alias]
         (<b>col_expression</b> [ASC | DESC])
            FROM [schema.]<i>table_name</i> [tbl_alias]
               WHERE <i>condition</i><i> </i>[<i>index_clause</i>]<i> index_attribs

Cluster Index
</i>   CREATE [UNIQUE|BITMAP] INDEX [schema.]<i>index_name</i>
      ON <b>CLUSTER</b> [schema.]<i>cluster_name</i> <i>index_attribs</i></pre>
<p><i>index_clauses</i>:</p>
<pre>LOCAL STORE IN (<i>tablespace</i>)

LOCAL STORE IN (<i>tablespace</i>)
  (PARTITION [<i>partition</i>
       [LOGGING|NOLOGGING]
       [TABLESPACE {<i>tablespace</i>|DEFAULT}]
       [PCTFREE <i>int</i>]
       [PCTUSED <i>int</i>]
       [INITRANS <i>int</i>]
       [MAXTRANS <i>int</i>]
       [STORAGE <a href="clause_storage.html">storage_clause</a>]
       [STORE IN {tablespace_name|DEFAULT]
       [SUBPARTITION [<i>subpartition</i> [TABLESPACE <i>tablespace</i>]]]])

LOCAL (PARTITION [<i>partition</i>
       [LOGGING|NOLOGGING]
       [TABLESPACE {<i>tablespace</i>|DEFAULT}]
       [PCTFREE <i>int</i>]
       [PCTUSED <i>int</i>]
       [INITRANS <i>int</i>]
       [MAXTRANS <i>int</i>]
       [STORAGE <a href="clause_storage.html">storage_clause</a>]
       [STORE IN {<i>tablespace_name</i>|DEFAULT]
       [SUBPARTITION [<i>subpartition</i> [TABLESPACE <i>tablespace</i>]]]])

GLOBAL PARTITION BY RANGE (col_list)
   ( PARTITION <i>partition</i> VALUES LESS THAN (<i>value_list</i>)
       [LOGGING|NOLOGGING]
       [TABLESPACE {<i>tablespace</i>|DEFAULT}]
       [PCTFREE <i>int</i>]
       [PCTUSED <i>int</i>]
       [INITRANS <i>int</i>]
       [MAXTRANS <i>int</i>]
       [STORAGE <a href="clause_storage.html">storage_clause</a>] )

INDEXTYPE IS <i>indextype</i> [PARALLEL <i>int</i>|NOPARALLEL] [PARAMETERS ('<i>ODCI_Params</i>')]
 {This for table index only, not bitmap join Index}</pre>
<p><i>index_attribs</i>:<br>
any combination of the following</p>
<pre>    NOSORT|SORT
    REVERSE
    COMPRESS <i>int</i>
    NOCOMPRESS
    COMPUTE STATISTICS
    [NO]LOGGING
    ONLINE
    TABLESPACE {<i>tablespace</i>|DEFAULT}
    PCTFREE <i>int</i>
    PCTUSED <i>int</i>
    INITRANS <i>int</i>
    MAXTRANS <i>int</i>
    STORAGE <a href="clause_storage.html">storage_clause</a>
    PARALLEL <a href="clause_parallel.html">parallel_clause</a></pre>
<p>If the PARALLEL clause is used it should be the last option.</p>
<p>For example: <br>
To create a function-based index which allows case-insensitive searches. </p>
<pre>CREATE INDEX idx_case_ins ON my_table(UPPER(empname));

SELECT * FROM my_table WHERE UPPER(empname) = 'KARL'; </pre>
<p class="quote"><i>"Anything you build on a large scale or with intense passion invites chaos" ~ Francis Ford Coppola </i></p>
<p><b>Related Commands:</b></p>
<p>INDEX - <a href="index_a.html">ALTER INDEX</a><br>
INDEX - <a href="index_d.html">DROP INDEX</a> <br>
INDEXTYPE - <a href="indextype_c.html">CREATE INDEXTYPE</a><br>
<br>
<b>Related Views:</b></p>
<p class="code">&nbsp;<a href="../orad/DBA_INDEXES.html">DBA_INDEXES</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="../orad/ALL_INDEXES.html">ALL_INDEXES</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="../orad/USER_INDEXES.html">USER_INDEXES</a> <br>                                                                
 &nbsp; &nbsp;&nbsp;<a href="../orad/INDEX_HISTOGRAM.html">INDEX_HISTOGRAM</a> <br>                                                                
 &nbsp;&nbsp;&nbsp;&nbsp;<a href="../orad/INDEX_STATS.html">INDEX_STATS</a> <br> 
 &nbsp;<a href="../orad/DBA_INDEXTYPES.html">DBA_INDEXTYPES</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="../orad/ALL_INDEXTYPES.html">ALL_INDEXTYPES</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="../orad/USER_INDEXTYPES.html">USER_INDEXTYPES</a> <br> 
 &nbsp;<a href="../orad/DBA_INDEXTYPE_OPERATORS.html">DBA_INDEXTYPE_OPERATORS</a>&nbsp;&nbsp;<a href="../orad/ALL_INDEXTYPE_OPERATORS.html">ALL_INDEXTYPE_OPERATORS</a>&nbsp;&nbsp;<a href="../orad/USER_INDEXTYPE_OPERATORS.html">USER_INDEXTYPE_OPERATORS</a> <br> 
 &nbsp;<a href="../orad/DBA_IND_COLUMNS.html">DBA_IND_COLUMNS</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="../orad/ALL_IND_COLUMNS.html">ALL_IND_COLUMNS</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="../orad/USER_IND_COLUMNS.html">USER_IND_COLUMNS</a> <br> 
 &nbsp;<a href="../orad/DBA_IND_EXPRESSIONS.html">DBA_IND_EXPRESSIONS</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="../orad/ALL_IND_EXPRESSIONS.html">ALL_IND_EXPRESSIONS</a>&nbsp;&nbsp;&nbsp;&nbsp;<a href="../orad/USER_IND_EXPRESSIONS.html">USER_IND_EXPRESSIONS</a> <br> 
 &nbsp;<a href="../orad/DBA_IND_PARTITIONS.html">DBA_IND_PARTITIONS</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="../orad/ALL_IND_PARTITIONS.html">ALL_IND_PARTITIONS</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="../orad/USER_IND_PARTITIONS.html">USER_IND_PARTITIONS</a> <br> 
&nbsp;<a href="../orad/DBA_IND_SUBPARTITIONS.html">DBA_IND_SUBPARTITIONS</a>&nbsp;&nbsp;&nbsp;&nbsp;<a href="../orad/ALL_IND_SUBPARTITIONS.html">ALL_IND_SUBPARTITIONS</a>&nbsp;&nbsp;<a href="../orad/USER_IND_SUBPARTITIONS.html">USER_IND_SUBPARTITIONS</a></p><!-- #BeginLibraryItem "/Library/foot_ora.lbi" --><p>
<!-- oracle-footer -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="4275490898"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="index_c.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

