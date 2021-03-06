---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_osx.lbi" --><!-- #EndLibraryItem --><h1>drutil</h1> 
<p>Interact with CD/DVD burners: burn, eject, erase. </p>
<pre>Syntax 
      drutil [-drive ...] <i>command</i> [command-options-and-arguments]

Key</pre>
<p>Each <i>command </i>is listed below with its description and individual arguments.  Drive selection arguments must
appear at the beginning of the command.</p>
<pre>     -drive <i>drive</i>(s)
                Specify a drive or drives, per the output of list, for those verbs that can operate
                on one or more drives.  See the <a href="drutil.html#DriveSelection">Drive Selection Criterion</a> section below.

     help <i>verb</i>  Display the usage information for the specified <i>verb.</i>

     atip       Display the Absolute Time in Pre-Groove (ATIP) for inserted CD-R/RW media.

     bulkerase <i>type</i>
                Start bulk erase mode, in which the drive will continually erase inserted -RW media, eject
                it, and prompt for another disc until terminated.

                Types of erase:
                quick    Performs a quick erase, doing the minimal amount of work to make the disc appear
                         blank. This operation typically takes only a minute or two.

                full     Performs a complete erase, erasing every block on the disk. This operation is slow
                         (on the order of 30 minutes) to complete.

     burn <i>options path</i>
                Burn a valid directory or image file to disc. The default is to burn the specified directory
                to a new filesystem. The -audio option creates an audio CD (redbook) in which any valid
                QuickTime audio file present in the path is converted to a track (in alphabetical order). If
                a file is specified (valid image files only: .dmg, .iso, .cue/bin, and .toc) the contents of
                the image file are burned. Pre-burn and post-burn options, and filesystem exclusions can be
                specificed for enhanced functionality. Last option takes precedence. Invalid commands are
                ignored.

                path     A valid path to a directory or file.

                options  Specify an arbitrary valid burn option(s): -test, -appendable, -erase, -mount,
                         -noverify, -nohfsplus, -noiso9660, -nojoliet, -noudf, -nofs, -audio, -speed,
                         -pregap.  Or specify a default burn option: -notest, -noappendable, -noerase,
                         -allfs, -hfsplus, -iso9660, -joliet, -udf, -data, -eject, -verify.

     cdtext
                Read and display any CD-Text information reported by the drive. The drive must contain an
                audio CD, and be capable of reading CD-Text.

     discinfo [-xml]
                Display detailed information about present media.
                From the MMC command of the same name.

     dumpiso <i>device block </i>[<i>format</i>]
                Tool to inspect and interpret ISO-9660 and Joliet structures on the media.

                device   Disk node, e.g. /dev/disk1, /dev/disk1s1, /dev/rdisk1.

                block    Block number to dump (in decimal or 0x hex notation). Blocks are assumed to be
                         2048-byte blocks.

                format   How to interpret the block. If format is not specified, dumpiso will attempt to
                         guess.  If present, this argument should be one of the following: None, Boot,
                         BootCat, PVD, SVD, VPD, VDST, MPath, LPath, Dir, HFSPlusVH.

     dumpudf <i>device block</i>
                Tool to inspect and interpret UDF structures on the media.

                device   Disk node, e.g. /dev/disk1, /dev/disk1s1, /dev/rdisk1.

                block    Block number to dump (in decimal or 0x hex notation). Blocks are assumed to be
                         2048-byte blocks.

     eject      Synonym for drutil tray eject.

     erase <i>type</i>
                Erase -RW media in the drive(s) and eject it.

                Types of erase:
                quick    Perform a quick erase, doing the minimal amount of work to make the disc appear
                         blank. This operation typically takes only a minute or two.

                full     Perform a complete erase, erasing every block on the disk. This operation is slow
                         (on the order of 30 minutes) to complete.

     filename <i>name</i>
                Shows how the specified filename will be modified to comply with the naming rules of the
                filesystems that DiscRecording generates.

     getconfig <i>type</i>
                Displays device feature and profile list.

                Types of config information:
                current  Displays current features and profiles for a drive.

                supported Displays all supported features and profiles for a drive.

     info [-xml]
                Display various pieces of information for each drive, including how it's connected to the
                computer and a summary of capabilities.

     list [-xml]
                List all burning devices connected to the machine.

     poll       Display device and media notifications until terminated.

     size <i>options path</i>
                Estimates the size of a valid directory or image file (in blocks). The default is to estimate
                the size of the specified path as a hybrid filesystem. The -audio option calculates the
                contents of the directory as an audio CD (redbook) (for applicable files). If a file is
                specified (valid image files only: .dmg, .iso, .cue/bin, and .toc) the contents of the image
                file will be calculated. Filesystem exclusions can be specificed for enhanced functionality.
                Calculated size will be compared against blank media that is found unless the -nodrive argument
                is specified. Last option takes precedence. Invalid commands are ignored.

                path     A valid path to a directory or file.

                options  Specify an arbitrary valid burn option(s): -nodrive, -nohfsplus, -noiso9660,
                         -nojoliet, -noudf, -nofs, -audio, -pregap.  Or specify a default burn option:
                         -allfs, -hfsplus, -iso9660, -joliet, -udf, -data.

     status [-xml]
                Display detailed media-specific information.

     subchannel
                Display information from the subchannels on CD media. This prints the MCN (media catalog
                number) for the disc, and the ISRC (international standard recording code) for all tracks.
                This command only works when CD media is present.

                From the MMC command of the same name.

     toc
                Display the table of contents (TOC) of inserted media.

     trackinfo [-xml]
                Display detailed information about all tracks present on the media.

                From the MMC command of the same name.

     tray <i>command</i>
                Perform a tray/media related command. Note that some drives do not have trays, and some
                have trays but lack motorized eject or inject capability.

                Tray commands:
                open     Opens a drive's tray, if no media is present and the drive has a tray capable of
                         motorized eject.

                close    Closes a drive's tray, if the drive has a tray capable of motorized inject.

                eject    Ejects media from the drive, if the drive has a tray capable of motorized eject. If
                         no media is present, this is equivalent to open.  If media is present and can be
                         unmounted, it will be unmounted and then ejected.  If media is present but cannot
                         be unmounted, the eject will fail.

     version    Display the operating system and DiscRecording framework version numbers.

OPTIONS
     -xml
                When specified (valid options only: discinfo, info, list, status, and trackinfo) the output
                for the specified verb will be shown in xml format.</pre>
<p><b><a id="DriveSelection"></a>Drive Selection Criteria</b> <br>
Some functions of drutil operate on a specific drive. Since any number of drives might be available, and
they  come and go at any time, the device selection arguments provide a method for selecting among
them.<br>
<br>
The candidate list starts out as a list of all attached drives. One or more arguments of the form
<span class="code">-drive drive(s)</span> can be specified. Each argument has the effect of narrowing the candidate list, depending
on what <span class="code">drive(s)</span> is.</p>
<p> It can be:</p>
<blockquote>
<p>-       A positive decimal number, assumed to be a 1-based index into the candidate list. The candidate
list is trimmed to just that device.<br>
<br>
-       One of the following keywords: <span class="code">internal, external, usb, firewire, atapi, scsi</span>.  The candidate list is trimmed to devices which match the specified location / bus. Case is ignored in this comparison.<br>
<br>
-       Any other string, assumed to be a vendor/product name. The candidate list is trimmed to devices whose vendor or product strings exactly match the argument. Case (but not white-space)
is ignored in this comparison.</p>
</blockquote>
<p>Multiple <span class="code">-drive</span> arguments can  be specified; each argument narrows the candidate list further. After all
the <span class="code">-drive</span> arguments have been processed, the candidate list is considered. If it contains exactly one
item, that drive is used. If it contains zero items, drutil prints an error message and exits. If it
contains more than one item, the selected function is executed on all drives remaining in the list.</p>
<p>drutil uses the DiscRecording framework to interact with attached burning devices.</p>
<p><b>Examples</b></p>
<p>Display help for the verb "status". <br>
<span class="code">$ drutil help status</span><br>
<br>
Display a list of attached devices.<br>

<span class="code">$ drutil list</span><br>
<br>

Display miscellaneous information for all attached devices. <br>
<span class="code">$ drutil info<br>
</span><br>
Display media-specific information for all attached devices. <br>
<span class="code">$ drutil status </span><br>
<br>
Burn the Documents directory to the internal drive without verifying, then eject the disc:<br>
<span class="code">$ drutil -drive internal burn -noverify -eject -speed 24 ~/Documents</span><br>
<br>
Create an XML file containing info about internal drives:<br>
<span class="code">$ drutil -drive internal info -xml &gt; driveInfo.xml</span></p>
<p>Close the tray of the first burning device seen, if possible. <br>
<span class="code">$ drutil -drive 1 tray close </span><br>
<br>
List drive specific information for all externally connected burning devices:<br>
<span class="code">$ drutil -drive external info</span><br>
<br>
Lists media specific information for media present in attached firewire burning devices:<br>
<span class="code">$ drutil -drive firewire status</span><br>
<br>
Open the tray of all burning devices whose vendor id is VENDOR, if possible:<br>

<span class="code">$ drutil -drive VENDOR tray open</span><br>
<br>
List supported features and profiles for attached devices whose product id is 'CD-RW CDW827ES'<br>

<span class="code">$ drutil -drive 'CD-RW CDW827ES' getconfig supported</span><br>
<br>
<i class="quote">“Time is the fire in which we burn” ~ Gene Roddenberry</i></p>
<p><b>Related:</b></p>
<p><a href="https://developer.apple.com/legacy/library/documentation/Darwin/Reference/ManPages/man1/drutil.1.html">drutil man page</a> - Apple.com<br>
<a href="diskutil.html">diskutil</a> - Disk utilities - Format, Verify, Repair</p><!-- #BeginLibraryItem "/Library/foot_osx.lbi" --><p>
<!-- OSX300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="1823340303"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="drutil.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->
