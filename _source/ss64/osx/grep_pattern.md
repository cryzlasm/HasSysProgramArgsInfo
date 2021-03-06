---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_osx.lbi" --><!-- #EndLibraryItem --><h1><a href="grep.html">grep</a></h1>
<p>search input files for lines that match a given pattern.</p>

<p>Grep searches the named input FILEs (or standard input if no files 
  are named, or the file name - is given) for lines containing a match to the 
  given PATTERN. By default, grep prints the matching lines. In addition, two 
  variant programs egrep and fgrep are available. Egrep is the same as grep -E. 
  Fgrep is the same as grep -F. </p>
<p><b>Regular Expressions</b><br>
<br>       
A  regular expression is a pattern that describes a set of       
strings.  Regular expressions are constructed  analogously<br>       
to  arithmetic  expressions, by using various operators to       
combine smaller expressions.<br>
<br>       
Grep understands two different versions of regular expression  syntax:  "basic" and "extended."  In GNU grep, there<br>       
is no difference in available functionality  using  either       
syntax.   In  other implementations, basic regular expres-<br>       
sions  are  less  powerful.   The  following   description       
applies  to  extended regular expressions; differences for<br>       
basic regular expressions are summarized afterwards.<br>
<br>       
The fundamental building blocks are  the  regular  expressions  that  match  a  single character.  Most characters,<br>       
including all letters and digits, are regular  expressions       
that  match  themselves.   Any  metacharacter with special<br>       
meaning can be quoted by preceding it with a backslash.<br>
<br>       
A list of characters enclosed by [ and ] matches any  single  character in that list; if the first character of the<br>       
list is the caret ^ then it matches any character  not  in       
the   list.    For   example,   the   regular   expression<br>       
[0123456789] matches any single digit.  A range of characters can be specified by giving the first and last charac-<br>       
ters, separated  by  a  hyphen.   Finally,  certain  named       
classes  of  characters  are  predefined:</p>
<pre>       [:alnum:]  - Any digit or Alphanumeric
       [:alpha:]  - Any Alphanumeric
       [:cntrl:]  - octal codes 000 through 037, or `DEL' (octal 177)
       [:digit:]  - Any one of `0 1 2 3...7 8 9'
       [:graph:]  - Anything that is not a `[:alnum:]' or `[:punct:]'
       [:lower:]  - Any one of `a b c... x y z'
       [:print:]  - Any char from the `[:space:]' class, and any char not in the `[:graph:]' class.
       [:punct:]  - Any one of `! " # $ % &amp; ' ( ) * + , - . / : ; &lt; = &gt; ? @ [ \ ] ^ _ ` { | } ~'
       [:space:]  - Any one of `CR FF HT NL VT SPACE'
       [:upper:]  - Any one of `A B C... X Y Z'
       [:xdigit:] - Hex:  `a b c d e f A B C D E F 0 1 2 3 4 5 6 7 8 9'

       For example  [[:alnum:]] means [0-9A-Za-z], except the latter
       form depends upon the POSIX locale and the ASCII character
       encoding,  whereas the former is independent of locale and
       character set.  (Note that the  brackets  in  these  class
       names are part of the symbolic names, and must be included
       in addition to the brackets delimiting the bracket  list.)
</pre>
<p>Most  metacharacters  lose  their  special  meaning inside
lists.  To include a literal<span class="code"> ]</span> place it first in the list.<br>
Similarly,  to  include  a literal <span class="code">^</span> place it anywhere but
first.  Finally, to include a literal <span class="code">-</span> place it last.</p>
<pre>       The period .  matches any single character.  The symbol \w
       is  a  synonym  for  [[:alnum:]]  and  \W is a synonym for
       [^[:alnum]].

       The caret ^ and the dollar sign $ are metacharacters  that
       respectively  match  the empty string at the beginning and
       end of a line.  The symbols \&lt; and \&gt;  respectively  match
       the  empty string at the beginning and end of a word.  The
       symbol \b matches the empty string at the edge of a  word,
       and  \B  matches the empty string provided it's not at the
       edge of a word.

       A regular expression can be followed  by  one  of  several
       repetition operators:
       ?      The  preceding item is optional and matched at most
              once.
       *      The preceding item will be  matched  zero  or  more
              times.
       +      The  preceding  item  will  be  matched one or more
              times.
       {n}    The preceding item is matched exactly n times.
       {n,}   The preceding item is matched n or more times.
       {n,m}  The preceding item is matched at least n times, but
              not more than m times.
</pre>
<p>Two regular expressions can be concatenated; the resulting
regular expression matches any string formed  by  concate-<br>
nating two substrings that respectively match the concatenated subexpressions.<br>
<br>
Two regular expressions can be joined by the infix  operator |; the resulting regular expression matches any string<br>
matching either subexpression.<br>
<br>
Repetition takes precedence over concatenation,  which  in
turn  takes  precedence  over alternation.  A whole subex-<br>
pression can be enclosed in parentheses to override  these
precedence rules.<br>
<br>
The  backreference  <span class="code">\n</span>, where n is a single digit, matches
the substring previously matched by the nth  parenthesized<br>
subexpression of the regular expression.</p>
<pre>       In  basic  regular expressions the metacharacters ?, +, {,
       |, (, and ) lose their special meaning;  instead  use  the
       backslashed versions \?, \+, \{, \|, \(, and \).

       Traditional egrep did not support the { metacharacter, and
       some egrep implementations support \{ instead, so portable
       scripts  should  avoid  { in egrep patterns and should use
       [{] to match a literal {.

       GNU egrep attempts to support traditional usage by  assum-
       ing  that  { is not special if it would be the start of an
       invalid interval specification.  For  example,  the  shell
       command  egrep  '{1' searches for the two-character string
       {1 instead of reporting a  syntax  error  in  the  regular
       expression.  POSIX.2 allows this behavior as an extension,
       but portable scripts should avoid it.</pre>
<p class="quote"><i>"Talent is hitting a target no-one else can hit, genius is hitting a target no-one else can see" ~ Schopenhauer</i></p>
<p><b>Related:</b></p>
<p>
<a href="awk.html">awk</a> - Find and Replace text within file(s)<br>
<a href="grep.html">grep</a> - Search file(s) for lines that match a given pattern 
<br>
<a href="tr.html">tr</a> - Translate, squeeze, and/or delete characters </p><!-- #BeginLibraryItem "/Library/foot_osx.lbi" --><p>
<!-- OSX300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="1823340303"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="grep_pattern.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->
