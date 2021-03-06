---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_orasyntax.lbi" --><!-- #EndLibraryItem --><h1>Oracle Unicode Data Types</h1> 
<p>Oracle  supports Unicode data through NCHAR, NVARCHAR2, and
NCLOB datatypes. (in Version 8 and above)</p>
<p>Unicode character data can be stored in a database
  even if the database character set is not Unicode. The exact character set used by NCHAR/NVARCHAR2 can vary depending on the setting of the national character set when
the database is created. </p>
<p>The datatypes CLOB and NCLOB can store up to 4 gigabytes of character data
  or national char. set data. LOB datatypes  replace the depracated LONG
  datatype.</p>
<p>The BFILE datatype stores unstructured binary data in operating-system files
  outside the database. <br>
  A BFILE column or attribute stores a file locator that points to an external
file containing the data. </p>
<p><a href="syntax-datatypes.html">Full list of Datatypes</a></p>
<h2>Date formats</h2>
<blockquote>
<p>  For input and output of <a href="../dates.html">dates</a>, the standard Oracle default date format is DD-MON-YY,
  ('13-NOV-92')<br>
  You can change this default date format for an instance with the parameter <a href="syntax-nls.html">NLS_DATE_FORMAT</a>. <br>
  You can also change it during a user session with the ALTER SESSION statement. </p>
</blockquote>
<h2> Time formats</h2>
<blockquote>
<p>  To account for time zone differences, the new datatype 'TIMESTAMP WITH LOCAL
    TIME ZONE' <br>
  Can be used to store time zone adjusted data <br>
An example:</p>
<p class="code">SQL&gt;<br>
  create table timetest (<br>
  col1 timestamp,<br>
  col2 timestamp with time zone,<br>
  col3 timestamp with local time zone);</p>
<p class="code">insert into timetest values (sysdate,sysdate,sysdate);<br>
  commit;</p>
<p class="code">select * from timetest;<br>
  alter session set time_zone='America/New_York';<br>
  select * from timetest;</p>
<p>See the SQL Reference manual for full details about this syntax.</p>
</blockquote>
<h2>Nulls Indicate Absence of Value</h2>
<blockquote>
<p>  A null is the absence of a value. Nulls indicate missing or unknown data. A
null should not be used to imply any other value, such as zero. </p>
<p>A column allows nulls unless a NOT NULL or PRIMARY KEY integrity constraint
  has been defined for the column.</p>
<p>Nulls columns generally require 1 byte to store the length of the column (zero).<br>
  Trailing nulls (at the end of a row) require no storage because a new row header
    signals that the remaining columns in the previous row are null. For example,
    if the last three columns of a table are null, no information is stored for
    those columns. </p>
<p>To identify nulls in SQL, use the IS NULL predicate. <br>
  Use the SQL function NVL to convert nulls to non-null values. <br>
  <br>
  A bitmap index will include any NULLs, a binary tree index won't.</p>
</blockquote>
<h2>Column Order</h2>
<blockquote>
<p>Try to place columns that frequently contain nulls last so that rows take
  less space. <br>
  Note, the benefits of this are lost if the table includes a LONG column (so
  use <a href="syntax-datatypes.html">BLOB</a> instead)</p>
</blockquote>
<h2>Default Values for Columns</h2>
<blockquote>
<p>  You can assign a default value to a column so that when a new row is inserted
    and a value for the column is omitted a value is supplied automatically.
    If a default value is not explicitly defined for a column, then the default
for the column is implicitly set to NULL.</p>
<p><span class="code">create table ACCOUNTS(<br>
AC_ID_PK number primary key,<br>
AC_COUNTRY_ID number default 44,<br>
AC_CREATED date default sysdate, <br>
)</span></p>
</blockquote>
<p><span class="quote"><i>"The estimated cost of the National ID scheme is £3.1bn, Chris Pond
  MP, has put benefit fraud related to false ID at £50m" ~ <a href="http://www.theregister.co.uk/2004/05/05/id_pilot_glitches/">The
  Register</a></i></span> <br>
  <br>
<b>Related</b></p>
<p><a href="syntax-datatypes.html">Full list of Datatypes</a><br>
<a href="../sql/syntax-field-sizes.html">Database field sizes</a> - Some popular best practices on length and data type for common database fields.<br>
</p><!-- #BeginLibraryItem "/Library/foot_ora.lbi" --><p><script async="" src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
<!-- oracle-footer -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="4275490898"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

