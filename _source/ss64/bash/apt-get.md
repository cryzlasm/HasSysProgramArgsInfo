---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_bash.lbi" --><!-- #EndLibraryItem --><h1>apt-get</h1> 
<p>Search for and install software packages (Debian/Ubuntu).</p>
<pre>Syntax
      apt-get [-sqdyfmubV] [-o= <i>config_string</i> ] [-c= <i>config_file</i> ]
         [-t= <i>target</i>] <b>update</b> 

      apt-get [-sqdyfmubV] [-o= <i>config_string</i> ] [-c= <i>config_file</i> ]
         [-t= <i>target</i>] <b>upgrade</b>

      apt-get [-sqdyfmubV] [-o= <i>config_string</i> ] [-c= <i>config_file</i> ]
         [-t= <i>target</i>] <b>dselect-upgrade</b>

      apt-get [-sqdyfmubV] [-o= <i>config_string</i> ] [-c= <i>config_file</i> ]
         [-t= <i>target</i>] <b>dist-upgrade</b> 

      apt-get [-sqdyfmubV] [-o= <i>config_string</i> ] [-c= <i>config_file</i> ]
         [-t= <i>target</i>] <b>install</b> <i>pkg</i> [ { =<i>pkg_version_number</i> | /<i>target_release_name</i> | /<i>target_release_codename</i> } ] ...

      apt-get [-sqdyfmubV] [-o= <i>config_string</i> ] [-c= <i>config_file</i> ]
         [-t= <i>target</i>] <b>remove</b> <i>pkg</i>...  

      apt-get [-sqdyfmubV] [-o= <i>config_string</i> ] [-c= <i>config_file</i> ]
         [-t= <i>target</i>] <b>purge</b> <i>pkg</i>...  

      apt-get [-sqdyfmubV] [-o= <i>config_string</i> ] [-c= <i>config_file</i> ]
         [-t= <i>target</i>] <b>source</b> <i>pkg</i> [ { =<i>pkg_version_number</i> | /<i>target_release_name</i> | /<i>target_release_codename</i> } ] ...

      apt-get [-sqdyfmubV] [-o= <i>config_string</i> ] [-c= <i>config_file</i> ]
         [-t= <i>target</i>] <b>build-dep</b> <i>pkg</i>...  

      apt-get [-sqdyfmubV] [-o= <i>config_string</i> ] [-c= <i>config_file</i> ]
         [-t= <i>target</i>] <b>check</b>

      apt-get [-sqdyfmubV] [-o= <i>config_string</i> ] [-c= <i>config_file</i> ]
         [-t= <i>target</i>] <b>clean</b>

      apt-get [-sqdyfmubV] [-o= <i>config_string</i> ] [-c= <i>config_file</i> ]
         [-t= <i>target</i>] <b>autoclean</b>

      apt-get [-sqdyfmubV] [-o= <i>config_string</i> ] [-c= <i>config_file</i> ]
         [-t= <i>target</i>] <b>autoremove</b>

      apt-get {-v | --version} 
      apt-get {-h | --help{% raw %}}}{% endraw %}

 Where <i>Target</i> = {<i>target_release_name</i> | <i>target_release_number_expression</i> | <i>target_release_codename</i>}

Key</pre>
<p>apt-get and <a href="aptitude.html">aptitude</a> now share the same list of installed packages and so can be used interchangeably.</p><p>All command line options can be set using the configuration file, the
descriptions indicate the configuration option to set. For boolean
options you can override the config file by using something like <span class="code">-f-,--no-f, -f=no</span> or several other variations.</p>
<pre>       --no-install-recommends
           Do not consider recommended packages as a dependency for
           installing. Configuration Item: APT::Install-Recommends.

       -d, --download-only
           Download only; package files are only retrieved, not unpacked or
           installed. Configuration Item: APT::Get::Download-Only.

       -f, --fix-broken
           Fix; attempt to correct a system with broken dependencies in place.
           This option, when used with install/remove, can omit any packages
           to permit APT to deduce a likely solution. If packages are
           specified, these have to completely correct the problem. The option
           is sometimes necessary when running APT for the first time; APT
           itself does not allow broken package dependencies to exist on a
           system. It is possible that a system's dependency structure can be
           so corrupt as to require manual intervention (which usually means
           using dselect(1) or dpkg --remove to eliminate some of the
           offending packages). Use of this option together with -m may
           produce an error in some situations. Configuration Item:
           APT::Get::Fix-Broken.

       -m, --ignore-missing, --fix-missing
           Ignore missing packages; If packages cannot be retrieved or fail
           the integrity check after retrieval (corrupted package files), hold
           back those packages and handle the result. Use of this option
           together with -f might produce an error in some situations. If a
           package is selected for installation (particularly if it is
           mentioned on the command line) and it could not be downloaded then
           it will be silently held back. Configuration Item:
           APT::Get::Fix-Missing.

       --no-download
           Disables downloading of packages. This is best used with
           --ignore-missing to force APT to use only the .debs it has already
           downloaded. Configuration Item: APT::Get::Download.

       -q, --quiet
           Quiet; produces output suitable for logging, omitting progress
           indicators. More q's will produce more quiet up to a maximum of 2.
           You can also use -q=# to set the quiet level, overriding the
           configuration file. Note that quiet level 2 implies -y, you should
           never use -qq without a no-action modifier such as -d, --print-uris
           or -s as APT decided to do something you did not expect.
           Configuration Item: quiet.

       -s, --simulate, --just-print, --dry-run, --recon, --no-act
           No action; perform a simulation of events that would occur but do
           not actually change the system. Configuration Item:
           APT::Get::Simulate.

           Simulation run as user will deactivate locking (Debug::NoLocking)
           automatic. Also a notice will be displayed indicating that this is
           only a simulation, if the option
           APT::Get::Show-User-Simulation-Note is set (Default: true). Neither
           NoLocking nor the notice will be triggered if run as root (root
           should know what he is doing without further warnings by apt-get).

           Simulate prints out a series of lines each one representing a dpkg
           operation, Configure (Conf), Remove (Remv), Unpack (Inst). Square
           brackets indicate broken packages and empty set of square brackets
           meaning breaks that are of no consequence (rare).

       -y, --yes, --assume-yes
           Automatic yes to prompts; assume "yes" as answer to all prompts and
           run non-interactively. If an undesirable situation, such as
           changing a held package, trying to install a unauthenticated
           package or removing an essential package occurs then apt-get will
           abort. Configuration Item: APT::Get::Assume-Yes.

       -u, --show-upgraded
           Show upgraded packages; Print out a list of all packages that are
           to be upgraded. Configuration Item: APT::Get::Show-Upgraded.

       -V, --verbose-versions
           Show full versions for upgraded and installed packages.
           Configuration Item: APT::Get::Show-Versions.

       -b, --compile, --build
           Compile source packages after downloading them. Configuration Item:
           APT::Get::Compile.

       --install-recommends
           Also install recommended packages.

       --no-install-recommends
           Do not install recommended packages.

       --ignore-hold
           Ignore package Holds; This causes apt-get to ignore a hold placed
           on a package. This can be useful in conjunction with dist-upgrade
           to override a large number of undesired holds. Configuration Item:
           APT::Ignore-Hold.

       --no-upgrade
           Do not upgrade packages; When used in conjunction with install,
           no-upgrade will prevent packages on the command line from being
           upgraded if they are already installed. Configuration Item:
           APT::Get::Upgrade.

       --force-yes
           Force yes; This is a dangerous option that will cause apt to
           continue without prompting if it is doing something potentially
           harmful. It should not be used except in very special situations.
           Using force-yes can potentially destroy your system! Configuration
           Item: APT::Get::force-yes.

       --print-uris
           Instead of fetching the files to install their URIs are printed.
           Each URI will have the path, the destination file name, the size
           and the expected md5 hash. Note that the file name to write to will
           not always match the file name on the remote site! This also works
           with the source and update commands. When used with the update
           command the MD5 and size are not included, and it is up to the user
           to decompress any compressed files. Configuration Item:
           APT::Get::Print-URIs.

       --purge
           Use purge instead of remove for anything that would be removed. An
           asterisk ("*") will be displayed next to packages which are
           scheduled to be purged.  remove --purge is equivalent to the purge
           command. Configuration Item: APT::Get::Purge.

       --reinstall
           Re-Install packages that are already installed and at the newest
           version. Configuration Item: APT::Get::ReInstall.

       --list-cleanup
           This option defaults to on, use --no-list-cleanup to turn it off.
           When on apt-get will automatically manage the contents of
           /var/lib/apt/lists to ensure that obsolete files are erased. The
           only reason to turn it off is if you frequently change your source
           list. Configuration Item: APT::Get::List-Cleanup.

       -t, --target-release, --default-release
           This option controls the default input to the policy engine, it
           creates a default pin at priority 990 using the specified release
           string. This overrides the general settings in
           /etc/apt/preferences. Specifically pinned packages are not affected
           by the value of this option. In short, this option lets you have
           simple control over which distribution packages will be retrieved
           from. Some common examples might be -t '2.1*', -t unstable or -t
           sid. Configuration Item: APT::Default-Release; see also the
           apt_preferences(5) manual page.

       --trivial-only
           Only perform operations that are 'trivial'. Logically this can be
           considered related to --assume-yes, where --assume-yes will answer
           yes to any prompt, --trivial-only will answer no. Configuration
           Item: APT::Get::Trivial-Only.

       --no-remove
           If any packages are to be removed apt-get immediately aborts
           without prompting. Configuration Item: APT::Get::Remove.

       --auto-remove
           If the command is either install or remove, then this option acts
           like running autoremove command, removing the unused dependency
           packages. Configuration Item: APT::Get::AutomaticRemove.

       --only-source
           Only has meaning for the source and build-dep commands. Indicates
           that the given source names are not to be mapped through the binary
           table. This means that if this option is specified, these commands
           will only accept source package names as arguments, rather than
           accepting binary package names and looking up the corresponding
           source package. Configuration Item: APT::Get::Only-Source.

       --diff-only, --dsc-only, --tar-only
           Download only the diff, dsc, or tar file of a source archive.
           Configuration Item: APT::Get::Diff-Only, APT::Get::Dsc-Only, and
           APT::Get::Tar-Only.

       --arch-only
           Only process architecture-dependent build-dependencies.
           Configuration Item: APT::Get::Arch-Only.

       --allow-unauthenticated
           Ignore if packages can't be authenticated and don't prompt about
           it. This is useful for tools like pbuilder. Configuration Item:
           APT::Get::AllowUnauthenticated.

       -h, --help
           Show a short usage summary.

       -v, --version
           Show the program version.

       -c, --config-file
           Configuration File; Specify a configuration file to use. The
           program will read the default configuration file and then this
           configuration file. See apt.conf(5) for syntax information.

       -o, --option
           Set a Configuration Option; This will set an arbitrary
           configuration option. The syntax is -o Foo::Bar=bar.  -o and
           --option can be used multiple times to set different options.
</pre>
<p>        <b>update</b><br>
update is used to resynchronize the package index files from their
sources. The indexes of available packages are fetched from the
location(s) specified in /etc/apt/sources.list. For example, when
using a Debian archive, this command retrieves and scans the
Packages.gz files, so that information about new and updated<br>
packages is available. An update should always be performed before
an upgrade or dist-upgrade. Please be aware that the overall
progress meter will be incorrect as the size of the package files
cannot be known in advance.</p>
<p> <b>upgrade</b><br>
upgrade is used to install the newest versions of all packages
currently installed on the system from the sources enumerated in
/etc/apt/sources.list. Packages currently installed with new
versions available are retrieved and upgraded; under no
circumstances are currently installed packages removed, or packages
not already installed retrieved and installed. New versions of
currently installed packages that cannot be upgraded without
changing the install status of another package will be left at<br>
their current version. An update must be performed first so that
apt-get knows that new versions of packages are available.</p>
<p> <b>dselect-upgrade</b><br>
dselect-upgrade is used in conjunction with the traditional Debian
packaging front-end, dselect(1). dselect-upgrade follows the
changes made by dselect(1) to the Status field of available
packages, and performs the actions necessary to realize that state
(for instance, the removal of old and the installation of new
packages).</p>
<p> <b>dist-upgrade</b><br>
dist-upgrade in addition to performing the function of upgrade,
also intelligently handles changing dependencies with new versions
of packages; apt-get has a "smart" conflict resolution system, and
it will attempt to upgrade the most important packages at the
expense of less important ones if necessary. So, dist-upgrade
command might remove some packages. The /etc/apt/sources.list file
contains a list of locations from which to retrieve desired package
files. See also apt_preferences(5) for a mechanism for overriding
the general settings for individual packages.</p>
<p> <b>install</b><br>
install is followed by one or more packages desired for
installation or upgrading. Each package is a package name, not a
fully qualified filename (for instance, in a Debian GNU/Linux
system, libc6 would be the argument provided, not
libc6_1.9.6-2.deb). All packages required by the package(s)
specified for installation will also be retrieved and installed.
The /etc/apt/sources.list file is used to locate the desired
packages. If a hyphen is appended to the package name (with no
intervening space), the identified package will be removed if it is
installed. Similarly a plus sign can be used to designate a package
to install. These latter features can be used to override decisions
made by apt-get's conflict resolution system.</p>
<blockquote>
<p> A specific version of a package can be selected for installation by
following the package name with an equals and the version of the
package to select. This will cause that version to be located and
selected for install. Alternatively a specific distribution can be
selected by following the package name with a slash and the version<br>
of the distribution or the Archive name (stable, testing,
unstable).</p>
<p> Both of the version selection mechanisms can downgrade packages and
must be used with care.</p>
<p> This is also the target to use if you want to upgrade one or more
already-installed packages without upgrading every package you have
on your system. Unlike the "upgrade" target, which installs the
newest version of all currently installed packages, "install" will
install the newest version of only the package(s) specified. Simply<br>
provide the name of the package(s) you wish to upgrade, and if a
newer version is available, it (and its dependencies, as described
above) will be downloaded and installed.</p>
<p> Finally, the apt_preferences(5) mechanism allows you to create an
alternative installation policy for individual packages.</p>
<p> If no package matches the given expression and the expression
contains one of '.', '?' or '*' then it is assumed to be a POSIX
regular expression, and it is applied to all package names in the
database. Any matches are then installed (or removed). Note that
matching is done by substring so 'lo.*' matches 'how-lo' and
'lowest'. If this is undesired, anchor the regular expression with
a '^' or '$' character, or create a more specific regular
expression.</p>
</blockquote>
<p> <b>remove</b><br>
remove is identical to install except that packages are removed
instead of installed. Note the removing a package leaves its
configuration files in system. If a plus sign is appended to the
package name (with no intervening space), the identified package
will be installed instead of removed.</p>
<p> <b>purge</b><br>
purge is identical to remove except that packages are removed and
purged (any configuration files are deleted too).</p>
<p> <b>source</b><br>
source causes apt-get to fetch source packages. APT will examine
the available packages to decide which source package to fetch. It
will then find and download into the current directory the newest
available version of that source package while respect the default
release, set with the option APT::Default-Release, the -t option or<br>
per package with the pkg/release syntax, if possible.</p>
<blockquote>
<p> Source packages are tracked separately from binary packages via
deb-src type lines in the sources.list(5) file. This means that you
will need to add such a line for each repository you want to get
sources from. If you don't do this you will properly get another
(newer, older or none) source version than the one you have
installed or could install.</p>
<p> If the --compile option is specified then the package will be
compiled to a binary .deb using dpkg-buildpackage, if
--download-only is specified then the source package will not be
unpacked.</p>
<p> A specific source version can be retrieved by postfixing the source
name with an equals and then the version to fetch, similar to the
mechanism used for the package files. This enables exact matching
of the source package name and version, implicitly enabling the
APT::Get::Only-Source option.</p>
</blockquote>
<p> Note that source packages are not tracked like binary packages,
they exist only in the current directory and are similar to
downloading source tar balls.</p>
<p> <b>build-dep</b><br>
build-dep causes apt-get to install/remove packages in an attempt
to satisfy the build dependencies for a source package.</p>
<p> <b>check</b><br>
check is a diagnostic tool; it updates the package cache and checks
for broken dependencies.</p>
<p> <b>clean</b><br>
clean clears out the local repository of retrieved package files.
It removes everything but the lock file from
/var/cache/apt/archives/ and /var/cache/apt/archives/partial/. When
APT is used as a dselect(1) method, clean is run automatically.
Those who do not use dselect will likely want to run apt-get clean
from time to time to free up disk space.</p>
<p> <b>autoclean</b><br>
Like clean, autoclean clears out the local repository of retrieved
package files. The difference is that it only removes package files
that can no longer be downloaded, and are largely useless. This
allows a cache to be maintained over a long period without it
growing out of control. The configuration option
APT::Clean-Installed will prevent installed packages from being
erased if it is set to off.</p>
<p> <b>autoremove</b><br>
autoremove is used to remove packages that were automatically
installed to satisfy dependencies for some package and that are no
more needed.</p>
<p>FILES</p>
<p> <span class="code">/etc/apt/sources.list</span><br>
Locations to fetch packages from. It takes the following format:<br>deb [web address] [distribution name][maincontribnon-free]<br>
For example, in Ubuntu, it could be something like:<br>
<span class="code">deb <a href="http://in.archive.ubuntu.com/ubuntu/">http://in.archive.ubuntu.com/ubuntu</a> lucid main restrcted</span><br>
or for debian <br>
<span class="code">deb <a href="http://ftp.de.debian.org/debian">http://ftp.de.debian.org/debian</a> lenny main</span><br>
Configuration Item:<br>
Dir::Etc::SourceList.</p>
<p> <span class="code">/etc/apt/sources.list.d/</span><br>
File fragments for locations to fetch packages from. Configuration<br>
Item: Dir::Etc::SourceParts.</p>
<p> <span class="code">/etc/apt/apt.conf</span><br>
APT configuration file. Configuration Item: Dir::Etc::Main.</p>
<p> <span class="code">/etc/apt/apt.conf.d/</span><br>
APT configuration file fragments. Configuration Item:<br>
Dir::Etc::Parts.</p>
<p> <span class="code">/etc/apt/preferences</span><br>
Version preferences file. This is where you would specify<br>
"pinning", i.e. a preference to get certain packages from a<br>
separate source or from a different version of a distribution.<br>
Configuration Item: Dir::Etc::Preferences.</p>
<p> <span class="code">/etc/apt/preferences.d/</span><br>
File fragments for the version preferences. Configuration Item:<br>
Dir::Etc::PreferencesParts.</p>
<p> <span class="code">/var/cache/apt/archives/</span><br>
Storage area for retrieved package files. Configuration Item:<br>
Dir::Cache::Archives.</p>
<p> <span class="code">/var/cache/apt/archives/partial/</span><br>
Storage area for package files in transit. Configuration Item:<br>
Dir::Cache::Archives (implicit partial).</p>
<p> <span class="code">/var/lib/apt/lists/</span><br>
Storage area for state information for each package resource<br>
specified in sources.list(5) Configuration Item: Dir::State::Lists.</p>
<p> <span class="code">/var/lib/apt/lists/partial/</span><br>
Storage area for state information in transit. Configuration Item:<br>
Dir::State::Lists (implicit partial).</p>
<p><b>Examples</b></p>
<p> These examples assume that <span class="code">/etc/apt/sources.list </span>already includes the web address of at least one software repository.</p>
<p>Sync the local software database 
with the repository database (build cache):<br>

<span class="code">$ apt-get update</span></p>
<p><span class="code"></span>Search for a particular program (search the cache) in this case the <i>gimp </i>program:<br>
<span class="code">$ apt-cache search gimp</span></p>
<p>If the above succeeds then the software is available and can be installed: <br>
<span class="code">$ apt-get install gimp</span></p>
<p>To remove  the software if you no longer need it: <br>
<span class="code">$ apt-get remove gimp</span></p>
<p>Upgrade all the software on your system to the latest versions:<br>
<span class="code">$ apt-get upgrade</span></p>
<p>Upgrading the whole linux distribution to a new version: <br>
<span class="code">$ apt-get dist-upgrade</span><br>
  <br>
  <i class="quote">“Be not the first by whom the new are tried,<br>
Nor yet the last to lay the old aside” ~ Alexander Pope</i></p>
<p><b>Related:</b></p>
<p>apt-cache(8), apt-cdrom(8), dselect(1), sources.list(5), apt.conf(5), apt-config(8), apt-secure(8), apt_preferences(5)<br>
dpkg - Low level Package management<br>

The APT User's guide in
/usr/share/doc/apt-doc/<br> 
The APT Howto<br>
<a href="https://wiki.debian.org/Apt">wiki.debian.org/Apt</a> -  APT Wiki (Debian).<br>

<a href="http://en.wikipedia.org/wiki/Ubuntu_Software_Center">  Ubuntu Software Center</a> - GUI for APT <br>
<a href="http://www.nongnu.org/synaptic/">Synaptic Package Manager</a> - GUI for APT (In Ubuntu this is under System | Administration)<br>
<a href="aptitude.html">aptitude</a> - Package manager<br>
Equivalent Windows command: <a href="http://chocolatey.org/">Chocolatey.org</a></p><!-- #BeginLibraryItem "/Library/foot_bash.lbi" --><p><script async="" src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
<!-- bash300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="4615356305"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

