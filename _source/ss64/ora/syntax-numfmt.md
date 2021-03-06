---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_orasyntax.lbi" --><!-- #EndLibraryItem --><h1>Oracle Number formats</h1> 
<p> A number format can be used as part a <a href="syntax-to_char.html">TO_CHAR</a> or <a href="syntax-to_date.html">TO_DATE</a> function to return 
  a number in the specified format. </p>
<table>
  <tbody><tr> 
    <td>Format</td>
    <td>Description<br>
    </td>
    <td>Example</td>
  </tr>
  <tr> 
    <td class="code">9</td>
    <td>Number<br>
      (suppress leading/trailing zeros)<br>
      Includes a leading - for negative no's or one leading space for pos no's<br>
      <br>
    </td>
    <td>9999=' 123'</td>
  </tr>
  <tr> 
    <td class="code">0</td>
    <td>Number<br>
      including leading/trailing zeros</td>
    <td>09999=00123<br>
      9999D00=123.00<br>
    </td>
  </tr>
  <tr> 
    <td class="code">FM</td>
    <td>Supress all leading /trailing blanks</td>
    <td>FM9999=123</td>
  </tr>
  <tr> 
    <td class="code">$</td>
    <td>Include a leading $</td>
    <td>$999=$123</td>
  </tr>
  <tr> 
    <td class="code">B</td>
    <td>Over-ride the '0' format and replace leading 
      0's with blank spaces ' ' </td>
    <td>B9999=' 123'</td>
  </tr>
  <tr> 
    <td class="code">S</td>
    <td>Include poth positive+ and negative - signs</td>
    <td>S999 =+123<br>
      999S =123+</td>
  </tr>
  <tr> 
    <td class="code">PR</td>
    <td>Indicate SIGN with &lt;brackets&gt;</td>
    <td>PR999=&lt;123&gt;<br>
      PR999=' 123 '</td>
  </tr>
  <tr> 
    <td class="code">MI</td>
    <td>Indicate Minus SIGN</td>
    <td>999MI=123-</td>
  </tr>
  <tr> 
    <td class="code">RN or rn</td>
    <td>Roman numeral<br>
(upper or lower case)</td>
    <td>RN99=XI</td>
  </tr>
  <tr> 
    <td class="code">D</td>
    <td>Position of decimal point(.)</td>
    <td>99D99=12.34</td>
  </tr>
  <tr> 
    <td class="code">G</td>
    <td>Group separator (often a comma) in desired position</td>
    <td>9G999=1,234</td>
  </tr>
  <tr> 
    <td class="code">,</td>
    <td>Return a comma in desired position</td>
    <td>9,999=1,234</td>
  </tr>
  <tr> 
    <td class="code">.</td>
    <td>Return a period in desired position</td>
    <td>99.99=12.34</td>
  </tr>
  <tr> 
    <td class="code">C</td>
    <td>ISO currency symbol</td>
    <td>C99</td>
  </tr>
  <tr> 
    <td class="code">L</td>
    <td>Local currency symbol</td>
    <td>L99</td>
  </tr>
<tr>
<td class="code">EEEE</td>
<td><p>Return a value using in scientific notation</p>
</td>
<td>9.9EEEE= 1.2E+02</td>
</tr>
<tr>
<td class="code">TM</td>
<td>Text Minimum<br> 
TM9(the default) or TME (Scientific notation)</td>
<td>TM9=12345<br>
TME=1.2E+02</td>
</tr>
<tr>
<td class="code">U</td>
<td>Returns in the specified position the Euro (or other) dual currency symbol.<br>
(<a href="syntax-initora.html">NLS_DUAL_CURRENCY</a>)</td>
<td>U9999 = €1234</td>
</tr>
<tr>
<td class="code">V</td>
<td>Return a value multiplied by 10<sup>n</sup> , where <i>n</i> is the number of 9's after the V.<br>
(<i>value</i> will be  rounded up if necessary)</td>
<td>999V99= 123 x 10<sup>45</sup></td>
</tr>
<tr>
<td class="code">X</td>
<td>Returns the hexadecimal value of the specified number of digits. </td>
<td>select to_char('64','xx') from dual;</td>
</tr>
</tbody></table>
<p>Some of the format elements above can only be used at the start or end of a format string:<br>
MI, PR, S</p>
<p>The default text minimum number format model is TM9, which returns the number in fixed notation unless the output exceeds 64 characters in which case the number  will be returned in scientific notation.</p>
<p><b>Related</b></p>
<p><a href="syntax-fmt.html">Date &amp; Time Formats</a><br>
<a href="syntax-to_char.html">TO_CHAR</a><br>
<a href="syntax-to_date.html">TO_DATE</a><br>
<a href="syntax-to_number.html">TO_NUMBER</a></p><!-- #BeginLibraryItem "/Library/foot_ora.lbi" --><p>
<!-- oracle-footer -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="4275490898"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="syntax-numfmt.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

