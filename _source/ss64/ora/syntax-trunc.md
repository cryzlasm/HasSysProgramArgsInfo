---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_orasyntax.lbi" --><!-- #EndLibraryItem --><h1>TRUNC function </h1>
<p> The TRUNCATE function (abbreviated as TRUNC) truncates either a number or a datetime value. </p>
<pre>Syntax
      TRUNC (<i>datetime</i>, [<i>fmt</i>])

      TRUNC (<i>number</i>, <i>truncvalue</i>)

Key
   datetime   A datetime expression that identifies a date and time number.

   fmt        A text expression that specifies one of the date/time <a href="syntax-fmt.html">format models</a>.

   number     The number to truncate.

   <i>truncvalue</i> An INTEGER value that specifies the number of places to the right
              or left of the decimal point to which number should be truncated.
              When truncvalue is positive, digits to the right of the decimal point
              are truncated. When it is negative, digits to the left of the decimal
              point are truncated (that is, made zero). 
              If truncvalue is omitted, <i>number</i> is truncated to 0 decimal places.</pre>
<p> <b>Examples</b></p>
<pre>SQL&gt; SHOW TRUNC (TO_DATE('27-OCT-11'),<i>'</i>YEAR<i>'</i>)
    01-JAN-11</pre>
 <p>The value  specified for <i>format </i>will determine the value returned:</p>
<pre>SQL&gt; SHOW TRUNC(mydatetime, 'MON')<br>    01-AUG-11<br>SQL&gt; SHOW TRUNC(mydatetime, 'DD')<br>    07-AUG-11
SQL&gt; SHOW TRUNC(to_date('22-AUG-11'), '<a href="http://en.wikipedia.org/wiki/Fiscal_year">Q</a>')
    01-JUL-11
SQL&gt; SHOW TRUNC(123.4567, 2)
    123.45</pre>
<p>The following SQL calculates the time between two date/time fields <span class="code">dt1</span> and <span class="code">dt2</span> and gives you the result  in the form hh:mi (eg 17:23)<br>
This works because the database stores date/times as fractions of a day 
so 06:00 is stored as 0.25. (The result contains a colon so it is a character value.)</p>
<p class="code">trunc(24*(dt2-dt1))||':'||round(60*(24*(dt2-dt1)- trunc(24*(dt2-dt1))))</p>
<p>Hours between <br>
<span class="code">trunc(24*(dt2-dt1))</span></p>
<p>Minutes between <br>
<span class="code">round(60*(24*(dt2-dt1)-trunc(24*(dt2-dt1))))</span></p>
<p><b>Related</b></p>
<p><a href="syntax-to_char.html">TO_CHAR</a> - Convert to character String<br>
<a href="syntax-to_number.html">TO_NUMBER</a> - Convert to numeric format<br>
<a href="truncate.html">TRUNCATE TABLE </a><br>
<a href="syntax-functions.html">Oracle SQL Functions</a></p><!-- #BeginLibraryItem "/Library/foot_ora.lbi" --><p>
<!-- oracle-footer -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="4275490898"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="syntax-trunc.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

