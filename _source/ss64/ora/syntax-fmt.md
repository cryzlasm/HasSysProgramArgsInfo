---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_orasyntax.lbi" --><!-- #EndLibraryItem --><h1>Date and Time formats</h1> 
<p> When a date format is used by <a href="syntax-to_char.html">TO_CHAR</a> or <a href="syntax-to_date.html">TO_DATE</a> 
  they return a formatted date/time. When used by <a href="syntax-trunc.html">TRUNC</a> they will return the first 
  day of the period. When used by ROUND the values will round up at mid year/mid 
month (July 1 or 16th day)</p>
<pre> CC    <i>Century</i>
 SCC   Century BC prefixed with -

 YYYY  Year 1956
 SYYY  Year BC prefixed with -
 IYYY  ISO Year 1956
 YY    Year 56
 RR    Year 56 rollover for Y2K compatibility *
 RRRR  Year rollover (accepts 2 digits, returns 4) *
 YEAR  Year spelled out
 SYEAR Year spelled out BC prefixed with -
 BC    BC/AD Indicator *

 Q     Quarter : Jan-Mar=1, Apr-Jun=2

 MM    Month of year 01, 02…12
 MON   JAN, FEB
 MONTH In full [January  ]…[December ]
 FMMONTH In full [January]…[December] no trailing spaces
 RM    Roman Month I, II…XII *

 WW    Week of year 1-52
 W     Week of month 1-5
 IW    ISO std week of year

 DDD   Day of year 1-366 *
 DD    Day of month 1-31
 D     Day of week 1-7
 DAY   In full [Monday   ]…[Sunday   ]
 FMDAY In full [Monday]…[Sunday] no trailing spaces
 DY    MON…SUN
 DDTH  Ordinal Day 7TH
 DDSPTH Spell out ordinal SEVENTH
 J     Julian Day (days since 31/12/4713)

 HH    Hours of day (1-12)
 HH12  Hours of day (1-12)
 HH24  Hours of day (1-24)
 AM    am or pm *
 PM    am or pm *
 A.M.  a.m. or p.m. * 
 P.M.  a.m. or p.m. *
 MI    Minutes 0-59
 SS    Seconds 0-59 *
 SSSSS Seconds past midnight (0-86399) *

 TH    Convert to ordinal format. e.g. 1 becomes 1st
 SP    Spelled format (English.) Add SP to the end of a number element. 
       For example MMSP for months or HHsp for hours. 

 TZD   Abbreviated time zone name. ie PST.
 TZH   Time zone hour displacement
 TZM   Time zone minute displacement
 TZR   Time zone region</pre>
<p>•  The following punctuation<span class="code"> -/,.;: </span>can be included in any date format, any other chars can be included "in quotes"</p>
<p>• Formats marked with <span class="code">*</span> can only be used with 
  TO_CHAR or TO_DATE not TRUNC() or ROUND()</p>
<p>• Formats that start with <span class="code">FM</span> - zeros and blanks are suppressed. <br>
e.g. <br>
to_char(sysdate, '<b>FM</b>Month DD, YYYY'); will return 'June 9, 2005' not 'June <b>09 </b>2005'</p>
<p>• Date formats that are spelled out in characters will adopt the capitalisation of the format<br>
  e.g. <br>
  'MONTH' =JANUARY<br>
'Month' = January</p>
<p><b>Examples</b></p>
<pre>SQL&gt; Select to_char(sysdate, 'yyyy/mm/dd') "Date Today" FROM dual;
 '2010/12/24'

SQL&gt; Select to_char(sysdate, 'FMMonth DD, YYYY') FROM dual;
 'June 9, 2005'

SQL&gt; select to_char(sysdate,'HH24:MI:SS') "Time Now" from dual;
 '14:35:56'</pre>
<p>  <b>Related</b></p>
<p><a href="syntax-numfmt.html">Number formats</a><br>
<a href="syntax-to_char.html">TO_CHAR</a> - Convert to character string <a href="syntax-to_date.html"><br>
TO_DATE</a> - Convert to date value<br>
<a href="http://philip.greenspun.com/sql/dates.html">Oracle Dates</a> - SQL for Web Nerds by Philip Greenspun</p><!-- #BeginLibraryItem "/Library/foot_ora.lbi" --><p>
<!-- oracle-footer -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="4275490898"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="syntax-fmt.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

