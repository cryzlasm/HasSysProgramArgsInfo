---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_nt.lbi" --><!-- #EndLibraryItem --><h1><a href="net_useradmin.html">NET USER</a> options</h1>
<p>The NET Command is used to manage network resources as follows: 
<br>
<br>
options are as follows:<br>
<br>
<span class="code">/active:{no | yes} </span><br>
Enable or disable the user account. <br>
The default is yes (login is allowed) <br>
Disabling an account does not immediately log off any user sessions. <br>
<br>
<span class="code">/comment:"text" </span><br>
A descriptive comment (48 characters). <br>
<br>
<span class="code">/countrycode:<i>nnn</i> </span><br>
Use the OS country codes to implement specified language files for help and 
error messages. 0 = default country code. <br>
<br>
<span class="code">/expires:{<i>date</i> | never} </span><br>
Cause the user account to expire. date can be in mm/dd/yy, dd/mm/yy, or mmm,dd,yy 
format, depending on the /countrycode. Months can be a number, spelled out, 
or abbreviated with three letters. Use commas or slashes to separate parts of 
the date (no spaces).<br>
<br>
<span class="code">/fullname:"<i>name</i>" </span><br>
The user's full name (rather than a username). <br>
<br>
<span class="code">/homedir:<i>path</i></span><br>
The path for the user's home directory. The path must exist. <br>
<br>
<span class="code">/homedirreq:{yes | no} </span><br>
Is a home directory required? <br>
<br>
<span class="code">/passwordchg:{yes | no} </span><br>
Can users change their own password? The default is yes. <br>
<br>
<span class="code">/passwordreq:{yes | no} </span><br>
Must a user account have a password? The default is yes. <br>
<br>
<span class="code">/profilepath:[<i>path</i>] </span><br>
The path for the user's logon profile. <br>
This pathname will be used to store their registry profile. <br>
<br>
<span class="code">/scriptpath:path </span><br>
Path for the user's logon script. This is relative to %systemroot%\SYSTEM32\REPL\IMPORT\SCRIPTS. 
(The NETLOGON share) You can't use an absolute path.<br>
<br>
<span class="code">/times:{times | all} </span><br>
The times the user is allowed to use the computer. <br>
The times value is expressed as day[-day][,day[-day]] , time[-time][,time[-time]], 
limited to 1-hour time increments. <br>
Days can be spelled out or abbreviated (M,T,W,Th,F,Sa,Su). <br>
Hours can be 12- or 24-hour notation. For 12-hour notation, use AM, PM, or A.M., 
P.M. <br>
The value <i>all</i> means a user can always log on. <br>
A null value (blank) means a user can never log on. <br>
Separate day and time with commas, and units of day and time with semicolons 
(for example, M,4AM-5PM;T,1PM-3PM). <br>
Do not use spaces when designating /times. <br>
<br>
<span class="code">/usercomment:"text" </span><br>
Add or change the "User comment" for the account. Only Administrators can edit 
this. <br>
<br>
<span class="code">/workstations:{computername[,...] | *} </span><br>
List as many as eight workstations from which a user can log on to the network. 
<br>
Separate multiple entries in the list with commas.<br>
If /workstations has no list, or if the list is *, the user can log on from 
any computer.<br>
  <br>
<b>Examples</b></p>
<pre>NET USER jbloggs apass /ADD /fullname:"Joe Bloggs" /scriptpath:logon.cmd

NET USER alice_smith /ACTIVE:yes /comment:"RAS User" /DOMAIN

NET USER fred_bloggs /HOMEDIR:\\Server_05\ /PROFILEPATH:\\Server_05\D$\USERS\fred_bloggs /DOMAIN</pre>
<p class="quote"><i>”The only real way to look younger is not to be born so soon“ ~ Charles Schulz </i> </p>
<p> <b>Related:</b></p>
<p><a href="mode.html">MODE</a> - Configure a system device.<br>
<a href="netdom.html">NETDOM</a> - Domain Manager.<br>
<a href="prnmngr.html">PRNMNGR</a> - Add, delete, list printers and printer connections.<br>
<a href="pspasswd.html">PsPasswd</a> - Change account password.<br>
<a href="sc.html">SC</a> - Service Control.<br>
<a href="https://support.microsoft.com/kb/149427">Q149427</a> - Change Password from the CMD prompt.<br>
Equivalent bash command (Linux): <a href="../bash/usermod.html">usermod</a>  - Modify user account.</p><!-- #BeginLibraryItem "/Library/foot_nt.lbi" --><p><script async="" src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
<!-- windows300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="7649547908"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

