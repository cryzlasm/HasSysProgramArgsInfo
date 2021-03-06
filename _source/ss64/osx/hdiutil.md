---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_osx.lbi" --><!-- #EndLibraryItem --><h1>hdiutil</h1> 
<p>Manipulate disk images (attach, verify, burn, etc).</p>
<pre>Syntax
      hdiutil verb [options]

DESCRIPTION

     hdiutil uses the DiskImages framework to manipulate disk images.  Common
     verbs include attach, detach, verify, create, convert, compact, and burn.

     The rest of the verbs are currently: help, info, checksum, chpass,
     erasekeys, unflatten, flatten, imageinfo, isencrypted, mountvol, unmount,
     plugins, udifrez, udifderez, internet-enable, resize, segment,
     makehybrid, and pmap.

BACKGROUND</pre>
<p> Disk images are containers that emulate disks.  Like disks, they can be
partitioned and formatted.  Many uses of disk images blur the distinction
between the disk image container and its content, but this distinction is
critical to understanding disk images.  The terms "attach" and "detach" are used to distinguish the way disk images are connected to and disconnected from the system.<br>
<br>
For example, when you double-click a disk image in the Mac OS X Finder,
two separate things happen.  First, the image is "attached" to the system
just like an external drive.  Then, the kernel and Disk Arbitration probe
the new device for recognized file structures.  If any file structures
are understood, the associated volumes will mount and appear in the<br>
Finder.<br>
<br>
Always consider whether a "disk image" operation applies to the blocks of
the disk image device or to the (often file-oriented) content of the
image.  For example, verify verifies that the blocks stored in a read-
only disk image have not changed since it was created.  On the other
hand, create -srcfolder creates a disk image container, puts a filesystem<br>
in it, and then copies the specified files to the new filesystem.<br>
</p>
<pre>COMMON OPTIONS

     The following option descriptions apply to all verbs:

     -verbose be verbose: produce extra progress output and error diagnostics.
              This option can help the user decipher why a particular opera-
              tion failed.  At a minimum, the probing of any specified images
              will be detailed.

     -quiet   close stdout and stderr, leaving only hdiutil's exit status to
              indicate success or failure.  -debug and -verbose disable
              -quiet.

     -debug   be very verbose.  This option is good if a large amount of
              progress information is needed.  As of Mac OS X 10.6, -debug
              enables -verbose.

     Many hdiutil verbs understand the following options:

     -plist          provide result output in plist format.  Other programs
                     invoking hdiutil are expected to use -plist rather than
                     try to parse the human-readable output.  The usual output
                     is consistent but generally unstructured.

     -puppetstrings  provide progress output that is easy for another program
                     to parse.  PERCENTAGE outputs can include the value -1
                     which means hdiutil is performing an operation that will
                     take an indeterminate amount of time to complete.  Any
                     program trying to interpret hdiutil's progress should use
                     -puppetstrings.

     -srcimagekey key=value
                     specify a key/value pair for the disk image recognition
                     system.  (-imagekey is normally a synonym)

     -tgtimagekey key=value
                     specify a key/value pair for any image created.
                     (-imagekey is only a synonym if there is no input image).

     -encryption [AES-128|AES-256]
                     specify a particular type of encryption or, if not speci-
                     fied, the default encryption algorithm.  The default
                     algorithm is the AES cipher with a 128-bit key.

     -stdinpass      read a null-terminated passphrase from standard input.
                     If the standard input is a tty, the passphrase will be
                     read with readpassphrase(3).  -stdinpass replaces
                     -passphrase though the latter is still supported for com-
                     patibility.  Beware that the password will contain any
                     newlines before the NULL.  See EXAMPLES.

     -agentpass      force the default behavior of prompting for a passphrase.
                     Useful with -pubkey to create an image protected by both
                     a passphrase and a public key.

     -recover keychain_file
                     specify a keychain containing the secret corresponding to
                     the certificate specified with -certificate when the
                     image was created.

     -certificate cert_file
                     specify a secondary access certificate for an encrypted
                     image.  cert_file must be DER-encoded certificate data,
                     which can be created by Keychain Access or openssl(1).

     -pubkey PK1,PK2,...,PKn
                     specify a list of public keys, identified by their hexa-
                     decimal hashes, to be used to protect the encrypted image
                     being created.

     -cacert cert    specify a certificate authority certificate.  cert can be
                     either a PEM file or a directory of certificates pro-
                     cessed by c_rehash(1).  See also --capath and --cacert in
                     curl(1).

     -insecurehttp   ignore SSL host validation failures.  Useful for self-
                     signed servers for which the appropriate certificates are
                     unavailable or if access to a server is desired when the
                     server name doesn't match what is in the certificate.

     -shadow [shadowfile]
                     Use a shadow file in conjunction with the data in the
                     primary image file.  This option prevents modification of
                     the original image and allows read-only images to be
                     attached read/write.  When blocks are being read from the
                     image, blocks present in the shadow file override blocks
                     in the base image.  All data written to an attached
                     device will be redirected to the shadow file.  If not
                     specified, shadowfile defaults to image.shadow. If the
                     shadow file does not exist, it is created.  hdiutil verbs
                     taking images as input accept -shadow, -cacert, and
                     -insecurehttp.

     Verbs that create images automatically append the correct extension to
     any filenames if the extension is not already present.  The creation
     engine also examines the filename extension of the provided filename and
     changes its behavior accordingly.  For example, a sparse image can be
     created without specifying -type SPARSEBUNDLE simply by appending the
     .sparsebundle extension to the provided filename.

VERBS

     Each verb is listed with its description and individual arguments.  Argu-
     ments to the verbs can be passed in any order.  A sector is 512 bytes.

     help       display minimal usage information for each verb.  hdiutil verb
                -help will provide basic usage information for that verb.

     attach image [options]
                attach a disk image as a device.  attach will return informa-
                tion about an already-attached image as if it had attached it.
                mount is a poorly-named synonym for attach.  See BACKGROUND.

                Beware that an image freshly created and attached is treated
                as a new removable device.  See hdid(8) and the EXAMPLES sec-
                tion below for more details about how owners are ignored on
                filesystems on such devices.

                The output of attach has been stable since OS X 10.0 (though
                it was called hdid(8) then) and is intended to be program-
                readable.  It consists of the /dev node, a tab, a content hint
                (if applicable), another tab, and a mount point (if any
                filesystems were mounted).  Because content hints are derived
                from the partition data, GUID Partition Table types can leak
                through.  Common GUIDs such as "48465300-0000-11AA-
                AA11-0030654" are mapped to their human-readable counterparts
                (here "Apple_HFS").

                Common options: -encryption, -stdinpass, -recover, -imagekey,
                -shadow, -puppetstrings, and -plist.

                Options:
                -readonly          force the resulting device to be read-only
                -readwrite         attempt to override the DiskImages frame-
                                   work's decision to attach a particular
                                   image read-only.  For example, -readwrite
                                   can be used to modify the HFS filesystem on
                                   a HFS/ISO hybrid CD image.
                -nokernel          attach with a helper process.  This is
                                   again the default as of OS X 10.5.
                -kernel            attempt to attach this image without a
                                   helper process; fail if unsupported.  Only
                                   UDRW, UDRO, UDZO, and UDSP images are sup-
                                   ported in-kernel.  Encryption and HTTP-
                                   backed images are also supported.
                -notremovable      prevent this image from being detached.
                                   Only root can use this option.

                -mount required|optional|suppressed
                                   indicate whether filesystems in the image
                                   should be mounted or not.  The default is
                                   required (attach will fail if no filesys-
                                   tems mount).
                -nomount           identical to -mount suppressed.
                -mountroot path    mount volumes on subdirectories of path
                                   instead of under /Volumes.  path must
                                   exist.  Full mount point paths must be less
                                   than MNAMELEN characters (increased from 90
                                   to 1024 in OS X 10.6).
                -mountrandom path  like -mountroot, but mount point directory
                                   names are randomized with mkdtemp(3).
                -mountpoint path   assuming only one volume, mount it at path
                                   instead of in /Volumes. See fstab(5) for
                                   ways a system administrator can make par-
                                   ticular volumes automatically mount in par-
                                   ticular filesystem locations by editing the
                                   file /etc/fstab.
                -nobrowse          render any volumes invisible in applica-
                                   tions such as the OS X Finder.
                -owners on|off     specify that owners on any filesystems be
                                   honored or not.
                -drivekey key=value
                                   specify a key/value pair to be attached to
                                   the device in the IOKit registry.

                The following options have corresponding elements in the
                com.apple.frameworks.diskimages preferences domain and thus
                can be rendered in both the positive and the negative to over-
                ride any existing preferences.

                -[no]verify       do [not] verify the image.  By default,
                                  hdiutil attach attempts to intelligently
                                  verify images that contain checksums before
                                  attaching them.  If hdiutil can write to an
                                  image it has verified, attach will store an
                                  attribute with the image so that it will not
                                  be verified again unless its timestamp
                                  changes.  To maintain backwards compatibil-
                                  ity, hdid(8) does not attempt to verify
                                  images before attaching them.
                                  Preferences keys: skip-verify, skip-verify-
                                  remote, skip-verify-locked, skip-previously-
                                  verified
                -[no]ignorebadchecksums
                                  specify whether bad checksums should be
                                  ignored.  The default is to abort when a bad
                                  checksum is detected.
                                  Preferences key: ignore-bad-checksums
                -[no]idme         do [not] perform IDME actions on IDME
                                  images.  IDME actions are not performed by
                                  default.
                                  Preferences key: skip-idme
                -[no]idmereveal   do [not] reveal (in the Finder) the results
                                  of IDME processing.
                                  Preferences key: skip-idme-reveal
                -[no]idmetrash    do [not] put IDME images in the trash after
                                  processing.
                                  Preferences key: skip-idme-trash
                -[no]autoopen     do [not] auto-open volumes (in the Finder)
                                  after attaching an image.  By default, dou-
                                  ble-clicking a read-only disk image causes
                                  the resulting volume to be opened in the
                                  Finder.  hdiutil defaults to -noautoopen.
                -[no]autoopenro   do [not] auto-open read-only volumes.
                                  Preferences key: auto-open-ro-root
                -[no]autoopenrw   do [not] auto-open read/write volumes.
                                  Preferences key: auto-open-rw-root
                -[no]autofsck     do [not] force automatic file system check-
                                  ing before mounting a disk image.  By
                                  default, only quarantined images (e.g. down-
                                  loaded from the Internet) that have not pre-
                                  viously passed fsck are checked.
                                  Preferences key: auto-fsck

     detach dev_name [-force]
                detach a disk image and terminate any associated process.
                dev_name is a partial /dev node path (e.g. "disk1").  As of OS
                X 10.4, dev_name can also be a mountpoint.  If Disk Arbitra-
                tion is running, detach will use it to unmount any filesystems
                and detach the image.  If not, detach will attempt to unmount
                any filesystems and detach the image directly (using the
                `eject' ioctl).  If Disk Arbitration is not running, it can be
                necessary to unmount the filesystems with umount(8) before
                detaching the image.  eject is a synonym for detach.

                Options:
                -force   ignore open files on mounted volumes, etc.

     verify image [options]
                compute the checksum of a "read-only" or "compressed" image
                and verify it against the value stored in the image.
                Read/write images don't contain checksums and thus can't be
                verified.  verify accepts the common options -encryption,
                -stdinpass, -srcimagekey, -puppetstrings, and -plist.

     create size_spec image
                create a new image of the given size or from the provided
                data.  If image already exists, -ov must be specified or
                create will fail.  To make a cross-platform CD or DVD, use
                makehybrid instead.  See also EXAMPLES below.

                The size specified is the size of the image to be created.
                Filesystem and partition layout overhead (80 sectors for the
                default GPTSPUD layout on Intel machines) might not be available
                for the filesystem and user data in the image.
                Size specifiers:
                -size ??b|??k|??m|??g|??t|??p|??e
                           Specify the size of the image in the style of
                           mkfile(8) with the addition of tera-, peta-, and
                           exa-bytes sizes (note that 'b' specifies a number
                           of sectors, not bytes).  The larger sizes are use-
                           ful for large sparse images.
                -sectors sector_count
                           Specify the size of the image file in 512-byte sec-
                           tors.
                -megabytes size
                           Specify the size of the image file in megabytes
                           (1024*1024 bytes).

                -srcfolder source
                           copies file-by-file the contents of source into
                           image, creating a fresh (theoretically defrag-
                           mented) filesystem on the destination.  The result-
                           ing image is thus recommended for use with asr(8)
                           since it will have a minimal amount of unused
                           space.  Its size will be that of the source data
                           plus some padding for filesystem overhead.  The
                           filesystem type of the image volume will match that
                           of the source as closely as possible unless over-
                           ridden with -fs.  Other size specifiers, such as
                           -size, will override the default size calculation
                           based on the source content, allowing for more or
                           less free space in the resulting filesystem.
                           -srcfolder can be specified more than once, in
                           which case the image volume will be populated at
                           the top level with a copy of each specified
                           filesystem object.  -srcdir is a synonym.
                -srcdevice device
                           specifies that the blocks of device should be used
                           to create a new image.  The image size will match
                           the size of device.  resize can be used to adjust
                           the size of resizable filesystems and writable
                           images.  Both -srcdevice and -srcfolder can run
                           into errors if there are bad blocks on a disk.  One
                           way around this problem is to write over the files
                           in question in the hopes that the drive will remap
                           the bad blocks.  Data will be lost, but the image
                           creation operation will subsequently succeed.
                           Filesystem options (like -fs, -volname, -stretch,
                           or -size) are invalid and ignored when using
                           -srcdevice.

                Common options: -encryption, -stdinpass, -certificate,
                -pubkey, -imagekey, -tgtimagekey, -puppetstrings, and -plist.

                -imagekey di-sparse-puma-compatible=TRUE and -imagekey
                di-shadow-puma-compatible=TRUE will create, respectively,
                sparse and shadow images that can be attached on OS X 10.1.
                -imagekey encrypted-encoding-version can select between ver-
                sion 1 and version 2 of the encrypted encoding.  The framework
                preferences have a corresponding key to change the default for
                all images.  Version 2 is not compatible with OS X 10.2 but is
                more robust for SPARSE (UDSP) images.  Version 1 is the
                default for non-sparse images.  As of OS X 10.4.7, sparse
                encrypted images always use version 2 and as of OS X 10.5, all
                encrypted images default to version 2.

                General options:
                -align alignment
                          specifies a size to which the final data partition
                          will be aligned.  The default is 4K.

                -type UDIF|SPARSE|SPARSEBUNDLE
                          -type is particular to create and is used to specify
                          the format of empty read/write images.  It is inde-
                          pendent of -format which is used to specify the
                          final read-only image format when populating an
                          image with pre-existing content.

                          UDIF is the default type.  If specified, a UDRW of
                          the specified size will be created.  SPARSE creates
                          a UDSP: a read/write single-file image which expands
                          as is is filled with data.  SPARSEBUNDLE creates a
                          UDSB: a read/write image backed by a directory bun-
                          dle.

                          By default, UDSP images grow one megabyte at a time.
                          Introduced in 10.5, UDSB images use 8 MB band files
                          which grow as they are written to.  -imagekey
                          sparse-band-size=size can be used to specify the
                          number of 512-byte sectors that will be added each
                          time the image grows.  Valid values for SPARSEBUNDLE
                          range from 2048 to 16777216 sectors (1 MB to 8 GB).

                          The maximum size of a SPARSE image is 128 petabytes;
                          the maximum for SPARSEBUNDLE is just under 8
                          exabytes (2^63 - 512 bytes minus 1 byte).  The
                          amount of data that can be stored in either type of
                          sparse image is additionally bounded by the filesys-
                          tem in the image and by any partition map.  compact
                          can reclaim unused bands in sparse images backing
                          HFS+ filesystems.  resize will only change the vir-
                          tual size of a sparse image.  See also USING PERSIS-
                          TENT SPARSE IMAGES below.

                -fs filesystem
                          where filesystem is one of HFS+, HFS+J (JHFS+),
                          HFSX, JHFS+X, MS-DOS, or UDF.  -fs causes a filesys-
                          tem of the specified type to be written to the
                          image.  -fs can change the partition scheme and type
                          appropriately.  -fs will not make any size adjust-
                          ments: if the image is the wrong size for the speci-
                          fied filesystem, create will fail.  -fs is invalid
                          and ignored when using -srcdevice.
                -volname volname
                          The newly-created filesystem will be named volname.
                          The default depends the filesystem being used;
                          HFS+'s default volume name is `untitled'.  -volname
                          is invalid and ignored when using -srcdevice.
                -uid uid  the root of the newly-created volume will be owned
                          by the given numeric user id.  99 maps to the magic
                          `unknown' user (see hdid(8)).
                -gid gid  the root of the newly-created volume will be owned
                          by the given numeric group id.  99 maps to
                          `unknown'.
                -mode mode the root of the newly-created volume will have mode
                          (in octal) mode.  The default mode is determined by
                          the filesystem's newfs unless -srcfolder is speci-
                          fied, in which case the default mode is derived from
                          the specified filesystem object.
                -[no]autostretch
                          do [not] suppress automatically making backwards-
                          compatible stretchable volumes when the volume size
                          crosses the auto-stretch-size threshold (default:
                          256 MB).  See also asr(8).
                -stretch max_stretch
                          -stretch initializes HFS+ filesystem data such that
                          it can later be stretched on older systems (which
                          could only stretch within predefined limits) using
                          hdiutil resize or by asr(8).  max_stretch is speci-
                          fied like -size.  -stretch is invalid and ignored
                          when using -srcdevice.
                -fsargs newfs_args
                          additional arguments to pass to whatever newfs pro-
                          gram is implied by -fs.  newfs_hfs(8) has a number
                          of options that can reduce the amount of space
                          needed by the filesystem's data structures.  Sup-
                          pressing the journal with -fs HFS+ and passing argu-
                          ments such as -c c=64,a=16,e=16 to -fsargs will min-
                          imize gaps at the front of the filesystem, allowing
                          resize to squeeze more space from the filesystem.
                          For truly optimal filesystems, use makehybrid.

                -layout layout
                          Specify the partition layout of the image.  layout
                          can be anything supported by MediaKit.framework.
                          NONE creates an image with no partition map.  When
                          such an image is attached, a single /dev entry will
                          be created (e.g. /dev/disk1).

                          `SPUD' causes a DDM and an Apple Partition Scheme
                          partition map with a single entry to be written.
                          `GPTSPUD' creates a similar image but with a GUID
                          Partition Scheme map instead.  When attached, multi-
                          ple /dev entries will be created, with either slice
                          1 (GPT) or slice 2 (APM) as the data partition.
                          (e.g. /dev/disk1, /dev/disk1s1, /dev/disk1s2).

                          Unless overridden by -fs, the default layout is
                          `GPTSPUD' (PPC systems used `SPUD' prior to OS X
                          10.6).  Other layouts include `MBRSPUD' and `ISOCD'.
                          create -help lists all supported layouts.
                -library bundle
                          specify an alternate layout library.  The default is
                          MediaKit's MKDrivers.bundle.
                -partitionType partition_type
                          Change the type of partition in a single-partition
                          disk image.  The default is Apple_HFS unless -fs
                          implies otherwise.

                -ov       overwrite an existing file.  The default is not to
                          overwrite existing files.
                -attach   attach the image after creating it.  If no filesys-
                          tem is specified via -fs, the attach will fail per
                          the default attach -mount required behavior.

                Image from source options (for -srcfolder and -srcdevice):
                -format format Specify the final image format.  The default
                               when a source is specified is UDZO.  format can
                               be any of the format parameters used by
                               convert.

                Options specific to -srcdevice:
                -segmentSize size_spec
                               Specify that the image should be written in
                               segments no bigger than size_spec (which fol-
                               lows -size conventions).

                Options specific to -srcfolder:
                -[no]crossdev   do [not] cross device boundaries on the source
                                filesystem.
                -[no]scrub      do [not] skip temporary files when imaging a
                                volume.  Scrubbing is the default when the
                                source is the root of a mounted volume.
                                Scrubbed items include trashes, temporary
                                directories, swap files, etc.
                -[no]anyowners  do not fail if the user invoking hdiutil can't
                                ensure correct file ownership for the files in
                                the image.
                -skipunreadable skip files that can't be read by the copying
                                user and don't authenticate.
                -copyuid user   perform the copy as the given user.  Requires
                                root privilege.  If user can't read or create
                                files with the needed owners, -anyowners or
                                -skipunreadable must be used to prevent the
                                operation from failing.

                By default, create -srcfolder attempts to maintain the permis-
                sions present in the source directory.  It prompts for authen-
                tication if it detects an unreadable file, a file owned by
                someone other than the user creating the image, or a SGID file
                in a group that the copying user is not in.

     convert image -format format -o outfile
                convert image to type format and write the result to outfile.

                As with create, the correct filename extension will be added
                only if it isn't part of the provided name.  Format is one of:

                      UDRW - UDIF read/write image
                      UDRO - UDIF read-only image
                      UDCO - UDIF ADC-compressed image
                      UDZO - UDIF zlib-compressed image
                      UDBZ - UDIF bzip2-compressed image (OS X 10.4+ only)
                      UFBI - UDIF entire image with MD5 checksum
                      UDRo - UDIF read-only (obsolete format)
                      UDCo - UDIF compressed (obsolete format)
                      UDTO - DVD/CD-R master for export
                      UDxx - UDIF stub image
                      UDSP - SPARSE (grows with content)
                      UDSB - SPARSEBUNDLE (grows with content; bundle-backed)
                      RdWr - NDIF read/write image (deprecated)
                      Rdxx - NDIF read-only image (Disk Copy 6.3.3 format)
                      ROCo - NDIF compressed image (deprecated)
                      Rken - NDIF compressed (obsolete format)
                      DC42 - Disk Copy 4.2 image

                In addition to the compression offered by some formats, the
                UDIF and NDIF read-only formats skip unused space in HFS, UFS,
                and MS-DOS (FAT) filesystems.  For UDZO, -imagekey
                zlib-level=value allows the zlib compression level to be spec-
                ified ala gzip(1).  The default compression level is 1
                (fastest).

                Common options: -encryption, -stdinpass, -certificate,
                -srcimagekey, -tgtimagekey, -shadow and related,
                -puppetstrings, and -plist.

                Other options:
                -align alignment
                             The default is 4 (2K).
                -pmap        add partition map.
                             When converting a NDIF to a any variety of UDIF,
                             or when converting an unpartitioned UDIF, the
                             default is true.
                -segmentSize [size_spec]
                             Specify segmentation into size_spec-sized seg-
                             ments as outfile is being written.  The default
                             size_spec when -segmentSize is specified alone is
                             2*1024*1024 (1 GB worth of sectors) for UDTO
                             images and 4*1024*1024 (2 GB segments) for all
                             other image types.  size_spec can also be speci-
                             fied ??b|??k|??m|??g|??t??p|??e like create's
                             -size flag.
                -tasks task_count
                             When converting an image into a compressed for-
                             mat, specify the number of threads to use for the
                             compression operation.  The default is the number
                             of processors active in the current system.

     burn image
                Burn image to optical media in an attached burning device.  In
                all cases, a prompt for media will be printed once an appro-
                priate drive has been found.  Common options: -shadow and
                related, -srcimagekey, -encryption, -puppetstrings, and
                -stdinpass.

                Other options:
                -device          specify a device to use for burning.  See
                                 -list.
                -testburn        don't turn on laser (laser defaults to on).
                -anydevice       explicitly allow burning to devices not qual-
                                 ified by Apple (kept for backwards compati-
                                 bility as burn will burn to any device by
                                 default as of OS X 10.4).

                -[no]eject       do [not] eject disc after burning. The
                                 default is to eject the disc.
                -[no]verifyburn  do [not] verify disc contents after burn.
                                 The default is to verify.

                -[no]addpmap     do [not] add partition map if necessary.
                                 Some filesystem types will not be recognized
                                 when stored on optical media unless they are
                                 enclosed in a partition map.  This option
                                 will add a partition map to any bare filesys-
                                 tem which needs a partition map in order to
                                 be recognized when burned to optical media.
                                 The default is to add the partition map if
                                 needed.

                -[no]skipfinalfree do [not] skip final free partition.  If
                                 there is a partition map on the image speci-
                                 fying an Apple_Free partition as the last
                                 partition, that Apple_Free partition will not
                                 be burned.  The burned partition map will
                                 still reference the empty space.  The default
                                 is to skip burning a final free partition.

                -[no]optimizeimage do [not] optimize filesystem for burning.
                                 Optimization can reduce the size of an HFS or
                                 HFS+ volume to the size of the data contained
                                 on the volume.  This option will change what
                                 is burned such that the disc will have a dif-
                                 ferent checksum than the image it came from.
                                 The default is to burn all blocks of the disk
                                 image (minus any trailing Apple_Free).

                -[no]forceclose  do [not] force the disc to be closed after
                                 burning.  Further burns to the disc will be
                                 impossible.  The default is not to close the
                                 disc.

                -nounderrun      Disable the default buffer underrun protec-
                                 tion.

                -[no]synthesize  [Don't] Synthesize a hybrid filesystem for
                                 the disc.  The default is to create a new
                                 (HFS/ISO) filesystem when the source image's
                                 blocks could not be legally burned to a disc.

                -speed x_factor  1, 2, 4, 6, ...  `max'
                                 The desired "x-factor".  e.g. 8 means the
                                 drive will be instructed burn at "8x speed".
                                 `max' will cause the burn to proceed at the
                                 maximum speed of the drive.  `max' is the
                                 default speed.  Slower speeds can produce
                                 more reliable burns.  The speed factor is
                                 relative to the media being burned (e.g.
                                 -speed 2 has a different data rate when used
                                 for a DVD burn vs. a CD burn).  Note that
                                 some drives have a minimum burn speed in
                                 which case any slower speed specified will
                                 result in a burn at the drive's minimum
                                 speed.

                -sizequery       calculate the size of disc required (the size
                                 returned is in sectors) without burning any-
                                 thing.

                -erase           prompt for optical media (DVD-RW/CD-RW) and
                                 then, if the hardware supports it, quickly
                                 erase the media.  If an image is specified,
                                 it will be burned to the media after the
                                 media has been erased.
                -fullerase       erase all sectors of the disc (this usually
                                 takes quit a bit longer than -erase).
                -list            list all burning devices, with OpenFirmware
                                 paths suitable for -device.

     makehybrid -o image source
                Generate a potentially-hybrid filesystem in a read-only disk
                image using the DiscRecording framework's content creation
                system.  This disk image will represent a data disc.
                drutil(1) can be used to make audio discs.

                source can either be a directory or a disk image.  The gener-
                ated image can later be burned using burn, or converted to
                another read-only format with convert.  By default, the
                filesystem will be readable on most modern computing plat-
                forms.  The generated filesystem is not intended for conver-
                sion to read/write, but can safely have its files copied to a
                read/write filesystem by ditto(8) or asr(8) (in file-copy
                mode).

                hdiutil supports generating El Torito-style bootable ISO9660
                filesystems, which is commonly used for booting x86-based
                hardware. The specification includes several emulation modes.
                By default, an El Torito boot image emulates either a 1.2MB,
                1.44MB, or 2.88MB floppy drive, depending on the size of the
                image.  Also available are "No Emulation" and "Hard Disk
                Emulation" modes, which allow the boot image to either be
                loaded directly into memory, or be virtualized as a parti-
                tioned hard disk, respectively. The El Torito options should
                not be used for data CDs.

                Filesystem options:
                -hfs    Generate an HFS+ filesystem.  This filesystem can be
                        present on an image simultaneously with an ISO9660 or
                        Joliet or UDF filesystem.  On operating systems that
                        understand HFS+ as well as ISO9660 and UDF, like Mac
                        OS 9 or Mac OS X, it is usually the preferred filesys-
                        tem.
                -iso    Generate an ISO9660 Level 2 filesystem with Rock Ridge
                        extensions.  This filesystem can be present on an
                        image simultaneously with an HFS+ or Joliet or UDF
                        filesystem.  ISO9660 is the standard cross-platform
                        interchange format for CDs and some DVDs, and is
                        understood by virtually all operating systems.  If an
                        ISO9660 or Joliet filesystem is present on a disk
                        image or CD, but not HFS+, Mac OS X will use the
                        ISO9660 (or Joliet) filesystem.
                -joliet Generate Joliet extensions to ISO9660.  This view of
                        the filesystem can be present on an image simultane-
                        ously with HFS+, and requires the presence of an
                        ISO9660 filesystem.  Joliet supports Unicode file-
                        names, but is only supported on some operating sys-
                        tems.  If both an ISO9660 and Joliet filesystem are
                        present on a disk image or CD, but not HFS+, Mac OS X
                        will prefer the Joliet filesystem.
                -udf    Generate a UDF filesystem. This filesystem can be
                        present on an image simultaneously with HFS+, ISO9660,
                        and Joliet. UDF is the standard interchange format for
                        DVDs, although operating system support varies based
                        on OS version and UDF version.

                By default, if no filesystem is specified, the image will be
                created with all four filesystems as a hybrid image.  When
                multiple filesystems are selected, the data area of the image
                is shared between all filesystems, and only directory informa-
                tion and volume meta-data are unique to each filesystem.  This
                means that creating a cross-platform ISO9660/HFS+ hybrid has a
                minimal overhead when compared to a single filesystem image.

                Other options (most take a single argument):
                -hfs-blessed-directory Path to directory which should be
                                       "blessed" for Mac OS X booting on the
                                       generated filesystem.  This assumes the
                                       directory has been otherwise prepared,
                                       for example with bless -bootinfo to
                                       create a valid BootX file.  (HFS+
                                       only).
                -hfs-openfolder        Path to a directory that will be opened
                                       by the Finder automatically.  See also
                                       the -openfolder option in bless(8)
                                       (HFS+ only).
                -hfs-startupfile-size  Allocate an empty HFS+ Startup File of
                                       the specified size, in bytes (HFS+
                                       only).

                -abstract-file         Path to a file in the source directory
                                       (and thus the root of the generated
                                       filesystem) for use as the
                                       ISO9660/Joliet Abstract file
                                       (ISO9660/Joliet).
                -bibliography-file     Path to a file in the source directory
                                       (and thus the root of the generated
                                       filesystem) for use as the
                                       ISO9660/Joliet Bibliography file
                                       (ISO9660/Joliet).
                -copyright-file        Path to a file in the source directory
                                       (and thus the root of the generated
                                       filesystem) for use as the
                                       ISO9660/Joliet Copyright file
                                       (ISO9660/Joliet).
                -application           Application string (ISO9660/Joliet).
                -preparer              Preparer string (ISO9660/Joliet).
                -publisher             Publisher string (ISO9660/Joliet).
                -system-id             System Identification string
                                       (ISO9660/Joliet).
                -keep-mac-specific     Expose Macintosh-specific files (such
                                       as .DS_Store) in non-HFS+ filesystems
                                       (ISO9660/Joliet).
                -eltorito-boot         Path to an El Torito boot image within
                                       the source directory. By default,
                                       floppy drive emulation is used, so the
                                       image must be one of 1200KB, 1440KB, or
                                       2880KB. If the image has a different
                                       size, either -no-emul-boot or
                                       -hard-disk-boot must be used to enable
                                       "No Emulation" or "Hard Disk Emulation"
                                       mode, respectively (ISO9660/Joliet).
                -hard-disk-boot        Use El Torito Hard Disk Emulation mode.
                                       The image must represent a virtual
                                       device with an MBR partition map and a
                                       single partition
                -no-emul-boot          Use El Torito No Emulation mode. The
                                       system firmware will load the number of
                                       sectors specified by -boot-load-size
                                       and execute it, without emulating any
                                       devices (ISO9660/Joliet).
                -no-boot               Mark the El Torito image as non-
                                       bootable. The system firmware can still
                                       create a virtual device backed by this
                                       data. This option is not recommended
                                       (ISO9660/Joliet).
                -boot-load-seg         For a No Emulation boot image, load the
                                       data at the specified segment address.
                                       This options is not recommended, so
                                       that the system firmware can use its
                                       default address (ISO9660/Joliet)
                -boot-load-size        For a No Emulation boot image, load the
                                       specified number of 512-byte emulated
                                       sectors into memory and execute it. By
                                       default, 4 sectors (2KB) will be loaded
                                       (ISO9660/Joliet).
                -eltorito-platform     Use the specified numeric platform ID
                                       in the El Torito Boot Catalog Valida-
                                       tion Entry or Section Header. Defaults
                                       to 0 to identify x86 hardware
                                       (ISO/Joliet).
                -eltorito-specification For complex layouts involving multiple
                                       boot images, a plist-formatted string
                                       can be provided, using either OpenStep-
                                       style syntax or XML syntax, represent-
                                       ing an array of dictionaries. Any of
                                       the El Torito options can be set in the
                                       sub-dictionaries and will apply to that
                                       boot image only. If
                                       -eltorito-specification is provided in
                                       addition to the normal El Torito com-
                                       mand-line options, the specification
                                       will be used to populate secondary non-
                                       default boot entries.
                -udf-version           Version of UDF filesystem to generate.
                                       This can be either "1.02" or "1.50".
                                       If not specified, it defaults to "1.50"
                                       (UDF).

                -default-volume-name   Default volume name for all filesys-
                                       tems, unless overridden.  If not speci-
                                       fied, defaults to the last path compo-
                                       nent of source.
                -hfs-volume-name       Volume name for just the HFS+ filesys-
                                       tem if it should be different (HFS+
                                       only).
                -iso-volume-name       Volume name for just the ISO9660
                                       filesystem if it should be different
                                       (ISO9660 only).
                -joliet-volume-name    Volume name for just the Joliet
                                       filesystem if it should be different
                                       (Joliet only).
                -udf-volume-name       Volume name for just the UDF filesystem
                                       if it should be different (UDF only).

                -hide-all              A glob expression of files and directo-
                                       ries that should not be exposed in the
                                       generated filesystems.  The string might
                                       need to be quoted to avoid shell expan-
                                       sion, and will be passed to glob(3) for
                                       evaluation.  Although this option can-
                                       not be used multiple times, an arbi-
                                       trarily complex glob expression can be
                                       used.
                -hide-hfs              A glob expression of files and directo-
                                       ries that should not be exposed via the
                                       HFS+ filesystem, although the data can 
                                       still be present for use by other
                                       filesystems (HFS+ only).
                -hide-iso              A glob expression of files and directo-
                                       ries that should not be exposed via the
                                       ISO filesystem, although the data can 
                                       still be present for use by other
                                       filesystems (ISO9660 only).  Per above,
                                       the Joliet hierarchy will supersede the
                                       ISO hierarchy when the hybrid is
                                       mounted as an ISO 9660 filesystem on
                                       Mac OS X.  Therefore, if Joliet is
                                       being generated (the default)
                                       -hide-joliet will also be needed to
                                       hide the file from mount_cd9660(8).
                -hide-joliet           A glob expression of files and directo-
                                       ries that should not be exposed via the
                                       Joliet filesystem, although the data
                                       can still be present for use by other
                                       filesystems (Joliet only).  Because OS
                                       X's ISO 9660 filesystem uses the Joliet
                                       catalog if it is available,
                                       -hide-joliet effectively supersedes
                                       -hide-iso when the resulting filesystem
                                       is mounted as ISO on OS X.
                -hide-udf              A glob expression of files and directo-
                                       ries that should not be exposed via the
                                       UDF filesystem, although the data can 
                                       still be present for use by other
                                       filesystems (UDF only).
                -only-udf              A glob expression of objects that
                                       should only be exposed in UDF.
                -only-iso              A glob expression of objects that
                                       should only be exposed in ISO.
                -only-joliet           A glob expression of objects that
                                       should only be exposed in Joliet.

                -print-size            Preflight the data and calculate an
                                       upper bound on the size of the image.
                                       The actual size of the generated image
                                       is guaranteed to be less than or equal
                                       to this estimate.
                -plistin               Instead of using command-line parame-
                                       ters, use a standard plist from stan-
                                       dard input to specific the parameters
                                       of the hybrid image generation.  Each
                                       command-line option should be a key in
                                       the dictionary, without the leading
                                       "-", and the value should be a string
                                       for path and string arguments, a number
                                       for number arguments, and a boolean for
                                       toggle options.  The source argument
                                       should use a key of "source" and the
                                       image should use a key of "output".

                If a disk image was specified for source, the image will be
                attached and paths will be evaluated relative to the mount-
                point of the image.  No absolute paths can be used in this
                case.  If source is a directory, all argument paths should
                point to files or directories either via an absolute path, or
                via a relative path to the current working directory.

                The volume name options, just like files in the filesystems,
                might need to be mapped onto the legal character set for a given
                filesystem or otherwise changed to obey naming restrictions.
                Use drutil(1) as drutil filename myname to see how a given
                string would be remapped.

                The -abstract-file, -bibliography-file, -and -copyright-file
                must exist directly in the source directory, not a sub-direc-
                tory, and must have an 8.3 name for compatibility with ISO9660
                Level 1.

     compact image
                scans the bands of a sparse (SPARSE or SPARSEBUNDLE) disk
                image containing an HFS filesystem, removing those parts of
                the image which are no longer being used by the filesystem.
                Depending on the location of files in the hosted filesystem,
                compact might not shrink the image.  For SPARSEBUNDLE
                images, completely unused band files are simply removed.

                Common options: -encryption, -stdinpass, -srcimagekey, -shadow
                and related, -puppetstrings, and -plist.

     info       display information about DiskImages.framework, the disk image
                driver, and any images that are currently attached.  hdiutil
                info accepts -plist.

     checksum image -type type
                Calculate the specified checksum on the image data, regardless
                of image type.

                Common options: -shadow and related, -encryption, -stdinpass,
                -srcimagekey, -puppetstrings, and -plist.

                type is one of:
                      UDIF-CRC32 - CRC-32 image checksum
                      UDIF-MD5 - MD5 image checksum
                      DC42 - Disk Copy 4.2
                      CRC28 - CRC-32 (NDIF)
                      CRC32 - CRC-32
                      MD5 - MD5
                      SHA - SHA
                      SHA1 - SHA-1
                      SHA256 - SHA-256
                      SHA384 - SHA-384
                      SHA512 - SHA-512

     chpass image
                change the passphrase for an encrypted image.  The default is
                to change the password interactively.

                Common options: -recover and -srcimagekey.  The options
                -oldstdinpass and -newstdinpass allow, in the order specified,
                the null-terminated old and new passwords to be read from the
                standard input in the same manner as with -stdinpass.

     erasekeys image
                securely overwrite keys used to access an encrypted image,
                quickly rendering the image completely inaccessible.  Once
                erasekeys has been run on an encrypted image, there is no fea-
                sible way to recover data from the image file.

                Common options: -plist and -quiet.

     unflatten image
                unflatten a UDIF disk image, creating an OS 9-style dual-fork
                image file (no XML metadata).  If the resource fork represen-
                tation of the metadata becomes greater than 16 MB, the opera-
                tion will fail with error -39 ("End of fork").

                Common options: -encryption, -stdinpass, and -srcimagekey.

     flatten image
                Flatten a read-only (or compressed) UDIF disk image into a
                single-fork file.  By default, metadata will be stored both as
                XML (for the kernel's use) and in an embedded resource fork
                (for OS X 10.1 and earlier).

                Common options: -srcimagekey, -encryption, and -stdinpass.
                Since images are created "flat" by default, flatten is only
                required if the UDIF has previously been unflattened.

                Other options:
                -noxml      don't embed XML data for in-kernel attachment.
                            The image will never attach in-kernel.
                -norsrcfork don't embed resource fork data.  The image will
                            not attach on OS X versions prior to OS X 10.2.

     fsid image
                Print information about file systems on a given disk image.
                As usual, image can be a /dev entry corresponding to a physi-
                cal disk.  See the NOTE ON DEV ENTRY ACCESS section.  More
                detailed information is presented for HFS file systems.

                Common options: -encryption, -stdinpass, -srcimagekey, and
                -shadow and related.

     mountvol dev_name
                mount the filesystem in dev_name using Disk Arbitration (simi-
                lar to diskutil(8)'s mount). XML output is available from
                -plist.  Note that mountvol (rather than mount, though it
                often works in OS X 10.5 and later) is the correct way to
                remount a volume after it has been unmounted by unmount.

                Prior to OS X 10.5, mount/attach would treat a /dev entry as a
                disk image to be attached (creating another /dev entry).  That
                behavior was undesirable.

     unmount volume [-force]
                unmount a mounted volume without detaching any associated
                image.  Volume is a /dev entry or mountpoint.  NOTE: unmount
                does NOT detach any disk image associated with the volume.
                Images are attached and detached; volumes are mounted and
                unmounted.  mountvol will remount a volume that has been
                unmounted by unmount.

                Options:
                -force   unmount filesystem regardless of open files on that
                         filesystem.  Similar to umount -f.

     imageinfo image
                Print out information about a disk image.

                Common options: -encryption, -stdinpass, -srcimagekey, -shadow
                and related, and -plist.

                Options are any of:
                -format   just print out the image format
                -checksum just print out the image checksum

     isencrypted image
                print a line indicating whether image is encrypted.  If it is,
                additional details are printed.

                Common options: -plist.

     plugins    print information about DiskImages framework plugins.  The
                user, system, local, and network domains are searched for
                plugins (i.e.  ~/Library/Plug-ins/DiskImages,
                /System/Library/Plug-ins/DiskImages,
                /Library/Plug-ins/DiskImages,
                /Network/Library/Plug-ins/DiskImages).

                Common options: -plist.

     internet-enable [-yes] | -no | -query image
                Enable or disable download post-processing (IDME).  -yes is
                the default.  When enabled, a browser (or Disk Copy 10.2.3+)
                will "unpack" the contents: the image's visible contents will
                be copied into the directory containing the image and the
                image will be put into the trash with IDME disabled.

                Common options: -encryption, -stdinpass, -srcimagekey, and
                -plist.

     resize size_spec image
                Resize a disk image or the containers within it.  For an image
                containing a trailing Apple_HFS partition, the default is to
                resize the image container, the partition, and the filesystem
                within it by aligning the end of the hosted structures with
                the end of the image.  hdiutil resize cannot resize filesys-
                tems other than HFS+ and its variants.

                resize can shrink an image so that its HFS/HFS+ partition can
                be converted to CD-R/DVD-R format and still be burned.
                hdiutil resize will not reclaim gaps because it does not move
                data.  diskutil(8)'s resize can move filesystem data which can
                help hdiutil resize create a minimally-sized image.  -fsargs
                can also be used to minimize filesystem gaps inside an image.

                resize is limited by the disk image container format (e.g.
                UDSP vs. UDSB), any partition scheme, the hosted filesystem,
                and the filesystem hosting the image.  In the case of HFS+
                inside of GPT inside of a UDRW on HFS+ with adequate free
                space, the limit is approximately 2^63 bytes.  Older images
                created with an APM partition scheme are limited by it to 2TB.
                Before OS X 10.4, resize was limited by how the filesystem was
                created (see hdiutil create -stretch).

                hdiutil burn does not burn Apple_Free partitions at the end of
                the devices, so an image with a resized filesystem can be
                burned to create a CD-R/DVD-R master that contains only the
                actual data in the hosted filesystem (assuming minimal data
                fragmentation).

                Common options: -encryption, -stdinpass, -srcimagekey, -shadow
                and related, and -plist.

                Size specifiers:
                -size ??b|??k|??m|??g|??t??p|??e
                -sectors sector_count | min
                                 Specify the number of 512-byte sectors to
                                 which the partition should be resized.  If
                                 this falls outside the mininum valid value or
                                 space remaining on the underlying file sys-
                                 tem, an error will be returned and the parti-
                                 tion will not be resized.  min automatically
                                 determines the smallest possible size.

                Other options:
                -imageonly       only resize the image file, not the parti-
                                 tion(s) and filesystems inside of it.
                -partitiononly   only resize a partition / filesystem in the
                                 image, not the image.  -partitiononly will
                                 fail if the new size won't fit inside the
                                 image.  On APM, shrinking a partition results
                                 in an explicit Apple_Free entry taking up the
                                 remaining space in the image.
                -partitionNumber partitionNumber
                                 specifies which partition to resize (UDIF
                                 only -- see HISTORY below).  partitionNumber
                                 is 0-based, but, per hdiutil pmap, partition
                                 0 is the partition map itself.

                -growonly        only allow the image to grow
                -shrinkonly      only allow the image to shrink
                -nofinalgap      allow resize to entirely eliminate the trail-
                                 ing free partition in an APM map.  Restoring
                                 such images to very old hardware can inter-
                                 fere with booting.

                -limits          Displays the minimum, current, and maximum
                                 sizes (in 512-byte sectors) for the image.
                                 In addition to any hosted filesystem con-
                                 straints, UDRW images are constrained by
                                 available disk space in the filesystem host-
                                 ing the image.  -limits does not modify the
                                 image.

     segment
                segment -o firstSegname -segmentCount #segs image [opts]
                segment -o firstSegname -segmentSize size image [opts]
                segment a NDIF or UDIF disk image.  Segmented images work
                around limitations in file size which are sometimes imposed by
                filesystems, network protocols, or media.  Note: whether or
                not the segments are encrypted is determined by the options
                passed to segment and not by the state of the source image.

                Common options: -encryption, -stdinpass, -srcimagekey,
                -tgtimagekey, -puppetstrings, and -plist.

                Options:
                -segmentCount segment_count
                             Specify the number of segments.  Only one of
                             -segmentCount or -segmentSize will be honored.
                -segmentSize segment_size
                             Specify the segment size in sectors or in the
                             style of mkfile(8) (here unqualified numbers are
                             still sectors).  If the original image size is
                             not an exact multiple of the segment size, the
                             last segment will be shorter than the others.
                             Only one of -segmentCount or -segmentSize will be
                             honored.  Segmenting read/write (UDRW) images is
                             not supported (as of OS X 10.3).

                -firstSegmentSize segment_size
                             Specify the first segment size in sectors in the
                             same form as for -segmentSize.  Used for multi-CD
                             restores.
                -restricted  Make restricted segments for use in multi-CD
                             restores.
                -ov          overwrite any existing files.

     pmap [options] image
                display the partition map of an image or device.  By default,
                this report includes starting offsets and significant amounts
                of free space.  image is either a plain or special file (for
                example, a /dev/disk entry).  See NOTE ON DEV ENTRY ACCESS.

                Common options: -encryption, -stdinpass, -srcimagekey, and
                -shadow and related.

                -simple       generate MediaKit's minimal report: basic parti-
                              tion types, names, and sizes in human-readable
                              units.
                -standard     generate MediaKit's standard report, which adds
                              partition offsets and uses 512-byte sectors.
                -complete     generate MediaKit's comprehensive report, with
                              end offsets, significant free space, etc.

                -endoffsets   indicate last block of each partition.
                -nofreespace  suppress all free space reporting.  Not valid
                              with -shims.
                -shims        report free space &lt; 32 sectors.
                -uuids        show per-instance UUIDs for each partition.  APM
                              does not store instance UUIDs so these will be
                              randomly generated for APM maps.

     udifrez [options] image
                embed resources (e.g. a software license agreement) in a disk
                image.

                You must specify one of the following options:
                -xml file
                     Copy resources from the XML in file.
                -rsrcfork file
                     Copy resources from file's resource fork.
                -replaceall
                     Delete all pre-existing resources in image.

     udifderez [options] image
                extract resources from image.

                Options:
                -xml    emit XML output (default)
                -rez    emit Rez format output

                Common options: -encryption, -stdinpass, and -srcimagekey.

EXAMPLES

     Verifying:
           hdiutil verify myimage.img
                 verifies an image against its internal checksum.

     Segmenting:
           hdiutil segment -segmentSize 10m -o /tmp/aseg 30m.dmg
                 creates aseg.dmg, aseg.002.dmgpart, and aseg.003.dmgpart

     Converting:
           hdiutil convert master.dmg -format UDTO -o master
                 converts master.dmg to a CD-R export image named master.cdr
           hdiutil convert /dev/disk1 -format UDRW -o devimage
                 converts the disk /dev/disk1 to a read/write device image
                 file.  authopen(1) will be used if read access to /dev/rdisk1
                 is not available.  Note use of the block-special device.

     Burning:
           hdiutil burn myImage.dmg
                 burns the image to optical media and verifies the burn.
           hdiutil burn myRawImage.cdr -noverifyburn -noeject
                 burns the image without verifying the burn or ejecting the
                 disc.  Volumes will be mounted after burning.

     Creating a 50 MB encrypted image:
           hdiutil create -encryption -size 50m e.dmg -fs HFS+J

     Creating a 50 MB encrypted image protected with public key only:
           hdiutil create -encryption -size 50m e.dmg -fs HFS+J \
               -pubkey F534A3B0C2AEE3B988308CC89AA04ABE7FDB5F30

     Creating a 50 MB encrypted image protected with public key and password:
           hdiutil create -encryption -size 50m e.dmg -fs HFS+J -agentpass \
               -pubkey F534A3B0C2AEE3B988308CC89AA04ABE7FDB5F30

     Note that these two -pubkey usage examples assume a certificate corre-
     sponding to this public key is currently in the user's keychain or smart
     card.  For additional information on smart card authorization setup see
     sc_autch(8).

     Creating an encrypted single-partition image without user interaction:
           printf pp|hdiutil create -encryption -stdinpass -size 9m sp.dmg

     Creating a "1 GB" SPARSE image (a 1 GB filesystem in a growable file):
           hdiutil create -type SPARSE -size 1g -fs HFS+ growableTo1g

     Creating a "1 GB" SPARSEBUNDLE (a 1 GB filesystem in a growable bundle):
           hdiutil create -type SPARSEBUNDLE -size 1g -fs HFS+ growableTo1g

     Creating a new mounted volume backed by an image:
           hdiutil create -volname Dick -size 1.3m -fs HFS+ -attach Moby.dmg

     Using a shadow file to attach a read-only image read-write to modify it,
     then convert it back to a read-only image. This method eliminates the
     time/space required to convert a image to read-write before modifying it.

           hdiutil attach -owners on Moby.dmg -shadow
           /dev/disk2   Apple_partition_scheme
           /dev/disk2s1 Apple_partition_map
           /dev/disk2s2 Apple_HFS               /Volumes/Moby

           ditto /Applications/Preview.app /Volumes/Moby
           hdiutil detach /dev/disk2
           hdiutil convert -format UDZO Moby.dmg -shadow

     Using makehybrid to create cross-platform data with files overlapping
     between filesystem views.  With these files:
           albumlist.txt song2.wma     song4.m4a     song6.mp3     song8.mp3
           song1.wma     song3.m4a     song5.mp3     song7.mp3

           hdiutil makehybrid -o MusicBackup.iso Music -hfs -iso -joliet \
               -hide-hfs 'Music/*.wma' -hide-joliet 'Music/{*.m4a,*.mp3}' \
               -hide-iso 'Music/*.{wma,m4a}'

     will create an image with three filesystems pointing to the same blocks.
     The HFS+ filesystem, typically only visible on Macintosh systems, will
     not include the .wma files, but will show the .m4a and .mp3 files. The
     Joliet filesystem will not show the .m4a and .mp3 files, but will show
     the .wma files. The ISO9660 filesystem, typically the default filesystem
     for optical media on many platforms, will only show the .mp3 files. All
     three filesystems will include the "albumlist.txt" files.

     Image from directory (new-style):
           hdiutil create -srcfolder mydir mydir.dmg

     Image from directory (10.1-style; of historical interest):
           du -s myFolder             # du(1) will count resource forks
           10542
           hdiutil create -sectors 10642 folder     # add ~1% for filesytem
           hdid -nomount folder.dmg
           ...
           /dev/disk1s2            Apple_HFS
           newfs_hfs -v myFolderImage /dev/rdisk1s2
           hdiutil detach disk1
           hdid folder.dmg
           ...
           /dev/disk1s2            Apple_HFS         /Volumes/myFolderImage
           sudo mount -u -t hfs -o perm /dev/disk1s2 /Volumes/myFolderImage
           # optionally enable owners; sudo unneeded if manually mounted

           ditto -rsrcFork myFolder /Volumes/myFolderImage
           hdiutil detach disk1s2          # all done
           hdiutil convert -format UDZO -o folder.z.dmg folder.dmg # compress

     Manually changing ownership settings of a read-only disk image:
           hdiutil attach myimage.dmg
           ...
           /dev/disk1s2            Apple_HFS         /Volumes/myVolume
           diskutil unmount disk1s2
           mkdir /Volumes/myVolume
           sudo mount -r -t hfs -o owners /dev/disk1s2 /Volumes/myVolume
           # -o owners is the default for manual mounts

     Forcing a known image to attach:
           hdiutil attach -imagekey diskimage-class=CRawDiskImage myBlob.bar

ENVIRONMENT

     The following environment variables affect hdiutil and DiskImages:

     com_apple_hdid_verbose
                enable -verbose behavior for attach.

     com_apple_hdid_debug
                enable -debug behavior for attach.

     com_apple_hdid_nokernel
                similar to -nokernel but works even with, for example, create
                -attach.

     com_apple_hdid_kernel
                attempt to attach in-kernel first (like attach -kernel). In OS
                X 10.4.x, in-kernel was the default behavior for UDRW and
                SPARSE images.  On OS X 10.5, these and other kernel-compati-
                ble images, including RAM-based images described in hdid(8),
                will attach with a user process unless attach -kernel is used
                or the corresponding variable is set.  If an image is not
                "kernel-compatible" and -kernel is specified, the attach will
                fail.  (WARNING: ram:// images currently use wired memory when
                attached in-kernel).

     com_apple_diskimages_insecureHTTP
                disable SSL peer verification the same way -insecurehttp does.
                Useful for clients of DiskImages such as asr(8) which don't
                support a similar command line option.

ERRORS

     DiskImages uses many frameworks and can encounter many error codes.  In
     general, it tries to turn these error numbers into localized strings for
     the user.  For background, intro(2) is a good explanation of our primary
     error domain: the BSD errno values.  For debugging, -verbose should gen-
     erally provide enough information to figure out what has gone wrong.  The
     following is a list of interesting errors that hdiutil can encounter:

     [ENXIO]            Device not configured.  This error is returned explic-
                        itly by DiskImages when its kernel driver or framework
                        helper cannot be contacted.  It also often shows up
                        when a device has been removed while I/O is still
                        active.  One common case of the helper not being found
                        is when Foundation's Distributed Objects RPC mechanism
                        cannot be configured.  D.O. doesn't work under dead
                        Mach bootstrap contexts such as can exist in a reat-
                        tached screen(1) session.  Root users can take advan-
                        tage of StartupItemContext(8) (in /usr/libexec) to
                        access the startup item Mach bootstrap context.

     [EINVAL]           Invalid argument.  This error is used in many contexts
                        and is often a clue that hdiutil's arguments are sub-
                        tly non-sensical (e.g. an invalid layout name passed
                        to create -layout).

     [EFBIG]            File too large.  DiskImages uses this error explicitly
                        when attempting to access a disk image over HTTP that
                        is too large for the server to support Range requests.
                        This error can also occur when the Resource fork of an
                        old-style UDIF overflows.

     [EAUTH]            Authentication error.  Used by DiskImages when
                        libcurl(3) is unable to verify its SSL peer or when
                        Security.framework indicates that the user failed to
                        enter the correct password.  See -insecurehttp and
                        -cacert for more information about verification of SSL
                        peers.

     [EBUSY]            Resource busy.  Used if necessary exclusive access
                        cannot be obtained.  This error often appears when a
                        volume can't be unmounted.

     [EAGAIN]           Resource temporarily unavailable.  As of OS X 10.5,
                        DiskImages uses reader/writer locks on its image files
                        to prevent images from being attached on more than one
                        machine at a time (e.g. over the network).  EAGAIN is
                        returned if the appropriate read or write lock can't
                        be obtained.

     EACCES vs. EPERM   EACCES and EPERM are subtly different.  The latter
                        "operation not permitted" tends to refer to an opera-
                        tion that cannot be performed, often due to an incor-
                        rect effective user ID.  On the other hand, "permis-
                        sion denied" tends to mean that a particular file
                        access mode prevented the operation.

USING PERSISTENT SPARSE IMAGES</pre>
<p> As of OS X 10.5, a more reliable, efficient, and scalable sparse format,
UDSB (SPARSEBUNDLE), is recommended for persistent sparse images as long
as a backing bundle (directory) is acceptable.  OS X 10.5 also introduced<br>
F_FULLFSYNC over AFP (on client and server), allowing proper journal
flushes for HFS+J-bearing images.  Critical data should never be stored
in sparse disk images on file servers that don't support F_FULLFSYNC.<br>
<br>
SPARSE (UDSP) images and shadow files were designed for intermediate use
when creating other images (e.g. UDZO) when final image sizes are
unknown.  As of OS X 10.3.2, partially-updated SPARSE images are properly
handled and are thus safe for persistent storage.  SPARSE images are not
recommended for persistent storage on versions of OS X earlier than
10.3.2 and should be avoided in favor of SPARSEBUNDLE images or UDRW<br>
images and resize.<br>
<br>
If more space is needed than is referenced by the hosted filesystem,
hdiutil resize or diskutil(8) resize can help to grow or shrink the
filesystem in an image.  compact reclaims unused space in sparse images.
Though they request that hosted HFS+ filesystems use a special "front
first" allocation policy, beware that sparse images can enhance the<br>
effects of any fragmentation in the hosted filesystem.<br>
<br>
To prevent errors when a filesystem inside of a sparse image has more
free space than the volume holding the sparse image, HFS volumes inside
sparse images will report an amount of free space slightly less than the
amount of free space on the volume on which image resides.  The image
filesystem currently only behaves this way as a result of a direct attach
action and will not behave this way if, for example, the filesystem is
unmounted and remounted.<br>
</p>
<h1> NOTE ON DEV ENTRY ACCESS<br>
</h1>
<blockquote>
<p> Since any /dev entry can be treated as a raw disk image, it is worth not-
ing which devices can be accessed when and how.  /dev/rdisk nodes are
character-special devices, but are "raw" in the BSD sense and force
block-aligned I/O.  They are closer to the physical disk than the buffer
cache.  /dev/disk nodes, on the other hand, are buffered block-special<br>
devices and are used primarily by the kernel's filesystem code.<br>
<br>
It is not possible to read from a /dev/disk node while a filesystem is
mounted from it, but anyone with read access to the appropriate
/dev/rdisk node can use hdiutil verbs such as fsid or pmap with it.  The
DiskImages framework will attempt to use authopen(1) to open any device
which it can't open (due to EACCES) for reading with open(2).  This might
cause apparent hangs while trying to access /dev entries while logged in
remotely (an authorization panel is waiting on console).<br>
<br>
Generally, the /dev/disk node is preferred for imaging devices (e.g.
convert or create -srcdevice operations), while /dev/rdisk is usable for
the quick pmap or fsid.  In particular, converting the blocks of a
mounted journaled filesystem to a read-only image will prevent the volume
in the image from mounting (the journal will be permanently dirty).<br>
</p>
</blockquote>
<h2> COMPATIBILITY<br>
</h2>
<blockquote>
<p> OS X 10.0 supported the disk images of Disk Copy 6 on Mac OS 9.  OS X
10.1 added sparse, encrypted, and zlib-compressed images.  These images
will not be recognized on OS X 10.0 (or will attach read/write, possibly
allowing for their destruction).  As the sparse, shadow, and encrypted
formats have evolved, switches have been added to facilitate the creation
of images that are compatible with older OS versions (at the expense of
the performance and reliability improvements offered by the format
enhancements).  In particular, sparse images should not be expected to
attach on versions of OS X older than that which created them.<br>
<br>
With OS X 10.2, the most common image formats went "in-kernel" (i.e. the
DiskImages kernel extension served them without a helper process), image
meta-data began being stored both as XML and in the embedded resource
fork, and the default Disk Copy.app "compressed" format became UDZO
(breaking compatibility with 10.0).  OS X 10.4 introduced bzip2 compression in the UDBZ format which provides smaller images (especially when
combined with makehybrid) at the expense of backwards compatibility.<br>
<br>
In OS X 10.4.7, the resource forks previously embedded in UDIF images
were abandoned entirely to avoid metadata length limitations imposed by
resource fork structures.  As a result, UDIF images created on 10.4.7 and
later will not, by default, be recognized by either OS X 10.1 or OS X
10.0.  flatten can be used to customize the type of metadata stored in
the image.<br>
<br>
OS X 10.5 introduced sparse bundle images which compact quickly but are
not recognized by previous OS versions.  OS X 10.6 removed support for
attaching SPARSEBUNDLE images from network file servers that don't support F_FULLFSYNC. OS X 10.7 removed double-click support for images using
legacy metadata; these can be rehabilitated using flatten and unflatten,
or simply convert.<br>
</p>
</blockquote>
<h2> History</h2>
<blockquote>
<p> Disk images were first invented to electronically store and transmit representations of floppy disks for manufacturing replication.  These images
of floppies are typically referred to as 'Disk Copy 4.2' images, in reference to the application that created and restored them to floppy disks.
Disk Copy 4.2 images were block-for-block representations of a floppy<br>
disk, with no notion of compression.  DART is a variant of the Disk Copy
4.2 format that supported compression.<br>
<br>
NDIF (New Disk Image Format) images were developed to replace the Disk
Copy 4.2 and DART image formats and to support images larger than a
floppy disk.  With NDIF and Disk Copy version 6, images could be"attached" as mass storage devices under Mac OS 9.  Apple Data Compression (ADC) -- which carefully optimizes for fast decompression -- was<br>
used to compress images that were typically created once and restored
many times during manufacturing.<br>
<br>
UDIF (Universal Disk Image Format) device images picked up where NDIF
left off, allowing images to represent entire block devices and all the
data therein: DDM, partition map, disk-based drivers, etc.  For example,
it can represent bootable CDs which can then be replicated from an image.<br>
To ensure single-fork files (NDIF was dual-fork), it began embedding its
resource fork in the data fork.  UDIF is the native image format for OS
X.<br>
<br>
Raw disk images from other operating systems (e.g. .iso files) will be
recognized as disk images and can be attached and mounted if OS X recognizes the filesystems.  They can also be burned with hdiutil burn.<br>
</p>
</blockquote>
<h2> What's New</h2>
<blockquote>
<p> In macOS 10.12 Apple will provide an updated <span class="code">hdutil</span> command able to work with the new file system. </p>
<p>OS X 10.7 added the ability to quickly render encrypted images inaccessible using the new erasekeys verb, which saves time versus securely overwriting the entire image.<br>
<br>
In OS X 10.6, pmap was rewritten to use MediaKit's latest reporting routines so that it can properly support GPT partition maps.  Also -debug
now implies -verbose for all verbs.<br>
<br>
OS X 10.5 changed the behavior of attach when run on an existing image or
/dev node: if the image was attached but no volume was mounted, the volume would be mounted.  Prior systems would return the /dev without mounting the volume.  This change effectively removes the ability to create a
second /dev node from an existing one.</p>
</blockquote>
<p class="quote"><i>“The beginning of wisdom is to call things by their right names” - Chinese Proverb</i></p>
<p><b>Related:</b></p>
<p><a href="asr.html">asr</a> - Apple Software Restore<br>
<a href="dd.html"> dd</a> - Convert and copy a file, clone disks<br>
<a href="diskutil.html">diskutil</a> - Disk utilities - Format, Verify, Repair<br>
<a href="ditto.html">ditto</a> - Copy files and folders<br>
authopen(1), hdid(8), ioreg(8), drutil(1),      msdos.util(8), hfs.util(8), diskarbitrationd(8),      /System/Library/CoreServices/DiskImageMounter.app.</p><!-- #BeginLibraryItem "/Library/foot_osx.lbi" --><p>
<!-- OSX300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="1823340303"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="hdiutil.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->
