---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_sql.lbi" --><!-- #EndLibraryItem --><h1>ALTER CERTIFICATE</h1>
<p>Alter a certificate in the database.</p>
<pre>Syntax:
      ALTER CERTIFICATE <i>certificate</i> REMOVE PRIVATE KEY

      ALTER CERTIFICATE <i>certificate</i> WITH PRIVATE KEY ( <i>private_key_spec</i> [ ,... ] )
	  
      ALTER CERTIFICATE <i>certificate</i> WITH ACTIVE FOR BEGIN DIALOG = [ON | OFF]

   private_key_spec:
       FILE = '<i>path_to_private_key</i>' 
       DECRYPTION BY PASSWORD = '<i>key_password</i>' 
       ENCRYPTION BY PASSWORD = '<i>password</i>'

Key:
   <i>key_password</i>   Password to decrypt the private key.
   <i>password</i>       Password to encrypt the private key of the certificate in the database.
   REMOVE PRIVATE KEY  The key should no longer be maintained inside the database.
   ACTIVE FOR BEGIN_DIALOG
                  Make the cert available to the initiator of a Service Broker dialog conversation</pre>
<p>If password complexity is enforced, the password must be &gt; 8 chars and contain upper/lower case and numeric/ Non-alphanumeric characters.</p>
<p>The private key must correspond to the public key specified by certificate</p>
<p>  Requires ALTER permission on the certificate.</p>
<p><b>Examples</b></p>
<pre>ALTER CERTIFICATE MyCert1 
    WITH PRIVATE KEY (DECRYPTION BY PASSWORD = 'oldCertPassword3456gsf',
    ENCRYPTION BY PASSWORD = 'newCertPassword$214kH');
GO


ALTER CERTIFICATE MyCert2 
    WITH PRIVATE KEY (ENCRYPTION BY PASSWORD = 'newKeyPassword64Jjh7',
    DECRYPTION BY PASSWORD = 'oldKeyPassword706tt');
GO</pre>
<p class="quote"><i>“If life was fair, Elvis would still be alive and all the impersonators would be dead” ~ Johnny Carson</i></p>
<p><b>Related  Commands:</b><br>
  <br>
  <a href="certificate_c.html">CREATE CERTIFICATE</a><br>
  <a href="certificate_d.html">DROP CERTIFICATE</a><br>
  <a href="certificate_b.html">BACKUP CERTIFICATE</a>  <br>
  <br>
  <b>Equivalent Oracle commands</b>:<a href="../bash/export.html"><br>
  <br>
  </a>Oracle Wallet:<br>
  <a href="../ora/system_a.html">ALTER SYSTEM</a> SET ENCRYPTION KEY..<br>
  <a href="../ora/system_a.html">ALTER SYSTEM</a> SET WALLET..</p><!-- #BeginLibraryItem "/Library/foot_sql.lbi" --><p>
<!-- ss64-sql -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="6953563613"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="certificate_a.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

