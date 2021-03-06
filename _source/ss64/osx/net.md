---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_osx.lbi" --><!-- #EndLibraryItem --><h1>net</h1> 
<p>Manage network resources. net is part of the Samba suite.</p>
<pre>Syntax
      net {ads|rap|rpc} <i>options...</i>

Options
       The first argument should be used to  specify the  protocol to use
       when executing a certain command. ADS is used for ActiveDirectory,
       RAP is using for old (Win9x/NT3) clients and  RPC can be used for NT4
       and above. If this argument is omitted, net will  try to determine
       it automatically. Not all commands are available on all protocols.

  -h|--help
        Print a summary of command line options.

       -w <i>target-workgroup</i>
        Sets target workgroup or domain. You have to specify either this
        option or the IP address or the name of a server.

       -W <i>workgroup</i>
        Sets client workgroup or domain

       -U <i>user</i>
        User name to use

       -I<i> ip-address</i>
        IP address of target server to use. You have to  specify  either
        this option or a target workgroup or a target server.

       -p <i>port</i>
        Port  on  the  target server to connect to (usually 139 or 445).
        Defaults to trying 445 first, then 139.

       -n <i>primary netbios name</i>
        This option allows you to override the NetBIOS name  that   Samba
        uses  for   itself. This is identical to setting the netbios name
        parameter in the smb.conf file. However, a command line  setting
        will take precedence over settings in smb.conf.

       -s <i>configuration file</i>
        The  file   specified contains the configuration details required
        by the server. The information in this file includes server-spe-
        cific  information such as what printcap file to use, as well as
        descriptions of all the services that the server is to  provide.
        See  smb.conf  for  more  information. The default configuration
        file name is determined at compile time.

       -S server
        Name of target server. You should specify either this option  or
        a target workgroup or a target IP address.

       -l     When listing data, give more information on each item.

       -P     Make queries to the external server using the machine account of
        the local server.

       -d|--debug=debuglevel
        debuglevel is an integer from 0 to 10. The default value if this
        parameter is not specified is zero.

        The higher this value, the more detail will be logged to the log
        files about the activities of the server. At level 0, only crit-
        ical  errors  and   serious warnings will be logged. Level 1 is a
        reasonable level for day-to-day running - it generates  a   small
        amount of information about operations carried out.

        Levels  above  1 will generate considerable amounts of log data,
        and should only be used when  investigating  a  problem.  Levels
        above  3  are  designed  for use only by developers and generate
        HUGE amounts of log data, most of which is extremely cryptic.

        Note that specifying this parameter here will override  the  log
        level parameter in the smb.conf file.</pre>
<h2>COMMANDS</h2>
<pre>   <b>CHANGESECRETPW</b>
       This command allows the Samba machine account password to be set from
       an external application to a machine account password that has  already
       been  stored in Active Directory. DO NOT USE this command unless you
       know exactly what you are doing. The use of this command requires that
       the force flag (-f) be used also. There will be NO command prompt.
       Whatever information is piped into stdin, either by typing at the command
       line or otherwise, will be stored as the literal machine password.

       Do NOT use this without care and attention as it will overwrite  a
       legitimate machine password without warning. <b>YOU HAVE BEEN WARNED.</b>

   <b>TIME</b>
       The <b>NET</b> <b>TIME</b> command allows you to view the time on a remote server or
       synchronise the time on the local server with the time on the remote
       server.

   <b>TIME</b>
       Without  any options, the <b>NET</b> <b>TIME</b> command displays the time on the re-
       mote server.

   <b>TIME</b> <b>SYSTEM</b>
       Displays the time on the remote server in a format ready for <b>/bin/date</b>

   <b>TIME</b> <b>SET</b>
       Tries to set the date and time of the local server to that on  the  re-
       mote server using <b>/bin/date</b>.

   <b>TIME</b> <b>ZONE</b>
       Displays the timezone in hours from GMT on the remote computer.

   <b>[RPC|ADS]</b> <b>JOIN</b> <b>[TYPE]</b> <b>[-U</b> <b>username[%password]]</b> <b>[options]</b>
       Join  a domain. If the account already exists on the server, and [TYPE]
       is MEMBER, the machine will attempt to  join  automatically.  (Assuming
       that the machine has been created in server manager) Otherwise, a pass-
       word will be prompted for, and a new account can be created.

       [TYPE] can be PDC, BDC or MEMBER to specify the type of server  joining
       the domain.

   <b>[RPC]</b> <b>OLDJOIN</b> <b>[options]</b>
       Join  a domain. Use the OLDJOIN option to join the domain using the old
       style of domain joining - you need to create a trust account in  server
       manager first.

   <b>[RPC|ADS]</b> <b>USER</b>
   <b>[RPC|ADS]</b> <b>USER</b> <b>DELETE</b> <b>target</b>
       Delete specified user

   <b>[RPC|ADS]</b> <b>USER</b> <b>LIST</b>
       List all users

   <b>[RPC|ADS]</b> <b>USER</b> <b>INFO</b> <b>target</b>
       List the domain groups of a the specified user.

   <b>[RPC|ADS]</b> <b>USER</b> <b>ADD</b> <b>name</b> <b>[password]</b> <b>[-F</b> <b>user</b> <b>flags]</b> <b>[-C</b> <b>comment]</b>
       Add specified user.

   <b>[RPC|ADS]</b> <b>GROUP</b>
   <b>[RPC|ADS]</b> <b>GROUP</b> <b>[misc</b> <b>options]</b> <b>[targets]</b>
       List user groups.

   <b>[RPC|ADS]</b> <b>GROUP</b> <b>DELETE</b> <b>name</b> <b>[misc.</b> <b>options]</b>
       Delete specified group.

   <b>[RPC|ADS]</b> <b>GROUP</b> <b>ADD</b> <b>name</b> <b>[-C</b> <b>comment]</b>
       Create specified group.

   <b>[RAP|RPC]</b> <b>SHARE</b>
   <b>[RAP|RPC]</b> <b>SHARE</b> <b>[misc.</b> <b>options]</b> <b>[targets]</b>
       Enumerates all exported resources (network shares) on target server.

   <b>[RAP|RPC]</b> <b>SHARE</b> <b>ADD</b> <b>name=serverpath</b> <b>[-C</b> <b>comment]</b> <b>[-M</b> <b>maxusers]</b> <b>[targets]</b>
       Adds  a  share from a server (makes the export active). Maxusers speci-
       fies the number of users that can be connected to the share  simultane-
       ously.

   <b>SHARE</b> <b>DELETE</b> <b>sharenam</b>
       Delete specified share.


   <b>[RPC|RAP]</b> <b>FILE</b>
   <b>[RPC|RAP]</b> <b>FILE</b>
       List all open files on remote server.

   <b>[RPC|RAP]</b> <b>FILE</b> <b>CLOSE</b> <b>fileid</b>
       Close file with specified <i>fileid</i> on remote server.

   <b>[RPC|RAP]</b> <b>FILE</b> <b>INFO</b> <b>fileid</b>
       Print  information  on specified <i>fileid</i>. Currently listed are: file-id,
       username, locks, path, permissions.

   <b>[RAP|RPC]</b> <b>FILE</b> <b>USER</b>
        Currently NOT implemented.

   <b>SESSION</b>

   <b>RAP</b> <b>SESSION</b>
       Without any other options, SESSION enumerates all active SMB/CIFS  ses-
       sions on the target server.

   <b>RAP</b> <b>SESSION</b> <b>DELETE|CLOSE</b> <b>CLIENT_NAME</b>
       Close the specified sessions.

   <b>RAP</b> <b>SESSION</b> <b>INFO</b> <b>CLIENT_NAME</b>
       Give a list with all the open files in specified session.

   <b>RAP</b> <b>SERVER</b> <b>DOMAIN</b>
       List  all  servers  in specified domain or workgroup. Defaults to local
       domain.

   <b>RAP</b> <b>DOMAIN</b>
       Lists all domains and workgroups visible on the current network.

   <b>RAP</b> <b>PRINTQ</b>

   <b>RAP</b> <b>PRINTQ</b> <b>LIST</b> <b>QUEUE_NAME</b>
       Lists the specified print queue and print jobs on the  server.  If  the
       <i>QUEUE</i><b>_</b><i>NAME</i> is omitted, all queues are listed.

   <b>RAP</b> <b>PRINTQ</b> <b>DELETE</b> <b>JOBID</b>
       Delete job with specified id.

   <b>RAP</b> <b>VALIDATE</b> <b>user</b> <b>[password]</b>
       Validate whether the specified user can log in to the remote server. If
       the password is not specified on the commandline, it will be  prompted.
        Currently NOT implemented.

   <b>RAP</b> <b>GROUPMEMBER</b>
   <b>RAP</b> <b>GROUPMEMBER</b> <b>LIST</b> <b>GROUP</b>
       List all members of the specified group.

   <b>RAP</b> <b>GROUPMEMBER</b> <b>DELETE</b> <b>GROUP</b> <b>USER</b>
       Delete member from group.

   <b>RAP</b> <b>GROUPMEMBER</b> <b>ADD</b> <b>GROUP</b> <b>USER</b>
       Add member to group.

   <b>RAP</b> <b>ADMIN</b> <b>command</b>
       Execute  the  specified  <i>command</i>   on the remote server. Only works with
       OS/2 servers.
        Currently NOT implemented.

   <b>RAP</b> <b>SERVICE</b>
   <b>RAP</b> <b>SERVICE</b> <b>START</b> <b>NAME</b> <b>[arguments...]</b>
       Start the specified service on the remote server. Not implemented  yet.
        Currently NOT implemented.

   <b>RAP</b> <b>SERVICE</b> <b>STOP</b>
       Stop the specified service on the remote server.
        Currently NOT implemented.

   <b>RAP</b> <b>PASSWORD</b> <b>USER</b> <b>OLDPASS</b> <b>NEWPASS</b>
       Change password of <i>USER</i> from <i>OLDPASS</i> to <i>NEWPASS</i>.

   <b>LOOKUP</b>

   <b>LOOKUP</b> <b>HOST</b> <b>HOSTNAME</b> <b>[TYPE]</b>
       Lookup  the  IP address of the given host with the specified type (net-
       bios suffix). The type defaults to 0x20 (workstation).

   <b>LOOKUP</b> <b>LDAP</b> <b>[DOMAIN</b>
       Give IP address of LDAP server of specified <i>DOMAIN</i>. Defaults  to   local
       domain.

   <b>LOOKUP</b> <b>KDC</b> <b>[REALM]</b>
       Give  IP   address  of  KDC  for  the specified <i>REALM</i>. Defaults to local
       realm.

   <b>LOOKUP</b> <b>DC</b> <b>[DOMAIN]</b>
       Give IP's of Domain Controllers for specified  <i>DOMAIN</i>. Defaults to  lo-
       cal domain.

   <b>LOOKUP</b> <b>MASTER</b> <b>DOMAIN</b>
       Give  IP   of master browser for specified <i>DOMAIN</i> or workgroup. Defaults
       to local domain.

   <b>CACHE</b>
       Samba uses a general caching interface called  'gencache'.  It  can  be
       controlled using 'NET CACHE'.
       All  the   timeout  parameters support the suffixes: s - Secondsm - Min-
       utesh - Hoursd - Daysw - Weeks

   <b>CACHE</b> <b>ADD</b> <b>key</b> <b>data</b> <b>time-out</b>
       Add specified key+data to the cache with the given timeout.

   <b>CACHE</b> <b>DEL</b> <b>key</b>
       Delete key from the cache.

   <b>CACHE</b> <b>SET</b> <b>key</b> <b>data</b> <b>time-out</b>
       Update data of existing cache entry.

   <b>CACHE</b> <b>SEARCH</b> <b>PATTERN</b>
       Search for the specified pattern in the cache data.

   <b>CACHE</b> <b>LIST</b>
       List all current items in the cache.

   <b>CACHE</b> <b>FLUSH</b>
       Remove all the current items from the cache.

   <b>GETLOCALSID</b> <b>[DOMAIN]</b>
       Print the SID of the specified domain, or if the parameter is  omitted,
       the SID of the domain the local server is in.

   <b>SETLOCALSID</b> <b>S-1-5-21-x-y-z</b>
       Sets domain sid for the local server to the specified SID.

   <b>GROUPMAP</b>
       Manage the mappings between Windows group SIDs and UNIX groups. Parame-
       ters take the for "parameter=value". Common options include:

       <b>o</b>  unixgroup - Name of the UNIX group
       <b>o</b>  ntgroup - Name of the Windows NT group (must be resolvable to a SID
       <b>o</b>  rid - Unsigned 32-bit integer
       <b>o</b>  sid - Full SID in the form of "S-1-..."
       <b>o</b>  type - Type of the group; either 'domain', 'local', or 'builtin'
       <b>o</b>  comment - Freeform text description of the group

   <b>GROUPMAP</b> <b>ADD</b>
       Add a new group mapping entry

       net  groupmap  add  {rid=int|sid=string}   unixgroup=string   [type={do-
       main|local|builtin}] [ntgroup=string] [comment=string]

   <b>GROUPMAP</b> <b>DELETE</b>
       Delete a group mapping entry
       net groupmap delete {ntgroup=string|sid=SID}


   <b>GROUPMAP</b> <b>MODIFY</b>
       Update en existing group entry

       net  groupmap  modify {ntgroup=string|sid=SID} [unixgroup=string] [com-
       ment=string] [type={domain|local}

   <b>GROUPMAP</b> <b>LIST</b>
       List existing group mapping entries
       net groupmap list [verbose] [ntgroup=string] [sid=SID]

   <b>MAXRID</b>
       Prints out the highest RID currently in use on the local server (by the
       active 'passdb backend').

   <b>RPC</b> <b>INFO</b>
       Print information about the domain of the remote server, such as domain
       name, domain sid and number of users and groups.

   <b>[RPC|ADS]</b> <b>TESTJOIN</b>
       Check whether participation in a domain is still valid.

   <b>[RPC|ADS]</b> <b>CHANGETRUSTPW</b>
       Force change of domain trust password.

   <b>RPC</b> <b>TRUSTDOM</b>
   <b>RPC</b> <b>TRUSTDOM</b> <b>ADD</b> <b>DOMAIN</b>
       Add a interdomain trust account for <i>DOMAIN</i> to the remote server.

   <b>RPC</b> <b>TRUSTDOM</b> <b>DEL</b> <b>DOMAIM</b>
       Remove interdomain trust account for <i>DOMAIN</i> from the remote server.
        Currently NOT implemented.

   <b>RPC</b> <b>TRUSTDOM</b> <b>ESTABLISH</b> <b>DOMAIN</b>
       Establish a trust relationship to a trusting  domain.  Interdomain  ac-
       count must already be created on the remote PDC.

   <b>RPC</b> <b>TRUSTDOM</b> <b>REVOKE</b> <b>DOMAIN</b>
       Abandon relationship to trusted domain

   <b>RPC</b> <b>TRUSTDOM</b> <b>LIST</b>
       List all current interdomain trust relationships.

   <b>RPC</b> <b>ABORTSHUTDOWN</b>
       Abort the shutdown of a remote server.

   <b>SHUTDOWN</b> <b>[-t</b> <b>timeout]</b> <b>[-r]</b> <b>[-f]</b> <b>[-C</b> <b>message]</b>

       Shut down the remote server.

       -r     Reboot after shutdown.

       -f     Force shutting down all applications.

       -t timeout
        Timeout  before system will be shut down. An interactive user of
        the system can use this time to cancel the shutdown.

       -C message
        Display the specified message on  the  screen  to   announce  the
        shutdown.

   <b>SAMDUMP</b>
       Print out sam database of remote server. You need to run this on either
       a BDC.

   <b>VAMPIRE</b>
       Export users, aliases and groups from remote server  to  local  server.
       Can only be run an a BDC.

   <b>GETSID</b>
       Fetch domain SID and store it in the local <i>secrets.tdb</i>.

   <b>ADS</b> <b>LEAVE</b>
       Make the remote host leave the domain it is part of.

   <b>ADS</b> <b>STATUS</b>
       Print out status of machine account of the local machine in ADS. Prints
       out quite some debug info. Aimed at developers,  regular   users  should
       use <b>NET</b> <b>ADS</b> <b>TESTJOIN</b>.

   <b>ADS</b> <b>PRINTER</b>

   <b>ADS</b> <b>PRINTER</b> <b>INFO</b> <b>[PRINTER]</b> <b>[SERVER]</b>
       Lookup  info  for  <i>PRINTER</i> on <i>SERVER</i>. The printer name defaults to "*",
       the server name defaults to the local host.

   <b>ADS</b> <b>PRINTER</b> <b>PUBLISH</b> <b>PRINTER</b>
       Publish specified printer using ADS.

   <b>ADS</b> <b>PRINTER</b> <b>REMOVE</b> <b>PRINTER</b>
       Remove specified printer from ADS directory.

   <b>ADS</b> <b>SEARCH</b> <b>EXPRESSION</b> <b>ATTRIBUTES...</b>
       Perform a raw LDAP search on a ADS server and dump the results. The ex-
       pression is a standard LDAP search expression, and the attributes are a
       list of LDAP fields to show in the results.

       Example: <b>net</b> <b>ads</b> <b>search</b> <b>'(objectCategory=group)'</b> <b>sAMAccountName</b>

   <b>ADS</b> <b>DN</b> <b>DN</b> <b>(attributes)</b>
       Perform a raw LDAP search on a ADS server and dump the results. The  DN
       standard   LDAP DN, and the attributes are a list of LDAP fields to show
       in the result.

       Example: <b>net</b> <b>ads</b> <b>dn</b> <b>'CN=administrator,CN=Users,DC=my,DC=domain'</b>  <b>SAMAc-</b>
       <b>countName</b>

   <b>WORKGROUP</b>
       Print out workgroup name for specified kerberos realm.

   <b>HELP</b> <b>[COMMAND]</b>
       Gives usage information for the specified command.</pre>
<p>The Samba software suite is a collection of programs that implements the Server Message Block (commonly abbreviated as SMB) protocol for UNIX systems. This protocol is sometimes also referred to as the <a href="http://www.ubiqx.org/cifs/">Common 
Internet File System</a> (CIFS). Samba also implements the NetBIOS protocol in nmbd.</p>
<p class="quote"><i>“The white man knows how to make everything but he does not know how to distribute it” ~ Sitting Bull </i></p>
<p><b>Related:</b></p>
<p> <a href="https://discussions.apple.com/thread/5957029?start=60&amp;tstart=0">SMB file shares on Mavericks and Yosemite</a><br>
<a href="http://blog.helloyama.com/post/77813860132/replacing-the-os-x-109-mavericks-smb-stack-with">Replacing the OS X 10.9 (Mavericks) SMB Stack with Samba3</a><br>
findsmb(1)<br>
Equivalent Windows command: <a href="../nt/net.html">Net</a> - manage network resources
</p><!-- #BeginLibraryItem "/Library/foot_osx.lbi" --><p>
<!-- OSX300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="1823340303"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="net.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->
