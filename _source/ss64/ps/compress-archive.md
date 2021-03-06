---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_ps.lbi" --><!-- #EndLibraryItem -->
<h1>Compress-Archive (PowerShell 5+)</h1> 
<p>Create a new archive, or zipped file, from specified files and folders. </p>
<pre>Syntax
      Compress-Archive [<b>-Path</b>] <i>String</i>[] [-DestinationPath] <i>String</i>
         [-CompressionLevel <i>String</i> ] [-Update]
            [-Confirm] [-WhatIf] [<a href="common.html"><i>CommonParameters</i></a>]

      Compress-Archive [-DestinationPath] <i>String</i> <b>-LiteralPath</b> <i>String</i>[]
         [-CompressionLevel <i>String</i> ] [-Update]
            [-Confirm] [-WhatIf] [<a href="common.html"><i>CommonParameters</i></a>]

key
   -CompressionLevel <i>String</i>
       How much compression to apply when creating the archive file.
       Faster compression requires less time to create the file, but can result in larger file sizes.
       The default value is Optimal. valid values for this parameter:
         -- Fastest       Use the fastest compression method available to decrease processing time;
                          this can result in larger file sizes.
         -- NoCompression Do not compress the source files.
         -- <u>Optimal</u>       Processing time is dependent on file size.

   -DestinationPath <i>String</i>
       The path to the archive output file. (required)
       The specified DestinationPath value should include the desired name of
       the output zipped file; it specifies either the absolute or relative path to the zipped file.
       If the DestinationPath does not include a .zip file name extension, one will be added.

   -LiteralPath <i>String</i>[]
       The path (or paths) to the files to add to the archive zipped file.
       Unlike the -Path parameter, the value of -LiteralPath is used exactly as it is typed.
       No characters are interpreted as wildcards. If the path includes escape characters,
       enclose each escape character in single quotation marks, to instruct PowerShell not to
       interpret any characters as escape sequences.
       To specify multiple paths, and include files in multiple locations in your output zipped file,
       use commas to separate the paths.[]

   -Path <i>String</i>[]
       Specifies the path or paths to the files that you want to add to the archive zipped file.
       This parameter can accept wildcard characters. Wildcard characters allow you to add all
       files in a folder to your zipped archive file.
       To specify multiple paths, and include files in multiple locations in your output zipped file,
       use commas to separate the paths.

   -Update
       Update the specified archive replacing older versions of files in the archive with newer
       versions of files that have the same names. This can be used to add files to an existing archive.

   -Confirm
       Prompt for confirmation before executing the command.

   -WhatIf
       Describe what would happen if you executed the command without actually executing the command.

   <a href="common.html">CommonParameters</a>:
       -Verbose, -Debug, -ErrorAction, -ErrorVariable, -WarningAction, -WarningVariable,
       -OutBuffer -OutVariable.</pre>
<p><b>Examples</b></p>
<p>Create a new archive file:</p>
<p><span class="code">C:\PS&gt; Compress-Archive -LiteralPath C:\demo\Draft.doc, C:\demo\final.doc -CompressionLevel Optimal -DestinationPath C:\output\new.Zip</span></p>
<p>Create an archive (<span class="code">new.zip</span>) from an entire folder (the .zip extension is added automatically):</p>
<p><span class="code">C:\PS&gt; Compress-Archive -Path C:\demo -DestinationPath C:\output\new</span></p>
<p>Create a new archive called <span class="code">Multi.zip</span>, containing multiple files specified with a <a href="syntax-wildcards.html">wildcard</a> character:</p>
<p><span class="code"> C:\PS&gt; Compress-Archive -Path C:\demo\* -CompressionLevel Fastest -DestinationPath C:\output\multi.zip</span></p>
<p>Update an existing archive file:</p>
<p><span class="code"> C:\PS&gt; Compress-Archive -Path C:\demo\* <b>-Update</b> -DestinationPath C:\output\Draft.Zip</span><br>
</p>
<p class="quote"><i>“The ability to reduce everything to simple fundamental laws does not imply the ability to start from those laws and reconstruct the universe” ~ Philip Warren Anderson</i></p><p><b>Related:</b><br>
<br>
<a href="expand-archive.html">Expand-Archive</a> - Extract files from an archive (zipped) file.<br>
<a href="zip.html">New-Zipfile</a> - for PowerShell 3/4</p>
<!-- #BeginLibraryItem "/Library/foot_ps.lbi" --><p>
<!-- PowerShell300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="6253539900"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="compress-archive.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2015<br>
Some rights reserved</div><!-- #EndLibraryItem -->

