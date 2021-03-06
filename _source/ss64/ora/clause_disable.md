---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_ora.lbi" --><!-- #EndLibraryItem --><h1>DISABLE Clause</h1> 
<p>Disable a constraint or disable ALL triggers associated with a  table. </p>
<p>Syntax:</p>
<pre>   DISABLE [[NO]<a href="syntax-constraints.html#validate">VALIDATE</a>] [UNIQUE] (column [,…] ) <i>options</i>  [CASCADE] [{DROP|KEEP} INDEX]
   DISABLE [[NO]<a href="syntax-constraints.html#validate">VALIDATE</a>] PRIMARY KEY <i>options</i> [CASCADE] [{DROP|KEEP} INDEX]
   DISABLE [[NO]<a href="syntax-constraints.html#validate">VALIDATE</a>] [UNIQUE] CONSTRAINT <i>constraint_name</i> <i>options</i>  [CASCADE] [{DROP|KEEP} INDEX]
   DISABLE ALL TRIGGERS

Options:
   
    USING INDEX <i>storage_options</i>
    USING INDEX (<a href="index_c.html">create_index_statement</a>)
    SORT | NOSORT
    LOCAL | GLOBAL PARTITION BY RANGE (<i>column_list</i>)
               (PARTITION <i>partition</i>
                   VALUES LESS THAN (<i>value</i> [,<i>value</i>…]) <i>storage_options</i>
    EXCEPTIONS INTO [schema.]table

<i>storage_options</i>:
       PCTFREE <i>int</i>
       PCTUSED <i>int</i>
       INITTRANS <i>int</i>
       MAXTRANS <i>int</i>
       STORAGE <a href="clause_storage.html">storage_clause</a>
       TABLESPACE <i>tablespace</i>
       LOGGING|NOLOGGING</pre>
<p>notes:<br>
  If more than one option is specified - you only need the first "USING INDEX" 
  <br>
  <br>
  If EXCEPTIONS INTO is specified it should be the last option listed.</p>
<p><b>Related Commands:</b></p>
<p><a href="clause_constraint.html">constraint</a> - clause<br>
  <a href="clause_drop.html">drop</a> constraint - clause<br>
  <a href="clause_enable.html">enable</a> - Enable a constraint <br>
  <a href="table_a.html">ALTER TABLE</a></p>
<p><b>Related Views:</b></p>
<pre> <a href="../orad/DBA_CONSTRAINTS.html">DBA_CONSTRAINTS</a>    <a href="../orad/ALL_CONSTRAINTS.html">ALL_CONSTRAINTS</a>    <a href="../orad/USER_CONSTRAINTS.html">USER_CONSTRAINTS</a> 
 <a href="../orad/DBA_CONS_COLUMNS.html">DBA_CONS_COLUMNS</a>   <a href="../orad/ALL_CONS_COLUMNS.html">ALL_CONS_COLUMNS</a>   <a href="../orad/USER_CONS_COLUMNS.html">USER_CONS_COLUMNS</a> </pre><!-- #BeginLibraryItem "/Library/foot_ora.lbi" --><p>
<!-- oracle-footer -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="4275490898"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="clause_disable.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

