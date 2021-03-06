---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_osx.lbi" --><!-- #EndLibraryItem --><h1>setfile (<a href="../links/osx.html#tools">xcode Developer Tools</a>)</h1> 
<p>Set attributes of HFS+ files. It attempts to be similar to the setfile command in MPW. It can apply rules to more than one file with the options applying to all files listed.</p>
<pre>Syntax
      SetFile [-a <i>attributes</i>] [-c <i>creator</i>] [-d <i>date</i>] [-m <i>date</i>] [-t <i>type</i>] <i>file</i>
       ...

Key
     -a <i>attributes</i>  Sets the file attributes bits where <i>attributes</i> is a string
        of case sensitive letters. Each letter corresponds to a
        file attribute: an uppercase letter indicates that the
        attribute bit is set (1), a lowercase letter indicates
        that it is not (0).   Note: <i>attributes</i> not specified remain
        unchanged.

        A | a    Alias file

        B | b    Has bundle

        C | c    Custom icon (allowed on folders)

        D | d    Located on the desktop (allowed on folders)

        E | e    Extension is hidden (allowed on folders)

        I | i    Inited - Finder is aware of this file and has
           given it a location in a window. (allowed on
           folders)

        L | l    Locked

        M | m    Shared (can run multiple times)

        N | n    File has no INIT resource

        S | s    System file (name locked)

        T | t    "Stationery Pad" file

        V | v    Invisible (allowed on folders)

     -c <i>creator</i>      Specifies the file's creator, where <i>creator</i> is a string of
        exactly four characters.

     -d <i>date</i>      Sets the creation date, where <i>date</i> is a string of the
        form: "mm/dd/[yy]yy [hh:mm:[:ss] [AM | PM]]" Notes:
        Enclose the string in quotation marks if it contains
        spaces. Period '.' represents the current date and time.
        [yy]yy &lt; 100 assumes 21th century, e.g.20yy.

     -m <i>date</i>      Sets the modification date where <i>date</i> is a string of the
        form in -d above. (mm/dd/[yy]yy [hh:mm:[:ss] [AM | PM]])

     -t <i>type</i>      Sets the file type, where <i>type</i> is a string of exactly four
        characters.

SetFile is part of
/Developer/Tools/</pre>
<p><b>Examples</b><br>
<br>
Set the creator and type for the ResEqual tool:<br>
<span class="code"><br>
$ SetFile -c "MPS " -t MPST ResEqual</span><br>
<br>Set the modification date of "myFile":<br>
<br>
<span class="code">$ SetFile -m "8/4/2001 16:13" myFile</span><br>
<br>Set myfile.txt to be invisible in the finder:<br>
<br>
<span class="code">$ SetFile -a V myfile.txt</span><br><br>
Set myfile.txt to be visible in the finder:<br>
<br><span class="code">$ SetFile -a v myfile.txt</span></p>
<p><b>Return Values</b><br>
0 - attributes set<br>
1 - syntax error <br>
2 - any other error</p>
<p class="quote"><i>“Drunk with power isn't the same as being drunk with booze” ~ Craig Ferguson</i></p>
<p><b>Related:</b></p>
<p><a href="https://developer.apple.com/legacy/library/documentation/Darwin/Reference/ManPages/man1/setfile.1.html">setfile man page</a> - Apple.com<br>
<a href="chflags.html">chflags</a> - Change a file or folder's flags.<br>
<a href="getfileinfo.html">GetFileInfo</a> - Get attributes of HFS+ files<br>
<a href="textutil.html">textutil</a> - Manipulate text files in various formats</p><!-- #BeginLibraryItem "/Library/foot_osx.lbi" --><p><script async="" src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
<!-- OSX300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="1823340303"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->
