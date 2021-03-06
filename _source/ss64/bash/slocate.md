---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_bash.lbi" --><!-- #EndLibraryItem --><h1>slocate</h1> 
<p>Security Enhanced version of  GNU Locate. Secure Locate provides a secure way to index and quickly search for  files on your system. It uses incremental encoding just like GNU locate to compress its database to make searching faster, but it will also store file permissions and ownership so that users will not see files they do not have access to. </p>
<pre>Syntax
      slocate [-qi] [-d <i>path</i>] [--database=<i>path</i>] <i>search string</i>

      slocate [-i] [-r <i>regexp</i>] [--regexp=<i>regexp</i>]

      slocate [-qv] [-o <i>file</i>] [--output=<i>file</i>]

      slocate [-e <i>dir1</i>,<i>dir2</i>,...] [-f <i>fstype1</i>,...] &lt;[-l <i>level</i>] [-c] &lt;[-U <i>path</i>] [-u]&gt;

      slocate [-Vh] [--version] [--help] 

Options

   -u            Create slocate database starting at path /. 

   -U <i>dir</i>        Create slocate database starting at path <i>dir</i>.

   -e <i>dir1,dir2</i>,...
                 Exclude directories from the slocate database. 

   -f <i>fstype1</i>,...
                 Exclude files on specific file systems from the slocate database. 

   -c            Parse '/etc/updatedb.conf' when updating the slocate database. 

   -l <i>level</i>
       Security level. 0 turns security checks off.
       This will make search faster. 1 turns security checks on. This is the default. 

   -i            Do a case insensitive search. 

   -q            Quiet mode. Error messages are suppressed. 

   -n <i>num</i>        Limit the amount of results shown to <i>num</i>. 

   -r <i>regexp</i>
    --regexp=<i>regexp</i>  Search the database using a basic POSIX regular expression. 

   -o <i>file</i>
    --output=<i>file</i>    The database to create. 

   -d <i>path</i>
    --database=<i>path</i>  The path of databases to search in. 
   -h
    --help           Display this help. 
   -v
    --verbose        Verbose mode. Display files when creating database. 
   -V
    --version        Display version. </pre>
<p>slocate enables system users to search entire filesystems without displaying unauthorized files.</p>
<p class="quote"><i>“The mind is its own place and in itself, can make a Heaven of Hell, a Hell of Heaven” ~ John Milton</i></p>
<p><b>Related:</b><br>
<br>
<a href="locate.html">locate</a> - GNU Locate <br>
<a href="find.html"> find</a> - Search for files that meet a desired criteria<br>
fnmatch<br>
weekly.conf<br>
Equivalent Windows command:
<a href="dir.html">DIR</a> /S - Display a list of files and folders</p><!-- #BeginLibraryItem "/Library/foot_bash.lbi" --><p>
<!-- bash300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="4615356305"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="slocate.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

