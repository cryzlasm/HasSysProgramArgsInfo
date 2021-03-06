---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_nt.lbi" --><!-- #EndLibraryItem --><h1>FORFILES.exe (Native command in Vista/Windows7/2008, via <a href="../links/windows.html#kits">Resource Kit</a> for XP)
<!--Win NT update ftp://ftp.microsoft.com/ResKit/y2kfix/x86/ -->
</h1>
<p>Select a file (or set of files) and execute a command on each file. Batch processing.</p>
<pre>Syntax
      FORFILES [/p <i>Path</i>] [/<b>m</b><i> SrchMask</i>] [/s] [/<b>c</b><i> Command</i>] [/<b>d</b><i> </i>[+ | -] {<i>date</i> | <i>dd</i>}]   

Key
   /p <i>Path</i>      The Path to search  (default=current folder)

   /m <i>SrchMask</i>  Select files matching the specified search mask
                default = *.*

   /s           Recurse into sub-folders

   /C <i>command</i>   The command to execute for each file.
                Wrap the command string in double quotes.
                Default = "cmd /c echo @file"

                The Command variables listed below can also be used in the
                command string.

   /D <i>date</i>      Select files with a last modified date greater than or 
                equal to (+), or less than or equal to (-),
                the specified <i>date</i>, using the region specific date format
                typically "MM/DD/yyyy" or "DD/MM/yyyy"

   /D + <i>dd</i>      Select files with a last modified date greater than or
                equal to the current date plus "dd" days. (in the future)

   /D - <i>dd</i>      Select files with a last modified date less than or
                equal to the current date minus "dd" days. (in the past)

                A valid "dd" number of days can be any number in
                the range of 0 to 32768.   (89 years)
                "+" is taken as default sign if not specified.

   Command Variables:
      @file    The name of the file.
      @fname   The file name without extension.                
      @ext     Only the extension of the file.                  
      @path    Full path of the file.
      @relpath Relative path of the file.          
      @isdir   Returns "TRUE" if a file type is a directory,
               and "FALSE" for files.
      @fsize   Size of the file in bytes.
      @fdate   Last modified date of the file.
      @ftime   Last modified time of the file.</pre>
<p> To include <a href="../ascii.html">special characters</a> in the command line, use the hexadecimal code for the character in 0xHH format (ex. 0x09 for tab). <a href="syntax-internal.html">Internal</a> CMD.exe commands should be preceded with "cmd /c".</p>
<h2>Bugs</h2>
<blockquote>
<p>Recent versions of FORFILES contain a bug, in processing command line arguments: running a <span class="code">/c</span>command that contains an argument such as<span class="code"> FORFILES /C "PING -a" </span> <a href="http://stackoverflow.com/a/26990159/1720814">will fail</a>. The expected convention is that <span class="code">argv[0]</span> will contain the program name, but FORFILES  instead passes the first <i>argument</i> as <span class="code">argv[0]</span>. Old versions e.g. FORFILES version 1.46 (24th March 2006) do not suffer from this bug.</p>
<p>One workaround for this is to include the program name as the first argument, this will be passed along by FORFILES and the CreateProcess call will then work as expected:<br>
<span class="code">FORFILES /c "Ping Ping -a"</span></p>
<p>Alternatively pass the command to <a href="cmd.html"><span class="code">CMD /C</span></a>, which will then process all the arguments correctly, if you want to use an internal commmand, or if you want to use redirection, pipe, command concatenation, etc, then you must use CMD /C.<br>
<span class="code">FORFILES /c "CMD /C Ping -a"</span></p>
<p>There are some disadvantages to using CMD.exe with FORFILES, a new process will be created and destroyed for every file that FORFILES processes, so if you loop through 1000 files, then 1000 copies of CMD.exe will be opened and closed, this will affect performance. Also any variable created with <span class="code">SET</span> will be lost as soon as FORFILES moves on to the next file.</p>
<p>In most cases using a simple <a href="for2.html">FOR</a> command along with <a href="syntax-args.html">Parameter extensions</a> will provide a better/less buggy solution.<br>
</p>
</blockquote>
<h2>Return values</h2>
<blockquote>
<p>If ForFiles finds one or more matches if will return <a href="errorlevel.html">Errorlevel</a> =0<br>
If ForFiles finds no matches if will return Errorlevel =1 and will print<i> "ERROR: No files found with the specified search criteria."</i></p>
</blockquote>
<h2>Notes</h2>
<blockquote>
<p>Early versions of FORFILES were  supplied in the NT resource kits and  used unix style '-' parameters,
(still supported for backwards compatibility) also the /D option  accepted dates only in <span class="code">DDMMYYYYHHMN</span> format.</p>
<p>Last modified dates set in the future are not common but can happen when your computer clock date/time is changed e.g. due to daylight savings time. </p>
</blockquote>
<p><b>Examples:</b></p>
<p>Delete the testfile if it is is 5 days old or older:<br>
<span class="code">C:\&gt; forfiles /m testfile.txt /c "cmd /c Del testfile.txt " /d -5</span></p>
<p>Find .xls file that were last modified 30 days ago or older <br>
<span class="code">C:\&gt; FORFILES /M *.xls /C "cmd /c echo @path was changed 30 days ago" /D -30 </span></p>
<p>List the size of all .doc files:<br>
<span class="code"> C:\&gt; FORFILES /S /M *.doc /C "cmd /c echo @fsize" </span></p>
<p><i class="quote">Rule #1: Don’t sweat the small stuff. <br>
Rule #2: It's all small stuff - Dr Robert S Eliot, University of Nebraska cardiologist</i><br>
<br>
<b>Related:</b></p>
<p>Syntax - <a href="syntax-delolder.html">Delete files older than <i>N </i>days</a><br>
<a href="http://blogs.msdn.com/b/oldnewthing/archive/2012/08/03/10334560.aspx">OldNewThing</a> - Combining ForFiles and FOR <br>
<a href="syntax-args.html">Parameter extensions</a> - Get  file size(s).<br>
<a href="for.html">FOR</a> - Conditionally perform a command several times.<br>
Powershell:  <a href="../ps/foreach-object.html">ForEach-Object</a> - Loop for each object in the pipeline<br>
Equivalent bash command (Linux): <a href="../bash/find.html">find</a> - Search for files that meet a desired criteria</p><!-- #BeginLibraryItem "/Library/foot_nt.lbi" --><p>
<!-- windows300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="7649547908"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="forfiles.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

