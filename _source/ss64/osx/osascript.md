---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_osx.lbi" --><!-- #EndLibraryItem --><h1>osascript</h1> 
<p>Execute AppleScripts and other OSA language scripts. Executes
  the given script file, or standard input if none is
given. Scripts can be plain text or compiled scripts. osascript was
designed for use with <a href="http://www.apple.com/applescript/">AppleScript</a>,
but will work with any Open Scripting Architecture (OSA) language.</p>
<pre>Syntax
      osascript [-l <i>language</i>] [-e <i>command</i>] [-s <i>flags</i>] [<i>programfile</i>]

Options<i>
</i>   
     <b>-e</b> <i>command</i>
     Enter one line of a script.  If <b>-e</b> is given, <b>osascript</b> will not
     look for a filename in the argument list.  Multiple <b>-e</b> commands can 
     be given to build up a multi-line script.  Because most scripts use
     characters that are special to many shell programs (e.g., Apple-
     Script uses single and double quote marks, `(', `)', and `*'),
     the command will have to be correctly quoted and escaped to
     get it past the shell intact.

     <b>-l</b> <i>language</i>
     Override the language for any plain text files.  Normally, plain
     text files are compiled as AppleScript.

     <b>-s</b> <i>flags</i>
     Modify the output style.  The <i>flags</i> argument is a string consisting
     of any of the modifier characters <b>e</b>, <b>h</b>, <b>o</b>, and <b>s</b>.  Multiple modi-
     fiers can be concatenated in the same string, and multiple <b>-s</b>

     options can be specified.  The modifiers come in exclusive pairs;
     if conflicting modifiers are specified, the last one takes prece-
     dence.  The meanings of the modifier characters are as follows:

     <b>h</b>  Print values in human-readable form (default).
     <b>s</b>  Print values in recompilable source form.

        <b>osascript</b> normally prints its results in human-readable form:
        strings do not have quotes around them, characters are not
        escaped, braces for lists and records are omitted, etc.  This is
        generally more useful, but can introduce ambiguities.  For exam-
        ple, the lists `{"foo", "bar"}' and `{% raw %}{{{% endraw %}"foo", {"bar"{% raw %}}}{% endraw %}}' would
        both be displayed as `foo, bar'.  To see the results in an unam-
        biguous form that could be recompiled into the same value, use
        the <b>s</b> modifier.

     <b>e</b>  Print script errors to stderr (default).
     <b>o</b>  Print script errors to stdout.

        <b>osascript</b> normally prints script errors to stderr, so downstream
        clients only see valid results.  When running automated tests,
        however, using the <b>o</b> modifier lets you distinguish script
        errors, which you care about matching, from other diagnostic
        output, which you don't.</pre>
<p> osascript in Mac OS X 10.0 would translate `\r' characters in
  the output to `\n' and provided c and r modifiers for the -s option to change
this. osascript now always leaves the output alone; pipe through <a href="tr.html">tr</a> if necessary.</p>
<p>For multi-line AppleScript you can use  ¬ as a new line continuation character, press <span class="code">Option-L</span> to  enter this into your text editor.</p>
<p><b>Examples</b></p>
<p>Open or switch to Safari:<br>
<span class="code">$ osascript -e 'tell app "Safari" to activate'</span></p>
<p>Close safari: <span class="code"><br>
$ osascript -e 'quit app "safari.app"'</span></p>
<p>Empty the trash:<span class="code"><br>
$ osascript -e 'tell application "Finder" to empty trash'</span></p>
<p>Set the output volume to 50%<span class="code"><br>
$ sudo osascript -e 'set volume output volume 50'</span></p>
<p>Input volume and Alert volume can also be set from 0 to 100%: <br>
<span class="code">$ sudo osascript -e 'set volume input volume 40'</span><br>
<span class="code">$ sudo osascript -e 'set volume alert volume 75'</span><br>
</p>
<p>Mute the output volume (True/False):<br>
<span class="code">$ 
osascript -e 'set volume output muted TRUE'</span></p>
<p>Bugs:<br>
osascript does not yet provide any way to pass arguments to the script.</p>
<p class="quote"><i>“Every time I get a script it's a matter of trying to know what I could do with it. I see colors, imagery. It has to have a smell. It's like falling in love. You can't give a reason why” ~ Paul Newman</i></p>
<p><b>Related:</b></p>
<a href="https://developer.apple.com/legacy/library/documentation/Darwin/Reference/ManPages/man1/osascript.1.html">osascript man page</a> - Apple.com<br>
osalang(1) - list the OSA languages
installed on your system.<br>
<a href="osacompile.html">osacompile</a> - Compile Applescript<p></p><!-- #BeginLibraryItem "/Library/foot_osx.lbi" --><p><script async="" src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
<!-- OSX300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="1823340303"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->
