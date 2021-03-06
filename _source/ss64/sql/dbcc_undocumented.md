---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_sql.lbi" --><!-- #EndLibraryItem --><h1>DBCC - Undocumented commands</h1>
<p>These commands may affect system performance and/or force table-level locks.<br>
There is no 
guarantee these commands will remain available in any future release of SQL server.</p>
<p>DBCC activecursors [(spid)]</p>
<p>DBCC addextendedproc (function_name, dll_name) </p>
<p>DBCC addinstance (objectname, instancename) </p>
<p>DBCC adduserobject (name) </p>
<p>DBCC auditevent (eventclass, eventsubclass, success, loginname, rolename, dbusername, loginid) </p>
<p>DBCC autopilot (typeid, dbid, tabid, indid, pages [,flag]) </p>
<p>DBCC balancefactor (variance_percent) </p>
<p>DBCC bufcount [(number_of_buffers)] </p>
<p>DBCC buffer ( {'dbname' | dbid} [, objid [, number [, printopt={0|1|2} ] 
[, dirty | io | kept | rlock | ioerr | hashed ]]]) <br>
<br>
DBCC bytes ( startaddress, length ) </p>
<p>DBCC cachestats </p>
<p>DBCC callfulltext </p>
<p>DBCC checkdbts (dbid, newTimestamp)] </p>
<p>DBCC checkprimaryfile ( {'FileName'} [, opt={0|1|2|3} ]) </p>
<p>DBCC cacheprofile [( {actionid} [, bucketid]) </p>
<p>DBCC clearspacecaches ('database_name'|database_id, 
'table_name'|table_id, 'index_name'|index_id) </p>
<p>DBCC collectstats (on | off) </p>
<p>DBCC config </p>
<p>DBCC cursorstats ([spid [,'clear']]) </p>
<p>DBCC dbinfo [('dbname')] </p>
<p>DBCC dbrecover (dbname [, IgnoreErrors]) </p>
<p>DBCC dbreindexall (db_name/db_id, type_bitmap) </p>
<p>DBCC dbrepair ('dbname', DROPDB [, NOINIT]) </p>
<p>DBCC dbtable [({'dbname' | dbid})] </p>
<p>DBCC debugbreak </p>
<p>DBCC deleteinstance (objectname, instancename) </p>
<p>DBCC des [( {'dbname' | dbid} [, {'objname' | objid} ])] </p>
<p>DBCC detachdb [( 'dbname' )] </p>
<p>DBCC dropextendedproc (function_name) </p>
<p>DBCC dropuserobject ('object_name') </p>
<p>DBCC dumptrigger ({'BREAK', {0 | 1{% raw %}}}{% endraw %} | 'DISPLAY' | {'SET', exception_number} 
| {'CLEAR', exception_number}) </p>
<p>DBCC errorlog </p>
<p>DBCC extentinfo [({'database_name'| dbid | 0} 
[,{'table_name' | table_id} [, {'index_name' | index_id | -1}]])] </p>
<p>DBCC fileheader [( {'dbname' | dbid} [, fileid]) </p>
<p>DBCC fixallocation [({'ADD' | 'REMOVE'}, 
{'PAGE' | 'SINGLEPAGE' | 'EXTENT' | 'MIXEDEXTENT'}
, filenum, pagenum [, objectid, indid]) </p>
<p>DBCC flush ('data' | 'log', dbid) </p>
<p>DBCC flushprocindb (database) </p>
<p>DBCC freeze_io (db) </p>
<p>DBCC getvalue (name) </p>
<p>DBCC icecapquery ('dbname', stored_proc_name 
[, #_times_to_icecap (-1 infinite, 0 turns off)])<br>
Use 'dbcc icecapquery (printlist)' to see list of SP's to profile.<br>
Use 'dbcc icecapquery (icecapall)' to profile all SP's.<br>
<br>
DBCC incrementinstance (objectname, countername, instancename, value) </p>
<p>DBCC ind ( { 'dbname' | dbid }, { 'objname' | objid }, { indid | 0 | -1 | -2 } )</p>
<p>DBCC invalidate_textptr (textptr)</p>
<p>DBCC invalidate_textptr_objid (objid)</p>
<p>DBCC iotrace ( { 'dbname' | dbid | 0 | -1 }
, { fileid | 0 }, bufsize, [ { numIOs | -1 } 
[, { timeout (sec) | -1 } [, printopt={ 0 | 1 }]]] ) </p>
<p>DBCC latch ( address [, 'owners'] [, 'stackdumps']) </p>
<p>DBCC lock ([{'DUMPTABLE' | 'DUMPSTATS' | 'RESETSTATS' | 'HASH'}] | 
[{'STALLREPORTTHESHOLD', stallthreshold}]) </p>
<p>DBCC lockobjectschema ('object_name') </p>
<p>DBCC log ([dbid[,{0|1|2|3|4}[,['lsn','[0x]x:y:z']|['numrecs',num]|['xdesid','x:y']
| ['extent','x:y']|['pageid','x:y']|['objid',{x,'y'}]|['logrecs',
{'lop'|op}...]|['output',x,['filename','x']]...]]])</p>
<p>DBCC loginfo [({'database_name' | dbid})] </p>
<p>DBCC matview ({'PERSIST' | 'ENDPERSIST' | 'FREE' | 'USE' | 'ENDUSE'}) </p>
<p>DBCC memobjlist [(memory object)] </p>
<p>DBCC memorymap </p>
<p>DBCC memorystatus </p>
<p>DBCC memospy </p>
<p>DBCC memusage ([IDS | NAMES], [Number of rows to output]) </p>
<p>DBCC monitorevents ('sink' [, 'filter-expression']) </p>
<p>DBCC newalloc - please use checkalloc instead </p>
<p>DBCC no_textptr (table_id , max_inline) </p>
<p>DBCC page ( {'dbname' | dbid}, filenum, pagenum 
[, printopt={0|1|2|3} ][, cache={0|1} ]) </p>
<p>DBCC perflog </p>
<p>DBCC perfmon </p>
<p>DBCC pglinkage (dbid, startfile, startpg, number, printopt={0|1|2}
, targetfile, targetpg, order={1|0}) </p>
<p>DBCC procbuf [({'dbname' | dbid}[, {'objname' | objid}
[, nbufs[, printopt = { 0 | 1 } ]]] )] </p>
<p>DBCC prtipage (dbid, objid, indexid [, [{% raw %}{{{% endraw %}level, 0} 
| {filenum, pagenum{% raw %}}}{% endraw %}] [,printopt]]) </p>
<p>DBCC pss [(uid[, spid[, printopt = { 1 | 0 }]] )] </p>
<p>DBCC readpage ({ dbid, 'dbname' }, fileid, pageid
, formatstr [, printopt = { 0 | 1} ]) </p>
<p>DBCC rebuild_log (dbname [, filename]) </p>
<p>DBCC renamecolumn (object_name, old_name, new_name) </p>
<p>DBCC resource </p>
<p>DBCC row_lock (dbid, tableid, set) - Not Needed </p>
<p>DBCC ruleoff ({ rulenum | rulestring } [, { rulenum | rulestring } ]+) </p>
<p>DBCC ruleon ( rulenum | rulestring } [, { rulenum | rulestring } ]+) </p>
<p>DBCC setcpuweight (weight) </p>
<p>DBCC setinstance (objectname, countername, instancename, value) </p>
<p>DBCC setioweight (weight) </p>
<p>DBCC showdbaffinity </p>
<p>DBCC showfilestats [(file_num)] </p>
<p>DBCC showoffrules </p>
<p>DBCC showonrules </p>
<p>DBCC showtableaffinity (table) </p>
<p>DBCC showtext ('dbname', {textpointer | {fileid, pageid, slotid[,option]{% raw %}}}{% endraw %})</p>
<p>DBCC showweights</p>
<p>DBCC sqlmgrstats </p>
<p>DBCC stackdump [( {uid[, spid[, ecid]} | {threadId, 'THREADID'}] )] </p>
<p>DBCC tab ( dbid, objid ) </p>
<p>DBCC tape_control {'query' | 'release'}[,('\\.\tape')] </p>
<p>DBCC tec [( uid[, spid[, ecid]] )] </p>
<p>DBCC textall [({'database_name'|database_id}[, 'FULL' | FAST] )] </p>
<p>DBCC textalloc ({'table_name'|table_id}[, 'FULL' | FAST]) </p>
<p>DBCC thaw_io (db) </p>
<p>DBCC upgradedb (db) </p>
<p>DBCC usagegovernor (command, value) </p>
<p>DBCC useplan [(number_of_plan)] </p>
<p>DBCC wakeup (spid) </p>
<p>DBCC writepage ({ dbid, 'dbname' }, fileid, pageid, offset, length, data)</p>
<p><i>In early versions of SQL Server - DBCC stood for "Database Consistency Checker", now renamed as Database Console Command.</i></p>
<p><b>Related (current) commands:</b></p>
<p> 
  <a href="dbcc_check.html">DBCC CHECK...</a> <a href="dbcc_cleantable.html"><br>
  DBCC CLEANTABLE</a> <a href="dbcc_dll.html"><br>
  DBCC dllname</a> <a href="dbcc_dropclean.html"><br>
  DBCC DROPCLEANBUFFERS</a> <a href="dbcc_free.html"><br>
  DBCC FREE...</a> CACHE <a href="dbcc_help.html"><br>
  DBCC HELP</a> <a href="dbcc_inputbuffer.html"><br>
  DBCC INPUTBUFFER</a> <a href="dbcc_opentran.html"><br>
  DBCC OPENTRAN</a> <a href="dbcc_inputbuffer.html"><br>
  DBCC OUTPUTBUFFER</a> <a href="dbcc_proccache.html"><br>
  DBCC PROCCACHE</a> <a href="dbcc_showstats.html"><br>
  DBCC SHOW_STATISTICS</a> <a href="dbcc_shrinkdb.html"><br>
  DBCC SHRINKDATABASE</a> <a href="dbcc_shrinkfile.html"><br>
  DBCC SHRINKFILE</a> <a href="dbcc_sqlperf.html"><br>
  DBCC SQLPERF</a> <a href="dbcc_trace.html"><br>
  DBCC TRACE...</a> <a href="dbcc_updateusage.html"><br>
  DBCC UPDATEUSAGE</a> <a href="dbcc_useroptions.html"><br>
  DBCC USEROPTIONS</a></p><!-- #BeginLibraryItem "/Library/foot_sql.lbi" --><p>
<!-- ss64-sql -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="6953563613"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="dbcc_undocumented.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

