---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_sql.lbi" --><!-- #EndLibraryItem --><h1>REVOKE from user/role</h1>
<p>Revoke permissions granted or denied to a  database user, database role, or application role.</p>
<pre>Syntax
      REVOKE [ GRANT OPTION FOR ] <i>permission</i>  [ ,...<i>n</i> ] 
         {TO | FROM} <i>grantee_principal </i>[,...n ]
            [CASCADE]
               [AS <i>grantor_principal</i>]

      REVOKE [GRANT OPTION FOR] <i>permission</i> [,...<i>n</i>]  
         ON 
           {  [ USER :: <i>database_user</i> ]
            | [ ROLE :: <i>database_role</i> ]
            | [ APPLICATION ROLE :: <i>application_role</i> ]
           }
         {FROM | TO} <i>database_principal</i> [ ,...n ]
            [CASCADE ]
               [AS <i>database_principal</i>]


      REVOKE [GRANT OPTION FOR] <i>db_permission</i> | ALL [ PRIVILEGES ] [,...<i>n</i> ]
         [ON LOGIN::<i>SQL_Server_login</i> ]  
            {TO | FROM } <i>database_principal</i> [ ,...<i>n</i> ] 
               [CASCADE ]
                  [AS <i>database_principal</i> ]
Key:

   database_principal
                user /role /application role
                user mapped to a Windows login/group/certificate
                user mapped to an asymmetric key
                user with no login

   grantee_principal/grantor_principal
                SQL Server login or SQL Login mapped to a Windows login/group/certificate/asymmetric_key
                The grantor_principal for an Endpoint must be a SQL Server login

   cascade      Also revoke from other principals that have been
                granted or denied by this principal.

   permissions
                ALL (= BACKUP DATABASE, BACKUP LOG, CREATE DATABASE, CREATE DEFAULT,
                       CREATE FUNCTION, CREATE PROCEDURE, CREATE RULE, CREATE TABLE, CREATE VIEW)
                ALTER
                ALTER ANY APPLICATION ROLE
                ALTER ANY ASSEMBLY
                CREATE AGGREGATE
                CREATE ASSEMBLY
                UNSAFE ASSEMBLY
                EXTERNAL ACCESS ASSEMBLY
                CREATE ASYMMETRIC KEY
                ALTER ANY ASYMMETRIC KEY
                AUTHENTICATE
                AUTHENTICATE SERVER	
                BACKUP DATABASE
                BACKUP LOG
                ADMINISTER BULK OPERATIONS	
                ALTER ANY CONNECTION	
                ALTER ANY CREDENTIAL	
                CHECKPOINT
                CONNECT
                CONNECT REPLICATION
                CONTROL
                CREATE CERTIFICATE
                ALTER ANY CERTIFICATE
                CREATE CONTRACT
                ALTER ANY CONTRACT
                VIEW DATABASE STATE
                CREATE DATABASE
                CREATE ANY DATABASE	
                ALTER ANY DATABASE
                VIEW ANY DATABASE
                CREATE DDL EVENT NOTIFICATION
                CREATE DATABASE DDL EVENT NOTIFICATION
                CREATE TRACE EVENT NOTIFICATION
                ALTER ANY DATABASE EVENT NOTIFICATION
                ALTER ANY DATASPACE
                CREATE DEFAULT
                VIEW DEFINITION
                VIEW ANY DEFINITION
                DELETE
                CREATE ENDPOINT
                ALTER ANY ENDPOINT
                ALTER ANY EVENT NOTIFICATION	
                EXECUTE
                CREATE FULLTEXT CATALOG
                ALTER ANY FULLTEXT CATALOG
                CREATE FUNCTION
                INSERT
                ALTER ANY LINKED SERVER	
                ALTER ANY LOGIN
                CREATE MESSAGE TYPE
                ALTER ANY MESSAGE TYPE
                TAKE OWNERSHIP
                CREATE PROCEDURE
                CREATE QUEUE
                SUBSCRIBE QUERY NOTIFICATIONS
                ALTER RESOURCES	
                REFERENCES
                CREATE REMOTE SERVICE BINDING
                ALTER ANY REMOTE SERVICE BINDING
                CREATE ROLE
                ALTER ANY ROLE
                CREATE ROUTE
                ALTER ANY ROUTE
                CREATE RULE
                CREATE SCHEMA
                ALTER ANY SCHEMA
                SELECT
                ALTER SERVER STATE
                VIEW SERVER STATE	
                ALTER SETTINGS
                CREATE SERVICE
                ALTER ANY SERVICE
                SHOWPLAN
                SHUTDOWN
                CONNECT SQL
                CREATE SYMMETRIC KEY
                ALTER ANY SYMMETRIC KEY
                CREATE SYNONYM
                CREATE TABLE
                ALTER TRACE
                ALTER ANY DATABASE DDL TRIGGER
                CREATE TYPE
                ALTER ANY USER
                UPDATE
                CREATE VIEW
                CREATE XML SCHEMA COLLECTION</pre>
<p> Not all of the permissions above can be granted to or revoked from a database principle (REVOKE...ON LOGIN::..)</p>
<p>When revoking the cascade of permission rights from one  principle to another principle (REVOKE <i>permission </i>ON <i>user/role</i> FROM <i>user/role</i>) then the only valid permissions to revoke are:</p>
<pre>   CONTROL, IMPERSONATE, TAKE OWNERSHIP, ALTER, VIEW DEFINITION


      For user: CONTROL/IMPERSONATE/ALTER/VIEW DEFINITION
      For role: CONTROL/TAKE OWNERSHIP/ALTER/VIEW DEFINITION
      For app. role:  CONTROL/ALTER/VIEW DEFINITION</pre>
<p>If a permission was granted including the GRANT OPTION specified then it must be revoked with the CASCADE option.</p>
<p>Example</p>
<pre>USE MyDb;<br>REVOKE VIEW DEFINITION ON ROLE::MyRole<br>    FROM MyUser CASCADE;<br>GO
<br>REVOKE CREATE CERTIFICATE FROM MyUser;<br>GO</pre>
<p class="quote"><i>"Promote yourself, but do not demote another"
- Israel Salanter </i></p>
<p><b>Related commands:</b></p>
<p> 
  <a href="revoke.html">REVOKE Object</a> permissions<br>
 <a href="grant.html">GRANT Object</a> permissions<br>
  <a href="grant_user.html">GRANT User/Role</a> permissions<br>
  <a href="deny_user.html">DENY User/Role</a> permissions  <br>
Equivalent Oracle command: <a href="../ora/revoke.html">REVOKE</a></p><!-- #BeginLibraryItem "/Library/foot_sql.lbi" --><p>
<!-- ss64-sql -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="6953563613"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="revoke_user.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

