---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_ora.lbi" --><!-- #EndLibraryItem --><h1>ALTER MATERIALIZED VIEW</h1> 
<p>Change the properties of an existing mview. <br>
  The word "snapshot" 
  is synonymous with "materialized view". <br>
  <br>
  Syntax:</p>
<pre>   ALTER MATERIALIZED VIEW [<i>schema</i>.]<i>mview</i> <i>options iot_options
      </i>[USING INDEX <i>index_options</i>]
         [<b>REFRESH</b> [<i>refresh_options</i>]]
            [COMPILE | CONSIDER FRESH | {ENABLE|DISABLE} QUERY REWRITE]

   ALTER MATERIALIZED VIEW [<i>schema</i>.]<i>mview</i> <i>options iot_options
      </i>[USING INDEX <i>index_options</i>]
         [<b>REBUILD</b>]
            [COMPILE | CONSIDER FRESH | {ENABLE|DISABLE} QUERY REWRITE]

   ALTER MATERIALIZED VIEW [<i>schema</i>.]<i>mview</i> <i>options iot_options
      </i>[USING INDEX <i>index_options</i>]
         <b>MODIFY SCOPE FOR</b> (<i>ref_column/attribute</i>) IS [<i>schema</i>.]<i>scope_table</i>
            [COMPILE | CONSIDER FRESH | {ENABLE|DISABLE} QUERY REWRITE]
</pre>
<p>Options: </p>
<pre>   COMPRESS|NOCOMPRESS
   CACHE | NOCACHE
   PARALLEL <i>int</i> | <u>NOPARALLEL</u>
   ALLOCATE EXTENT [( [DATAFILE <i>filename</i>]
                      [, SIZE <i>int</i> {K | M}]
                      [, INSTANCE <i>int</i>] )]
   <a href="clause_partition.html">Partitioning clause</a>
   <i>Physical_options</i>
   <a href="clause_lob.html">LOB Clause</a>
<i>
Physical_options</i>:
   PCTFREE <i>int</i>
   PCTUSED <i>int</i>
   INITRANS <i>int</i>
   MAXTRANS <i>int</i>
   STORAGE <a href="clause_storage.html">storage_clause</a>
   LOGGING | NOLOGGING

<i>iot_options</i>:
   [PCTHRESHOLD <i>int</i> ] [INCLUDING <i>column_name</i>] 
      OVERFLOW [TABLESPACE <i>tablespace</i>] <i>Physical_options</i>

   OVERFLOW ALLOCATE EXTENT [( [DATAFILE <i>filename</i>]
                            [, SIZE <i>int</i> {K | M}]
                            [, INSTANCE <i>int</i>] )]
   OVERFLOW DEALLOCATE UNUSED [KEEP <i>int</i> {K | M}]

   ADD OVERFLOW [TABLESPACE <i>tablespace</i>] <i>Physical_options</i>
      [(PARTITION [TABLESPACE <i>tablespace</i>] <i>Physical_options</i>)]

   COALESCE

<i>index_options</i>:
   PCTFREE <i>int</i>
   PCTUSED <i>int</i>
   INITRANS <i>int</i>
   MAXTRANS <i>int</i>
   STORAGE <a href="clause_storage.html">storage_clause</a>

<i>refresh_options</i>:
   FAST | COMPLETE | <u>FORCE</u>
   ON [DEMAND | COMMIT]
   {NEXT | START WITH} <i>date</i>
   WITH PRIMARY KEY
   USING DEFAULT MASTER ROLLBACK SEGMENT
   USING MASTER ROLLBACK SEGMENT <i>rb_segment</i></pre>
<p><b> Related Commands:</b></p>
<p><a href="grant.html">GRANT</a> ALTER ANY MATERIALIZED VIEW<br>
  MVIEW - <a href="mview_c.html">CREATE MATERIALIZED VIEW</a><br>
  MVIEW - <a href="mview_d.html">DROP MATERIALIZED VIEW</a><br>
  MVIEW LOG - <a href="mview_log_a.html">ALTER MATERIALIZED VIEW LOG</a>
  <br>
  <a href="../orap/DBMS_MVIEW.html">DBMS_MVIEW</a><br>
  <a href="../orap/DBMS_REFRESH.html">DBMS_REFRESH</a> <br>
  <br>
  <b>Related Views:</b></p>
<p class="code">&nbsp;<a href="../orad/DBA_MVIEWS.html">DBA_MVIEWS</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="../orad/ALL_MVIEWS.html">ALL_MVIEWS</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="../orad/USER_MVIEWS.html">USER_MVIEWS</a><br> 
 &nbsp;<a href="../orad/DBA_MVIEW_AGGREGATES.html">DBA_MVIEW_AGGREGATES</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="../orad/ALL_MVIEW_AGGREGATES.html">ALL_MVIEW_AGGREGATES</a>&nbsp;<a href="../orad/USER_MVIEW_AGGREGATES.html">USER_MVIEW_AGGREGATES</a><br> 
 &nbsp;<a href="../orad/DBA_MVIEW_ANALYSIS.html">DBA_MVIEW_ANALYSIS</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="../orad/ALL_MVIEW_ANALYSIS.html">ALL_MVIEW_ANALYSIS</a>&nbsp;&nbsp;&nbsp;<a href="../orad/USER_MVIEW_ANALYSIS.html">USER_MVIEW_ANALYSIS</a><br> 
 &nbsp;<a href="../orad/DBA_MVIEW_DETAIL_RELATIONS.html">DBA_MVIEW_DETAIL_RELATIONS</a>  <a href="../orad/ALL_MVIEW_DETAIL_RELATIONS.html">ALL_MVIEW_DETAIL_RELATIONS</a> <a href="../orad/USER_MVIEW_DETAIL_RELATIONS.html">USER_MVIEW_DETAIL_RELATIONS</a><br> 
 &nbsp;<a href="../orad/DBA_MVIEW_JOINS.html">DBA_MVIEW_JOINS</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="../orad/ALL_MVIEW_JOINS.html">ALL_MVIEW_JOINS</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="../orad/USER_MVIEW_JOINS.html">USER_MVIEW_JOINS</a><br> 
 &nbsp;<a href="../orad/DBA_MVIEW_KEYS.html">DBA_MVIEW_KEYS</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="../orad/ALL_MVIEW_KEYS.html">ALL_MVIEW_KEYS</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="../orad/USER_MVIEW_KEYS.html">USER_MVIEW_KEYS</a><br> 
 &nbsp;<a href="../orad/DBA_MVIEW_LOGS.html">DBA_MVIEW_LOGS</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="../orad/ALL_MVIEW_LOGS.html">ALL_MVIEW_LOGS</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="../orad/USER_MVIEW_LOGS.html">USER_MVIEW_LOGS</a> <br> 
 &nbsp;<a href="../orad/DBA_MVIEW_LOG_FILTER_COLS.html">DBA_MVIEW_LOG_FILTER_COLS</a><br> 
&nbsp;<a href="../orad/DBA_MVIEW_REFRESH_TIMES.html">DBA_MVIEW_REFRESH_TIMES</a>&nbsp;&nbsp;&nbsp;&nbsp;<a href="../orad/ALL_MVIEW_REFRESH_TIMES.html">ALL_MVIEW_REFRESH_TIMES</a>&nbsp;<a href="../orad/USER_MVIEW_REFRESH_TIMES.html">USER_MVIEW_REFRESH_TIMES</a>   </p><!-- #BeginLibraryItem "/Library/foot_ora.lbi" --><p>
<!-- oracle-footer -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="4275490898"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="mview_a.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

