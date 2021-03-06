---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_osx.lbi" --><!-- #EndLibraryItem --><h1>nano</h1> 
<p>Simple text editor, in the style of the Pine Composer. Nano's ANOther editor, an enhanced free Pico clone. Commands 
  are displayed at the bottom of the screen, and context- sensitive help is provided. 
nano also implements  some 
missing (or disabled by default) features in Pico, such as "search and replace" and "go to line and<br>
column number".</p>
<pre>Syntax
      nano [<i>OPTIONS</i>] [[+<i>LINE</i>,<i>COLUMN</i>] <i>FILE</i>]...

Options
       +<i>LINE</i>,<i>COLUMN</i>
              Places cursor at line number LINE and column number COLUMN (at least  one  of  which  must  be
              specified) on startup, instead of the default of line 1, column 1.

       -?     Same as -h (--help).

       -A (--smarthome)
              Make  the  Home  key smarter.  When Home is pressed anywhere but at the very beginning of non-whitespace nonwhitespace
              whitespace characters on a line, the cursor will jump to that beginning  (either  forwards  or
              backwards).   If the cursor is already at that position, it will jump to the true beginning of
              the line.

       -B (--backup)
              When saving a file, back up the previous version of it to the current filename suffixed with a
              ~.

       -C <i>dir</i> (--backupdir=<i>dir</i>)
              Set the directory where nano puts unique backup files if file backups are enabled.

       -D (--boldtext)
              Use bold text instead of reverse video text.

       -E (--tabstospaces)
              Convert typed tabs to spaces.

       -F (--multibuffer)
              Enable multiple file buffers, if available.

       -H (--historylog)
              Log search and replace strings to ~/.nano_history, so they can be retrieved in later sessions,
              if nanorc support is available.

       -I (--ignorercfiles)
              Don't look at SYSCONFDIR/nanorc or ~/.nanorc, if nanorc support is available.

       -K (--rebindkeypad)
              Interpret the numeric keypad keys so that they all work properly.  You should only need to use
              this option if they don't, as mouse support won't work properly with this option enabled.

       -L (--nonewlines)
              Don't add newlines to the ends of files.

       -N (--noconvert)
              Disable automatic conversion of files from DOS/Mac format.

       -O (--morespace)
              Use the blank line below the titlebar as extra editing space.

       -Q <i>str</i> (--quotestr=<i>str</i>)
              Set  the quoting string for justifying.  The default is "^([ \t]*[#:&gt;\|}])+" if extended regu-lar regular
              lar expression support is available, or "&gt; " otherwise.  Note that \t stands for a Tab.

       -R (--restricted)
              Restricted mode: don't read or write to any file not specified on the command line;  read  any
              nanorc files; allow suspending; allow a file to be appended to, prepended to, or saved under a
              different name if it already has one; or use backup files or spell checking.  Also  accessible
              by invoking nano with any name beginning with 'r' (e.g. "rnano").

       -S (--smooth)
              Enable  smooth  scrolling.  Text will scroll line-by-line, instead of the usual chunk-by-chunk
              behavior.

       -T <i>cols</i> (--tabsize=<i>cols</i>)
              Set the size (width) of a tab to cols columns.  The value of cols must be greater than 0.  The
              default value is 8.

       -U (--quickblank)
              Do  quick  statusbar blanking.  Statusbar messages will disappear after 1 keystroke instead of
              25.  Note that -c overrides this.

       -V (--version)
              Show the current version number and exit.

       -W (--wordbounds)
              Detect word boundaries more accurately by treating punctuation characters as part of a word.

       -Y <i>str</i> (--syntax=<i>str</i>)
              Specify a specific syntax highlighting from the nanorc to use, if available.

       -c (--const)
              Constantly show the cursor position.  Note that this overrides -U.

       -d (--rebinddelete)
              Interpret the Delete key differently so that both Backspace and  Delete  work  properly.   You
              should only need to use this option if Backspace acts like Delete on your system.

       -h (--help)
              Show a summary of command line options and exit.

       -i (--autoindent)
              Indent new lines to the previous line's indentation.  Useful when editing source code.

       -k (--cut)
              Enable cut from cursor to end of line.

       -l (--nofollow)
              If  the file being edited is a symbolic link, replace the link with a new file instead of fol-lowing following
              lowing it.  Good for editing files in /tmp, perhaps?

       -m (--mouse)
              Enable mouse support, if available for your system.  When enabled, mouse clicks can be used to
              place  the  cursor, set the mark (with a double click), and execute shortcuts.  The mouse will
              work in the X Window System, and on the console when gpm is running.

       -o <i>dir</i> (--operatingdir=<i>dir</i>)
              Set operating directory.  Makes nano set up something similar to a chroot.

       -p (--preserve)
              Preserve the XON and XOFF sequences (^Q and ^S) so they will be caught by the terminal.

       -r <i>cols</i> (--fill=<i>cols</i>)
              Wrap lines at column cols.  If this value is 0 or less, wrapping will occur at  the  width  of
              the  screen  less  cols  columns,  allowing the wrap point to vary along with the width of the
              screen if the screen is resized.  The default value is -8.

       -s <i>prog</i> (--speller=<i>prog</i>)
              Enable alternative spell checker command.

       -t (--tempfile)
              Always save changed buffer without prompting.  Same as Pico's -t option.

       -v (--view)
              View file (read only) mode.

       -w (--nowrap)
              Disable wrapping of long lines.

       -x (--nohelp)
              Disable help screen at bottom of editor.

       -z (--suspend)
              Enable suspend ability.

       -a, -b, -e, -f, -g, -j
              Ignored, for compatibility with Pico.</pre>
<p>nano will read initialization files in the following order: SYSCONFDIR/nanorc, then ~/.nanorc.<br>
Please see nanorc(5) and the example file nanorc.sample, both of which should be provided with nano.<br>
If no alternative spell checker command is specified on the command line or in one of the nanorc
files, nano will check the SPELL environment variable for one.</p>
<p> In some cases nano will try to dump the buffer into an emergency file. This will happen mainly if
nano receives a SIGHUP or SIGTERM or runs out of memory. It will write the buffer into a file named
nano.save if the buffer didn't have a name already, or will add a ".save" suffix to the current  filename. </p>
<p>If an emergency file with that name already exists in the current directory, it will add ".save" plus a number (e.g. ".save.1") to the current filename in order to make it unique. In multi-buffer 
mode, nano will write all the open buffers to their respective emergency files.<br>
<br>
Please send any comments or bug reports to nano@nano-editor.org.<b><br>
  <br>
  </b><i class="quote">"True Ease in Writing comes from Art, not Chance, As those move easiest 
  who have learned to dance" ~ Alexander 
Pope</i></p>
<p><b>Related:</b></p>
<p><a href="https://developer.apple.com/legacy/library/documentation/Darwin/Reference/ManPages/man1/nano.1.html">nano man page</a> - Apple.com<br>
http://www.nano-editor.org/</p><!-- #BeginLibraryItem "/Library/foot_osx.lbi" --><p>
<!-- OSX300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="1823340303"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="nano.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->
