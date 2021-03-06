---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_ps.lbi" --><!-- #EndLibraryItem --><h1>Get-History</h1> 
<p>Get  a list of the commands entered during the current session.</p>
<pre>Syntax
      Get-History [ [-count] <i>int</i> ]
        [ [-id] <i>Int64</i>[] ]
          [<i>CommonParameters</i>]

Key
   -count 
       Display <i>n</i> of most-recent history entries.
       The default is 32. 

   -id <i>Int64</i>
       The ID number of a command in the session history.
       Get-History gets only the specified command. 

   <a href="common.html">CommonParameters</a>:
       -Verbose, -Debug, -ErrorAction, -ErrorVariable, -WarningAction, -WarningVariable,
       -OutBuffer -OutVariable.</pre>
<p>Standard <a href="get-alias.html">Aliases</a> for Get-History:<span class="code"> h, history, <b>ghy</b></span></p>
<p>If you specify both <span class="code">-Count</span> and <span class="code">-Id</span>, the display will end with the command specified by Id.</p>
<h2>PowerShell Keyboard shortcuts: </h2>
<p>Pressing the Up-arrow key will move backwards through the command history, this is equivalent to <span class="code">get-history -count 1</span> which can be abbreviated to to "<span class="code">h -c 1</span>"</p>
<p>Pressing the Down-arrow key will move forwards  through the command history, starting with the first command (the oldest in the history buffer) </p>
<p>Press F7 to display the command history.<br>
With the history displayed you can either use the Up/Down arrow keys and then [Return] to run the command, or press F9, type the number assigned to the command and then [Return] to run the command.</p>
<p>Press F8 to search history.<br>
Type one or more characters and then press F8 to display the last command entered that begins with those characters. press F8 again to displays the next matching command, and so on. </p>
<p>By default, PowerShell will store the most recent 64 commands in the command history, this can be increased by setting the variable <span class="code">$MaximumHistoryCount</span>. For example, <span class="code">$MaximumHistoryCount = 100</span></p>
<p><span class="code">Insert key</span> - Toggle Insert/Overwrite<br>
<span class="code">Ctrl+Left Arrow</span> - move the cursor one word to the left<br>
<span class="code">Ctrl+Right Arrow</span> - move the cursor one word to the right<br>
<span class="code">Home/End</span> - Move to the start/end of the current command line.<br>
<span class="code">Tab key</span> - Automatically complete a path</p>
<p><b>Examples</b></p>
<p>Get   the (32) most recent entries from the session history, and pipe the results to the Where-Object to select only commands that include "service":</p>
<p><span class="code">PS C:\&gt; get-history | where-object {$_.commandLine -like "*service*"}</span><br>
<br>Display  the properties of entries in the session history:</p>
<p class="code">PS C:\&gt; get-history | format-list</p>
<p>Get the 50 most recent entries from the session history and pipe the result to to Export-Csv,  saving it as a comma-separated text file:</p>
<p class="code">PS C:\&gt; get-history -count 50 | export-csv history.csv</p>
<p class="quote"><i>“History will be kind to me for I intend to write it” ~  Winston Churchill</i></p>
<p><b>Related:</b></p>
<p><span class="code">$$</span> - the last item on the last line you typed (like <span class="code">!$</span> in bash) <br>
<a href="add-history.html">Add-History</a> - Add entries to the session history<br>
<a href="clear-history.html">Clear-History</a> - Delete entries from the command history<br>
<a href="invoke-history.html">Invoke-History</a> - Invoke a previously executed command<br>
<a href="../nt/syntax-keyboard.html">Windows Keyboard shortcuts</a><br>
<a href="http://blogs.msdn.com/powershell/archive/2006/07/01/perserving-command-history-across-sessions.aspx">Perserve Command History Across Sessions</a></p><!-- #BeginLibraryItem "/Library/foot_ps.lbi" --><p><script async="" src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
<!-- PowerShell300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="6253539900"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->
