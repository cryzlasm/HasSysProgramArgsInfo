---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_ora.lbi" --><!-- #EndLibraryItem --><h1>EXPLAIN PLAN Statement </h1> 
<p>Display the execution plan for an SQL statement.<br>
  <br>
  Syntax:</p>
<pre>   EXPLAIN PLAN [SET STATEMENT_ID = '<i>text</i>']
      FOR <i>statement</i>;

   EXPLAIN PLAN [SET STATEMENT_ID = '<i>text</i>']
      INTO [schema.]table@dblink
         FOR <i>statement;</i></pre>
<p>If you omit the INTO TABLE_NAME clause, Oracle will fill a table named PLAN_TABLE</p>
<p>Example</p>
<p class="code">-- Create an empty plan table (adds a table to the current schema) <br>
@$ORACLE_HOME/rdbms/admin/utlxplan.sql</p>
<p class="code">-- Run explain plan <br>
EXPLAIN PLAN FOR<br>
SELECT s.col1, s.col2, h.col3 <br>
FROM huge_table h JOIN small_table s USING (demo_id);</p>
<p class="code">-- Now look at the plan created <br>
SELECT * FROM TABLE(dbms_xplan.display);</p>
<p class="code">-- Delete the records when finished <br>
DELETE from plan_table;<br>
COMMIT;
</p>
<p>If the query is fast enough that it can be run to completion in a reasonable amount of time, then just turn on the <a href="syntax-sqlplus-set.html">SQL*Plus AutoTrace</a> feature. Once turned on, this feature will display an execution plan for every subsequent SQL statement you run.</p>
<p class="code">SQL&gt; SET AUTOTRACE ON<br>
SQL&gt; SELECT s.col1, s.col2, h.col3 <br>
FROM huge_table h JOIN small_table s USING (demo_id);</p>
<p>Explain plan results</p>
<p>In an explain plan output, the <b>more indented</b> an operation is, the <b>earlier</b> it is executed. <br>
The result of the indented operation is fed to the parent (less indented) operation. In this way you can see the order of execution for the whole statement.</p>
<p>It is possible for several  operations to be equally indented and have the same parent. These indentations are calculated from the id, and parent_id columns of the plan_table.</p>
<p>Operations: SELECT, INSERT,  UPDATE, DELETE,  AND-EQUAL,  CONNECT BY,  CONCATENATION,  COUNT,  DOMAIN INDEX,  FILTER,  FIRST , ROW,  FOR UPDATE,  HASH JOIN,  INDEX,  INLIST ITERATOR,  INTERSECTION,  MERGE JOIN,  MINUS,  NESTED LOOPS,  PARTITION,REMOTE,  SEQUENCE,  SORT,  TABLE ACCESS,  UNION,  VIEW.</p>
<p>There are also many Options which describe each Operation in more detail - here are a few of the most common:<br>
TABLE ACCESS (FULL) = Full table scan<br>
INDEX (RANGE SCAN) = Read multiple values from an index<br>
INDEX (UNIQUE SCAN) = Read one value from an index<br>
MERGE JOIN () = Sort two tables and merge the sorted rows <br>
SORT (JOIN) = Sort returning multiple rows<br>
SORT (AGGREGATE) = Sort returning one row </p>
<p><i> 
"Nobody expects the Spanish Inquisition!!!" - Monty Python </i><b><br>
<br>
Related:</b></p>
<p> DBMS_XPLAN -  use to format/display the plan table. <br>

<a href="analyze.html">ANALYZE</a><a href="delete.html"><br>
  </a><a href="insert.html"> INSERT</a><a href="truncate.html"><br>
  </a><a href="select.html">SELECT</a><a href="truncate.html"> <br>
  </a> <a href="update.html">UPDATE</a></p>
<p class="code">  <a href="../orad/DBA_SNAPSHOTS.html">DBA_SNAPSHOTS</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="../orad/ALL_SNAPSHOTS.html">ALL_SNAPSHOTS</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="../orad/USER_SNAPSHOTS.html">USER_SNAPSHOTS</a> <br>  
  <a href="../orad/DBA_ALL_TABLES.html">DBA_ALL_TABLES</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="../orad/ALL_ALL_TABLES.html">ALL_ALL_TABLES</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="../orad/USER_ALL_TABLES.html">USER_ALL_TABLES</a><br>  
  <a href="../orad/DBA_TABLES.html">DBA_TABLES</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="../orad/ALL_TABLES.html">ALL_TABLES</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="../orad/USER_TABLES.html">USER_TABLES</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="../orad/TAB.html">TAB</a><br>  
  <a href="../orad/DBA_VIEWS.html">DBA_VIEWS</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="../orad/ALL_VIEWS.html">ALL_VIEWS</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="../orad/USER_VIEWS.html">USER_VIEWS</a><br>
  <br>                                                                
  <a href="../orad/DICTIONARY.html">DICTIONARY</a><br>                                                                
  <a href="../orad/DICT_COLUMNS.html">DICT_COLUMNS</a><br>  
  <a href="../orav/V$EXECUTION.html">V$EXECUTION</a> </p><!-- #BeginLibraryItem "/Library/foot_ora.lbi" --><p><script async="" src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
<!-- oracle-footer -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="4275490898"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

