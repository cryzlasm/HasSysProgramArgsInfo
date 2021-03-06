---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_ntsyntax.lbi" --><!-- #EndLibraryItem --><h1>Windows Built-in Users and Default Groups</h1>
<p>Items in italics are <i>implicit placeholders</i>, these items 
  don’t appear in "Active Directory Users and Computers" but are 
  available when applying permissions – membership is automatically calculated 
  by the OS.</p>
<table class="t1">
  <tbody><tr>
    <td><b>Group</b></td>
    <td><b>User/ Session</b></td>
    <td><b>Description</b></td>
  </tr>
  <tr>
    <td>Account Operators</td>
    <td>&nbsp;</td>
    <td>A built-in group that exists only 
      on domain controllers. By default, the group has no members. By default, 
      Account Operators have permission to create, modify, and delete accounts 
      for users, groups, and computers in all containers and organizational units 
      (OUs) of Active Directory except the Builtin container and the Domain Controllers 
      OU. Account Operators do not have permission to modify the Administrators 
      and Domain Admins groups, nor do they have permission to modify the accounts 
      for members of those groups.</td>
  </tr>
  <tr>
    <td>&nbsp;</td>
    <td>Administrator</td>
    <td>A user account for the system administrator. 
      This account is the first account created during operating system installation. 
      The account cannot be deleted or locked out. It is a member of the Administrators 
      group and cannot be removed from that group.</td>
  </tr>
  <tr>
    <td>Administrators</td>
    <td>&nbsp;</td>
    <td>A built-in group . After the initial installation 
      of the operating system, the only member of the group is the Administrator 
      account. When a computer joins a domain, the Domain Admins group is added 
      to the Administrators group. When a server becomes a domain controller, 
      the Enterprise Admins group also is added to the Administrators group. The 
      Administrators group has built-in capabilities that give its members full 
      control over the system. The group is the default owner of any object that 
      is created by a member of the group.</td>
  </tr>
  <tr>
    <td>&nbsp;</td>
    <td>Anonymous</td>
    <td>A user who has logged on anonymously.</td>
  </tr>
  <tr>
    <td><i>Authenticated Users </i></td>
    <td>&nbsp;</td>
    <td>A group that includes all users whose identities 
      were authenticated when they logged on. Membership is controlled by the 
      operating system.</td>
  </tr>
  <tr>
    <td>Backup Operators</td>
    <td>&nbsp;</td>
    <td>A built-in group. By default, the group has 
      no members. Backup Operators can back up and restore all files on a computer, 
      regardless of the permissions that protect those files. Backup Operators 
      also can log on to the computer and shut it down.</td>
  </tr>
  <tr>
    <td><i>Batch </i></td>
    <td>&nbsp;</td>
    <td>A group that implicitly includes all users 
      who have logged on through a batch queue facility such as task scheduler 
      jobs. Membership is controlled by the operating system.</td>
  </tr>
  <tr>
    <td>Cert Publishers</td>
    <td>&nbsp;</td>
    <td>A global group that includes all computers 
      that are running an enterprise certificate authority. Cert Publishers are 
      authorized to publish certificates for User objects in Active Directory. 
  </td>
  </tr>
  <tr>
    <td>Cert Server Admins</td>
    <td>&nbsp;</td>
    <td>Certificate Authority Administrators - authorized 
      to administer certificates for User objects in Active Directory. (Domain 
      Local)</td>
  </tr>
  <tr>
    <td>Cert Requesters</td>
    <td>&nbsp;</td>
    <td>Members can request certificates (Domain Local)</td>
  </tr>
  <tr>
    <td><i>Creator Group </i></td>
    <td>&nbsp;</td>
    <td>A placeholder in an inheritable ACE. When the 
      ACE is inherited, the system replaces this SID with the SID for the primary 
      group of the object's current owner. The primary group is used only by the 
      POSIX subsystem.</td>
  </tr>
  <tr>
    <td>&nbsp;</td>
    <td>Creator Owner</td>
    <td>A placeholder in an inheritable access control 
      entry (ACE). When the ACE is inherited, the system replaces this SID with 
      the SID for the object's current owner.</td>
  </tr>
  <tr>
    <td><i>Dialup </i></td>
    <td>&nbsp;</td>
    <td>A group that implicitly includes all users 
      who are logged on to the system through a dial-up connection. Membership 
      is controlled by the operating system.</td>
  </tr>
  <tr>
<td>DnsAdmins (installed with DNS)</td>
<td>&nbsp;</td>
<td>Members of this group have administrative access to the DNS Server service. This group has no default members.</td>
</tr>
<tr>
<td>DnsUpdateProxy (installed with DNS)</td>
<td>&nbsp;</td>
<td>Members of this group are DNS clients that can perform dynamic updates on behalf of other clients, such as DHCP servers. This group has no default members.</td>
</tr>
<tr>
  <td>Domain Admins</td>
  <td>&nbsp;</td>
  <td>A global group whose members are authorized 
      to administer the domain. By default, the Domain Admins group is a member 
      of the Administrators group on all computers that have joined a domain, 
      including the domain controllers. Domain Admins is the default owner of 
      any object that is created in the domain's Active Directory by any member 
      of the group. If members of the group create other objects, such as files, 
    the default owner is the Administrators group.</td>
</tr>
  <tr>
    <td>Domain Computers</td>
    <td>&nbsp;</td>
    <td>A global group that includes all computers 
      that have joined the domain, excluding domain controllers.</td>
  </tr>
  <tr>
    <td>Domain Controllers</td>
    <td>&nbsp;</td>
    <td>A global group that includes all domain controllers 
      in the domain. New domain controllers are added to this group automatically. 
  </td>
  </tr>
  <tr>
    <td>Domain Guests</td>
    <td>&nbsp;</td>
    <td>A global group that, by default, has only one 
      member, the domain's built-in Guest account.</td>
  </tr>
  <tr>
    <td>Domain Users</td>
    <td>&nbsp;</td>
    <td>A global group that, by default, includes all 
      user accounts in a domain. When you create a user account in a domain, it 
      is added to this group automatically.</td>
  </tr>
  <tr>
    <td>Enterprise Admins</td>
    <td>&nbsp;</td>
    <td>A group that exists only in the root domain 
      of an Active Directory forest of domains. It is a universal group if the 
      domain is in native mode, a global group if the domain is in mixed mode. 
      The group is authorized to make forest-wide changes in Active Directory, 
      such as adding child domains. By default, the only member of the group is 
      the Administrator account for the forest root domain.</td>
  </tr>
  <tr>
    <td><i>Enterprise Controllers </i></td>
    <td>&nbsp;</td>
    <td>A group that includes all domain controllers 
      an Active Directory directory service forest of domains. Membership is controlled 
      by the operating system.</td>
  </tr>
  <tr>
    <td><i>Everyone </i></td>
    <td>&nbsp;</td>
    <td>A group that includes all users, even   guests. Membership is controlled by the operating system. <br>
    In Windows XP and later, the Anonymous Logon security group has been removed from the <i>Everyone</i> security group:  see <a href="https://support.microsoft.com/kb/278259">Q278259</a> and the group policy <a href="http://technet.microsoft.com/en-us/library/cc778182%28v=ws.10%29.aspx">Let Everyone permissions apply to anonymous users</a></td>
  </tr>
  <tr>
    <td>Group Policy Creators Owners</td>
    <td>&nbsp;</td>
    <td>A global group that is authorized to create 
      new Group Policy objects in Active Directory. By default, the only member 
      of the group is Administrator. The default owner of a new Group Policy object 
      is usually the user who created it. If the user is a member of Administrators 
      or Domain Admins, all objects that are created by the user are owned by 
      the group. Owners have full control of the objects they own.</td>
  </tr>
  <tr>
    <td>&nbsp;</td>
    <td>Guest</td>
    <td>A user account for people who do not have individual 
      accounts. This user account does not require a password. By default, the 
      Guest account is disabled.</td>
  </tr>
  <tr>
    <td>Guests</td>
    <td>&nbsp;</td>
    <td>A built-in group. By default, the only member 
      is the Guest account. The Guests group allows occasional or one-time users 
      to log on with limited privileges to a computer's built-in Guest account. 
  </td>
  </tr>
  <tr>
    <td>HelpServicesGroup</td>
    <td>&nbsp;</td>
    <td>XP - Group for the Help and Support Center</td>
  </tr>
  <tr>
    <td><i>Interactive </i></td>
    <td>&nbsp;</td>
    <td>A group that includes all users who have logged 
      on interactively. Membership is controlled by the operating system.</td>
  </tr>
  <tr>
    <td>&nbsp;</td>
    <td>KRBTGT</td>
    <td>A service account that is used by the Key Distribution 
      Center (KDC) service.</td>
  </tr>
  <tr>
    <td>&nbsp;</td>
    <td><i>Local System</i></td>
    <td>A service account that is used by the operating 
      system.</td>
  </tr>
  <tr>
    <td><i>Network </i></td>
    <td>&nbsp;</td>
    <td>A group that implicitly includes all users 
      who are logged on through a network connection. Membership is controlled 
      by the operating system.</td>
  </tr>
  <tr>
    <td>Network Configuration Operators</td>
    <td>&nbsp;</td>
    <td>Members of this group can make changes to TCP/IP settings and renew and release TCP/IP addresses on domain controllers in the domain. This group has no default members.</td>
  </tr>
  <tr>
    <td>&nbsp;</td>
    <td><i>Nobody</i></td>
    <td>No security principal.</td>
  </tr>
  <tr>
<td>Performance Monitor Users</td>
<td>&nbsp;</td>
<td>Members of this group can monitor performance counters on domain controllers in the domain, locally and from remote clients without being a member of the Administrators or Performance Log Users groups.</td>
</tr>
<tr>
<td>Performance Log Users</td>
<td>&nbsp;</td>
<td>Members of this group can manage performance counters, logs and alerts on domain controllers in the domain, locally and from remote clients without being a member of the Administrators group.</td>
</tr>
<tr>
  <td>Power Users</td>
  <td>&nbsp;</td>
  <td>A built-in group. By default, the group has 
      no members. This group does not exist on domain controllers. Power Users 
      can create local users and groups; modify and delete accounts that they 
      have created; and remove users from the Power Users, Users, and Guests groups. 
      Power Users also can install most applications; create, manage, and delete 
    local printers; and create and delete file shares.</td>
</tr>
  <tr>
    <td>Pre-Windows 2000 Compatible Access</td>
    <td>&nbsp;</td>
    <td>A backward compatibility group which allows 
      read access on all users and groups in the domain. By default, the special identity Everyone is a member of this group. Add users to this group only if they are running Windows NT 4.0 or earlier.</td>
  </tr>
  <tr>
    <td><i>Principal Self<br>
    </i>or <br>
    <i>Self</i></td>
    <td><i>Principal Self<br>
    </i>or <br>
    <i>Self</i></td>
    <td>A placeholder in an ACE on a user, group, or 
      computer object in Active Directory. When you grant permissions to Principal 
      Self, you grant them to the security principal represented by the object. 
      During an access check, the operating system replaces the SID for Principal 
      Self with the SID for the security principal represented by the object. 
  </td>
  </tr>
  <tr>
    <td>Print Operators</td>
    <td>&nbsp;</td>
    <td>A built-in group that exists only on domain 
      controllers. By default, the only member is the Domain Users group. Print 
      Operators can manage printers and document queues.</td>
  </tr>
  <tr>
    <td>RAS and IAS Servers</td>
    <td>&nbsp;</td>
    <td>Servers in this group are permitted access to the remote access properties of users. A domain local group . By default, this group 
      has no members. Computers that are running the Routing and Remote Access 
      service are added to the group automatically. Members of this group have 
      access to certain properties of User objects, such as Read Account Restrictions, 
      Read Logon Information, and Read Remote Access Information.</td>
  </tr>
  <tr>
    <td>Remote Desktop Users</td>
    <td>&nbsp;</td>
    <td>XP - Members in this group are granted the 
      right to logon remotely</td>
  </tr>
  <tr>
    <td>Replicator</td>
    <td>&nbsp;</td>
    <td>In NT 4 domains, this group was called Replicators and is used by the directory replication service. In 2K/XP the group is present 
      but is not used. Do not add users to this group.</td>
  </tr>
  <tr>
    <td>Schema Admins</td>
    <td>&nbsp;</td>
    <td>A group that exists only in the root domain 
      of an Active Directory forest of domains. It is a universal group if the 
      domain is in native mode , a global group if the domain is in mixed mode 
      . The group is authorized to make schema&nbsp; changes in Active Directory. 
      By default, the only member of the group is the Administrator account for 
      the forest root domain. Because this group has significant power in the forest, add users with caution.</td>
  </tr>
  <tr>
    <td>Server Operators</td>
    <td>&nbsp;</td>
    <td>A built-in group that exists only on domain 
      controllers. By default, the group has no members. Server Operators can 
      log on to a server interactively; create and delete network shares; start 
      and stop services; back up and restore files; format the hard disk of the 
      computer; and shut down the computer.</td>
  </tr>
  <tr>
    <td><i>Service </i></td>
    <td>&nbsp;</td>
    <td>A group that includes all security principals 
      that have logged on as a service. Membership is controlled by the operating 
      system.</td>
  </tr>
  <tr>
    <td><i>Terminal Server Users </i></td>
    <td>&nbsp;</td>
    <td>A group that includes all users who have logged 
      on to a Terminal Services server. Membership is controlled by the operating 
      system.</td>
  </tr>
  <tr>
    <td>Users</td>
    <td>&nbsp;</td>
    <td>A built-in group. After the initial installation 
      of the operating system, the only member is the Authenticated Users group. 
      When a computer joins a domain, the Domain Users group is added to the Users 
      group on the computer. Users can perform tasks such as running applications, 
      using local and network printers, shutting down the computer, and locking 
      the computer. Users can install applications that only they are allowed 
      to use if the installation program of the application supports per-user 
      installation.</td>
  </tr>
</tbody></table>

<h1><a id="admin"></a>Default Admin Users and Groups:</h1>
<p><img src="syntax-admins.jpg" alt="Group members" width="715" height="529"></p>
<p><b>Related:</b></p>
<p><a href="syntax-groups.html">Groups</a> - Local Domain groups, Global and Universal groups.<br>  
<a href="https://support.microsoft.com/kb/271876">Q271876</a> - Large Numbers of ACEs in ACLs Impair Directory Service Performance.<br>
<a href="https://support.microsoft.com/kb/243330">Q243330</a> - Well-known security identifiers (sids) in Windows operating systems.<br>
<a href="https://support.microsoft.com/kb/277752">Q277752</a> - Security Identifiers for built-in groups are unresolved when modifying group policy.</p><!-- #BeginLibraryItem "/Library/foot_nt.lbi" --><p><script async="" src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
<!-- windows300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="7649547908"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->


