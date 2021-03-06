---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_nt.lbi" --><!-- #EndLibraryItem --><h1><a href="dsadd.html">DSADD</a> User (installable option either via <abbr title="Remote Server Administrative Tools / Active Directory Domain Services"><a href="../links/windows.html">RSAT</a> /AD DS</abbr> or <a href="../links/windows.html">adminpack.msi</a>)</h1>
<p>Add a user account to active directory.</p>
<pre>Syntax
      DSADD User <i>UserDN</i> [-samid <i>SAMName</i>] [-upn <i>UPN</i>] [<i>Options</i>] [-q] [{-uc | -uco | -uci}]

Key
   <i>UserDN</i>   Distinguished name of the user that you want to add.
            If omitted will be taken from standard input (stdin)

   <i>SAMName</i>  Unique SAM account name for this user
            (By default, the first 20 chars from the UserDN/CN)

   <i>UPN</i>      User Principal Name of the user to add, e.g. fred@SS64.com

   -q       Quiet, suppress all output

   -uc      Unicode format
   -uco     Unicode format for output only
   -uci     Unicode format for input only

Options:

   [-fn <i>FirstName</i>] [-mi <i>Initial</i>] [-ln <i>LastName</i>] [-display <i>DisplayName</i>]
   [-empid <i>EmployeeID</i>] [-pwd {<i>Password</i> | *}]
   [-desc <i>Description</i>] [-memberof <i>Group</i> ...] [-office <i>Office</i>] [-tel <i>PhoneNumber</i>]
   [-email <i>Email</i>] [-hometel <i>HomePhoneNumber</i>] [-pager <i>PagerNumber</i>]
   [-mobile <i>CellPhoneNumber</i>] [-fax <i>FaxNumber</i>] [-iptel <i>IPPhoneNumber</i>]
   [-webpg <i>WebPage</i>] [-title <i>Title</i>] [-dept <i>Department</i>]
   [-company <i>Company</i>] [-mgr <i>ManagersDistinguishedName</i>]
   [-hmdir <i>HomeDirectory</i>] [-hmdrv <i>DriveLetter</i>:][-profile <i>ProfilePath</i>]
   [-loscr <i>ScriptPath</i>] [-mustchpwd {yes | no}] [-canchpwd {yes | no}]
   [-reversiblepwd {yes | no}] [-pwdneverexpires {yes | no}]
   [-acctexpires <i>NumberOfDays</i>] [-disabled {yes | no}]
   [{-s <i>Server</i> | -d <i>Domain</i>}]
   [-u <i>UserName</i>] [-p {<i>Password</i> | *}]</pre>
<p>The special token <span class="code">$username$</span>, can be used  to replace the SAM account name in the value of the -email, -hmdir, -profile, and -webpg parameters.</p>
<p><b>Examples</b></p>
<p class="code">dsadd user "cn=fred,ou=staff,dc=ss64,dc=com"</p>
<p class="code">dsadd user "cn=JohnS,cn=users,dc=ss64,dc=com" -fn "john" -ln "Smith" -disabled no</p>
<p><i class="quote">“For a list of all the ways technology has failed to improve the quality of life, press three” ~ Alice Kahn</i><br>
<br>
<b> Related:</b></p>
<p><a href="dsadd.html">DSAdd</a> - Add object<br>
<a href="dsmod.html">DSMod</a> - Modify object<br>
<a href="dsget.html">DSGet</a> - Display object <br>
<a href="dsmove.html">DSMove</a> - Move object<br>
<a href="dsquery.html">DSQuery</a> - Search for objects <br>
<a href="dsrm.html">DSRM</a> - Delete object<br>
<a href="csvde.html">CSVDE</a> - Import or export AD info in CSV format.<br>
<a href="csvde.html">LDIFDE</a> - Edit AD Objects, extend schema, import or export AD information.<br>
PowerShell: <a href="../ps/new-aduser.html">New-adUser</a> - Create a new AD user. <br>
Equivalent bash commands (Linux): <a href="../bash/useradd.html">useradd</a> - Add user
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

