---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_vbsyntax.lbi" --><!-- #EndLibraryItem --><h1>MapDrive.vbs</h1> 
<p>VBScript to Map a Drive letter to a network file share (non-persistent).</p>
<p>This script is designed for reliability, and is aimed at large domains supporting many users.<br>
It accounts for  'remembered' connections including those to a file share that no longer exists or which is off-line. <br>
This is a good approach for  machines that are not always connected to the domain e.g. Laptops.</p>
<p>For each drive letter there are several possible states, that may have to be dealt with by the script: <br>
- Remembered (persistent connection) / Not Remembered<br>
- Already Connected / Connected to the wrong network share / Not Connected.</p>
<p>Windows  will not map a 'remembered' connection to a different server unless you first unmap &amp; unremember the existing connection, this applies even if the old connection path is currently disconnected.</p>
<p>This script will  remove any  existing Drive Map before connecting to the correct file share.</p>
<pre>' Map a network drive 

' Usage
'    cscript MapDrive.vbs <i>drive</i> <i>fileshare</i> //NoLogo
'    cscript MapDrive.vbs H: \\MyServer\MyShare //NoLogo
'
' This script will remove any existing drive map to the same drive letter
' including persistent or remembered connections (Q303209)

Option Explicit
Dim objNetwork, objDrives, objReg, i
Dim strLocalDrive, strRemoteShare, strShareConnected, strMessage
Dim bolFoundExisting, bolFoundRemembered
Const HKCU = &amp;H80000001

' Check both parameters have been passed 
If WScript.Arguments.Count &lt; 2 Then
 wscript.echo "Usage: cscript MapDrive.vbs <i>drive fileshare</i> //NoLogo"
  WScript.Quit(1)
End If

strLocalDrive = UCase(Left(WScript.Arguments.Item(0), 2))
strRemoteShare = WScript.Arguments.Item(1)
bolFoundExisting = False

' Check parameters passed make sense
If Right(strLocalDrive, 1) &lt;&gt; ":" OR Left(strRemoteShare, 2) &lt;&gt; "\\" Then
 wscript.echo "Usage: cscript MapDrive.vbs <i>drive fileshare</i> //NoLogo"
  WScript.Quit(1)
End If

wscript.echo " - Mapping: " + strLocalDrive + " to " + strRemoteShare

Set objNetwork = WScript.CreateObject("WScript.Network")

' Loop through the network drive connections and disconnect any that match strLocalDrive
Set objDrives = objNetwork.EnumNetworkDrives
If objDrives.Count &gt; 0 Then
  For i = 0 To objDrives.Count-1 Step 2
    If objDrives.Item(i) = strLocalDrive Then
      strShareConnected = objDrives.Item(i+1)
      objNetwork.RemoveNetworkDrive strLocalDrive, True, True
      i=objDrives.Count-1
      bolFoundExisting = True
    End If
  Next
End If

' If there's a remembered location (persistent mapping) delete the associated HKCU registry key
If bolFoundExisting &lt;&gt; True Then
  Set objReg = GetObject("winmgmts:{impersonationLevel=impersonate}!\\.\root\default:StdRegProv")
  objReg.GetStringValue HKCU, "Network\" &amp; Left(strLocalDrive, 1), "RemotePath", strShareConnected
  If strShareConnected &lt;&gt; "" Then
    objReg.DeleteKey HKCU, "Network\" &amp; Left(strLocalDrive, 1)
    bolFoundRemembered = True
  End If
End If

'Now actually do the drive map (not persistent)
Err.Clear
On Error Resume Next
objNetwork.MapNetworkDrive strLocalDrive, strRemoteShare, False

'Error traps
If Err &lt;&gt; 0 Then
  Select Case Err.Number
    Case -2147023694
      'Persistent connection so try a second time
      On Error Goto 0
      objNetwork.RemoveNetworkDrive strLocalDrive, True, True
      objNetwork.MapNetworkDrive strLocalDrive, strRemoteShare, False
      WScript.Echo "Second attempt to map drive " &amp; strLocalDrive &amp; " to " &amp; strRemoteShare
    Case Else
      On Error GoTo 0
      WScript.Echo " - ERROR: Failed to map drive " &amp; strLocalDrive &amp; " to " &amp; strRemoteShare
  End Select
  Err.Clear
End If</pre>
<p>Simon Sheppard, SS64.com, Feb 2005<br>
 Credit (for the difficult parts) to Kenneth MacDonald, Edinburgh University Computing Services.<br>
<br>
 You are free to use or modify this script: Creative Commons Attribution 2.5 License.</p>
<p>For drive mapping to work, <i>File and Printer sharing</i> must  be enabled on the remote (server) computer.</p>
<p>For mapping multiple drives at once, theres an <a href="http://ss64.org/viewtopic.php?pid=280">alternative version</a> of this script over in the forum, it avoids having to load CSCRIPT.exe more than once. </p>
<p class="quote"><i>“Success is falling nine times and getting up ten” ~ Jon Bon Jovi</i></p>
<p><b>Related:</b></p>
<p> <a href="syntax-mapdrivepersistent.html">MapDrivePersistent</a> - Map a Drive letter to a network file share (persistent)<br>
<a href="mapnetworkdrive.html">.MapNetworkDrive</a> - Drive Map<br>
<a href="../nt/syntax-nodrives.html">NoDrives</a> - Hide mapped drives from Windows Explorer<br>
<a href="../nt/net.html">NET</a> - Manage network resources.<br>
Equivalent PowerShell command: <a href="../ps/new-psdrive.html">New-PSDrive</a>- Create a  mapped network drive.</p><!-- #BeginLibraryItem "/Library/foot_vb.lbi" --><p>
<!-- VB300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="1683739502"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="syntax-mapdrive.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

