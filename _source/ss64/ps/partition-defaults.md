---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_ps.lbi" --><!-- #EndLibraryItem --><h1>AD Partition defaults </h1> 
<p>In many cases, a default value will be used for  <span class="code">-Partition</span>  if no value is specified. <br>
The rules for determining the default value are given below.</p>
<p> Note that rules listed first are evaluated first and once a default value can be determined, no further rules will be evaluated.</p>
<p>In AD DS environments, a default value for <span class="code">-Partition</span> will be set in the following cases:</p>
<ul>
  <li>If the Identity parameter is set to a distinguished name, the default value of Partition
  is automatically generated from this distinguished name.</li>
  <li>If running cmdlets from an AD provider drive, the default value of Partition
  is automatically generated from the current path in the drive.</li>
</ul>
<p> If none of the previous cases apply, the default value of Partition will be set to the
    default partition or naming context of the target domain.<br>
  <br>
In AD LDS environments, a default value for <span class="code">-Partition</span> will be set in the following cases:</p>
<ul>
  <li>If the Identity parameter is set to a distinguished name, the default value of Partition
  is automatically generated from this distinguished name. </li>
  <li> If running cmdlets from an Active Directory provider drive, the default value of Partition
    is automatically generated from the current path in the drive.</li>
  <li>If the target AD LDS instance has a default naming context, the default value of Partition
    will be set to the default naming context.</li>
</ul>
<p>To specify a default naming context for an AD LDS environment, set the msDS-default NamingContext
property of the AD directory service agent (DSA) object (nTDSDSA) for the AD LDS instance.</p>
<ul>
  <li>If none of the previous cases apply, the Partition parameter will not take any default value.<br>
  </li>
</ul>
<p class="quote"><i> “If you think technology can solve your security problems, then you don't understand the problems and you don't understand the technology” ~ <a href="http://www.schneier.com/">Bruce Schneier </a></i></p>
<p><b>Related:</b></p>
<p><a href="ad.html">AD commands </a></p><!-- #BeginLibraryItem "/Library/foot_ps.lbi" --><p>
<!-- PowerShell300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="6253539900"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="partition-defaults.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2015<br>
Some rights reserved</div><!-- #EndLibraryItem -->

