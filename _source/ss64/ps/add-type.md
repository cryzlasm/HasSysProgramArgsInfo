---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_ps.lbi" --><!-- #EndLibraryItem --><h1>Add-Type</h1> 
<p>Add a .NET Framework type to a PowerShell session.  If a .NET Framework class is added to your PowerShell session with Add-Type, those objects may then be instantiated (with New-Object ), just like any .NET Framework object.</p>
<pre>Syntax
      Add-Type <b>-AssemblyName</b> <i>string</i>[]
         [-IgnoreWarnings] [-PassThru] [<i>CommonParameters</i>]
    
      Add-Type [<b>-Name</b>] <i>string</i> [-MemberDefinition] <i>string</i>[]
         [-CodeDomProvider <i>CodeDomProvider</i>] [-CompilerParameters <i>CompilerParameters</i>]
            [-Language {CSharp | CSharpVersion3 | VisualBasic | JScript}]
               [-Namespace <i>string</i>] [-OutputAssembly <i>string</i>]
                  [-OutputType <i>OutputAssemblyType</i>] [-ReferencedAssemblies <i>string</i>[]]
                     [-UsingNamespace <i>string</i>[]] [-IgnoreWarnings] [-PassThru] [<i>CommonParameters</i>]
    
      Add-Type [<b>-Path</b>] <i>string</i>[] [-CompilerParameters <i>CompilerParameters</i>]
        [-OutputAssembly <i>string</i>]
           [-OutputType <i>OutputAssemblyType</i>] [-ReferencedAssemblies <i>string</i>[]]
              [-IgnoreWarnings] [-PassThru] [<i>CommonParameters</i>]
    
      Add-Type [<b>-TypeDefinition</b>] <i>string</i> [-CodeDomProvider <i>CodeDomProvider</i>]
         [-CompilerParameters <i>CompilerParameters</i>]
            [-Language {CSharp | CSharpVersion3 | VisualBasic | JScript}]
               [-OutputAssembly <i>string</i>] [-OutputType <i>OutputAssemblyType</i>]
                  [-ReferencedAssemblies <i>string</i>[]] [-IgnoreWarnings] 
                     [-PassThru] [<i>CommonParameters</i>]

       Add-Type [<b>-CompilerParameters</b> <i>CompilerParameters</i>] [-OutputAssembly <i>String</i>]
          [-OutputType {ConsoleApplication | Library | WindowsApplication}]
             [-ReferencedAssemblies <i>String</i>[]] -LiteralPath <i>String</i>[]
                [-IgnoreWarnings] [-PassThru] [<i>CommonParameters</i>]

Key
   -AssemblyName 
       The name of an assembly that includes the types. Wildcard characters are permitted
       This parameter does not accept a path or file name. To enter the path to the assembly DLL, use -Path.

   -CodeDomProvider<br>       A code generator or compiler. The default is the CSharp compiler.

   -CompilerParameters<br>       The options for the source code compiler.
       You cannot use -CompilerParameters and -ReferencedAssemblies in the same command.
       These options are sent to the compiler without revision.<br>        <br>   -IgnoreWarnings<br>       Ignores compiler warnings. Don't handle compiler warnings as errors.

   -Language<br>       Specifies the language used in the source code.<br>       Valid values are "CSharp", "CSharpVersion3", "VisualBasic", and "JScript".
       "CSharp" is the default.

   -LiteralPath <i>String</i>[]
       The path to source code files or assembly DLL files that contain the types.
       Unlike -Path, the value of -LiteralPath is used exactly as it is typed.
       No characters are interpreted as wildcards. If the path includes escape characters,
       enclose it in single quotation marks, this tells PowerShell not to interpret any
       characters as escape sequences.

   -MemberDefinition <i>String</i>[]<br>       Specify new properties or methods for the class. Add-Type generates the template code
       required to support the properties or methods.
       Use this feature to make Platform Invoke (P/Invoke) calls to unmanaged functions in PowerShell.

   -Name <i>String</i><br>       The name of the class to create. Required when generating a type from a member definition.
       The type name and namespace must be unique within a session. You cannot unload a type or
       change it.
       If you need to change the code for a type, change the name or start a new PowerShell session.
       Otherwise, the command will fail.

   -Namespace <i>String</i><br>       A namespace for the type. If this parameter is not included in the command, the type is
       created in the   <i>Microsoft.PowerShell.Commands.AddType.AutoGeneratedTypes</i>  namespace.
       If the parameter is included in the command with an empty string value or a value of $null,
       the type is generated in the global namespace.

   -OutputAssembly <i>String</i><br>       Generate a DLL file for the assembly with the specified name in the location. Enter a path (optional)
       and file name. Wildcard characters are permitted. By default, Add-Type generates the assembly only in memory.

   -OutputType <i>OutputAssemblyType</i><br>       The output type of the output assembly. 
       Valid values are Library, ConsoleApplication, and WindowsApplication. <br>       By default, no output type is specified.

   -PassThru<br>       Return a System.Runtime object that represents the types that were added.

   -Path<br>       The path to source code files or assembly DLL files that contain the types.

   -ReferencedAssemblies <br>       The assemblies upon which the type depends in addition to the default references,
       System.dll and System.Management.Automation.dll
       You cannot use -CompilerParameters and -ReferencedAssemblies in the same command.

   -TypeDefinition <br>       The source code that contains the type definitions. Enter the source code in a
       string or <a href="syntax-esc.html">here-string</a>, or enter a variable that contains the source code.

       Include a namespace declaration in your type definition. If you omit the namespace declaration,
       your type might have the same name as another type or the shortcut for another type,
       causing an unintentional overwrite. For example, if you define a type called "Exception",
       scripts that use "Exception" as the shortcut for System.Exception will fail.

   -UsingNamespace<br>       Other namespaces that are required for the class.
       This is much like the <i>Using</i> keyword in C#.

   <a href="common.html">CommonParameters</a>
       -Verbose, -Debug, -ErrorAction, -ErrorVariable, -WarningAction,
        -WarningVariable, -OutBuffer and -OutVariable</pre>
<p><b>Examples</b></p>
<p>Adds the classes from the Accessibility assembly to the current session:</p>
<p class="code"> PS C:\&gt; $accType = Add-Type -AssemblyName accessib* -PassThru</p>
<p>The command uses the      AssemblyName parameter to specify the name of the assembly. The wildcard character allows you to get the correct      assembly even when you are not sure of the name or its spelling.</p>
<p>The command uses the PassThru parameter to generate objects that represent the classes that are added to the      session, and it saves the objects in the $accType variable.</p>
<p>For more see: <span class="code">get-help Add-Type -examples</span></p>
<p class="quote"><i>“If you don't have time to do it right, when will you have time to do it over?” ~ John Wooden</i></p><!-- #BeginLibraryItem "/Library/foot_ps.lbi" --><p>
<!-- PowerShell300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="6253539900"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="add-type.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2015<br>
Some rights reserved</div><!-- #EndLibraryItem -->
