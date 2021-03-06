---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_access_syntax.lbi" --><!-- #EndLibraryItem --><h1>The Reddick VBA Naming Conventions</h1>
<p>Copyright © 1995 Greg Reddick. All Rights Reserved.</p>
<ol>
<li><a href="syntax-naming-variables.html">Introduction - Variable and Procedure names</a></li>
<li><a href="syntax-naming-prefix.html">Prefixes</a></li>
<li><a href="syntax-naming-suffix.html">Suffixes</a></li>
<li><a href="syntax-naming-object-vars.html">Object variables and DAO</a> -  variables</li>
<li><a href="syntax-naming-database.html">Database Explorer objects</a> - Table, Query, Form etc </li>
<li><a href="syntax-naming-objects.html">Object Names</a></li>
</ol>
<p>Some of the naming tags, prefixes, and qualifiers in this document are derived from the Leszynski/Reddick naming conventions, Copyright © 1994 Stan Leszynski and Greg Reddick.</p>
<p>The purpose of the Reddick VBA (RVBA) Naming Conventions is to provide a guideline for naming objects in the Microsoft Visual Basic for Applications (VBA) language. Having conventions is valuable in any programming project. When you use them, the name of the object conveys information about the meaning of the object. These conventions provide a way of standardizing what that meaning is across the programming industry.</p>
<p> VBA is implemented to interact with a host application—for example, Microsoft Access, Visual Basic, Microsoft Excel, and Microsoft Project. In contrast to previous versions of these conventions, the RVBA conventions cover all implementations of the VBA language, regardless of the host application. Note that some of the tags described in this article might not necessarily have an implementation within some particular host program. The word <i>object,</i><span style="font-style:normal"> in the context of this document, refers to simple variables, as well as to objects presented in the interface of the VBA host program.</span></p>
<p>  While I’m the editor of these conventions and in 1992 proposed the original conventions for Microsoft Access, they are the work of many people, including Charles Simonyi, who invented the Hungarian conventions on which these are based; Stan Leszynski, who co-authored several versions of the conventions; and Paul Litwin, for his contributions and for getting the conventions in front of the public. Many others, too numerous to mention, have also contributed to the development of these conventions.</p>
<p>  <b>These conventions are intended as a guideline. If you disagree with a particular part, simply replace that part with what you think works better.</b> However, keep in mind who will see those changes and place a comment in the header of a module indicating what changes have been made. The conventions are presented without rationalizations for how they were derived; you can assume that there are good reasons for the choices that have been made. Send me any questions or comments about the conventions (see the addresses at the end of the article). Suggestions for future versions are welcome.</p>
<h2>Changes to the conventions</h2>
<p>These conventions first appeared in print in the charter issue of <i>Smart Access </i>in February of 1993. A significantly revised version appeared in the August 1993 issue.</p>
<p>  Some of the tags in the version of the conventions presented here have changed from previous versions. Consider all previous tags to be grandfathered into the conventions—you don’t need to go back and make changes. For new development work, we leave it up to you to decide whether to use the older tags or the ones suggested here.</p>
<h2>Summary</h2>
<p>Using a naming convention requires a considerable initial effort on your part. It also requires that you conform to rules specified by other parties, which is difficult for many programmers. The payoff comes when either you or another programmer has to revisit your code at a later time. Using the conventions makes your code more readable and maintainable.</p>
<p>Greg Reddick is the President of Gregory Reddick &amp; Associates, a consulting company specializing in software development in Microsoft Access, VB, and C/C++. He worked for four years on the Access development team at Microsoft. He's a coauthor of the Microsoft Access 95 Developer's Handbook, published by Sybex.</p>
<p>Copyright © 1995 Greg Reddick. You can freely distribute this document.</p>
<p><b>Related:</b></p>
<p><a href="../ora/syntax-naming.html">Oracle Naming convention</a><br>
<a href="http://www.granite.ab.ca/access/tablefieldnaming.htm">Tony Toews's Table and Field Naming Conventions</a><br>
<a href="http://support.microsoft.com/?kbid=189220">Q189220</a> - Microsoft support for spaces in fieldnames<br>
<a href="http://philip.greenspun.com/sql/style.html">SQL formatting convention</a> - Philip Greenspun<br>
Standard ISO-11179 - Rules for defining data elements</p><!-- #BeginLibraryItem "/Library/foot_access.lbi" --><p><script async="" src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
<!-- access -->

<hr>
<div id="bl" class="footer"><a href="#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

