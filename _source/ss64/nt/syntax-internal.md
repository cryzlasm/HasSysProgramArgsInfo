---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_ntsyntax.lbi" --><!-- #EndLibraryItem --><h1>Internal commands</h1>
<p>The Windows CMD shell <a href="cmd.html">CMD.exe</a> contains a number of 'internal' commands, additional 'external' commands are also supplied as separate executable files. External commands are generally stored in the C:\WINDOWS\System32 folder, this folder is part of the system <a href="path.html">PATH</a> .</p>
<p>This arrangement means that both internal and external commands are always available no matter what your <a href="cd.html">current directory</a> happens to be.</p>
<p class="code">ASSOC, BREAK, CALL ,CD/CHDIR, CLS, COLOR, COPY, DATE, DEL, DIR, <abbr title="Deprecated command">DPATH</abbr>, ECHO, ENDLOCAL, ERASE, EXIT, FOR, FTYPE, GOTO, IF, <abbr title="Deprecated command">KEYS</abbr>, MD/MKDIR, MKLINK (vista and above), MOVE, PATH, PAUSE, POPD, PROMPT, PUSHD, REM, REN/RENAME,  RD/RMDIR, SET, SETLOCAL, SHIFT, START, TIME, TITLE, TYPE, VER, VERIFY, VOL</p>
<p>In the main <a href="index.html">A-Z list of CMD commands</a> the internal commands are indicated with a •</p>
<p>When you are working from any other shell, such as PowerShell then none of the internal commands are available unless you first open a CMD shell.</p>
<h2>Passing arguments</h2>
<blockquote>
<p>Arguments can be passed to an internal command, just like an external command, <span class="code">e.g. COPY /Y</span><br>
In some cases (when the command is being parsed by CMD.exe) the space before each argument can be omitted
<span class="code">e.g. COPY/Y</span> this can save time when working at the command line, but for scripts and scheduled tasks it is better to include the space.</p>
<p>for example from PowerShell:</p>
<p class="code">PS C: &gt; cmd /c date /t</p>
<p>will launch a CMD shell, run the DATE /T command and then exit back to PowerShell. Of course in many cases this is not neccessary, (PowerShell has its own Date command) but can be useful if you need to run something 'the old way'.</p>
</blockquote>
<p>It is possible for a system to have an internal command and an external command with the same name. If you have a command called DATE.exe and want to run that in preference to the internal DATE command, use the full pathname to the file e.g. <span class="code">C:\utils\date.exe</span> even if your current directory is <span class="code">C:\utils\</span></p>
<p class="quote"><i>“Tongues, like governments, have a natural tendency to degeneration; we have long preserved our constitution, let us make some struggles for our language” - Samuel Johnson: Preface to the Dictionary </i>
</p><p><b>Related:</b>
</p><p><a href="syntax-which.html">Which.cmd</a> - Show full path to executable.<br>
<a href="syntax-esc.html">Escape Characters, Delimiters and Quotes</a><!-- #BeginLibraryItem "/Library/foot_nt.lbi" --></p><p>
<!-- windows300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="7649547908"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="syntax-internal.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

