---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_orapack.lbi" --><!-- #EndLibraryItem --><h1>PL/SQL Packages UTL_HTTP </h1> 
<p>Access data on the Internet over HTTP (Hypertext Transfer Protocol) 
  callouts, it also supports HTTP over the Secured Socket Layer protocol (SSL), 
  also known as HTTPS.</p>
<pre>Subprocedures:

 REQUEST Function
 REQUEST_PIECES Function
 
Session Settings
 SET_PROXY Procedure
 GET_PROXY Procedure
 SET_COOKIE_SUPPORT Procedure
 GET_COOKIE_SUPPORT Procedure
 SET_FOLLOW_REDIRECT Procedure
 GET_FOLLOW_REDIRECT Procedure
 SET_BODY_CHARSET Procedure
 GET_BODY_CHARSET Procedure
 SET_PERSISTENT_CONN_SUPPORT Procedure
 GET_PERSISTENT_CONN_SUPPORT Procedure
 SET_RESPONSE_ERROR_CHECK Procedure
 GET_RESPONSE_ERROR_CHECK Procedure
 SET_DETAILED_EXCP_SUPPORT Procedure
 GET_DETAILED_EXCP_SUPPORT Procedure
 SET_WALLET Procedure
 SET_TRANSFER_TIMEOUT Procedure
 GET_TRANSFER_TIMEOUT Procedure
 
HTTP Requests
 BEGIN_REQUEST Function
 SET_HEADER Procedure
 SET_AUTHENTICATION Procedure
 SET_COOKIE_SUPPPORT Procedure
 SET_FOLLOW_REDIRECT Procedure
 SET_BODY_CHARSET Procedure
 SET_PERSISTENT_CONN_SUPPORT Procedure
 WRITE_TEXT Procedure
 WRITE_LINE Procedure
 WRITE_RAW Procedure
 END_REQUEST Procedure
 
HTTP Responses
 GET_RESPONSE Function
 GET_HEADER_COUNT Function
 GET_HEADER Procedure
 GET_HEADER_BY_NAME Procedure
 GET_AUTHENTICATION Procedure
 SET_BODY_CHARSET Procedure
 READ_TEXT Procedure
 READ_LINE Procedure
 READ_RAW Procedure
 END_RESPONSE Procedure
 
HTTP Cookies
 GET_COOKIE_COUNT Function
 GET_COOKIES Function
 ADD_COOKIES Procedure
 CLEAR_COOKIES Procedure
 
HTTP Persistent Connections
 GET_PERSISTENT_CONN_COUNT Function
 GET_PERSISTENT_CONNS Procedure
 CLOSE_PERSISTENT_CONN Procedure
 CLOSE_PERSISTENT_CONNS Procedure
 
Error Conditions
 GET_DETAILED_SQLCODE Function
 GET_DETAILED_SQLERRM Function
  </pre>
<p><span class="body">For full documentation of the packaged procedures 
  above see the Oracle Manual:<br>
  "Oracle9i Supplied PL/SQL Packages and Types Reference"<b><br>
  <br>
  </b>or the book <a href="../links/orasqllinks.html">Oracle Built in Packages</a> 
  <i>by Steven Feuerstein et al</i><b><br>
  </b></span></p>
<pre><span class="body"><b>Related Commands:<br></b></span></pre>
<p><span class="body"><b>Related Views:</b></span> </p>
<p><span class="body"><br>
  </span></p><!-- #BeginLibraryItem "/Library/foot_ora.lbi" --><p>
<!-- oracle-footer -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="4275490898"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="UTL_HTTP.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

