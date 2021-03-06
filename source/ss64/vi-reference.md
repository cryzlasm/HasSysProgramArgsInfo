---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_home.lbi" --><!-- #EndLibraryItem --><h1>vi Reference</h1>
<hr>
<p>Warning: some vi versions don't support the more esoteric features described in this document.  You can edit/redistribute this document freely, as long as you don't make false claims on original authorship. This reference was originally developed by Maarten Litmaath, and has been contributed to by many others (see list at the end of document).</p>
<hr>
<a id="contents">Contents</a>
<pre>    <a href="vi-reference.html#legend">Legend</a>
    <a href="vi-reference.html#move">Move commands</a>
    <a href="vi-reference.html#search">Searching</a>
    <a href="vi-reference.html#undo">Undoing changes</a>
    <a href="vi-reference.html#append">Appending text</a>
    <a href="vi-reference.html#delete">Deleting text</a>
    <a href="vi-reference.html#change">Changing text</a>
    <a href="vi-reference.html#substitute">Substitute replacement patterns</a>
    <a href="vi-reference.html#remember">Remembering text</a>
    <a href="vi-reference.html#commands">Commands while in append|change mode</a>
    <a href="vi-reference.html#save">Writing, editing other files, and quitting vi</a>
    <a href="vi-reference.html#display">Display commands</a>
    <a href="vi-reference.html#mapping">Mapping and abbreviation</a>
    <a href="vi-reference.html#switch">Switch and shell commands</a>
    <a href="vi-reference.html#startup">vi startup</a>
    <a href="vi-reference.html#view">Changing and viewing options</a>
    <a href="vi-reference.html#important">The most important options</a>
    <a href="vi-reference.html#contributions">Contributions</a>
    <a href="vi-reference.html#links">Related</a></pre>
<h2><a id="legend">Legend</a>
</h2>
<hr>
<pre>    default values          : 1
    &lt;*&gt;                     : * must not be taken literally
    [*]                     : * is optional
    ^X                      : &lt;ctrl&gt;X
    &lt;sp&gt;                    : space
    &lt;cr&gt;                    : carriage return
    &lt;lf&gt;                    : linefeed
    &lt;ht&gt;                    : horizontal tab
    &lt;esc&gt;                   : escape
    &lt;erase&gt;                 : your erase character
    &lt;kill&gt;                  : your kill character
    &lt;intr&gt;                  : your interrupt character
    &lt;a-z&gt;                   : an element in the range
    N                       : number (* = allowed, `-' = not appropriate)
    CHAR                    : char unequal to &lt;ht&gt;|&lt;sp&gt;
    WORD                    : word followed by &lt;ht&gt;|&lt;sp&gt;|&lt;lf&gt;
</pre>
<hr>
<h2><a id="move">Move commands</a> </h2>
<pre>     N | Command            | Meaning
    ---+--------------------+-----------------------------------------------
     * | h | ^H | &lt;erase&gt;   | &lt;*&gt; chars to the left.
                            |
     * | j | &lt;lf&gt; | ^N      | &lt;*&gt; lines downward.
                            |
     * | l | &lt;sp&gt;           | &lt;*&gt; chars to the right.
                            |
     * | k | ^P             | &lt;*&gt; lines upward.
                            |
     * | $                  | To the end of line &lt;*&gt; from the cursor.
                            |
     - | ^                  | To the first CHAR of the line.
                            |
     * | _                  | To the first CHAR &lt;*&gt; - 1 lines lower.
                            |
     * | -                  | To the first CHAR &lt;*&gt; lines higher.
                            |
     * | + | &lt;cr&gt;           | To the first CHAR &lt;*&gt; lines lower.
                            |
     - | 0                  | To the first char of the line.
                            |
     * | |                  | To column &lt;*&gt; (&lt;ht&gt;: only to the endpoint).
                            |
     * | f&lt;char&gt;            | &lt;*&gt; &lt;char&gt;s to the right (find).
                            |
     * | t&lt;char&gt;            | Till before &lt;*&gt; &lt;char&gt;s to the right.
                            |
     * | F&lt;char&gt;            | &lt;*&gt; &lt;char&gt;s to the left.
                            |
     * | T&lt;char&gt;            | Till after &lt;*&gt; &lt;char&gt;s to the left.
                            |
     * | ;                  | Repeat latest `f'|`t'|`F'|`T' &lt;*&gt; times.
                            |
     * | ,                  | Idem in opposite direction.
                            |
     * | w                  | &lt;*&gt; words forward.
                            |
     * | W                  | &lt;*&gt; WORDS forward.
                            |
     * | b                  | &lt;*&gt; words backward.
                            |
     * | B                  | &lt;*&gt; WORDS backward.
                            |
     * | e                  | To the end of word &lt;*&gt; forward.
                            |
     * | E                  | To the end of WORD &lt;*&gt; forward.
                            |
     * | G                  | Go to line &lt;*&gt; (default EOF).
                            |
     * | H                  | To line &lt;*&gt; from top of the screen (home).
                            |
     * | L                  | To line &lt;*&gt; from bottom of the screen (last).
                            |
     - | M                  | To the middle line of the screen.
                            |
     * | )                  | &lt;*&gt; sentences forward.
                            |
     * | (                  | &lt;*&gt; sentences backward.
                            |
     * | }                  | &lt;*&gt; paragraphs forward.
                            |
     * | {                  | &lt;*&gt; paragraphs backward.
                            |
     - | ]]                 | To the next section (default EOF).
                            |
     - | [[                 | To the previous section (default begin of file).
                            |
     - | `&lt;a-z&gt;             | To the mark.
                            |
     - | '&lt;a-z&gt;             | To the first CHAR of the line with the mark.
                            |
     - | ``                 | To the cursor position before the latest absolute
                            |   jump (of which are examples `/' and `G').
                            |
     - | ''                 | To the first CHAR of the line on which the cursor
                            |   was placed before the latest absolute jump.
                            |
     - | /&lt;string&gt;[/]       | To the next occurrence of &lt;string&gt;.
                            |
     - | /[/]               | To the next occurrence of the latest search
                            |   item.
                            |
     - | ?&lt;string&gt;[?]       | To the previous occurrence of &lt;string&gt;.
                            |
     - | ?[?]               | To the previous occurrence of the latest search
                            |   item.
                            |
     - | /&lt;string&gt;/+[n]     | To n-th (default 1st) line after next occurrence
                            |   of &lt;string&gt;.
                            |
     - | ?&lt;string&gt;?+[n]     | Idem, searching in the opposite direction.
                            |
     - | /&lt;string&gt;/-[n]     | To n-th (default 1st) line before next occurrence
                            |   of &lt;string&gt;.
                            |
     - | ?&lt;string&gt;?-[n]     | Idem, searching in the opposite direction.
                            |
     - | &lt;find&gt;[;&lt;find&gt;]    | Perform successive `/'|`?' actions.  For example,
                            |   /foo/;/bar        - to next `foo', then
                            |                        to next `bar'
                            |   ?foo?-;/bar       - to line before previous
                            |                        `foo', then to next `bar'
                            |
     - | :/&lt;string&gt;[/]      | To the next line containing an occurrence of
                            |   &lt;string&gt;.
                            |
     - | :/[/]              | To the next line containing an occurrence of
                            |   the latest searched for item.
                            |
     - | :?&lt;string&gt;[?]      | To the previous line containing an occurrence
                            |   of &lt;string&gt;.
                            |
     - | :?[?]              | To the previous line containing an occurrence
                            |   of the latest searched for item.
                            |
     - | :/&lt;string&gt;/+[n]    | To n-th (default 1st) line after next occurrence
                            |   of &lt;string&gt;.
                            |
     - | :?&lt;string&gt;?+[n]    | Idem, searching in the opposite direction.
                            |
     - | :/&lt;string&gt;/-[n]    | To n-th (default 1st) line before next occurrence
                            |   of &lt;string&gt;.
                            |
     - | :?&lt;string&gt;?-[n]    | Idem, searching in the opposite direction.
                            |
     - | :&lt;find&gt;[;&lt;find&gt;]   | Perform successive `/'|`?' actions.  Each &lt;find&gt;
                            |   is of the form /&lt;string/[+[n]] or
                            |   ?&lt;string&gt;?[+[n]].
                            |
     - | n                  | Repeat latest `/'|`?' (next).
                            |
     - | N                  | Idem in opposite direction.
                            |
     - | %                  | Find the next bracket and go to its match
                            |   (also with `{'|`}' and `['|`]').
                            |
     - | :[x]               | To the line specified by x.
                            |
     - | :[x]+[n]           | To n-th (default 1st) line after line specified
                            |   by x.
                            |
     - | :[x]-[n]           | To n-th (default 1st) line before line specified
                            |   by x.
</pre>
<hr>
<h2><a id="search">Searching (see above)</a></h2>
<p><br>
In <span class="code">: ex</span> commands, an <span class="code">ex</span> command that moves the cursor to a line of
the file is a valid line number argument for commands that operate on
lines and line ranges.<span class="code"> . </span>can be used as a synonym for the current
line.  See also '<a href="vi-reference.html#save">writing, editing other files, and quitting vi</a>'.<br>
</p>
<pre>    :ta &lt;name&gt;              | Search in the tags file[s] where &lt;name&gt; is
                            |   defined (file, line), and go to it.
                            |
    ^]                      | Use the name under the cursor in a `:ta' command.
                            |
    ^T                      | Pop the previous tag off the tagstack and return
                            |   to its position.
                            |
    :[x,y]g/&lt;string&gt;/&lt;cmd&gt;  | Search globally [from line x to y] for &lt;string&gt;
                            |   and execute the `ex' &lt;cmd&gt; on each occurrence.
                            |   Multiple &lt;cmd&gt;'s are separated by `|'.
                            |
    :[x,y]g/&lt;s1&gt;/,/&lt;s2&gt;/&lt;c&gt; | Search globally [from line x to y] for &lt;s1&gt; and
                            |   execute the `ex' command &lt;c&gt; on each line
                            |   between &lt;s1&gt; and the line that matches &lt;s2&gt;.
                            |
    :[x,y]v/&lt;string&gt;/&lt;cmd&gt;  | Execute &lt;cmd&gt; on the lines that don't match.
</pre>
<hr>
<h2><a id="undo">Undoing changes</a>
</h2>
<pre>    u                       | Undo the latest change.
                            |
    U                       | Undo all changes on a line, while not having
                            |   moved off it (unfortunately).
                            |
    :u                      | Undo last substituion on line (only one)
                            |
    :q!                     | Quit vi without writing.
                            |
    :e!                     | Re-edit a messed-up file.
</pre>
<hr>
<h2><a id="append">Appending text (end with &lt;esc&gt;)</a>
</h2>
<pre>     * | a                  | &lt;*&gt; times after the cursor.
                            |
     * | A                  | &lt;*&gt; times at the end of line.
                            |
     * | i                  | &lt;*&gt; times before the cursor (insert).
                            |
     * | I                  | &lt;*&gt; times before the first CHAR of the line
                            |
     * | o                  | On a new line below the current (open).
                            |   The count is only useful on a slow terminal.
                            |
     * | O                  | On a new line above the current.
                            |   The count is only useful on a slow terminal.
                            |
     * | &gt;&lt;move&gt;            | Shift the lines described by &lt;*&gt;&lt;move&gt; one
                            |   shiftwidth to the right.
                            |
     * | &gt;&gt;                 | Shift &lt;*&gt; lines one shiftwidth to the right.
                            |
     * | ["&lt;a-zA-Z1-9&gt;]p    | Put the contents of the (default undo) buffer
                            |   &lt;*&gt; times after the cursor.
                            |   A buffer containing lines is put only once,
                            |   below the current line.  See `deleting text'.
                            |
     * | ["&lt;a-zA-Z1-9&gt;]P    | Put the contents of the (default undo) buffer
                            |   &lt;*&gt; times before the cursor.
                            |   A buffer containing lines is put only once,
                            |   above the current line.  See `deleting text'.
                            |
     * | .                  | Repeat previous command &lt;*&gt; times.  If the last
                            |   command before a `.' command references a
                            |   numbered buffer, the buffer number is
                            |   incremented first (and the count is ignored):
                            |
                            |   "1pu.u.u.u.u      - `walk through' buffers 1
                            |                       through 5
                            |   "1P....           - restore them
                            |
     - | :[x,y]t&lt;l&gt;         | Copy lines x through y (default current line)
                            |   to be after line &lt;l&gt;.  See `remembering text'.
</pre>
<hr>
<h2><a id="delete">Deleting text</a></h2>
<p> Everything deleted can be stored into a buffer. This is achieved
by putting a<span class="code"> "</span> and a letter <span class="code">&lt;a-z&gt;</span> before the delete command. The
deleted text will be in the buffer with the used letter. If <span class="code">&lt;A-Z&gt;</span> is
used as buffer name, the conjugate buffer <span class="code">&lt;a-z&gt;</span> will be augmented
(i.e., appended) instead of overwritten with the text. The undo
buffer always contains the latest change. Buffers <span class="code">&lt;1-9&gt;</span> contain
the latest 9 LINE deletions ("1 is most recent).  See also
'<a href="vi-reference.html#remember">remembering tex</a>t'.<br>
</p>
<pre>     * | x                  | Delete &lt;*&gt; chars under and after the cursor.
                            |
     * | X                  | &lt;*&gt; chars before the cursor.
                            |
     * | d&lt;move&gt;            | From begin to endpoint of &lt;*&gt;&lt;move&gt;.
                            |
     * | dd                 | &lt;*&gt; lines.
                            |
     - | D                  | The rest of the line.
                            |
     * | &lt;&lt;move&gt;            | Shift the lines described by &lt;*&gt;&lt;move&gt; one
                            |   shiftwidth to the left.
                            |
     * | &lt;&lt;                 | Shift &lt;*&gt; lines one shiftwidth to the left.
                            |
     * | .                  | Repeat latest command &lt;*&gt; times.
                            |
     - | :[x,y]d            | Delete lines x through y
                            |   (default current line and next).
</pre>
<hr>
<h2><a id="change">Changing text (end with &lt;esc&gt;)</a>
</h2>
<pre>     * | r&lt;char&gt;            | Replace &lt;*&gt; chars by &lt;char&gt; - no &lt;esc&gt;.
                            |
     * | R                  | Overwrite the rest of the line,
                            |   appending change &lt;*&gt; - 1 times.
                            |
     * | s                  | Substitute &lt;*&gt; chars.
                            |
     * | S                  | &lt;*&gt; lines.
                            |
     * | c&lt;move&gt;            | Change from begin to endpoint of &lt;*&gt;&lt;move&gt;.
                            |
     * | cc                 | &lt;*&gt; lines.
                            |
     * | C                  | The rest of the line and &lt;*&gt; - 1 next lines.
                            |
     * | =&lt;move&gt;            | If the option `lisp' is set, this command
                            |   will realign the lines described by &lt;*&gt;&lt;move&gt;
                            |   as though they had been typed with the option
                            |   `ai' set too.
                            |
     - | ~                  | Switch lower and upper cases
                            |   (should be an operator, like `c').
                            |
     * | J                  | Join &lt;*&gt; lines (default 2).
                            |
     * | .                  | Repeat latest command &lt;*&gt; times (`J' only once).
                            |
     - | &amp;                  | Repeat latest `ex' substitute command, e.g.
                            |   `:s/wrong/good'.
                            |
     - | :[x,y]j            | Join lines x through y
                            |   (default current line and next).
                            |
     - | :[x,y]j!           | Idem, but with no space inbetween.
                            |
     - | :[x,y]m&lt;l&gt;         | Move lines x through y (default current line)
                            |   to be after line &lt;l&gt;.  See `remembering text'.
                            |
     - | :[x,y]s/&lt;p&gt;/&lt;r&gt;/&lt;f&gt;| Substitute (on lines x through y) the pattern &lt;p&gt;
                            |   (default the last pattern) with &lt;r&gt;.  Useful
                            |   flags &lt;f&gt; are `g' for `global' (i.e. change
                            |   every non-overlapping occurrence of &lt;p&gt;) and
                            |   `c' for `confirm' (type `y' to confirm a
                            |   particular substitution, else &lt;cr&gt;).  Instead
                            |   of `/' any punctuation CHAR unequal to &lt;lf&gt;
                            |   can be used as delimiter.
</pre>
<hr>
<h2><a id="substitute">Substitute replacement patterns</a>
</h2>
<p><br>
The basic meta-characters for the replacement pattern are <span class="code">&amp; </span>and<span class="code"> ~ </span>; these are given as `<span class="code">\&amp;</span>' and `<span class="code">\~</span>' when <span class="code">nomagic</span> is set.<br>
Each instance of <span class="code">&amp;</span> is replaced by the characters which the
regular expression matched. </p>
<p>The meta-character<span class="code"> ~ </span>stands, in
the replacement pattern, for the defining text of the previous
replacement pattern.  Other meta-sequences possible in the
replacement pattern are always introduced by the escaping character<span class="code"> \ </span>The sequence <span class="code">\n</span> (with <span class="code">n</span> in <span class="code">[1-9]</span>) is replaced by the text
matched by the n-th regular subexpression enclosed between<span class="code"> \( </span>and<span class="code"> \) </span>. The sequences<span class="code"> \u </span>and<span class="code"> \l </span>cause the immediately following
character in the replacement to be converted to upper- or lower-case
respectively if this character is a letter.  The sequences<span class="code"> \U </span>and<span class="code"> \L </span>turn such conversion on, either until<span class="code"> \E </span>or<span class="code"> \e </span>is
encountered, or until the end of the replacement pattern.  See the <a href="vi-reference.html#important">magic</a> option for additional meta-characters.  Some examples of
substitutions are shown below.<br>
</p>
<pre>          :s/foo/\u&amp;                      - turn `foo' into `Foo'
          :s/foo/\U&amp;                      - turn `foo' into `FOO'
          :s/\(foo\) \(bar\)/\U\1\E \u\2  - turn `foo bar' into `FOO Bar'
          :s/foo/\u&amp;/|s/bar/~             - capitalize foo, then
                                            capitalize bar
</pre>
<hr>
<h2><a id="remember">Remembering text (yanking)</a>
</h2>
<p> With yank commands you can put<span class="code"> "&lt;a-zA-Z&gt;</span> before the command, just
as with delete commands (see `deleting text').  Otherwise you only
copy to the undo buffer.  Using the capital letters appends to the
buffer.  The use of buffers<span class="code"> &lt;a-z&gt;</span> is THE way of copying text to
another file; see the<span class="code"> :e &lt;file&gt;</span> command.<br>
</p>
<pre>     * | y&lt;move&gt;            | Yank from begin to endpoint of &lt;*&gt;&lt;move&gt;.
                            |
     * | yy                 | &lt;*&gt; lines.
                            |
     * | Y                  | Idem (should be equivalent to `y$' though).
                            |
     - | :[x,y]y&lt;a-zA-Z&gt;    | Yank lines x through y into named buffer.
                            |   Using the capital letter will append to the
                            |   buffer.
                            |
     - | m&lt;a-z&gt;             | Mark the cursor position with a letter.
                            |
     - | :[x]k&lt;a-z&gt;         | Mark line x (default current) with a letter.
                            |   The letter can be used to refer to the
                            |   line in another ex command:
                            |
                            |   :/aaa/ka   - mark next line matching aaa
                            |   :'a,'a+3d  - delete that line and the three
                            |                following it
                            |   :?bbb?kb   - mark previous line matching bbb
                            |   :'bm.      - move that line to be after current
                            |                line
</pre>
<hr>
<h2><a id="commands">Commands while in append|change mode</a>
</h2>
<pre>    ^@                      | If typed as the first character of the
                            |   insertion, it is replaced with the previous
                            |   text inserted (max. 128 chars), after which
                            |   the insertion is terminated.
                            |
    ^V                      | Deprive the next char of its special meaning
                            |   (e.g. &lt;esc&gt;).
                            |
    ^D                      | One shiftwidth to the left, but only if
                            |   nothing else has been typed on the line.
                            |
    0^D                     | Remove all indentation on the current line
                            |   (there must be no other chars on the line).
                            |
    ^^D                     | Idem, but it is restored on the next line.
                            |
    ^T                      | One shiftwidth to the right, but only if
                            |   nothing else has been typed on the line.
                            |
    ^H | &lt;erase&gt;            | One char back.
                            |
    ^W                      | One word back.
                            |
    &lt;kill&gt;                  | Back to the begin of the change on the
                            |   current line.
                            |
    &lt;intr&gt;                  | Like &lt;esc&gt; (but you get a beep as well).
</pre>
<hr>
<h2><a id="save">Writing, editing other files, and quitting vi</a></h2>
<pre>    In `:' `ex' commands - if not the first CHAR on the line - `%' denotes
    the current file, `#' is a synonym for the alternate file (which
    normally is the previous file).  As first CHAR on the line `%' is a
    shorthand for `1,$'.  Marks can be used for line numbers too: '&lt;a-z&gt;.
    In the `:w'|`:f'|`:cd'|`:e'|`:n' commands shell meta-characters can be
    used.

    :q                      | Quit vi, unless the buffer has been changed.
                            |
    :q!                     | Quit vi without writing.
                            |
    ^Z                      | Suspend vi.
                            |
    :w                      | Write the file.
                            |
    :w &lt;name&gt;               | Write to the file &lt;name&gt;.
                            |
    :w &gt;&gt; &lt;name&gt;            | Append the buffer to the file &lt;name&gt;.
                            |
    :w! &lt;name&gt;              | Overwrite the file &lt;name&gt;.
                            |
    :x,y w &lt;name&gt;           | Write lines x through y to the file &lt;name&gt;.
                            |
    :wq                     | Write the file and quit vi; some versions quit
                            |   even if the write was unsuccessful!
                            |   Use `ZZ' instead.
                            |
    ZZ                      | Write if the buffer has been changed, and
                            |   quit vi.  If you have invoked vi with the `-r'
                            |   option, you'd better write the file
                            |   explicitly (`w' or `w!'), or quit the
                            |   editor explicitly (`q!') if you don't want
                            |   to overwrite the file - some versions of vi
                            |   don't handle the `recover' option very well.
                            |
    :x [&lt;file&gt;]             | Idem [but write to &lt;file&gt;].
                            |
    :x! [&lt;file&gt;]            | `:w![&lt;file&gt;]' and `:q'.
                            |
    :pre                    | Preserve the file - the buffer is saved as if
                            |   the system had just crashed; for emergencies,
                            |   when a `:w' command has failed and you don't
                            |   know how to save your work (see `vi -r').
                            |
    :f &lt;name&gt;               | Set the current filename to &lt;name&gt;.
                            |
    :cd [&lt;dir&gt;]             | Set the working directory to &lt;dir&gt;
                            |   (default home directory).
                            |
    :cd! [&lt;dir&gt;]            | Idem, but don't save changes.
                            |
    :e [+&lt;cmd&gt;] &lt;file&gt;      | Edit another file without quitting vi - the
                            |   buffers are not changed (except the undo
                            |   buffer), so text can be copied from one file to
                            |   another this way.  [Execute the `ex' command
                            |   &lt;cmd&gt; (default `$') when the new file has been
                            |   read into the buffer.]  &lt;cmd&gt; must contain no
                            |   &lt;sp&gt; or &lt;ht&gt;.  See `vi startup'.
                            |
    :e! [+&lt;cmd&gt;] &lt;file&gt;     | Idem, without writing the current buffer.
                            |
    ^^                      | Edit the alternate (normally the previous) file.
                            |
    :rew                    | Rewind the argument list, edit the first file.
                            |
    :rew!                   | Idem, without writing the current buffer.
                            |
    :n [+&lt;cmd&gt;] [&lt;files&gt;]   | Edit next file or specify a new argument list.
                            |
    :n! [+&lt;cmd&gt;] [&lt;files&gt;]  | Idem, without writing the current buffer.
                            |
    :args                   | Give the argument list, with the current file
                            |   between `[' and `]'.
</pre>
<hr>
<h2><a id="display">Display commands</a>
</h2>
<pre>    ^G                      | Give file name, status, current line number
                            |   and relative position.
                            |
    ^L                      | Refresh the screen (sometimes `^P' or `^R').
                            |
    ^R                      | Sometimes vi replaces a deleted line by a `@',
                            |   to be deleted by `^R' (see option `redraw').
                            |
    [*]^E                   | Expose &lt;*&gt; more lines at bottom, cursor
                            |   stays put (if possible).
                            |
    [*]^Y                   | Expose &lt;*&gt; more lines at top, cursor
                            |   stays put (if possible).
                            |
    [*]^D                   | Scroll &lt;*&gt; lines downward
                            |   (default the number of the previous scroll;
                            |   initialization: half a page).
                            |
    [*]^U                   | Scroll &lt;*&gt; lines upward
                            |   (default the number of the previous scroll;
                            |   initialization: half a page).
                            |
    [*]^F                   | &lt;*&gt; pages forward.
                            |
    [*]^B                   | &lt;*&gt; pages backward (in older versions `^B' only
                            |   works without count).
                            |
    :[x,y]l                 | List lines x through y (default current),
                            |   making invisible characters visible.
                            |
    :[x,y]p                 | Print lines x through y (default current).
                            |
    :[x,y]nu                | List lines x through y (default current),
                            |   with line numbers next to each line.

    If in the next commands the field &lt;wi&gt; is present, the windowsize
    will change to &lt;wi&gt;. The window will always be displayed at the
    bottom of the screen.

    [*]z[wi]&lt;cr&gt;            | Put line &lt;*&gt; at the top of the window
                            |   (default the current line).
                            |
    [*]z[wi]+               | Put line &lt;*&gt; at the top of the window
                            |   (default the first line of the next page).
                            |
    [*]z[wi]-               | Put line &lt;*&gt; at the bottom of the window
                            |   (default the current line).
                            |
    [*]z[wi]^               | Put line &lt;*&gt; at the bottom of the window
                            |   (default the last line of the previous page).
                            |
    [*]z[wi].               | Put line &lt;*&gt; in the centre of the window
                            |   (default the current line).
</pre>
<hr>
<h2><a id="mapping">Mapping and abbreviation</a>
</h2>
<pre>    When mapping take a look at the options `to' and `remap' (below).

    :map &lt;string&gt; &lt;seq&gt;     | &lt;string&gt; is interpreted as &lt;seq&gt;, e.g.
                            |   `:map ^C :!cc %^V&lt;cr&gt;' to invoke `cc' (the C
                            |   compiler) from within the editor
                            |   (vi replaces `%' with the current file name).
                            |
    :map                    | Show all mappings.
                            |
    :unmap &lt;string&gt;         | Deprive &lt;string&gt; of its mapping.  When vi
                            |   complains about non-mapped macros (whereas no
                            |   typos have been made), first do something like
                            |   `:map &lt;string&gt; Z', followed by
                            |   `:unmap &lt;string&gt;' (`Z' must not be a macro
                            |   itself), or switch to `ex' mode first with `Q'.
                            |
    :map! &lt;string&gt; &lt;seq&gt;    | Mapping in append mode, e.g.
                            |   `:map! \be begin^V&lt;cr&gt;end;^V&lt;esc&gt;O&lt;ht&gt;'.
                            |   When in append mode &lt;string&gt; is preceded by
                            |   `^V', no mapping is done.
                            |
    :map!                   | Show all append mode mappings.
                            |
    :unmap! &lt;string&gt;        | Deprive &lt;string&gt; of its mapping (see `:unmap').
                            |
    :ab &lt;string&gt; &lt;seq&gt;      | Whenever in append mode &lt;string&gt; is preceded and
                            |   followed by a breakpoint (e.g. &lt;sp&gt; or `,'), it
                            |   is interpreted as &lt;seq&gt;, e.g.
                            |   `:ab ^P procedure'.  A `^V' immediately
                            |   following &lt;string&gt; inhibits expansion.
                            |
    :ab                     | Show all abbreviations.
                            |
    :unab &lt;string&gt;          | Do not consider &lt;string&gt; an abbreviation
                            |   anymore (see `:unmap').
                            |
    @&lt;a-z&gt;                  | Consider the contents of the named register a
                            |   command, e.g.:
                            |       o0^D:s/wrong/good/&lt;esc&gt;"zdd
                            |   Explanation:
                            |       o              - open a new line
                            |       0^D            - remove indentation
                            |       :s/wrong/good/ - this input text is an
                            |                        `ex' substitute command
                            |       &lt;esc&gt;          - finish the input
                            |       "zdd           - delete the line just
                            |                        created into register `z'
                            |   Now you can type `@z' to replace `wrong'
                            |   with `good' on the current line.
                            |
    @@                      | Repeat last register command.
</pre>
<hr>
<h2><a id="switch">Switch and shell commands</a>
</h2>
<pre>    Q | ^\ | &lt;intr&gt;&lt;intr&gt;   | Switch from vi to `ex'.
                            |
    :                       | An `ex' command can be given.
                            |
    :vi                     | Switch from `ex' to vi.
                            |
    :sh                     | Execute a subshell, back to vi by `^D'.
                            |
    :[x,y]!&lt;cmd&gt;            | Execute a shell &lt;cmd&gt; [on lines x through y;
                            |   these lines will serve as input for &lt;cmd&gt; and
                            |   will be replaced by its standard output].
                            |
    :[x,y]!! [&lt;args&gt;]       | Repeat last shell command [and append &lt;args&gt;].
                            |
    :[x,y]!&lt;cmd&gt; ! [&lt;args&gt;] | Use the previous command (the second `!') in a
                            |   new command.
                            |
    [*]!&lt;move&gt;&lt;cmd&gt;         | The shell executes &lt;cmd&gt;, with as standard
                            |   input the lines described by &lt;*&gt;&lt;move&gt;,
                            |   next the standard output replaces those lines
                            |   (think of `cb', `sort', `nroff', etc.).
                            |
    [*]!&lt;move&gt;!&lt;args&gt;       | Append &lt;args&gt; to the last &lt;cmd&gt; and execute it,
                            |   using the lines described by the current
                            |   &lt;*&gt;&lt;move&gt;.
                            |
    [*]!!&lt;cmd&gt;              | Give &lt;*&gt; lines as standard input to the
                            |   shell &lt;cmd&gt;, next let the standard output
                            |   replace those lines.
                            |
    [*]!!! [&lt;args&gt;]         | Use the previous &lt;cmd&gt; [and append &lt;args&gt; to it].
                            |
    :x,y w !&lt;cmd&gt;           | Let lines x to y be standard input for &lt;cmd&gt;
                            |   (notice the &lt;sp&gt; between the `w' and the `!').
                            |
    :r!&lt;cmd&gt;                | Put the output of &lt;cmd&gt; onto a new line.
                            |
    :r &lt;name&gt;               | Read the file &lt;name&gt; into the buffer.
</pre>
<hr>
<h2><a id="startup">vi startup</a>
</h2>
<pre>    vi [&lt;files&gt;]            | Edit the files, start with the first page of
                            |   the first file.

    The editor can be initialized by the shell variable `EXINIT', which
    looks like:

            EXINIT='&lt;cmd&gt;|&lt;cmd&gt;|...'
            &lt;cmd&gt;: set options
                   map ...
                   ab ...
            export EXINIT (in the Bourne shell)

    However, the list of initializations can also be put into a file.
    If this file is located in your home directory, and is named `.exrc'
    AND the variable `EXINIT' is NOT set, the list will be executed
    automatically at startup time. However, vi will always execute the
    contents of a `.exrc' in the current directory, if you own the file.
    Else you have to give the execute (`source') command yourself:

            :so file

    In a `.exrc' file a comment is introduced with a double quote character:
    the rest of the line is ignored.  Exception: if the last command on the
    line is a `map[!]' or `ab' command or a shell escape, a trailing comment
    is not recognized, but considered part of the command.

    On-line initializations can be given with `vi +&lt;cmd&gt; file', e.g.:

    vi +x file              | The cursor will immediately jump to line x
                            |   (default last line).
                            |
    vi +/&lt;string&gt; file      | Jump to the first occurrence of &lt;string&gt;.

    You can start at a particular tag with:

    vi -t &lt;tag&gt;             | Start in the right file in the right place.

    Sometimes (e.g. if the system crashed while you were editing) it is
    possible to recover files lost in the editor by `vi -r file'.  A plain
    `vi -r' command shows the files you can recover.
    If you just want to view a file by using vi, and you want to avoid any
    change, instead of vi you can use the `view' or `vi -R' command:
    the option `readonly' will be set automatically (with `:w!' you can
    override this option).
</pre>
<hr>
<h2><a id="view">Changing and viewing options</a>
</h2>
<pre>    :set &lt;option&gt;           | Turn &lt;option&gt; on.
                            |
    :set no&lt;option&gt;         | Turn &lt;option&gt; off.
                            |
    :set &lt;option&gt;=&lt;value&gt;   | Set &lt;option&gt; to &lt;value&gt;.
                            |
    :set                    | Show all non-default options and their values.
                            |
    :set &lt;option&gt;?          | Show &lt;option&gt;'s value.
                            |
    :set all                | Show all options and their values.
</pre>
<hr>
<h2><a id="important">The most important options</a>
</h2>
<pre>    ai                      | autoindent - In append mode after a &lt;cr&gt; the
                            |   cursor will move directly below the first
                            |   CHAR on the previous line.  However, if the
                            |   option `lisp' is set, the cursor will align
                            |   at the first argument to the last open list.
                            |
    aw                      | autowrite - Write at every shell escape
                            |   (useful when compiling from within vi).
                            |
    dir=&lt;string&gt;            | directory - The directory for vi to make
                            |   temporary files (default `/tmp').
                            |
    eb                      | errorbells - Beeps when you goof
                            |   (not on every terminal).
                            |
    ic                      | ignorecase - No distinction between upper and
                            |   lower cases when searching.
                            |
    lisp                    | Redefine the following commands:
                            |   (, )   - move backward (forward) over
                            |                S-expressions
                            |   {, }   - idem, but don't stop at atoms
                            |   [[, ]] - go to previous (next) line
                            |                beginning with a `('
                            |   See option `ai'.
                            |
    list                    | &lt;lf&gt; is shown as `$', &lt;ht&gt; as `^I'.
                            |
    magic                   | If this option is set (default), the chars `.',
                            |   [ and * have special meanings within search
                            |   and `ex' substitute commands.  To deprive such
                            |   a char of its special function it must be
                            |   preceded by a `\'.  If the option is turned off
                            |   it's just the other way around.  Meta-chars:
                            |   ^&lt;string&gt;    - &lt;string&gt; must begin the line
                            |   &lt;string&gt;$    - &lt;string&gt; must end the line
                            |   .            - matches any char
                            |   [a-z]        - matches any char in the range
                            |   [^a-z]       - any char not in the range
                            |   [&lt;string&gt;]   - matches any char in &lt;string&gt;
                            |   [^&lt;string&gt;]  - any char not in &lt;string&gt;
                            |   &lt;char&gt;*      - 0 or more &lt;char&gt;s
                            |   \&lt;&lt;string&gt;   - &lt;string&gt; must begin a word
                            |   &lt;string&gt;\&gt;   - &lt;string&gt; must end a word
                            |
    modeline                | When you read an existing file into the buffer,
                            |   and this option is set, the first and last 5
                            |   lines are checked for editing commands in the
                            |   following form:
                            |
                            |     &lt;sp&gt;vi:set options|map ...|ab ...|!...:
                            |
                            |   Instead of &lt;sp&gt; a &lt;ht&gt; can be used, instead of
                            |   `vi' there can be `ex'.  Warning: this option
                            |   could have nasty results if you edit a file
                            |   containing `strange' modelines.
                            |
    nu                      | number - Numbers before the lines.
                            |
    para=&lt;string&gt;           | paragraphs - Every pair of chars in &lt;string&gt; is
                            |   considered a paragraph delimiter nroff macro
                            |   (for `{' and `}').  A &lt;sp&gt; preceded by a `\'
                            |   indicates the previous char is a single letter
                            |   macro.  `:set para=P\ bp' introduces `.P' and
                            |   `.bp' as paragraph delimiters.  Empty lines and
                            |   section boundaries are paragraph boundaries
                            |   too.
                            |
    redraw                  | The screen remains up to date.
                            |
    remap                   | If on (default), macros are repeatedly
                            |   expanded until they are unchanged.
                            |   Example: if `o' is mapped to `A', and `A'
                            |   is mapped to `I', then `o' will map to `I'
                            |   if `remap' is set, else it will map to `A'.
                            |
    report=&lt;*&gt;              | Vi reports whenever e.g. a delete
                            |   or yank command affects &lt;*&gt; or more lines.
                            |
    ro                      | readonly - The file is not to be changed.
                            |   However, `:w!' will override this option.
                            |
    sect=&lt;string&gt;           | sections - Gives the section delimiters (for `[['
                            |   and `]]'); see option `para'. A `{' beginning a
                            |   line also starts a section (as in C functions).
                            |
    sh=&lt;string&gt;             | shell - The program to be used for shell escapes
                            |   (default `$SHELL' (default `/bin/sh')).
                            |
    sw=&lt;*&gt;                  | shiftwidth - Gives the shiftwidth (default 8
                            |   positions).
                            |
    sm                      | showmatch - Whenever you append a `)', vi shows
                            |   its match if it's on the same page; also with
                            |   `{' and `}'.  If there's no match at all, vi
                            |   will beep.
                            |
    taglength=&lt;*&gt;           | The number of significant characters in tags
                            |   (0 = unlimited).
                            |
    tags=&lt;string&gt;           | The space-separated list of tags files.
                            |
    terse                   | Short error messages.
                            |
    to                      | timeout - If this option is set, append mode
                            |   mappings will be interpreted only if they're
                            |   typed fast enough.
                            |
    ts=&lt;*&gt;                  | tabstop - The length of a &lt;ht&gt;; warning: this is
                            |   only IN the editor, outside of it &lt;ht&gt;s have
                            |   their normal length (default 8 positions).
                            |
    wa                      | writeany - No checks when writing (dangerous).
                            |
    warn                    | Warn you when you try to quit without writing.
                            |
    wi=&lt;*&gt;                  | window - The default number of lines vi shows.
                            |
    wm=&lt;*&gt;                  | wrapmargin - In append mode vi automatically
                            |   puts a &lt;lf&gt; whenever there is a &lt;sp&gt; or &lt;ht&gt;
                            |   within &lt;wm&gt; columns from the right margin
                            |   (0 = don't put a &lt;lf&gt; in the file, yet put it
                            |   on the screen).
                            |
    ws                      | wrapscan - When searching, the end is
                            |   considered `stuck' to the begin of the file.
</pre>
<hr>
<h2><a id="contributions">Contributions</a>
</h2>
<pre>    Author: Maarten Litmaath &lt;maart@nat.vu.nl&gt;
    Maintainer: James Hu &lt;jxh@despammed.com&gt;
    Version: 11

    Rich Salz, Eamonn McManus (tcd.ie), Diomidis Spinellis,  Blair P. Houghton (bu.edu) Rusty Haddock (rutgers)
    Panos Tsirigotis (colorado.edu) David J. MacKenzie(umd.edu), Kevin Carothers, 
    Dan Mercer,  Ze'ev Shtadler (intel), Paul Quare (man.ac.uk), Dave Beyerl, 
    Lee Sailer (psu.edu), David Gast (ucla.edu) John Arundel, James Hu (wustl.edu)</pre>
<p class="quote"><i>“vi was written for a world that doesn't exist anymore - unless you decide to get a satellite phone and use it to connect to the Net at 2400 baud” - <a href="http://www.theregister.co.uk/Print/2003/09/11/bill_joys_greatest_gift/">Bill Joy</a></i></p>
<p><b><a id="links"></a>Related:</b></p>
<p><a href="vi.html">VI Editor Commands</a><br>
<a href="https://github.com/grantm/bcvi">bcvi</a> - Back Channel vi - remote file editing with SSH<br>
</p><!-- #BeginLibraryItem "/Library/foot_bash.lbi" --><p>
<!-- bash300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="4615356305"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="vi-reference.html#"><img src="images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="index.html">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->
