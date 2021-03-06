---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_ntsyntax.lbi" --><!-- #EndLibraryItem --><h1>GenChr.cmd</h1>
<p>Generate  the ASCII/Unicode character for any byte value. The output is a file <i><span class="code">bytevalue</span></i><span class="code">.chr</span></p>
<pre>  @echo off
  set "USAGE=echo:Usage: Supply an integer 0-255&amp; goto :EOF"
  if "%~1" equ "" %USAGE%
  set /a "val=%~1" 2&gt;nul
  if "%~1" neq "%val%" %USAGE%
  if %~1 lss 0    %USAGE%
  if %~1 gtr 255  %USAGE%

  set tempfile=%~1.tmp
  set "options=/d compress=off /d reserveperdatablocksize=26"
  if %~1 neq 26  (type nul &gt;"%tempfile%"
  <a href="makecab.html">makecab</a> %options% /d reserveperfoldersize=%~1 "%tempfile%" %~1.chr &gt;nul
  type %~1.chr | (
  (for /l %%N in (1 1 38) do pause)&gt;nul&amp;findstr "^"&gt;"%tempfile%")
  &gt;nul copy /y "%tempfile%" /a %~1.chr /b
  del "%tempfile%"
  ) else (copy /y nul + nul /a 26.chr /a &gt;nul)</pre>
<p>Written via the teamwork of carlos, penpen, aGerman, dbenham &amp; bluesxman - see <a href="http://ss64.org/viewtopic.php?id=1872">forum thread</a>
</p><p><b>Example</b>s
</p><p>Create the 0 or NUL character (file 0.chr)<span class="code"><br>
genchr.cmd 0  </span>
</p><p> Create the 9 or tab character. (file 9.chr)<span class="code"><br>
genchr.cmd 9</span>
</p><p>Create all 256 characters/files:<br>
<span class="code">for /l %a in (0,1,255) do start "" cmd /c genchr %a</span>
</p><p class="quote"><i>“When the character of a man is not clear to you, look at his friends” ~ Japanese Proverb</i></p>
<p><b>Related</b>
</p><p><a href="../ascii.html">Ascii table</a><br>
<a href="makecab.html">MAKECAB</a> Create .CAB files<br>

<!-- #BeginLibraryItem "/Library/foot_nt.lbi" --></p><p>
<!-- windows300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="7649547908"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="syntax-genchr.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

