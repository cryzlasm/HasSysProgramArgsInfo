---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_pssyntax.lbi" --><!-- #EndLibraryItem --><h1>Arrays</h1> 
<p>A PowerShell array holds a list of data items.<br>
The data elements of a PowerShell array need not be of the same type, unless the data type is declared (strongly typed).</p>
<h2>Creating  Arrays </h2>
<blockquote>
<p> To create an Array just separate the elements with commas.</p>
<p>Create an array named $myArray  containing elements with a mix of data types:</p>
<p class="code"> $myArray = 1,"Hello",3.5,"World"</p>
<p>or using explicit syntax:<br>
<span class="code"> $myArray = <b>@(</b>1,"Hello",3.5,"World"<b>)</b></span></p>
<p>To distribute the  values back into  individual variables:<br>
<span class="code">$var1,$var2,$var3,$var4=$myArray</span></p>
<p>Create an array   containing several numeric (int) values:</p>
<p class="code"> $myArray = 1,2,3,4,5,6,7</p>
<p>or using the range operator (..):</p>
<p><span class="code">$myArray = (1..7) </span></p>
<p>or strongly typed: </p>
<p class="code">[int[]] $myArray = 12,64,8,64,12</p>
<p> Create an empty array:</p>
<p><span class="code">$myArray = @()</span></p>
<p>Create an array with a  single element:</p>
<p><span class="code">$myArray = @("Hello World")</span></p>
<p>Create a Multi-dimensional array:</p>
<pre>$myMultiArray = @(
             (1,2,3),
             (40,50,60)
   )</pre></blockquote>
<h2>Add values to an Array.</h2>
<blockquote>
<p> This is done using the<span class="code"> += </span>operator</p>
<p>Append an extra element with a value of 'India' to the $countries array:<br>
  <span class="code">$countries += 'India'</span></p>
<p>Adding items to a large array can be quite slow, a PowerShell array variable is immutable - meaning that in the background it creates a whole new array that includes the new value and then discards the old array. <br>
A faster alternative to use a .Net ArrayList:</p>
<p class="code">$countries = New-Object System.Collections.ArrayList<br>
$countries.Add('India') &gt; $null<br>
$countries.Add('Montenegro') &gt; $null</p>
</blockquote>
<h2>Retrieve items from an Array </h2>
<blockquote>
<p>To retrieve an element, specify its number, PowerShell numbers the array elements starting at 0. </p>
<p>Return all the elements in an array: </p>
<p class="code">$myArray</p>
<p>Return the first element in an array: </p>
<p class="code">$myArray[0]</p>
<p>Return the seventh element in an array: </p>
<p class="code">$myArray[6]</p>
<p>Return the 5th element through to the 10th element in an array: </p>
<p class="code">$myArray[4..9]</p>
<p>Return the last element in an array: </p>
<p class="code">$myArray[-1]</p>
<p>Return the first element from the first row in a multi-dimensional array: </p>
<p class="code">$myMultiArray[0][0]</p>
<p>You can also combine named elements with a range, separating them with a +<br>
so <span class="code">$myArray[1,2+4..9] </span>will return the elements at indices 1 and 2 and then 4 through 9 inclusive.</p>
<p>Return the length of an array (how many items are in the array): </p>
<p class="code">$myArray.length</p>
<p>Loop through the elements in an array: </p>
<p class="code">foreach ($element in $myArray) {$element}</p>
<p>In PowerShell 4.0+ arrays have the methods <span class="code">.Where()</span> and <span class="code">.Foreach()</span>  a faster  alternative to a traditional pipeline at the expense of a higher memory consumption:<br>
<span class="code">@(Get-Service).Where<b>(</b>{$_.Status -eq 'stopped'}<b>)</b><br>
</span>or 
omitting the parenthesis: <span class="code"><br>
@(Get-Service).Where{$_.Status -eq 'stopped'}</span></p>
</blockquote>
<h2>Data Types</h2>
<blockquote>
<p>When you create an array without specifying a datatype, PowerShell will create the array as an object array.<br>
To determine the data type of an array:</p>
<p class="code">$myArray.gettype()</p>
<p>PowerShell is not case-sensitive so $myArray is treated the same as $Myarray</p>
<p>If  you pipe an array to <a href="get-member.html">Get-Member</a>, it will display information about the objects <i>in </i>the array. If you use  Get-Member -InputObject, that will display information about the array itself:</p>
<p class="code">get-member -inputobject $myArray</p>
</blockquote>
<h2> Set values</h2>
<blockquote>
<p>To change  values in an array after it has been created, use the assignment operator (=) to specify a new value.</p>
<p class="code">$myArray[4]=64 </p>
<p>Alternatively use the SetValue method: </p>
<p class="code">$myArray.SetValue(64,4)</p>
<p class="code">$myMultiArray[2][4]=128</p>
<p>Add one array to another.<br>
This creates a new array containing all the values from the first two arrays:</p>
<p class="code">$march=@(2, 3, 4, 5, 6)<br>
$april=@(7, 8, 9, 10, 11, 12)<br>
$all = $march + $april</p>
</blockquote>
<h2>Delete an Array
(by deleting the array variable) </h2>
<blockquote>
<p class="code">Remove-Item variable:monthly_sales</p>
</blockquote>
<p class="quote"><i>“Nor shall you by your presence make afraid, The kingfisher, who looks down dreamily, At his own shadow gorgeously array'd” - Sir Edmund William Gosse</i></p>
<p><b>Related:</b></p>
<p><span class="code">get-help about_array</span><br>
  <a href="syntax-hash-tables.html">Hash Tables</a> &amp; SPLAT operator<br>
<a href="syntax-variables.html">Variables</a> - Create/read variables</p><!-- #BeginLibraryItem "/Library/foot_ps.lbi" --><p>
<!-- PowerShell300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="6253539900"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="syntax-arrays.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

