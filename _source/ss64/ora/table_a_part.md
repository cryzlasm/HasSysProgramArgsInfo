---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_ora.lbi" --><!-- #EndLibraryItem --><h1><a href="table_a.html">ALTER TABLE</a> partitioning</h1>
<p>Change the partition properties of an existing table.<br>
<br>
Syntax:</p>
<pre><b>   ALTER</b> <b>TABLE</b> [<i>schema</i>.]<i>table</i>
      <i>partitioning_clause</i>
          [PARALLEL <a href="clause_parallel.html">parallel_clause</a>]
             [ENABLE <a href="clause_enable.html">enable_clause</a> | DISABLE <a href="clause_disable.html">disable_clause</a>]
                 [{ENABLE|DISABLE} TABLE LOCK]
                    [{ENABLE|DISABLE} ALL TRIGGERS];


<i> partitioning_clause</i>:
   <b>ADD PARTITION<a id="ADDPARTITION"></a></b> <i>partition</i>    --add Range ptn
      VALUES LESS THAN (<i>value</i>, <i>value</i>, [MAXVALUE],…)  [<i>partition_description</i>]

   <b>ADD PARTITION</b> <i>partition</i>    --add Hash ptn
      <i><a href="#storage_options">storage_options</a></i> 
      <i><a href="#extent_options">extent_options</a></i>
      OVERFLOW
         <i><a href="#storage_options">storage_options</a></i>
         <i><a href="#extent_options">extent_options</a></i>
      COMPRESS | NOCOMPRESS
      LOB (<i>LOB_item</i>) STORE AS <a href="clause_lob.html">LOB_segname</a>
      VARRAY <i>varray </i>STORE AS <a href="clause_lob.html">LOB_segname</a>
      {UPDATE | INVALIDATE} GLOBAL INDEXES
      PARALLEL <i>int</i> | NOPARALLEL

   <b>ADD PARTITION</b> <i>partition</i>    --add List ptn
      VALUES (DEFAULT | NULL | <i>value</i> [,…])  [<i>partition_description</i>]

   <b>COALESCE PARTITION</b> <i>partition</i>
      {UPDATE | INVALIDATE} GLOBAL INDEXES
      PARALLEL <i>int</i> | NOPARALLEL

   <b>DROP </b>[<b>SUB</b>]<b>PARTITION</b> <i>partition</i> 
      {UPDATE | INVALIDATE} GLOBAL INDEXES
      PARALLEL <i>int</i> | NOPARALLEL

   <b>MODIFY PARTITION</b> <i>partition</i>
      <i><a href="#storage_options">storage_options</a></i> 
      <i><a href="#extent_options">extent_options</a></i>
      OVERFLOW
         <i><a href="#storage_options">storage_options</a></i>
         <i><a href="#extent_options">extent_options</a></i>
      COMPRESS | NOCOMPRESS
      LOB (<i>LOB_item</i>) STORE AS <a href="clause_lob.html">LOB_segname</a>
      VARRAY <i>varray </i>STORE AS <a href="clause_lob.html">LOB_segname</a>
      <b>ADD SUBPARTITION</b> <i>subpartition</i> [VALUES (DEFAULT | NULL | <i>value</i> [,…])]
         TABLESPACE <i>tablespace</i>
         OVERFLOW [TABLESPACE <i>tablespace</i>]
         LOB (<i>LOB_item</i>) STORE AS <a href="clause_lob.html">LOB_segname</a>
         VARRAY <i>varray </i>STORE AS <a href="clause_lob.html">LOB_segname</a>
            [{UPDATE | INVALIDATE} GLOBAL INDEXES]
            [PARALLEL <i>int</i> | NOPARALLEL]
      <b>COALESCE SUBPARTITION</b>            -- for HASH Partition
         [{UPDATE | INVALIDATE} GLOBAL INDEXES]
            [PARALLEL <i>int</i> | NOPARALLEL]
      MAPPING TABLE UPDATE BLOCK REFERENCES
      MAPPING TABLE ALLOCATE EXTENT [( [size <i>int</i> K | M ]
         [DATAFILE '<i>filename</i>' ] [INSTANCE <i>int</i>] )
      MAPPING TABLE DEALLOCATE UNUSED [KEEP <i>int</i> K | M ]
      {ADD | DROP} VALUES (<i>partition_value</i>,…)   -- for List Partition
      [REBUILD] UNUSABLE LOCAL INDEXES

   <b>MODIFY DEFAULT ATTRIBUTES</b> [FOR PARTITION <i>partition</i>]<i> <a href="#storage_options">storage_options</a></i>
      [PCTTHRESHOLD <i>int</i>] [[NO]COMPRESS [<i>int</i>]] [<i><a href="#overflow_clause">overflow_clause</a></i>]
          [LOB <i>lob_item</i> <a href="clause_lob.html">LOB_parameters</a>][VARRAY <i>varray</i> <a href="clause_lob.html">LOB_parameters</a>]

   <b>MODIFY SUBPARTITION</b> <i>subpartion</i>
      ALLOCATE EXTENT [( [size <i>int</i> K | M ]
         [DATAFILE '<i>filename</i>' ] [INSTANCE <i>int</i>] )
      DEALLOCATE UNUSED [KEEP <i>int</i> K | M ]
         {ADD | DROP} VALUES (<i>partition_value</i>,…)
      LOB (<i>LOB_item</i>) STORE AS <a href="clause_lob.html">LOB_segname</a>
      VARRAY <i>varray </i>STORE AS <a href="clause_lob.html">LOB_segname</a>
      {ADD | DROP} VALUES (<i>partition_value</i>,…)   -- for List Partition
      [REBUILD] UNUSABLE LOCAL INDEXES

   <b>MOVE PARTITION</b> <i>partition</i> [MAPPING TABLE]
      <i>storage_options</i> [COMPRESS [<i>int</i>] | NOCOMPRESS]
      OVERFLOW <i>storage_options</i>
      LOB (<i>LOB_item</i>) STORE AS <a href="clause_lob.html">LOB_segname</a>
      VARRAY <i>varray </i>STORE AS <a href="clause_lob.html">LOB_segname</a>
      SUBPARTITIONS <i>hash_subpartition_quantity</i> [STORE IN (<i>tablespace</i>,…)]
      <b>(</b>SUBPARTITION <i>subpartition</i> [VALUES (DEFAULT | NULL | <i>value</i>,…)]
          TABLESPACE <i>tablespace</i>
          OVERFLOW [TABLESPACE <i>tablespace</i>]
          LOB (<i>LOB_item</i>) STORE AS <a href="clause_lob.html">LOB_segname</a>
          VARRAY <i>varray </i>STORE AS <a href="clause_lob.html">LOB_segname</a> ,SUBPARTITION…<b>)</b>
      {UPDATE | INVALIDATE} GLOBAL INDEXES
      {NOPARALLEL|PARALLEL <i>int</i>}

   <b>MOVE SUBPARTITION</b> <i>subpartion</i> [<i>partition_description</i>]
      VALUES (DEFAULT | NULL | <i>value</i> [,…])
      TABLESPACE <i>tablespace</i>
      OVERFLOW [TABLESPACE <i>tablespace</i>]
      LOB (<i>LOB_item</i>) STORE AS <a href="clause_lob.html">LOB_segname</a>
      VARRAY <i>varray </i>STORE AS <a href="clause_lob.html">LOB_segname</a> 
      {UPDATE | INVALIDATE} GLOBAL INDEXES
      {NOPARALLEL|PARALLEL <i>int</i>}

   <b>RENAME</b> [<b>SUB</b>]<b>PARTITION</b> <i>ptn_name</i> TO <i>new_name</i>

   <b>TRUNCATE</b> [<b>SUB</b>]<b>PARTITION</b> <i>ptn_name</i> 
      {DROP|REUSE} STORAGE
      {UPDATE | INVALIDATE} GLOBAL INDEXES
      {NOPARALLEL|PARALLEL <i>int</i>}

   <b>SET SUBPARTITION TEMPLATE</b> (SUBPARTITION <i>subpartition</i> [VALUES (DEFAULT | NULL | <i>value</i> [,…])]
      TABLESPACE <i>tablespace</i>
      OVERFLOW [TABLESPACE <i>tablespace</i>]
      LOB (<i>LOB_item</i>) STORE AS <a href="clause_lob.html">LOB_segname</a>
      VARRAY <i>varray </i>STORE AS <a href="clause_lob.html">LOB_segname</a> )

   <b>SET SUBPARTITION TEMPLATE</b> <i>int</i>    --hash SubPartition quantity

   <b>SPLIT PARTITION</b> <i>ptn_name</i> AT (<i>value</i>, <i>value</i>…)
      INTO (<a href="#ADDPARTITION">ptn_spec</a>, <a href="#ADDPARTITION">ptn_spec</a>)
      {UPDATE | INVALIDATE} GLOBAL INDEXES
      {NOPARALLEL|PARALLEL <i>int</i>}

   <b>SPLIT SUBPARTITION</b> <i>ptn_name</i> VALUES (<i>value</i>, [NULL]<i>,value</i> [,…])
      INTO (<a href="#ADDPARTITION">ptn_spec</a>, <a href="#ADDPARTITION">ptn_spec</a>)
      {UPDATE | INVALIDATE} GLOBAL INDEXES
      {NOPARALLEL|PARALLEL <i>int</i>}

   <b>MERGE PARTITIONS</b> <i>ptn_1</i>, <i>ptn_2</i> 
      INTO PARTITION <i>partition</i> 
      <i><a href="#storage_options">storage_options</a></i> 
      <i><a href="#extent_options">extent_options</a></i>
      OVERFLOW
         <i><a href="#storage_options">storage_options</a></i>
         <i><a href="#extent_options">extent_options</a></i>
      COMPRESS | NOCOMPRESS
      LOB (<i>LOB_item</i>) STORE AS <a href="clause_lob.html">LOB_segname</a>
      VARRAY <i>varray </i>STORE AS <a href="clause_lob.html">LOB_segname</a>
      SUBPARTITIONS <i>hash_subpartition_quantity</i> [STORE IN (<i>tablespace</i> [,…])]
      <b>(</b>SUBPARTITION <i>subpartition</i> [VALUES (DEFAULT | NULL | <i>value</i> [,…])]
          TABLESPACE <i>tablespace</i>
          OVERFLOW [TABLESPACE <i>tablespace</i>]
          LOB (<i>LOB_item</i>) STORE AS <a href="clause_lob.html">LOB_segname</a>
          VARRAY <i>varray </i>STORE AS <a href="clause_lob.html">LOB_segname</a> ,SUBPARTITION…<b>)</b>
      {UPDATE | INVALIDATE} GLOBAL INDEXES
      {NOPARALLEL | PARALLEL <i>int</i>}

   <b>MERGE SUBPARTITIONS</b> <i>subptn_1</i>, <i>subptn_2</i> 
      INTO SUBPARTITION <i>subpartition</i> 
      VALUES LESS THAN (<i>value</i>, <i>value</i>, [MAXVALUE] [,…]) 
      TABLESPACE <i>tablespace</i>
      OVERFLOW [TABLESPACE <i>tablespace</i>]
      LOB (<i>LOB_item</i>) STORE AS <a href="clause_lob.html">LOB_segname</a>
      VARRAY <i>varray </i>STORE AS <a href="clause_lob.html">LOB_segname</a> ,SUBPARTITION…<b>
</b>      {UPDATE | INVALIDATE} GLOBAL INDEXES
      {NOPARALLEL | PARALLEL <i>int</i>}

   <b>EXCHANGE</b> [<b>SUB</b>]<b>PARTITION</b> [<i>sub</i>]<i>partition </i>WITH TABLE <i>table</i>
      {INCLUDING|EXCLUDING} INDEXES
      {WITH|WITHOUT} VALIDATION
      EXCEPTIONS INTO [schema.]table
      {UPDATE | INVALIDATE} GLOBAL INDEXES
         {NOPARALLEL|PARALLEL <i>int</i>}

<i>storage_options</i><a id="storage_options"></a>:
   PCTFREE int
   PCTUSED int
   INITTRANS int
   MAXTRANS int
   STORAGE <a href="clause_storage.html">storage_clause</a>
   TABLESPACE tablespace
   {LOGGING|NOLOGGING}

<i>overflow_clause</i><a id="overflow_clause"></a>:
   
   OVERFLOW ALLOCATE EXTENT [( [size <i>int</i> K | M ]
      [DATAFILE '<i>filename</i>' ] [INSTANCE <i>int</i>] )]

   OVERFLOW DEALLOCATE UNUSED [KEEP <i>int</i> K | M ]

   ADD OVERFLOW <i>storage_options</i> [(PARTITION <i>storage_options</i> [,PARTITION <i>storage_options</i> [,…]])]

<i>extent_options<a id="extent_options"></a>:</i>
   ALLOCATE EXTENT [( [size int K | M ]
      [DATAFILE 'filename' ] [INSTANCE int] )]

   DEALLOCATE UNUSED [KEEP int K | M ]</pre>
<p><b> Examples</b></p>
<pre>Add a column to a table
   ALTER TABLE STAFF_OPTIONS
      ADD SO_INSURANCE_PROVIDER Varchar2(35);

Add  a default value to a column
   ALTER TABLE STAFF_OPTIONS
      MODIFY SO_INSURANCE_PROVIDER Varchar2(35) DEFAULT 'ABC Ins';

Add two columns to a table and remove a constraint
   ALTER TABLE STAFF_OPTIONS
      ADD (SO_STAFF_ID INT, SO_PENSION_ID INT)
          STORAGE INITIAL 10 K
          NEXT 10 K
          MAXEXTENTS 121
          PCTINCREASE 0
          FREELISTS 2
      DROP CONSTRAINT cons_SO;</pre>
<p><i class="quote">"You're either part of the solution or part of the problem" ~ Eldridge Cleaver </i><b><br>
  <br>
  Related Commands:<br>
  <a href="analyze.html"><br>
  </a></b><a href="analyze.html">ANALYZE</a> TABLE COMPUTE STATISTICS<br>
  <a href="index_a.html">ALTER INDEX</a><br>
  <a href="view_a.html">ALTER VIEW</a><br>
  <a href="comment.html">COMMENT</a> - Add a comment to a table or a column. <br>
  <a href="rename.html">RENAME</a> <br>
  <a href="../orap/DBMS_REDEFINITION.html">DBMS_REDEFINITION</a> <br>
  <b><br>
</b><b>Related Views:</b></p>
<pre>  <a href="../orad/DBA_ALL_TABLES.html">DBA_ALL_TABLES</a>       <a href="../orad/ALL_ALL_TABLES.html">ALL_ALL_TABLES</a>       <a href="../orad/USER_ALL_TABLES.html">USER_ALL_TABLES</a>
  <a href="../orad/DBA_TABLES.html">DBA_TABLES</a>           <a href="../orad/ALL_TABLES.html">ALL_TABLES</a>           <a href="../orad/USER_TABLES.html">USER_TABLES</a>         <a href="../orad/TAB.html">TAB</a>
  <a href="../orad/DBA_TAB_COLUMNS.html">DBA_TAB_COLUMNS</a>      <a href="../orad/ALL_TAB_COLUMNS.html">ALL_TAB_COLUMNS</a>      <a href="../orad/USER_TAB_COLUMNS.html">USER_TAB_COLUMNS</a> 
  <a href="../orad/DBA_TAB_PARTITIONS.html">DBA_TAB_PARTITIONS</a>   <a href="../orad/ALL_TAB_PARTITIONS.html">ALL_TAB_PARTITIONS</a>   <a href="../orad/USER_TAB_PARTITIONS.html">USER_TAB_PARTITIONS</a> 
  <a href="../orad/DBA_PART_TABLES.html">DBA_PART_TABLES</a>      <a href="../orad/ALL_PART_TABLES.html">ALL_PART_TABLES</a>      <a href="../orad/USER_PART_TABLES.html">USER_PART_TABLES</a></pre><!-- #BeginLibraryItem "/Library/foot_ora.lbi" --><p><script async="" src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
<!-- oracle-footer -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="4275490898"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

