---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_pssyntax.lbi" --><!-- #EndLibraryItem --><h1>Pshinfo.ps1</h1> 
<p>Get  information about a machine - Ram, Disk Space, Service pack, Uptime, rather like <a href="../nt/psinfo.html">psinfo</a> only written in PowerShell.</p>
<pre>Param($machine)

function GetComputerInfo{
    Param($mc)
    # Ping the machine to see if it is online
    $online=PingMachine $mc
    if ($online -eq $true)
    {
        # Ping Success

        # ComputerSystem info
        $CompInfo = Get-WmiObject Win32_ComputerSystem -comp $mc

        # OS info
        $OSInfo = Get-WmiObject Win32_OperatingSystem -comp $mc

        # Serial No
        $BiosInfo = Get-WmiObject Win32_BIOS -comp $mc

        # CPU Info
        $CPUInfo = Get-WmiObject Win32_Processor -comp $mc

        # Create custom Object
        $myobj = "" | Select-Object Name,Domain,Model,MachineSN,OS,ServicePack,WindowsSN,Uptime,RAM,Disk
        $myobj.Name = $CompInfo.Name
        $myobj.Domain = $CompInfo.Domain
        $myobj.Model = $CompInfo.Model
        $myobj.MachineSN = $BiosInfo.SerialNumber
        $myobj.OS = $OSInfo.Caption
        $myobj.ServicePack = $OSInfo.servicepackmajorversion
        $myobj.WindowsSN = $OSInfo.SerialNumber
        $myobj.uptime = (Get-Date) - [System.DateTime]::ParseExact($OSInfo.LastBootUpTime.Split(".")[0],'yyyyMMddHHmmss',$null)
        $myobj.uptime = "$($myobj.uptime.Days) days, $($myobj.uptime.Hours) hours," +`
          " $($myobj.uptime.Minutes) minutes, $($myobj.uptime.Seconds) seconds" 

        $myobj.RAM = "{0:n2} GB" -f ($CompInfo.TotalPhysicalMemory/1gb)
        $myobj.Disk = GetDriveInfo $mc

        #Return Custom Object"
        $myobj
    }
    else
    {
        # Ping Failed!
        Write-Host "Error: $mc not Pingable" -fore RED
    }
}

function GetDriveInfo{
    Param($comp)
    # Get disk sizes
    $logicalDisk = Get-WmiObject Win32_LogicalDisk -Filter "DriveType=3" -ComputerName $comp
    foreach($disk in $logicalDisk)
    {
        $diskObj = "" | Select-Object Disk,Size,FreeSpace
        $diskObj.Disk = $disk.DeviceID
        $diskObj.Size = "{0:n0} GB" -f (($disk | Measure-Object -Property Size -Sum).sum/1gb)
        $diskObj.FreeSpace = "{0:n0} GB" -f (($disk | Measure-Object -Property FreeSpace -Sum).sum/1gb)

        $text = "{0}  {1}  Free: {2}" -f $diskObj.Disk,$diskObj.size,$diskObj.Freespace
        $msg += $text + [char]13 + [char]10 
    }
    $msg
}

function PingMachine {
   Param([string]$machinename)
   $pingresult = Get-WmiObject win32_pingstatus -f "address='$machinename'"
   if($pingresult.statuscode -eq 0) {$true} else {$false}
}

# Main - run all the functions
GetComputerInfo ($machine) </pre>
<p>
  <b>Example</b></p>
<p>Assuming the script above is saved in the current directory as pshinfo.ps1, run it passing a computername:</p>
<p><span class="code">PS C:\&gt; ./pshinfo FileServer02 </span></p>
<p>This script is based on an original by <a href="https://groups.google.com/forum/#!original/microsoft.public.windows.powershell/UJLZYNWlVNA/4GUBHK4K0MAJ">Brandon Shell</a> [MVP] <a href="http://www.bsonposh.com/%20">www.bsonposh.com</a></p>
<p class="quote"><i>“In any collection of data, the figure most obviously correct, beyond all need of checking, is the mistake” ~ Finagle's third law. </i></p>
<p><b>Related:</b></p>
<p><a href="../nt/psinfo.html">psinfo</a> - List information about a system</p><!-- #BeginLibraryItem "/Library/foot_ps.lbi" --><p>
<!-- PowerShell300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="6253539900"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="syntax-pshinfo.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2015<br>
Some rights reserved</div><!-- #EndLibraryItem -->

