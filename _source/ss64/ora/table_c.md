---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_ora.lbi" --><!-- #EndLibraryItem --><h1>CREATE TABLE</h1> 
<p>Create a table.<br>
  <br>
  Syntax:</p>
<pre>   <b>CREATE</b> [GLOBAL TEMPORARY] <b>TABLE</b> [<i>schema</i>.]<i>table</i> (
<i>      column</i> <a href="syntax-datatypes.html">datatype</a> [DEFAULT <i>expr</i>] [<a href="clause_constraint_col.html">column_constraint(s)</a>[,…]] [<i>,column datatype</i> [,…]] )
         [<a href="clause_constraint.html">table_constraint </a>[,…]]
           [<a href="clause_constraint.html">table_ref_constraint</a> [,…]]
              [ON COMMIT {<u>DELETE</u>|PRESERVE} ROWS]
                 <i><a href="#storage_options">storage_options</a></i>  [COMPRESS <i>int</i>|NOCOMPRESS]
                [<a href="clause_lob.html">LOB_storage_clause</a>][<a href="clause_varray2.html">varray_clause</a>][<a href="#nested_storage_clause">nested_storage_clause</a>] [<a href="#XML_type_clause">XML_type_clause</a>]
                    <a href="clause_partition.html"><i>Partitioning_clause</i></a>
                       [[NO]CACHE] [[NO]ROWDEPENDENCIES] [[NO]MONITORING] [PARALLEL <a href="clause_parallel.html">parallel_clause</a>]
                          [ENABLE <a href="clause_enable.html">enable_clause</a> | DISABLE <a href="clause_disable.html">disable_clause</a>]
                             {ENABLE|DISABLE} ROW MOVEMENT
                                [AS <a href="select.html">subquery</a>]

<b>   CREATE</b> [GLOBAL TEMPORARY] <b>TABLE</b> [<i>schema</i>.]<i>table</i> (
<i>      column</i> <a href="syntax-datatypes.html">datatype</a> [DEFAULT <i>expr</i>] [<a href="clause_constraint_col.html">column_constraint(s)</a>[,…]] [<i>,column datatype</i> [,…]] )
         [<a href="clause_constraint.html">table_constraint </a>[,…]]
           [<a href="clause_constraint.html">table_ref_constraint</a> [,…]]
              [ON COMMIT {<u>DELETE</u>|PRESERVE} ROWS]
                 <b>CLUSTER </b><i>cluster_name</i> (<i>col1</i>, <i>col2</i>,… )
                [<a href="clause_lob.html">LOB_storage_clause</a>][<a href="clause_varray2.html">varray_clause</a>][<a href="#nested_storage_clause">nested_storage_clause</a>] [<a href="#XML_type_clause">XML_type_clause</a>]
                    <a href="clause_partition.html"><i>Partitioning_clause</i></a>
                       [[NO]CACHE] [[NO]ROWDEPENDENCIES] [[NO]MONITORING] [PARALLEL <a href="clause_parallel.html">parallel_clause</a>]
                          [ENABLE <a href="clause_enable.html">enable_clause</a> | DISABLE <a href="clause_disable.html">disable_clause</a>]
                             {ENABLE|DISABLE} ROW MOVEMENT
                                [AS <a href="select.html">subquery</a>] 

   <b>CREATE</b> [GLOBAL TEMPORARY] <b>TABLE</b> [<i>schema</i>.]<i>table</i> (
      <i>column</i> <a href="syntax-datatypes.html">datatype</a> [DEFAULT <i>expr</i>] [<a href="clause_constraint_col.html">column_constraint(s)</a>] [<i>,column datatype</i> [,…]]] )
         [<a href="clause_constraint.html">table_constraint </a>[,…]]
           [<a href="clause_constraint.html">table_ref_constraint</a> [,…]]
              [ON COMMIT {<u>DELETE</u>|PRESERVE} ROWS]
                 <b>ORGANIZATION {HEAP</b> [<i><a href="#storage_options">storage_options</a></i>] [COMPRESS <i>int</i>|NOCOMPRESS]
                              | <b>INDEX</b> <i><a href="#idx_organized_tbl_clause">idx_organized_tbl_clause</a></i>
                              | <b>EXTERNAL</b> <i><a href="#external_table_clause">external_table_clause </a></i><b>}</b>
                [<a href="clause_lob.html">LOB_storage_clause</a>][<a href="clause_varray2.html">varray_clause</a>][<a href="#nested_storage_clause">nested_storage_clause</a>] [<a href="#XML_type_clause">XML_type_clause</a>]
                    <a href="clause_partition.html"><i>Partitioning_clause</i></a>
                       [[NO]CACHE] [[NO]ROWDEPENDENCIES] [[NO]MONITORING] [PARALLEL <a href="clause_parallel.html">parallel_clause</a>]
                          [ENABLE <a href="clause_enable.html">enable_clause</a> | DISABLE <a href="clause_disable.html">disable_clause</a>]
                             {ENABLE|DISABLE} ROW MOVEMENT
                                [AS <a href="select.html">subquery</a>] 

   <b>CREATE</b> <b>TABLE</b> [<i>schema</i>.]<i>table</i> <b>OF XMLTYPE</b> [<a href="#XML_type_clause">XML_type_clause</a>]

<i>storage_options</i><a id="storage_options"></a>:
   PCTFREE <i>int</i>
   PCTUSED <i>int</i>
   INITTRANS <i>int</i>
   MAXTRANS <i>int</i>
   STORAGE <a href="clause_storage.html">storage_clause</a>
   TABLESPACE <i>tablespace</i>
   [LOGGING|NOLOGGING]

<i>idx_organized_tbl_clause</i><a id="idx_organized_tbl_clause"></a>:
   <i>storage_option(s) 
   </i>{MAPPING TABLE | NOMAPPING}
   [PCTTHRESHOLD <i>int</i>]
   [COMPRESS <i>int</i>|NOCOMPRESS]
   [ [INCLUDING <i>column_name</i>] OVERFLOW [<i>storage_option(s)</i>] ]

<i>nested_storage_clause</i><a id="nested_storage_clause"></a>:
   NESTED TABLE {<i>nested_item</i> | COLUMN_VALUE}
      [ [ELEMENT] IS OF TYPE (ONLY <i>type</i>) ]] |  [ [NOT] SUBSTITUTABLE AT ALL LEVELS ]] 
      STORE AS <i>storage_table</i> 
         [RETURN AS {LOCATOR|VALUE} ]

<i>XML_type_clause</i><a id="XML_type_clause"></a>:
   [XMLTYPE [COLUMN] <i>column </i>[STORE AS OBJECT RELATIONAL] ]
       [[XMLSCHEMA <i>xmlschema_URL</i>] ELEMENT {<i>element</i> |<i>xmlschema_URL</i>#<i>element</i>}]

   [XMLTYPE [COLUMN] <i>column </i>[STORE AS CLOB LOB_Segname (<a href="clause_lob.html"><i>LOB_Params</i></a>)]]
       [[XMLSCHEMA <i>xmlschema_URL</i>] ELEMENT {<i>element</i> |<i>xmlschema_URL</i>#<i>element</i>}]

   [XMLTYPE [COLUMN] <i>column </i>[STORE AS CLOB <a href="clause_lob.html"><i>LOB_Params</i></a>] ]
       [[XMLSCHEMA <i>xmlschema_URL</i>] ELEMENT {<i>element</i> |<i>xmlschema_URL</i>#<i>element</i>}]

<i>external_table_clause</i><a id="external_table_clause"></a>:
   ([TYPE <i>access_driver_type</i>]
      DEFAULT DIRECTORY <i>directory</i> [ACCESS PARAMETERS {USING CLOB <i>subquery</i> | (<i>opaque_format_spec</i>) }]
         LOCATION (<i>directory</i>:'<i>location_specifier</i>' [,<i>directory</i>2:'<i>location_specifier</i>2'…)
         ) [REJECT LIMIT {<i>int</i>|UNLIMITED}]</pre>
<p>Missing from this page are the options for creating OBJECT 
  TABLES - see the Oracle docs for this.</p>
<p>To create a table requires the CREATE TABLE <a href="grant.html">privilege</a> plus enough <a href="user_a.html">quota</a> on the tablespace where the table is to be created. </p>
<p><b>Examples</b></p>
<p class="code">create table SIMPLE (MY_NUM number primary key);</p>
<p class="code">create table COPY_OF_EMP as <br>
select * from EMP;</p>
<p class="code"> create table EMPTY_COPY as <br>
select * from EMP where 1 = 0;</p>
<p class="code"><br>
  create table ACCOUNTS(<br>
  AC_ID_PK number primary key,<br>
  AC_STATUS number,<br>
  AC_COUNTRY_ID number default 44,<br>
  AC_CREATED date default sysdate, <br>
  AC_ACCOUNT varchar2(50)<br>
  ) <br>
  tablespace DATA; </p>
<p><span class="code"><br>
  create table SALES(<br>
SA_ID_PK number primary key,<br>
SA_PRODUCT_ID number not null,<br>
SA_DATE_PART date not null,<br>
SA_COST number (12,2) not null<br>
)<br>
partition by range (SA_DATE_PART) (<br>
partition P01_JAN values less than (to_date('2010-02-01','yyyy-mm-dd')),<br>
partition P02_FEB values less than (to_date('2010-03-01','yyyy-mm-dd')),<br>
partition P03_MAR values less than (to_date('2010-04-01','yyyy-mm-dd')),<br>
partition P04_APR values less than (to_date('2010-05-01','yyyy-mm-dd')), <br>
partition P05_REST values less than (maxvalue)  
<br>
);</span><br>
<i><br>
<span class="quote">“Make everything as simple as possible, but not simpler” ~ Albert Einstein</span></i><br>
<br>
<b>Related:</b><br>
<br>
<a href="index_a.html">ALTER INDEX</a><br>
<a href="view_a.html">ALTER VIEW</a><br>
<a href="comment.html">COMMENT</a> - Add a comment to a table or a column. <br>
</p>
<pre>  <a href="../orav/V$RESERVED_WORDS.html">V$RESERVED_WORDS</a> 
  <a href="../orad/DBA_ALL_TABLES.html">DBA_ALL_TABLES</a>       <a href="../orad/ALL_ALL_TABLES.html">ALL_ALL_TABLES</a>       <a href="../orad/USER_ALL_TABLES.html">USER_ALL_TABLES</a>
  <a href="../orad/DBA_TABLES.html">DBA_TABLES</a>           <a href="../orad/ALL_TABLES.html">ALL_TABLES</a>           <a href="../orad/USER_TABLES.html">USER_TABLES</a>          <a href="../orad/TAB.html">TAB</a>
  <a href="../orad/DBA_PART_TABLES.html">DBA_PART_TABLES</a>      <a href="../orad/ALL_PART_TABLES.html">ALL_PART_TABLES</a>      <a href="../orad/USER_PART_TABLES.html">USER_PART_TABLES</a>   
</pre><!-- #BeginLibraryItem "/Library/foot_ora.lbi" --><p><script async="" src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
<!-- oracle-footer -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="4275490898"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

