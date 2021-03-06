---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_ora.lbi" --><!-- #EndLibraryItem --><h1>INSERT Statement </h1> 
<p>Add data to a table, view, or snapshot.<br>
  <br>
  Syntax:</p>
<pre>   INSERT [<i><a href="select_hints.html">hint</a></i>] INTO [<i>schema</i>.]<i>table</i> [@<i>dblink</i>] [<i>t_alias</i>] (<i>column</i>, <i>column</i>,…)
      VALUES (<i>expr</i>, <i>expr</i>…)

   INSERT [<i><a href="select_hints.html">hint</a></i>] INTO [<i>schema</i>.]<i>table</i>
      [[SUB]PARTITION (<i>ptn_name</i>)] [<i>t_alias</i>] (<i>column</i>, <i>column</i>,…)
         VALUES (<i>expr</i>, <i>expr</i>…)

   INSERT [<i><a href="select_hints.html">hint</a></i>] INTO <i>subquery</i> 
      WITH [READ ONLY | CHECK OPTION [CONSTRAINT constraint] ]
         [<i>t_alias</i>] (<i>column</i>, <i>column</i>,…)
            VALUES (<i>expr</i>, <i>expr</i>…)

   INSERT
      WHEN (<i>condition</i>) THEN
        INTO <i>table</i> (<i>column</i>, <i>column</i>,…)
        VALUES (<i>expr</i>, <i>expr</i>…)
      WHEN (condition) THEN
        INTO <i>table</i> (<i>column</i>, <i>column</i>,…)
        VALUES (<i>expr</i>, <i>expr</i>…)
      ELSE
        INTO <i>table_name</i> (<i>column</i>, <i>column</i>,…)
        VALUES (<i>expr</i>, <i>expr</i>…)</pre>
<p>In the syntax above, the VALUES clause can be replaced with a sub query. <br>    
The VALUES clause can also be followed by a RETURNING clause to assign the results to a variable:</p>
<pre>       [RETURNING <i>expr</i>, <i>expr</i>… INTO <i>host_variable</i> | <i>plsql_variable</i>]
</pre>
<p>The VALUES keyword is required only when directly inserting data values, rather than using a subquery. </p>
<p><b>Examples:</b></p>
<p><span class="code">SQL&gt; Insert into demotable (col1, col2, col3) <br>                  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;values (val1, val2, val3);</span><br>
<br>
 Inserting values into three columns:<br>
<span class="code">SQL&gt; Insert INTO staff (id, surname,firstname) VALUES(123, 'Smith','John');</span></p>
<p>The column names can be omitted if the values are listed in the same order as the table columns, (obviously this can break if extra columns are  added to the table later on):<br>
<span class="code">SQL&gt; Insert INTO staff VALUES(123, 'Smith','John');</span></p>
<p>Insert using a subquery:</p>
<pre>SQL&gt; Insert into staff(firstname, surname) (Select emp_first, emp_surname From employees);
</pre>

<p>Copy specific columns (and rows) from one table to another:</p>
<pre>Insert into postables<br>  (postable_id, postable_name, dept, auth_name) <br>VALUES( <br>  (Select postables_seq.nextval),
  (Select 'some static text' postable_name),<br>  (Select dept      From cost_centres Where cc_code = 123), <br>  (Select auth_name From authorisers  Where auth_code = 'Z5f')<br>)</pre>
<p>-- The same as above written to select alias names:</p>
<pre>insert into postables<br>  (postable_id, postable_name, dept, auth_name)<br>  <b>(</b>select AA,BB,CC,DD <br>  from<br>    (Select postables_seq.nextval AA), 
    (Select 'some static text'    BB),<br>    (Select dept                  CC From cost_centres Where cc_code = 123),<br>    (Select auth_name             DD From authorisers  Where auth_code = 'Z5f')<b>)</b>;
</pre>
<p class="quote"><i>"When debugging, novices insert corrective code; experts remove defective code" ~ Richard Pattis </i></p>
<p><b>Related:</b></p>
<p><a href="delete.html">DELETE</a> - Delete rows<br>
<a href="explain.html">EXPLAIN PLAN</a> <br>
<a href="merge.html">MERGE</a> - Select rows for update or insert into a table.<br>
<a href="select.html">SELECT</a><br>
<a href="truncate.html">TRUNCATE</a> - Empty table<br>
<a href="update.html">UPDATE</a> - Update rows</p>
<p class="code">&nbsp;<a href="../orad/DBA_SNAPSHOTS.html">DBA_SNAPSHOTS</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="../orad/ALL_SNAPSHOTS.html">ALL_SNAPSHOTS</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="../orad/USER_SNAPSHOTS.html">USER_SNAPSHOTS</a> <br>  
 &nbsp;<a href="../orad/DBA_ALL_TABLES.html">DBA_ALL_TABLES</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="../orad/ALL_ALL_TABLES.html">ALL_ALL_TABLES</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="../orad/USER_ALL_TABLES.html">USER_ALL_TABLES</a><br>  
 &nbsp;<a href="../orad/DBA_TABLES.html">DBA_TABLES</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="../orad/ALL_TABLES.html">ALL_TABLES</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="../orad/USER_TABLES.html">USER_TABLES</a><br>
 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="../orad/TAB.html">TAB</a><br>  
 &nbsp;<a href="../orad/DBA_VIEWS.html">DBA_VIEWS</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="../orad/ALL_VIEWS.html">ALL_VIEWS</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="../orad/USER_VIEWS.html">USER_VIEWS</a><br>                                                                
 &nbsp;<a href="../orad/DICTIONARY.html">DICTIONARY</a><br>                                                                
&nbsp;<a href="../orad/DICT_COLUMNS.html">DICT_COLUMNS</a></p><!-- #BeginLibraryItem "/Library/foot_ora.lbi" --><p>
<!-- oracle-footer -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="4275490898"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="insert.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

