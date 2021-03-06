---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_nt.lbi" --><!-- #EndLibraryItem --><h1><a href="makecab.html">MAKECAB</a> Directive File syntax</h1> 
<p>Directives begin with a period ("."), followed by a command name, and possibly by (blank delimited) arguments.</p>
<div class="tablediv"><table>

<tbody><tr><th>Syntax</th><th>Description</th></tr>
<tr><td class="code">;</td><td>Comment (anywhere on a DDF line)<br>
The ; character is also a standard batch file delimiter so this makes it  possible to create a self-contained batch file/directive script, lines prefixed with ; will be commented out only for makecab.</td></tr>
<tr><td class="code"><b>src</b> [dest] [<b>/inf=yes|no</b>] [<b>/unique=yes|no</b>] [/x=y ...]</td><td>File Copy command</td></tr>
<tr><td class="code"><b>dest</b> [/x=y ...]</td><td>File Reference command</td></tr>
<tr>
<td class="code"><b>.Define</b> <i>variable</i>=[<i>value</i>]</td><td>Define <i>variable</i> to be equal to <i>value </i>(see .Option Explicit)</td></tr>
<tr>
<td class="code"><b>.Delete</b> <i>variable</i></td><td>Delete a variable definition</td></tr>
<tr><td><b class="code">.Dump</b> </td><td>Display all variable definitions</td></tr>
<tr><td><b class="code">.InfBegin Disk | Cabinet | Folder</b> </td><td>Copy lines to specified INF file section</td></tr>
<tr><td><b class="code">.InfEnd</b> </td><td>End an <b>.InfBegin</b> section</td></tr>
<tr>
<td class="code"><b>.InfWrite</b> <i>string</i></td><td>Write "string" to file section of INF file</td></tr>
<tr>
<td class="code"><b>.InfWriteCabinet</b> <i>string</i></td><td>Write "string" to cabinet section of INF file</td></tr>
<tr>
<td class="code"><b>.InfWriteDisk</b> <i>string</i></td><td>Write "string" to disk section of INF file</td></tr>
<tr><td><b><span class="code">.New</span></b><span class="code"> Disk | Cabinet | Folder</span></td><td>Start a new Disk, Cabinet, or Folder</td></tr>
<tr><td><b class="code">.Option Explicit</b> </td><td>Require <b>.Define</b> first time for user-defined variables</td></tr>
<tr>
<td class="code"><b>.Set</b> <i>variable</i>=[<i>value</i>]</td><td>Set <i>variable</i> to be equal to <i>value</i></td></tr>
<tr><td>%variable%</td><td>Substitute value of <em>variable</em></td></tr>
<tr><td><em>&lt;blank line&gt;</em></td><td>Blank lines are ignored</td></tr>
</tbody></table></div>
<p><a id="variables"></a>Variable Summary</p>
<div class="tablediv"><table>
<tbody><tr><th>Standard Variables</th><th>Description</th></tr>
<tr><td><span class="code">Cabinet</span>=ON | OFF</td><td>Turns Cabinet Mode on or off</td></tr>
<tr><td><span class="code">CabinetFileCountThreshold</span>=<i>count</i></td><td>Threshold count of files per Cabinet</td></tr>
<tr><td><span class="code">CabinetName<em><b>n</b></em></span>=<i>filename</i></td><td>Cabinet file name for cabinet number <em>n</em></td></tr>
<tr><td><span class="code">CabinetNameTemplate</span>=<i>template</i></td><td>Cabinet file name template; * is replaced by Cabinet number</td></tr>
<tr><td><span class="code">ChecksumWidth</span>=1 | 2 | ... | 8</td><td>Max low-order hex digits displayed by INF <b>csum</b> parameter</td></tr>
<tr><td><span class="code">ClusterSize</span><b class="code">=</b><i>bytesPerCluster</i></td><td>Cluster size on diskette (default is 512 bytes)</td></tr>
<tr><td><span class="code">Compress</span>=ON | OFF</td><td>Turns compression on or off</td></tr>
<tr><td><span class="code">CompressedFileExtensionChar=</span><i>char</i></td><td>Last character of the file extension for compressed files</td></tr>
<tr><td><span class="code">CompressionMemory</span>=15 | 16 | ... | 21</td><td>The window size for LZX compression</td></tr>
<tr><td><span class="code">CompressionType</span>=MSZIP | LZX</td><td>Compression engine</td></tr>
<tr><td><span class="code">DestinationDir</span><b>=</b><i>path</i></td><td>Default path for destination files (stored in cabinet file)</td></tr>
<tr><td><span class="code">DiskDirectory<b><em>n</em></b></span>=<i>directory</i></td><td>Output directory name for disk <em>n</em></td></tr>
<tr><td><span class="code">DiskDirectoryTemplate</span>=<i>template</i></td><td>Output directory name template; * is replaced by disk number</td></tr>
<tr><td><span class="code">DiskLabel<em><b>n</b></em></span>=<i>label</i></td><td>Printed disk label name for disk <em>n</em></td></tr>
<tr><td><span class="code">DiskLabelTemplate</span>=<i>template</i></td><td>Printed disk label name template; * is replaced by disk number</td></tr>
<tr><td><span class="code">DoNotCopyFiles</span>= ON | OFF</td><td>Controls whether files are actually copied (ACME ADMIN.INF)</td></tr>
<tr><td><span class="code">FolderFileCountThreshold</span>=<i>count</i></td><td>Threshold count of files per Folder</td></tr>
<tr><td><span class="code">FolderSizeThreshold</span>=<i>size</i></td><td>Threshold folder size for current folder</td></tr>
<tr><td><span class="code">GenerateInf</span>=ON | OFF</td>
<td>Control Unified vs. Relation INF generation mode.<br>
A File Copy command is distinguished from a File Reference command by<br>
the setting of the <b>GenerateInf</b> variable.</td></tr>
<tr><td><span class="code">Inf<em><b>Xxx</b></em></span>=<i>string</i></td><td>Set default value for INF Parameter Xxx</td></tr>
<tr><td><span class="code">InfCabinetHeader</span>[<em>n</em>]=<i>string</i></td><td>INF cabinet section header text</td></tr>
<tr><td><span class="code">InfCabinetLineFormat</span>[<em>n</em>]=<i>format string</i></td><td>INF cabinet section detail line format</td></tr>
<tr><td><span class="code">InfCommentString</span>=<i>string</i></td><td>INF comment string</td></tr>
<tr><td><span class="code">InfDateFormat</span>=yyyy-mm-dd | mm/dd/yy</td><td>INF date format</td></tr>
<tr><td><span class="code">InfDiskHeader</span>[<em>n</em>]=<i>string</i></td><td>INF disk section header text</td></tr>
<tr><td><span class="code">InfDiskLineFormat</span>[<em>n</em>]=<i>format string</i></td><td>INF disk section detail line format</td></tr>
<tr><td><span class="code">InfFileHeader</span>[<em>n</em>]=<i>string</i></td><td>INF file section header text</td></tr>
<tr><td><span class="code">InfFileLineFormat</span>[<em>n</em>]=<i>format string</i></td><td>INF file section detail line format</td></tr>
<tr><td><span class="code">InfFileName</span>=<i>filename</i></td><td>Name of INF file</td></tr>
<tr><td><span class="code">InfFooter</span>[<em>n</em>]=<i>string</i></td><td>INF footer text</td></tr>
<tr><td><span class="code">InfHeader</span>[<em>n</em>]=<i>string</i></td><td>INF header text</td></tr>
<tr><td><span class="code">InfSectionOrder</span>=[D | C | F]*</td><td>INF section order (disk, cabinet, file)</td></tr>
<tr><td><span class="code">MaxCabinetSize</span>=<i>size</i></td><td>Maximum cabinet file size for current cabinet</td></tr>
<tr><td><span class="code">MaxDiskFileCount</span>=<i>count</i></td><td>Maximum count of files per Disk</td></tr>
<tr><td><span class="code">MaxDiskSize</span>[<em>n</em>]=<i>size</i></td><td>Maximum disk size</td></tr>
<tr><td><span class="code">MaxErrors</span>=<i>count</i></td><td>Maximum errors allowed before pass 1 terminates</td></tr>
<tr><td><span class="code">ReservePerCabinetSize</span>=<i>size</i></td><td>Base amount of space to reserve for FCRESERVE data</td></tr>
<tr><td><span class="code">ReservePerDataBlockSize</span>=<i>size</i></td><td>Amount of space to reserve in each data block</td></tr>
<tr><td><span class="code">ReservePerFolderSize</span>=<i>size</i></td><td>Amount of additional space in FCRESERVE for each folder</td></tr>
<tr><td><span class="code">RptFileName</span>=<i>filename</i></td><td>Name of RPT file</td></tr>
<tr><td><span class="code">SourceDir</span>=<i>path</i></td><td>Default path for source files</td></tr>
<tr><td><span class="code">UniqueFiles</span>=ON | OFF</td><td>Control whether duplicate destination file names are allowed</td></tr>
</tbody></table></div>
<p>Store the directives in a .ddf (ascii text) file and call with <a href="makecab.html"><span class="code">MAKECAB /F</span></a></p>
<p><b>Example</b></p>
<p>Remove all the default limits on file sizes etc, (this will prevent any <i>"File X does not exist" </i>errors):</p>
<p class="code">.Set CabinetFileCountThreshold=0 <br>
.Set FolderFileCountThreshold=0<br>
.Set FolderSizeThreshold=0 <br>
.Set MaxCabinetSize=0 <br>
.Set MaxDiskFileCount=0 <br>
.Set MaxDiskSize=0</p>
<p>If <span class="code">.Option Explicit</span> is specified, then you must first use <span class="code">.Define</span> to define any user-defined variables before you can use <span class="code">.Set</span> to modify them.</p>
<p> For standard MakeCAB variables, .Define is not permitted, and only <span class="code">.Set</span> can be used.<br>
If <span class="code">.Option Explicit</span> is not specified, then <span class="code">.Define</span> is equivalent to <span class="code">.Set</span>.</p>
<h2>INF Parameters </h2>
<pre>Parameter <u>Disk</u> <u>Cab</u> <u>File</u>  Description </pre>
<pre>  attr             Yes   File attributes (A=archive, R=read-only, H=hidden, S=system) 
  cab#         Yes Yes   Cabinet number (0 means not in cabinet, 1 or higher is cabinet number)
 cabfile       Yes       Cabinet file name
  csum             Yes   Checksum
  date             Yes   File date (mm/dd/yy or yyyy-mm-dd, depending upon InfDateFormat)
  disk#   Yes  Yes Yes   Disk number (1-based)
  file             Yes   Destination file name in layout (in cabinet or on a disk)
  file#            Yes   Destination file number in layout (first file is 1, second file is 2, ...);
                         the order of File Copy Commands controls the file number, so in relational
                         INF mode the order of File Reference Commands has no affect on the file number.
  label   Yes            Disk user-readable label (value comes from DiskLabeln, if defined, and
                         otherwise is constructed from DiskLabelTemplate).
  lang             Yes   Language (i.e., VER.DLL info) in base 10, blank separated if multiple values
  size             Yes   File size (only affects value written to INF file)
  time             Yes   File time (hh:mm:ss[a|p])
  ver              Yes   Binary File version (n.n.n.n base 10 format)
  vers             Yes   String File version -- can be different from ver!
  attr             Yes  File attributes (A=archive, R=read-only, H=hidden, S=system)</pre>
<p class="quote"><i>“One resolution I have made, and try always to keep, is this: To rise above little things” - John Burroughs</i> </p>
<p><b>Related:</b></p>
<p><a href="makecab.html">MAKECAB</a> - Create .CAB files<br>
<a href="http://msdn.microsoft.com/en-us/library/bb417343.aspx#microsoftmakecabusersguide">MakeCab users guide</a> - Extensive makecab documentation from Microsoft.<br>
</p><!-- #BeginLibraryItem "/Library/foot_nt.lbi" --><p><script async="" src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
<!-- windows300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="7649547908"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->
