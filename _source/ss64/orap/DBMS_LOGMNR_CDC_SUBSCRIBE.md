---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_orapack.lbi" --><!-- #EndLibraryItem --><h1>PL/SQL Packages DBMS_LOGMNR_CDC_SUBSCRIBE</h1> 
<p>A Change Data Capture (CDC) system usually has one publisher that 
  captures and publishes changes for any number of Oracle source (relational) 
  tables and many subscribers. <br>
  The subscribers, typically applications, use this package to access the published 
  data. </p>
<pre>Subprocedures:

GET_SUBSCRIPTION_HANDLE Create a subscription handle that associates the subscription
                        with one change set. 

SUBSCRIBE               Specify the source tables and source columns for which the
                        subscriber wants to access change data. 

ACTIVATE_SUBSCRIPTION   Indicate that a subscription is ready to start accessing
                        change data. 

EXTEND_WINDOW           Set the subscription window boundaries (low-water and high-water mark)
                        so that new change data can be seen. 

PREPARE_SUBSCRIBER_VIEW Create a subscriber view in the subscriber's schema in which
                        the subscriber can query the change data encompassed by the
                        current subscription window. 

DROP_SUBSCRIBER_VIEW    Drop a subscriber view from the subscriber's schema. 

PURGE_WINDOW            Set the low-water mark for a subscription window to notify
                        the capture system that the subscriber is finished processing
                        a set of change data.  

DROP_SUBSCRIPTION       Drop a subscription that was created with a prior call to the
                        GET_SUBSCRIPTION_HANDLE procedure. 
<span class="body"><b><br></b>For full documentation of the packaged procedures above see the Oracle Manual:<br>"Oracle9i Supplied PL/SQL Packages and Types Reference"<b><br><br></b>or the book <a href="../links/orasqllinks.html">Oracle Built in Packages</a> <i>by Steven Feuerstein et al</i><b></b><b><br>
Related Commands:<br><br></b><a href="DBMS_LOGMNR_CDC_PUBLISH.html">DBMS_LOGMNR_CDC_PUBLISH</a></span> </pre>
<pre><span class="body"><b>Related Views:<br><br></b></span><a href="../orav/V$LOG.html">V$LOG</a> 
<a href="../orav/V$LOGFILE.html">V$LOGFILE</a> 
<a href="../orav/V$LOGHIST.html">V$LOGHIST</a> 
<a href="../orav/V$LOGMNR_CONTENTS.html">V$LOGMNR_CONTENTS</a> 
<a href="../orav/V$LOGMNR_DICTIONARY.html">V$LOGMNR_DICTIONARY</a> 
<a href="../orav/V$LOGMNR_LOGS.html">V$LOGMNR_LOGS</a> 
<a href="../orav/V$LOGMNR_PARAMETERS.html">V$LOGMNR_PARAMETERS</a> 
<a href="../orav/V$LOG_HISTORY.html">V$LOG_HISTORY</a>  </pre><!-- #BeginLibraryItem "/Library/foot_ora.lbi" --><p><script async="" src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
<!-- oracle-footer -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="4275490898"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

