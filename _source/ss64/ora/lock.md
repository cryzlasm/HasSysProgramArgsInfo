---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_ora.lbi" --><!-- #EndLibraryItem --><h1>LOCK TABLE Statement </h1> 
<p>Manually lock one or more tables.<br>
  <br>
  Syntax:</p>
<pre>   LOCK TABLE [<i>schema</i>.] <i>table</i> [<i>options</i>] IN <i>lockmode</i> MODE [NOWAIT]

   LOCK TABLE [<i>schema</i>.] <i>view</i> [<i>options</i>] IN <i>lockmode</i> MODE [NOWAIT]

Options:
      PARTITION (<i>partition</i>)
      SUBPARTITION (<i>subpartition</i>)
      @dblink

lockmodes:
      EXCLUSIVE
      SHARE
      ROW EXCLUSIVE
      SHARE ROW EXCLUSIVE
      ROW SHARE* | SHARE UPDATE*</pre>
<p>If NOWAIT is omitted Oracle will wait until the table  is available.</p>
<p>Several tables can be locked with a single command - separate with commas</p>
<p>e.g.LOCK TABLE table1,table2,table3 IN ROW EXCLUSIVE MODE;<b><br>
  </b><br>
  <b>Default Locking Behaviour</b><br>
  <br>
  A pure SELECT will not lock any rows.<br>
  <br>
  INSERT, UPDATE or DELETE's - will place a ROW EXCLUSIVE lock.<br>
  <br>
  SELECT…FROM…FOR UPDATE NOWAIT - will place a ROW EXCLUSIVE lock.<br>
  <br>
  <b>Multiple Locks on the same rows </b>with LOCK TABLE<br>
  <br>
  Even when a row is locked you can always perform a SELECT (because SELECT
      does not lock any rows) in addition to this, each type of lock will allow
      additional
      locks to be granted as follows.<br>
  <br>
  ROW SHARE = Allow ROW EXCLUSIVE or ROW SHARE or SHARE locks to be granted
      to the locked rows.<br>
  <br>
  ROW EXCLUSIVE = Allow ROW EXCLUSIVE or ROW SHARE locks to be granted to the
      locked rows.<br>
  <br>
  SHARE ROW EXCLUSIVE = Allow ROW SHARE locks to be granted to the locked rows.<br>
  <br>
  SHARE = Allow ROW SHARE or SHARE locks to be granted to the locked rows.<br>
  <br>
  EXCLUSIVE = Allow SELECT queries only <br>
  <br>
  Although it is valid to place more than one lock on a row, UPDATES and DELETE's<b> 
  can </b>still cause a <i>wait </i>if a conflicting row lock is held by another
      transaction.<b><br>
      <br>
      </b>* = Oracle 6 optionincluded for compatibility <b><br>
      <br>
      Related Commands:</b></p>
<p><a href="commit.html">COMMIT</a><a href="delete.html"><br>
  DELETE</a><a href="select.html"><br>
  </a><a href="insert.html">INSERT</a><a href="select.html"><br>
  </a><a href="rollback.html">ROLLBACK</a><a href="select.html"> <br>
  SELECT</a><a href="truncate.html"><br>
  </a> <a href="update.html">UPDATE</a> <br>
  <a href="../orap/DBMS_LOCK.html">DBMS_LOCK</a></p>
<p><b>Related Views:</b></p>
<p class="code">  <a href="../orad/DBA_ALL_TABLES.html">DBA_ALL_TABLES</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="../orad/ALL_ALL_TABLES.html">ALL_ALL_TABLES</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="../orad/USER_ALL_TABLES.html">USER_ALL_TABLES</a><br>  
  <a href="../orad/DBA_TABLES.html">DBA_TABLES</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="../orad/ALL_TABLES.html">ALL_TABLES</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="../orad/USER_TABLES.html">USER_TABLES</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="../orad/TAB.html">TAB</a><br>                                                                
  <a href="../orad/DICTIONARY.html">DICTIONARY</a><br>                                                                
  <a href="../orad/DICT_COLUMNS.html">DICT_COLUMNS</a><br>  
  <a href="../orav/V$LOCK.html">V$LOCK</a><br>  
  <a href="../orav/V$_LOCK.html">V$_LOCK</a><br>  
  <a href="../orav/V$LOCKED_OBJECT.html">V$LOCKED_OBJECT</a><br>  
  <a href="../orav/V$LOCKS_WITH_COLLISIONS.html">V$LOCKS_WITH_COLLISIONS</a><br>  
  <a href="../orav/V$LOCK_ACTIVITY.html">V$LOCK_ACTIVITY</a><br>  
<a href="../orav/V$LOCK_ELEMENT.html">V$LOCK_ELEMENT</a> </p><!-- #BeginLibraryItem "/Library/foot_ora.lbi" --><p>
<!-- oracle-footer -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="4275490898"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="lock.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

