---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_nt.lbi" --><!-- #EndLibraryItem --><h1>DSACLS.exe (installable option either via <abbr title="Remote Server Administrative Tools / Active Directory Domain Services"><a href="../links/windows.html">RSAT</a> /AD DS</abbr> or <a href="../links/windows.html">adminpack.msi</a>)</h1>
<p>View or Edit ACLs (access control entries) for objects in Active Directory.</p>
<pre>Syntax
      DSACLS "[\\<i>Computer</i>\]<i>ObjectDN</i>" [/A] [/D <i>PermissionStatement</i> [<i>PermissionStatement</i>]...]
         [/G <i>PermissionStatement</i> [<i>PermissionStatement</i>]...] [/I:{T | S | P}]
            [/N] [/P:{Y | N}] 
               [/R {<i>User</i> | <i>Group</i>} [{<i>User</i> | <i>Group</i>}]...] [/S [/T]]
	   
      PermissionStatements:
         {<i>User</i> | <i>Group</i>}:<i>Permissions</i>[;{<i>ObjectType</i> | <i>Property</i>}][;<i>InheritedObjectType</i>]
   
Key
   <i>ObjectDN</i>  Distinguished name of the object.
             If omitted will be taken from standard input (stdin)

   /A   Add ownership and auditing information to the results.

   /D   Deny permissions to a user or group

   /G   Grant permissions to a user or group.

   /I:  Inheritance
           T  The object and its child objects (default)
           S  The child objects only
           P  The object and child objects down one level only

   /N   Replace the current ACEs in the ACL.
        By default, dsacls adds the ACE to the ACL.

   /P:  Inherit permissions from parent objects (Y/N).

   /R   Revoke/Delete all ACEs for the users or groups.

   /S   Restore the default security.
        Default security for each object class is defined in the Active Directory schema.

  /S /T Restore the default security on the tree of objects.

Permissions
      GR: Generic Read
      GE: Generic Execute
      GW: Generic Write
      GA: Generic All

      SD: Delete an object
      DT: Delete an object and all of its child objects
      RC: Read security information
      WD: Change security information
      WO: Change owner information
      LC: List the child objects of the object
      CC: Create a child object•
      DC: Delete a child object•
      WS: Write to a self object (group membership) group object + {ObjectType | Property} = "member."
      RP: Read a property•
      WP: Write to a property•
      CA: Control access (normally a specific extended right for control access)
             If you do not specify {ObjectType | Property} this permission will apply to all
             meaningful control accesses on the object.
      LO: List the object access, AD DS does not enforce this permission by default.
             Grant list access to a specific object when List Children (LC) is not granted to the parent.
             Deny list access to a specific object when the user or group has LC permission on the parent.

<i>   ObjectType</i> | <i>Property</i>
          Limit the permission to the specified object type or property.
          Enter the <i>display name </i>of the object type or the property.
          Default=all object types and properties.

          For example, Grant the user rights to create all types of child objects:
          /G Domain\User:CC

          Grant the user rights to create only child <b>computer </b>objects:
          /G Domain\User:CC;computer

   <i>InheritedObjectType
</i>          Limit inheritance of the permission to the specified object type.
          For example, Grant only <b>User</b> objects to inherit the permission:
          /G Domain\User:CC;;user

   <i>Object Types</i>
          User,Contact,Group,Shared Folder,Printer,Computer,Domain Controllers,OU</pre>
<p>• If you do not specify {ObjectType | Property} to define a specific child object type,
this permission will apply to all types of child objects; otherwise, it will apply only to the child object type that you specify.</p>
<p>You can Grant, Deny or Delete ACEs for multiple users and groups with a single parameter (/G /D /R), list  the users/groups separated with spaces.</p>
<p><b>Examples</b></p>
<p>Grant Generic Read (GR) and Generic Execute (GE) on computer objects in the Laptops OU to <span class="code">Jdoe</span>:<span class="code"><br>
<br>
C:\&gt; dsacls "OU=Laptops,OU=AcmeCo,DC=ss64,DC=Com" /G Domain\JDoe:GRGE;computer</span></p>
<p> <i class="quote">“If future generations are to remember us with gratitude rather than contempt, we must leave them more than the miracles of technology. We must leave them a glimpse of the world as it was in the beginning, not just after we got through with it” ~ President Lyndon B. Johnson</i><br>
<br>
<b> Related:</b></p>
<p><a href="https://support.microsoft.com/kb/281146">Q281146</a> - How to Use Dsacls in Windows Server 2003<br>
<a href="dsadd.html">DSAdd</a> - Add object<br>
<a href="dsmod.html">DSMod</a> - Modify object<br>
<a href="dsget.html">DSGet</a> - Display object <br>
<a href="dsmove.html">DSMove</a> - Move object<br>
<a href="dsquery.html">DSQuery</a> - Search for objects <br>
DSdbUtil - Maintenance of AD, Authorative Restore, manage snapshots. <br>
DSAMain  - Expose Active Directory data that is stored in a snapshot or backup<br>
DSMgmt - Configure Directory Services<br>
</p><!-- #BeginLibraryItem "/Library/foot_nt.lbi" --><p>
<!-- windows300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="7649547908"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="dsacls.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->
