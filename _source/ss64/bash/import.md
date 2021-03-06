---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_bash.lbi" --><!-- #EndLibraryItem --><h1>import</h1> 
<p>Capture some or all of an X server screen and save the image to 
file.</p>
<pre>Syntax
      import [ <i>options</i> ... ] [ file ]
</pre>
<p> import reads an image from any visible window on an X server 
  and outputs it as an image file. <br>
  You can capture a single window, the entire screen, or any rectangular portion 
  of the screen. <br>
  <br>
  The target window can be specified by id, name, or can be selected by clicking 
  the mouse in the desired window. <br>
  <br>
  If you press a button and then drag, a rectangle will form which expands and 
  contracts as the mouse moves. To save the portion of the screen defined by the 
  rectangle, just release the button. The keyboard bell is rung once at the beginning 
  of the screen capture and twice when it completes.</p>
<p>Examples</p>
<blockquote> 
  <p>To select an X window with the mouse and save it in the MIFF image format 
    to a file titled MyTest.miff, use: <br>
    <br>
    import MyTest.miff <br>
    <br>
    To save the desktop to a jpeg file, use: </p>
  <p><span class="body"> </span>import -window root MyTest.jpg<br>
  </p>
</blockquote>
<p>Although not strictly speaking part of the shell `import' 
  seems to be present on most linux distributions. </p>
<pre>OPTIONS
<br>-border </pre>
<p> include image borders in the output image.</p>
<pre>-colors <i>value</i></pre>
<p> preferred number of colours in the image. The actual number 
  of colours in the image can be less than your request, but never more.<br>
  </p>
<pre>-colorspace <i>value</i></pre>
<p> The type of colorspace: GRAY, OHTA, RGB, Transpar*ent, 
  XYZ, YCbCr, YIQ, YPbPr, YUV, or CMYK.<br>
  colour reduction, by default, takes place in the RGB colour space.<br>
  <br>
  The Transparent colour space behaves uniquely in that it preserves the matte 
  channel of the image if it exists.<br>
  The -colors or -monochrome option is required for this option to take effect.  </p>
<pre>-comment <i>string</i></pre>
<p> annotate an image with a comment. </p>
<pre>-compress <i>type</i></pre>
<p> The type of image compression: None, BZip, Fax, Group4, 
  JPEG, LZW, RunlengthEncoded, or Zip.<br>
  Specify +compress to store the binary image in an uncompressed format. The default 
  is the compression type of the specified image file.  </p>
<pre>-delay &lt;1/100ths of a second&gt;x<seconds> </seconds></pre>
<p> display the next image after pausing.<br>
  This option is useful for regulating the display of the sequence of images. 
  1/100ths of a second must expire before the display of the next image. The default 
  is 6/100 of a second between each frame of the image sequence. The second value 
  is optional. It specifies the number of seconds to pause before repeating your 
  animation sequence.  </p>
<pre>-density <width><i>x<height></height></i></width></pre>
<p>Vertical and horizontal resolution in pixels of the image.<br>
</p>
<pre>-frame</pre>
<p> Include window manager frame.<br>
</p>
<pre>-geometry <width><i>x</i><height>{+-}<x offset="">{+-}<y off-="" set="">{% raw %}{%{% endraw %}}{!}{&lt;}{&gt;}</y></x></height></width></pre>
<p> The width and height of the image.<br>
</p>
<pre>-interlace <i>type</i></pre>
<p> The type of interlacing scheme: <span class="code">None, Line, Plane, or Partition</span>. 
  The default is <span class="code">None</span>.<br>
  This option is used to specify the type of interlacing scheme for raw image 
  formats such as RGB or YUV.<br>
  <br>
  No - means do not interlace (RGBRGBRGBRGBRGBRGB...)<br>
  Line - uses scanline interlacing (RRR...GGG...BBB...RRR...GGG...BBB...)<br>
  Plane - uses plane interlacing (RRRRRR...GGGGGG...BBBBBB...)<br>
  Partition - is like plane except the different planes are saved to individual 
  files (e.g. image.R, image.G, and image.B)<br>
  <br>
  Use Line, or Plane to create an interlaced GIF or progressive JPEG image.</p>
<pre>-label name assign a label to an image.</pre>
<p> Use this option to assign a specific label to the image.  </p>
<pre>-monochrome
transform image to black and white.

-negate</pre>
<p>Replace every pixel with its complementary colour (white becomes black, yellow becomes blue, etc.) <br>
Use +negate to only negate the grayscale pixels of the image.<br>
</p>
<pre>-quality value</pre>
<p> JPEG/MIFF/PNG compression level.<br>
  For the JPEG image format, quality is 0 (worst) to 100 (best). The default quality 
  is 75.<br>
  Quality for the MIFF and PNG image format sets the amount of image compression 
  (quality / 10) and filter-type (quality % 10). Compression quality values range 
  from 0 (worst) to 100 (best).</p>
<pre>-rotate <i>degrees</i>{&lt;}{&gt;}</pre>
<p> Apply Paeth image rotation to the image.<br>
  <br>
  Use &gt; to rotate the image only if its width exceeds the height. &lt; rotates the 
  image only if its width is less than the height. For example, if you specify 
  -90&gt; and the image size is 480x640, the image is not rotated by the specified 
  angle. However, if the image is 640x480, it is rotated by-90 degrees. Empty 
  triangles left over from rotating the image are filled with the colour defined 
  as bordercolor (class borderColor). <br>
</p>
<pre>-scene <i>value</i>  </pre>
<p> Number of screen snapshots.<br>
  Use this option to grab more than one image from the X server screen to create 
  an animation sequence. <br>
</p>
<pre>-screen </pre>
<p> This option indicates that the GetImage request used to 
  obtain the image should be done on the root window, rather than directly on 
  the specified window. In this way, you can obtain pieces of other windows that 
  overlap the specified window, and more importantly, you can capture menus or 
  other popups that are independent windows but appear over the specified window. 
  <br>
</p>
<pre>-silent </pre>
<p>Operate silently, i.e. don't ring any bells. <br>
</p>
<pre>-transparency color </pre>
<p> Make this colour transparent within the image. <br>
</p>
<pre>-treedepth value </pre>
<p> Normally, this integer value is zero or one. A zero or 
  one tells convert to choose a optimal tree depth for the colour reduction algorithm. 
  <br>
  Try values between 2 and 8 for this parameter. <br>
</p>
<pre>-verbose </pre>
<p> print detailed information about the image. This information 
  is printed: image scene number; image name; image size; the image class (Direct- 
  Class or PseudoClass); the total number of unique colours; and the number of 
  seconds to read and write the image.  </p>
<pre>-window <i>id</i> </pre>
<p> select window with this id or name. With this option you 
  can specify the target window by id or name rather than using the mouse. Specify 
  `root' to select X's root window as the target window. </p>
<p> All Options are processed in command line order. Any option 
  you specify on the command line remains in effect until it is explicitly changed 
  by specifying the option again with a different effect. <br>
  <br>
  file specifies the image filename. If file is omitted, it defaults to magick.miff. 
  The default image format is MIFF. To specify a particular image format, precede 
  the filename with an image format name and a colon (i.e. gif:image) or specify 
  the image type as the filename suffix (i.e. image.jpg). See convert(1) for a 
  list of valid image formats. <br>
  <br>
  Specify file as - for standard output. If file has the extension .Z or .gz, 
  the file size is compressed using with compress or gzip respectively. Precede 
  the image file name | to pipe to a system command. If file already exists, you 
  will be prompted as to whether it should be overwritten. <span class="body"><br>
  <br>
  <i class="quote">"We can now manipulate images to such an extrodinary extent that there's 
  no lie you cannot tell" ~ Sir 
  David Attenborough </i> </span></p>
<p><b>Related:</b><br>
<a href="cat.html"><br>
cat</a> - Display the contents of a file<br>
<a href="echo.html">echo</a> - Display message on screen<a href="more.html"><br>
more</a> - Display output one screen at a time<br>
Equivalent Windows command: Print Scrn - Copy screen to clipboard</p><!-- #BeginLibraryItem "/Library/foot_bash.lbi" --><p>
<!-- bash300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="4615356305"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="import.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

