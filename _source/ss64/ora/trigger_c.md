---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_ora.lbi" --><!-- #EndLibraryItem --><h1>CREATE TRIGGER</h1> 
<p>Create a trigger.<br>
  <br>
  Syntax:</p>
<pre>   CREATE [OR REPLACE] TRIGGER [<i>schema</i>.]<i>trigger</i>
      BEFORE <i>event</i>            [WHEN (condition)]
             {<i>pl_sql_block | call_procedure_statement</i>}

   CREATE [OR REPLACE] TRIGGER [<i>schema</i>.]<i>trigger</i>
      AFTER <i>event</i>
           [WHEN (condition)]
             {<i>pl_sql_block | call_procedure_statement</i>}

   CREATE [OR REPLACE] TRIGGER [<i>schema</i>.]<i>trigger</i>
      INSTEAD OF <i>event</i>
           [WHEN (condition)]
             {<i>pl_sql_block | call_procedure_statement</i>}</pre>
<p><i>event </i>can be one or more of the following (separate 
  multiple events with OR)</p>
<pre>   DELETE <i>event_ref referencing_clause</i>
   INSERT <i>event_ref referencing_clause</i>
   UPDATE <i>event_ref referencing_clause</i>
   UPDATE OF column, column… <i>event_ref</i>
   <i>db/ddl_event</i> ON [schema.object] 
   <i>db/ddl_event</i> ON DATABASE

<i>event_ref:</i>
   ON [schema.]<i>table
   </i>ON [schema.]<i>view</i>
<i>   </i>ON [NESTED TABLE <i>nested_table_column</i> OF] [schema.]<i>view</i></pre>
<pre><i>referencing_clause</i>:
   FOR EACH ROW 
   REFERENCING OLD [AS] <i>old</i> [FOR EACH ROW]
   REFERENCING NEW [AS] <i>new</i> [FOR EACH ROW]
   REFERENCING PARENT [AS] <i>parent</i> [FOR EACH ROW]

<i>db/ddl_event</i>:
   ALTER
   ANALYSE
   ASSOCIATE STATISTICS
   AUDIT
   COMMENT
   CREATE
   DDL
   DISASSOCIATE STATISTICS
   DROP
   GRANT
   LOGON
   LOGOFF
   NOAUDIT
   RENAME
   REVOKE
   TRUNCATE
   SERVERERROR
   STARTUP
   SHUTDOWN
   SUSPEND

  Multiple <i>db/ddl_event</i>s can be separated with OR</pre>
<p>Multiple OLD, NEW and PARENT correlation names can be defined in one REFERENCING clause.</p>
<p>Database constraints are a factor of 8x faster than triggers.<br>
  <br>
<i class="quote">"A friend told me to shoot first and ask questions later. I was going to ask him why, but I had to shoot him" ~ John Wayne</i><br>
  <br>
<b> Related Commands:</b></p>
<p><a href="trigger_a.html">ALTER TRIGGER</a> <br>
  <a href="trigger_d.html">DROP TRIGGER</a><br>
  <a href="table_a.html">ALTER TABLE</a> <br>
  <br>
  <b>Related Views:</b></p>
<pre> <a href="../orad/DBA_TRIGGERS.html">DBA_TRIGGERS</a>           <a href="../orad/ALL_TRIGGERS.html">ALL_TRIGGERS</a>           <a href="../orad/USER_TRIGGERS.html">USER_TRIGGERS</a> 
 <a href="../orad/DBA_TRIGGER_COLS.html">DBA_TRIGGER_COLS</a>       <a href="../orad/ALL_TRIGGER_COLS.html">ALL_TRIGGER_COLS</a>       <a href="../orad/USER_TRIGGER_COLS.html">USER_TRIGGER_COLS</a>
 <a href="../orad/DBA_INTERNAL_TRIGGERS.html">DBA_INTERNAL_TRIGGERS</a>  <a href="../orad/ALL_INTERNAL_TRIGGERS.html">ALL_INTERNAL_TRIGGERS</a>  <a href="../orad/USER_INTERNAL_TRIGGERS.html">USER_INTERNAL_TRIGGERS</a>         </pre><!-- #BeginLibraryItem "/Library/foot_ora.lbi" --><p>
<!-- oracle-footer -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="4275490898"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="trigger_c.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

