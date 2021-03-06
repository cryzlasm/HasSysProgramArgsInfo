---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_nt.lbi" --><!-- #EndLibraryItem --><h1>FTP</h1>  
<p>File Transfer Protocol. (Not Secure, for Secure FTP utilities see the <a href="../links/windows.html">links</a> page.)</p>
<pre>Syntax
      FTP [-<i>options</i>] [-s:<i>filename</i>] [-w:<i>buffer</i>] [<i>host</i>]

key   
   -s:<i>filename</i>   Run a text file containing FTP commands.

   <i>host</i>          Host name or IP address of the remote host.

   -g            Disable filename wildcards.

   -n            No auto-login.

   -i            No interactive prompts during ftp.

   -v            Hide remote server responses.

   -w:<i>buffer</i>     Set buffer size to <i>buffer</i>
                 (default=4096)

   -d            Debug
 
   -a            Use any local interface when binding data connection.


<b>Commands to run at the FTP: prompt</b>

append <i>local-file </i>[<i>remote-file</i>]
             Append a local file to a file on the remote computer.

ascii        Set the file transfer type to ASCII, the default. 
             In ASCII text mode, character-set and end-of-line
             characters are converted as necessary.

bell         Toggle a bell to ring after each command. 
             By default, the bell is off.

binary       Set the file transfer type to binary. 
             Use `Binary' for transferring executable program
             files or binary data files e.g. Oracle

bye          End the FTP session and exit ftp

cd           Change the working directory on the remote host.

close        End the FTP session and return to the cmd prompt.

debug        Toggle debugging. When debug is on, FTP will display
             every command.

delete <i>remote-file</i>
             Delete file on remote host.

dir [<i>remote-directory</i>] [<i>local-file</i>]
             List a remote directory's files and subdirectories.
             (or save the listing to <i>local-file</i>)

disconnect   Disconnect from the remote host, retaining the ftp prompt.

get <i>remote-file</i> [<i>local-file</i>]
             Copy a remote file to the local PC.

glob         Toggle the use of wildcard characters in local pathnames.
             By default, globbing is on.

hash         Toggle printing a hash (#) for each 2K data block transferred. 
             By default, hash mark printing is off.

help [<i>command</i>]
             Display help for ftp command.

lcd [<i>directory</i>]
             Change the working directory on the local PC.
             By default, the working directory is the directory in which ftp was started.

literal <i>argument</i> [ ...]
             Send arguments, as-is, to the remote FTP host.

ls [<i>remote-directory</i>] [<i>local-file</i>]
             List a remote directory's files and folders.
             (short format)

mdelete <i>remote-files </i>[ ...]
             Delete files on remote host.

mdir <i>remote-files </i>[ ...] <i>local-file</i>
             Display a list of a remote directory's files and subdirectories.
             (or save the listing to <i>local-file</i>)
             Mdir allows you to specify multiple files.

mget <i>remote-files</i> [ ...]
             Copy multiple remote files to the local PC.

mkdir <i>directory</i>
             Create a directory on the remote host.

mls <i>remote-files </i>[ ...]<i> local-file</i>
             List a remote directory's files and folders.
             (short format)

mput <i>local-files </i>[ ...]
             Copy multiple local files to the remote host.

open <i>computer</i> [<i>port</i>]
             Connects to the specified FTP server. 

prompt       Toggle prompting. Ftp prompts during multiple file transfers to 
             allow you to selectively retrieve or store files;
             mget and mput transfer all files if prompting is turned off. 
             By default, prompting is on.

put <i>local-file</i> [<i>remote-file</i>]
             Copy a local file to the remote host.

pwd          Print Working Directory
             (current directory on the remote host)

quit         End the FTP session with the remote host and exit ftp.

quote <i>argument</i> [ ...]
             Send arguments, as-is, to the remote FTP host.

recv <i>remote-file</i> [<i>local-file</i>]
             Copy a remote file to the local PC.

remotehelp [<i>command</i>]
             Display help for remote commands.

rename <i>filename newfilename</i>
             Rename remote files.

rmdir <i>directory</i>
             Delete a remote directory.

send <i>local-file</i> [<i>remote-file</i>]
             Copy a local file to the remote host.

status       Display the current status of FTP connections and toggles.

trace        Toggles packet tracing; trace displays the route of each packet 

type [<i>type-name</i>]
             Set or display the file transfer type:
             `binary' or `ASCII' (the default)

             If type-name is not specified, the current type is displayed. 
             ASCII should be used when transferring text files.

             In ASCII text mode, character-set and end-of-line
             characters are converted as necessary.

             Use `Binary' for transferring executable files. 

user <i>user-name </i>[<i>password</i>] [<i>account</i>]
             Specifes a user to the remote host.

verbose      Toggle verbose mode. By default, verbose is on.

! <i>command</i>    Run command on the local PC.

? [<i>command</i>]  Display help for ftp command.</pre>
<p><b>Examples<br>
</b>an example FTP Script to <b>retrieve</b> files in binary and then ascii mode:</p>
<pre>::GetFiles.ftp

   [User_id]
   [ftp_password]<br>   binary
   get /usr/file1.exe
   get file2.html
   mget *.jpeg<br>   ascii
   mget *.txt<br>   quit
</pre>
<p>To run the above script:<br>
<span class="code">FTP -s:GetFiles.ftp [hostname]</span><br>
This will connect as the user:<i>User_id</i> with password:<i>ftp_password</i><br>
<br>
An FTP Script to <b>publish</b> files in binary mode:</p>
<pre>::PutFiles.ftp

   [User_id]
   [ftp_password]<br>   binary
   mput *.html
   cd images
   mput *.gif<br>   quit
</pre>
<p>To run the above script:<br>   
<span class="code">FTP -s:PutFiles.ftp [hostname]</span><br>
This will connect as the user:<i>User_id</i> with password:<i>ftp_password</i></p>
<h2>Using the Windows GUI for FTP </h2>
<blockquote>
<p>Windows Explorer also has a built in FTP client. <br>
Type in the address bar: <br>
<span class="code">ftp://<i>username</i>@<i>ftpserver.address.com</i></span> <br>
you will be prompted for the password. </p>
<p>You can also do <br>
<span class="code">ftp://<i>username</i>:<i>password</i>@<i>ftpserver.address.com</i><br>
</span>This is not  recommended as anyone can read the password.</p>
<p>Or Start | Computer | Right click - Add a network Location | Custom - enter the name of the FTP site</p>
</blockquote>
<h2>Secure FTP</h2>
<blockquote>
<p>Standard FTP does not encrypt passwords - they are sent across the network in plain text. A more secure method is to use SecureFTP (SFTP) or SecureCopy (SCP)  Freeware  clients are available e.g. <a href="http://winscp.net/eng/download.php">WinSCP</a></p>
</blockquote>
<p class="quote"><i>“Only wimps use tape backup: _real_ men just upload their important stuff on ftp, and let the rest of the world mirror it” - Linus Torvalds</i></p>
<p><b>Related commands</b>:<br>
  <br>
  <a href="copy.html">COPY</a> - Copy one or more files to another location<br>
  <a href="xcopy.html">XCOPY</a> - Copy files and folders <br>
  <a href="rem.html">REM</a> - Add a comment
(includes commenting FTP scripts)<br>
<a href="https://support.microsoft.com/kb/271078">Q271078</a> - Microsoft FTP does not support <a href="http://slacksite.com/other/ftp.html">passive</a> mode (error 425) <br>
<a href="../rawftp.html">RAW FTP</a> - Full list of RAW FTP commands<br>
Equivalent bash command (Linux): <a href="../bash/ftp.html">FTP</a> - File Transfer Protocol</p><!-- #BeginLibraryItem "/Library/foot_nt.lbi" --><p>
<!-- windows300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="7649547908"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="ftp.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

