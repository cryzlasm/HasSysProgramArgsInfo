---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_orasyntax.lbi" --><!-- #EndLibraryItem --><h1>Analytic Reporting Functions</h1> 
<p> A variation on aggregate <a href="syntax-analytic-aggregate.html">Window</a> functions 
  with the difference that the Window ranges from the beginning to the end of 
  the partition, so each row in the partition is reported with an aggregate over 
  the whole partition.<br>
  <br>
  These functions are often used to aggregate more than one item e.g. For each 
  region, find the sales for cities that contribute 10 % or more to regional sales. 
  This involves aggregating sales per (region) and also Sales per (Region,City). 
  <br>
  <br>
  Syntax</p>
<pre>SELECT Aggregate_function() 
   ([ALL | DISTINCT] {&lt;value expression1&gt; | *}) 
    OVER ([PARTITION BY &lt;value expression2&gt; [,…]])

e.g.

SELECT *
FROM (SELECT year(date), product,
             SUM(sales) As sum_sales,
<b>             MAX(SUM(sales)) OVER
                 (PARTITION BY product)
                  As max_sales</b>
      FROM SalesTable
      GROUP BY year(date), product)
WHERE sum_sales = max_sales;</pre>
<p> <b>RATIO_TO_REPORT</b><br>
  Compute the ratio of a value to the sum of a set of values (in a partition window)<br>
  This allows <i>shares</i> to be calculated in one step without requiring a second 
  SELECT to calculate the total.<br>
</p>
<p>Syntax</p>
<pre>   RATIO_TO_REPORT (expr) OVER 
     ([PARTITION BY value/expr])

e.g
SELECT product_id, SUM(sales)
   RATIO_TO_REPORT (SUM(sales)) OVER () As MyRatio
FROM sales
GROUP BY product_id
</pre>
<p> <i class="quote">“Well the hours are good, but now you come to mention it, most of the actual minutes are pretty lousy” - Douglas Adams</i><br>
<br>
<b>Related</b></p>
<p><a href="syntax-analytic.html">Analytic features</a><br>
<a href="syntax-functions.html">Oracle SQL Functions</a></p><!-- #BeginLibraryItem "/Library/foot_ora.lbi" --><p>
<!-- oracle-footer -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="4275490898"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="syntax-analytic-reporting.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

