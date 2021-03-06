---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_osx.lbi" --><!-- #EndLibraryItem --><h1>security</h1> 
<p>Administer Keychains, keys, certificates and the Security framework.</p>
<p>By default security will execute the <i>command</i> supplied and report if anything went wrong.

If the<span class="code"> -i </span>or<span class="code"> -p </span>options are provided, security will enter interactive mode.  When EOF is read from stdin security will exit.</p>
<pre>Syntax
     security [-hilqv] [-p <i>prompt</i>] [<i>command</i>] [<i>command_options</i>] [<i>command_args</i>]

Key
   -h     If no arguments are specified, show a list of all commands.
          If arguments are provided, show usage for each the specified commands.
          This option is essentially the same as the help command.

   -i     Run security in interactive mode.
          A prompt (security&gt; by default) will be displayed and the
          user will be able to type commands on stdin until an EOF is encountered.

   -l     Before security exits, run
             /usr/bin/leaks -nocontext
          on itself to see if the command(s) you executed had any leaks.

   -p <i>prompt</i>
         Implies the -i option but changes the default prompt to the argument specified
              instead.

   -q    Will make security less verbose.

   -v    Will make security more verbose.
</pre>
<p>SECURITY COMMANDS<br>
security provides a rich variety of <span class="code">commands</span> , each of which often has a 
wealth of options, to allow access to the broad functionality provided by the Security framework.  However, you don't have to master every detail for security to be useful to you.</p>
<pre>     <a href="security-keychain.html">list-keychains</a>              Display or manipulate the keychain search list.
     <a href="security-keychain.html">default-keychain</a>            Display or set the default keychain.
     <a href="security-keychain.html">login-keychain</a>              Display or set the login keychain.
     <a href="security-keychain.html">create-keychain</a>             Create keychains and add them to the search list.
     <a href="security-keychain.html">delete-keychain</a>             Delete keychains and remove them from the search list.
     <a href="security-keychain-settings.html">lock-keychain</a>               Lock the specified keychain.
     <a href="security-keychain-settings.html">unlock-keychain</a>             Unlock the specified keychain.
     <a href="security-keychain-settings.html">set-keychain-settings</a>       Set settings for a keychain.
     <a href="security-keychain-settings.html">set-keychain-password</a>       Set password for a keychain.
     <a href="security-keychain-settings.html">show-keychain-info</a>          Show the settings for keychain.
     <a href="security-keychain-settings.html">dump-keychain</a>               Dump the contents of one or more keychains.

     <a href="security-keypair.html">create-keypair</a>              Create an asymmetric key pair.
     <a href="security-password.html">add-generic-password</a>        Add a generic password item.
     <a href="security-internet.html">add-internet-password</a>       Add an internet password item.
     <a href="security-internet.html">add-certificates</a>            Add certificates to a keychain.

     <a href="security-password-mgt.html">find-generic-password</a>       Find a generic password item.
     <a href="security-password-mgt.html">delete-generic-password</a>     Delete a generic password item.
     <a href="security-password-mgt.html">find-internet-password</a>      Find an internet password item.
     <a href="security-password-mgt.html">delete-internet-password</a>    Delete an internet password item.

     <a href="security-find-cert.html">find-certificate</a>            Find a certificate item.
     <a href="security-find-id.html">find-identity</a>               Find an identity (certificate + private key).
     <a href="security-delete-cert.html">delete-certificate</a>          Delete a certificate from a keychain.

     <a href="security-id.html">set-identity-preference</a>     Set the preferred identity to use for a service.
     <a href="security-id.html">get-identity-preference</a>     Get the preferred identity to use for a service.

     <a href="security-db.html">create-db</a>                   Create a db using the DL.
     <a href="security-export.html">export</a>                      Export items from a keychain.
     <a href="security-export.html">import</a>                      Import items into a keychain.
     <a href="security-cms.html">cms</a>                         Encode or decode CMS messages.
     <a href="security-cms.html">install-mds</a>                 Install (or re-install) the MDS database.

     <a href="security-cert.html">add-trusted-cert</a>            Add trusted certificate(s).
     <a href="security-cert.html">remove-trusted-cert</a>         Remove trusted certificate(s).
     <a href="security-cert-verify.html">verify-cert</a>                 Verify certificate(s).

     <a href="security-settings.html">dump-trust-settings</a>         Display contents of trust settings.
     <a href="security-settings.html">user-trust-settings-enable</a>  Display or manipulate user-level trust settings.
     <a href="security-settings.html">trust-settings-export</a>       Export trust settings.
     <a href="security-settings.html">trust-settings-import</a>       Import trust settings.

     <a href="security-authorize.html">authorize</a>                   Perform authorization operations.
     <a href="security-authorizedb.html">authorizationdb</a>             Make changes to the authorization policy database.
     <a href="security-execute-leaks.html">execute-with-privileges</a>     Execute tool with privileges.
     <a href="security-execute-leaks.html">leaks</a>                       Run /usr/bin/leaks on this process.
     <a href="security-execute-leaks.html">error</a>                       Display a descriptive message for the given error code(s).
     <a href="security-execute-leaks.html">help</a>                        Show all commands, or show usage for a command.

Common options:
     Command_options that are available across all security commands.

     -h   Show a usage message for the specified command.
          This option is essentially the same as the help command.</pre>
<p>Environment<br>
<span class="code">MallocStackLogging</span><br>
When using the leaks command or the -l option it's probably a good idea to set this environment variable before security is started.  Doing so will allow leaks to display symbolic backtraces.<br>
<br>
Files<br>
<span class="code">~/Library/Preferences/com.apple.security.plist</span><br>

Property list file containing the current user's default keychain and keychain search list.<br>
<span class="code"><br>
/Library/Preferences/com.apple.security.plist</span><br>

Property list file containing the system default keychain and keychain search list.  This is
used by processes started at boot time, or those requesting to use the system search domain,
such as system daemons.<br>
<br>
<span class="code">/Library/Preferences/com.apple.security-common.plist</span><br>

Property list file containing the common keychain search list, which is appended to every
user's search list and to the system search list.<br>
<br>

History<br>
security was first introduced in Mac OS X version 10.3.<br>
<br>
Bugs<br>
security still needs more commands before it can be considered complete.  In particular, it should
someday supersede both the certtool and systemkeychain commands.</p>
<p class="quote"><i>“The man who looks for security, even in the mind, is like a man who would chop off his limbs in order to have artificial ones which will give him no pain or trouble</i><i>” ~ Henry Miller (The Rosy Crucifixion I )</i></p>
<p><b>Related:</b></p>
<p>certtool(1), leaks(1)<br>
<a href="tccutil.html">tccutil</a> - Manage the privacy database</p>
<!-- #BeginLibraryItem "/Library/foot_osx.lbi" --><p>
<!-- OSX300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="1823340303"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="security.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->
