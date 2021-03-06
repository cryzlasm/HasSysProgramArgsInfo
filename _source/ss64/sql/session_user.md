---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_sql.lbi" --><!-- #EndLibraryItem --><h1>SESSION_USER</h1>
<p>Return the user name of the current context in the current database.</p>
<pre>Syntax
      SESSION_USER
</pre>
<p>   Use  this function with DEFAULT Table Constraints to automatically populate a column. </p>
<p>Examples</p>
<pre>SELECT CONVERT(char(20), SESSION_USER);

SELECT 'The current user is: '+ SESSION_USER;

CREATE TABLE ptr<br>(<br> ptr_id int IDENTITY(5000, 1) NOT NULL,<br> ptr_text char(100),<br> entered_by_user nchar(20) NOT NULL DEFAULT SESSION_USER<br>)</pre>
<p class="quote"><i>"Every man has a right to risk his own life for the preservation of it" ~ Jean Jacques Rousseau, The Social Contract</i></p>
<p><b>Related commands:</b></p>
<p> 
  SYSTEM_USER
  - Windows login  name<br>
  USER
/ USER_NAME / CURRENT_USER - name of the current user</p><!-- #BeginLibraryItem "/Library/foot_sql.lbi" --><p>
<!-- ss64-sql -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="6953563613"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="session_user.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

