---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_bash.lbi" --><!-- #EndLibraryItem --><h1>groupmod</h1> 
<p>Modify a  user security group. </p>
<pre>Syntax
      groupmod [<i>options</i>] <i>GROUP</i> </pre>
<p>groupmod  modifies the definition of the specified <i>GROUP</i> by modifying the appropriate entry in the group database. </p>
<pre>Options
   -g, --gid GID
   
       The group ID of the given GROUP will be changed to GID.
       The value of GID must be a non-negative decimal integer.
       This value must be unique, unless the -o option is used.
       Values between 0 and 999 are typically reserved for system groups.

       Any files that have the old group ID and must continue to
       belong to <i>GROUP</i>, must have their group ID changed manually.

   -h, --help
       Display help message and exit.

   -n, --new-name <i>NEW_GROUP</i>
       The name of the group will be changed from <i>GROUP</i> to <i>NEW_GROUP</i>.

   -o, --non-unique
       When used with the -g option, allow to change the
       group GID to a non-unique value.

   -p, --password <i>PASSWORD</i>
       The encrypted password, as returned by crypt(3).

       Note: This option is not recommended because the
       password (or encrypted password) will be visible by
       users listing the processes.

       Make sure the password respects the system's password policy. </pre>
<h2>Configuration</h2>
<p>The following configuration variables in /etc/login.defs change the behavior of this tool:</p>
<p><span class="code">MAX_MEMBERS_PER_GROUP</span> (number)</p>
<p> Maximum members per group entry. When the maximum is reached, a new group entry (line) is started in /etc/group (with the same name, same password, and same GID).</p>
<p> The default value is 0, meaning that there are no limits in the number of members in a group.</p>
<p> This feature (split group) permits to limit the length of lines in the group file. This is useful to make sure that lines for NIS groups are not larger than 1024 characters.</p>
<p> If you need to enforce such limit, you can use 25.</p>
<p> Note: split groups might not be supported by all tools (even in the Shadow toolsuite). You should not use this variable unless you really need it. </p>
<h2>Files</h2>
<p><span class="code">/etc/group</span> Group account information. <br>
<span class="code">/etc/gshadow</span>Secure group account information. </p>
<h2>Exit Values</h2>
<p>The groupmod command exits with the following values:</p>
<pre> 0  Success 
 2  Invalid command syntax 
 3  Invalid argument to option 
 4  Specified group doesn't exist 
 6  Specified group doesn't exist 
 9  Group name already in use 
 10 Can't update group file </pre>
<p class="quote"><i class="quote">"When people show you who they are, believe them" ~ Maya Angelou</i></p>
<p><b>Related:</b><br>
<br>
<a href="groupadd.html">groupadd</a> - Add a group <br>
<a href="groupdel.html">groupdel</a> - Delete a group<br>
<a href="usermod.html">usermod</a> - Modify user account<br>
Equivalent Windows command: <a href="../nt/dsmod-group.html">dsmod</a> - Modify active directory object.</p><!-- #BeginLibraryItem "/Library/foot_bash.lbi" --><p><script async="" src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
<!-- bash300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="4615356305"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

