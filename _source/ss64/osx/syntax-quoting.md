---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #EndLibraryItem --><h1>Escape Characters, delimiters and Quotes</h1>
<h2>Quoting</h2>
<p>Quoting is used to remove the special meaning of certain characters or words to the shell. Quoting can be used to disable special treatment for special characters, 
to prevent reserved words from being recognized as such, and to prevent parameter expansion. </p>
<p>Each of the shell metacharacters has special meaning to the shell and must be quoted if it is to represent itself.</p>
<h2>Escape Character</h2>
<blockquote>
<p>A non-quoted backslash <code>\</code> is the Bash escape character. It preserves the literal value of the next character that follows, with the exception of <code>newline</code>. If a <code>\newline</code> pair appears, and the backslash itself is not quoted, the <code>\newline</code> is treated as a line continuation 
(that is, it is removed from the input stream and effectively ignored). </p>
</blockquote>
<h2>Single Quotes</h2>
<blockquote>
<p>Enclosing characters in single quotes (<code>'</code>) preserves the literal value of every character within the quotes. A single quote may not occur between 
single quotes, even when preceded by a backslash. <br>
<span class="code">$ MONTHVAR=January<br>
$ 
echo 'The month is $MONTHVAR'<br>
The month is $MONTHVAR</span></p>
</blockquote>
<h2>Double Quotes</h2>
<blockquote>
<p>Enclosing characters in double quotes (<code>"</code>) preserves the literal value of all characters within the quotes, with the exception of <code>$</code>, <code>`</code>, and <code>\</code> and, when history expansion is enabled, <span class="code">!</span>.  The characters <code>$</code> and <code>`</code> retain their special meaning within double quotes. The backslash 
retains its special meaning only when followed by one of the following characters: <code>$</code>, <code>`</code>, <code>"</code>, <code>\</code>, or <code>newline</code>.<br>
If enabled, history expansion will be performed unless an <span class="code">!</span> appearing in double quotes is escaped using a backslash. The backslash preceding the <span class="code">!</span> is not removed. <br>
Within double quotes, backslashes that are followed by one of these characters are removed. Backslashes preceding characters without a special meaning are 
left unmodified. A double quote may be quoted within double quotes by preceding it with a backslash.<br>
The special parameters <code>*</code> and <code>@</code> have special meaning when in double quotes.<br>
<span class="code">$ MONTHVAR=January </span><br>
<span class="code">$ echo "The month is $MONTHVAR"<br>
The month is January</span><b><br>
</b></p>
</blockquote>
<h2>EOF Marker</h2>
<blockquote>
<p>End Of File is usually CTRL+D (^D) when input is from the keyboard. <br>
If ^D doesn't work, type 'stty -a' to see what the eof character is.</p>
</blockquote>
<p> <b>Related:</b></p>
<p><a href="http://support.apple.com/kb/ht1528">ht1528</a> - Enabling and using the 'root' user in Mac OS X<br>
</p><!-- #BeginLibraryItem "/Library/foot_osx.lbi" --><p>
<!-- OSX300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="1823340303"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="syntax-quoting.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->
