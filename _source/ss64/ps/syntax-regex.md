---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_pssyntax.lbi" --><!-- #EndLibraryItem --><h1>Regular Expressions</h1> 
<p>Use  <span class="code">-match</span> , <span class="code">-notmatch</span> or <span class="code">-replace</span> to identify string patterns. More complex patterns can be matched by adding a  regular expression.</p>
<p> RegEx characters:<span class="code"> <abbr title="Beginning of line (or NOT)">^</abbr> <abbr title="Single character"> .</abbr> <abbr title="One of a range">[ ] -</abbr> <abbr title="Zero or more charaters">g</abbr> <abbr title="One or more charaters">G</abbr> <abbr title="Zero or one matches, matching as much as possible">?</abbr>  <abbr title="One or more matches, matching as much as possible">+</abbr> <abbr title="Zero or more instances of the preceding character">*</abbr> <abbr title="Match any character in a  character class{ }">p</abbr> <abbr title="Match text not included in groups and block ranges{ }">P</abbr> <abbr title="Word">w</abbr> <abbr title="Non-Word">W</abbr> <abbr title="Match any white-space">s</abbr> <abbr title="Match any Non-white-space">S</abbr> <abbr title="Match any decimal digit">d</abbr> <abbr title="Match any non-digit">D</abbr> <abbr title="End of String">$</abbr></span></p>
<p><br>
Match exact characters anywhere in the original string:<br>
<span class="code">PS C:&gt; 'Ziggy stardust' -match 'iggy'<br>
True</span><br>
</p>
<h2>Match multiple characters</h2>
<blockquote>
<p>Match any (at least one) of the characters - place the options in square brackets<span class="code"> [ ]     </span><br>
<span class="code">PS C:&gt; 'Ziggy stardust' -match 'Z[xyi]ggy'<br>
True</span><br>           
<br>Match a range (at least one) of characters in a contiguous range <span class="code"> [<i>n</i>-<i>m</i>]</span><br>
<span class="code">PS C:&gt; 'Ziggy stardust' -match 'Zigg[x-z] Star'</span><br>
<span class="code">True</span><br>           
<br>
Match anything but these, a caret (<span class="code">^</span>) will match any character except    those in brackets<br>
<span class="code">PS C:&gt; 'Ziggy stardust' -match 'Zigg[^abc] Star'</span><br>
<span class="code">True</span></p>
<p>Match anything but these  characters, specify in one or more  contiguous ranges <span class="code"> [^<i>n</i>-<i>m</i>]</span><br>
<span class="code">PS C:&gt; 'abc' -match '[^abc-ijk-xyz]'<br>
False<br>
PS C:&gt; 'abc' -match '[^ijk-xyz]'<br>
True</span></p>
</blockquote>
<h2>Match by Position</h2>
<blockquote>
<p>Match only if at the  beginning of the line:<span class="code"> ^</span> <br>                 
<span class="code">PS C:&gt; 'no alarms and no surprises' -replace '<b>^</b>no',''<br>
</span><span class="code">alarms and no surprises</span><br>                 
<br>
Match only if at the  end of the line:<span class="code">  $ </span><br>
<span class="code">PS C:&gt; 'There must be some way out of here said the joker to the joker' -replace 'joker<b>$</b>','thief'<br>
There must be some way out of here said the joker to the thief</span></p>
</blockquote>
<h2>Wildcards</h2>
<blockquote>
<p>A period <span class="code">.</span> will match a single character:<br>
<span class="code">PS C:&gt; 'cat' -match 'c.t'<br>
True</span><br>
<span class="code">PS C:&gt; 'Ziggy stardust' -match 's..rdust'<br>
True</span></p>
<p>Match zero or more instances of the preceding character:<span class="code"> * </span><br>
<span class="code">PS C:&gt; 'Ziggy stardust' -match 'X*star'<br>
True</span><br>
<span class="code">PS C:&gt; 'Ziggy stardust' -match 'X*jones'<br> 
False
</span><br>
</p>
<p>Match zero or more instances of the preceding character, matching as much as possible:<span class="code"> ?</span> <br>
<span class="code">PS C:&gt; 'AaaBbb' -match 'X?C'<br>
False <br>
PS C:&gt; 'AaaBbbCcc' -match 'X?C'<br>
True</span></p>
<p>Match One or more instances of the preceding character, matching as much as possible:<span class="code"> +</span> <br>
<span class="code">PS C:&gt; 'AaaBbbCcc' -match 'A+C'<br>
False<br>
PS C:&gt; 'AaaCcc' -match 'A+C'<br>
True<br></span></p>
</blockquote>
<h2>Match special text</h2>
<blockquote>
<p>Match the character that follows as an escaped character by escaping with a backslash<span class="code"> \</span><br> 
<span class="code">PS C:&gt; 'Ziggy$' -match 'Ziggy\$'</span><br>
This is different from the normal <a href="syntax-esc.html">PowerShell escape character</a> (the backward apostrophe), but it follows industry-standard regex syntax.</p>
<p>Match any character in a  character class:<span class="code"> \p{<i>name</i>}</span> <br>
Supported names are <a href="http://msdn.microsoft.com/en-us/library/20bw873z.aspx">Unicode groups and block ranges</a> for example, <span class="code">Ll </span>(Letter, Uppercase), <span class="code">Nd</span> (Number, Decimal Digit), <span class="code">Z</span> (All separators), IsGreek, IsBoxDrawing.<br>
<span class="code">PS C:&gt; 'ZiGGY Stardust' -match '\p{Ll}+'</span></p>
<p>Match text <b>not</b> included in groups and block ranges: <span class="code">\P{<i>name</i>}</span> . <br>
<span class="code">PS C:&gt; 1234 -match '\P{Ll}+'</span></p>
<p>Match any word character<span class="code">: \w </span> meaning letters and numbers. This is roughly equivalent to  <span class="code">[a-zA-Z_0-9]</span> but will also match foreign letters with accents: (<span class="code">áåäæçèπΈψ</span> etc) but not unicode symbols or punctuation.<br>
<span class="code">PS C:&gt; 'Ziggy' -match '\w+'<br>
True
<br>
PS C:&gt; '~~@ ;;' -match '\w+'<br> 
False
</span></p>
<p>Match any <b>non-</b>word character <span class="code">\W </span>This is roughly equivalent to <span class="code">[^a-zA-Z_0-9]</span> but  foreign letters with accents will also be considered part of a word.<br>
<span class="code">PS C:&gt; 'Ziggy' -match '\W+'<br>
False<br>
PS C:&gt; '~~@ ;;' -match '\W+'<br>
True</span></p>
<p>Match any white-space: <span class="code">\s </span>This is equivalent to [ \f\n\r\t\v]<br>
<span class="code">PS C:&gt; 'Ziggy stardust' -match '\s+'<br>
True</span></p>
<p>Match any <b>non</b>-white-space<span class="code">: \S </span>This is equivalent to [^ \f\n\r\t\v]<br>
<span class="code">PS C:&gt; 'Ziggy' -match '\S+'<br>
True</span></p>
<p>Match any decimal digit<span class="code">: \d </span>This is equivalent to  \p{Nd} for Unicode and [0-9] for non-Unicode<br>
<span class="code">PS C:&gt; 'klmn0pq' -match '\d+'</span></p>
<p>Match any <b>non</b>-digit:<span class="code"> \D </span>This is equivalent to  \P{Nd} for Unicode and [^0-9] for non-Unicode<br>
<span class="code">PS C:&gt; '789o123' -match '\D+'</span></p>
</blockquote>
<h2>Match by number of occurences</h2>
<blockquote>
<p>Exactly <i>n</i> matches:<span class="code"> {<i>n</i>}</span><br>
<span class="code">PS C:&gt; 'sssss' -match '^s{5}$'<br>
True<br>
PS C:&gt; 'sssss' -match '^s{4}$'<br> 
False
</span></p>
<p>Match <i>n</i> or more matches, matching as much as possible:<span class="code"> {<i>n,</i>}</span><br>
<span class="code">PS C:&gt; 'sssss' -match '^s{3,}$'<br>
True</span></p>
<p>Match between <i>n</i> and <i>m </i>matches, matching as much as possible:<span class="code"> {<i>n,m</i>}</span><br>
<span class="code">PS C:&gt; 'sssss' -match '^s{6,9}$'<br>
False</span></p>
<p> Matching as <i>little</i> as possible can be done by appending a<span class="code"> ? </span><br>
<span class="code">*? </span>Zero or more matches<br>
<span class="code">+? </span>One or more matches<br>
<span class="code">?? </span>Zero or one matches<br>
<span class="code">{<i>n</i>}?</span> Exactly <i>n</i> matches<br>
<span class="code">{n,}? </span>N or more matches<br>
<span class="code">{n,m}? </span>Between n and m matches</p>
</blockquote>
<h2>Replace using capture groups</h2>
<blockquote>
<p>Replace with the entire matched string: 
<span class="code">$&amp;  </span><br>
<span class="code">PS C:&gt; 'ABCD' -replace "[BC]",'$&amp;x' <br>
ABxCxD</span></p>
<p>Replace with a capture group: <span class="code">$1, $2, … </span><br>
<span class="code">PS C:&gt; 'ABCD' -replace "([AC])(.)",'$2-$1' <br>
B-AD-C</span></p>
<p>To create a <i>named</i> capture group,  put  parentheses around it  like normal, then add <span class="code">'?&lt;groupname&gt;'</span> to the beginning of the capture.  This stores the group under the name <span class="code">groupname</span>.</p>
<p>Replace with a named capture group: <span class="code">${name} </span><br>
<span class="code">PS C:&gt; 'ABCD' -replace "(<b>?&lt;foo&gt;</b>[AC])(<b>?&lt;bar&gt;</b>.)",'$<b>{</b>bar<b>}</b>-$<b>{</b>foo<b>}</b>' <br>
B-AD-C</span></p>
</blockquote>
<p><span class="code">-match</span> and <a href="replace.html">-replace</a> are case <b>in</b>sensitive, as are <span class="code">-imatch</span> and <span class="code">-ireplace</span>. <br>
For case sensitive matching, use <span class="code">-cmatch</span> and <span class="code">-creplace</span></p>
<p>The <span class="code">-match</span> operator will set the <span class="code">$matches</span> variable whenever a match is found.<br>
The <span class="code">-replace</span> operator does not set the <span class="code">$matches</span> variable.<br>
</p>
<p>In addition to all the above PowerShell also supports the <a href="http://msdn.microsoft.com/en-us/library/3206d374(VS.71).aspx">quantifiers available in .NET</a> regular expressions.</p>
<p>The .Net framework uses a traditional NFA regex engine, to learn more about regular expressions look for the book <i><a href="http://www.amazon.com/dp/0596528124?tag=ss64">Mastering Regular Expressions</a> by Jeffrey Friedl</i></p>
<p class="quote"><i>“Mere enthusiasm is the all in all. . . .Passion and expression are beauty itself” ~ William Blake</i></p>
<p><b>Related:</b></p>
<p><a href="syntax-compare.html">Comparison</a> -like, -lt, -gt, -eq, -ne, -match<br>
<a href="syntax-wildcards.html">Wildcards</a> - Match multiple items<br>
<a href="syntax-esc.html">Escape characters</a> - double \\ to escape them </p><!-- #BeginLibraryItem "/Library/foot_ps.lbi" --><p><script async="" src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
<!-- PowerShell300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="6253539900"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

