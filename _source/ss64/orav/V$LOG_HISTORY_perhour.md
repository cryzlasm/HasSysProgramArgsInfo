---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_orav.lbi" --><!-- #EndLibraryItem --><p>SQL*Plus script to list the history of log switches per hour over the last week: </p>
<pre>spool c:\log_hist.txt
SET PAGESIZE 90
SET LINESIZE 150
set heading on
column "00:00" format 9999
column "01:00" format 9999
column "02:00" format 9999
column "03:00" format 9999
column "04:00" format 9999
column "05:00" format 9999
column "06:00" format 9999
column "07:00" format 9999
column "08:00" format 9999
column "09:00" format 9999
column "10:00" format 9999
column "11:00" format 9999
column "12:00" format 9999
column "13:00" format 9999
column "14:00" format 9999
column "15:00" format 9999
column "16:00" format 9999
column "17:00" format 9999
column "18:00" format 9999
column "19:00" format 9999
column "20:00" format 9999
column "21:00" format 9999
column "22:00" format 9999
column "23:00" format 9999
SELECT * FROM (
SELECT * FROM (
SELECT TO_CHAR(FIRST_TIME, 'DD/MM') AS "DAY"
, SUM(TO_NUMBER(DECODE(TO_CHAR(FIRST_TIME, 'HH24'), '00', 1, 0), '99')) "00:00"
, SUM(TO_NUMBER(DECODE(TO_CHAR(FIRST_TIME, 'HH24'), '01', 1, 0), '99')) "01:00"
, SUM(TO_NUMBER(DECODE(TO_CHAR(FIRST_TIME, 'HH24'), '02', 1, 0), '99')) "02:00"
, SUM(TO_NUMBER(DECODE(TO_CHAR(FIRST_TIME, 'HH24'), '03', 1, 0), '99')) "03:00"
, SUM(TO_NUMBER(DECODE(TO_CHAR(FIRST_TIME, 'HH24'), '04', 1, 0), '99')) "04:00"
, SUM(TO_NUMBER(DECODE(TO_CHAR(FIRST_TIME, 'HH24'), '05', 1, 0), '99')) "05:00"
, SUM(TO_NUMBER(DECODE(TO_CHAR(FIRST_TIME, 'HH24'), '06', 1, 0), '99')) "06:00"
, SUM(TO_NUMBER(DECODE(TO_CHAR(FIRST_TIME, 'HH24'), '07', 1, 0), '99')) "07:00"
, SUM(TO_NUMBER(DECODE(TO_CHAR(FIRST_TIME, 'HH24'), '08', 1, 0), '99')) "08:00"
, SUM(TO_NUMBER(DECODE(TO_CHAR(FIRST_TIME, 'HH24'), '09', 1, 0), '99')) "09:00"
, SUM(TO_NUMBER(DECODE(TO_CHAR(FIRST_TIME, 'HH24'), '10', 1, 0), '99')) "10:00"
, SUM(TO_NUMBER(DECODE(TO_CHAR(FIRST_TIME, 'HH24'), '11', 1, 0), '99')) "11:00"
, SUM(TO_NUMBER(DECODE(TO_CHAR(FIRST_TIME, 'HH24'), '12', 1, 0), '99')) "12:00"
, SUM(TO_NUMBER(DECODE(TO_CHAR(FIRST_TIME, 'HH24'), '13', 1, 0), '99')) "13:00"
, SUM(TO_NUMBER(DECODE(TO_CHAR(FIRST_TIME, 'HH24'), '14', 1, 0), '99')) "14:00"
, SUM(TO_NUMBER(DECODE(TO_CHAR(FIRST_TIME, 'HH24'), '15', 1, 0), '99')) "15:00"
, SUM(TO_NUMBER(DECODE(TO_CHAR(FIRST_TIME, 'HH24'), '16', 1, 0), '99')) "16:00"
, SUM(TO_NUMBER(DECODE(TO_CHAR(FIRST_TIME, 'HH24'), '17', 1, 0), '99')) "17:00"
, SUM(TO_NUMBER(DECODE(TO_CHAR(FIRST_TIME, 'HH24'), '18', 1, 0), '99')) "18:00"
, SUM(TO_NUMBER(DECODE(TO_CHAR(FIRST_TIME, 'HH24'), '19', 1, 0), '99')) "19:00"
, SUM(TO_NUMBER(DECODE(TO_CHAR(FIRST_TIME, 'HH24'), '20', 1, 0), '99')) "20:00"
, SUM(TO_NUMBER(DECODE(TO_CHAR(FIRST_TIME, 'HH24'), '21', 1, 0), '99')) "21:00"
, SUM(TO_NUMBER(DECODE(TO_CHAR(FIRST_TIME, 'HH24'), '22', 1, 0), '99')) "22:00"
, SUM(TO_NUMBER(DECODE(TO_CHAR(FIRST_TIME, 'HH24'), '23', 1, 0), '99')) "23:00"
    FROM V$LOG_HISTORY
       WHERE extract(year FROM FIRST_TIME) = extract(year FROM sysdate)
          GROUP BY TO_CHAR(FIRST_TIME, 'DD/MM')
  ) ORDER BY TO_DATE(extract(year FROM sysdate) || DAY, 'YYYY DD/MM') DESC
  ) WHERE ROWNUM &lt;8;
spool off

==========

Sample output..

DAY   00:00 01:00 02:00 03:00 04:00 05:00 06:00 07:00 ...
----- ----- ----- ----- ----- ----- ----- ----- ----- 
17/12     1     0    32     0     0     1     0     3 
16/12     0     1    31     1     0     0     0     3 
15/12     0     1    31     1     0     0     0     3 
14/12     0     0    32     0     1     0     0     3 
13/12     0     1    31     1     0     0     1    58 
12/12     1     0    32     0     1     0     0   223 
11/12     0     1    31     1     0     0     1     3 ...
</pre>
<p><b>Related:</b></p>
<pre><a href="V$LOG_HISTORY.html">V$LOG_HISTORY</a>
<a href="V$LOG.html">V$LOG</a> 
<a href="V$LOGFILE.html">V$LOGFILE</a> 
<a href="V$LOGHIST.html">V$LOGHIST</a> 
</pre><!-- #BeginLibraryItem "/Library/foot_orad.lbi" --><p>
<!-- oracle-footer -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="4275490898"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="V$LOG_HISTORY_perhour.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2015<br>
Some rights reserved</div>
<!-- #EndLibraryItem -->

