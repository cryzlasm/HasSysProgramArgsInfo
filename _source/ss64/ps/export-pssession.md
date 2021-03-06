---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_ps.lbi" --><!-- #EndLibraryItem --><h1>Export-PSSession</h1> 
<p>Import commands from another session and save them in a Windows PowerShell module.</p>
<pre>Syntax
      Export-PSSession [-Session] <i>PSSession</i> [-OutputModule] <i>string</i> 
         [[-CommandName] <i>string</i>[]] [[-FormatTypeName] <i>string</i>[]]
            [-AllowClobber] [-ArgumentList <i>Object</i>[]]
               [-CommandType {Alias | Function | Filter | Cmdlet | ExternalScript | Application | Script | All}]
                  [-Encoding <i>string</i>] [-Force] [-Module <i>string</i>[]] [<i>CommonParameters</i>]

Key
   -AllowClobber
       Export the specified commands, even if they have the same names as
       commands in the current session.

       If you import a command with the same name as a command in the current session,
       the imported command hides or replaces the original commands.
       For more information, see about_Command_Precedence. 

       By default Export-PSSession does not import commands that have the same names as commands
       in the current session. The default behavior is designed to prevent command name conflicts.

   -ArgumentList <i>Object</i>[]
       Export the variant of the command that results from using the specified arguments (parameter values). 
       For example, to export the variant of the Get-Item command in the certificate (Cert:) drive
       in the PSSession in $sess, type "export-pssession -session $sess -command get-item -argumentlist cert:".

    -CommandName <i>string</i>[]
       Export only the commands with the specified <i>string</i> names or name patterns.
       Wildcards are permitted.
       Use "-CommandName" or its alias, "-Name".

       By default, Export-PSSession will export all commands from the PSSession except
       for commands that have the same names as commands in the current session.
       This prevents imported commands from hiding or replacing commands in the
       current session. To export all commands, even those that hide or replace other commands,
       use -AllowClobber 
       If you use -CommandName, the formatting files for the commands are not exported unless
       you use -FormatTypeName. Similarly, if you use -FormatTypeName, no commands are exported unless 
       you specify -CommandName.

    -CommandType <i>CommandTypes</i>
        Export only specific types of command objects. Use "-CommandType" or its alias, "-Type".

        Valid values are:
           Alias           All PowerShell aliases in the current session.
           All             All command types. It is the equivalent of "get-command *".
           Application     All files other than  PowerShell files in paths listed in the Path environment variable 
                           ($env:path), including .txt, .exe, and .dll files.
           Cmdlet          The cmdlets in the current session. "Cmdlet" is the default.
           ExternalScript  All .ps1 files in the path(s) listed in the Path environment variable ($env:path).
           Filter          All PowerShell functions.
           Function        All PowerShell functions.
           Script          Script blocks in the current session.

   -Encoding <i>string</i>
       The encoding for the output files. Valid values are "Unicode", "UTF7", "UTF8", "ASCII", "UTF32", "Big
       EndianUnicode", "Default", and "OEM". The default is "UTF-8".

   -Force
       Overwrite one or more existing output files, even if the file has the read-only attribute.

   -FormatTypeName <i>string</i>[]
       Export formatting instructions only for the specified Microsoft .NET Framework types.
       Enter the type names. By default, Export-PSSession exports formatting instructions for all
       .NET Framework types that are not in the System.Management.Automation namespace.
       The value of this parameter must be the name of a type that is returned by a Get-FormatData
       command in the session from which the commands are being imported.

       To get all of the formatting data in the remote session, type *

       If you use the FormatTypeName parameter, no commands are exported unless you use -CommandName.
       Similarly, if you use -CommandName, the formatting files for the commands are not exported unless 
       you also use -FormatTypeName.

   -Module <i>string</i>[]
       Export only the commands in the specified PowerShell snap-ins and modules.
       Enter the snap-in and module names. Wildcards are not permitted.
       For more information, see about_PSSnapins and Import-Module.

   -OutputModule <i>string</i>
       A path (optional) and name for the module that Export-PSSession creates.
       The default path is $home\Documents\WindowsPowerShell\Modules.
       This parameter is required.
       If the module subdirectory or any of the files that Export-PSSession creates already exist,
       the command fails. 
       To overwrite existing files, use -Force.

   -Session <i>PSSession</i>
       The PSSession from which the commands are exported.
       Enter a variable that contains a session object or a command that gets a session object,
       such as a Get-PSSession command. This parameter is required.

   <a href="common.html">CommonParameters</a>:
       -Verbose, -Debug, -ErrorAction, -ErrorVariable, -WarningAction, -WarningVariable,
       -OutBuffer -OutVariable.</pre>
<p>       Standard <a href="get-alias.html">Aliases</a> for Export-PSSession:<span class="code"> epsn</span></p>
<p>Export-PSSession  gets cmdlets, functions, aliases, and other command types from another PSSession on a local or remote computer and saves them in a  PowerShell module. To add the commands from the module to the current session, use <span class="code">Import-Module</span>.<br>
<br>
Unlike <a href="import-pssession.html">Import-PSSession</a>, which imports commands from another PSSession into the current session, Export-PSSession saves the commands in a module. The commands are not imported into the current session.<br>
<br>
To export commands, first use <a href="new-pssession.html">New-PSSession</a>  to create a PSSession that has the commands that you want to
export. Then use the Export-PSSession cmdlet to export the commands. By default, Export-PSSession exports all commands, except for commands that exist in the current session, but you can use <span class="code">-CommandName</span>  to specify 
the commands to export.<br>
<br>
Export-PSSession  uses the implicit remoting feature of Windows PowerShell. When you import commands into
the current session, they run implicitly in the original session or in a similar session on the originating computer. If the original remote session is closed, then accessing the module will automatically re-open a remote session 
connected to the originating computer. </p>
<p><b>Examples</b></p>
<p>Export all commands from a PSSession on the Server64 computer to the Server64 module on the local computer. Include formatting data but exclude any commands that have the same names as commands in the current session: </p>
<pre>PS C:&gt; $sess = new-pssession -computerName Server64<br>PS C:&gt; export-pssession -session $sess -outputModule Server64</pre>
<p>Export all commands and all formatting data from the PSSession in the $sess variable into the current session.:</p>
<pre>PS C:&gt; export-pssession -session $sess -AllowClobber -outputModule AllCommands</pre>
<p>Note that if <span class="code">Enter-PSSession -ComputerName</span> is used (instead of new-psSession), then Enter-PSSession would have automatically created a temporary session that would close as soon as the interactive session ends.</p>
<p class="quote"><i>“Laughter is America's most important export” ~ Walt Disney</i></p>
<p><b>Related:</b></p>
<p><a href="import-pssession.html">Import-PSSession</a> - Import commands from another session</p><!-- #BeginLibraryItem "/Library/foot_ps.lbi" --><p>
<!-- PowerShell300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="6253539900"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="export-pssession.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2015<br>
Some rights reserved</div><!-- #EndLibraryItem -->

