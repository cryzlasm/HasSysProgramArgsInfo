---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_orapack.lbi" --><!-- #EndLibraryItem --><h1>PL/SQL Packages DBMS_AQADM</h1> 
<p> Manage Advanced Queuing configuration and administration.</p>
<pre>Subprocedures:

CREATE_QUEUE_TABLE  Create a queue table for messages of a predefined type. 

ALTER_QUEUE_TABLE   Alter an existing queue table. 

DROP_QUEUE_TABLE    Drop an existing queue table. 

CREATE_QUEUE        Create a queue in the specified queue table. 

CREATE_NP_QUEUE     Create a nonpersistent RAW queue. 

ALTER_QUEUE         Alter existing properties of a queue. 

DROP_QUEUE          Drop an existing queue. 

START_QUEUE         Enable the specified queue for enqueuing and/or dequeueing. 

STOP_QUEUE          Disable enqueuing and/or dequeuing on the specified queue. 

GRANT_SYSTEM_PRIVILEGE  Grant AQ system privileges to users and roles. 

REVOKE_SYSTEM_PRIVILEGE Revoke AQ system privileges from users and roles. 

GRANT_QUEUE_PRIVILEGE   Grant privileges on a queue to users and roles. 

REVOKE_QUEUE_PRIVILEGE  Revoke privileges on a queue from users and roles. 

ADD_SUBSCRIBER          Add a default subscriber to a queue. 

ALTER_SUBSCRIBER        Alter existing properties of a subscriber to a specified queue. 

REMOVE_SUBSCRIBER       Remove a default subscriber from a queue. 

SCHEDULE_PROPAGATION    Schedule propagation of messages from a queue to a
                        destination identified by a specific dblink. 

UNSCHEDULE_PROPAGATION  Unschedule previously scheduled propagation of messages
                        from a queue to a destination identified by a specific dblink. 

VERIFY_QUEUE_TYPES      Verify that the source and destination queues have identical types. 

ALTER_PROPAGATION_SCHEDULE   Alter parameters for a propagation schedule. 

ENABLE_PROPAGATION_SCHEDULE  Enable a previously disabled propagation schedule. 

DISABLE_PROPAGATION_SCHEDULE Disable a propagation schedule. 

MIGRATE_QUEUE_TABLE          Upgrade an 8.0-compatible queue table to an 8.1-compatible
                             queue table, or downgrade an 8.1-compatible queue table to
                             an 8.0-compatible queue table.  

CREATE_AQ_AGENT         Register a agent for AQ Internet access 

ALTER_AQ_AGENT          Alter a agent registered for AQ Internet access 

DROP_AQ_AGENT           Drop a agent registered for AQ Internet access 

ENABLE_DB_ACCESS        Grant an AQ Internet agent the privileges of a specific database user 

DISABLE_DB_ACCESS       Revoke the privileges of a database user from an AQ Internet agent 

ADD_ALIAS_TO_LDAP       Create an alias for a queue, agent, or a JMS ConnectionFactory in LDAP.  

DEL_ALIAS_FROM_LDAP     Drop an alias for a queue, agent, or JMS ConnectionFactory in LDAP. . 
<span class="body"><b><br></b>For full documentation of the packaged procedures above see the Oracle Manual:<br>"Oracle9i Supplied PL/SQL Packages and Types Reference"<b><br><br></b>or the book <a href="../links/orasqllinks.html">Oracle Built in Packages</a> <i>by Steven Feuerstein et al</i><b></b><b><br><br></b>Also see: Oracle9i Application Developer's Guide - Advanced Queuing <b><br>
</b></span><span class="body"><b>Related Views:</b></span> </pre>
<pre> <a href="../orad/DBA_QUEUES.html">DBA_QUEUES</a>           <a href="../orad/ALL_QUEUES.html">ALL_QUEUES</a>           <a href="../orad/USER_QUEUES.html">USER_QUEUES</a> 
                                                        <a href="../orad/QUEUE_PRIVILEGES.html">QUEUE_PRIVILEGES</a>  
 <a href="../orad/DBA_QUEUE_SCHEDULES.html">DBA_QUEUE_SCHEDULES</a>                       <a href="../orad/USER_QUEUE_SCHEDULES.html">USER_QUEUE_SCHEDULES</a> 
 <a href="../orad/DBA_QUEUE_TABLES.html">DBA_QUEUE_TABLES</a>     <a href="../orad/ALL_QUEUE_TABLES.html">ALL_QUEUE_TABLES</a>     <a href="../orad/USER_QUEUE_TABLES.html">USER_QUEUE_TABLES</a> </pre><!-- #BeginLibraryItem "/Library/foot_ora.lbi" --><p>
<!-- oracle-footer -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="4275490898"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="DBMS_AQADM.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

