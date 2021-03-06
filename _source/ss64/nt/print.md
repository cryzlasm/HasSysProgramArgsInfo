---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_nt.lbi" --><!-- #EndLibraryItem --><h1>PRINT</h1> 
<p> Print a file or files to a local or network printer.</p>
<pre>Syntax
      PRINT [/D:<i>device</i>] [<i>pathname(s)</i>]

Key
   device   : either a local printer (LPTx, COMx )
              or a network printer by its sharename (\\servername\print_share)

   pathname : The file or files to be printed</pre>
<p>The default device is PRN. The values PRN and LPT1 refer to the same parallel port. <br>
The PRINT command is most often used in conjunction with an <a href="syntax-printing.html">LPR print queue</a> - sendng plain ASCII text.<br>
PRINT will add a FormFeed character (<a href="../ascii.html">ASCII 12</a>) to the end of each print job.</p>
<h2>Delete a print job:</h2>
<blockquote>
<p> Use Control Panel, Printers (GUI) or use <br>
<span class="code">NET PRINT job# /DELETE</span><br>
<br>
It is possible to delete the spool .spl and .shd files from <span class="code">%SystemRoot%\system32\spool\PRINTERS</span> but this should be a last resort - stop the spooler <a href="syntax-services.html">service</a> before deleting any files.</p>
</blockquote>
<h2>Status Messages</h2>
<blockquote>
<p>Many modern laser printers have a status display panel, the 'Ready' message can be changed using HP Job Language (PCL/PJL) like this:<br>
<span class="code">Echo @PJL RDYMSG DISPLAY ="Ready Message" &gt;\\server\printQ<br>
</span>e.g.<span class="code"><br>
Echo @PJL RDYMSG DISPLAY ="Ready Printer64" &gt;\\printserv1\printer64</span></p>
<p>It's not essential to include the word "Ready" in the ready message, but
the status display has 16 characters, which is usually  enough space
for "Ready" plus the printer Name/Number. 
e.g. "Ready Printer123", "Ready Prn1234567", "Ready #123-45678" etc </p>
<p>Note that when a printer error or jam occurs the status message will change, so adding a printer identifier to the status display does not replace the need for a physical label. It can still be very useful when the physical
label is wrong or missing.</p>
</blockquote>
<p>Printing requires the Spooler <a href="syntax-services.html">service</a> to be running.</p>
<p><i class="quote">“Without books the development of civilization would have been impossible. They are the engines of change, windows on the world, ''Lighthouses'' as the poet said ''erected in the sea of time'.' They are companions, teachers, magicians, bankers of the treasures of the mind, Books are humanity in print”  ~ Arthur Schopenhauer</i><br>
<br>
<b>Related:</b></p>
<p><a href="print-to-file.html">Print to File</a> - Configure a printer to always print to a file.<br>
<a href="net_share.html">NET PRINT</a> - View and Delete print jobs<br>
<a href="net_share.html">NET VIEW</a> - 
 List all printer share names for a print server.<br>
 Defptr - Default Printer. (<a href="../links/windows.html#kits">Win 2K ResKit</a>) <br>
<a href="prncnfg.html">PRNCNFG</a> - Display, configure or rename a printer <br>
<a href="printbrm.html">PRINTBRM</a> - Print queue Backup/Recovery<a href="con2prt.html">.</a><br>
<a href="wmic.html">WMIC PRINTER</a> - Set printing options through WMI.<br>
<a href="https://support.microsoft.com/kb/234270">Q234270</a> - Group Policies to Control Printers<br>
<a href="http://www.google.com/search?&amp;q=Hewlett-Packard+PCL+5+Printer+Language+Technical+Reference+Manual">HP PCL 5 Printer Language Technical Reference Manual</a> - Full <a href="http://en.wikipedia.org/wiki/Printer_Command_Language">PCL</a> Manual <br>
Resource Kit: <a href="prncnfg.html">prncnfg.vbs</a>, prndrvr.vbs, prnjobs.vbs, prnmngr.vbs, prnport.vbs, prnqctl.vbs, pubprn.vbs<br>
Powershell: <a href="../ps/out-printer.html">Out-Printer</a> - Send the output to a printer (lp) <br>
Equivalent bash command (Linux):<a href="../bash/printf.html"> printf</a> - Format and print data</p><!-- #BeginLibraryItem "/Library/foot_nt.lbi" --><p><script async="" src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
<!-- windows300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="7649547908"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->
