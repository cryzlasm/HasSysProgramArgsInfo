---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_nt.lbi" --><!-- #EndLibraryItem --><h1><a href="dsadd.html">DSMOD</a> User    (installable option either via <abbr title="Remote Server Administrative Tools / Active Directory Domain Services"><a href="../links/windows.html">RSAT</a> /AD DS</abbr> or <a href="../links/windows.html">adminpack.msi</a>)</h1>
<p>Modify a user account in active directory.</p>
<pre>Syntax
      dsmod user <i>UserDN</i> [-upn <i>UPN</i>] [-c] [-q] [{-uc | -uco | -uci}] [<i>Options</i>] 

Key
   <i>UserDN</i>   Distinguished name of the user that you want to modify.
            If omitted will be taken from standard input (stdin)

   <i>UPN</i>      User Principal Name of the user, e.g. fred@SS64.com

   -c       Continue with the next object after any error (when you specify multiple target objects)
            by default dsmod will exit when the first error occurs.

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
   [-loscr <i>LoginScriptPath</i>] [-mustchpwd {yes | no}] [-canchpwd {yes | no}]
   [-reversiblepwd {yes | no}] [-pwdneverexpires {yes | no}]
   [-acctexpires <i>NumberOfDays</i>] [-disabled {yes | no}]
   [{-s <i>Server</i> | -d <i>Domain</i>}]
   [-u <i>UserName</i>] [-p {<i>Password</i> | *}]
</pre>
<p>To prevent a new password from being displayed on screen, enter it as an asterisk <span class="code">*</span> , DSMOD  will then  prompt you (twice) to type the new password "blind".</p>
<p>The special token <span class="code">$username$</span>, can be used to replace the SAM account name in the value of the -email, -hmdir, -profile, and -webpg parameters.</p>
<p><b>Examples</b></p>
<p>Disable freds account: </p>
<p class="code">C:\&gt; set _fred="cn=fred,ou=Users,ou=AcmeCo,dc=ss64,dc=com"<br>
C:\&gt; dsmod user %_fred% -disabled yes </p>
<p>Set the profile path of Fred and Ann using the <span class="code">$username$</span> token:</p>
<p class="code">C:\&gt; set _ann="cn=AnnSmith,ou=Users,ou=AcmeCo,dc=ss64,dc=com"<br>
C:\&gt; dsmod user %_fred% %_ann% -profile \users\$username$\profile</p>
<p><i class="quote">“A person is a success if they get up in the morning and gets to bed at night and in between does what he wants to do” ~ Bob Dylan</i><br>
<br>
<b> Related commands:</b></p>
<p><a href="dsadd.html">DSAdd</a> - Add object<br>
<a href="dsmod.html">DSMod</a> - Modify object<br>
<a href="dsget.html">DSGet</a> - Display object <br>
<a href="dsmove.html">DSMove</a> - Move object<br>
<a href="dsquery.html">DSQuery</a> - Search for objects <br>
<a href="dsrm.html">DSRM</a> - Delete object<br>
<a href="admodcmd.html">ADmodcmd</a> - Active Directory Bulk Modify<br>
PowerShell: <a href="../ps/set-aduser.html">Set-adUser</a> - Modify an AD user. <br>
Equivalent bash commands (Linux):
<a href="../bash/usermod.html">usermod</a> - modify user </p><!-- #BeginLibraryItem "/Library/foot_nt.lbi" --><p>
<!-- windows300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="7649547908"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="dsmod-user.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

