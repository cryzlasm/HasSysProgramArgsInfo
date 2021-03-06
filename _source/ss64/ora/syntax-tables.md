---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_orasyntax.lbi" --><!-- #EndLibraryItem --><h1>Partitioned Tables, Temporary Tables, External and Index Organised Tables.
</h1>
<p>  Partitioning allows a very large
  table (or index) to be stored in multiple partitions, which being smaller 
  will be easier to manage. </p>
<p>SQL queries and DML statements do not need to be modified in order to access
  partitioned tables. You do not need to rewrite  application code to take
  advantage of partitioning.</p>
<p>However, once partitions are defined, SQL statements (including
    DDL) can access and manipulate an individual partition rather than an entire
  table.</p>
<p>Partitioning enables  data loads, index creation
  and rebuilding, and backup/recovery to be done at the partition level, rather
  than on the entire table. This results in significant time savings.</p>
<p>Each row in a partitioned table is assigned to a single partition.
  The <b>partition key </b>is a set of one or more columns that determine the partition
for each row.</p>
<p>Oracle provide 4 partitioning methods: Range, List , Hash and Composite Partitioning
  (Range+Hash).</p>
<blockquote>
  <p>  <b>List</b> puts a list of discrete values in each partition, <br>
    <span class="code">PARTITION sales_east VALUES IN ('New York', 'Virginia', 'Florida')</span></p>
  <p><b>Range</b> puts a range of values in a partition:<br>
    <span class="code">PARTITION sales_jan2000 VALUES LESS THAN(TO_DATE('02/01/2000','DD/MM/YYYY')</span></p>
  <p><b>Hash</b> uses a hash function to place rows into different partitions<br>
    <span class="code">PARTITION BY HASH(salesman_id)</span></p>
  <p>  <b>Composite partitioning</b> provides the improved manageability of range partitioning
  and the data placement, striping, and parallelism advantages of hash partitioning.</p>
</blockquote>
<p>e.g.<br>  
  <span class="code">PARTITION sales_dec2012 VALUES LESS THAN(TO_DATE('2012-12-31','YYYY-MM-DD'))<br>
  ( SUBPARTITION sales_dec2012_1 TABLESPACE data1,<br>
  SUBPARTITION sales_dec2012_2 TABLESPACE data2,…</span></p>
<p>Tables on which you want to perform parallel DML operations must be partitioned.</p>
<p>Tables greater than 2GB should always be considered for partitioning.</p>
<p>Tables containing historical data, in which new data is added into the newest
  partition. A typical example is a historical table where only the current month's
  data is updatable and the other 11 months are read-only.</p>
<p>When creating an index for a partitioned table, there are 3 choices, you can
  create:</p>
<blockquote>
  <p>A traditional (global) index,</p>
  <p>A global partitioned index - where the degree of partitioning (and the partition
    key) are independent from the table's partitioning method.</p>
  <p>A LOCAL index - where the degree of partitioning (and the partition key)
    are the same as the table's partitioning method.</p>
</blockquote>
<p class="code">CREATE INDEX emp_local_idx ON emp (empno) LOCAL</p>
<p>Tablespaces can be specified at either index or index subpartition
  levels. Further examples of partitioned index creation are in the <i>Oracle concepts
  manual. </i></p>
<h2>Temporary Tables</h2>
<p>  You can create temporary tables to hold data that exists only for the duration
of a transaction or session.</p>
<p>The <a href="table_c.html">CREATE GLOBAL TEMPORARY TABLE</a> statement creates a temporary table.</p>
<p>For transaction-specific temporary tables, data exists for the duration of
  the transaction. For session-specific temporary tables, data exists for the
  duration of the session.</p>
<p>Data in a temporary table is private to the session. Each session can only
  see and modify its own data.<br>
  A TRUNCATE statement issued on a session-specific temporary table truncates
  data in its own session. It does not truncate the data of other sessions using
  the same table.</p>
<p>Data from the temporary table is automatically dropped in the case of session
  termination or an instance crash.<br>
  You can create temporary indexes for temporary tables using the CREATE INDEX
  statement.<br>
  You can create views that access both temporary and permanent tables. You can
  also create triggers on temporary tables. Locks are not acquired on temporary
  tables because each session has its own private data. </p>
<p>The Export utility will not read data from a temporary table.</p>
<h2>  Index-Organised Tables</h2>
<p>  Data for an index-organised table (IOT) is stored in a B-tree index structure
      (sorted by primary key). </p>
<p>Besides storing the primary key values of each
        row, each index entry in the B-tree stores the nonkey column values as
        well.<br>
  Applications manipulate the IOT just like an ordinary table, using SQL
        statements. However, the database system performs all operations by manipulating
        the
        corresponding B-tree index.</p>
<p>  IOT's Cannot be stored in a cluster or contain columns of datatype LONG.<br>
  Storage in an IOT avoids the duplication where a primary key column is 
          stored in both the table and index.</p>
<p>Oracle 9.0.1, supports bitmap indexes on an IOT. A mapping table is required,
  which is a heap-organized table that stores logical rowids of the index-organized
  table.</p>
<p>You can range or hash partition an index-organized table.</p>
<h2>External Tables</h2>
<p>  External tables provide a way to read data from external sources as if
    reading a table.<br>
  External tables are read-only and are mainly used for loading data into a "real" database
table.</p>
<p class="code">SQL&gt; create or replace directory testdir as 'd:\temp';<br>
  SQL&gt; select * from all_directories</p>
<p>Copying data from an external table can be done through standard SQL:<br>
  <br>
  <span class="code">CREATE TABLE AS SELECT … FROM
my_external_table <br>
or <br>
INSERT INTO … AS SELECT … FROM
my_external_table</span></p>
<p><b>Replication</b><br>
Replication is the process of copying and maintaining data across multiple databases (sites) that make up a distributed database system. </p>
<p>In a <b>Distributed</b> database, data is distributed across multiple locations, but a particular table will reside at only one location.<br>
<br>
<i class="quote">"The whole is greater than the part" ~ Euclid's fifth Common Notion</i><br>
<br>
<b>See also</b><br>
<a href="syntax-datatypes.html">Full list of Datatypes</a><br>
</p><!-- #BeginLibraryItem "/Library/foot_ora.lbi" --><p><script async="" src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
<!-- oracle-footer -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="4275490898"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

