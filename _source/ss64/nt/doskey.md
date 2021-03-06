---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_nt.lbi" --><!-- #EndLibraryItem --><h1>DOSKEY.exe</h1> 
<p>Recall and edit commands at the DOS prompt, and create macros. 
You cannot run a Doskey macro from a batch file.</p>
<pre>Syntax
      DOSKEY [<i>options</i>] [<i>macroname</i>=[<i>text</i>]]

Key
   <i>macroname</i>   A short name for the macro.

        <i>text</i>   The commands you want to recall.

Options:

   /MACROFILE=<i>filename</i> Specify a file of macros to install

   /MACROS            Display all Doskey macros

   /EXENAME=<i>exename</i>   Specify an  executable other than cmd.exe

   /MACROS:<i>exename</i>    Display all Doskey macros for the given executable

   /MACROS:ALL        Display all Doskey macros for all executables

   ALT+F10            Clear macro definitions

   /HISTORY           Display all commands stored in memory.

   /LISTSIZE=<i>size</i>     Set the number of commands to be remembered by the buffer.
                      (Maximum is 2,147,483,647)

   /REINSTALL         Install a new copy of Doskey (clears the buffer).</pre>
<blockquote>
<p> In normal use the command line is always in <span class="code">overwrite</span> mode, DOSKEY can be used to<br>
change this to <span class="code">Insert</span>, the [insert] key will always toggle from one to the other:<br>
</p>
</blockquote>
<pre>   /INSERT            By default new text you type at the command line
                      will be inserted in old text

   /OVERSTRIKE        By default new text you type at the command line
                      will overwrite old

<span class="code">   /m /m:</span> and <span class="code">/h</span> are abbreviations for <span class="code">/macros /macros:</span> and <span class="code">/history</span> respectively.
   These provide compatibility with old MS-DOS versions of DOSKEY.</pre>
<p>In addition to the above, DOSKEY is loaded into memory for every cmd session so
you can use <a href="syntax-keyboard.html">Keyboard shortcuts</a> at the command line<br><br>
The size of the command history can be set from Control Panel, Console or from the properties of any cmd shortcut. Clear all history with DOSKEY /REINSTALL
</p><h2>Comments</h2>
<blockquote>
<p>Doskey macro files do not support comments, but you can work around this by creating a fake macro called ; and repeatedly assigining your comment text, if you do this, always end with the line <span class="code">;=</span> to delete the fake macro.</p>
<p><span class="code">;= here is a comment<br>
;= another comment line<br>
;=</span></p>
</blockquote>
<h2>Advanced macro definitions: </h2>
<pre>   $T     If you put more than one command in a DOSKEY macro, use $T. 
          to separate them. Equivalent to &amp; in a batch file.

   $1-$9  Parameters, equivalent to <a href="syntax-args.html">%1-%9</a> in a batch file.

   $*     This represents ALL the parameters $1-9</pre>
<h2>Save and restore macro definitions</h2>
<blockquote>
<p> DOSKEY macros are  only saved for the current session.<br>
The command:<br>
<span class="code">doskey /macros &gt;macros.cmd</span><br>
Will list all current macro definitions into macros.cmd, edit this file
and place DOSKEY at the start of each line. Then to restore all the doskey macros setup in the current session at a later date,  run <span class="code">macros.cmd</span></p>
</blockquote>
<p><b>Examples</b>
</p>
<p> A macro to open notepad<br>   
<span class="code">DOSKEY note=notepad.exe</span><br><br>
A macro to open WordPad<br>
<span class="code">DOSKEY wpad="C:\Program Files\Windows NT\Accessories\wordpad.exe"</span><br><br>
A macro called `d' to run dir/w<br>   
<span class="code">DOSKEY d=dir/w</span><br><br>
A macro to disable the FORMAT command (n.b. Doskey is not really a reliable method for disabling commands, it is easily bypassed by running  the full command path/ extension or creating a different macro.)<br>   
<span class="code">DOSKEY Format=Echo I've disabled the Format command</span>.</p>
<p> A macro to open a file with WordPad:<br>
</p>
<pre>C:\&gt; DOSKEY wpad="C:\Program Files\Windows NT\Accessories\wordpad.exe" $1
<span class="body">Using the above macro:</span>
C:\&gt; wpad MyTextfile.txt</pre>
<p> <i class="quote">“No man steps in the same river twice, for it's not the same river, and he's not the same man” ~ Heraclitus</i><br><br>
<b> Related:</b></p>
<p>CMD Syntax - <a href="syntax-macros.html">Batch file macros</a><br>
VBScript - <a href="../vb/sendkeys.html">SendKeys</a><br>
Equivalent bash commands (Linux):<a href="../bash/m4.html"> m4</a> - Macro processor, <a href="../bash/history.html">history</a> - Command history</p><!-- #BeginLibraryItem "/Library/foot_nt.lbi" --><p>
<!-- windows300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="7649547908"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="doskey.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->
