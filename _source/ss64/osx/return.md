---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_osx.lbi" --><!-- #EndLibraryItem --><h1>return</h1> 
<p>Exit a function with the return value specified by <i>n</i>.</p>
<pre>Syntax
      return [<i>n</i>]

Key
   <i>n</i>   The value to return</pre>
<p>If <i>n</i> is omitted, the return status is that of the last command executed in the function body. </p>
<p>If used outside a function, but during execution of a script by the . (source) command, it causes the shell to stop executing that script and return either <i>n</i> or the exit status of the last command executed within the script as the exit status of the script. </p>
<p>If used outside a function and not during execution of a script by ., the return status is false. </p>
<p>Any command associated with the RETURN trap is executed before execution resumes after the function or script.</p>
<p>return is a bash builtin command.</p>
<p class="quote"><i>“Few men of action have been able to make a graceful exit at the appropriate time”  ~ Malcolm Muggeridge</i></p>
<p><b>Related:</b></p>
<p><a href="set.html">set</a> - Set a shell variable = value</p><!-- #BeginLibraryItem "/Library/foot_osx.lbi" --><p><script async="" src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
<!-- OSX300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="1823340303"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->
