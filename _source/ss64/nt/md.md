---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_nt.lbi" --><!-- #EndLibraryItem --><h1>MD</h1> 
<p>Make Directory - Creates a new folder. </p>
<pre>Syntax
      MD [<i>drive</i>:]<i>path</i>

Key
   The path can consist of any valid characters up to the maximum path length available</pre>
<p> You should avoid using the following characters in folder names 
  - they are  known to cause problems<br>
  <br>
  © ® " - &amp; ' ^ ( ) and @<br>
  <br>
  Many extended characters will not be recognised by older 16 bit windows 
  applications.<br>
  <br>
  The maximum length of a full pathname (folders and filename) under NTFS or FAT 
  is 260 characters. <br>
  <br>
  Folder names are not case sensitive, but only folder names longer than 8 characters 
will always retain their case, as typed.</p>
<h2>Errorlevels</h2>
<blockquote>
<p>If the Directory was   successfully created <a href="errorlevel.html">%ERRORLEVEL%</a> = 0<br>
Directory could not be created = 1</p>
</blockquote>
<p><b>Examples<br>
</b></p>
<pre>C:\temp&gt; MD MyFolder</pre>
<p> Make several folders with one command<b><br>
  </b></p>
<pre>C:\temp&gt; MD Alpha Beta Gamma</pre>
<p> will create<br>
  <br>
  C:\temp\Alpha\<br>
  C:\temp\Beta\<br>
  C:\temp\Gamma\ <b><br>
  <br>
  </b>Make an entire path <br>
  MD creates any intermediate directories in the path, if needed. <br>
For example, assuming \utils does not exist then: </p>
<pre>MD \utils\downloads\Editor 
   
   is the same as: 
   
   md \utils 
   cd \utils 
   md downloads 
   cd downloads 
   md Editor <br><br>for long filenames include quotes<br><br>MD "\utils\downloads\Super New Editor" </pre>
<p> You cannot create a folder with the same name as any of the following 
devices:<br>
CON, PRN, LPT1, LPT2 ..LPT9, COM1, COM2 ..COM9<br>
This limitation ensures that <a href="syntax-redirection.html">redirection</a> to these devices will always work.<br>
<br>
If you plan to copy data onto CDROM avoid folder trees more than 8 folders deep.<br>
<br>
MKDIR is a synonym for MD <br>
<br>
<i class="quote">"We are American at puberty. We die French" - Evelyn Waugh </i> <br>
<br>
<b> Related:</b><br>
<br>
<a href="del.html">RD</a> - Delete folders or entire folder trees<br>
<a href="mklink.html">MKLINK</a> / Linkd - Link an NTFS directory to a target object.<br>
powershell: 
<a href="../ps/new-item.html">New-Item</a> -path c:\ -name "Demo Folder" -type directory<br>
Equivalent bash command (Linux): <a href="../bash/mkdir.html"> mkdir</a> - Create new folder(s)</p><!-- #BeginLibraryItem "/Library/foot_nt.lbi" --><p>
<!-- windows300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="7649547908"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="md.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

