---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_orad.lbi" --><!-- #EndLibraryItem --><h1>DBA_REPOBJECT </h1><p> Information about replicated objects </p> 
 
<pre>Columns
   ___________________________
 
   NESTED_TABLE
      Storage table for a nested table column?
   SNAME
      Name of the object owner
   ONAME
      Name of the object
   TYPE
      Type of the object
   STATUS
      Status of the last create or alter request on the local object
   GENERATION_STATUS
      Status of whether the object needs to generate replication packages
   ID
      Identifier of the local object
   OBJECT_COMMENT
      Description of the replicated object
   GNAME
      Name of the replicated object group
   MIN_COMMUNICATION
      Send only necessary OLD and NEW values for an updated row?
   REPLICATION_TRIGGER_EXISTS
      Internal replication trigger exists?
   INTERNAL_PACKAGE_EXISTS
      Internal package exists?
   GROUP_OWNER
      Owner of the replicated object group</pre>
<p><b>Related:</b></p>
<p><a href="DBA_REPGROUPED_COLUMN.html">DBA_REPGROUPED_COLUMN</a><br>
<a href="DBA_REPCONFLICT.html">DBA_REPCONFLICT</a><br>
<a href="DBA_REPKEY_COLUMNS.html">DBA_REPKEY_COLUMNS</a><br>
<a href="DBA_REPPROP.html">DBA_REPPROP</a><br>
<a href="DBA_REPDDL.html">DBA_REPDDL</a><br>
</p><!-- #BeginLibraryItem "/Library/foot_orad.lbi" --><p>
<!-- oracle-footer -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="4275490898"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="DBA_REPOBJECT.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div>
<!-- #EndLibraryItem -->

