---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_vb.lbi" --><!-- #EndLibraryItem --><h1>.Popup </h1> 
<p>Display text in a pop-up message box. </p>
<pre>Syntax
      intButton = <i>objShell</i>.Popup<b>(</b><i>strText</i>,[<i>nSecondsToWait</i>],[<i>strTitle</i>],[<i>nType</i>]<b>)</b> 

Arguments

   objShell       : A WScript.Shell object

   strText        : String value containing the text you want to appear
                    in the pop-up message box. 

   nSecondsToWait : Maximum length of time to display the pop-up message
                    box (in seconds, Optional, default=infinite)

   strTitle       : Title text string, Optional. 

   nType          : Type of buttons and icons (Numeric, Optional)
                    These determine how the message box is used. 

   IntButton      : Number of the button (Integer value) 
                    This is the value returned when the user OK's the message box. 

The meaning of <b>nType</b> is determined by combining values from the 2 tables below:

Button Types

  Value Description 
    0   OK button. 
    1   OK and Cancel buttons. 
    2   Abort, Retry, and Ignore buttons. 
    3   Yes, No, and Cancel buttons. 
    4   Yes and No buttons. 
    5   Retry and Cancel buttons. 
   
Icon Types
   
   Value Description 
    16  "Stop Mark" icon. 
    32  "Question Mark" icon. 
    48  "Exclamation Mark" icon. 
    64  "Information Mark" icon. 

Possible values for <b>IntButton </b>the return value:

Value Description 
   1  OK button 
   2  Cancel button 
   3  Abort button 
   4  Retry button 
   5  Ignore button 
   6  Yes button 
   7  No button

If the user does not click a button before nSecondsToWait
intButton is set to -1. 
         
<b>Example</b>

Set objShell = Wscript.CreateObject("Wscript.Shell")
objShell.Popup "Click me Quick!",, "My Popup Dialogue box"</pre>
<p><i>“Come quickly, I am tasting stars!” ~ <a href="http://en.wikipedia.org/wiki/Dom_Perignon_(person)">Dom Perignon</a>, at the moment he discovered champagne </i></p>
<p><b>Related:</b></p>
<p>  Echo - <a href="echo.html">Wscript.Echo</a><br>
  Equivalent Windows CMD command: 
<a href="../nt/echo.html">ECHO</a> - Display message on screen</p><!-- #BeginLibraryItem "/Library/foot_vb.lbi" --><p>
<!-- VB300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="1683739502"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="popup.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

