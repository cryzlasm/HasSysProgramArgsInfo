---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_nt.lbi" --><!-- #EndLibraryItem --><h1> CSCcmd - Client-side Caching command (<a href="https://support.microsoft.com/kb/884739">Q884739</a> - <a href="http://www.mountsutro.org/2006/07/16/381/">Non Microsoft mirror</a>)</h1>
<p>Run this utility on a client PC to configure offline files. Offline files (CSC) allow the client PC to access   copies of  network files while disconnected from the network/domain. Files can be synchronized with the network when connected.</p>
<pre>Syntax
      CSCCMD <i>Option(s</i>)

Options:
   /ENABLE    Enable Client-Side Caching (CSC) on this client. 
              Requires Local Administrator rights

   /DISABLE   Disable CSC, ensure all offline files are closed first.

   /Enum[: \\<i>Server</i>\<i>Share </i>[\<i>Path</i>]] [/RECURSE] 
              Display all the shares in the local cache.
              With the /RECURSE option, this will display the contents
              of the shares within a parent share.

   /DISCONNECT:\\<i>Server</i>
   /DISCONNECT:\\<i>Server</i>\<i>Share</i> 
              Disconnect a server or share from CSC on this client. 

   /MOVESHARE:\\<i>Server1</i>\<i>Share</i> \\<i>Server2</i>\<i>Share</i> 
              Move files and folders from one share to another in the cache.
              This is useful if the local cache must point to a new/renamed server location.

   /RESID     Restamp all the entries in the Windows offline files (CSC) database
              with a new user security identifier (SID).
              useful when moving user accounts from an NT 4.0 domain to 2003.

   /ISENABLED Is CSC is enabled on this client PC. (synonym: /ISCSCENABLED) 

   /PIN2:\\<i>server</i>\<i>share</i>\<i>path</i> [/USER] [/SYSTEM] [/USERINHERIT] [/SYSTEMINHERIT]
              Pin shared resources:
              Use the PIN2: /USER option to pin a file. This has the same result
              as using the Offline Files dialog box to cache the file.
              Use PIN2: /SYSTEM to specify that the share will be pinned via Group Policy.
              /USERINHERIT and /SYSTEMINHERIT] will determine how the pin data is inherited.

   /PIN2:<i>filename</i> /FILELIST [/UNICODE] [/USER] [/SYSTEM] [/USERINHERIT] [/SYSTEMINHERIT] 
              Use a file to describe the objects to pin
              The file contains the UNC path of each object to pin.
              /FILELIST = the objects are separated by a carriage return/linefeed.
	  
   /UNPIN2:\\<i>server</i>\<i>share</i>\<i>path</i> [/USER] [/SYSTEM] [/USERINHERIT] [/SYSTEMINHERIT] [/RECURSE] 
              UnPin a shared resource or remove a shared resource from the local cache.
              with /RECURSE, CSCCMD will unpin all children of the path.
              with /RECURSE2, CSCCMD will unpin the path and children of the path.

   /UNPIN2:<i>filename</i> /FILELIST [/UNICODE] [/USER] [/SYSTEM] [/USERINHERIT] [/SYSTEMINHERIT]
              UnPin specific shared resources listed in <i>filename</i>. 
              /FILELIST = the objects are separated by a carriage return/linefeed.

   /FILL:\\<i>Server</i>\<i>Share</i>\<i>Path</i> 
              Copy server-side data to the local cache.

   /FILL:<i>FileName</i> /FILELIST [/UNICODE] 
              Copy server-side data to the local cache using a file.

   /DELETE:\\<i>Server</i>\<i>Share</i>\<i>Path</i> [/RECURSE] [/RECURSE2] 
              Delete a file, a directory, or a share from the local cache.
              Ensure that the directory/share is empty before you use this switch.
              with /RECURSE, CSCCMD tool only operates on the children of the path.
              with /RECURSE2, CSCCMD operates on the path and children of the path.

   /ISSERVEROFFLINE:\\<i>Server</i> 
              Does CSC consider \\<i>server </i>to be offline.
              To get a reliable response from this switch, you must first open a
              share/file/directory from the local cache for \\<i>server </i> 

   /SETSPACE:<i>Bytes</i>  
              Specify the disk space in bytes to allocate to temporary offline files.
              These files are nonpinned, auto-cached files.
              This is similar to the function provided in the Offline Files dialog box.

   /CHECKDB [/QUICK] 
              Examine the CSC database and display any database error flags.
              /QUICK will skip the enumeration and just display database errors.

   /EXTRACT[:\\<i>Server</i>\<i>Share</i>[\<i>Path</i>]] /TARGET:<i>Path</i> [/RECURSE] [/ONLYMODIFIED] [/STOPONERROR]
              Extract a file, a directory, or a directory tree from the local cache. 
              This requires Local Administrator permissions
              /TARGET will specify a destination.(which need not already exist)
              /ONLYMODIFIED, extract only files that have been modified offline.
              /STOPONERROR, stop the extract if an error occurs.
</pre>
<p><span class="body"> Offline files are most often used with laptops to provide access to data when on the move. Folder redirection can be setup to place the users <i>My Documents </i>on a server share, and then Offline Files can be set to copy and cache the  data to the laptops C: </span><span class="body">drive. <br>
This arrangement allows faster synchronisation of files than a full roaming profile (which also synchronises other things you probably don’t need on a laptop.) </span></p>
<p><span class="body">The /PIN2 switch does not copy the content of the shared resource into the local cache. Pinning is not sufficient to make the files available offline. After you use the /PIN2 switch, you must run  CSCCMD /FILL to copy the content
 of the shared resource to the local cache. </span></p>
<p>When using FILELIST, any white space at the start of a file is ignored.<br>
With the /UNICODE option, CSCCMD will create or read a file list in Unicode text format. </p>
<p> CSC is available for  Windows 2000/XP/2003.</p>
<p><span class="body"><b>Examples</b></span></p>
<p><span class="body">  Move a server share: <br>
</span><span class="code">csccmd /MOVESHARE:\\oldserver\share \\newserver\share<br>
csccmd /RESID</span></p>
<p><span class="quote"><i>“I think the laptop is very good. It helps us to find some words, like our teacher will teach us... The things we didn't know, we go check on the laptop” - One Laptop per child project, Abuja, Nigeria</i></span><span class="body"><i><br>
</i></span><br>
<b>Related:</b><br>
<br>
<a href="https://support.microsoft.com/kb/252509">Q252509</a> - PST and MDB files cannot be made available offline<br>
<a href="https://support.microsoft.com/kb/884739">Q884739</a> - CSCcmd Version 1.1 <br>
mobsync /logon - Synchronization Manager<a href="../bash/export.html"><br>
</a></p><!-- #BeginLibraryItem "/Library/foot_nt.lbi" --><p>
<!-- windows300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="7649547908"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="csccmd.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

