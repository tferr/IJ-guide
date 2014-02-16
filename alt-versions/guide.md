> Foreword
>
> The *ImageJ User Guide* provides a detailed overview of ImageJ (and
> inherently ), the standard in scientific image analysis (*see*
> [infobox:focus] ).
>
> It was thought as a comprehensive, fully-searchable, self-contained,
> annotatable manual (*see* ). A HTML version is also available as well
> as printer-friendly booklets (*see* ). Its latest version can always
> be obtained from <http://imagej.nih.gov/ij/docs/guide>. The source
> files are available through a Git version control repository at
> <http://fiji.sc/guide.git>.
>
> Given ImageJ’s heavy development this guide will always remain
> incomplete. All ImageJ users and developers are encouraged to
> contribute to the ImageJ documentation resources (*see* ).

[listoffeatures]

[noteworthylist]

[macrolistingslist]

Guide Formats[sec:Guide-Formats] {#guide-formatssecguide-formats .unnumbered}
================================

This guide is available in the following formats:

Optimized for electronic viewing and highly enriched in hypertext links
(*see* ). Available at
<http://imagej.nih.gov/ij/docs/guide/user-guide.pdf>.

available online at <http://imagej.nih.gov/ij/docs/guide/>. For offline
usage a downloadable ZIP archive is also available at
<http://imagej.nih.gov/ij/docs/user-guide.zip>.

Two-sided booklets that can be printed on a duplex unit printer by
setting the automatic duplex mode to “short edge binding”. Two formats
are available: A4
(<http://imagej.nih.gov/ij/docs/guide/user-guide-A4booklet.pdf>) and
letter size paper
(<http://imagej.nih.gov/ij/docs/guide/user-guide-USbooklet.pdf>).

Conventions Used in this Guide[sec:Guide-Conventions] {#conventions-used-in-this-guidesecguide-conventions .unnumbered}
=====================================================

Throughout the guide, internal links are displayed in gray (e.g., Part
). Links to external URLs, such as the [ImageJ
website](http://imagej.nih.gov/ij/), <http://imagej.nih.gov/ij/>, are
displayed in dark blue.

ImageJ commands are typed in typeface with respective shortcut keys
flanked by square brackets (e.g.: ). As explained in , this notation
implies Shift-modifiers (i.e., means pressing , only the key) and
assumes that *Require control key for shortcuts *in is unchecked. Note
that references to the key include the key of Macintosh keyboards.

Useful tips and reminders are placed in ‘Noteworthy notes’ numbered with
upper case roman numerals (e.g., [infobox:Frontmost-window] ). The full
list of these notes is available .

Filenames, directories and file extensions are typed in monospaced font
marked by a related icon, e.g., file in folder .

Macro functions and code snippets are typed in monospaced font, e.g.,
`resetMinAndMax()`. Scripts and macros are numbered with arabic numerals
included in parentheses (e.g., ) and typeset with the same syntax markup
provided by the . The full list of macro listings is available .

Selected highlights of version<span>1.46r</span> are listed and flagged
with colored marginal notes. These should be interpreted as:

This part provides basic information on ImageJ installation,
troubleshooting and update strategies. It discusses and as well as
third-party software related to ImageJ. Being impossible to document all
the capabilities of ImageJ without exploring technical aspects of image
processing, external resources allowing willing readers to know more
about digital signal processing are also provided.

Introduction[sec:What-is-ImageJ?]
=================================

ImageJ is a [public domain](http://rsb.info.nih.gov/ij/disclaimer.html)
Java image processing and analysis program inspired by [NIH
Image](http://rsb.info.nih.gov/nih-image/) for the Macintosh. It runs,
either as an online applet or as a downloadable application, on any
computer with a Java1.5 or later virtual machine. [Downloadable
distributions](http://imagej.nih.gov/ij/download.html) are available for
Windows, Mac OSX and Linux. It can display, edit, analyze, process, save
and print 8–bit, 16–bit and 32–bit images. It can read many image
formats including TIFF, GIF, JPEG, BMP, DICOM, FITS and ‘raw’. It
supports ‘stacks’ (and hyperstacks), a series of images that share a
single window. It is multithreaded, so time-consuming operations such as
image file reading can be performed in parallel with other
operations[^1].

It can calculate area and pixel value statistics of user-defined
selections. It can measure distances and angles. It can create density
histograms and line profile plots. It supports standard image processing
functions such as contrast manipulation, sharpening, smoothing, edge
detection and median filtering.

It does geometric transformations such as scaling, rotation and flips.
Image can be zoomed up to 32:1 and down to 1:32. All analysis and
processing functions are available at any magnification factor. The
program supports any number of windows (images) simultaneously, limited
only by available memory.

Spatial calibration is available to provide real world dimensional
measurements in units such as millimeters. Density or gray scale
calibration is also available.

ImageJ was designed with an open architecture that provides
extensibility via Java plugins. Custom acquisition, analysis and
processing plugins can be developed using ImageJ’s built in editor and
Java compiler. User-written plugins make it possible to solve almost any
image processing or analysis problem.

Being public domain open source software, an ImageJ user has the [four
essential
freedoms](http://wikieducator.org/The_right_license/The_essential_freedoms)
defined by the Richard Stallman in 1986: 1) The freedom to run the
program, for any purpose; 2) The freedom to study how the program works,
and change it to make it do what you wish; 3) The freedom to
redistribute copies so you can help your neighbor; 4) The freedom to
improve the program, and release your improvements to the public, so
that the whole community benefits.

ImageJ is being developed on Mac OSX using its built in editor and Java
compiler, plus the *BBEdit* editor and the *Ant* build tool. The source
code is freely
[available](http://imagej.nih.gov/ij/developer/source/index.html). The
author, Wayne Rasband ([](mailto:wsr@nih.gov)), is a Special Volunteer
at the National Institute of Mental Health, Bethesda, Maryland, USA.

Installing and Maintaining ImageJ[sec:Updating-ImageJ]
======================================================

ImageJ can be downloaded from <http://imagej.nih.gov/ij/download.html>.
Details on how to install ImageJ on
[Linux](http://imagej.nih.gov/ij/docs/install/linux.html), [Mac OS
9](http://imagej.nih.gov/ij/docs/install/mac.html), [Mac OS
X](http://imagej.nih.gov/ij/docs/install/osx.html) and
[Windows](http://imagej.nih.gov/ij/docs/install/windows.html)
@C-WindowsInstaller are available at
<http://imagej.nih.gov/ij/docs/install/> ( command). Specially useful
are the platform-specific *Troubleshooting* and *Known Problems
*sections. installation is described at
<http://fiji.sc/wiki/index.php/Downloads>.

The downloaded package may not contain the latest bug fixes so it is
recommended to upgrade ImageJ right after a first installation. Updating
IJ consists only of running , which will install the latest in the
ImageJ folder (on Linux and Windows) or inside the ImageJ.app (on Mac
OSX).

can be used to upgrade (or downgrade) the file to *release updates* or
*daily builds*. Release updates are announced frequently on the [IJ news
website](http://imagej.nih.gov/ij/notes.html) and are labelled
alphabetically (e.g., v.1.43m). Typically, these releases contain
several new features and bug fixes, described in detail on the [ImageJ
News page](http://imagej.nih.gov/ij/notes.html). *Daily builds,* on the
other hand, are labelled with numeric sub-indexes (e.g., v.1.43n4) and
are often released without documentation. Nevertheless, if available,
release notes for daily builds can be found at
<http://imagej.nih.gov/ij/source/release-notes.html>. When a release
cycle ends (v.1.42 ended with 1.42q, v.1.43 with 1.43u, etc.) an
*installation package *is created, downloadable from
<http://imagej.nih.gov/ij/download.html>. Typically, this package is
bundled with a small list of add-ons (, and ).

ImageJDistributions[sec:ImageJ-Distributions]
---------------------------------------------

ImageJ alone is not that powerful: it’s real strength is the vast
repertoire of that extend ImageJ’s functionality beyond its basic core.
The many hundreds, probably thousands, freely available plugins from
contributors around the world play a pivotal role in ImageJ’s success
@Collins:2007p13684. Running , however, will not update any of the
plugins you may have installed[^2].

ImageJ add-ons (, and ) are available from several sources ([ImageJ’s
plugins page](http://imagej.nih.gov/ij/plugins/) <span>[</span>, [ImageJ
Information and Documentation
Portal](http://imagejdocu.tudor.lu/doku.php?id=plugin:start) and [Fiji’s
webpage](http://fiji.sc/wiki/index.php/Category:Plugins), among others)
making manual updates of a daunting task. This reason alone, makes it
extremely convenient the use of bundled with a pre-organized collection
of add-ons.

Below is a list of the most relevant projects that address the seeming
difficult task of organizing and maintaining ImageJ beyond its basics.
If you are a life scientist and have doubts about which distribution to
choose you should opt for . It is heavily maintained, offers an
automatic updater, improved scripting capabilities and ships with
powerful plugins. More specialized adaptations of ImageJ are discussed
in .

### Fiji[sub:Fiji-intro] {#fijisubfiji-intro .unnumbered}

[Fiji](http://fiji.sc/) (*Fiji Is Just ImageJ—Batteries included*) is a
distribution of ImageJ together with Java, Java 3D and several plugins
organized into a coherent menu structure. Citing its developers, “Fiji
compares to ImageJ as Ubuntu compares to Linux”. The main focus of Fiji
is to assist research in life sciences, targeting image registration,
stitching, segmentation, feature extraction and 3D visualization, among
others. It also supports many scripting languages (BeanScript, Clojure,
Jython, Python, Ruby, *see* ). Importantly, Fiji ships with a
[convenient updater](http://fiji.sc/wiki/index.php/Update_Fiji) that
knows whether your files are up-to-date, obsolete or locally modified.
[Comprehensive
documentation](http://fiji.sc/wiki/index.php/Documentation) is available
for most of its plugins. The Fiji project was presented publicly for the
first time at the [ImageJ User and Developer
Conference](http://imagejconf.tudor.lu/doku.php) in November 2008.

### MBF ImageJ[sub:MBFImageJintro] {#mbfimagejsubmbfimagejintro .unnumbered}

The [MBF ImageJ bundle](http://www.macbiophotonics.ca/imagej/) or
*ImageJ for Microscopy* (formerly
[WCIF-ImageJ](http://www.uhnres.utoronto.ca/facilities/wcif/imagej/))
features a collection of plugins and macros, collated and organized by
Tony Collins at the MacBiophotonics facility, McMaster University. It is
accompanied by a [comprehensive
manual](http://www.macbiophotonics.ca/imagej/) describing how to use the
bundle with light microscopy image data. It is a great resource for
microscopists but is not maintained actively, lagging behind the
development of core ImageJ.

Note that you can add plugins from MBF ImageJ to Fiji, combining the
best of both programs. Actually, you can use multiple ImageJ
distributions simultaneously, assemble your own ImageJ bundle by
gathering the plugins that best serve your needs (probably, someone else
at your institution already started one?) or create symbolic links to
share plugins between different installations.

Related Software[sub:Related-Software]
--------------------------------------

### Software Packages Built on Top of ImageJ[sub:Other-Software-Packages]

<span>Bio7</span>
:   [Bio7](http://bio7.org/) is an integrated development environment
    for ecological modeling with a main focus on individual based
    modeling and spatially explicit models. Bio7 features: Statistical
    analysis (using R); Spatial statistics; Fast communication between R
    and Java; BeanShell and Groovy support; Sensitivity analysis with an
    embedded flowchart editor and creation of 3D OpenGL (Jogl) models
    (*see also* RImageJ in ).

<span>BoneJ</span>
:   [BoneJ](http://bonej.org/) is a collection of tools for trabecular
    geometry and whole bone shape analysis.

<span>$\micro$Manager</span>
:   [Micro-Manager](http://www.micro-manager.org/) is a software package
    for control of automated microscopes. It lets you execute common
    microscope image acquisition strategies such as time-lapses,
    multi-channel imaging, z-stacks, and combinations thereof.
    $\micro$Manager works with microscopes from all four major
    manufacturers, most scientific-grade cameras and many peripherals
    used in microscope imaging.

<span>MRI–CIA</span>
:   [MRI Cell Image Analyzer](http://www.mri.cnrs.fr/index.php?m=38),
    developed by the Montpellier RIO Imaging facility (CNRS), is a rapid
    image analysis application development framework, adding visual
    scripting interface to ImageJ’s capabilities. It can create batch
    applications as well as interactive applications. The applications
    include the topics DNA combing, quantification of stained proteins
    in cells, comparison of intensity ratios between nuclei and
    cytoplasm and counting nuclei stained in different channels”.

<span>ObjectJ</span>
:   [ObjectJ](http://simon.bio.uva.nl/objectj/index.html), the successor
    of
    [object-image](http://simon.bio.uva.nl/Object-Image/object-image.html),
    supports graphical vector objects that non-destructively mark images
    on a transparent layer. Vector objects can be placed manually or by
    macro commands. Composite objects can encapsulate different
    color-coded marker structures in order to bundle features that
    belong together. ObjectJ provides back-and-forth navigation between
    results and images. The results table supports statistics, sorting,
    color coding, qualifying and macro access.

<span>SalsaJ</span>
:   [SalsaJ](http://www.euhou.net/index.php?option=com_content&task=view&id=7&Itemid=9)
    is a student-friendly software developed specifically for the
    [EU-HOU project](http://www.euhou.net/). It is dedicated to image
    handling and analysis of astronomical images in the classroom.
    SalsaJ has been translated into several languages.

<span>[misc:TrakEM2]TrakEM2</span>
:   [TrakEM2](http://www.ini.uzh.ch/~acardona/trakem2.html) is a program
    for morphological data mining, three-dimensional modeling and image
    stitching, registration, editing and annotation @Cardona:2010p18306.
    TrakEM2 is [distributed with
    Fiji](http://fiji.sc/wiki/index.php/TrakEM2) and [capable
    of](http://www.ini.uzh.ch/~acardona/trakem2_manual.html):

    <span>3D modeling</span>
    :   Objects in 3D, defined by sequences of contours, or profiles,
        from which a skin, or mesh, can be constructed, and visualized
        in 3D.

    <span>Relational modeling</span>
    :   The extraction of the map that describes links between objects.
        For example, which neuron contacts which other neurons through
        how many and which synapses.

### ImageJ Interoperability[sec:ImageJ-Interoperability]

Several packages exist that allow ImageJ to interact with other
applications/environments:

<span>Bitplane Imaris</span>
:   [ImarisXT](http://www.bitplane.com/go/products/imarisxt) can load
    and execute ImageJ plugins.
    [bpImarisAdapter](http://www.bitplane.com/go/products/imarisxt/xtensions/imagej)
    (Windows only and requiring valid licenses for Imaris and ImarisXT)
    allows the exchange of images between Imaris and ImageJ.

<span>CellProfiler</span>
:   [CellProfiler](http://www.cellprofiler.org/) @Carpenter:2006p1986
    features
    [RunImageJ](http://cellprofiler.org/CPmanual/RunImageJ.html), a
    module that allows ImageJ plugins to be run in a CellProfiler
    pipeline.

<span>Icy</span>
:   [Icy](http://www.bioimageanalysis.org/icy/), an open source
    community software for bio-imaging, executes ImageJ plugins with
    almost 100% plugin compatibility.

<span>Knime</span>
:   [Knime](http://knime.org/) (Konstanz Information Miner) contains
    several image processing nodes
    ([KNIP](http://tech.knime.org/community/image-processing)) that are
    capable of executing ImageJ plugins and macros.

<span>Open Microscopy Environment</span>
:   All [Open Microscopy Environment](http://www.openmicroscopy.org/)
    projects such as
    [Bio-Formats](http://www.openmicroscopy.org/site/products/bio-formats),
    [VisBio](http://www.openmicroscopy.org/site/products/visbio) and
    [OMERO](http://www.openmicroscopy.org/site/products/omero) integrate
    well with ImageJ.

<span>RImageJ — R bindings for ImageJ</span>
:   Bindings between ImageJ and [R (GNU S)](http://www.r-project.org/) —
    The free software environment for statistical computing and
    graphics. The documentation for RImageJ is available at
    <http://cran.r-project.org/web/packages/RImageJ/RImageJ.pdf> (*see
    also* Bio7 in ).

<span>MIJ — Matlab–ImageJ bi-directional communication</span>
:   A Java package for bi-directional data exchange between Matlab and
    ImageJ, allowing to exchange images between the two imaging
    software. MIJ also allows MATLAB to access all built-in functions of
    ImageJ as well as third-party ImageJ plugins. The developers provide
    more information on the [MIJ](http://bigwww.epfl.ch/sage/soft/mij/)
    and [Matlab File
    Exchange](http://www.mathworks.com/matlabcentral/fileexchange/32344-hardware-accelerated-3d-viewer-for-matlab)
    websites. features <span>`Miji.m`</span>, which makes even more
    convenient to use the libraries and functions provided by Fiji’s
    components from within Matlab.

ImageJ2[sub:ImageJ2intro]
-------------------------

[ImageJDev](http://imagejdev.org/) is a [federally
funded](http://imagejdev.org/funding),
[multi-institution](http://imagejdev.org/collaborators) project
dedicated to the development of the next-generation version of ImageJ:
“ImageJ2”. ImageJ2 is a complete rewrite of ImageJ, that includes the
current, stable version ImageJ (“ImageJ1”) with a compatibility layer so
that old-style plugins and macros can run the same as they currently do
in ImageJ1. Below is a [summary](http://imagejdev.org/aims) of the
[ImageJDev](http://imagejdev.org/) project aims:

-   To create the next generation version of ImageJ and improve its core
    architecture based on the needs of the community.

-   To ensure ImageJ remains useful and relevant to the broadest
    possible community, maintaining backwards compatibility with ImageJ1
    as close to 100% as possible.

-   Expand functionality by interfacing ImageJ with existing open-source
    programs.

-   To lead ImageJ development with a clear vision, avoiding duplication
    of efforts

-   To provide a central online resource for ImageJ: program downloads,
    a plugin repository, developer resources and more.

Be sure to follow the ImageJ2 [project
news](http://imagejdev.org/recent_changes) and the [ImageDev
blog](http://imagejdev.org/blog) for updates on this exciting project.

Getting Help[sec:Help-Resources]
================================

Help on Image Analysis
----------------------

Below is a list of online resources (in no particular order) related to
image processing and scientific image analysis, complementing the list
of [external resources on the IJ web
site](http://imagej.nih.gov/ij/links.html).

### Ethics in Scientific Image Processing {#ethics-in-scientific-image-processing .unnumbered}

-   [Online learning Tool for Research Integrity and Image
    Processing](http://www.ori.dhhs.gov/education/products/RIandImages/default.html)\
    This website, created by the [Office of Research
    Integrity](http://ori.dhhs.gov/), explains what is appropriate in
    image processing in science and what is not.

-   [Digital Imaging: Ethics (at the Cellular Imaging Facily Core,
    SEHSC)](http://swehsc.pharmacy.arizona.edu/exppath/micro/digimage_ethics.php)\
    This website, compiled by Douglas Cromey at the University of
    Alabama – Birmingham, discusses thoroughly the topic of digital
    imaging ethics. It is recommended for all scientists. The website
    contains links to several external resources, including:

    1.  [What’s in a picture? The temptation of image
        manipulation](http://www.jcb.org/cgi/reprint/166/1/11) (2004) M
        Rossner and K M Yamada, J Cell Biology 166(1):11–15,
        doi:10.1083/jcb.200406019

    2.  [Not
        picture-perfect](http://www.nature.com/nature/journal/v439/n7079/full/439891b.html)
        (2006), Nature 439, 891–892, doi:10.1038/439891b.

### Scientific Image Processing[sub:IP-Resources] {#scientific-image-processingsubip-resources .unnumbered}

-   [What you need to know about scientific image
    processing](http://fiji.sc/wiki/index.php/IP_Principles)\
    Simple and clear, this webpage explains basic aspects of scientific
    image processing.

-   [imagingbook.com](http://www.imagingbook.com)\
    Web site of *Digital Image Processing: An Algorithmic Introduction
    using Java* by Wilhelm Burger and Mark Burge @Burger:2008p14082.
    This technical book provides a modern, self-contained, introduction
    to digital image processing techniques. Numerous complete Java
    implementations are provided, all of which work within ImageJ.

-   [Hypermedia Image Processing Reference
    (HIPR2)](http://homepages.inf.ed.ac.uk/rbf/HIPR2/)\
    Developed at the Department of Artificial Intelligence in the
    University of Edinburgh, provides on-line reference and tutorial
    information on a wide range of image processing operations.

-   [IFN
    wikipage](https://ifn.mpi-cbg.de/wiki/ifn/index.php/Imaging_Facility_Network)\
    The Imaging Facility Network (IFN) in Biopolis Dresden provides
    access to advanced microscopy systems and image processing. The
    website hosts high quality [teaching
    material](https://ifn.mpi-cbg.de/wiki/ifn/index.php/Teaching_Material)
    and useful links to external resources.

-   [stereology.info](http://www.stereology.info/)\
    Stereology Information for the Biological Sciences, designed to
    introduce both basic and advanced concepts in the field of
    stereology.

Help on ImageJ[sub:Getting-Help]
--------------------------------

Below is a list of the ImageJ help resources that complement this guide
(*see* ). Specific documentation on advanced uses of ImageJ (macro
programming, plugin development, etc.) is discussed in .

1.  The ImageJ [online documentation
    pages](http://imagej.nih.gov/ij/docs/)\
    Can be accessed via the command.

2.  The webpage:\
    <http://fiji.sc/>

3.  The ImageJ Information and Documentation Portal (ImageJ wikipage):\
    <http://imagejdocu.tudor.lu/doku.php>

4.  Video tutorials on the ImageJ Documentation Portal and the Fiji
    YouTube channel:\
    [http://imagejdocu.tudor.lu/doku.php?id=video:start&s[]=video](http://imagejdocu.tudor.lu/doku.php?id=video:start&s[]=video)
    and <http://www.youtube.com/user/fijichannel>. New ImageJ users will
    probably profit from [Christine Labno’s video
    tutorial](http://imagejdocu.tudor.lu/doku.php?id=video:beginner_help:imagej_beginner_s_tutorial).

5.  The ImageJ for Microscopy manual\
    <http://www.macbiophotonics.ca/imagej/>

6.  Several online documents, most of them listed at:\
    <http://imagej.nih.gov/ij/links.html> and
    <http://imagej.nih.gov/ij/docs/examples/>

7.  Mailing lists:

    1.  **ImageJ** — <http://imagej.nih.gov/ij/list.html>\
        General user and developer discussion about ImageJ. Can be
        accessed via the command. This list is also mirrored at
        [Nabble](http://imagej.1557.n6.nabble.com/) and
        [Gmane](http://dir.gmane.org/gmane.comp.java.imagej). You may
        find it easier to search and browse the list archives on these
        mirrors. Specially useful are the [RSS
        feeds](feed://rss.gmane.org/topics/excerpts/gmane.comp.java.imagej)
        and the* [frames and
        threads](http://news.gmane.org/gmane.comp.java.imagej)* view
        provided by Gmane.

    2.  **Fiji users **— <http://groups.google.com/group/fiji-users>\
        For user discussion specific to (rather than core ImageJ).

    3.  **Fiji-devel** — <http://groups.google.com/group/fiji-devel>\
        For developer discussion specific to Fiji.

    4.  **ImageJ-devel** —
        <http://imagejdev.org/mailman/listinfo/imagej-devel>\
        For communication and coordination of the ImageJDev project.

    5.  **Dedicated mailing lists** for ImageJ related projects\
        Described at <http://imagejdev.org/mailing-lists> .

### Using Mailing-lists {#using-mailing-lists .unnumbered}

If you are having problems with ImageJ, you should inquiry about them in
the appropriated list. The ImageJ mailing list is an unmoderated forum
subscribed by a knowledgeable worldwide user community with
$\thickapprox$2000 advanced users and developers. To have your questions
promptly answered you should consider the following:

1.  Read the documentation files (described earlier in this section)
    before posting. Because there will always be a natural lag between
    the implementation of key features and their documentation it may be
    wise to check briefly the ImageJ news website ().

2.  Look up the mailing list archives (). Most of your questions may
    have already been answered.

3.  If you think you are facing a bug try to upgrade to the latest
    version of ImageJ (). You should also check if you are running the
    latest version of the Java Virtual Machine for your operating
    system. Detailed instructions on how to submit a bug report are
    found at <http://imagej.nih.gov/ij/docs/faqs.html#bug>.

4.  Remember that in most cases you can find answers within your own
    ImageJ installation without even connecting to the internet since
    the heuristics for finding commands or writing macros have been
    significantly improved in later versions (*see* and ).

5.  As with any other mailing list, you should always follow basic
    [netiquette](http://en.wikipedia.org/wiki/Netiquette), namely:

    1.  Use descriptive subject lines – *Re: Problem with Image\>Set
        Scale command *is much more effective than a general* Re:
        Problem.*

    2.  Stay on topic – Do not post off-topic messages, unrelated to the
        message thread.

    3.  Be careful when sending attachments – Refrain from attaching
        large files. Use, e.g., a [file hosting
        service](http://en.wikipedia.org/wiki/File_hosting_service#Comparison_of_notable_file_hosting_services)
        instead.

    4.  Edit replies – You should include only the minimum content that
        is necessary to provide a logical flow from the question to the
        answer, i.e., quote only as much as absolutely necessary and
        relevant.

This part introduces some basic aspects of ImageJ so that you can use
the software more efficiently. It also introduces some important terms
and concepts used throughout this guide. You may skip it if you already
use the program efficiently and are familiar with terms such as , , , or
.

Using Keyboard Shortcuts[sub:Using-Shortcuts]
=============================================

You’ll learn more and more shortcut keys as you use ImageJ, because
(almost) all shortcuts are listed throughout ImageJ menus. Similarly, in
this guide each command has its shortcut key listed on its name (flanked
by square brackets). Please note that the notation for these
key-bindings is case sensitive, i.e., Shift-modifiers are not explicitly
mentioned (a capital means ) and assumes that *Require control key for
shortcuts *in is unchecked (i.e., except when using the IJ or the , you
won’t have to hold down the Control key to use menu shortcuts). For
example, the command can be evoked by or if *Require control key for
shortcuts *is checked. The full list of ImageJ shortcuts (*see* ) can be
retrieved at any time using the command.

There are three modifier keys in ImageJ:


(**Command Key** on Apple keyboards) Denoted by ‘Ctrl’ or in this
document. Although a control key is typically present on Apple
keyboards, on a Macintosh computer running ImageJ the Command key
replaces the functionality of the Control key of other operating
systems. For sake of simplification, ‘Ctrl’ will always refer to both
throughout this guide.

Denoted by ‘Shift’ or in this document.

Denoted by ‘Alt’ or in this document. This is also the ‘Option’ or
‘Meta’ key on many keyboards. In ImageJ, it is also used to type special
unit symbols such as $\micro$ () or $\angstrom$ ().

In ImageJ, all operations are performed on the active (frontmost) image
(which has its title bar highlighted). If a window is already open it
will activate when its opening command is re-run, e.g., if the B&C
window is already opened (), pressing its keyboard shortcut ( ) will
activate it.

Pressing on any image will bring the to the foreground. In addition, it
is also possible to permanently place the main window above all other
windows (*see* ).

Finding Commands[sec:Finding-Commands]
======================================

Navigating through the extensive list of ImageJ commands, macros and
plugins may be quite cumbersome. Through its built-in Command
Finder/Launcher@C-ComandFinder, ImageJ offers an expedite alternative
that allows you to retrieve commands extremely fast: .

In addition, ImageJ features a find function that locates macros,
scripts and plugins source () files on your computer: the command.
Because most of IJ source files contain circumstanced comments, you can
use this utility to retrieve files related not only to a image
processing routine (e.g.,* background *or* co-localization*) but also to
a practical context such as *radiogram*, *cell* or *histology*. Indeed,
ImageJ source files contain detailed annotations useful to both
developers and regular users that want to know more about ImageJ
routines and algorithms.

and are described in detail in .

![image](images/CommandFinderAndSearch)

Undo and Redo[sec:Undo-and-Redo]
================================

Probably the first thing you will notice is that ImageJ does not have a
large undo/redo buffer. Undo () is currently limited to the most recent
image editing/filtering operation. With time you will appreciate that
this is necessary to minimize memory overhead. Nevertheless, with IJ1.45
and later, is, in most cases, undoable and can be applied to multiple
images if *Keep multiple undo buffers *is checked in

If you cannot recover from a mistake, you can always use to reset the
image lo its last saved state. For selections, can be used to recover
any misdealt selection.

In ImageJ the equivalent to ‘Redo’ is the , that re-runs the previous
used command (skipping and commands).

Image Types and Formats[sec:Image-Types]
========================================

Digital Images are two-dimensional grids of pixel intensities values
with the width and height of the image being defined by the number of
pixels in $x$ (rows) and $y$ (columns) direction. Thus, pixels (picture
elements) are the smallest single components of images, holding numeric
values – pixel intensities – that range between black and white. The
characteristics of this range, i.e., the number of unique intensity
(brightness) values that can exist in the image is defined as the
bit–depth of the image and specifies the level of precision in which
intensities are coded, e.g.: A 2–bit image has $2^{2}=4$tones: 00
(black), 01 (gray), 10 (gray), and 11 (white). A 4–bit image has
$2^{4}=16$tones ranging from 0000 (0) to 1111 (16), etc. In terms of
bits per pixel (bpp), the most frequent types of images () that ImageJ
deals with are ( supports [many more types of image
data](http://imagejdev.org/imagej2-pixel-types)):

<span>RGB-Color—</span>

Images that can display 256 ($2^{8}$) gray levels (integers only).

Images that can display 65,536 ($2^{16}$) gray levels (integers only).

Images that can display 4,294,967,296 ($2^{32}$) gray levels (real
numbers). In 32–bit images, pixels are described by [floating
point](http://en.wikipedia.org/wiki/Floating_point) values and can have
any intensity value including *NaN* (Not a Number).

that can display 256 values in the ed, reen and lue channel. These are
24–bit ($2^{3\times8}$) images. RGB color images can also be 32–bit
color images (24–bit color images with additional eight bits coding
alpha blending values, i.e., transparency).

Native Formats[sub:Native-Formats] {#native-formatssubnative-formats .unnumbered}
----------------------------------

Natively (i.e. without the need of third-party plugins) ImageJ opens the
following formats: **TIFF**, **GIF**, **JPEG**, **PNG**, **DICOM**,
**BMP**, **PGM** and **FITS**. Many more formats are supported with the
aid of plugins. These are discussed in .


(Tagged Image File Format) is the ‘default’ format of ImageJ (cf. ).
Images can be 1–bit, 8–bit, 16–bit (unsigned[^3]), 32–bit (real) or RGB
color. TIFF files with multiple images of the same type and size open as
or . ImageJ opens lossless compressed TIFF files (*see*
[infobox:Formats] ) by the LZW, PackBits and ZIP (Deflate/Inflate)
@C-ZIPcompressedTIFFs compression schemes. In addition, TIFF files can
be opened and saved as ZIP archives.\
Tiff tags and information needed to import the file (number of images,
offset to first images, gap between images) are printed to the when
ImageJ is running in *Debug Mode* (, *see* ).

(Digital Imaging and Communications in Medicine) is a standard popular
in the medical imaging community. Support in ImageJ is limited to
uncompressed DICOM files. DICOM files containing multiple images open as
.\
Use to display the DICOM header information. A DICOM sequence can be
opened using or by dragging and dropping the folder on the ‘ImageJ’
window. Imported sequences are sorted by image number instead of
filename and the tags are preserved when DICOM images are saved in TIFF
format. ImageJ supports custom DICOM dictionaries, such as the one at
<http://imagej.nih.gov/ij/download/docs/DICOM_Dictionary.txt>. More
information can be found at the [Center for Advanced Brain
Imaging](http://www.cabiatl.com/mricro/dicom/index.html).

(Flexible Image Transport System) image is the format adopted by the
astronomical community for data interchange and archival storage. Use to
display the FITS header. More information
[here](http://fits.gsfc.nasa.gov).

(Portable GrayMap), **PBM** (Portable BitMap) and **PPM** (Portable
PixMap) are simple image formats that use an ASCII header. More
information
[here](http://local.wasp.uwa.edu.au/~pbourke/dataformats/ppm/).

(Audio Video Interleave) is a container format which can contain data
encoded in many different ways. ImageJ only supports uncompressed AVIs,
various YUV 4:2:2 compressed formats, and PNG or JPEG-encoded individual
frames. Note that most MJPG (motion-JPEG) formats are not read
correctly. Attempts to open AVIs in other formats will fail.

Non–native Formats [sub:Non-native-Supported-Formats] {#nonnative-formats-subnon-native-supported-formats .unnumbered}
-----------------------------------------------------

When opening a file, ImageJ first checks whether it can natively handle
the format. If ImageJ does not recognize the type of file it calls for
the appropriate reader plugin using
[HandleExtraFileTypes](http://imagej.nih.gov/ij/plugins/file-handler.html),
a plugin bundled with ImageJ. If that fails, it tries to open the file
using the [OME Bio-Formats
library](http://loci.wisc.edu/software/bio-formats) (if present), a
remarkable plugin that supports more than [one hundred of the most
common](http://loci.wisc.edu/bio-formats/formats) file formats used in
microscopy. If nevertheless the file cannot be opened, an error message
is displayed.

Because both these plugins are under active development, it is important
that you keep them updated. The OME Bio-Formats library can be updated
using its self-updating plugin () or Fiji’s built-in updater (). The
following websites provide more information on the OME Bio-Formats:

-   <http://loci.wisc.edu/bio-formats/imagej>

-   <http://fiji.sc/Bio-Formats>

-   <http://loci.wisc.edu/bio-formats/using-bio-formats>

In addition, the ImageJ web site lists [more than sixty
plugins](http://imagej.nih.gov/ij/plugins/#io) that recognize more
‘exotic’ file formats. The ImageJ Documentation Portal also maintains a
(somewhat outdated) [list of file
formats](http://imagejdocu.tudor.lu/doku.php?id=faq:general:which_file_formats_are_supported_by_imagej)
that are supported by ImageJ.

Two critical aspects to keep in mind when converting images:

<span>[misc:LossyCompression]Lossy compression</span>
:   Transcoding an image into a format that uses lossy compression will
    alter the original data, introducing artifacts (*see*
    [infobox:JpegAlert] ). This is the case, e.g., for JPEG formats
    (with the exception of some JPEG2000 images that use lossless
    compression). As such, these types of data are intended for human
    interpretation only and are not suitable for quantitative analyses

<span>[misc:Metadata]Metadata</span>
:   In ImageJ, metadata associated with the image, such as scale, gray
    value calibration and user comments is only supported in tiff and
    zip (compressed tiff) images. In addition, selections and are also
    saved in the TIFF header (cf. ). None of the above is saved in other
    formats (cf. ).

Stacks, Virtual Stacks and Hyperstacks[sec:StacksVirtualStacksHyperStks]
========================================================================

Stacks[sub:Stacks-Intro] {#stackssubstacks-intro .unnumbered}
------------------------

ImageJ can display multiple spatially or temporally related images in a
single window. These image sets are called stacks. The images that make
up a stack are called slices. In stacks, a pixel (which represents 2D
image data in a bitmap image) becomes a voxel (volumetric pixel), i.e.,
an intensity value on a regular grid in a three dimensional space.

All the slices in a stack must be the same size and bit depth. A
scrollbar provides the ability to move through the slices and the slider
is preceded by a play/pause icon that can be used to start/stop stack
animation. Right-clicking on this icon runs the dialog box.

Most ImageJ filters will, as an option, process all the slices in a
stack. ImageJ opens multi-image TIFF files as a stack, and saves stacks
as multi-image TIFFs. The command opens other multi-image, uncompressed
files. A folder of images can be opened as a stack either by dragging
and dropping the folder onto the ‘ImageJ’ window or or by choosing To
create a new stack, simply choose and set the *Slices* field to a value
greater than one. The submenu contains commands for common stack
operations.

![image](images/StacksHyperstacks)

Virtual Stacks[sub:Virtual-Stacks] {#virtual-stackssubvirtual-stacks .unnumbered}
----------------------------------

Virtual stacks are disk resident (as opposed to RAM resident) and are
the only way to load image sequences that do not fit in RAM. There are
several things to keep in mind when working with virtual stacks:

-   Virtual stacks are read-only, so changes made to the pixel data are
    not saved when you switch to a different slice. You can work around
    this by using macros (e.g., <span>[Process Virtual
    Stack](http://imagej.nih.gov/ij/macros/Process_Virtual_Stack.txt)</span>)
    or the command

-   You can easily run out of memory using commands like because any
    stack generated from commands that do not generate virtual stacks
    will be RAM resident.

-   TIFF virtual stacks can usually be accessed faster than JPEG virtual
    stacks. A JPEG sequence can be converted to TIFF by opening the JPEG
    images as a virtual stack and using to save in TIFF format

ImageJ appends a ‘(V)’ to the window title of virtual stacks and
hyperstacks (*see* ). Several built-in ImageJ commands in the submenu
have the ability to open virtual stacks, namely: , , ,, (cf. [Virtual
Stack Opener](http://imagej.nih.gov/ij/plugins/virtual-opener.html)). In
addition, TIFF stacks can be open as virtual stacks by drag and drop
(cf. [infobox:VirtualTiff] ).

TIFF stacks with a extension open as virtual stacks when dragged and
dropped on thetoolbar icon.

![image](images/DragAndDropVirtualTiff)

Hyperstacks[sub:Hyperstacks-Intro] {#hyperstackssubhyperstacks-intro .unnumbered}
----------------------------------

Hyperstacks are multidimensional images, extending image stacks to four
(4D) or five (5D) dimensions: $x$ (width), $y$ (height), $z$ (slices),
$c$ (channels or wavelengths) and $t$ (time frames). Hyperstacks are
displayed in a window with three labelled scrollbars (*see* ). Similarly
to the scrollbar in , the frame slider (*t*) has a play/pause icon.

Color Images[^4][sec:Color-Images]
==================================

ImageJ deals with color mainly in three ways: pseudocolor images, RGB
images, RGB/ HS<span>B</span> stacks, and composite images.

Pseudocolor Images[sub:Pseudocolor-Images] {#pseudocolor-imagessubpseudocolor-images .unnumbered}
------------------------------------------

A pseudocolor (or indexed color) image is a single channel gray image
(8, 16 or 32–bit) that has color assigned to it via a lookup table or
LUT. A LUT is literally a predefined table of gray values with matching
red, green and blue values so that shadows of gray are displayed as
colorized pixels. Thus, differences in color in the pseudo-colored image
reflect differences in intensity of the object rather than differences
in color of the specimen that has been imaged.

8-bit indexed color images (such as GIFs) are a special case of
pseudocolor images as their lookup table is stored in the file with the
image. These images are limited to 256 colors (24–bit RGB images allow
16.7 million of colors, *see* ) and concomitantly smaller file sizes.
Reduction of true color values to a 256 color palette is performed by
color quantization algorithms. ImageJ uses the Heckbert’s median-cut
color quantization algorithm (*see* menu), which, in most cases, allows
indexed color images to look nearly identical to their 24-bit originals.

True Color Images[sub:True-color-images] {#true-color-imagessubtrue-color-images .unnumbered}
----------------------------------------

As described in , true color images such as RGB images reflect genuine
colors, i.e., the green in an RGB image reflects green color in the
specimen. Color images are typically produced by color CCD cameras, in
which color filter arrays ([Bayer
masks](http://en.wikipedia.org/wiki/Bayer_filter)) are placed over the
image sensor.

### Color Spaces and Color Separation[sub:Color-Spaces-and] {#color-spaces-and-color-separationsubcolor-spaces-and .unnumbered}

[Color spaces](http://en.wikipedia.org/wiki/Color_space) describe the
gamut of colors that image-handling devices deal with. Because human
vision is trichromatic, most color models represent colors by three
values. Mathematically, these values (color components) form a
three-dimensional space such as the RGB, HSB, CIELab or YUV color space.

![image](images/RGB-HSBcolorModels)

RGB (ed, reen, lue) is the most commonly-used color space. However,
other alternatives such as HSB (ue, aturation, rightness) provide
significant advantages when processing color information. In the HSB
color space, *Hue* describes the attribute of pure color, and therefore
distinguishes between colors. *Saturation* (sometimes called “purity” or
“vibrancy”) characterizes the shade of color, i.e., how much white is
added to the pure color.* Brightness* (also know as *Value* – HSV
system) describes the overall brightness of the color (*see* e.g., the
color palette of ). In terms of digital imaging processing, using the
HSB system over the traditional RGB is often advantageous: e.g., since
the Brightness component of an HSB image corresponds to the grayscale
version of that image, processing only the brightness channel in
routines that require grayscale images is a significant computational
gain[^5]. You can read more about the HSB color model
[here](http://en.wikipedia.org/wiki/HSB_color_space).

In ImageJ, conversions between image types are performed using the
submenu. Segmentation on the HSB, RGB, CIELab and YUV color spaces can
be performed by the command @C-ColorThres. Segregation of color
components (specially useful for quantification of histochemical
staining) is also possible using Gabriel Landini’s [Colour
Deconvolution](http://www.dentistry.bham.ac.uk/landinig/software/cdeconv/cdeconv.html)
plugin. In addition, several other plugins related to color processing
can be obtained from the [ImageJ
website](http://imagej.nih.gov/ij/plugins/index.html#color).

### Conveying Color Information[^6][sub:Conveying-Color-Information] {#conveying-color-informationsubconveying-color-information .unnumbered}

People see color with significant variations. Indeed, the popular phrase
“One picture is worth ten thousand words” may not apply to certain color
images, specially those that do not follow the basic principles of
[Color Universal Design](http://jfly.iam.u-tokyo.ac.jp/color/). Citing
Masataka Okabe and Kei Ito:

> Colorblind people can recognize a wide ranges of colors. But certain
> ranges of colors are hard to distinguish. The frequency of
> colorblindness is fairly high. One in 12 Caucasian (8%), one in 20
> Asian (5%), and one in 25 African (4%) males are so-called ‘red–green’
> colorblind.
>
> There are always colorblind people among the audience and readers.
> There should be more than ten colorblind in a room with 250people
> (assuming 50% male and 50% <span>female</span>).
>
> <span>[</span>…<span>]</span> There is a good chance that the paper
> you submit may go to colorblind reviewers. Supposing that your paper
> will be reviewed by three white males (which is not unlikely
> considering the current population in science), the probability that
> at least one of them is colorblind is whopping 22%!

![image](images/Dichromacy)

One practical point defined by the [Color Universal
Design](http://jfly.iam.u-tokyo.ac.jp/color/) is the use of magenta in
red–green overlays (*see also* @Landini:2009p19625). Magenta is the
equal mixture of red and blue. Colorblind people that have difficulties
recognizing the red component can easily recognize the blue hue. The
region of double positive becomes white, which is easily distinguishable
for colorblind. In ImageJ this is easily accomplished using the , or
using the ImageJ macro language (*see* [infobox:Replacing-Red-w-Magenta]
).

When building RGB images, magenta can be obtained using the Previously
created RGB images can be converted to ‘MGB’ using . Alternatively, the
command can be used to add the red channel to the blue channel. Both
these approaches can be automated using the ImageJ macro language as
exemplified by Macros and . Once saved in the folder these are treated
as regular ImageJ commands.

In , as expected, the procedure of modifying RGB images is simpler: one
just needs to run . For even more convenience, Fiji provides an
analogous command that replaces the system clipboard’s image with a
magenta-green one.

It is also possible to simulate color blindness using the
[Vischeck](http://www.vischeck.com/downloads/) or
[Dichromacy](http://www.dentistry.bham.ac.uk/landinig/software/dichromacy/dichromacy.html)
plugins[^7], or in , using the command.

    /* This macro replaces Red with Magenta in RGB images using Process>Image Calculator...  command. */
       if (bitDepth!=24)
           exit("This macro requires an RGB image");
     setBatchMode(true);
       title= getTitle();
       r= title+" (red)"; g= title+" (green)"; b= title+" (blue)";
       run("Split Channels");
       imageCalculator("Add", b, r);
       run("Merge Channels...", "red=&r green=&g blue=&b");
       rename(title + " (MGB)");
     setBatchMode(false);

Color Composite Images[sub:Color-Composites] {#color-composite-imagessubcolor-composites .unnumbered}
--------------------------------------------

In a composite image colors are handled through channels. The advantages
with this type of image over plain RGB images are:

1.  Each channel is kept separate from the others and can be turned on
    and off using the ‘Channels’ tool (). This feature allows, e.g., to
    perform measurements on a specific channel while visualizing
    multiple.

2.  Channels can be 8, 16 or 32–bit and can be displayed with any lookup
    table

3.  More than 3channels can be merged or kept separate

<!-- -->

    /* This macro replaces Red with Magenta in RGB images using the Image>Color>Channels... tool. */
       if (bitDepth!=24)         // Ignore non-RGB images
           exit("This macro requires an RGB image");
     setBatchMode(true);         // Enter `Batch' mode
       title = getTitle();       // Retrieve the image title
       run("Make Composite");    // Run Image>Color>Make Composite
       run("Magenta");           // Run Image>Lookup Tables>Magenta on channel 1
       run("RGB Color");         // Run Image>Type>RGB Color
       rename(title + " (MGB)"); // Rename the image
     setBatchMode(false);        // Restore `GUI' mode

Selections[sec:Selections-Intro]
================================

Selections (regions of interest, ROIs), are typically created using the
. Although ImageJ can display simultaneously several ROIs (see and )
only one selection can be active at a time. Selections can be measured
(), drawn (), filled () or filtered ( submenu), in the case of area
selections. In addition it is also possible to hold multiple ROIs as
non-destructive .

Selections can be initially outlined in one of the nine ImageJ default
colors (*Red*, *Green*, *Blue*, *Magenta*, *Cyan*, *Yellow*, *Orange*,
*Black* and White). Once created, selections can be contoured or painted
with any other color using. Selection Color can be changed in , by
double clicking on the , or using hot keys (*see* ). It is highlighted
in the center of the and .

![**[fig:exampleAreaROIs]Three types of area selections In ImageJ.**
Notice the cursor changes: to an *arrow* when it is within the
selection, to a *cross-hair* when outside the selection, to a *hand*
when over a selection vertex or ‘handler’. Notice also the filled
handler in the polygon selection and the absence of point handlers in .
, i.e., non-active selections displayed in the non-destructive image
overlay, are also displayed without handlers.](images/Selections)

Manipulating ROIs[sub:Manipulating-ROIs]
----------------------------------------

Most of commands that can be useful in defining or drawing selections
are available in the submenu and summarized in . Listed below are the
most frequent manipulations involving selections:

Area selections can be adjusted with the . In addition, vertexes of
selections created with the and can be adjusted by Alt/Shift-clicking.

Choose any of the selection tools and click outside the selection, or
use . Use to restore a selection back after having deleted it. With , an
activated ROI can be deleted by pressing the ( on Mac) key.

A selection can be transferred from one image window to another by
activating the destination window and runnig . Alternatively, to create
ROIs across multiple images. Multiple selections can be stored as or in
the list ().

Selections can be moved by clicking and dragging as long as the cursor
is within the selection and has changed to
an ![image](images/pointers/Pointer-Arrow). The status bar displays the
coordinates of the upper left corner of the selection (or the bounding
rectangle for non-rectangular selections) as it is being moved. To move
the contents of a selection, rather than the selection itself, , , and
then click within the selection and drag.

Selections can be ‘nudged’ one pixel at a time in any direction using
the arrow keys. Note that the up and down keys zoom the image in and out
in the absence of selections (*see* shortcuts).

The can be used to perform fine adjustments of ROI contours. Most ROIs
can be resized one pixel at a time by holding while using the arrow
keys. In general (*see* and for details), selections are resized by
dragging one of the selection handlers. While dragging, holding resizes
the selection around its center, holding imposes a fixed aspect ratio
and holding forces a 1:1 aspect ratio.

Composite Selections[sub:Composite-selections]
----------------------------------------------

[5]<span>l</span><span>0.245</span>![image](images/compositeROI)

Composite selections are non-contiguous ROIs containing more than one
cluster of pixels and/or ROIs containing internal holes. Composite ROIs
are typically originated with the but they can be defined with any other
selection tool using key modifiers.

The following modifier keys can be use to create composite selections:

<span>shifttt</span>

Drawing outside current selection while pressing Shift creates new
content. To add a non-square rectangle or ellipse, the Shift key must be
released after adding the selection

Drawing inside current selection while pressing Alt creates a hole
removing content from the ROI

Note that some operations may not be performed properly on complex ROIs.
In these cases, it may be useful to convert a composite ROI into a
polygon using the command as explained in [infobox:Composites] .

Selections With Sub-pixel Coordinates[sub:Sub-pixel-Selections]-----------------------------------------------------------------------------

Since ImageJ 1.46, selections can be defined with [subpixel
accuracy](http://en.wikipedia.org/wiki/Sub-pixel_resolution), beyond the
nominal pixel resolution of the image: . Line Selections (*see* ) are
created with floating-point coordinates if the *Sub-pixel resolution*
checkbox is active in Sub-pixel coordinates of pre-existing selections
can be interpolated using the command. Interpolated points are easily
noticeable on small selections created on images zoomed 1200% or
greater.

![image](images/SubPixel)

Overlays[sub:Overlay-Intro]=========================================

Overlays are non-active selections displayed ‘over’ the pixel data, on
the image overlay, and are the core of non-destructive image processing
in ImageJ. In a way you can think of the image overlay as an invisible
in which selections are being added, allowing ROIs to be on ‘hold’. This
concept of multiple distinct selections has been dramatically improved
in so we urge you to download IJ2 if multiple ROIs are important in your
workflows.

![**Non-destructive operations using the image overlay.** Overlays can
be used to annotate images, store ROIs and blend images (ImageROIs) at
multiple opacity levels. Refer to the documentation for further . You
can [download the
frontmost](http://imagej.nih.gov/ij/docs/guide/images/ImageWithOverlay.tif)
image to practice overlay editing. ](images/OverlayShowcase)

Importantly, overlay selections are [vector
graphics](http://en.wikipedia.org/wiki/Vector_graphics) composed of
mathematically-defined paths (as opposed to [raster
graphics](http://en.wikipedia.org/wiki/Raster_graphics) in which objects
are defined by pixels) and are not affected by scaling, i.e., do not
become pixelated. Most of overlay-related commands are listed in the ,
and in the ROI Manager window (). Appearance of overlay selections can
be adjusted using /

As mentioned in [infobox:Formats] , overlays are saved in the header of
tif images, and do not need to be saved externally when using TIFF, the
default file format of ImageJ. The major advantages of overlays are
summarized below:

<span>Storage of ROIs</span>
:   In ImageJ it is only possible to have a single ROI at a time.
    However, it is possible to add selections to the image overlay using
    ().<span> </span> Once added to the image overlay, ROIs can be
    re-activated by Alt-clicking, Control-clicking or long-pressing
    ($\nicefrac{1}{4}$ second or longer). Activated ROIs can be deleted
    by pressing the key. Selections can also be added and recovered in
    bulk, using the / commands.

<span>Non-destructive annotations</span>
:   Overlays are the best way of annotating images in ImageJ (). As
    vector graphics, overlays do not change pixel values, can be scaled
    without loss of quality even at high zoom levels (*see*
    [infobox:ZoomedCanvas] ) and can be displayed at different opacity
    values (*see* [infobox:HEX] ). RGB snapshots of the image with
    embedded overlays can be created by holding , the shortcut for .
    ‘Flattened’ images with the overlay rendered as pixel data are also
    created when saving the image as PNG or JPEG (), or when printing
    the image canvas (). The command is also listed in the .

<span>Image ROIs</span>
:   An imageROI (image selection) is a ROI that displays an image as an
    overlay. As described in and , this allows multiple images to be
    blended on a single image canvas.

3D Volumes[sub:3D-Intro]
========================

Currently, the support for 3D ROIs (selections containing contiguous
cluster of voxels) is somewhat limited in ImageJ. This limitation has
been addressed by and several IJ1 plugins. The list below summarizes
some of the ImageJ plugins that deal effectively with multi-dimensional
objects. Note that a manual installation of these tools as standalone
ImageJ plugins is a challenging task given their special dependencies,
reason why they are all bundled as part of .

![image](images/3Dviewer)

<span>3D Filters</span>
:   Specialized 3D filters such as can be installed to perform 3D
    operations. Examples are the [3D processing
    package](http://imagejdocu.tudor.lu/doku.php?id=plugin:morphology:3d_binary_morphological_filters:start)
    by Thomas Boudier @Iannuccelli:2010p13791 and the [3D binary
    filters](http://fiji.sc/wiki/index.php/3D_Binary_Filters) by
    Benjamin Schmid.

<span>3D Object Counter</span>
:   [3D Object
    Counter](http://imagejdocu.tudor.lu/doku.php?id=plugin:analysis:3d_object_counter:start)
    (3D-OC) counts and qualifies 3D objects in a stack @Bolte:2006p2466,
    similarly to the 2D analysis performed by It is complemented by [3D
    Roi
    Manager](http://imagejdocu.tudor.lu/doku.php?id=plugin:stacks:3d_roi_manager:start)
    @Iannuccelli:2010p13791, a companion plugin that adds a 3D to ImageJ

<span>3D Viewer</span>
:   [3D Viewer](http://3dviewer.neurofly.de/) brings powerful
    hardware-accelerated 3D visualization to ImageJ @Schmid:2010p18702,
    extending the limited functionality of In the ImageJ stacks can be
    displayed as texture-based volume renderings, surfaces or
    orthoslices. It is macro-recordable and can be used by other plugins
    as a high-level programming library for 3D visualization

<span>Simple Neurite Tracer</span>
:   [Simple Neurite
    Tracer](http://fiji.sc/wiki/index.php/Simple_Neurite_Tracer) allows
    semi-automated segmentation of tubular structures in 3D
    @Longair:2011p20768

<span>TrakEM2</span>
:   As mentioned earlier, features powerful tools for multi-dimensional
    regions of interest @Cardona:2010p18306

Settings and Preferences[sec:Settings-and-Preferences]====================================================================

ImageJ preferences are automatically saved in a preferences file, the` `
text file. This file is stored in on Mac OSX, in on Linux and Windows
(with $\sim$ referring to the user’s home directory). Several macros and
plugins also write parameters to this file. If the is erased using ,
ImageJ will create a new one the next time it is opened resetting all
parameters to their default values.

Sometimes, it may be useful to override (or restore) certain settings
that may have been changed during a working session. For example, the
*Limit to threshold* option () will affect most measurements performed
on thresholded images. Thus, it may be wise to check the status of this
parameter before each analysis, specially when working on multiple
computers.

    macro "AutoRun" {
       setOption("DebugMode", true);
       setOption("Bicubic", true);
       setOption("Display Label", true);
       setOption("Limit to Threshold", false);
       setOption("BlackBackground", true);
       run("Colors...", "foreground=white background=black"); //this line could be substituted by: setBackgroundColor(0,0,0); setForegroundColor(255,255,255);
       run("Profile Plot Options...", "width=350 height=200 draw");
       run("Brightness/Contrast...");
     }

The `setOption()` [macro
function](http://imagej.nih.gov/ij/developer/macro/functions.html#setOption)
can be used to set this and several other ImageJ options. Calling this
function from the “AutoRun” macro in the file ensures preferences are
set each time ImageJ starts. The macro exemplifies this approach
ensuring that the following settings are enforced at startup:

1.  TIFF tag values are displayed by ImageJ (*Debug Mode* in )

2.  Bicubic interpolation is preferred over bilinear (e.g.,)

3.  The name of the measured image name is recorded in the first column
    of the (*Display Label *in )

4.  Measurements are not restricted to thresholded pixels (*Limit to
    Threshold* in )

5.  Binary images are processed assuming white objects on a black
    background (*Black background* in , *see* [infobox:blackBackground]
    )

6.  *Background color* is black and *foreground color* is white ()

7.  ImageJ plots contain grid lines and are always $350\times200$pixels
    in size ()

8.  Open the B&C widget at its last saved screen position ()

ImageJ capabilities can be extended by loadable code modules in the form
of macros, scripts or plugins. 300$+$ macros, 500$+$ plugins and 20$+$
scripts are available through the ImageJ web site. Below is a short
description of these three type of ImageJ add-ons:

<span>macrosss</span>

The easiest way to execute a series of ImageJ commands. The ImageJ macro
language – a *Java-like* language – contains a set of control
structures, operators and built-in functions and can be used to call
built-in commands and other macros. Macro code is stored in text files (
and extensions).

Much more powerful, flexible and faster than macros (most of ImageJ’s
built-in menu commands are actually plugins) but harder to write and
debug. Plugins are written in the Java programming language ( source
files) and compiled to files.

ImageJ uses the Mozilla Rhino interpreter to run JavaScripts. Similarly
to plugins, scripts have full access to all ImageJ and Java APIs but do
not need to be compiled (scripts and macros run interpretively). On the
other hand, scripts lack the simplicity of macro language and feel less
integrated in ImageJ.

Macros[sub:Macros-ExtendingIJ]
==============================

A macro is a simple program that automates a series of ImageJ commands.
The easiest way to create a macro is to record a sequence of commands
using the command recorder ().

A macro is saved as a text file (or extension) and once installed
executed by selecting the macro name in the submenu, by [pressing a
key](http://imagej.nih.gov/ij/developer/macro/macros.html#shortcuts) or,
in the case of [Macro
tools](http://imagej.nih.gov/ij/developer/macro/macros.html#tools), by
clicking on an icon in the ImageJ toolbar. In addition, any macro file
placed in with an extension will be installed in the menu like any other
plugin (before version1.41 only files with an underscore in the name
would be listed).

There are more than 300example macros, on the ImageJ Web site. To try
one, open it in a browser window and drag it directly to the or, copy it
to the clipboard ( , ), switch to IJ, and run ( ), pasting the macro
into a new window. Run it using the editor’s command ( ). Most of the
example macros are also available in the macros folder, inside the
ImageJ folder.

Macro Programming[sub:Macro-Programming] {#macro-programmingsubmacro-programming .unnumbered}
----------------------------------------

The ImageJ community has created excellent tutorials on macro
programming. These resources are indispensable guides to the ImageJ
macro language:

1.  *The ImageJ Macro Language — Programmer’s Reference Guide* by JÈrÙme
    Mutterer and Wayne Rasband. This booklet compiles most of the
    documentation dispersed throughout the web related to ImageJ’s macro
    programming. It provides an up to date printable manual for the
    ImageJ macro language:\
    <http://imagej.nih.gov/ij/docs/macro_reference_guide.pdf>

2.  <span> </span>The Built-in Macro Functions webpage ( and in the ) is
    the indispensable guide to the built-in functions that can be called
    from the ImageJ macro language. It is thoroughly documented and
    constantly updated:\
    <http://imagej.nih.gov/ij/developer/macro/functions.html>

3.  Tutorials on the Fiji webpage:\
    <http://fiji.sc/wiki/index.php/Introduction_into_Macro_Programming>

4.  How-tos and tutorials on the ImageJ Documentation Portal\
    <http://imagejdocu.tudor.lu/>

Scripts[sub:Scripts]
====================

JavaScript scripting was introduced in ImageJ1.41 in order to bring full
access to ImageJ and Java APIs (*see* ). ImageJ uses the Mozilla Rhino
interpreter built into Java1.6 for Linux and Windows to run JavaScript.
Mac users, and users of earlier versions of Java, must download into the
plugins folder. This JAR file is available on the [ImageJ
website](http://imagej.nih.gov/ij/download/tools/JavaScript.jar) and is
included with the Mac version of ImageJ in .

Example JavaScript programs are available at
[imagej.nih.gov/ij/macros/js/](http://imagej.nih.gov/ij/macros/js/).
Thread safe JavaScript code can be generated using the Recorder ().
Scripts can be opened in the editor as any other macro. Scripts with the
extension can be run using otherwise ( ) must be used.

JavaScript Programming {#javascript-programming .unnumbered}
----------------------

Resources on ImageJ JavaScript scripting include:

1.  The ImageJ web site, with growing documentation:\
    <http://imagej.nih.gov/ij/developer/javascript.html>

2.  Tutorials on the Fiji webpage:\
    <http://fiji.sc/wiki/index.php/Javascript_Scripting>

3.  Online scripts repository:\
    <http://imagej.nih.gov/ij/macros/js/>

[t]<span>1</span>

<span>0.9</span>

<span>\>p<span>0.476</span>\>p<span>0.476</span></span> & <span>\
</span> & <span>Slower, especially starting up</span><span>\
</span><span>[Standardized](http://en.wikipedia.org/wiki/ECMAScript)</span>
& <span>No equivalent of macro sets</span><span>\
</span><span>Richer language (objects, <span>`?`</span> operator,
<span>`break`</span>, <span>`continue`</span>, etc.)</span> &
<span>Cannot use most of ImageJ’s 360+ [built in macro
functions](http://imagej.nih.gov/ij/developer/macro/functions.html)</span><span>\
</span><span>[Extensive
documentation](http://en.wikipedia.org/wiki/JavaScript)</span> &
<span>Requires knowledge of complex ImageJ and Java APIs</span><span>\
</span>& <span>No support for “batch mode”</span><span>\
</span>& <span>Cannot create and toolbar menus</span><span>\
</span>& <span>Not compatible with and CodeBar</span>[^8]<span>\
</span>& <span>No debugger</span><span>\
</span>

Plugins[sub:Plugins]
====================

Plugins are a much more powerful concept than and and most of ImageJ’s
built-in menu commands are in fact implemented as plugins. Quoting
Werner Bailer @Bailer:2006p14110:

> Plugins are implemented as Java classes, which means that you can use
> all features of the Java language, access the full ImageJ API and use
> all standard and third-party Java APIs in a plugin. This opens a wide
> range of possibilities of what can be done in a plugin.
>
> The most common uses of plugins are filters performing some analysis
> or processing on an image or image stack and I/O plugins for
> reading/writing not natively supported formats from/to file or other
> devices. But as you can see when looking at the plugins listed on the
> ImageJ plugins page, there are many other things you can do with
> plugins, such as rendering graphics or creating extensions of the
> ImageJ graphical user interface.

Plugins in the folder are listed at the bottom of the menu (*see*
[infobox:Organizing-Commands] ). Only and files in the plugins folder
with at least one underscore in their name will be installed. Note that,
with IJ1.44d an later, ImageJ no longer automatically installs, at
startup, plugins in JAR file directories that start with a lower case
letter.

Developing ImageJ Plugins {#developing-imagej-plugins .unnumbered}
-------------------------

More information on how to develop ImageJ plugins can be obtained on the
following documents:

1.  Developer Resources Page on the ImageJ website ():\
    <http://imagej.nih.gov/ij/developer/index.html>

2.  Dedicated tutorials on Fiji’s webpage:\
    <http://fiji.sc/wiki/index.php/Introduction_into_Developing_Plugins>

3.  Dedicated tutorials on the ImageJ Documentation Portal:\
    <http://imagejdocu.tudor.lu/>

4.  Dedicated tutorials on the ImageJDev webpage:\
    <http://developer.imagej.net/ides>

Scripting in Other Languages[sec:ScriptingOtherLang]
====================================================

Support for other languages is possible in ImageJ using and its powerful
editor. Fiji adds extra support for BeanShell, Clojure, Python and Ruby.
The following documents will introduce you to the advanced scripting
capabilities of Fiji:

1.  The extensive tutorial on scripting Fiji with Jython by Albert
    Cardona:\
    <http://www.ini.uzh.ch/~acardona/fiji-tutorial/>

2.  Dedicated tutorials on the Fiji webpage:\
    <http://fiji.sc/wiki/index.php/Scripting_comparisons>

Fiji Script Editor[sub:Fiji-Scrip-Editor] {#fiji-script-editorsubfiji-scrip-editor .unnumbered}
-----------------------------------------

Fiji features a more powerful script editor than ImageJ’s built-in . The
Fiji editor is an invaluable help when writing scripts in any of Fiji’s
supported languages, including the ImageJ macro language. The editor
features full undo support, syntax highlighting, tabs, bookmarks and
several other tools that simplify scripting workflows in ImageJ. For
more information visit Fiji’s editor website at
<http://fiji.sc/wiki/index.php/Script_Editor>.

![**[fig:Fiji-Script-Editor]The Fiji Script Editor (ImageJA 1.44m).
**The Fiji Editor is an advanced text editor, supporting BeanShell,
Jython, JRuby and other scripting languages. It does not support but
selecting a built-in macro function and running retrieves the
documentation for the selected function.](images/FijiScriptEditor)

Running ImageJ from the Command Line[sub:IJ-cmd-line]
=====================================================

ImageJ was devised as a desktop application. It can, however, run
without a graphics environment (headless mode) by adding a special
library (<span>`headless.jar`</span>) to the <span>`ij.jar`</span>
classpath that overrides key ImageJ classes to work better headlessly.
As described on the [Fiji
website](http://fiji.sc/wiki/index.php/Headless), this strategy is
implemented in through the <span>`-`</span><span>`-headless`</span>
command line flag (*see also* [Running ImageJ in headless
mode](http://imagejdocu.tudor.lu/doku.php?id=faq:technical:how_do_i_run_imagej_without_a_graphics_environment_headless)
and [Using Cluster for Image Processing with
IJ](http://cmci.embl.de/documents/100922imagej_cluster)). Headless
operations are simplified in .

ImageJ recognizes the following command line options:

<span>eval-macro-code-batch-pat</span>

Opens a file. Examples:\
\
\

Specifies the path to the directory containing the plugins directory.
Example:\

Specifies the port ImageJ uses to determine if another instance is
running. Examples:`` \
 (use default port address + 1)\
 (use default port address + 2)\
 (do not check for another instance
([OtherInstance](http://imagej.nih.gov/ij/source/ij/OtherInstance.java))

Runs a macro or script, passing it an optional argument, which can be
retrieved using `getArgument()`. Examples:\
\

Runs a macro or script in batch mode (no GUI), passing it an optional
argument. ImageJ exits when the macro finishes.

Evaluates macro code. Examples:\
\

Runs an ImageJ menu command. Example:\

Runs ImageJ in debug mode.

Unlike most image processing programs ImageJ does not have a main work
area. ImageJ’s main window is actually quite parsimonious containing
only a menu bar (at the top of the screen on the Mac) containing all the
, a , a and a . Images, histograms, profiles, widgets, etc. are
displayed in additional windows. Measurement results are displayed in
the . Most windows can be dragged around the screen and resized.

Toolbar[sub:Toolbar] {#toolbarsubtoolbar .unnumbered}
--------------------

The ImageJ toolbar contains tools for making selections, drawings,
zooming and scrolling, etc. In addition, the right-side of the toolbar
contains seven slots that can host any of the [60+
tools](http://imagej.nih.gov/ij/macros/tools/) and [15+
toolsets](http://imagej.nih.gov/ij/macros/toolsets/) available on the
ImageJ website (*see* ).

All ImageJ tools share common features:

-   The ![image](images/tools/triangle)  on the bottom right corner of
    some icons in the toolbar depicts a contextual menu that can be
    accessed by right-clicking on the tool icon (e.g., ).

-   If an ‘Options’ dialog is available for a particular tool, it can be
    accessed by double clicking on the tool icon (e.g., ).

Status bar[sub:Status-bar] {#status-barsubstatus-bar .unnumbered}
--------------------------

When the cursor is over an image, pixel intensities and coordinates are
displayed in the status bar. After running a filter, elapsed time and
processing rate (in pixels/second) are also displayed. When clicking on
the status bar the ImageJ version, the Java version, memory in use,
memory available and percent memory used will be displayed. As are
created or resized, selection properties (e.g., location, width, etc.)
are displayed on the status bar.

In addition, clicking on ImageJ’s status bar, forces the Java garbage
collector to run, which may help to reclaim unused memory (*see*). You
can assess this by running : each click on the Status bar should lead to
a spike in the ImageJ’s memory utilization.

![image](images/StatusBar)

If a spatial scale has been defined in or , selection properties are
displayed in the in calibrated units. Resizing or moving while holding
down forces this information to be displayed in pixels.

Progress bar[sub:Progress-bar] {#progress-barsubprogress-bar .unnumbered}
------------------------------

The progress bar, located to the right of the status bar, shows the
progress of time-consuming operations. It will not appear if the
operation requires less then approximately one second.

Tools[sec:IJ-Tools]
===================

Area Selection Tools[sec:Area-selection-tools]
----------------------------------------------

These tools share the first four toolbar slots. As described in , use
the right click drop-down menu to switch a different tool. Selection
Color can be changed by double clicking on the /.

###  Rectangular Selection Tool[sub:Rectangular-Selection-Tool]

Location, width, height, and aspect ratio are displayed in the status
bar during drawing (*see* [infobox:Toggle-Cal-Units] ).

Modifier keys:


Selection is constrained to a square

Current aspect ratio is maintained while resizing\
With arrow keys, width and height are changed one pixel at a time

Selection is resized around the center

###  Rounded Rectangular Selection Tool[sub:Round-Rectangular-Selection]
![image](images/RoundRectangle)

This tool creates rectangular shapes with rounded corners. It shares the same toolbar
slot and the same modifier keys with the . Double clicking on its icon opens the depicted
dialog in which is possible to specify:

<span>*Stroke width*</span>
:   The width of the contour.

<span>*Corner diameter*</span>
:   The arc size at the vertices.

<span>*Stroke/Fill Color*</span>
:   The contour (stroke) color or the filling color of the rounded
    rectangle. As explained in , selections can be either filled or
    contoured, but not both. The nine default selection colors (*black*,
    *blue*, *cyan*, *green*, *magenta*, *orange*, *red*, *white*,
    *yellow*) can be typed as text. Any other color must be typed in hex
    notation (*see* [infobox:HEX] ).

###  Oval Selection Tool[sub:Oval-Selection-Tool]

Location, width, height, and aspect ratio are displayed in the status
bar during drawing (*see* [infobox:Toggle-Cal-Units] ).

Modifier keys:


Selection becomes circular

Current aspect ratio is maintained while resizing\
With arrow keys, width and height are changed one pixel at a time

Selection is resized around the center

###  Elliptical Selection Tool[sub:Elliptical-Selection-Tool]
Ellipse properties are adjusted by dragging the four handlers on its
antipodal points @C-EllipseTool. To rotate or resize, drag the handlers
on its major axis (transverse diameter). To adjust eccentricity, drag
the handlers on its minor axis (conjugate diameter).

###  Brush Selection Tool[sub:Brush-Selection-Tool]
Adjusts (refines) the shape of area selections using a circular ‘brush’
@C-ROIbrush. Clicking inside the area selection and dragging along its
boundary will expand the boundary outwards. Clicking outside the area
selection and dragging along its boundary will shrink the boundary
inwards. Once the tool has been applied, ImageJ will treat the adjusted
ROIs as . The brush diameter can be adjusted by double clicking on the
tool icon.

Modifier keys:


Holding Shift forces the Brush Selection Tool to add pixels to the
selection

Holding Alt forces the Brush Selection Tool to subtract pixels from the
selection

###  Polygon Selection Tool

Creates irregularly shaped selections defined by a series of line
segments. Segment length and angle are displayed in the status bar
during drawing (*see* [infobox:Toggle-Cal-Units] ). To create a polygon
selection, click repeatedly with the mouse to create line segments. When
finished, click in the small box at the starting point (or double
click), and ImageJ will automatically draw the last segment. The vertex
points that define a polygon selection can be moved and modifier keys
can be used to delete or add new vertexes to the polygon.

Modifier keys:


Shift-clicking on an existing vertex of the polygon adds a new corner
point, smoothing the polygon edge

Alt-clicking on an existing vertex of the polygon removes it

###  Freehand Selection Tool[sub:Freehand-Selection-Tool]

As with the polygon selection tool, ImageJ automatically draws the last
segment. Location and intensity of starting pixel are displayed in the
status bar during drawing.

Line Selection Tools[sec:Line-Selection-Tools]
----------------------------------------------

Use these tools to create line selections. The three line selection
tools share the same toolbar slot. As described in , use the right click
drop-down menu to switch between line tools.

Double click on any line tool to specify the line width by opening the
widget, on which is also possible to apply a cubic spline fit to a
polyline selection. Check the *Sub-pixel resolution* checkbox in to
create line selections with floating-point coordinates (*see* ).

### ![image](images/tools/StraightLine) Straight Line Selection Tool[sub:Straight-Line-Selection]

Length and line angle are displayed in the status bar during drawing
(*see* [infobox:Toggle-Cal-Units] ).

Modifier keys:


Forces the line to be either horizontal or vertical

Keeps the line length fixed while moving either end of the line\
Forces the two points that define the line to have integer coordinates
when creating a line on a zoomed image

While moving either end of the line, the line is rotated/resized about
its center

### ![image](images/tools/SegLine) Segmented Line Selection Tool[sub:Segmented-Line-Selection]
Works exactly as described for the : Create a segmented line selection
by repeatedly clicking with the mouse. Each click will define a new line
segment. Double click when finished, or click in the small box at the
starting point. The points that define a segmented line selection can be
moved or deleted, and new points can be added. Length and line angle are
displayed in the status bar during drawing (*see* ).

Modifier keys:


Shift-clicking on an existing vertex adds a new one, adding a new
segment to the segmented line

Alt-clicking on an existing vertex of the segmented line removes it

### ![image](images/tools/FreehandLine) Freehand Line Selection Tool[sub:Freehand-Line-Selection]
Select this tool and drag with the mouse to create a freehand line
selection.

![image](images/tools/Arrow) Arrow Tool[sec:Arrow-Tool]
-------------------------------------------------------

This tool shares the same toolbar slot with the and can also be
installed on a dedicated toolbar slot using the menu (*see* ). Double
clicking on the tool icon opens its *Options* prompt @C-ArrowTool.

![image](images/ArrowTool)
Filled Notched  Open
Single head
[image](images/ArrowTypesS)
Double head
![image](images/ArrowTypesD)
Outline
![image](images/ArrowTypesO)

Being an annotation tool, arrows are created using foreground color
(*see* ) and not selection color (*see* ).

*Width* and *Size* (in pixels) can be adjusted by dragging the
respective sliders or by direct input. Apart from the arrow styles
listed here, a *Headless* option is also available. As for painting
tools (, and ), the *Color* dropdown menu provides a convenient way to
reset the foreground color to one of the default options.

As with any other selection, add arrows to the non-destructive overlay
by pressing () or () to permanently draw the arrow on the image (*see*
[infobox:Color] when working with non-RGB images).

The same modifier keys described to the apply to the arrow tool:


Forces the line to be either horizontal or vertical

Keeps the line length fixed while moving either end of the line\
Forces the two points that define the line to have integer coordinates
when creating a line on a zoomed image

While moving either end of the line, the line is rotated/resized about
its center

 Angle Tool[sec:Angle-Tool]
---------------------------

This tool allows you to measure an angle defined by three points. Double
click on the angle tool icon to enable the measurement of reflex angles.
The angle is displayed in the status bar while the selection is being
created or adjusted. Press () to record the angle in the .

 Point Tool[sec:Point-Tool]
---------------------------

Use this tool to create a point selection, to count objects or to record
pixel coordinates.

Modifier keys:


Shift-clicking adds more points, creating a multi-point selection (*see*
). Point count is displayed on the

Alt-clicking on a point deletes it. Alt-clicking and dragging with the
or deletes multiple points

![image](images/PointOptions)

Double clicking on the point tool icon (or running ) displays its configuration
dialog box.

<span>*Mark Width*</span>
:   If greater than zero, a mark of the specified diameter will be
    permanently drawn in the current foreground color (cf. ). Note that
    marks modify the image (it may be wise to work with a copy) and
    color marks are only available with RGB images (*see*
    [infobox:Color] ).

<span>*Auto-Measure*</span>
:   If checked, clicking on the image records the pixel location and
    intensity. Note that if *Mark Width* is not zero, every time a point
    selection is measured a mark will be painted (cf. ). If unchecked,
    can be used to paint the mark (*Mark Width *diameter) at the
    location of each point.

<span>*Auto-Next Slice*</span>
:   If checked, ImageJ will automatically advance to the next stack
    slice. Note that this feature will only allow one point per slice.

<span>*Add to ROI Manager*</span>
:   If checked, points will be automatically added to the

<span>*Label Points*</span>
:   <span> </span>If checked, each point selection will be displayed
    with an accompanying numeric label.

<span>*Selection Color*</span>
:   Specifies color, chosen from one of the nine default colors*: red*,
    *green*, *blue*, *magenta*, *cyan*, *yellow*, *orange*, *black* and
    *white*. The chosen color is highlighted in the center of the
    Point/MultiPoint Tool. It can also be specified using

 Multi-point Tool[sec:Multi-point-Tool]
---------------------------------------

The Multi-point Tool selects multiple points behaving as the when is
pressed,* Label Points* is checked and *Auto-Measure* and
*Auto-Next Slice* are deselected. As described for the , can also be
used to remove points. Similarly, when using marks are painted with the
diameter of *Mark Width*.

 Wand Tool[sub:Wand-Tool]
-------------------------

Creates a selection by tracing objects of uniform color or thresholded
objects. To trace an object, either click inside near the right edge, or
outside to the left of the object. To automatically outline and measure
objects have a look, e.g., at the
[WandAutoMeasureTool](http://imagej.nih.gov/ij/macros/tools/WandAutoMeasureTool.txt)
macro.

To visualize what happens, imagine a turtle that starts moving to the
right from where you click looking for an edge. Once it finds the edge,
it follows it until it returns to the starting point. Note that the wand
tool may not reliably trace some objects, especially one pixel wide
lines, unless they are thresholded (highlighted in red) using

Double clicking on the wand tool icon (or running ) opens the
configuration dialog box in which three modes (4–connected, 8–connected
or ‘Legacy’) plus a tolerance value can be set @C-WandTool.

![**The . **4/8–connected particles can be traced within an intensity
range.](images/WandTool)

*** ***

<span>*[misc:WandTolerance]Tolerance*</span>
:   The wand takes the pixel value where you click as an initial value.
    It then selects a contiguous area under the condition that all pixel
    values in that area must be in the range $initial\, value-tolerance$
    to $initial\, value+tolerance$.

<span>*[misc:Wand4Connected]4–connected*</span>
:   Only the four neighbors of a pixel are considered neighbors. E.g.,
    the wand does not follow a one-pixel wide diagonal line because the
    pixels of that line are not four-connected.

<span>*[misc:Wand8Connected]8–connected*</span>
:   Each pixel is considered to have eight neighbors. So the wand
    follows a diagonal line if you click onto it. On the other hand, if
    you have an area of constant value dissected by a one-pixel wide
    diagonal line, the 8–connected wand will ‘jump over the line’ and
    include the other part of that area.

<span>*Legacy*</span>
:   In this mode no neighbor is checked and no tolerance is used. This
    is the default mode of the Wand Tool in ImageJ1.42 and earlier.

Modifier keys:


Shift-clicking appends the traced area to previously traced selections

Alt-clicking removes the traced area from previously traced selections

 Text Tool[sec:Text-Tool]
-------------------------

![image](images/TextTool)

Use this tool to add text to images. It creates
text ROIs, rectangular selections containing one or more lines of text.
Note the following when using the Text Tool:

-   Font style and text alignment is specified in the *Fonts* widget,
    activated by double clicking on ![image](images/tools/Text) or by
    running Text is drawn in foreground color (*see* )

-   Use the keyboard to add characters to the text and the backspace key
    to delete characters. Use to type special unit symbols such as
    $\micro$ () or $\angstrom$ (). Note that menu shortcuts require
    holding down while using the Text Tool (*see* )

-   Use () to re-adjust font color and size, text justification and to
    specify a background color for the text selection. [infobox:HEX]
    provides instructions on how to define semi-transparent colored
    backgrounds (*see also* macro)

-   Use () to create non-destructive text annotations (*see* ; ,
    macros). Alternatively, use () to permanently draw the text on the
    image. In the latter case, the background of the text selection is
    not drawn (*see also* [infobox:Color] )

 Magnifying Glass[sec:Magnifying-Glass]
---------------------------------------

Magnifies and reduces the view of the active image. Activate the tool
and click on the image to zoom in. Right-click (or Alt-click) to zoom
out. The current magnification is shown in the image’s title bar. Double
click on the magnifying glass icon to revert to the image’s original
magnification. As explained in , there are 21 possible magnification
levels: 3.1, 4.2, 6.3, 8.3, 12.5, 16.7, 25, 33.3, 50, 75, 100, 150, 200,
300, 400, 600, 800, 1200, 1600, 2400 and 3200%.

Modifier keys:


Clicking and dragging while holding down the Shift key runs

Image zooms out (right-click behavior)

 Scrolling Tool[sec:Scrolling-Tool]
-----------------------------------

Allows you to scroll through an image that is larger than its window.
You can temporarily activate this tool (except when using the ) by
holding down the space bar.

 Color Picker[sec:Color-Picker]
-------------------------------

Sets the foreground drawing color by ‘picking up’ colors from any open
image. Colors can also be picked up from the Color Picker (CP) window ()
using any tool. In the icon, the ‘eye dropper’ is drawn in the current
foreground color while the frame around it is drawn in the current
background color. and use the foreground color. , and use the background
color. Double clicking on the tool icon will display the Color Picker
window.

Modifier key:


Alt-clicking with the Color Picker Tool on the image canvas ‘picks-up’
background color

 *More Tools* Menu[sec:ToolSwitcher]
------------------------------------

The eight slots between the and the *More Tools* Menu can be customized
using this drop-down menu (named *Toolset Switcher* in previous IJ
versions). Tool configurations are stored in the ImageJ preferences file
(*see* ) and retrieved across restarts.

The is populated by in , installed in , built-in tools loaded from (, ,
, , , , , and ) and installed in .

At startup, the default set of tools is typically loaded from . Later
on, tools can be appended or replaced. are installed in the first
available slot, or in the last slot if no free slots are available.
replace all the eight slots in the toolbar. Choose *Remove Tool*s to
reset the toolbar.

The icons for drawing tools installed from this menu reflect the
foreground color (*see* ) and are updated when the foreground color
changes.

Modifier key:


Shift-clicking on the menu icon will open the selected macro ( and
files)

  Arrow[sub:ArrowTool2]
-----------------------

Installs a copy of the on the first available toolbar slot (or the last
if no free slots are available), so that it can be accessed without the
need of selecting it on the dropdown menu. Refer to the original for
details and modifier keys.

  Brush[sub:Brush]
------------------

![image](images/Brush)

A freehand paintbrush tool that draws
invasively (as opposed to the that draws on a non-destructive image
overlay (*see* and commands).

Double clicking on the tool icon opens its *Options* dialog box in which
is possible to specify the *Brush width* (in pixels) and *Color*.

Being an annotation tool, the paintbrush paints in foreground color as
reflected its icon (*see* [infobox:Color] when working with non-RGB
images). The *Color* dropdown menu provides a convenient way to reset
the foreground color to one of the default options, bypassing the need
of opening the , evoked using .* *As previously described (*see* ), undo
is restricted to last drawing step. The Brush and tools are in all
similar, differing only on brush (stroke) size.

Modifier keys:


Shift-dragging on the canvas will adjust the brush size

Holding Alt makes the brush paint in background color

  Developer Menu[sub:DevMenu]
-----------------------------

A drop-down menu collecting several online resources and commands that
are useful when writing , or troubleshooting ImageJ operations.

*Debug mode* activates ImageJ’s debugging mode ().

  Flood Filler[sub:FloodFiller]
-------------------------------

A *paint bucket *tool that fills with the current foreground color
adjacent pixels that have the same value as the clicked pixel. Double
click on the tool icon to specify the [flood
type](http://en.wikipedia.org/wiki/Flood_fill) in terms of pixel
connectivity: or .

To spread the fill to contiguous pixels within an intensity range, use
the instead: Double click on the Wand Tool icon to set a value, then
press () to fill with foreground color (highlighted in the Flood Filler
icon) or / () to fill with background color (*see* ).

Modifier keys:


Alt-clicking makes the brush paint in background color

  LUT Menu[sub:LUTMenu]
-----------------------

A drop-down menu listing all the commands. It is a convenient way to
deal with a large collection of lookup tables that otherwise would only
be accessed through the menu bar. Note that although it is not possible
to organize LUTs into subfolders, it is possible to rename the most
frequently used lookup tables with a numeric prefix (e.g, , , etc.) so
that they are listed earlier in the menu.

  Overlay Brush[sub:OverlayBrush]
---------------------------------

![image](images/OverlayBrush)

A freehand paintbrush that draws on a non-destructive image overlay
(*see* ), as opposed to the tool that draws invasively over the canvas.

Double clicking on the tool icon opens its *Options* dialog box in which
is possible to specify the *Brush width* (in pixels), *Transparency (%)*
and *Color*.

As previously described (*see* and tools), the *Color* dropdown menu
changes the foreground color, bypassing the (activated by ). Press
*Undo* to remove the last painted stroke from the overlay. Overlay
manipulations are described in .

  Pencil[sub:Pencil]
--------------------

A freehand painting tool that draws invasively in foreground color. It
is in all similar to the tool but it is typically used with thinner
strokes. Double clicking on the tool icon opens its *Options* dialog box
in which is possible to specify the *Pencil width* (in pixels) and
*Color*. Refer to the tool tools for details.

Modifier keys:


Shift-dragging on the canvas will adjust the brush size

Holding Alt makes the brush paint in background color (*see* )

  Pixel Inspector[sub:PixelInspector]
-------------------------------------

![image](images/PixelInspector)

The Pixel inspector displays the values of a
square neighborhood around the current cursor position as a table
@C-PixelInspector. Values are updated in real time as the mouse is
dragged over the image. It is useful to examine how a filter changes the
pixel data. E.g., load Pixel Inspector, move the cursor over an image
and run : When toggling the *Preview* checkbox you will be able to
monitor in real time how different *Sigma* radius change pixel values.

In the *Pixel Values* table, columns and row headers (x & y positions)
are expressed in pixel coordinates. The y-axis direction is determined
by the value in The center position (current cursor) is printed in red
(*x*, *y*, *value*). When the table is in the foreground, the arrow keys
can be used to nudge the neighborhood square (outlined in red) and the
table can be copied into the clipboard by pressing . For settings, press
the *Prefs* button at the top left of the table:

<span>*Radius*</span>
:   Specifies the size of the table, $3\times3$ for $radius=1$;
    $5\times5$ for $radius=2$, etc.

<span>*Grayscale readout*</span>
:   The numeric output for 8 and 16–bit grayscale images. Can be* Raw*
    <span>[</span>the default<span>]</span>, *Calibrated*
    <span>[</span>*see* or Hexadecimal (*Hex*).

<span>*RGB readout*</span>
:   The numeric output for RGB images. Can be *R,G,B* triplets, *Gray
    Value* or Hexadecimal (*Hex*) <span>[</span>*see* [infobox:HEX] .
    The mean grayscale value is determined by the weighting factors
    specified in

<span>*Copy to clipboard*</span>
:   Specifies which data is copied to the clipboard. Choose *Data only*
    to copy the table without headers, *x,y and Data* to copy the
    current position (x,y) values followed by remaining data or *Header
    and Data* to copy the table with headers. Tables are copied as
    tab-delimited values.

  Spray Can[sub:SprayCan]
-------------------------

The Spray Can (*Airbrush* tool) draws random pixels in the current
foreground color (*paint*) (*see* and [infobox:Color] ). It behaves as a
traditional airbrush or spray paint: Holding the main mouse button
(without moving the cursor) will build up *paint*, as if pressing the
nozzle of an aerosol paint can.* Spray widt*h,* Dot size* and *Flow
rat*e can be specified by double clicking on the tool icon.

This tool is useful to generate random spot noise. Use it to, e.g.,
assess the effectiveness of median filtering: Load the Spray Can tool,
apply it over an image and toggle the *Preview* option in the prompt.

  Stacks Menu[sub:StacksMenu]
-----------------------------

A drop-down menu collecting several commands related to and , otherwise
accessed through the hierarchy of , and submenus. The list makes a
particular emphasis on commands that have no keyboard shortcuts
assigned.

Custom Tools[sec:CustomToolsAndToolsets]
========================================

Customized tools are add-ons (macros and plugins) that allow custom
interactions with the ImageJ toolbar and/or the image canvas. They are
installed on the right side of the between the and the . At startup, the
default set of tools is loaded from . Later on, tools can be appended or
replaced using the menu. As mentioned, custom tool configurations are
saved in the preferences file, and thus remembered across restarts
(*see* ).

It is worth it to mention some differences between the installation of
single tools and toolsets:

<span>Single Tools[misc:CustomSingleTools]</span>
:   Single tools are appended to the first available toolbar slot or
    installed in the last slot if no free slots are available. Tools can
    be macros ( and files) or <span> </span> plugins ( and files) and
    are listed on the menu if placed in the directory. In addition to
    the macro tools distributed with ImageJ and saved in , a vast
    repertoire of
    [tools](http://imagej.nih.gov/ij/plugins/index.html#tools) is
    available on the ImageJ website.

<span>Toolsets[misc:Toolsets]</span>
:   Toolsets are macro files ( and files) containing up to eight macro
    tools, along with any number of ordinary macros. Toolsets are listed
    on the menu if installed in the directory. Choosing a toolset (e.g.,
    *Lookup Tables*) replaces all previously installed tools.\
    As mentioned, contains the tools loaded at startup. This file can be
    customized using or by holding when choosing *Startup Macros* from
    the menu.\
    ImageJ feature several pre-installed toolsets @C-Toolsets and many
    others are available on the [ImageJ
    website](http://imagej.nih.gov/ij/plugins/index.html#toolsets).
    Toolsets can also be created by choosing *Toolset Creator*, a
    convenient way to create groups of Menu Tools listing commands.

Contextual Menu[sec:ContextualMenu]
===================================

![image](images/PopupMenu)

As mentioned earlier macros and macro tools in the` ` are automatically installed
in the submenu and in the toolbar when ImageJ starts up.

In addition, the file also installs the contextual (popup) menu
displayed when right-clicking on an image. Other macros and toolsets
(e.g., [Magic
Montage](http://imagejdocu.tudor.lu/doku.php?id=howto:working:work_with_magic_montage))
may also replace the default menu with specialized ones. In this case,
re-installing the StartupMacros (using the ) will revert the contextual
menu to its default.

*[The ImageJ Macro Language — Programmer’s Reference
Guide](http://imagej.nih.gov/ij/docs/macro_reference_guide.pdf)*
explains how this menu can be customized:

> The menu that is displayed when a user right-clicks (or ctrl-clicks)
> on an image window can be customized through installation of the
> `Popup Menu` macro. Any menu has a name and a list of menu items. The
> `newMenu(name, items)` macro function allows the creation of a new
> menu. This menu passes the chosen item as a simple string to the
> `Popup Menu` macro. From this point you can decide what to do,
> according to what item was chosen.

    /* The "Popup Menu" macro defines the menu that is displayed when right clicking (or ctrl-clicking) on an image. It is part of the startup macros (StartupMacros.txt) and several other macro toolsets
     */
     var pmCmds= newMenu("Popup Menu", newArray("Help...", "Rename...", "Duplicate...", "Original Scale", "Paste Control...", "-", "Record...", "Capture Screen ", "Monitor Memory...", "Startup Macros...", "Search...", "-", "Find Maxima..."));

     macro "Popup Menu" {
      cmd= getArgument(); 
      if (cmd=="Help...")
         showMessage("About Popup Menu",
                "To customize this menu, edit the line that starts with\n"+
                "\"var pmCmds\" in ImageJ/macros/StartupMacros.txt.");
      else
         run(cmd);
     }

So, e.g., to add the ability to run the command from the contextual menu
one can simply add that command to the list of items defining the
`PopUp Menu`. Note that “-” defines menu separators:

``` {startFrom="3" showstringspaces="false" tabsize="4"}
 var pmCmds= newMenu("Popup Menu", newArray("Help...", "Rename...", "Duplicate...", "Original Scale", "Paste Control...", "-", "Record...", "Capture Screen ", "Monitor Memory...", "Startup Macros...", "Search...", "-", "Find Maxima...", "-", "Subtract Background..."));
```

Results Table[sec:Results-Table]
================================

are organized in four menus:*, , *and* . *A contextual menu listing the
majority of these commands can be accessed by right-clicking anywhere in
the Results window.

<span>**</span>
:   Exports the measurements as a tab-delimited or comma-delimited text
    file as defined in **

<span>**</span>
:   Renames the table. Because ImageJ outputs measurements exclusively
    to the *Results* table, renaming the table will freeze its contents.

<span>**</span>
:   Creates a new table containing a copy of the data. Note that ImageJ
    will not output measurements to duplicated tables.

<span>**</span>
:   This menu contains commands to adjust font size.

<span>**</span>
:   Alias for the command.

<span>**</span>
:   Alias for the command.

<span>**</span>
:   Alias for the command.

<span>**</span>
:   Alias for the command.

<span>**</span>
:   Opens the dialog in which is possible to specify if column headers
    and row numbers should be saved or copied from ImageJ tables
    (including the Summarize table, cf. ). In addition, it allows to
    specify the file extension to be used when saving data. Custom
    extensions (e.g., , or ) allow ImageJ tables to be imported
    seamlessly by spreadsheet applications. ImageJ tables are saved in
    CSV format if *File extension for tables* is .

Editor[sub:ImageJ-Macro-Editor]
===============================

, and can be opened and executed in the ImageJ editor. The editor
commands are organized in five menus:*,,,* and*.*

![**The ImageJ editor (version1.43n).** The editor is a simple text
editor featuring , an essential tool when writing . The is a more
advanced editor featuring syntax highlight and** **support to all of ’s
scripting languages.](images/MacroEnvironment)

<span>**</span>
:   Basic file operations (Open, Save, Print, etc.) are listed in this
    menu. The last saving directory is kept in , the IJ preferences file
    (*see* ).

<span>**</span>
:   Similarly to any other text editor this menu contains commands
    related to text handling as well as commands for locating text.
    Specially useful are:

    :   , This dialog box enables you to quickly go to a specified line
        of code.

    :   This command finds and deletes the extraneous non-visible,
        non-printing characters that sometimes appear when cutting and
        pasting from other sources, such as email messages that may
        contain extraneous control characters, or any non-ASCII
        characters.

    :   This command will copy the selected text (or the entire contents
        of the editor if no selection is present) to the image header,
        being available through the command. Note that the copied text
        will substitute any other information present in the file header
        and will only be available in images saved as TIFF (*see*
        [infobox:Formats] ).

<span>**</span>
:   This menu contains commands to adjust font size and type.

<span>**</span>
:   This menu contains commands that allow you to run, install or
    evaluate macro code:

    :   , Runs the macro or the selected line(s) of code.

    :   , Runs the line of code that contains the insertion point.

    :   Exits the macro.

    :   , Adds the macro(s) contained in the editor to submenu (
        command).

    :   , Opens the [Macro Functions reference
        page](http://imagej.nih.gov/ij/developer/macro/functions.html),
        the indispensable guide to the built-in functions that can be
        called from the ImageJ macro language (alias for

    :   , @C-FxFinder Retrieves macro functions in the same way
        retrieves commands. Functions are read from the file stored in
        the macros folder (a local copy of
        <http://imagej.nih.gov/ij/developer/macro/functions.html>). This
        file is deleted by command every time ImageJ is updated to a
        release version (i.e., not a *daily build*, *see* ), forcing
        Function Finder to download a fresh copy the next time it is
        launched.

    :   , Runs JavaScript code in the editor window. Note that runs
        JavaScript code if the title of the file ends with ‘.js’.

<span>**</span>
:   This menu contains seven commands related to the macro debugging.
    You can debug a macro using the commands in the menu. You start a
    debugging session initiating . You can then single step through the
    macro code by repeatedly running .

    :   , Starts running the macro in debug mode and opens the ‘Debug’
        window, which initially displays the memory usage, number of
        open images, and the active image’s title. The macro stops
        running at the first executable line of code, which is
        highlighted. Use one of the following commands to continue
        execution.

    :   , Executes the highlighted statement and advances to the next.
        The variable names and values in the ‘Debug’ window are updated.

    :   , Runs the macro, displaying variable names and values in the
        ‘Debug’ window as they are encountered.

    :   , Same as above, but faster.

    :   Runs the macro to completion at normal speed (similarly to ).

    :   , Runs the macro to a statement that was previously defined by
        clicking the mouse on an executable line of code.

    :   Exits debug mode.

Log Window[sec:Log-Window]
==========================

![image](images/LogWindow1)

The Log window is used to display useful
information about ongoing operations. It is frequent for plugins and
macros to send messages to the Log window reporting progress, errors or
troubleshooting information.

If you are troubleshooting a problem, you can check *Debug mode* in to
have ImageJ outputting messages to the Log window (ImageJ will exit
debug mode as soon as the Log window is closed).

In addition, Tiff tags and information needed to import files are
printed to the log window when ImageJ runs in Debug Mode.

Most of the general shortcut keys described in apply to the Log window.

![image](images/LogWindow2)

In the , double click on a file path to have it open by ImageJ.

Customizing the ImageJ Interface[sec:GUIcustomization]
======================================================

Most settings determining the look and feel of ImageJ are listed in ,
namely and (*see also* ). However, other aspects of the ImageJ interface
can also be personalized.

Floating Behavior of Main Window[sub:FloatingMainWin]
-----------------------------------------------------

It is possible to place the above all other windows at all time using a
simple JavaScript instruction:
<span>`IJ.getInstance().setAlwaysOnTop();`</span>.

To test it, copy this one line script to the clipboard (or download from
the online [scripts repertoire](http://imagej.nih.gov/ij/macros/js/)),
switch to ImageJ, type (), then type (). To create an “” command, save
this script in the plugins folder as and run to start using the new
command. Macro exemplifies how to set this option at launch.

Pointer[sub:Pointer]----------------------------------

At startup, ImageJ will search for a GIF image named in the directory.
If present, it will be used to replace the default crosshair cursor. The
pointer can also be changed to an arrow by toggling *Use pointer cursor*
on

  --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  <span>\
  </span>![image](images/pointers/crosshair-cursor-1)![image](images/pointers/crosshair-cursor-2)![image](images/pointers/crosshair-cursor-3)![image](images/pointers/crosshair-cursor-4)![image](images/pointers/crosshair-cursor-5)![image](images/pointers/crosshair-cursor-6)![image](images/pointers/crosshair-cursor-7)![image](images/pointers/crosshair-cursor-8)<span>\
  </span>
  --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

    // These macros can be added to the ImageJ/macros/StartupMacros.txt file in order to set the floating behavior of the ImageJ main window

     // option 1) Run ImageJ/plugins/Always_on_Top.js command at launch, by adding it to the "AutoRun" macro
     macro "AutoRun" {
       run("Always on Top");
     }

     // option 2) Execute the script at launch, by adding it to "AutoRun"
     macro "AutoRun" {
       eval("script", "IJ.getInstance().setAlwaysOnTop(true)");
     }

     // option 3) Toggle the setAlwaysOnTop option using a shortcut, e.g., F1
     var afloat;
     macro "Toggle AlwaysOnTop [F1]" {
       booleans = newArray("true", "false");
       eval("script","IJ.getInstance().setAlwaysOnTop("+ booleans[afloat] +")");
       afloat = !afloat;
     }

As described in , the menu bar lists all ImageJ commands. It is
organized in eight menus:

<span>windowss</span>

Basic file operations (opening, saving, creating new images). Most are
self-explanatory.

Editing and drawing operations as well as global settings.

Conversion and modification of images including geometric
transformations.

Image processing, including point operations, filters and arithmetic
operations.

Statistical measurements, profile and histogram plotting and other
operations related to image analysis.

Commands for creating, editing and managing add-ons (*see* ), listing
all the user-installed , and installed in the directory.

Selection and management of open windows.

Updates, documentation resources and version information.

The menu can become easily cluttered after the installation of several
plugins. Since reflects the hierarchy of directories in (up to two
subfolders), submenus (i.e., subfolders) can be created to keep the menu
organized, preventing it from running off the bottom of the screen. E.g,
to move the plugin into a submenu, one would move into .

In addition, checking the *Move isolated plugins to Misc. menu* checkbox
in will compact the menu list by moving to all the plugins with only one
command that try to install themselves in submenus.

Note that external plugins can be installed in any of the ImageJ menus.
This is the case of plugins packaged in JAR files containing a
configuration file () specifying the location of the new commands
implemented by the plugin. You can rename, reorganize or move commands
implemented by external plugins by editing their file as described on
the [JAR demo documentation
page](http://rsbweb.nih.gov/ij/plugins/jar-demo.html). If you don’t know
in which menu a plugin has been registered, use *Show full information*
in the command Finder () to find out the location of the installed
files.

With , and can be registered in any menu by saving into . E.g., a
certain macro ( file) saved in is registered in the submenu.

[sec:File]
==========

Contains commands for creating new images, stacks, hyperstacks or text
windows.

### [sub:Image...[n]]

![image](images/New)

Creates a new image window or stack. A dialog box allows you to specify the
image title, type, dimensions and initial content.

*Name* is the title that will be used for the Window. *Type* is the
image type: 8–bit grayscale, 16–bit grayscale (unsigned), 32–bit (float)
grayscale or RGB color. *Fill With* (*White*, *Black* or *Ramp*)
specifies how the image is initialized. *Width* and *Height* specify the
image dimensions in pixels. Set *Slices* to a value greater than one to
create a stack.

### [sub:Hyperstack...]

Alias for the command<span>.</span>

### [sub:TextWindow[N]]

Creates a new text window with the title ‘Untitled.txt’.

### [sub:InternalClipboard]

Opens the contents of the internal ImageJ clipboard.

### [sub:SystemClipboard[V]]

Opens the contents of the operating system clipboard.

[sub:Open...]
-------------

Opens an image and displays it in a separate window. Image files must be
in TIFF, GIF, JPEG, DICOM, BMP, PGM or FITS format, or in a format
supported by a reader plugin. Also opens:

-   ImageJ and NIH Image lookup tables ( extension).

-   Tables (in tab-delimited text format) (or extension, *see* )

-   Selections ( or extension)

-   Text files (, , and extensions)

-   …

While the command opens formats natively supported by ImageJ (images and
non-images files), the submenu provides access to plugins for additional
file types (e.g., reading ‘raw’ files, images in ASCII format or loading
images over the network). Most of ImageJ’s
[Input/Output](http://imagej.nih.gov/ij/plugins/#io) plugins are
installed on this submenu.

Note that almost every format known to ImageJ can be opened by dragging
and dropping the file into the . E.g., in the illustration below a
remote macro file is opened by dragging its URL directly from a Web
browser.

![image](images/DragAndDrop)

[sub:OpenNext[O]]
-----------------

Closes the current image and opens the next image (if any) in its
directory. Holding opens the previous image (if any) in its directory.

[sub:OpenSamples]
-----------------

Opens example images hosted on the ImageJ Web site. These sample images
are useful for creating, testing and debugging macros since routines can
be applied to the same image, regardless of where the macro is run.
Among all, probably the most used is* blobs.gif*: .

Sample images can be downloaded from <http://imagej.nih.gov/ij/images/>
or, in bulk, from either
<http://imagej.nih.gov/ij/download/sample-images.zip>, or in , by
running . The ‘AutoRun’ macro in the file can then be used to change the
default path of sample images, allowing a complete off-line usage of the
submenu:

    /* This macro calls the Prefs.setImageURL() method to change the default path of Sample Images (http://imagej.nih.gov/ij/images/) to a local subfolder of ImageJ's directory named "samples". Note that Fiji provides this feature by default.
     */

     macro "AutoRun" {
       dir= getDirectory("imagej") + "samples";
       if (File.exists(dir)) {
           dir= replace(dir, " ", "       if (startsWith(getInfo("os.name"), "Windows"))
               dir= "/"+ replace(dir, File.separator, "/");
           call("ij.Prefs.setImagesURL", "file://"+ dir +"/");
       } 

The submenu shows a list of the 15recently opened files. Click on a
filename to open it.

[sub:Import]
------------

This submenu lists the installed image reader plugins.

### [sub:Image-Sequence...]
![image](images/SequenceOptions)

Opens a series of images in a chosen folder as
a stack. Images may have different dimensions and can be of any format
supported by ImageJ (*see* and
[HandleExtraFileTypes](http://imagej.nih.gov/ij/plugins/file-handler.html)
plugin). Non-image files (, , , , etc. ) are ignored.

Information – width$\times$height$\times$depth (size) – of the stack to
be created is displayed at the bottom of the dialog.

<span>*Number of Images*</span>
:   Specifies how many images to open.

<span>*Starting Image*</span>
:   If set to *n,* import will start with the
    *n*$^{\text{}th}$$^{\text{}}$ image in the folder.

<span>*Increment*</span>
:   If set to ‘2’ every other image will be opened, if set to ‘3’ to
    every third image will be opened, etc.

<span>*File Name Contains*</span>
:   Enter a string into this field and ImageJ will only open files whose
    name contains that string.

<span>*Enter Pattern*</span>
:   Regular expressions (regex) can be typed here for advanced filtering
    (*see* ).

<span>*Scale Images*</span>
:   Setting a value less than 100% will reduce memory requirements.
    E.g., entering 50 reduces the amount of memory needed to open a
    stack by 25% (two-dimensional images: $0.5\times0.5=0.25$ of the
    original data). This value is ignored if *Use Virtual Stack* is
    checked.

<span>*Convert to RGB*</span>
:   Allows a mixture of RGB and grayscale images to be opened by
    converting all the sequence to RGB. Note that if this option is
    unchecked and the first imported image is 8–bit then all the
    remaining images in the sequence will be converted to 8–bit.
    Checking this option, circumvents this issue.

<span>*Sort Names Numerically*</span>
:   <span> </span>When checked, the stack will be opened in
    <span>numeric</span> file name order (e.g., ‘name1.tif’,
    ‘name2.tif’, ‘name10.tif’) instead of alphanumeric order (e.g.,
    ‘name1.tif’, ‘name10.tif’, ‘name2.tif’). DICOM files in the same
    series (tag\#0020,0011) are always sorted by the image number
    (tag\#0020,0013). The *List Stack Tags* macro, part of the
    [ListDicomTags](http://imagej.nih.gov/ij/macros/ListDicomTags.txt)
    macro set, lists the values of the image number and image series
    tags.

<span>*Use Virtual Stack*</span>
:   When checked, images are opened as a read-only virtual
    (disk-resident) stack using a version of the [Virtual Stack
    Opener](http://imagej.nih.gov/ij/plugins/virtual-opener.html)
    plugin. This allows image sequences too big to fit in RAM to be
    opened, but access time is slower and changes are lost when
    switching to a different image in the stack (*see* ). Note the
    following consequences of enabling this option:

    -   Image are not loaded

    -   If the folder contains tiff stacks, only the first slice of
        those stacks will be imported (with RAM resident stacks, all
        slices are imported and concatenated into the sequence
        <span>[</span>*see* )

<span>*Help*</span>
:   Opens <http://imagej.nih.gov/ij/docs/menus/file.html#seq1>.

[h]

<span>clll</span> & & <span>\
</span> & <span>Delimit the set of characters to match</span> &
<span>aA<span>]</span> </span> & <span>Either lower or upper case
A</span><span>\
</span><span>-</span> & <span>Character ranges</span> &
<span>0-9<span>]</span> </span> & <span>Any digit (from 0 through
9)</span><span>\
</span><span>.</span> & <span>Any character</span> &
<span>0-9<span>]</span>.</span> & <span>A digit plus any other
character</span><span>\
</span> & <span>Zero or more of the preceding item</span> &
<span>.<span>\*</span></span> & <span>Any character
sequence</span><span>\
</span><span>?</span> & <span>Zero or one of the preceding item</span> &
<span>0-9<span>]</span>?</span> & <span>An optional digit</span><span>\
</span><span>+</span> & <span>One or more of the preceding item</span> &
<span>0-9<span>]</span>+</span> & <span>At least a digit</span><span>\
</span><span>\^</span> & <span>Negation</span> &
<span>\^0-9<span>]</span></span> & <span>Any character that is not a
digit</span><span>\
</span><span>&&</span> & <span>AND (Intersection)</span> &
<span>0-9&&<span>[</span>\^3<span>]</span><span>]</span></span> &
<span>A digit that is not 3</span><span>\
</span><span>|</span> & <span>OR (Alternation)</span> &
<span>0-9<span>]</span>|<span>[</span>a-zA-Z<span>]</span></span> &
<span>A digit or lower or upper case letter</span><span>\
</span>

Since ImageJ1.44d, the command no longer features the *Convert to 8-bit
Grayscale* checkbox. This option was used to reduce memory requirements
but used different scaling for each imported image.

As a replacement, use the *Use virtual stack* option and then convert to
8–bit using Memory requirements can also be reduced by using the *Scale
Images (%) *option. The amount of memory allocated to ImageJ can be
adjusted in

### [sub:Import\>Raw]

![image](images/ImportRaw)

Use this command to import images that are not in a file format directly
supported by ImageJ. You will need to know
certain information about the layout of the image file, including the
size of the image, and the offset to the beginning of the image data.

Interleaved RGB images have pixels stored contiguously (rgbrgbrgb…) in a
single image plane. Planar RGB images have the red, green and blue image
data stored in separate 8–bit sample planes. ImageJ saves RGB images
(both TIFF and raw) in interleaved format.

<span>*Image Type*</span>
:   There are fourteen choices depicted above. <span>16–bit signed
    integer images are converted to unsigned by adding 32,768</span>.
    <span>1–bit Bitmap images are converted to 8–bit.</span>

<span>*Image Width*</span>
:   The number of pixel in each row of image data.

<span>*Image Height*</span>
:   The number of rows in the image.

<span>*Offset to First Image*</span>
:   The number of bytes in the file before the first byte of image data.

<span>*Number of Images*</span>
:   The number of images stored in the file. If this value is greater
    than the actual number of images the resulting stack will get
    truncated to the actual size.

<span>*Gap Between Images*</span>
:   The number of bytes from the end of one image to the beginning of
    the next. Set this value to
    width$\times$height$\times$bytes-per-pixel$\times$*n* to skip *n*
    images for each image read.

<span>*White is Zero*</span>
:   Should be checked if black pixels are represented using numbers that
    are less than the numbers used for white pixels. If your images look
    like photographic negatives, changing this field should fix the
    problem.

<span>*Little-Endian Byte Order*</span>
:   Probably needs to be checked when importing 16–bit or 32–bit
    grayscale images from little-endian machines such as Intel based
    PCs.

<span>*Open All Files in Folder*</span>
:   If checked, ImageJ will import all the images in the folder as a
    stack. The images must all be the same size and type.

<span>*Use Virtual Stack*</span>
:   Images are imported as virtual stacks.

<span>*Help*</span>
:   Opens <http://imagej.nih.gov/ij/docs/menus/file.html#raw>.

### [sub:Import\>LUT]

Opens an ImageJ or NIH Image lookup table, or a raw lookup table. The
raw LUT file must be 768bytes long and contain 256reds, 256blues and
256greens. If no image is open, a 256$\times$32 ramp image is created to
display the LUT. Note that lookup tables with file names ending in can
also be opened using or drag and drop.

### [sub:Import\>Text-Image]
Opens a tab-delimited text file as a 32–bit real image (*see* ). The
image’s width and height are determined by scanning the file and
counting the number of words and lines. For text files with integer
values no larger than 255, use to convert to 8–bit. Before converting,
disable *Scale When Converting* in to prevent the image from being
scaled to 0–255.

### [sub:Import\>Text-File] 

Opens a text file. Note that text files can also be opened using or drag
and drop.

### [sub:Import\>URL]
![image](images/Url)

Downloads and displays known formats to ImageJ specified by a URL. Other
URLs ending with ‘/’ or ‘.html’ are
opened in the user’s default browser. The Input URL is saved in the
ImageJ preferences file and retrieved across IJ restarts.

It is also possible to open zip archives, using a URL, that contain
multiple DICOM images. Some example URLs are:

-   <http://imagej.nih.gov/ij/images/ct.dcm>

-   file:///Macintosh HD/images/Nanoprobes.tif

-   file:///D:images\\neuron.tif

-   <http://imagej.nih.gov/ij/> (opens the ImageJ website)

### [sub:Import\>Results]

Opens an ImageJ table, or any tab or comma-delimited text file (*see* ).
Note that and files can also be opened by drag and drop.

### [sub:Stack-From-List...]

Opens a stack, or virtual stack, from a text file or URL containing a
list of image file paths @C-StackFromList. The images can be in
different folders but they must all be the same size and type. The
[Virtual Stack From
List](http://imagej.nih.gov/ij/macros/VirtualStackFromList.txt) macro
demonstrates how to generate a list of images and then use that list to
open the images as a virtual stack. The
[OpenStackUsingURLs](http://imagej.nih.gov/ij/macros/OpenStackUsingURLs.txt)
macro demonstrates how to how to open an image series from a remote
server.

### [sub:Import\>TIFF-Virtual-Stack]

Opens a TIFF file as virtual stack (*see* and [infobox:VirtualTiff] ).

### [sub:Import\>AVI...]
![image](images/AviReader)

Uses a built in version of the
[AVI reader](http://imagej.nih.gov/ij/plugins/avi-reader.html) plugin to open
an AVI file (JPEG or PNG compressed, or uncompressed) as a stack or
virtual stack (one slice per video frame) @C-AviPlugins. Animation speed
is retrieved from image frame rate. AVI files can also be opened using
or drag and drop but macros must use this command to gain access to the
dialog box options.

ImageJ supports a restricted number of AVI formats including MJPG
(motion-JPEG) and various YUV 4:2:2/4:2:0 compressed formats
(cf. [plugin source
code](http://imagej.nih.gov/ij/source/ij/plugin/AVI_Reader.java)). The
[OME Bio-Formats library](http://loci.wisc.edu/software/bio-formats)
(*see* ) extends support to MSRLE and MSV1 encoded formats.

The dialog promt allows you to choose if frames should be converted to
8–bit grayscale or flipped vertically. For large files, an option to
open the movie as a virtual stack is also available (*see* ). It is also
possible to specify the starting and ending frame. Enter $0$ (zero) to
specify the last frame, $-1$ to specify the second last frame, etc.

### [sub:Import\>XYcoordinates...]
Imports a two column text file, such as those created by , as a polygon
selection. The selection is displayed in the current image or, if the
current image is too small, in a new blank image. Coordinates of active
selection (at evenly spaced one pixel intervals) can be retrieved using
the *List coordinates* options in .

[sub:Close[w]]
--------------

Closes the active image.

[sub:Close-All]
---------------

![image](images/Close-All)

Closes all open images. An alert is displayed
if there are unsaved changes.

[sub:Save[s]]
-------------

Saves the active image in TIFF format, the ‘default’ format of ImageJ
(cf. [infobox:Formats] ). To save only a selected area, create a
rectangular selection and use the command. Note that and are redundant
commands.

[sub:SaveAs]
------------

Use this submenu to save the active image in TIFF, GIF, JPEG, or ‘raw’
format. Can also be used to save measurement results, lookup tables,
selections, and selection XY coordinates.

### [sub:Tiff...]

Saves the active image or stack in TIFF format in redundancy with
<span>.</span> TIFF is the only format (other than ‘raw’) that supports
all ImageJ data types (8–bit, 16–bit, 32–bit float and RGB) and the only
format that saves spatial and density calibration. In addition and are
also saved in the TIFF header.

By default, 16–bit and 32–bit images are saved using big-endian byte
order. Check *Save TIFF and Raw in Intel Byte Order* in the dialog box
to save using little-endian byte order.

### [sub:Gif...]
Saves the active image in GIF format. RGB images must first be converted
to 8–bit color using using . The value to be used as the transparent
index (0–255) can be set in the dialog box. Stacks are saved as animated
GIFs. Use (or right-click on the on the play/pause icon that precedes
the stack slider) to set the frame rate.

### [sub:Jpeg...]

Saves the active image in JPEG format. Edit *JPEG Quality* dialog box to
specify the JPEG compression level (0–100). This value is shown on the
title of the save dialog prompt. Lower values produce smaller files but
poorer quality. Larger values produce larger files but better quality.
Color sub-sampling is disabled when the value is set to 100, reducing
the likelihood of color artifacts. By default, the DPI in the JPEG
header is set to 72. For a higher value, use a unit of *inch* in the
dialog. E.g., setting *Distance in Pixels* to 300,* Known Distance* to 1
and *Unit of Length* to ‘inch’ will set the DPI to 300.

are embedded when saving in Jpeg format (*see* ).

The JPEG format uses that leads to severe artifacts that are not
compatible with quantitative analyses. As such, it should only be used
for [presentation
purposes](http://fiji.sc/wiki/index.php/IP_Principles#Why_.28lossy.29_JPEGs_should_not_be_used_in_imaging)
(if file size is an issue), but even then a lossless format such as
[PNG](http://en.wikipedia.org/wiki/Portable_Network_Graphics) is
probably more suitable.

The illustration below exemplifies the consequences of saving images in
a lossy format. To replicate it, open the [Mandrill sample
image](http://imagej.nih.gov/ij/images/baboon.jpg) (by drag and drop, or
alternatively using and typing the image’s path,
<http://imagej.nih.gov/ij/images/baboon.jpg>), duplicate it (), save the
duplicate as JPEG (), run (so that the saved version is reloaded by
ImageJ) and calculate the difference between the two images using

By adjusting the , you will notice that the imperceptible JPEG artifacts
are most pronounced along regions of higher contrast changes. In
addition to this edge artifact, the JPEG algorithm may shift colors to
improve compression which may lead to artificial
[colocalization](http://fiji.sc/wiki/index.php/Colocalization_Analysis).
These artifacts are intrinsic to the format and may persist even if
*JPEG Quality* has been increased to 100% in Once an image has been
lossy compressed there is no way of reverting it to the original. Given
all this, and since is poorly supported in lossy formats, it is
unreasonable to use JPEG in image processing.

<span>\>p<span>0.31</span>\>p<span>0.31</span>\>p<span>0.31</span></span>
<span>Original       </span> & <span>JPEG copy (75% quality)   </span> &
<span>   Difference</span><span>\
</span>

![image](images/JpegArtifacts)

### [sub:SaveAs\>Text-Image...]

Saves the active image as a spreadsheet compatible tab-delimited text
file. Calibrated and floating-point images are listed with the precision
specified by *Decimal places* in For RGB images, each pixel is converted
to grayscale using the formula
$\text{gray}=(\text{red}+\text{green}+\text{blue})/3$ or the formula
$\text{gray}=0.299\times\text{red}+0.587\times\text{green}+0.114\times\text{blue}$
if *Weighted RGB to Grayscale Conversion* is checked in

![image](images/TextImage)

### [sub:Zip...]

Saves the active image or stack as a TIFF file inside a compressed ZIP
archive.

### [sub:Raw-Data...]

Saves the active image or stack as raw pixel data without a header.
8–bit images are saved as unsigned bytes, unsigned 16–bit images are
saved as unsigned shorts and signed 16–bit images (e.g., ) are saved as
signed shorts. 32–bit images are saved as floats and RGB images are
saved in three bytes per pixel (24–bit interleaved) format. 16–bit and
32–bit (float) images are saved using big-endian byte order unless
*Export Raw in Intel Byte Order* is checked in the dialog box.

### [sub:SaveAs\>Image-Seq...]

![image](images/SaveAsImageSequence)

Saves a Stack or a hyperstack as an image sequence.

<span>*Format*</span>
:   Specifies the output format* *that can be set to either* BMP, FITS,
    GIF, JPEG, PGM, PNG, Raw, Text Image, TIFF, *or* Zip *(cf. ). In
    IJ1.44 and later, are embedded when saving in JPEG or PNG format.

<span>*Name*</span>
:   Specifies the leading string that will be common to all numeric
    filenames.

<span>*Start At*</span>
:   (Stacks only) Specifies the starting number of the sequence.

<span>*Digits (1–8)*</span>
:   The number digits of the incremental sequence. Filenames are padded
    with leading zeroes.

<span>*Use* *slice* *labels* *as* *filenames*</span>
:   (Stacks only) If checked, each slice will be saved with its own
    label (the image subtitle displayed above the image, *see* ) and no
    numeric sequence will be used.

With hyperstacks, images are saved using ‘Name\_t*d*\_z*d*\_c*d*$ $’ in
which *d* is the incremental number of specified *Digits; t, *the frame;
*z*, the slice and *c,* the channel, so e.g., for the depicted snapshot
the first image would be saved as ‘mitosis\_t001\_z001\_c001.tif’.

### [sub:SaveAs\>Avi...]

![image](images/SaveAsAvi)

Exports a stack or hyperstack as an AVI file @C-AviPlugins. Note that
AVI files larger than 2GB are not correctly written.

<span>*Compression*</span>
:   *JPEG*, *PNG* or *Uncompressed*. With IJ1.44 and later, are embedded
    when saving in JPEG or PNG format. The default compression is
    *JPEG*.

<span>Frame</span>
:   Specifies the frame frequency. The proposed value is read from and ,
    as long as the unit of *Frame Interval* is ‘sec’.

### [sub:PNG...]

Saves the active image in PNG (Portable Network Graphics) format. All
image types, except RGB, are saved as 8–bit PNGs. 16–bit images are
saved as 16–bit PNGs. With 8–bit images, the value to be used as the
transparent index (0–255, -1 for “*none*”) can be set in the dialog box.
are embedded when saving in PNG format.

### [sub:FITS...]

Saves the active image in FITS (Flexible Image Transport System) format
@C-FITSwriter.

### [sub:LUT...]

Saves the active image’s lookup table to a file. The 768byte file
consists of 256red values, 256green values and 256blue values.

### [sub:Measurements...]

Exports the contents of the ‘Results’ window as a tab-delimited or
comma-delimited () text file. Prior to ImageJ1.44b this command used to
be named *‘Measurements…’*.

### [sub:Selection...]

Saves the current area selection boundary to a file, that can be later
retrieved using to restore the selection. Active and are saved in the
TIFF header by default (*see* ).

### [sub:SaveAs\>XYcoordinates...]
Exports the XY coordinates of the active ROI as a two column,
tab-delimited text file. ROI coordinates can also be retrieved using the
*List coordinates* option in , that tabulates ROI coordinates at evenly
spaced one pixel intervals.

[sub:Revert[r]]
---------------

Reloads the active image, stack or hyperstack from disk, reverting it to
its last saved state. It is actually a shortcut for closing the window
without saving, and then reopening it. Note that it may not work with
opened through external plugins such as the [OME Bio-Formats
library](http://loci.wisc.edu/software/bio-formats).

[sub:Page-Setup...]
-------------------

![image](images/PageSetup)

The Page Setup dialog allows you to control the size of printed output,
plus other printing options:

<span>*Scale*</span>
:   Values less than 100% reduce the size of printed images and values
    greater than 100% increase the size. 100% corresponds to 72 pixels
    per inch (ppi), about the unzoomed screen size of the image. The
    size of the printed image is determined by the *Scale* value and the
    width and height of the image in pixels. Spatial calibration is
    ignored.

<span>*Draw border*</span>
:   If checked, ImageJ will print a one pixel wide black border around
    the image.

<span>*Center on page*</span>
:   If checked, the image will be printed in the center of the page
    instead of in the upper left corner.

<span>*Print title*</span>
:   If checked, the title of the image will be printed at the top of the
    page.

<span>*Selection only*</span>
:   If checked, current selection will be printed instead of the entire
    image.

<span>*Rotate* *90*</span>
:   If checked, the image will be rotated 90$^{\circ}$ to the left
    before being printed.

<span>*Print actual size*</span>
:   Considers the DPI information in the image header (typically 72,
    cf. ). For a higher value, use a unit of *inch* in the dialog. E.g.,
    setting *Distance in Pixels *to 300, *Known Distance* to 1 and *Unit
    of Length* to ‘inch’ will set the DPI to 300.

[sub:Print...[p]]
-----------------

Prints the active image. The size of the printed image will normally be
slightly less its size on the screen (unzoomed). Use the dialog to
increase of decrease the size of printed images. Images larger than the
page are scaled to fit. are embedded when printing images.

Prompts you to save all unsaved images and then exits. You can also exit
ImageJ by clicking on the close button in its window’s title bar.

[sec:Edit]
==========

[sub:Undo-[z]]
--------------

Described in <span>.</span>

[sub:Cut[x]]
------------

Copies the contents of the current image selection to the internal
clipboard, filling the selection with the current background color.

[sub:Copy[c]]
-------------

Copies the contents of the current image selection to the internal
clipboard. If there is no selection, copies the entire active image. The
amount of image data copied is shown in the status bar.

[sub:Copy-to-System]
--------------------

Copies the contents of the current image selection to the system
clipboard.

[sub:Paste[v]]
--------------

Inserts the contents of the internal clipboard (or from the system
clipboard if the internal clipboard is empty) into the active image. The
pasted image is automatically selected, allowing it to be dragged with
the mouse. Click outside the selection to terminate the paste. Select to
abort the paste operation.

[sub:Paste-Control...]
----------------------

![image](images/PasteControl)

After pasting, use the Paste Control pop-up menu to control how the
image currently being pasted is transferred to the destination image.

Except for Blend and Transparent, the Paste Control transfer modes are
the same as those listed in the description of The Blend mode is the
same as the Image Calculator Average mode. In Transparent mode,
white/black pixels are transparent and all other pixels are copied
unchanged.

[sub:Clear]
-----------

Erases the contents of the selection to the current background color.
and keys are shortcuts to this command. With stacks, a dialog is
displayed offering the option to clear the selection in all stack
images. Clear by pressing to avoid this dialog.

[sub:Clear-Outside]
-------------------

Erases the area outside the current image selection to the background
color.

[sub:Fill-[f]]
--------------

Fills the current selection with the current foreground color. With
stacks, a dialog is displayed offering the option to fill the selection
in all stack images. Fill the selection by pressing to avoid this
dialog.

[sub:Draw-[d]]
--------------

Outlines the current selection using the current foreground color and
line width. The foreground and background colors can also be set using
the command. Use the command, or double click on the line tool, to
change the line width.

With stacks, a dialog is displayed offering the option to draw the
selection in all stack images. Draw the selection by pressing to avoid
this dialog.

If the line width is an even number, the selection boundary is at the
center of the line. If the line width is odd (1, 3, …), the center of
the line drawn is displaced from the selection edge by $\nicefrac{1}{2}$
pixel to the bottom right. Thus the line center (the line in case of
$line\, width=1$) is inside the selection at the top and left borders,
but outside at the bottom and right borders. Rectangular selections (but
not polygonal selections or traced selections that happen to be
rectangular) are an exception to this rule: For rectangular selections,
one–pixel wide outlines are always drawn inside the rectangle. Thicker
lines are drawn as for the other selection types.

[sub:Invert-[I]]
----------------

Creates a reversed image, similar to a photographic negative, of the
entire image or selection. For 8–bit and RGB images (*see* ), always
uses $min=0$ and $max=255$, regardless of the data values. For 16–bit
and 32–bit images, the actual minimum and maximum are used (rather than
the full range of the pixel type).

[sub:SelectionSubMenu]------------------------------------

<span>0.69999999999999996</span>

<span>\>m<span>0.074</span>\>m<span>0.074</span>\>m<span>0.072</span>\>m<span>0.072</span>\>m<span>0.072</span>\>m<span>0.072</span>\>m<span>0.074</span>\>m<span>0.072</span>\>m<span>0.072</span>\>m<span>0.082</span></span>
& & & & & & & & & <span>\
</span>

### [sub:Select-All-[a]]

Creates a rectangular selection that is the same size as the image.

### [sub:Select-None-[A]]

Deactivates the selection in the active image.

### [sub:Restore-Selection-[E]]

Restores the previous selection to its original position. A selection is
saved when you:

-   Delete the selection by clicking outside of it

-   Draw a new selection

-   De-activate the image containing the selection

-   Close the image containing the selection

-   Use a command that deletes or modifies the selection

You can transfer a selection from one image to another by activating the
image with the selection, activating the destination image, then
pressing (the keyboard shortcut for ). This shortcut can also be used to
restore accidentally deleted ROIs. Alternative ways to transfer ROIs
across images involve the and the cursor synchronization features
provided by .

### [sub:Fit-Spline]
Fits a cubic spline curve to a polygon or polyline selection (*see* ).

### [sub:Fit-Circle]

Fits a circle to a multipoint (with at least 3 points) or area selection
@C-FitCircle (*see* ). Composite selections are not supported. With open
shapes (lines and points), the fitting algorithm (*Newton-based Pratt*
fit) described in Pratt V, “Direct least-squares fitting of algebraic
surfaces”, *Computer Graphics*, Vol. 21, pp 145–152 (1987) is used. With
closed shapes, the command creates a circle with the same area and
centroid of the selection.

### [sub:Fit-Ellipse]
Replaces an area selection with the best fit ellipse (*see* ). The
ellipse will have the same area, orientation and centroid as the
original selection. The same fitting algorithm is used to measure the
major and minor axis lengths and angle when *Fit Ellipse* is selected in

### [sub:Interpolate]
![image](images/Interpolate)

Converts the active selection into a sub-pixel resolution ROI of
floating-point coordinates spaced *interval*
pixels apart. If *Smooth* is checked, traced and freehand selections
(*see* ) are first smoothed using a 3–point running average. Refer to
for more details.

### [sub:Convex-Hull]

Replaces a polygon of freehand selection with its convex hull (*see* ),
determined by the [gift wrap
algorithm](http://en.wikipedia.org/wiki/Gift_wrapping_algorithm). The
convex hull can be thought of as a rubber band wrapped tightly around
the points that define the selection.

### [sub:Make-Inverse]

Creates an inverse selection (*see* ). What is ‘inside’ the selection
will be ‘outside’, and vice versa.

### [sub:Create-Mask]

Creates a new 8–bit image called ‘Mask’ whose pixels have a value of 255
inside the selection and 0 outside (*see* ). By default, this image has
an inverting LUT, so black is 255 and white is 0 unless
*Black Background* in

### [sub:Create-Selection]

Creates a selection from a thresholded image or a binary mask
@C-CreateSelection.

### [sub:Properties...]
![image](images/Properties)

Opens a dialog box that allows the user to
assign a contour color (*Stroke color*) and a contour width (*Width*) to
the active selection or a filling color. Note that selections can be
either filled or contoured, but not both. The default selection colors
(*black*, *blue*, *cyan*, *green*, *magenta*, *orange*, *red*, *white*,
*yellow*) can be typed textually. Any other color must be typed using
hex notation (*see* [infobox:HEX] ).

Set *Stroke width* to 0 to have selections drawn using a width of one
pixel regardless of the image magnification (*see*
[infobox:ZoomedCanvas] ).

With selections, it is also possible to specify the font size and text
alignment. Choose *List coordinates* to retrieve a dedicated table of XY
coordinates from the active selection at evenly spaced one pixel
intervals.

Note that while this command can only be applied to the active
selection, the ROI Manager’s *Properties…* command () can be applied to
multiple ROIs.

### [sub:Rotate...]
![image](images/RotateSelection)

Rotates the selection (using floating-point
coordinates) by the specified number of degrees. A negative number
indicates counter-clockwise rotation. This command runs the
[RotateSelection](http://imagej.nih.gov/ij/source/macros/RotateSelection.txt)
macro in .

### [sub:Enlarge...]

![image](images/EnlargeSelection)

Grows an area selection by a specified number of pixels. Enter a negative
value to shrink the selection. This command
runs the
[EnlargeSelection](http://imagej.nih.gov/ij/source/macros/EnlargeSelection.txt)
macro in .
[ShrinkSelection](http://imagej.nih.gov/ij/macros/ShrinkSelection.txt)
is a variation of this macro that does not shrink polygonal selections
from the edges of the image.

Enter zero in the dialog box to convert into polygon selections. Note,
however, that the conversion may fail if the composite ROI is composed
of more than one piece and/or contains internal holes.

### [sub:Make-Band...]

![image](images/MakeBand)

Takes an area selection and creates a band
with a thickness of the specified number of pixels (*see* ). If you
imagine the band as a doughnut shape, then the original selection
corresponds to the hole (i.e. the band is made by growing out the
original selection).

### [sub:Specify...]

![image](images/Specify)

Opens a dialog that allows the user to define
a rectangular or elliptical selection. *Width* and *Height* are the
dimensions of the selection. *X Coordinate* and *Y Coordinate* define
the position of the selection. Check *Oval* to create an elliptical
selection. If *Centered* is checked, the selection is positioned so *X
Coordinate* and *Y Coordinate* define the center of the selection,
otherwise they define the upper left corner.

This command is also available through the ROI Manager
*More*<span>$\gg$</span> drop-down menu (*see* ).

### [sub:Straighten...]

This command straightens a curved object in an image (*see* ). The
curved object must first be outlined using the . Double click on the
line tool icon to open the widget, in order to adjust the width of the
line selection. By default, the command fits a cubic spline curve to the
points that define the line, so it is not necessary to check the *Spline
Fit* checkbox. Note that also works with straight line selections. In
this case, the object defined by the line selection is rotated to be
horizontal.

### [sub:To-Bounding-Box]

Converts a non-rectangular selection to the smallest rectangle that
completely contains it.

### [sub:Line-to-Area]
Converts a line selection to an area (traced) ROI.

### [sub:Area-to-Line]

Converts a non-composite area selection to its enclosing outline (*see*
). The obtained line will have the width specified in the widget. Note
that by design does not create closed paths. E.g., the converted outline
of a rectangular selection will be composed of only three segments, with
the first and fourth corner points of the rectangle being disconnected.

### [sub:Image-to-Selection...]
![image](images/ImageToSelection)

Creates an image selection (ImageROI). Image
selections are that can be moved around the canvas (*see* ). Once
created, opacity of the blended image can be re-adjusted at any time
using . Use () to recover the blending image after clicking outside its
limits. Use () to finally embed the imageROI.

Note that image selections behave only partially as regular selections
(e.g., can be added to the ROI Manager list, can be moved beyond image
boundaries but cannot be resized or rotated). However they are stored in
the TIFF header and can be saved and restored when saving images in TIFF
format.

### [sub:Add-to-Manager]
Adds the current selection to the ROI Manager (). If there is no
selection the ROI Manager is opened.

[sub:Options]
-------------

Use commands in this submenu to change various ImageJ user preference
settings.

### [sub:Line-Width...]

![image](images/LineWidth1)

Displays a dialog box that allows to change
the line width (in pixels) of line selections (*see* ) and concomitantly
the lines generated by the command. This legacy command has been
superseded by the widget, but required since the latter is not
recordable (*see* ).

### [sub:Input/Output...]
![image](images/InputOutput)

<span>*JPEG* *quality* *(0–100)*</span>
:   Specifies the compression level used by Requesting a higher degree
    of compression (a lower value) will result in smaller files, but
    poorer image quality. Note that lossy JPEG compression creates
    serious artifacts*, see* [infobox:Formats] .

<span>*GIF and PNG transparent index*</span>
:   Specifies the transparent color used for images saved in GIF and PNG
    formats. Use -1 for “none”. Note that PNG and GIF transparency only
    works with 8–bit images.

<span>*File* *extension* *for* *tables*</span>
:   Sets the default extension to be used when saving s. Files with and
    extensions are saved in tab-delimited format and files with
    extensions are saved in comma-delimited format.

<span>*Use* *JFileChooser* *to* *open/save*</span>
:   Enables versions of and that use the Java Swing’s
    <span>`JFileChooser`</span> instead of the native OS dialogs. The
    main advantage of <span>`JFileChooser`</span> is the ability to open
    multiple files by Shift-clicking to select multiple contiguous files
    and control-clicking to select more than one individual file. On the
    other hand, it is slower, uses more memory, and does not behave like
    the file open and save dialogs used in other applications. It
    requires Java 2, which is included with the Linux and Windows
    distributions of ImageJ and is built into Mac OSX.

<span>*Save* *TIFF* *and* *raw* *in* *intel* *byte* *order*</span>
:   Specifies the byte order used when saving 16–bit and 32–bit images
    using , or when *Raw* is chosen as the format. Check this option to
    export images using the order used by Intel $\times$86 based
    processors (little-endian). This [Wikipedia
    article](http://en.wikipedia.org/wiki/Endiannes) has more
    information.

<span>*Results* *Table* *Options*</span>
:   Specifies if* *column headers* *and* *row numbers should be saved or
    copied from ImageJ tables such as the *Results* and *Summarize*
    windows (*see* ).

### [sub:Fonts...]

Opens a small widget with three pop-up menus for specifying the
typeface, size, style and antialiasing (*Smooth* checkbox) of the font
used by the and It is also possible to adjust the horizontal text
alignment using the *style* drop-down menu: *Left* (the default),
*Right*, or *Centered*. The widget is more easily opened by double
clicking on the .

![image](images/Fonts)

### [sub:Profile-Plot-Options...]

Use this dialog to control how plots generated by ImageJ are displayed
(, , , , *Multi Plot* <span>[</span>, etc.).

<span>*Plot* *Width* and *Plot* *Height*</span>
:   Specify the length (in pixels) of the X-axis (*Plot Width*) and
    Y-axis (*Plot Height*).

![image](images/ProfilePlotOptions)

<span>*Fixed y-axis Scale*</span>
:   If checked, the Y-axis range is fixed and the specified
    ***Minimum* *Y*** and ***Maximum* *Y*** values are used, otherwise,
    plots are scaled based on the minimum and maximum gray values.

<span>*Do not Save x–values*</span>
:   If checked, ‘*List*’, ‘*Save*…’ and ‘*Copy*…’ buttons will appear in
    profile plot windows.

<span>*Auto–close*</span>
:   If checked, profile plot windows will be automatically closed when
    ‘List’, ‘Save’ and ‘Copy’ are clicked on.

<span>*Vertical* *Profile*</span>
:   If checked, row average plots of rectangular areas (or line
    selections wider than 1 pixel) will be generated instead of the
    default column average plots. Note that evoking with will generate
    vertical profiles.

<span>*List values*</span>
:   *If checked,* the list of values will be automatically opened. If
    *Auto–clos*e is also checked, the plot is closed and only the list
    of values remains open.

<span>*Interpolate* *line* *profiles*</span>
:   If checked, will use bilinear interpolation to retrieve intensity
    values along non-straight line selections.

<span>*Draw grid lines*</span>
:   If checked, gray grid lines will be drawn in the plot.

<span>*Sub-pixel resolution*</span>
:   <span> </span>If checked, line selections created on zoomed images
    will use floating-point coordinates, resulting in smoother curves
    (*see* and ).

<span>*Help*</span>
:   Opens <http://imagej.nih.gov/ij/docs/menus/edit.html#plot-options>.

### 

*See* .

### 

*See* .

### [sub:Point-Tool...]

*See* .

### [sub:Wand-Tool...]

*See* .

### [sub:Colors...]

![image](images/Colors)

Displays a dialog box that allows you to set
*Foreground*, *Background* and *Selection color. *As mentioned earlier,
the selection color is highlighted in the and icons. Drawing colors are
displayed in the (foreground and background colors) and drawing tools
such as the , , and (foreground color only).

    /* This macro loops through the all the possible Selection colors using "q" as a keyboard shortcut */
      var cIdx;
     macro "Change Selection Color [q]" {
       color= newArray("red", "green", "blue","magenta", "cyan", "yellow", "orange", "black", "white");
       run("Colors...", "selection="+ color[cIdx++]);
       if (cIdx==color.length) cIdx= 0;
     } 

### [sub:Appearance...]
![image](images/Appearance)

This dialog contains options that control how
images are displayed, an option to display better looking toolbar icons,
and an option to set the menu font size.

<span>*Interpolate zoomed images*</span>
:   Uses interpolation instead of pixel replication when displaying
    zoomed images.

<span>*Open* *Images* *at* *100%*</span>
:   Newly open images are displayed using 100% magnification (1image
    pixel = 1screen pixel).

<span>*Black Canvas*</span>
:   Causes the image canvas (white by default) to be rendered in black.
    This is useful when looking at X-ray images in order to avoid high
    contrasting intensities at the image edges.

<span>*No* *image* *border*</span>
:   Displays images without the default one pixel wide black border.

<span>*Use* *inverting* *lookup* *table*</span>
:   Causes newly opened 8–bit images to have inverted pixel values,
    where white$=0$ and black$=255$. This is done by both inverting the
    pixel values and inverting the LUT. Use the command to invert an
    image without changing the pixel values.

<span>*Double Buffer Selections*</span>
:   Reduces flicker when working with complex selections but it also
    increases memory usage and slows screen updates. It is not needed on
    Mac OSX, which has built in double buffering.

<span>*Antialiased* *tool* icons</span>
:   Smooths and darken the tool icons in the . This option is enabled by
    default on all operating systems. On Windows XP, enable Clear Type
    sub-pixel anti-aliasing to improve the quality of text in menus.

<span>*Menu font size*</span>
:   Specifies the size of the ImageJ window menu font. Use a size of 0
    (zero) to use Java’s default menu font size. Changing the font size
    requires the restarting of ImageJ. This option is ignored on Mac
    OSX.

<span>*Help*</span>
:   Opens <http://imagej.nih.gov/ij/docs/menus/edit.html#appearance>.

### [sub:Conversions...]

![image](images/Conversions)

Use this dialog to set options that control
how images are converted from one type to another.

<span>*Scale* *When* *Converting*</span>
:   ImageJ will scale from min–max to 0–255 when converting from 16–bit
    or 32–bit to 8–bit or to scale from min–max to 0–65535 when
    converting from 32–bit to 16–bit. Note that *Scale When Converting*
    is always checked after ImageJ is restarted.

<span>*Weighted* *RGB* *Conversions* *(0.30,0.59,0.11)*</span>
:   When checked, the formula
    $\text{gray}=0.299\times\text{red}+0.587\times\text{green}+0.114\times\text{blue}$
    is used to convert RGB images to grayscale. If it is not checked,
    the formula $\text{gray}=(\text{red}+\text{green}+\text{blue})/3$ is
    used. The default weighting factors (0.299,0.587,0.114), which are
    based on human perception, are the ones used to convert from RGB to
    YUV, the color encoding system used for analog television. The
    weighting factors can be modified using the
    <span>`setRGBWeights()`</span> macro function.

### [sub:Memory-&-Threads...]

![image](images/MemoryAndThreads)

Use this dialog to specify the maximum amount
of memory available to ImageJ and the number of threads used by filters
when processing stacks.

Java applications such as ImageJ will only use the memory allocated to
them (typically 640MB) but this dialog allows the user to allocate more
than the default.

Note that specifying more than 75% of real RAM could result in virtual
RAM being used, which may cause ImageJ to become slow and unstable. Also
note that this dialog cannot be used to set the memory allocation if
ImageJ is run from the command line or by double clicking on .

<span>*Maximum* *memory*</span>
:   64-bit OS and a 64–bit version of Java are required to use more than
    $\approx$1700MB of memory. Windows users must be running a 64–bit
    version of Windows and must install a 64–bit version of Java. Mac
    users must be running OS X 10.5 or later and may need to use the
    Java Preferences utility (in /Applications/Utilities/Java) to select
    a 64–bit version of Java. They may also need to switch to the
    ImageJ64 application. Linux users need to be running 64–bit versions
    of Linux and Java. The title of the *Memory*&*Threads* dialog box
    changes to *Memory(64–bit)* when ImageJ is running on a properly
    configured 64–bit system.

<span>*Parallel* *threads* *for* *stacks*</span>
:   Determines the number of parallel threads used by commands in the
    and the submenus when processing stacks. The default value is the
    number of available processors.

<span>*Keep multiple undo buffers*</span>
:   If checked, the undo buffer will be preserved when switching images.
    remains restricted to the most recent operation, but is available
    for each opened image, as long as the buffer allows it. If
    *Keep multiple undo buffers* is unchecked, the undo buffer is reset
    every time the active (frontmost) image changes.

<span>*Run garbage collector on status bar click*</span>
:   If checked, forces the Java garbage collector to run every time the
    user clicks on the , which may help to reclaim unused memory (*see
    also* ).

<span>*Help*</span>
:   Opens <http://imagej.nih.gov/ij/docs/menus/edit.html#memory>.

### [sub:Proxy-Settings...]

![image](images/ProxySettings)

Use this dialog to modify the
[proxy](http://en.wikipedia.org/wiki/Proxy_server) settings of the Java
Virtual Machine. This may be required for ImageJ to connect to the
internet in certain machines running behind HTTP proxies. For example,
proxy settings may be required to update ImageJ using the command or to
open the images in the submenu.

To use the system proxy settings enable the
*Or use system proxy settings* option (this will set the
<span>`java.net.useSystemProxies`</span> property to
<span>`true`</span>). To configure your proxy settings manually specify
the address of the HTTP proxy in *Proxy server *and* *the port the proxy
listens on (normally 8080) in *Port*. Settings will be saved in the
ImageJ preferences file ().

### [sub:Compiler...]

Displays a dialog box with options for the command.

![image](images/Compiler)

<span>*Target*</span>
:   Specifies the Java version of the class files created by Plugins
    compiled with a *Target* of 1.6 will not run on earlier versions of
    Java. A *Target* of 1.4 should be used to create plugins capable of
    running on all versions ImageJ. *Target* cannot be set higher than
    the version of Java ImageJ is currently running on.

<span>*Generate Debugging Info (javac -g)*</span>
:   If checked, information needed by Java debuggers will be included in
    the class files.

<span>*Help*</span>
:   Opens <http://imagej.nih.gov/ij/docs/menus/edit.html#compiler>.

### [sub:DICOM...]

![image](images/DICOMoptions)
This dialog sets options related to the
handling of DICOM images. Namely, if ImageJ should open DICOM images as
32–bit float, if voxel depth should be calculated (based on the distance
between the first and last slice) and if coronal/transverse sections
should be mirrored when using the command. With IJ1.45, the DICOM reader
applies the Rescale Slope value when *Open as 32-bit float* is enabled
and tag 0028,1053 is not $1.0$.

### [sub:Misc...]

![image](images/Misc)

Displays a dialog box for configuring several
(advanced) settings that do not fit elsewhere in the ImageJ interface.

<span>*Divide by zero value*</span>
:   Specifies the value used when detects a divide by zero while
    dividing one 32–bit real image by another. The default is infinity.
    In addition to numeric values, ‘infinity’ (positive or negative
    infinity), ‘max’ (largest positive value) and ‘NaN’ (Not-a-Number)
    can be entered as the *Divide by zero value*.

<span>*Use pointer cursor*</span>
:   If checked, ImageJ will use an arrow cursor instead of the default
    crosshair that is sometimes difficult to see on grayscale images in
    areas of medium brightness. This option can also be used to work
    around a bug on Windows where the text cursor is sometimes used in
    place of the crosshair. Note that the default crosshair can be
    customized as explained in .

<span>*Hide* *Process* *Stack?* *dialog*</span>
:   If checked, ImageJ will suppress the dialog that asks ‘Process all
    xx slices?’ (only the current slice will be processed).

<span>*Require* *control*/command *key* *for* *shortcuts*</span>
:   If checked, requires the Control key (Command key on Macs) to be
    pressed when using keyboard shortcuts for menu commands.

<span>*Move isolated plugins to Misc. menu*</span>
:   This option can reduce the size of the Plugins menu, preventing it
    from running off the bottom of the screen. When this option is
    enabled, plugins that attempt to install themselves in a submenu
    with only one command are instead installed in the submenu. An
    example of such a plugin is
    [TurboReg](http://bigwww.epfl.ch/thevenaz/turboreg/), which normally
    creates a submenu that contains only one command.

<span>*Run* *single* *instance* *listener*</span>
:   <span> </span>If checked, ImageJ will use sockets to prevent
    multiple instances from being launched @C-SocketListener. On
    Windows, this avoids the problem where another copy of ImageJ starts
    each time an image is dragged and dropped on the ImageJ icon. It
    also prevents multiple instances when running ImageJ from the
    command line. Note that you may get a security alert the first time
    ImageJ starts with this option enabled. ImageJ does not require
    external socket access so it is okay to deny it access in the
    security alert. This option is set by default with new Windows
    installations.

<span>*Debug mode*</span>
:   If checked, causes ImageJ to display debugging messages in the . In
    addition, some commands (e.g., and ) produce detailed outputs when
    *Debug mode* is active. Close the Log window to disable display of
    debugging messages.

<span>*Help*</span>
:   Opens <http://imagej.nih.gov/ij/docs/menus/edit.html#misc>.

### [sub:ResetOptions]
![image](images/ResetOptions)

Causes the IJ preferences file () to be
deleted when ImageJ quits, resetting all parameters to their default
values when ImageJ is restarted.

As mentioned in , holds all the settings and preferences of ImageJ and
is stored in on Mac OSX, in on Linux and Windows (with $\sim$ referring
to the user’s home directory). Several macros and plugins also write
parameters to this file.

[sec:Image]
===========

[sub:Type]
----------

Use this submenu to determine the type of the active image or to convert
it to another type. An attempt to perform an unsupported conversion
causes a dialog box to be displayed that lists the possible conversions.

[h]

<span>l\>m<span>1.25cm</span>\>m<span>1.25cm</span>\>m<span>1.25cm</span>\>m<span>1.25cm</span>\>m<span>1.25cm</span>\>m<span>1.25cm</span>\>m<span>1.25cm</span></span>
& **8–bit** & **16–bit** & **32–bit** & **8–bit color** & **RGB color**
& **RGB stack** & **HSB stack**<span>\
</span>**8–bit** & … & <span>I, S</span> & <span>I, S</span> & &
<span>I, S</span> & & <span>\
</span>**16–bit** & <span>I, S</span> & … & <span>I, S</span> & &
<span>I, S</span> & & <span>\
</span>**32–bit** & <span>I, S</span> & <span>I, S</span> & … & &
<span>I, S</span> & & <span>\
</span>**8–bit color** & <span>I, S</span> & & & … & <span>I</span> & &
<span>\
</span>**RGB color** & <span>I, S</span> & & & <span>I, S</span> & … &
<span>I, S</span> & <span>I, S</span><span>\
</span>**RGB stack ** & & & & & <span>I</span> & … & <span>\
</span>**HSB stack** & & & & & <span>I</span> & & …<span>\
</span><span>\
</span>

<span>*8–bit*</span>
:   Converts to 8–bit grayscale. ImageJ converts 16–bit and 32–bit
    images to 8–bit by linearly scaling from min–max to 0–255, where
    *min* and *max* are the two values displayed in the . displays these
    two values as *Display range*. Note that this scaling is not done if
    *Scale When Converting* is not checked in RGB images are converted
    to grayscale using the formula
    $\text{gray}=(\text{red}+\text{green}+\text{blue})/3$ or
    $\text{gray}=0.299\times\text{red}+0.587\times\text{green}+0.114\times\text{blue}$
    if *Weighted RGB Conversions* is checked in

<span>*16–bit*</span>
:   Converts to unsigned 16–bit grayscale.

<span>*32–bit*</span>
:   Converts to signed 32–bit floating-point grayscale.

<span>*8–bitColor*</span>
:   Converts to 8–bit indexed color using Heckbert’s median-cut [color
    quantization
    algorithm](http://en.wikipedia.org/wiki/Color_quantization). A
    dialog box allows the number of colors (2–256) to be specified. The
    active image must be RGB color.

<span>*RGBColor*</span>
:   Converts to 32–bit RGB color.

<span>*RGBStack*</span>
:   Converts to a 3–slice (red, green, blue) stack. The active image
    must be RGB color.

<span>*HSBStack*</span>
:   Converts to a 3–slice (hue, saturation and brightness) stack. The
    active image must be RGB color.

[sub:Adjust]
------------

This submenu contains commands that adjust brightness/contrast,
threshold levels and image size.

The command can be used to adjust the brightness and contrast of each
slice in a stack, according to either the optimal for each individual
slice (if *Use Stack Histogram* is unchecked) or the overall stack (by
ticking *Use Stack Histogram*). The default behavior of the B&C tool ()
is to use the overall stack histogram.

### [sub:Brightness/Contrast...[C]]

Use this tool to interactively alter the brightness and contrast of the
active image. With 8–bit images, brightness and contrast are changed by
updating the image’s lookup table (LUT), so pixel values are unchanged.
With 16–bit and 32–bit images, the display is updated by changing the
mapping from pixel values to 8–bit display values, so pixel pixel values
are also unchanged. Brightness and contrast of RGB images are changed by
modifying the pixel values.

![image](images/BC)

<span>*Histogram*</span>
:   The line graph at the top of the window, which is superimposed on
    the image’s histogram, shows how pixel values are mapped to 8–bit
    (0–255) display values. The two numbers under the plot are the
    minimum and maximum displayed pixel values. These two values define
    the display range, or ‘window’. ImageJ displays images by linearly
    mapping pixel values in the display range to display values in the
    range 0–255. Pixels with a value less than the minimum are displayed
    as black and those with a value greater than the maximum are
    displayed as white.

<span>*Minimum and Maximum sliders*</span>
:   Control the lower and upper limits of the display range. Holding
    down will simultaneously adjust all channels of a composite image
    (e.g., ).

<span>*Brightness slider*</span>
:   Increases or decreases image brightness by moving the display range.
    Holding down will simultaneously adjust all channels of a composite
    image.

<span>*Contrast slider*</span>
:   Increases or decreases contrast by varying the width of the display
    range. The narrower the display range, the higher the contrast.
    Holding down will simultaneously adjust all channels of a composite
    image.

<span>*Auto*</span>
:   ImageJ will automatically optimize brightness and contrast based on
    an analysis of the image’s histogram. Create a selection, and the
    entire image will be optimized based on an analysis of the
    selection. The optimization is done by allowing a small percentage
    of pixels in the image to become saturated (displayed as black or
    white). Each additional click on *Auto* increases the number of
    saturated pixels and thus the amount of optimization.\
    A run(“Enhance Contrast”, “saturated=0.35”) macro call is generated
    if the command recorder () is running.

<span>*Reset*</span>
:   Restores the original brightness and contrast settings. The display
    range is set to the full pixel value range of the image. A
    <span>`resetMinAndMax()`</span> macro call is generated if the
    command recorder is running. Holding down restores original settings
    in all channels of a composite image.

<span>*Set*</span>
:   Allows to enter the minimum and maximum display range values in a
    dialog box. A <span>`setMinAndMax()`</span> macro call is generated
    if the command recorder is running.

    A 16–bit image consists of 65536possible gray levels. Most of times,
    however, the relevant image information is contained only within a
    narrow range of the grayscale. This is the case, e.g., in low light
    microscopy, in which signal is restricted to the lower end of the
    grayscale. The *Set Display Range* dialog allows you to choose how
    to scale the range of gray levels of 16–bit images.

    ![image](images/SetDisplayRange)

    <span>*Automatic*</span>
    :   Automatically selects the best range given the intensity values
        of the image based on the percentage of the total number of
        pixel values from the lowest to highest pixel value.

    <span>*8–bit (0–255)*</span>
    :   Gray level range of 0–255.

    <span>*10–bit (0–1023)*</span>
    :   Gray level range of 0–1023.

    <span>*12–bit (0–4095)*</span>
    :   Gray level range of 0–4095.

    <span>*15–bit (0–32767*)</span>
    :   Gray level range of 0–32767.

    <span>16–bit* *(0-65535)</span>
    :   Gray level range of 0–65535.

    <span> </span>Check ***Propagate* *to all open image*s** to apply
    these values to the rest of the images currently open. With
    multi-channel images, the option to propagate the specified range to
    the remaining channels is also available.

<span>*Apply*</span>
:   Applies the current display range mapping function to the pixel
    data. If there is a selection, only pixels within the selection are
    modified. This option currently only works with 8–bit images, 8–bit
    stacks and RGB stacks. **This is the only B&C option that alters the
    pixel data of non-RGB images**.

With DICOM images, ImageJ sets the initial display range based on the
*Window Center* (0028,1050) and *Window Width* (0028,1051) tags. Click
*Reset* on the W&L () or B&C () window and the display range will be set
to the minimum and maximum pixel values.

As an example, the image has a Window Center of 50 and Window Width of
500, so the display range is set to -200 to 300 (center-width/2 to
center+width/2). Click *Reset* and the display range is set to -719 to
1402. Press () and you will see that the minimum pixel value in the
image is -719 and the maximum is 1402.

To display the DICOM tags, press (). Press () to revert to the initial
display range.

### [sub:Window/Level...]

![image](images/WindowLevel)

This command and (*B*&*C*) are redundant, but
(W&*L*) behaves in a manner closer to that implemented on medical image
terminals by interactively adjusting the *Window* – range of minimum and
maximum (*Contrast*) – and *Level* – position of that range in the
grayscale intensity space (*Brightness*).

If the *B*&*C* window is opened, it will be closed and the *W*&*L*
window will be opened at the same location.

### [sub:Color-Balance...]

This panel makes adjustments to the brightness and contrast of a single
color of a standard RGB image (8–bit per color channel).

![image](images/ColorBalance)

For multi-channels and () it adjusts each of
the color channels independently. Use the drop-down menu to specify
which color/channel will be adjusted (the histogram is drawn for the
selected channel).

*Maximum* and *Minimum* sliders, *Auto*, *Set* and *Apply* work as
described for the tool, if the *B*&*C* window is opened, it will be
closed and the *Color *window will be opened at the same location.

NB: When switching from one color to another, the changes made to one
color will be lost unless *Apply* is clicked before. Also, note that for
48–bit color images that load as a stack, works on single stack slices,
i.e., colors, and the color settings of the *Color* panel are ignored.

When displayed, the intensity of each pixel that is written in the image
file is converted into the *grayness* of that pixel on the screen. How
these intensities are interpreted is specified by the image type. From
the [ImageJ website](http://imagej.nih.gov/ij/docs/concepts.html):

> 16–bit and 32–bit grayscale images are not directly displayable on
> computer monitors, which typically can show only display 256shades of
> gray. Therefore, the data are mapped to 8–bit by windowing. The window
> defines the range of gray values that are displayed: values below the
> window are made black, while values above the window are white. The
> window is defined by minimum and maximum values that can be modified
> using .

It may happen that the initial windowing performed by ImageJ on these
high bit–depth (or HDR) images is suboptimal. Please note that windowing
does not affect image data (cf. the
[HDRexplorerTool](http://imagej.nih.gov/ij/macros/tools/HDRexplorerTool.txt)).

### [sub:Threshold...[T]]
Use this tool to automatically or interactively set lower and upper
threshold values, segmenting grayscale images into features of interest
and background. Use ) (with *Limitto Threshold* in checked) to measure
the aggregate of the selected features. Use to measure features
individually. Use the to outline a single feature.

![[Flo:ImageAdjust]** (ImageJ1.45m).**](images/Threshold)

Adjusts the minimum threshold value. Hold while adjusting the minimum to
move a fixed-width thresholding window across the range of gray values.

Adjusts the maximum threshold value.

Allows any of the 16 different automatic thresholding methods to be
selected @C-ThresMeth. These methods are described on ’s [Auto Threshold
website](http://fiji.sc/wiki/index.php/Auto_Threshold). The *Default*
method is the modified IsoData algorithm used by [ImageJ 1.41 and
earlier](http://imagej.nih.gov/ij/docs/faqs.html#auto). Note that these
are global thresholding methods that typically cannot deal with unevenly
illuminated images (such as in [brightfield
microscopy](http://imagejdocu.tudor.lu/doku.php?id=howto:working:how_to_correct_background_illumination_in_brightfield_microscopy)).
In these cases, local algorithms are more appropriated, by allowing the
threshold to smoothly vary across the image.. These are implemented by
the [Auto Local
Threshold](http://fiji.sc/wiki/index.php/Auto_Local_Threshold) plugin,
pre-installed in .

Selects one of three display modes:

<span>*Red*</span>
:   Displays the thresholded values in red.

Features are displayed in black and background in white. This mode
respects the *Black background* flag set in

Displays pixels below the lower threshold value in blue, thresholded
pixels in grayscale, and pixels above the upper threshold value in
green. These colors can be changed from a macro by calling the
<span>`ImageProcessor.setOverColor()`</span> and
<span>`setUnderColor()`</span> methods
([example](http://imagej.nih.gov/ij/macros/examples/SetOverUnderThresholdColors.txt)).

To be checked when features are lighter than the background. The state
of the checkbox is remembered across restarts.

If checked, ImageJ will first compute the histogram of the whole stack
(or hyperstack) and then compute the threshold based on that histogram.
As such, all slices are binarized using the single computed value. If
unchecked, the threshold of each slice is computed separately.

Uses the currently selected thresholding method to automatically set the
threshold levels based on an analysis of the histogram of the current
image or selection.

Sets thresholded pixels to black and all other pixels to white. For
32–bit float images *Apply* will also run .

Disables thresholding and updates the histogram.

New threshold levels can be entered into this dialog box.

### [sub:Color-Threshold...]

Thresholds 24–bit RGB images based on Hue Saturation and Brightness
(HSB), Red Green and Blue (RGB), CIE Lab or YUV components. Ranges of
the filters can be set manually or based on the pixel value components
of a user-defined ROI. This command, implemented in version1.43l, is an
experimental built-in version of the [Threshold Colour
plugin](http://www.dentistry.bham.ac.uk/landinig/software/software.html)
@C-ColorThres and is not yet fully integrated into ImageJ.

<span>*Pass*</span>
:   If checked, values within range are thresholded and displayed
    (band-pass filter), otherwise, values outside the selected range are
    thresholded (band-reject filter).

<span>*Thresholding Method*</span>
:   Allows any of the 16different automatic thresholding methods to be
    selected (*see* ).

<span>*Threshold Color*</span>
:   Selects the threshold color: either *Red*, *Black*, *White* or
    *Black & White* (*see* ).

<span>*Color space*</span>
:   Selects the color space: *HSB*, *RGB*, *CIE Lab* or *YUV* (*see* ).

<span>*Dark background*</span>
:   To be checked when features are lighter than the background (*see*
    [infobox:blackBackground] ). The state of the checkbox is remembered
    across restarts.

<span>*Original*</span>
:   Restores the original image and updates the buffer when switching to
    another image.

<span>*Filtered*</span>
:   Shows the filtered image. Note that the final thresholded image type
    is RGB, not 8–bit gray (*see* ).

<span>*Select*</span>
:   Creates a ROI selection based on the current settings. The selection
    is made according to the settings defined in the dialog.

<span>*Sample*</span>
:   (Experimental) Sets the ranges of the filters based on the pixel
    value components in a user-defined ROI.

<span>*Stack*</span>
:   Processes the remaining slices of the stack (if any) using the
    current settings.

<span>*Macro*</span>
:   Creates a macro based on the current settings which is sent to the
    Macro Recorder window (), if open.

<span>*Help*</span>
:   Opens the built-in help dialog.

### [sub:Size...]

![image](images/Resize)

Scales the active image or selection to a specified *Width* and *Height*
in pixels.

Check *Constrain aspect ratio* and ImageJ will adjust either the
*Height* or the *Width* to maintain the original aspect ratio. When
applicable, other dimensions can also be resized: *Depth (images)* in
stacks, *Depth* *(slices) *and *Time* *(frames)* in hyperstacks.

Check the *Average when downsizing* checkbox for better results when
scaling down images @C-Resizer-Scaler. Two resampling methods are
possible: *Bilinear* and *Bicubic* interpolation. The implementation of
the bicubic method (Catmull-Rom interpolation) is derived from Burger
and Burge, 2008 @Burger:2008p14082.

### [sub:Canvas-Size...]
![image](images/ResizeCanvas)

Changes the canvas size without scaling the
actual image. *Width* and *Height* may be either expanded or contracted.
If the canvas size is increased, the border is filled with the current
background color (*see* ), or, if *Zero Fill* is checked, the border is
filled with pixels that have a value of zero. The position of the old
image within the new canvas may also be specified.

### [sub:Line-WidthSlider]

![image](images/LineWidth2)

This widget is used to adjust the width of
line selections (in pixels). It is opened more easily by double clicking
on the icon. Checking *Spline Fit* fits a cubic spline curve to the
points that define the line.

[sub:Show-Info...]
------------------

![image](images/Info)

Opens a text window containing information
about the active image (including the pixel or voxel size, since
IJ1.44k). For DICOM and FITS images, also displays file header
information. Use the popup menu (right-click in the Info window) to save
the information to a text file or copy it to the system clipboard.

[sub:Image\>Properties...]
--------------------------

![image](images/ImageProperties)

Use this command to display and set various properties of the current
image or stack.

The number of *Channels (c)*, *Slices (z) *and *Frames (t)* in the image
can be changed as long as the product of *c*, *z*, and *t* is equal to
the number of images in the stack.

*Unit of Length *is a string describing the measuring unit of *Pixel
Width*, *Pixel Height* and *Voxel Depth*. These three dimensions are
automatically converted if *Unit of Length* is changed from one of
ImageJ’s known unit (‘nm’, ‘$\micro$m’ <span>[</span>or ‘um’ or
‘micron’<span>]</span>, ‘mm’, ‘cm’, ‘meter’, ‘km’ or ‘inch’) to another.
$\micro$ and $\angstrom$ symbols can be typed using and , respectively.

With t–series stacks, the *Frame Interval *in seconds (reciprocal of the
frame rate) can be viewed and set. If the unit is ‘sec’, setting the
*Frame Interva*l will also set the frame rate used by .

*Origin* is the reference point $0,0$ (always in pixels) of the image
coordinate system (*see also * in ).

As explained in [infobox:GlobalCal] , check *Global* to make the current
settings global, i.e., applied to all images opened during the current
session.

[sub:ColorSubmenu]
------------------

This submenu contains commands that deal with color images.

### [sub:Split-Channels]

Splits an RGB image (or stack) into three 8–bit grayscale images
containing the red, green and blue components of the original. The
window names have an appended *(red)*, *(green)* and *(blue)*. With
composite images and/or hyperstacks (e.g., ) this command splits the
stack into separate channels.

### [sub:Merge-Channels...]
Merges 2–7 images into an RGB image or multi-channel composite image.
Select the channel order/color using the *C1–C7* dropdown menus. Select
*<span>\*</span>None<span>\*</span>* to skip a channel.

![image](images/MergeChannels)

<span>*Create composite*</span>
:   If checked, a multi-channel composite image (*see* ) will be
    created. If unchecked, an RGB image is created instead. When
    creating composite images, original LUTs and display ranges are
    preserved unless *Ignore source LUTs* is checked. Source LUTs are
    always ignored when creating RGB images.

<span>*Keep source Images*</span>
:   If checked, source images will not be disposed.

<span>*Ignore source LUTs*</span>
:   If checked, LUTs of source images are ignored. In this case, merged
    channels will adopt the lookup table mentioned besides the channel
    choice, i.e., *red*, *gree*n, *blue*, *gray*,* cyan*, *magenta*,
    *yellow*. As mentioned, this option is assumed when merging into
    RGB.

### [sub:ChannelsTool-Color]

Alias for .

### [sub:Stack to RGB]

Converts a two or three slice stack into an RGB image, assuming that the
slices are in R, G, B order. The stack must be 8–bit or 16–bit
grayscale. Also converts composite images (e.g., ) into RGB.

### [sub:Make-Composite]

![image](images/MakeComposite)

Converts in place an RGB image, a 2–7 image stack or a 2–7 channel
hyperstack into a composite color image. Use the
tool ( ) to enable and disable the channels of a composite image. Use (
) to adjust the brightness and contrast of the current channel.

### [sub:Show LUT]

![image](images/ShowLut)

Displays a plot of the active image’s lookup
table (LUT) . The lookup table, or color table, describes the color that
is displayed for each of the 256 possible pixel values. For 16 and
32–bit images, the range of displayed pixel values is mapped to 0–255. A
bar under the plot displays the color representation of the pixel
values. Note that RGB color images do not use a lookup table. Use the*
List… *radio button to export the LUT as a CSV file.

### [sub:Edit-LUT]

![image](images/EditLut)

Opens the ImageJ LUT (Lookup Table) Editor. A
lookup table in ImageJ has up to 256 entries. The entry index, and the
three values (red, green and blue) associated with it, are displayed in
the ImageJ status bar as you move the cursor over the LUT Editor window.
Click on an entry to edit the red, green and blue values for that entry
using a Color Selector window (cf. ).

### [sub:Color-Picker...[K]]

The Color Picker @C-CP enables the user to select foreground and
background colors, which affects , , and other drawing commands. It
displays current foreground and background colors in the selection boxes
at the bottom of the window. It has two modes: *Foreground* and
*Background*. To change modes, click on the desired selection box.
Clicking on the *Foreground*/*Background* *Switcher* button sets the
current foreground to the background and vice versa. The *Black*/*White*
Reset button sets the foreground to black and the background to white.

![image](images/CP)

The color palette is based on HSB (Hue, Saturation and Brightness) color
model (*see* ). Hue increases as you go down the palette while
saturation and brightness values are split horizontally. The left half
of the palette varies only in brightness while the right half varies
only in saturation. At the center of the color ramp are enlarged red,
green, blue, cyan, magenta, and yellow colors for quick selection. To
the left of the color palette is a grayscale ramp that goes from pure
black to pure white.

<span> </span>Double clicking on a color brings up the ColorChooser, a
widget with three sliders used to specify the RGB values of the
foreground or background color. The title of the ColorChooser widget
(*Foreground Color* or *Background Color*) indicates the current
selection mode. To get precise colors, manually change the values in the
text boxes. The hex value of the final color is also displayed, offering
a convenient way to retrieve custom colors to, e,g, personalize (*see*
[infobox:HEX] ).

As mentioned earlier, the tool can be used to ‘pick-up’
foreground/background colors from an image canvas. Foreground color can
also be changed using the *Color* dropdown menu in the *Options* dialog
of drawing tools such as , , and tools.

Color marks are only available with color images or grayscale images
that have been converted to RGB ( submenu). For non-RGB images,
background/foreground color will be drawn in equivalent gray levels,
e.g.: For a 8–bit image, if the foreground color is red (RGB: 255, 0, 0)
intensity of drawn selections will be $(255+0+0)/3=85$.

Colored (*see* , tool), on the other hand, can be created on all image
types becoming the easiest way to annotate grayscale images.

[sub:Stacks]
------------

This submenu contains commands related to . Operations specifically
related to are listed in the submenu.

### [sub:Add-Slice]
![image](images/AddSlice)

Inserts a blank slice after the currently
displayed slice. Holding inserts a blank slice before the current slice.
With , a dialog prompt allows to insert either a channel, z-slice or
t-frame.

### [sub:Delete-Slice]
![image](images/DeleteSlice)

Deletes the currently displayed slice. With ,
it can delete the current channel, z-slice or t-frame.

### [sub:Next-Slice-[\>]]

Displays the slice that follows the currently displayed slice. Holding
will skip ten slices forward.

### [sub:Previous-Slice-[\>]]

Displays the slice that precedes the currently displayed slice. Holding
will skip ten slices backward.

### [sub:Set-Slice...]

![image](images/SetSlice)

Displays a specified slice. The user must
enter a slice number greater than or equal to one and less than or equal
to the number of slices in the stack.

### [sub:Images-To-Stack]

Creates a new stack from images currently displayed in separate windows.

<span>*Method*</span>
:   If images differ in size, a drop-down menu allows to choose a
    conversion method:

![image](images/ImageToStacks)

<span>*Copy* (*center*)* *and* Copy* (*top-left*)</span>
:   Stack will have the width of the widest open image and the height of
    the highest open image. Smaller images will then be copied (either
    to the center or to the upper left corner) of the slice. Borders are
    filled with pixels that have a value of zero.

<span>*Scale* (*smallest*)* *and* Scale* (*largest*)</span>
:   Stack will have the dimensions of the smallest/largest open image.
    Other images are scaled to the new slice dimensions. Bicubic
    interpolation is used if *Bicubic interpolation* is checked (cf. 
    and ).

<span>*Name*</span>
:   Specifies the title of the stack to be created.

<span>*Title Contains*</span>
:   Enter a string into this field and ImageJ will only convert to stack
    images whose name contains that string.

<span>*Bicubic Interpolation*</span>
:   If checked, bicubic interpolation (cf. ) will be used if any of the
    *Scale* methods was previously chosen.

<span>*Use Title as Labels*</span>
:   If checked, image titles (without extension) will be used as stack
    labels. As described in , these labels (up to 60 characters)
    correspond to the image subtitle, the line of information above the
    image.

<span>*Keep Source Images*</span>
:   If checked, original images are kept.

### [sub:Stack-To-Images]

Converts the slices in the current stack to separate image windows.

### [sub:Make-Montage]
![image](images/MakeMontage)

Produces a single grid-image containing the individual images that
compose and 4D . This can be useful for visual comparisons of a series
of images stored in a stack and to create ‘panel figures’ for
publication and presentations. A dialog box allows you to specify the
magnification level at which the images are copied, and to select the
layout of the resulting grid.

<span>*Label Slices*</span>
:   If checked, montage panels are labelled with slice labels. Slice
    labels (up to 60 characters) correspond to the image subtitle, the
    line of information above the image. These labels are part of the
    stack metadata, typically created by  or . If no slice metadata
    exists (the <span>`setMetadata(Label, string)`</span> macro function
    can be used to customize slice labels) images are labelled with
    slice numbers. Note that the command can be used to draw labels in
    stack slices. Labels are typeset in sans-serif typeface.

<span>*Use Foreground Color*</span>
:   If checked, borders and labels are drawn in the foreground color and
    blank areas of the panel are filled with the background color.

### [sub:Reslice...[/]]
![image](images/Reslice)

Reconstructs one or more orthogonal slices
through the image volume represented by the current stack or hyperstack
@C-Reslice-Zproj.

The estimated size of the output stack and the amount of available
memory are displayed at the bottom of the dialog. Increase *Output
spacing* to reduce the size of the output stack.

A dialog allows you to specify the spacing of the reconstructed slices.

<span>*Output spacing*</span>
:   Determines the number of orthogonal slices that will be
    reconstructed. Increasing* Output spacing* reduces the size of the
    output stack.

<span>*Start at*</span>
:   Determines the image edge (*top*, *left, bottom* or *right*) from
    which reconstruction starts. *Start at* is replaced by *Slice count*
    if there is a line selection. With lines selections, a stack is
    created by shifting (by *Output spacing*) the line down and to the
    left to generate additional slices for the output stack. In this
    case, the size of the output stack in determined by *Slice count*.

<span>*Flip vertically*</span>
:   If checked, each slice in the output stack will be flipped
    vertically.

<span>*Rotate 90 degrees*</span>
:   If checked, each slice in the output stack will be rotated
    90$^{\circ}$.

<span>*Avoid interpolation*</span>
:   If checked, no interpolation will be done.

<span>*Help*</span>
:   Opens <http://imagej.nih.gov/ij/docs/menus/image.html#reslice>.

### [sub:Orthogonal-Views]

![image](images/OrthogonalViews)

Provides an orthogonal view display of the
current stack or hyperstack @C-OrthoViews. E.g., if a stack displays
sagittal sections, coronal (YZ projection image) and transverse (XZ
projection image) will be displayed through the data-set.

The two extra planar views are displayed in ‘sticky’ panels next to
original image and can be toggled using , the command shortcut.

The intersection point of the three views follows the location of the
mouse click and can be controlled by clicking and dragging in either the
XY, XZ or YZ view. XY and XZ coordinates are displayed in the title of
the projection panels. The mouse wheel changes the screen plane in all
three views.

Voxel dimensions can be adjusted in .

### [sub:Z-Project...]
Projects an image stack along the axis perpendicular to image plane (the
so-called *z* axis) @C-Reslice-Zproj. With hyperstacks, the projection
is performed on the active time frame, or for all time points if *All
Time Frames* is checked. Five different projection types are supported.
The preferred projection method is stored in the preferences file.

![image](images/Zproject)

<span>*Average Intensity*</span>
:   projection outputs an image wherein each pixel stores average
    intensity over all images in stack at corresponding pixel location.

<span>*Maximum Intensity*</span>
:   projection (MIP) creates an output image each of whose pixels
    contains the maximum value over all images in the stack at the
    particular pixel location.

<span>*Sum Slices*</span>
:   projection creates a real image that is the sum of the slices in the
    stack.

<span>*Standard Deviation*</span>
:   projection creates a real image containing the standard deviation of
    the slices.

<span>*Median*</span>
:   projection outputs an image wherein each pixel stores median
    intensity over all images in stack at corresponding pixel location.

### [sub:3D-Project...]
![image](images/3D-Project)

This command creates a sequence of projections
of a rotating volume (stack or hyperstack) onto a plane using
*nearest-point* (surface), *brightest-point*, or *mean-value* projection
or a weighted combination of nearest point projection with either of the
other two methods (partial opacity) @C-3Dproject. The user may choose to
rotate the volume about any of the three orthogonal axes (x, y, or z),
make portions of the volume transparent (using thresholding), or add a
greater degree of visual realism by employing depth cues.

Each frame in the animation sequence is the result of projecting from a
different viewing angle. To visualize this, imagine a field of parallel
rays passing through a volume containing one or more solid objects and
striking a screen oriented normal to the directions of the rays.

Each ray projects a value onto the screen, or projection plane, based on
the values of points along its path. Three methods are available for
calculating the projections onto this plane: *nearest-point*,
*brightest-point*, and *mean-value*. The choice of projection method and
the settings of various visualization parameters determine how both
surface and interior structures will appear.

<span>*Projection Method*</span>
:   Select *Nearest Point *projection to produce an image of the
    surfaces visible from the current viewing angle. At each point in
    the projection plane, a ray passes normal to the plane through the
    volume. The value of the nearest non transparent point which the ray
    encounters is stored in the projection image. *Brightest Point*
    projection examines points along the rays, projecting the brightest
    point encountered along each ray. This will display the brightest
    objects, such as bone in a CT (computed tomographic) study. *Mean
    Value* projection, a modification of brightest–point projection,
    sums the values of all transparent points along each ray and
    projects their mean value. It produces images with softer edges and
    lower contrast, but can be useful when attempting to visualize
    objects contained within a structure of greater brightness (e.g. a
    skull).

<span>*Slice Spacing*</span>
:   The interval, in pixels, between the slices that make up the volume.
    ImageJ projects the volume onto the viewing plane at each *Rotation
    Angle Increment*, beginning with the volume rotated by *Initial
    Angle* and ending once the volume has been rotated by *Total
    Rotation*.

<span>*Lower/Upper Transparency Bound*</span>
:   Determine the transparency of structures in the volume. Projection
    calculations disregard points having values less than the lower
    threshold or greater than the upper threshold. Setting these
    thresholds permits making background points (those not belonging to
    any structure) invisible. By setting appropriate thresholds, you can
    strip away layers having reasonably uniform and unique intensity
    values and highlight (or make invisible) inner structures. Note that
    you can also use to set the transparency bounds.

<span>*Opacity*</span>
:   Can be used to reveal hidden spatial relationships, especially on
    overlapping objects of different colors and dimensions. The
    (surface) *Opacity* parameter permits the display of weighted
    combinations of nearest-point projection with either of the other
    two methods, often giving the observer the ability to view inner
    structures through translucent outer surfaces. To enable this
    feature, set *Opacity* to a value greater than zero and select
    either *Mean Value* or *Brightest Point* projection.

<span>*Surface/Interior Depth–Cueing*</span>
:   Depth cues can contribute to the three-dimensional quality of
    projection images by giving perspective to projected structures. The
    depth-cueing parameters determine whether projected points
    originating near the viewer appear brighter, while points further
    away are dimmed linearly with distance. The trade-off for this
    increased realism is that data points shown in a depth-cued image no
    longer possess accurate densitometric values. Two kinds of
    depth-cueing are available: *Surface Depth-Cueing* and *Interior
    Depth-Cueing*. *Surface Depth-Cueing* works only on nearest-point
    projections and the nearest-point component of other projections
    with opacity turned on. *Interior Depth-Cueing *works only on
    brightest-point projections. For both kinds, depth-cueing is turned
    off when set to zero (i.e. 100% of intensity in back to 100% of
    intensity in front) and is on when set at $0<$n 100 (i.e. ($100-$n)%
    of intensity in back to 100% intensity in front). Having independent
    depth-cueing for surface (nearest-point) and interior
    (brightest-point) allows for more visualization possibilities.

<span>*Interpolate*</span>
:   Check *Interpolate* to generate a temporary z-scaled stack that is
    used to generate the projections. Z-scaling eliminates the gaps seen
    in projections of volumes with slice spacing greater than 1.0pixels.
    This option is equivalent to using the
    [Scale](http://www.imagescience.org/meijering/software/transformj/scale.html)
    plugin from the
    [TransformJ](http://www.imagescience.org/meijering/software/transformj/)
    package to scale the stack in the z-dimension by the slice spacing
    (in pixels). This checkbox is ignored if the slice spacing is less
    than or equal to 1.0pixels.

<span>*Help*</span>
:   Opens <http://imagej.nih.gov/ij/docs/menus/image.html#project>.

### [sub:Plot-Z-axis-Profile...]

![image](images/Zprofile)

Plots the ROI selection mean gray value versus
slice number. Requires a point or area selection.

Coordinates of the upper left corner of the selection (or the bounding
rectangle for non-rectangular selections) are displayed in the graph
title.

### [sub:Label...]
![image](images/Label)

Adds a sequence of numbers (e.g., timestamps)
and/or a label to a stack or hyperstack. Numbers and label are drawn in
the current foreground color (cf. ).

The initial *X,Y location*, and *Font size* of the label are based on
the existing rectangular selection, if any. Slices outside the *Range*
are not affected.

<span>*Format*</span>
:   Specifies the structure of the label. *0*: Unpadded sequence;
    *0000*: Pads each number with leading zero(s); *00:00*: Converts the
    label into a *minutes:seconds* timestamp; *00:00:00* Converts the
    label into a *hours:minutes:seconds* timestamp; *Text*: Stamps only
    the contents of the *Text* field. *Label*: Displays slice labels.

<span>*Starting value *and* Interval*</span>
:   Specify the first value and the numeric steps to be applied. Note
    that with timestamps, metric time values must be used, e.g., an
    *Interval* of 3600 will create 1hour increments.

<span>*Text*</span>
:   The string to be drawn after each number when the *Format* chosen is
    either *0* or *Text* (label without numeric sequence).

<span>*Use overlay*</span>
:   If checked, labels will be created as non-destructive image . Note
    that previously added overlays will be removed. Also, note that and
    can only have overlay labels.

<span>*Use text tool font*</span>
:   If checked, labels will be created using the typeface and style
    specified in the widget. If unchecked, labels are typeset using
    ImageJ’s default font: sans-serif typeface.

<span>*Help*</span>
:   Opens <http://imagej.nih.gov/ij/docs/menus/image.html#label>.

### [sub:Stack\>Tools]

#### [sub:Combine...]

![image](images/Combine)

Combines two stacks
<span>[</span>*Width*$\times$*Height*$\times$*Depth*<span>]</span>
(W$_{1}$$\times$H$_{1}$$\times$D$_{1}$ and
W$_{2}$$\times$H$_{2}$$\times$D$_{2}$) to create a new
W$_{1}$$+$W$_{2}$$\times$max(H$_{1}$,H$_{2}$)$\times$max(D$_{1}$,D$_{2}$)
stack. E.g., a 256$\times$256$\times$40 and a 256$\times$256$\times$30
stack would be combined to create one 512$\times$256$\times$40 stack.

If *Combine vertically* is enabled, creates a new
max(W$_{1}$$+$W$_{2}$)$\times$(H$_{1}$$+$H$_{2}$)$\times$max(D$_{1}$,D$_{2}$)
stack.

Unused areas in the combined stack are filled with background color
(cf. ).

#### [sub:Concatenate...]
![image](images/Concatenate)

Concatenates multiple images or stacks.
Images with mismatching type (*see* ) and dimensions are omitted
@C-Concatenator. Stacks with the same number of slices can be
concatenated as a 4D , if *Open as 4D image* is checked. In this case,
chosen stacks will be appended as time-points.

#### [sub:Reduce...]

![image](images/ReduceSize)

Reduces the size of stacks and hyperstacks by
the specified *Reduction Factor*. E.g., For a 30slices stack and a
*Reduction Factor* of 2, the reduced stack will be be composed of
15slices with every second slice being removed. Virtual
stacks/hyperstacks are supported

With Hyperstacks, the default reduction is performed in the T-Dimension,
but a choice is available to *Reduce in Z-Dimension* instead.

#### [sub:Reverse]

Alias for the command.

#### [par:Insert...]
![image](images/StackInserter)

Inserts a *Source* image into a *Destination*
image at the specified *X* and *Y* *Location* (pixel coordinates).
*Source *and *Destination* can be single images or stacks but must be of
the same type (*see* ). The *Destination* image will be permanently
modified once *Source* has been inserted. Note that when *Source* is a
single image, can be used (together with ) to create image selections
(ImageROIs), a more convenient way of blending two open images.

#### [par:Montage-to-Stack...]

![image](images/StackMaker)

Converts a montage image to an image stack
based on the specified number of rows and columns, taking into account a
*Border width*. This is the opposite of what the command does.

#### [par:Make-Substack]
![image](images/MakeSubstack)

Extracts selected images from the active
stack copying them to a new stack in the order of listing or ranging
@C-SubstackMaker.

Extracted slices will be removed from the source stack if *Deleted
slices from original stack* is checked. Currently, it does not work with
hyperstacks and takes one of three types of input:

1.  A range of images. E.g.: `2-14` <span>[</span>*extract slices* *2
    through 14*<span>]</span>

2.  A range of images with increment, which can be used to de-interleave
    slices. E.g.: `2-14-2` <span>[</span>*extract slices 2* *and 14 and
    every second slice in between*<span>]</span>

3.  A list of images. E.g.: `2,4,7,9,14`

#### [par:Grouped-Z-Project]
Creates a substack of $Stack\, size/Group\, size$ slices with each slice
being the result of a Z Projection performed over the range of
$Group\, size$*.*

![image](images/GroupedZproject)

*$Group\, size$* must divide evenly into the
stack size. This limitation can be overcome by the , that can also
create grouped Z-projections.

The first ten divisors of $Stack\, size$ are suggested at the bottom of
the dialog.

#### [sub:Remove-Slice-Labels]

Removes slice labels from stacks. The first line of a slice label (up to
60 characters) is displayed in parentheses in the image subtitle, the
line of information above the image. The macro functions
<span>`setMetadata(Label, string)`</span> and
<span>`getMetadata(Label)`</span> can be use to set and retrieve the
current slice label.

#### [sub:Start-Animation]

Animates the active stack by repeatedly displaying its slices (frames)
in sequence. It is run more easily by clicking on the play icon
preceding stack sliders (*see *). To stop the animation, click on the
slider pause icon, click on the image or use , evoked by the same
shortcut. As such, stacks animation can be toggled using . The frame
rate is displayed in the status bar. Open the dialog box to specify the
animation speed (pressing or right-clicking on the on the slider
play/pause icon opens the  dialog). Note that more than one stack can be
animated at a time.

#### [sub:Stop-Animation]

Terminates animation of the active stack (*see* ).

#### [sub:Animation-Options...]

![image](images/AnimationOptions)

Use this dialog to set the animation speed in
frames per second, the starting and ending frame, or to enable
‘oscillating’ animations. Selecting *Start Animation* animates the stack
as soon as the dialog is dismissed.

Note that setting the *Frame Interval* in sets the animation speed as
long as the unit used is ‘sec’.

This dialog can also be accessed by right-clicking on the play/pause
icon that precedes the slice slider in and frame slider in (*see* ).

[sub:Hyperstacks]
-----------------

This submenu hosts commands specifically related , images that have four
(4D) or five (5D) dimensions. General operations related to are listed
in the submenu.

### [sub:New-Hyperstack...]

![image](images/NewHyperstack)

Creates a new hyperstack. have *Width*,
*Heigh*t, *Channels* (c dimension), *Slices* (z dimension) and time
*Frames* (t dimension).

*Image* *Type* (*see* and ) and *Display* *Mode* (*see* ) can be
specified.

Checking *Label Images* will draw the channel number, slice number and
frame number on each image in the hyperstack.

### [sub:Stack-to-Hyperstack...]
![image](images/StackToHyperstack)

Converts a stack into a hyperstack. RGB stacks
are converted into 3 channel hyperstacks.

*Order* is the order of the channels (*c*), slices (*z*) and frames
(*t*) within the stack. ImageJ hyperstacks are always in *czt* order.
Stacks not in *czt* order will be shuffled to be in czt order. The
channel *Display Mode* can be *Composite*, *Color* or *Grayscale*
(cf. ).

### [sub:Hyperstack-to-Stack] 
Converts a hyperstack into a stack (in *czt* order).

### [sub:Reduce-Dimensionality...]

This command @C-ReduceDimens reduces the dimensionality of an hyperstack
by creating a new hyperstack with, for example, all the channels and
time points at a given z position or all the z slices for the current
channel and time point.

![image](images/ReduceDimensionality)

Uncheck* Channels(n)* to delete all but the
current channel, *Slices(n)* to delete all but the current z slice and
*Frames(n)* to delete all but the current time point. Check* Keep
Source* and the original stack will not be deleted.

The expected dimensions and size of the reduced stack are displayed in
the dialog.

### [sub:Channels...[Z]]

Opens the , or brings it to the front if it is already open. is the
keyboard shortcut for this command. This tool allows to select the
*Display mode *of composite images. In addition, several commands hosted
in the submenu can easily be accessed through the *More***$\gg$**
drop-down menu. The same drop-down menu also provides a convenient list
of primary colors (additive: red, green and blue, subtractive: cyan,
magenta, yellow) that can be used to pseudocolor .

![image](images/ChannelsTool)

[sub:Crop-[X]]
--------------

Crops the image or stack based on the current rectangular selection.

[sub:Duplicate...[D]]
---------------------

![image](images/Duplicate)

Creates a new window containing a copy of the
active image or rectangular selection. For stacks and hyperstacks it is
possible to specify the range of *Channels (c)*, *Slices (z)* and
*Frames (t)* to be duplicated.

With single images, hold to skip the dialog box.

[sub:Rename...]
---------------

![image](images/Rename)

Renames the active image.

[sub:Scale...[E]]
-----------------

![image](images/Scale)

Resizes the image or current area selection by
scale factors entered into a dialog box. As with , two resampling
methods are possible: *Bilinear* and *Bicubic* interpolation.

For the best looking results, particularly with graphics and text, use
integer scale factors (2, 3, 5, etc.) and check *Average when
downsizing* with scale factors less than 1.0 @C-Resizer-Scaler. Also,
when downsizing, smoothing the source image prior to scaling may produce
better looking results.

Scaled image/selection are copied to a new image named *Title* if
*Create new window* is checked. If scaling a selection that will not be
copied to a new image check *Fill with Background Color* to fill with
the background color instead of zero.

Entire stacks (or hyperstacks in the Z Dimension) will be scaled if
*Process entire stack* is checked.

[sub:Transform]
---------------

This submenu contains commands that perform geometrical image
transformation on the active image or stack.

### [sub:Flip-Horizontally]

Replaces the image or selection with a x-mirror image of the original.

### [sub:Flip-Vertically]

Turns the image or selection upside down (y-mirror).

### [sub:Flip-Z]

Reverses the order of the slices in a stack (z-mirror).

### [sub:Rotate-90-Degrees-R]
Rotates the entire image or stack clockwise 90$^{\circ}$.

### [sub:Rotate-90-Degrees-L]
Rotates the entire image or stack counter-clockwise 90$^{\circ}$.

### 

![image](images/Rotate)

Use this dialog to rotate the active image or
selection clockwise the specified number of *degrees*.

Set *Grid Lines* to a value greater than zero to superimpose a grid on
the image in *Preview* mode. Two resampling methods are possible:
*Bilinear* and *Bicubic* interpolation (cf. ).

With 8–bit and RGB images, check *Fill with Background Color* to fill
with the background color instead of zero (cf. ). Check* Enlarge to Fit
Result* and the image will be enlarged as needed to avoid clipping.

### 

![image](images/Translate)

Translates (moves) the image in the x and y
directions by a specified number of pixels. With stacks, you can
translate either the current image or all the images in the stack. Two
resampling methods are possible: *Bilinear* and *Bicubic* interpolation
(cf. ).

Check *Preview* to see how the translation will affect the image. The
background at the edges of the image will be set to 0.

### [sub:Bin...]
![image](images/Bin)

Reduces the size of an image by binning
groups of pixels of user-specified size (*X,Y,Z shrink factor*)
@C-Binner. The resulting pixel can be calculated as *Average*, *Median*,
*Maximum*, or *Minimum*. Undo support is restricted to 2D images (non
stacks).

Z binning produces equivalent results to However, there are two main
differences between the two commands: While replaces the original image,
creates a new substack; and while *Z shrink factor* takes any value,
*Group size* must divide evenly into the stack size.

### [sub:ImageToResults]
![image](images/ImageToResults)

Prints the active area selection to the ,
clearing previous results. The entire image is processed when no area
ROI exists. XY coordinates are detailed in column and row headers.
Calibrated and floating-point images are listed with the precision
specified by *Decimal places* in

For RGB images, each pixel is converted to grayscale using the formula
$\text{gray}=(\text{red}+\text{green}+\text{blue})/3$ or the formula
$\text{gray}=0.299\times\text{red}+0.587\times\text{green}+0.114\times\text{blue}$
if *Weighted RGB to Grayscale Conversion* is checked in

### [sub:ResultsToImage]
The reverse of , converting the tabular data in the into a 32–bit image
named *Results Table*. Column and row headers are ignored.

[sub:Zoom]
----------

This submenu contains commands that control how the current image is
displayed. The and or and keys are the preferred way to use the and
commands. When a selection exists, zooming with the requires holding
down either or .

### [sub:ZoomIn]
Zooms in to next higher magnification level and, if possible, enlarges
the window. As explained in , there are 21possible levels (shown in the
title bar): 3.1, 4.2, 6.3, 8.3, 12.5, 16.7, 25, 33.3, 50, 75, 100, 150,
200, 300, 400, 600, 800, 1200, 1600, 2400 and 3200%.

![image](images/ZoomIndicator)

Images are magnified using and , or and if no
selection exists. Magnification occurs around the cursor, or to the
center of the image when the cursor lays outside the image canvas. The
*Zoom indicator* in the upper left corner of magnified images shows what
portion of the image is currently displayed. At high magnification
levels the pixel grid becomes visible by default unless *Interpolate
zoomed images* is checked in To scroll a magnified image, hold down the
space bar ( shortcut) while dragging the cursor.

By default, and the active selection are displayed with a 1–pixel wide
contour regardless of the image magnification (*0 Width*). To thicken
ROI edges at higher zoom levels, set *Stroke width* to a non-zero value
in , or ’s

### [sub:ZoomOut]

Zooms out to next lower magnification level and, if needed, shrinks the
window.

### [sub:Original-Scale-[4]]

Displays the image at the magnification used when the image was first
opened. As a shortcut, double click on the tool.

### [sub:View-100=000025-[5]]

Displays the image using 100% magnification (1image pixel = 1screen
pixel). Enable *Open Images at 100%* in the dialog to have images
automatically opened at 100% magnification.

### [sub:ZoomToSelection]

Zooms in based on the current selection. Note that in the absence of a
selection, this command zooms the image to a *fit to screen* level
(*see* ).

### [sub:Set-Zoom...]

![image](images/SetZoom)

Zooms the active image to an exact value
(e.g. 37.4%) overcoming the predefined zoom steps described in . The
zoomed canvas will be centered at *X,Y center* (pixel coordinates)
@C-SetZoom.

[sub:Overlay]
-------------

As mentioned previously, this submenu contains commands for creating and
working with non-destructive image . An overlay consists of one or more
selections: arrows, lines, points, shapes and text (*see* ImageJ ).
Overlays can also be composed of image selections (imageROIs) that
behave partially as regular (*see* ).

Press () to add the current selection to the overlay. Press () to create
an RGB image with the overlay embedded in it. The overlay is preserved
when an image is saved in TIFF format (cf. [infobox:Formats] ).

![image](images/OverlayExamples)

### [sub:Add-Selection...[b]]
![image](images/AddToOverlay)

Selections are immediately added to the
current overlay when pressing . Pressing will display a dialog box in
which* Stroke color* and *width* and *Fill* *color* can be set.

Except for text selections, and as explained in , *Stroke* (contour)
color and *Width* are ignored if a *Fill color* is specified. Colors are
specified using the name of one of the default selection colors
(*black*, *blue*, *cyan*, *green*, *magenta*, *orange*,* red*, *white*
and *yellow*) or using hex notation (*see* [infobox:HEX] ).

Previously added are removed if *New overlay* is checked. Also, if no
selection exists and the command is run, a warning message is displayed
in which is possible to remove the existing overlay, by running .

Note that measured selections () can be added automatically to the image
overlay by selecting the *Add to overla*y checkbox in

### [sub:Add-Image...]
Blends two open images by adding an image to the overlay of frontmost
image. The image to be blended can be of any type (*see* ) but cannot be
larger than the host image. A blending alpha value can be specified in
the *Opacity (0–100%)* field. The initial X,Y location is based on the
existing rectangular selection, if any.

![image](images/AddImage)

By default the created overlay image cannot be
moved around the canvas, i.e,, is not a image selection (ImageROI), but
are stored in the TIFF header and can be saved and restored when saving
images in TIFF format. On the other hand, image selections can be
created using or by running after adding the image to the overlay.

[Hexadecimal (hex)](http://en.wikipedia.org/wiki/Hexadecimal) notation
is frequently used in computing to summarize binary code in a
human-friendly manner. Here are some decimal/hexadecimal equivalents:

<span>lccccccccccccccccccccccccccccccccc</span> <span>Dec</span> &
<span>0</span> & <span>1</span> & <span>2</span> & <span>3</span> &
<span>4</span> & <span>5</span> & <span>6</span> & <span>7</span> &
<span>8</span> & <span>9</span> & <span>10</span> & <span>11</span> &
<span>12</span> & <span>13</span> & <span>14</span> & <span>15</span> &
<span>16</span> & <span>17</span> & <span>18</span> & <span>19</span> &
<span>20</span> & <span>…</span> & <span>30</span> & <span>40</span> &
<span>50</span> & <span>60</span> & <span>70</span> & <span>80</span> &
<span>90</span> & <span>100</span> & <span>110</span> & <span>…</span> &
<span>255</span><span>\
</span><span>Hex </span> & <span>0</span> & <span>1</span> &
<span>2</span> & <span>3</span> & <span>4</span> & <span>5</span> &
<span>6</span> & <span>7</span> & <span>8</span> & <span>9</span> &
<span>A</span> & <span>B</span> & <span>C</span> & <span>D</span> &
<span>E</span> & <span>F</span> & <span>10</span> & <span>11</span> &
<span>12</span> & <span>13</span> & <span>14</span> & <span>…</span> &
<span>1E</span> & <span>28</span> & <span>32</span> & <span>3C</span> &
<span>46</span> & <span>50</span> & <span>5A</span> & <span>64</span> &
<span>6E</span> & <span>…</span> & <span>FF</span><span>\
</span>

Decimal RGB color values that typically range from 0 to 255 are
succinctly represented by two hexadecimal digits ranging from 00 through
FF. A hex color value is a 6–digit, three–byte hexadecimal number (hex
triplet) in the form \#RRGGBB, in which RR specifies the red, GG the
green and BB the blue value.

Opacity of hex triplets can be modified by an optional transparency
(alpha) channel, giving rise to a 8–digit, four–byte hex number in the
form \#AARRGGBB with AA specifying the alpha blending value. In ImageJ,
the alpha channel codes for opacity and ranges from 00 (fully
transparent) to FF (solid color). Alpha values can be omitted for fully
opaque colors. The table below provides some hexadecimal color values in
10% transparency increments, and can be used to create semi-transparent
.

<span>llcccccccccccc</span> & & & <span>\
</span>& & <span>100%</span> & <span>90%</span> & <span>80%</span> &
<span>70%</span> & <span>60%</span> & <span>50%</span> &
<span>40%</span> & <span>30%</span> & <span>20%</span> &
<span>10%</span> & <span>0%</span> & <span>\
</span> & & <span>\#FF</span> & <span>\#E5</span> & <span>\#CC</span> &
<span>\#B2</span> & <span>\#99</span> & <span>\#7F</span> &
<span>\#66</span> & <span>\#4C</span> & <span>\#33</span> &
<span>\#19</span> & <span>\#00</span> & <span>0000FF</span><span>\
</span><span>Cyan</span> & & <span>\#FF</span> & <span>\#E5</span> &
<span>\#CC</span> & <span>\#B2</span> & <span>\#99</span> &
<span>\#7F</span> & <span>\#66</span> & <span>\#4C</span> &
<span>\#33</span> & <span>\#19</span> & <span>\#00</span> &
<span>00FFFF</span><span>\
</span><span>Green</span> & & <span>\#FF</span> & <span>\#E5</span> &
<span>\#CC</span> & <span>\#B2</span> & <span>\#99</span> &
<span>\#7F</span> & <span>\#66</span> & <span>\#4C</span> &
<span>\#33</span> & <span>\#19</span> & <span>\#00</span> &
<span>00FF00</span><span>\
</span><span>Magenta</span> & & <span>\#FF</span> & <span>\#E5</span> &
<span>\#CC</span> & <span>\#B2</span> & <span>\#99</span> &
<span>\#7F</span> & <span>\#66</span> & <span>\#4C</span> &
<span>\#33</span> & <span>\#19</span> & <span>\#00</span> &
<span>FF00FF</span><span>\
</span><span>Red</span> & & <span>\#FF</span> & <span>\#E5</span> &
<span>\#CC</span> & <span>\#B2</span> & <span>\#99</span> &
<span>\#7F</span> & <span>\#66</span> & <span>\#4C</span> &
<span>\#33</span> & <span>\#19</span> & <span>\#00</span> &
<span>FF0000</span><span>\
</span><span>Orange</span> & & <span>\#FF</span> & <span>\#E5</span> &
<span>\#CC</span> & <span>\#B2</span> & <span>\#99</span> &
<span>\#7F</span> & <span>\#66</span> & <span>\#4C</span> &
<span>\#33</span> & <span>\#19</span> & <span>\#00</span> &
<span>FF9600</span><span>\
</span><span>Yellow</span> & & <span>\#FF</span> & <span>\#E5</span> &
<span>\#CC</span> & <span>\#B2</span> & <span>\#99</span> &
<span>\#7F</span> & <span>\#66</span> & <span>\#4C</span> &
<span>\#33</span> & <span>\#19</span> & <span>\#00</span> &
<span>FFFF00</span><span>\
</span><span>White</span> & <span>255,255,255</span> & <span>\#FF</span>
& <span>\#E5</span> & <span>\#CC</span> & <span>\#B2</span> &
<span>\#99</span> & <span>\#7F</span> & <span>\#66</span> &
<span>\#4C</span> & <span>\#33</span> & <span>\#19</span> &
<span>\#00</span> & <span>FFFFFF</span><span>\
</span><span>Gray</span> & <span>127,127,127</span> & <span>\#FF</span>
& <span>\#E5</span> & <span>\#CC</span> & <span>\#B2</span> &
<span>\#99</span> & <span>\#7F</span> & <span>\#66</span> &
<span>\#4C</span> & <span>\#33</span> & <span>\#19</span> &
<span>\#00</span> & <span>7F7F7F</span><span>\
</span><span>Black</span> & & & & & & & <span>\#7F</span> &
<span>\#66</span> & <span>\#4C</span> & <span>\#33</span> &
<span>\#19</span> & <span>\#00</span> & <span>\
</span>

<span>0.75</span>

[t]<span>0.94</span>

<span>0.75</span>

ColorChoosers in the display hex values of RGB colors. The built-in
macro function <span>`toHex()`</span> returns hexadecimal
representations of decimal numbers and can also be used to convert RGB
color values (*see*
[RGBtoHEX](http://imagejdocu.tudor.lu/doku.php?id=macro:rgbtohex)
macro). Several other macros (e.g.,
[MakeOverlay](http://imagej.nih.gov/ij/macros/examples/MakeOverlay.txt))
exemplify how to annotate images using hex colors.

### [sub:Hide-Overlay]

Causes ImageJ to stop displaying the overlay displayed by .

### [sub:Show-Overlay]

Displays an overlay that was hidden by .

### [sub:From-ROI-Manager]

Creates an overlay from the selections on the list (*see* ). Note that
previously added will be removed.

### [sub:To-ROI-Manager]

Copies the selections and images in the current overlay to the ROI
Manager, where they can be edited (moved, resized or re-colored) (*see*
). Note that previous items in the ROI Manager list will be deleted.

### [sub:Remove-Overlay]

Permanently clears the overlay so that it cannot be restored using .

### [sub:Flatten-[F]]

Creates a new RGB image that has the overlay rendered as pixel data. The
RGB image is the same size as the active image, unlike , which creates a
WYSIWYG (What You See Is What You Get) image that is the same size as
its window. must first be converted to RGB ( submenu, *see also* ) when
flattening all slices in the stack.

### [sub:Labels...]
![image](images/OverlayLabels)

This prompt defines if and how should be labelled.

It sets the behavior of , (after activating the *Add to overla*y option
in ), and the display.

<span>*Color*</span>
:   The color of the label as one of the default selection colors.

<span>*Font size*</span>
:   Specifies the font size of the label (12–72pt).

<span>*Show labels*</span>
:   If overlays should be decorated with a text label. This option is
    inactive by default.

<span>*Use names as labels*</span>
:   If checked, ROI names are used instead of the default numeric
    labels. If unchecked, the size (selection count) of the current
    overlay is used. Selections can be renamed using the command, or,
    when using the ROI Manager, either or

<span>*Draw backgrounds*</span>
:   If checked, text will be displayed on complementary colored
    background. This option produces similar labels to those produced by
    the ROI Manager option when *Labels *is activated.

<span>*Bold*</span>
:   If checked, labels (typeset in sans-serif font) are displayed in
    boldface.

### [sub:Overlay-Options...]
![image](images/OverlayOptions)

Use this command to define the default
overlay* Stroke color*,* Stroke width* and *Fill* *color*. As mentioned
in and , *Stroke* (contour) color and *Width* are ignored if a *Fill
color* is specified. Set *Stroke width* to 0 to have selections drawn
using a width of one pixel regardless of the image magnification (*see*
[infobox:ZoomedCanvas] ).

As usual, colors are specified using the name of one of the ImageJ
default colors (*black*, *blue*, *cyan*, *green*, *magenta*, *orange*,*
red*, *white* and *yellow*) or using .

With and , selecting the *Set stack positions* checkbox will make
visible only when browsing their respective slice or frame. If
unchecked, overlays will be displayed throughout the stack (*see also* ,
*More*<span>$\gg$</span>**).

[sub:Lookup-Tables]
-------------------

This submenu contains a selection of color lookup tables that can be
applied to grayscale images to produce . In addition, it lists all the
lookup tables installed in the directory. More than 100 additional
lookup tables are available from the ImageJ website as [individual
files](http://imagej.nih.gov/ij/download/luts/) or, in bulk, as a .

As explained earlier, it is not possible to organize LUTs into
subfolders. However, the most frequently used lookup tables can be
renamed with a numeric prefix (e.g, , , etc.) so that they are listed
earlier in the menu. This submenu can also be accessed from the by
loading the .

When loading a lookup table is loaded and no image is open, a
256$\times$32 ramp image is created to display the color table.

### [sub:Invert-LUT]

Inverts the current lookup table. For 8–bit images, the value ($v$) of
each entry in the table is replaced by $255-v$. With inverted LUTs,
pixels with a value of zero are white and pixels with a value 255 are
black. Unlike the command, pixels values are not altered, only the way
the image is displayed on the screen.

### [sub:Apply-LUT]

Applies the current lookup table function to each pixel in the image or
selection and restores the default identity function. This modifies the
gray values so that when the image is viewed using the default grayscale
lookup table it will look the same as it did before. This command is
equivalent to clicking on *Apply* in . For thresholded images, it is
equivalent to clicking on *Apply* in .

[sec:Process]
=============

This menu lists all commands related to image processing, including
point operations, filters, and arithmetic operations between multiple
images @Burger:2008p14082. The image will be used in most of the
illustrations of this section.

![** submenu: , , and **](images/SmoothSharpenFindEdgesEContrast)

<span>[sub:Smooth-[S]]</span>
-----------------------------

Blurs the active image or selection. This filter replaces each pixel
with the average of its 3$\times$3 neighborhood.

<span>[sub:Sharpen]</span>
--------------------------

Increases contrast and accentuates detail in the image or selection, but
may also accentuate noise. This filter uses the following weighting
factors to replace each pixel with a weighted average of the 3$\times$3
neighborhood:
<span>$$\begin{array}{rrr}
-1 & -1 & -1\\
-1 & 12 & -1\\
-1 & -1 & -1
\end{array}$$ </span>

<span>[sub:Find-Edges]</span>
-----------------------------

Uses a Sobel edge detector to highlight sharp changes in intensity in
the active image or selection. Two 3$\times$3 convolution kernels (shown
below) are used to generate vertical and horizontal derivatives. The
final image is produced by combining the two derivatives using the
square root of the sum of the squares.

<span>$\begin{array}{rrrrrrrrrrrr}
1 & 2 & 1 &  &  &  &  &  &  & \,1 & \,0 & -1\\
0 & 0 & 0 &  &  &  &  &  &  & \,2 & \,0 & -2\\
-1 & -2 & -1 &  &  &  &  &  &  & \,1 & \,0 & -1
\end{array}$</span>

[sub:Find-Maxima]-------------------------------

Determines the local maxima in an image and creates a binary (mask-like)
image of the same size with the maxima, or one segmented particle per
maximum, marked @C-Find-Maxima. Analysis is performed on the existing
rectangular selection or on the entire image if no selection is present.

For RGB images, maxima of luminance are selected, with the luminance
defined as weighted or unweighted average of the colors depending on how
*Weighted RGB to Grayscale Conversion* is set in .

![image](images/FindMaxima)

<span>*Noise Tolerance*</span>
:   Maxima are ignored if they do not stand out from the surroundings by
    more than this value (calibrated units for calibrated images). In
    other words, a threshold is set at the maximum value minus noise
    tolerance and the contiguous area around the maximum above the
    threshold is analyzed. For accepting a maximum, this area must not
    contain any point with a value higher than the maximum. Only one
    maximum within this area is accepted.

<span>*Output* *Type*</span>
:   Can be (*see* ):

    <span>*Single Points*</span>
    :   Results in one single point per maximum.

    <span>*Maxima* *Within* *Tolerance*</span>
    :   All points within the *Noise Tolerance* for each maximum.

    <span>*Segmented Particles*</span>
    :   Assumes that each maximum belongs to a particle and segments the
        image by a watershed algorithm applied to the values of the
        image (in contrast to , which uses the Euclidian distance map –
        EDM). See for EDM-based segmentation of binary images.

    <span>*Point* *Selection*</span>
    :   Displays a multi-point selection with a point at each maximum.

    <span>*List*</span>
    :   Displays the XY coordinates of each maximum in the Results
        window.

    <span>*Count*</span>
    :   Displays the number of maxima in the Results window.

<span>*Exclude Edge Maxima*</span>
:   Excludes maxima if the area within the noise tolerance surrounding a
    maximum touches the edge of the image (edge of the selection does
    not matter).

<span>*Above* *Lower* *Threshold*</span>
:   (Thresholded images only) Finds maxima above the lower threshold
    only. The upper threshold of the image is ignored. If *Segmented
    Particles* is selected as *Output Type*, the area below the lower
    threshold is considered a background. This option cannot be used
    when finding minima (image with light background and inverted LUT).

<span>*Light Background*</span>
:   To be checked if the image background is brighter than the objects
    to be found, as it is in the Cell Colony image in the illustration
    below.

<span>*Help*</span>
:   Opens
    <http://imagej.nih.gov/ij/docs/menus/process.html#find-maxima>.

![image](images/FindMaximaOutputTypes)

Output is a binary image, with foreground 255 and background 0, using an
inverted or normal LUT depending on the *Black Background* option in
(*see* [infobox:blackBackground] ).

The number of particles (as obtained by ) in the output image does not
depend on the selected *Output Type*. Note that *Segmented Particles*
will usually result in particles touching the edge if *Exclude Edge
Maxima* is selected. *Exclude Edge Maxima* applies to the maximum, not
to the particle.

does not work on stacks, but the
[FindStackMaxima](http://imagej.nih.gov/ij/macros/FindStackMaxima.txt)
macro runs it on all the images in a stack and creates a second stack
containing the output images. The
[FindMaximaRoiManager](http://imagej.nih.gov/ij/macros/examples/FindMaximaRoiManager.txt)
macro demonstrates how to add particles found by to the

<span>0.75</span>

<span>\>m<span>0.47</span>\>m<span>0.47</span></span>
![image](images/FindMaximaEx1) & ![image](images/FindMaximaEx2)<span>\
</span><span>Points at maxima (Multi-point selection) </span> &
<span>Segmented Particles</span>* *<span>(ROIs obtained with
Analyze)</span><span>\
</span>

[sub:Enhance-Contrast]
----------------------

![image](images/EnhanceContrast)

Enhances image contrast by using either
histogram stretching or histogram equalization. Both methods are
described in detail in the [Hypermedia Image Processing
Reference](http://homepages.inf.ed.ac.uk/rbf/HIPR2/) – [Contrast
Stretching](http://homepages.inf.ed.ac.uk/rbf/HIPR2/stretch.htm#1) and
[Histogram
Equalization](http://homepages.inf.ed.ac.uk/rbf/HIPR2/histeq.htm#1).

This command does not alter pixel values as long as *Normalize*,
*Equalize Histogram* or *Normalize All n Slices* (in the case of stacks)
are not checked.

<span>*Saturated Pixels*</span>
:   Determines the number of pixels in the image that are allowed to
    become saturated. Increasing this value will increase contrast. This
    value should be greater than zero to prevent a few outlying pixel
    from causing the histogram stretch to not work as intended.

<span>*Normalize*</span>
:   If checked, ImageJ will recalculate the pixel values of the image so
    the range is equal to the maximum range for the data type, or 0–1.0
    for float images. The contrast stretch performed on the image is
    similar to the ‘*Auto*’ option in the window, except that with
    stacks, each slice in the stack is adjusted independently, according
    to the optimal for that slice alone (if *Use Stack Histogram* is
    unchecked). The maximum range is 0–255 for 8–bit images and 0–65535
    for 16–bit images.\
    With stacks another checkbox*, Normalize All n Slices*, is
    displayed. If checked, normalization will be applied to all slices
    in the stack. Note that normalization of RGB images is not
    supported, and thus this option will not be available on RGB stacks.

<span>*Equalize Histogram*</span>
:   If checked, ImageJ will enhance the image using histogram
    equalization @C-EnhContrast. Create a selection and the equalization
    will be based on the histogram of that selection. Uses a modified
    algorithm that takes the square root of the histogram values. Hold
    to use the standard histogram equalization algorithm. The *Saturated
    Pixels* and *Normalize* parameters are ignored when *Equalize
    Histogram* is checked.

<span>*Use* *Stack* *Histogram*</span>
:   If checked, ImageJ will use the overall stack histogram instead of
    individual slice histograms, that allow optimal adjustments for each
    slice alone. This option may be specially relevant when performing
    enhancements based on a ROI.

<span>*Help*</span>
:   Opens <http://imagej.nih.gov/ij/docs/menus/process.html#enhance>.

Use the commands in this submenu to add noise to images or remove it.

![**: , , and **](images/Noise)

### [sub:Add-Noise]

Adds random noise to the image or selection. The noise is Gaussian
(normally) distributed with a mean of zero and standard deviation of 25.

### [sub:Add-Specified-Noise...]

![image](images/AddSpecifiedNoise)

Adds Gaussian noise with a mean of zero and a chosen standard deviation.

### [sub:Salt-and-Pepper]

Adds *salt and pepper* noise to the image or selection by randomly
replacing 2.5% of the pixels with black pixels and 2.5% with white
pixels. This command only works with 8–bit images.

### [sub:Despeckle]

This is a median filter. It replaces each pixel with the median value in
its 3$\times$3 neighborhood. This is a time consuming operation because,
for each pixel in the selection, the nine pixels in the 3$\times$3
neighborhood must be sorted and the center pixel replaced with the
median value (the fifth). Median filters are good at removing *salt and
pepper *noise.

### [sub:Remove-Outliers...]

![image](images/RemoveOutliers)
Replaces a pixel by the median of the pixels
in the surrounding if it deviates from the median by more than a certain
value (the threshold). Useful for correcting, e.g., hot pixels or dead
pixels of a CCD camera.

<span>*Radius*</span>
:   Determines the area (uncalibrated, i.e., in pixels) used for
    calculating the median. Run to see how radius translates into an
    area.

<span>*Threshold*</span>
:   Determines by how much the pixel must deviate from the median to get
    replaced, in raw (uncalibrated) units.

<span>*Which Outliers*</span>
:   Determines whether pixels brighter or darker than the surrounding
    (the median) should be replaced.

### [sub:Remove-NaNs...]

![image](images/RemoveNaNs)

This filter replaces NaN (Not-a-Number)
pixels in 32–bit (float) images by the median of the neighbors inside
the circular kernel area defined by *Radius* @C-RemoveNaNs. It does not
remove patches of NaNs larger than the kernel size, however.

Note that some ImageJ filters, such as , , and destroy the surrounding
of NaN pixels by setting it also to NaN. Other filters may produce
invalid results in the position of NaN pixels.

[sub:Shadows]
-------------

Commands in this submenu produce a shadow effect, with light appearing
to come from a direction corresponding to the command name (, , , , , ,
and ). The commands use Convolve $3\times3$, ImageJ’s $3\times3$
convolution function. The command uses all eight kernels to demonstrate
the speed of Convolve $3\times3$. The illustration below shows four of
the convolution kernels.

<span>\>m<span>0.2</span>\>m<span>0.2</span>\>m<span>0.2</span>\>m<span>0.2</span>\>m<span>0.2</span></span>
& <span>$\begin{array}{rrr}
1 & 2 & 1\\
0 & 1 & 0\\
-1 & -2 & -1
\end{array}$</span> & <span>$\begin{array}{rrr}
-1 & -2 & -1\\
0 & 1 & 0\\
1 & 2 & 1
\end{array}$</span> & <span>$\begin{array}{rrr}
-1 & 0 & 1\\
-2 & 1 & 2\\
-1 & 0 & 1
\end{array}$</span> & <span>$\begin{array}{rrr}
1 & 0 & -1\\
2 & 1 & -2\\
1 & 0 & -1
\end{array}$</span><span>\
</span>

![**:* *, , , and kernels.**](images/ShadowsDemo)

[sub:Binary]
------------

This submenu contains commands that create or process binary (black and
white) images. They assume that objects are black and background is
white unless *Black Background* is checked in the dialog box (*see*
[infobox:blackBackground] ).

[h]

<span>\>p<span>0.125</span>\>p<span>0.125</span>\>p<span>0.125</span>\>p<span>0.125</span>\>p<span>0.125</span>\>p<span>0.125</span>\>p<span>0.125</span>\>p<span>0.125</span></span>
& & & & & & & <span>\
</span><span>\
</span> & <span> (grayscale)</span> & <span> (grayscale)</span> & <span>
then </span> & <span> then </span> & <span>1pixel wide outline</span> &
<span>1pixel wide skeleton</span><span>\
</span>

### [sub:Make-Binary]

![image](images/MakeBinary)

Converts an image to black and white. If a
threshold has been set using the tool, the depicted dialog is displayed.
The value of the *Black foreground, white background* checkbox reflects
and sets the global *Black Background* value of

If a threshold has not been set, will analyze the histogram of the
current selection, or of the entire image if no selection is present,
and set an automatic threshold level to create the binary image
(*\`Auto-thresholding*’ is displayed in the Status bar, cf. ).

With stacks the dialog box is displayed. Note that for non-thresholded
images and stacks and behave similarly.

### [sub:Convert-to-Mask]

![image](images/ConvertToMask)

Converts an image to black and white.

The mask will have an inverting LUT (white is 0 and black is 255) unless
*Black Background* is checked in the  dialog box. If a threshold has not
been set, automatic threshold levels will be calculated (cf. ). Note
that for non-thresholded images and stacks and behave similarly.

With stacks, the depicted dialog is displayed.

<span>*Calculate Threshold for Each Image*</span>
:   If checked, threshold levels will be calculated for each individual
    slice, otherwise the calculated threshold of the currently displayed
    slice will be used for all slices

<span>*Black* *Background*</span>
:   Defines whether the background is black and the foreground is white.
    Note that the value of this checkbox reflects and sets the global
    *Black Background* value of

Four ImageJ commands can be used to create binary masks:

1.  2.  3.  4.  (*Apply*)

By default these commands will produce binary images with inverted LUTs,
so that black is 255 and white is 0 (*see* ). This behavior can be
reversed by checking *Black Background* in before running the above
commands (i.e., an inverting LUT will not be used: black will be 0 and
white 255). This choice can be confirmed when running and on thresholded
images. It can also be imposed at startup (*see* ).

### [sub:Erode]

Removes pixels from the edges of objects in a binary image. Use to
perform grayscale erosion on non-thresholded images.

### [sub:Dilate]

Adds pixels to the edges of objects in a binary image. Use to perform
grayscale dilation on non-thresholded images.

### [sub:Open]

Performs an erosion operation, followed by dilation. This smoothes
objects and removes isolated pixels.

### [sub:Close–]

Performs a dilation operation, followed by erosion. This smoothes
objects and fills in small holes. The command has a tailing hyphen to
differentiate it from .

<span>\>m<span>0.166</span>\>m<span>0.166</span>\>m<span>0.166</span>\>m<span>0.166</span>\>m<span>0.166</span>\>m<span>0.17</span></span>
<span>Original</span> & & & & & <span>Original + + </span><span>\
</span>

\

![** commands.**](images/BinaryCommands)

### [sub:Outline]

Generates a one pixel wide outline of foreground objects in a binary
image. The line is drawn inside the object, i.e., on previous foreground
pixels.

### [sub:Fill-Holes]

This command fills holes (4–connected background elements) in objects by
filling the background @C-Fill-Holes.

### [sub:Skeletonize]
Repeatably remove pixels from the edges of objects in a binary image
until they are reduced to single-pixel-wide shapes ([topological
skeletons](http://en.wikipedia.org/wiki/Topological_skeleton)). As
explained in [infobox:Skeletonize-vs-Skeletonize3D] , there are several
skeletonization algorithms. ImageJ implements a thinning algorithm from
Zhang and Suen. [A fast parallel algorithm for thinning digital
patterns](http://dx.doi.org/10.1145/357994.358023). *CACM*
27(3):236–239, 1984, in which a [lookup
table](http://imagej.nih.gov/ij/images/skeletonize-table.gif) indexes
all the 256 possible 3$\times$3 neighborhood configurations for each
foreground pixel. The algorithm calculates the index number for each
object pixel, and uses the lookup table to decide if the pixel is
eliminable. This process is repeated until no pixel can be eliminated.

When debugging is enabled in , creates an animation documenting the
iterations of the thinning algorithm.

[Skeletonize3D](http://fiji.sc/wiki/index.php/Skeletonize3D) is a ImageJ
plugin written by Ignacio Arganda-Carreras @C-Skeletonize3D that offers
several advantages over , the legacy skeletonization algorithm of
ImageJ:

-   works only with binary 2D images.
    [Skeletonize3D](http://fiji.sc/wiki/index.php/Skeletonize3D) works
    with 8–bit 2D images and stacks, expecting the image to be binary.
    If not, [Skeletonize3D](http://fiji.sc/wiki/index.php/Skeletonize3D)
    considers all pixel values above 0 to be white (255).

-   While relies on *Black background* value in  (*see*
    [infobox:blackBackground] ), the output of
    [Skeletonize3D](http://fiji.sc/wiki/index.php/Skeletonize3D) always
    has a value of 255 at the skeleton and 0 at background pixels,
    independently of the *Black background* option.

In , is already pre-installed as . In ImageJ, it can be downloaded and
installed from the [Skeletonize3D
homepage](http://fiji.sc/wiki/index.php/Skeletonize3D).

![image](images/Skeletonize3D)

Maximum projections () of skeletons produced by (middle) and
[Skeletonize3D](http://fiji.sc/wiki/index.php/Skeletonize3D)
(right). The left image is the maximum projection of the original stack.
Topographic skeletons can be analyzed using the
[AnalyzeSkeleton](http://fiji.sc/wiki/index.php/AnalyzeSkeleton)
plugin.

### [sub:Distance-Map]

Generates a Euclidian distance map (EDM) from a binary image
@Leymarie199284. Each foreground pixel in the binary image is replaced
with a gray value equal to that pixel’s distance from the nearest
background pixel (for background pixels the EDM is 0). The , and
operations are based on the EDM algorithm.

The output type (*Overwrite*, *8–bit*, *16–bit* or *32–bit*) of this
command can be set in the  dialog box. Note that when selecting
‘*Overwrite*’ or ‘*8–bit output*’, distances larger than 255 are
labelled as 255.

### [sub:Ultimate-Points]

Generates the ultimate eroded points (UEPs) of the Euclidian distance
map (EDM, *see* ) from a binary image. Ultimate Eroded Points are maxima
of the EDM. In the output, the points are assigned the EDM value, which
is equal to the radius of the largest circle that fits into the binary
particle, with the UEP as the center. The output type (*Overwrite*,
*8–bit*, *16–bit* or *32–bit*) of this command can be set in the  dialog
box.

### [sub:Watershed]

Watershed segmentation is a way of automatically separating or cutting
apart particles that touch. It first calculates the Euclidian distance
map (EDM) and finds the ultimate eroded points (UEPs). It then dilates
each of the UEPs (the peaks or local maxima of the EDM) as far as
possible – either until the edge of the particle is reached, or the edge
touches a region of another (growing) UEP. Watershed segmentation works
best for smooth convex objects that don’t overlap too much.

Enable debugging in and the command will create an animation that shows
how the watershed algorithm works (cf. [online
example](http://imagej.nih.gov/ij/images/watershed-animation.gif)).

<span>\>m<span>0.2225</span>\>m<span>0.17</span>||\>m<span>0.17</span>||\>m<span>0.17</span>\>m<span>0.2225</span></span>
& & <span>\
</span>

![** running in Debug mode.**](images/WatershedMontage)

### [sub:Voronoi]

Splits the image by lines of points having equal distance to the borders
of the two nearest particles. Thus, the Voronoi cell of each particle
includes all points that are nearer to this particle than any other
particle. When particles are single points, this process is a Voronoi
tessellation (also known as Dirichlet tessellation).

The output type (*Overwrite*, *8–bit*, *16–bit* or *32–bit*) of this
command can be set in the dialog box. In the output, the value inside
the Voronoi cells is zero; the pixel values of the dividing lines
between the cells are equal to the distance between the two nearest
particles. This is similar to a medial axis transform of the background,
but there are no lines in inner holes of particles.

### [sub:BinaryOptions...]

Specifies several settings used by commands.

<span>*Iterations*</span>
:   Specifies the number of times erosion, dilation, opening, and
    closing are performed. Iterations can be aborted by pressing .

<span>*Count*</span>
:   Specifies the number of adjacent background pixels necessary before
    a pixel is removed from the edge of an object during erosion and the
    number of adjacent foreground pixels necessary before a pixel is
    added to the edge of an object during dilation.

![image](images/BinaryOptions)

<span>*Black background*</span>
:   If checked, binary images will be created without using an inverted
    LUT (cf. [infobox:InvertedLutMask] ) and commands in the submenu
    will assume that images contain white objects on a black background
    (*see* [infobox:blackBackground] ). Macros can set this option using
    <span>`setOption(BlackBackground, true);`</span> (*see*
    [infobox:blackBackground] and ).

<span>*Pad* *edges* *when* *eroding*</span>
:   If checked, does not erode from the edges of the image. This setting
    also affects , which erodes from the edges unless this checkbox is
    selected.

<span>*EDM output*</span>
:   Determines the output type for the , and commands. Set it to
    *\`Overwrite*’ for 8–bit output that overwrites the input image;
    ‘*8–bit*’, ‘*16–bit*’ or *\`32–bit*’ for separate output images.
    32–bit output has floating point (subpixel) distance resolution.

<span>*Do*</span>
:   This drop-down menu allows one to test the chosen settings by
    previewing each binary operation (, , , , , , ) on the active image.
    This option is only available when the active image is binary.

<span>*Help*</span>
:   Opens <http://imagej.nih.gov/ij/docs/menus/process.html#options>.


Binary images are thresholded to only two values, typically $0$ and $1$,
but often – as with ImageJ – $0$ and $255$, that represent black and
white on an 8–bit scale (*see* ).

The interpretation of binary images is not universal. While some
software packages will always perform binary operations on $255$ values
(or $1$, or any non-zero value), ImageJ takes into account the
foreground and background colors of the binary image.

  --------------------------------------------------------------------
        	0:Black(Background), 255:White
		![image](images/BlackBackgroundAffect1)
			0:White(Background), 255:Black
		![image](images/BlackBackgroundAffect2)
  --------------------------------------------------------------------

In ImageJ, the *Black background *option in*
defines not only how new binary images will be created (*see*
[infobox:InvertedLutMask] ) but also how previously created images are
interpreted. This means object(s) will be inferred on a image-per-image
basis. As such, inverting the LUT (*see* ) of a binary image without
updating the *Black background* option may lead to unexpected results,
such as the aberrant thinning operation () depicted here. This issue can
be avoided by imposing adequate preferences at startup, as described in
.

You can use the dialog to assess the impact of the *Black background*
option: Create a binary image, choose an operation from the *Do*
drop-down menu, activate the preview feature and toggle the
*Black background* checkbox.

[sub:Math]
----------

The commands in this submenu add (subtract, multiply, etc.) a constant
to each pixel in the active image or selection. A ‘*Preview*’ option is
available for most operations.

![image](images/ProcessStack)

With stacks, the dialog depicted on the left is displayed. Choose \`*Yes’*
to process entire stack or ‘*No*’ to
process only the active slice. The dialog is not displayed if
*Hide* *Process* *Stack?* *dialog *is checked in

### 

Adds a constant to the image or selection. With 8–bit images, results
greater than 255 are set to 255. With 16–bit signed images, results
greater than 65,535 are set to 65,535.

### 

Subtracts a constant from the image or selection. With 8–bit and 16–bit
images, results less than 0 are set to 0.

### 

Multiplies the image or selection by the specified real constant. With
8–bit images, results greater than 255 are set to 255. With 16–bit
signed images, results greater than 65,535 are set to 65,535.

### 

Divides the image or selection by the specified real constant. Except
for 32–bit (float) images, attempts to divide by zero are ignored. With
32–bit images, dividing by zero results in *Infinity*, -*Infinity* or
*NaN* (0/0) pixels when the source pixels are positive, negative or
zero. The divide-by-zero value can be redefined using .

### 

Does a bitwise AND of the image and the specified binary constant.

### 

Does a bitwise OR of the image and the specified binary constant.

### 

Does a bitwise XOR of the image and the specified binary constant.

### 

Pixels in the image with a value less than the specified constant are
replaced by the constant.

### [sub:Max...]

Pixels in the image with a value greater than the specified constant are
replaced by the constant.

### [sub:Gamma...]

![image](images/Gamma)

Applies the function
$f(p)=(\nicefrac{p}{255}){}^{\gamma}\times255$ to each pixel ($p$) in
the image or selection, where $0.1\leq\gamma\leq5.0$. For RGB images,
this function is applied to all three color channels. For 16–bit images,
the image min and max are used for scaling instead of 255.

### [sub:Set...]

Fills the image or selection with the specified value.

### [sub:Log]

For 8–bit images, applies the function $f(p)=\ln(p)\times255/\ln(255)$
to each pixel ($p$) in the image or selection. For RGB images, this
function is applied to all three color channels. For 16–bit images, the
image min and max are used for scaling instead of 255. For float images,
no scaling is done. To calculate $\log_{10}$ of the image, multiply the
result of this operation by 0.4343 ($1/\ln(10)$).

### [sub:Exp]

Performs an exponential transform on the active image or selection.

### [sub:Square]

Performs a square transform on the active image or selection.

### [sub:Square-Root]

Performs a square root transform on the active image or selection.

### [sub:Reciprocal]

Generates the reciprocal (multiplicative inverse) of the active image or
selection, transforming each pixel ($p$) into $\nicefrac{1}{p}$.
Requires 32–bit float images (*see* ).

### [sub:NaN-Background]

Sets non-thresholded pixels in 32–bit float images to the *NaN* (Not a
Number) value. For float images, the *Apply* option in runs this
command.

Pixels with a value of Float.NaN (0f/0f), Float.POSITIVE\_INFINITY
(1f/0f) or Float. NEGATIVE\_INFINITY (-1f/0f) are ignored when making
measurements on 32–bit float images.

### [sub:Abs]

Generates the absolute value of the active image or selection. Works
only with 32–bit float or signed 16–bit image images.

### [sub:Macro...]

![image](images/MathMacro)

This command performs image arithmetic using
an expression specified by the user @C-MathMacro. It can be used to
create fully-synthetic images or to perform precise pixel manipulations
on existing images. The
[MathMacroDemo](http://imagej.nih.gov/ij/macros/examples/MathMacroDemo.txt)
macro demonstrates the usage of this command.

[sub:FFT]
---------

The commands in this submenu support frequency domain display, editing
and processing. They are based on an implementation of the 2D Fast
Hartley Transform (FHT) contributed by Arlo Reeves, the author of the
[ImageFFT](http://imagej.nih.gov/ij/download/docs/ImageFFT/), spinoff of
NIH Image[^9]. 3D FHT can be performed using Bob Dougherty’s [3D Fast
Hartley Transform](http://www.optinav.com/FHT3D.htm) plugin.

The frequency domain image is stored as 32–bit float FHT attached to the
8–bit image that displays the power spectrum. Commands in this submenu,
such as Inverse FFT, operate on the 32–bit FHT, not on the 8–bit power
spectrum. All other ImageJ commands only ‘see’ the power spectrum.

Two FFT dedicated tutorials are available on the ImageJ website: [FFT
Measurements](http://imagej.nih.gov/ij/docs/examples/tem/) and [FFT
Filtering](http://imagej.nih.gov/ij/docs/examples/FFT/).

### 

Computes the Fourier transform and displays the power spectrum. Polar
coordinates of measured point selections are recorded by .

If the mouse is over an active frequency domain (FFT) window, its
location is displayed in polar coordinates. The angle is expressed in
degrees, while the radius is expressed in pixels per cycle (p/c). The
radius is expressed in <span>[</span>units<span>]</span>percycle
(e.g. mm/c) if the spatial scale of the image was defined using or

### 

Computes the inverse Fourier transform. You can filter or mask spots on
the transformed (frequency domain) image and do an inverse transform to
produce an image which only contains the frequencies selected or which
suppresses the frequencies selected. Use ImageJ’s selection tools and
fill/clear commands to draw black or white areas that mask portions of
the transformed image. Black areas ($\mbox{pixel value}=0$) cause the
corresponding frequencies to be filtered (removed) and white areas
($\mbox{pixel value}=255$) cause the corresponding frequencies to be
passed. It is not, however, possible to both filter and pass during the
same inverse transform.

Note that areas to be filtered in the frequency domain image must be
zero filled and areas to be passed must be filled with 255. You can
verify that this is the case by moving the cursor over a filled area and
observing that the values displayed in the status bar are either 0 or
255. Thus, you should always confirm that masked areas are not some
other gray value, by using the black & white reset option in the widgets
when defining foreground () and background () colors.

<span>\>m<span>0.2</span>\>m<span>0.2</span>\>m<span>0.2</span>\>m<span>0.2</span>\>m<span>0.2</span></span>
<span>Original</span> & <span>Power spectrum with mask that filters low
frequencies</span> & <span>Result of inverse transform</span> &
<span>Power spectrum with mask that passes low frequencies</span> &
<span>Result of inverse transform</span><span>\
</span>

![**FFT: Example of low frequencies filtering.**](images/FFTlena)

With off-center selections, the same spatial frequency appears twice in
the power spectrum, at points opposite from the center. It is sufficient
to fill/clear only one of these.

<span>\>m<span>0.2</span>\>m<span>0.2</span>\>m<span>0.2</span>\>m<span>0.2</span></span>
<span>Original</span> & <span>Edited power spectrum</span> &
<span>Inverse transform</span> & <span>Power spectrum after
filtering</span><span>\
</span>

![**FFT: Example of low frequencies filtering.**](images/FFTabe)

### 

Recomputes the power spectrum from the frequency domain image (32–bit
FHT). This command allows you to start over after mis-editing the 8–bit
power spectrum image.

### 

![image](images/FFToptions)

Displays the FFT Options dialog box. The first
group of checkboxes specifies which image(s) are created by the FFT
command:

<span>*Display FFT Window*</span>
:   The standard output. It consists of an 8–bit image of the power
    spectrum and the actual data, which remain invisible for the user.
    The power spectrum image is displayed with logarithmic scaling,
    enhancing the visibility of components that are weakly visible. The
    actual data are used for the Inverse FFT command.

<span>*Display Raw* *Power* *Spectrum*</span>
:   The power spectrum without logarithmic scaling.

<span>*Display Fast Hartley Transform*</span>
:   The internal format used by the command, which is based on a Hartley
    transform rather than Fourier transform.

<span>*Display Complex* *Fourier* *Transform*</span>
:   A stack with two slices for the real and imaginary parts of the FFT.

<span>*Do* *Forward* *Transform*</span>
:   If checked, the current image is transformed immediately when
    closing the FFT Options dialog.

### [sub:Bandpass-Filter...]

![image](images/FFTBandpassFilter)

Removes high spatial frequencies (blurring the
image) and low spatial frequencies (similar to subtracting a blurred
image). It can also suppress horizontal or vertical stripes that were
created by scanning an image line by line @C-FFTfilter.

The Bandpass Filter uses a special algorithm to reduce edge artifacts
(before the Fourier transform, the image is extended in size by
attaching mirrored copies of image parts outside the original image,
thus no jumps occur at the edges).

<span>*Filter Large Structures Down to*</span>
:   Smooth variations of the image with typical sizes of bright or dark
    patches larger than this value are suppressed (background).

<span>*Filter Large Structures Up to*</span>
:   Determines the amount of smoothing. Objects in the image smaller
    than this size are strongly attenuated. Note that these values are
    both half the spatial frequencies of the actual cutoff. The cutoff
    is very soft, so the bandpass will noticeably attenuate even spatial
    frequencies in the center of the bandpass unless the difference of
    the two values is large (say, more than a factor of 5 or so).

<span>*Suppress* *Stripes*</span>
:   Select whether to eliminate *Horizontal* or *Vertical* stripes.
    Removal of horizontal stripes is similar to subtracting an image
    that is only blurred in the horizontal direction from the original.

<span>*Tolerance of Direction*</span>
:   This is for *Suppress Stripes*; higher values remove shorter stripes
    and/or stripes that are running under an angle with respect to the
    horizontal (vertical) direction.

<span>*Autoscale* *After* *Filtering*</span>
:   If checked, puts the lowest intensity to 0 and the highest intensity
    to 255, preserving all intensities.

<span>*Saturate* *Image* *when* *Autoscaling*</span>
:   If checked, allows some intensities to go into saturation, and
    produces a better visual contrast.
    *Saturate* *Image* *when* *Autoscaling* only has an effect when
    *Autoscale* *After* *Filtering* is enabled.

<span>*Display Filter*</span>
:   If checked, shows the filter generated. Note that this disables Undo
    of the filter operation on the original image.

### 

![image](images/FFTcustomFilter)

This command does Fourier space filtering of
the active image using a user-supplied spatial domain (non-FFT) image as
the filter.

\

This image will be converted to 8–bit. For pixels that have a value of
0, the corresponding spatial frequencies will be blocked. Pixel with
values of 255 should be used for passing the respective spatial
frequencies without attenuation. Note that the filter should be
symmetric with respect to inversion of the center: Points that are
opposite of the center point (defined as $\mbox{x}=width/2$,
$\mbox{y}=height/2$) should have the same value. Otherwise, artifacts
can occur. For some examples, see the
[FFTCustomFilterDemo](http://imagej.nih.gov/ij/macros/FFTCustomFilterDemo.txt)
and
[FFTRemoveStreaks](http://imagej.nih.gov/ij/macros/FFTRemoveStreaks.txt)
macros.

### 

![image](images/FFTMath)

This command correlates, convolves or deconvolves two images.

It does this by converting *Image1* and *Image2* to the frequency
domain, performing conjugate multiplication or division, then converting
the result back to the space domain. These three operations in the
frequency domain are equivalent to correlation, convolution and
deconvolution in the space domain.

Refer to the
[DeconvolutionDemo](http://imagej.nih.gov/ij/macros/DeconvolutionDemo.txt)
and
[MotionBlurRemoval](http://imagej.nih.gov/ij/macros/MotionBlurRemoval.txt)
macros for examples.

### [sub:Swap-Quadrants]

This command transforms between the ‘user friendly’ display of Fourier
transforms with the lowest frequencies at the center and the ‘native’
form with the lowest frequencies at the four corners.

swaps quadrants I with III and II with IV
(counter-clockwise starting from ‘Northeast’) so that points near the
center are moved towards the edge and vice versa. Another way to see
this command is to imagine that the image is periodically repeated and
the origin is shifted by $width/2$ in x and by $height/2$ in y
direction.

For Fourier transforms, affects only the image displayed, not the actual
FHT data. Therefore, editing an image with swapped quadrants for
filtering or masking may lead to undesired results.

[sub:Filters]
-------------

This submenu contains miscellaneous filters @C-MultiThreadFilters
(including those installed by the command).

More information on image filters can be obtained by looking up related
keywords (*convolution, Gaussian, median, mean, erode, dilate, unsharp*,
etc.) on the [Hypermedia Image Processing
Reference](http://homepages.inf.ed.ac.uk/rbf/HIPR2/)*
*[index](http://homepages.inf.ed.ac.uk/rbf/HIPR2/index.htm).

### [sub:Convolve...]

![image](images/Convolve)

Does spatial convolution using a kernel entered into a text area.

A kernel is a matrix whose center corresponds to the source pixel and
the other elements correspond to neighboring pixels. The destination
pixel is calculated by multiplying each source pixel by its
corresponding kernel coefficient and adding the results. If needed, the
input image is effectively extended by duplicating edge pixels outward.
There is no arbitrary limit to the size of the kernel but it must be
square and have an odd width.

Rows in the text area must all have the same number of coefficients, the
rows must be terminated with a carriage return, and the coefficients
must be separated by one or more spaces. Kernels can be pasted into the
text area using .

Checking *Normalize Kernel* causes each coefficient to be divided by the
sum of the coefficients, preserving image brightness.

The kernel shown is a $9\times9$ “Mexican hat”, which does both
smoothing and edge detection in one operation. Note that kernels can be
saved as a text file by clicking on the *\`Save*’ button, displayed as
an image using , scaled to a reasonable size using and plotted using

### [sub:Gaussian-Blur...]

![image](images/GaussianBlur)

This filter uses convolution with a Gaussian function for smoothing @C-GaussianBlur.

*Sigma* is the radius of decay to $e^{-0.5}$ ($\thickapprox61\%$), i.e.,
the standard deviation ($\sigma$) of the Gaussian (this is the same as
in Adobe^^Photoshop^^, but different from ImageJ versions till 1.38q, in
which *radius* was 2.5$\times\sigma$
(cf. [GaussianBlur.java](http://imagej.nih.gov/ij/docs/source/ij/plugin/filter/GaussianBlur.java.html)).

Like all ImageJ convolution operations, it assumes that out-of-image
pixels have a value equal to the nearest edge pixel. This gives higher
weight to edge pixels than pixels inside the image, and higher weight to
corner pixels than non-corner pixels at the edge. Thus, when smoothing
with very high blur radius, the output will be dominated by the edge
pixels and especially the corner pixels (in the extreme case, with a
blur radius of e.g. $10^{20}$, the image will be replaced by the average
of the four corner pixels).

For increased speed, except for small blur radii, the lines (rows or
columns of the image) are downscaled before convolution and upscaled to
their original length thereafter.

### [sub:Gaussian-Blur-3D...]
This command calculates a three dimensional (3D) gaussian lowpass filter
using a 3-D Gaussian. It works with and but not single-slice . Refer to
for more information on sigma values.

### [sub:Median...]

Reduces noise in the active image by replacing each pixel with the
median of the neighboring pixel values.

### [sub:Mean...]

Smooths the current image by replacing each pixel with the neighborhood
mean.

### [sub:Minimum...]

This filter does grayscale erosion by replacing each pixel in the image
with the smallest pixel value in that pixel’s neighborhood.

### [sub:Maximum...]

This filter does grayscale dilation by replacing each pixel in the image
with the largest pixel value in that pixel’s neighborhood.

### [sub:Unsharp-Mask...]

![image](images/UnsharpMask)

Sharpens and enhances edges by subtracting a blurred version of the image
(the unsharp mask) from the original.

Unsharp masking subtracts a blurred copy of the image and rescales the
image to obtain the same contrast of large (low-frequency) structures as
in the input image. This is equivalent to adding a high-pass filtered
image and thus sharpens the image.

<span>*Radius*</span>
:   The standard deviation ($\sigma$ blur radius, cf. ) of the Gaussian
    blur that is subtracted. Increasing the Gaussian blur radius will
    increase contrast.

<span>*Mask Weight*</span>
:   Determines the strength of filtering, whereby $MaskWeight=1$ would
    be an infinite weight of the high-pass filtered image that is added.
    Increasing the *Mask Weight* value will provide additional edge
    enhancement.

### [sub:Variance...]

Highlights edges in the image by replacing each pixel with the
neighborhood variance.

### [sub:Show-Circular-Masks...]

Generates a stack containing examples of the circular masks used by the
, , , , and filters for various neighborhood sizes.

[sub:Batch]
-----------

This submenu allows the execution of commands in a series of images
without manual intervention.

commands are non-recursive, i.e., they are applied to all the images of
the chosen *Input* folder but not its subfolders. Nevertheless a
directory hierarchy can be transversed using ImageJ macro language
(cf. [BatchProcessFolders](http://imagej.nih.gov/ij/macros/BatchProcessFolders.txt)
macro).

Three critical aspects to keep in mind when performing batch operations
that modify processed images:

-   Files can be easily overwritten since the batch processor will
    silently override existing files with the same name.

-   The destination *Output* folder should have adequate disk space to
    receive the created images.

-   In the case of non-native formats, batch operations will be
    influenced by the behavior of the reader plugin or library (cf. ).

### [sub:Measure...]

This command measures all the images in a user-specified folder, by
running the command in all images of the chosen directory.

Note that measurements are performed on non thresholded images. In the
case of TIFF images saved with active selections measurements are
performed on the ROI and not the whole image.

### [sub:Convert...]

![image](images/BatchConvert)

Batch converts and/or resizes multiple images from a specified folder.

<span>*Input...*</span>
:   Selects the source folder containing the images to be processed.

<span>*Output...*</span>
:   Selects the destination folder where the processed images will be
    stored.

<span>*Output Format*</span>
:   Specifies the output format* *that can be set to* TIFF, 8–bit TIFF,
    JPEG, GIF, PNG, PGM, BMP, FITS, Text Image, ZIP *or* Raw *(cf.  and
    submenu).

<span>*Interpolation*</span>
:   The resampling method to be used in case *Scale Factor* is not 1.00
    (*see* and ). For better results, *Average when downsizing* is
    automatically selected when scaling down images.

<span>*Scale* *Factor*</span>
:   Specifies if images should be resized (*see* ).

### [sub:batch\>Macro...]
![image](images/BatchProcess)

Runs a macro over a specified folder. The last used macro is stored
in the file and remembered across restarts..

<span>*Input...*</span>
:   Selects the source folder containing the images to be processed.

<span>*Output...*</span>
:   Selects the destination folder where the processed images will be
    stored. Note that original files will not be saved if this field is
    left empty.

<span>*Output Format*</span>
:   Specifies the output format* *that can be set to* TIFF, 8–bit TIFF,
    JPEG, GIF, PNG, PGM, BMP, FITS, Text Image, ZIP *or* Raw *(cf.  and
    submenu).

<span>*Add Macro Code*</span>
:   This drop-down menu contains macro snippets that can be combined to
    create the processing macro. Other statements can be pasted from the
    macro recorder or ImageJ’s editor while the dialog box is opened
    @C-NonBlockingDialog. Previously written macros can be imported
    using *Open*… When editing the macro beware of any statements that
    may interfere with the normal operation of the batch processor (such
    as<span>` Close()`</span> or <span>`Open()`</span> calls).

<span>*Test*</span>
:   Tests the macro on the first image of the *Input*… folder (the
    processed image will be displayed).

<span>*Open…*</span>
:   Imports previously written macros.

<span>*Save…*</span>
:   Saves the assembled macro.

### [sub:Virtual-Stack...]
This command, that shares the same interface of (cf. ), allows virtual
stack manipulations. E.g., Cropping a virtual stack can be performed by
executing the following steps:

1.  Open a virtual stack

2.  Run

3.  Select an *Output folder* and *Output* *format*

4.  Select ‘*Crop*’ from the *Add Macro Code* drop-down menu

5.  Edit the macro code as needed and press the *Test* button to verify
    the macro

6.  Click *Process* to create the cropped virtual stack

Note that cropped images are not loaded into memory but are saved to
disk as they are cropped (*see* ).

[sub:Image-Calculator...]
-------------------------

Performs arithmetic and logical operations between two images selected
from popup menus described in the table. *Image1* or both *Image1* and
*Image2* can be stacks. If both are stacks, they must have the same
number of slices. *Image1* and *Image2* do not have to be the same data
type or the same size.

With 32–bit (float) images, pixels resulting from division by zero are
set to *Infinity*, or to *NaN* (Not a Number) if a zero pixel is divided
by zero. The divide-by-zero value can be redefined in

![image](images/ImageCalculator)

<span>*Operation*</span>
:   Selects one of the thirteen available operators (*see* ).

<span>*Create New Window*</span>
:   If checked, a new image is created to hold the result. If unchecked,
    the result of the operation is applied directly to *Image1*.

<span>*32–bit (float) Result*</span>
:   If checked, source images will be converted to 32–bit floating point
    before performing the operation.

<span>*Help*</span>
:   Opens [http://imagej.nih.gov/ij/docs/menus/
    process.html\#calculator](http://imagej.nih.gov/ij/docs/menus/process.html#calculator).

[h]

<span>llll</span> & & & <span>\
</span> & & & <span>\
</span>& & & <span>\
</span> & & & <span>\
</span>**Add**: & & **Min**: & <span>\
</span> $img1=img1+img2$ & & $img1=\min(img1,img2)$ & <span>\
</span>**Subtract**: & & **Max**: & <span>\
</span> $img1=img1-img2$ & & $img1=\max(img1,img2)$ & <span>\
</span>**Multiply**: & & **Average**: & <span>\
</span> $img1=img1\times img2$ & & $img1=(img1+img2)/2$ & <span>\
</span>**Divide**: & & **Difference**: & <span>\
</span> $img1=img1\div img2$ & & $img1=|img1-img2|$ & <span>\
</span>**AND**: & & **Copy**: & <span>\
</span> $img1=img1\wedge img2$ & & $img1=img2$ & <span>\
</span>**OR**: & & & <span>\
</span> $img1=img1\vee img2$ & & & <span>\
</span>**XOR**: & & & <span>\
</span>$img1=img1\oplus img2$ & & & <span>\
</span>& & & <span>\
</span>

[sub:Subtract-Background...]
----------------------------

Removes smooth continuous backgrounds from gels and other images
@C-SubtractBackground. Based on the concept of the ‘rolling ball’
algorithm described in Sternberg Stanley, Biomedical image processing,
*IEEE Computer*, Jan 1983). Imagine that the 2D grayscale image has a
third dimension (height) by the image value at every point in the image,
creating a surface. A ball of given radius is rolled over the bottom
side of this surface; the hull of the volume reachable by the ball is
the background to be subtracted.

<span>*Rolling Ball Radius*</span>
:   The radius of curvature of the paraboloid. As a rule of thumb, for
    8–bit or RGB images it should be at least as large as the radius of
    the largest object in the image that is not part of the background.
    Larger values will also work unless the background of the image is
    too uneven. For 16–bit and 32–bit images with pixel value ranges
    different from 0–255, the radius should be inversely proportional to
    the pixel value range (e.g., for 16–bit images (pixel values
    0–65535), typical values of the radius are around 0.2 to 5).

<span>*Light Background*</span>
:   Allows the processing of images with bright background and dark
    objects.

<span>*Separate Colors*</span>
:   (RGB images only) If unchecked, the operation will only affect the
    brightness, leaving the hue and saturation untouched.

<span>*Create* *Background (Don’t Subtract)*</span>
:   If checked, the output is not the image with the background
    subtracted but rather the background itself. This option is useful
    for examining the background created (in conjunction with the
    *Preview* option). *Create Background* can be also used for custom
    background subtraction algorithms where the image is duplicated and
    filtered (e.g. removing ‘holes’ in the background) before creating
    the background and finally subtracting it with

<span>*Sliding* *Paraboloid*</span>
:   If checked, the ‘rolling ball’ is replaced by a paraboloid that has
    the same curvature at the apex as a ball of that radius. This option
    allows any value of the radius$>0.0001$ (the ‘rolling ball’
    algorithm requires a radius of at least 1). The ‘sliding paraboloid’
    typically produces more reliable corrections since the ‘rolling
    ball’, a legacy algorithm (only kept for backward compatibility), is
    prone to edge artifacts.\
    To reduce the computing time the ‘rolling ball’ algorithm downscales
    the image in a inconsistent way. The ‘sliding paraboloid’ algorithm
    does not use downscaling and thus produces no downscaling artifacts.
    Nevertheless, the ‘sliding paraboloid’ is also an approximation,
    since it does not use a *de facto* paraboloid (an exact
    implementation would require a great computing effort) but it rather
    slides parabolae in different directions over the image.

<span>*Disable Smoothing*</span>
:   For calculating the background (‘rolling the ball’), images are
    maximum-filtered (3$\times$3pixels) to remove outliers such as dust
    and then smoothed to reduce noise (average over (3$\times$3pixels).
    With *Disable Smoothing* checked, the unmodified image data are used
    for creating the background. Check this option to make sure that the
    image data after subtraction will never be below the background.

<span>*Help*</span>
:   Opens <http://imagej.nih.gov/ij/docs/menus/process.html#background>.

[sub:Repeat-Command-[R]]
------------------------

Reruns the previous command. The and commands are skipped.

[sec:Analyze-Menu]
==================

This menu contains commands related to statistical measurements on image
data, profile and histogram plotting and plugins related to image
analysis.

[sub:Measure...[m]]---------------------------------

Based on the selection type, calculates and displays on the either area
statistics, line lengths and angles, or point coordinates. Performed
measurements can be specified in the dialog box.

Area statistics are calculated for the complete image if there is no
selection or for a selected subregion defined by one of the . For linear
selections (Straight, Segmented and Freehand lines, *see* ) length and
angle (straight lines only) are also calculated. For Point selections
(*see* and ), the X and Y coordinates are recorded. Note that will paint
(invasively) a mark over the measured point in foreground color unless
*Mark Width* in the options dialog box is set to zero.

With RGB images, results are calculated using brightness values. RGB
pixels are converted to brightness values using the formula
$\text{value}=(\text{red}+\text{green}+\text{blue})/3$ or
$\text{value}=0.299\times\text{red}+0.587\times\text{green}+0.114\times\text{blue}$
if *Weighted RGB Conversions* is checked in .

Intensity statistics (*Mean,* *Modal, Median*,* Min. & Max. Gray Value,
Standard Deviation* and *Integrated Density*) can be performed on area,
line and multi-point selections. With lines, these parameters are
calculated from the values of the pixels along the line (*see* ).

With area selections, the following parameters can measured: *Area*,
*Center of Mass*, *Centroid*, *Perimeter*, *Bounding Rectangle*, *Shape
Descriptors*, *Fitted Ellipse, Feret’s Diameter*, *Skewness*, *Kurtosis*
and *Area Fraction*.

[sub:Analyze-Particles...]
--------------------------

![image](images/AnalyzeParticles)

This command counts and measures objects in
binary or thresholded images ( or ). Analysis is performed on the
existing area selection or on the entire image if no selection is
present.

It works by scanning the image or selection until it finds the edge of
an object. It then outlines the object using the , measures it using the
command, fills it to make it invisible, then resumes scanning until it
reaches the end of the image or selection. Press to abort this process.

<span>\>p<span>0.25</span>\>p<span>0.25</span>\>p<span>0.25</span>\>p<span>0.25</span></span>
& *Exclude on Edges* & *Include Holes* & *Size*<span>:0–50
</span>*Circ*<span>.:0.5–1.0</span><span>\
</span>

<span>![image](images/AnalyzeParticlesDemo-1)</span>

<span>\>p<span>0.25</span>\>p<span>0.25</span>\>p<span>0.25</span>\>p<span>0.25</span></span>
*Size*<span>:0–$\infty$ </span>*Circ*<span>.:0.0–0.5</span> &
*Size*<span>:0–$\infty$ </span>*Circ*<span>.:0.3–0.5</span> &
*Size*<span>:0–$\infty$ </span>*Circ*<span>.:0.0–0.3</span> &
*Size*<span>:50–$\infty$ </span>*Circ*<span>.:0.5–1.0</span><span>\
</span>

<span>![image](images/AnalyzeParticlesDemo-2)</span>

<span>*Size*</span>
:   Particles with size (area) outside the range specified in this field
    are ignored. Values may range between 0 and ‘Infinity’. For spatial
    scaled images (cf. ) values are expressed in physical size square
    units or in pixels if *Pixel Units* is checked. Enter a single value
    and particles smaller than that value will be ignored.

<span>*Circularity*</span>
:   Particles with size circularity values outside the range specified
    in this field are also ignored. Circularity
    ($4\pi\times\frac{[Area]}{[Perimeter]^{2}}$, *see* ) ranges from 0
    (infinitely elongated polygon) to 1 (perfect circle).

<span>*Show*</span>
:   This drop-down menu specifies which image (or overlay) should ImageJ
    display after the analysis (*see* ). Size, color and background of
    text labels can be adjusted in the prompt. Non-overlay outputs can
    be adjusted in a macro by using
    <span><span>`call(ij.plugin.filter.ParticleAnalyzer.setFontSize, size);`</span></span>
    and
    <span><span>`call(ij.plugin.filter.ParticleAnalyzer.setLineWidth, width);`</span>
    </span> or
    <span><span>`ParticleAnalyzer.setFontSize(size);`</span></span>
    <span><span>`ParticleAnalyzer.setLineWidth(width);`</span></span> in
    a script or plugin.

    <span>*Nothing*</span>
    :   Neither images nor will be displayed. Note that the particle
        analyzer will display a blank image when the count of detected
        particles is zero and *Show* is not *Nothing*.

    <span>*Outlines*</span>
    :   8–bit image containing numbered outlines of the measured
        particles (gray levels: *Outlines*:0; *Labels*:1;
        *Background*:255). If *In situ Show* is checked, the original
        image will be replaced by this image.

    <span>*Bare Outlines*</span>
    :   8–bit image containing simple outlines of the measured particles
        without labels (graylevels: *Outlines*:0; *Background*:255). If
        *In situ Show* is checked, the original image will be replaced
        by this image.

    <span>*Masks*</span>
    :   8–bit binary image containing filled outlines of the measured
        particles (gray levels: *Masks*:0; *Background*:255). If *In
        situ Show* is checked, the original image will be replaced by
        this image.

    <span>*Ellipses*</span>
    :   8–bit binary image containing the best fit ellipse (cf. ) of
        each measured particle (gray levels: *Ellipses*:0;
        *Background*:255). If *In situ Show* is checked, the original
        image will be replaced by this image.

    <span>*Count Masks*</span>
    :   16–bit image containing filled outlines of the measured
        particles painted with a grayscale value corresponding to the
        particle number. If *In situ Show* is checked, the original
        image will be replaced by this image.

    <span>*Overlay Outlines*</span>
    :   Displays outlines of the measured particles in the image
        overlay, removing previously added .

    <span>*Overlay Masks*</span>
    :   Displays filled outlines of the measured particles in the image
        overlay, removing previously added .

<span>\>p<span>0.25</span>\>p<span>0.25</span>\>p<span>0.25</span>\>p<span>0.25</span></span>
& *Outlines* & *Bare Outlines* & *Masks*<span>\
</span>

<span>![image](images/AnalyzeParticlesShowOptions-1)</span>

<span>\>p<span>0.25</span>\>p<span>0.25</span>\>p<span>0.25</span>\>p<span>0.25</span></span>
*Ellipses* & *Count Masks* & *Overlay Outlines* & *Overlay Masks*<span>\
</span>

<span>![image](images/AnalyzeParticlesShowOptions-2)</span>

<span>*Display Results*</span>
:   If checked, the measurements for each particle will be displayed in
    the .

<span>*Clear Results*</span>
:   If checked, any previous measurements listed in the will be cleared.

<span>*Summarize*</span>
:   If checked, the particle count, total particle area, average
    particle size, area fraction and the mean of all parameters listed
    in the dialog box will be displayed in a separate *Summary* table.
    Note that while single images ‘Summaries’ are output to the same
    *Summary* table, stack Summaries are printed in dedicated tables
    (named *Summary of *<span>[</span>*stack title*<span>]</span>).
    Also, note that descriptive statistics on Results measurements can
    be obtained at any time using the command.

<span>*Add to Manager*</span>
:   If checked, the measured particles will be added to the

<span>*Exclude on Edges*</span>
:   If checked, particles touching the edge of the image (or selection)
    will be ignored.

<span>*Include Holes*</span>
:   If checked, interior holes will be included. Disable this option to
    exclude interior holes and to measure particles enclosed by other
    particles. When this option is enabled, ImageJ finds the extent of
    each particle by tracing the outer edge. When it is disabled, ImageJ
    finds the extent by flood filling.

<span>*Record Starts*</span>
:   This option allows plugins and macros to recreate particle outlines
    using the doWand(x,y) macro function. The
    [CircularParticles](http://imagej.nih.gov/ij/macros/CircularParticles.txt)
    macro demonstrates how to use this feature.

<span>*In situ Show*</span>
:   If checked, the original image will be replaced by the binary mask
    specified in the ***Show*** drop-down menu. Note that this option
    does not apply to *Overlay Outlines* and *Overlay Masks* that are
    always displayed as non-destructive image on the measured image.

<span>*Help*</span>
:   Opens <http://imagej.nih.gov/ij/docs/menus/analyze.html#ap>.

[sub:Summarize]-----------------------------

For each column in the , calculates and displays the mean, standard
deviation, minimum and maximum of the values in that column. This
command is also available by right-clicking on the .

![image](images/Summarize)

[sub:Distribution...]
---------------------

Produces a relative frequency histogram from the data of a chosen column
of the Results table @C-Distribution.

Use the *List* or *Copy* buttons to save the histogram data. Mouse over
the histogram bars to read the counts for each bin on the window’s lower
right corner. describes in more detail ImageJ’s histogram window.

This command is also available by right-clicking on the .

![image](images/Distribution)

<span>*Parameter*</span>
:   Specifies the parameter in the to be analyzed.

<span>*Data points*</span>
:   The number of rows that will be analyzed (informative).

<span>*Automatic binning*</span>
:   If checked, ImageJ will use the method described by David Scott to
    assess the optimal histogram bin width (*see* Scott DW, Optimal and
    data-based histograms. *Biometrika*, 66(3):605–610, Jan 1979). If
    unchecked, the number of bins can be set with *Specify bins *and the
    starting and ending limits of the histogram with *range*.

[sub:Label]
-----------

This command labels the active selection with the current measurement
counter value, i.e., the number of rows present in the . Selection
outline and label (at the selection centroid) are drawn invasively using
current foreground/background colors. As for , use the command, or
double click on the line tool, to change the width of selection’s
outline.

Selections can be labelled if they were previously analyzed ( or
commands) and the parameter *Centroid* (cf. ) extracted in the Results
table.

[sub:Clear-Results]
-------------------

Erases the results table and resets the measurement counter. This
command is also available by right-clicking on the .

[sub:Set-Measurements...]---------------------------------------

Use this dialog box to specify which measurements are recorded by , ’s
*Measure* command and Measurements are performed on the current
selection, the entire active image if no selection is present. For
thresholded images (), measurements can be restricted to highlighted
pixels if *Limit to Threshold *is checked.

This command is also available by right-clicking on the .

The dialog contains two groups of checkboxes: The first group controls
the type of measurements that are printed to the Results table. The
second group controls measurement settings. The eighteen checkboxes of
the first group are:

![image](images/SetMeasurements)

<span>*Area*</span>
:   Area of selection in square pixels or in calibrated square units
    (e.g., mm$^{2}$, $\micro$m$^{2}$, etc.) if was used to spatially
    calibrate the image.

<span>*Mean gray value*</span>
:   Average gray value within the selection. This is the sum of the gray
    values of all the pixels in the selection divided by the number of
    pixels. Reported in calibrated units (e.g., optical density) if was
    used to calibrate the image. For RGB images, the mean is calculated
    by converting each pixel to grayscale using the formula
    $\text{gray}=(\text{red}+\text{green}+\text{blue})/3$ or
    $\text{gray}=0.299\times\text{red}+0.587\times\text{green}+0.114\times\text{blue}$
    if *Weighted RGB Conversions* is checked in

<span>*Standard deviation*</span>
:   Standard deviation of the gray values used to generate the mean gray
    value. Uses the heading **StdDev**.

<span>*Modal gray value*</span>
:   Most frequently occurring gray value within the selection.
    Corresponds to the highest peak in the histogram. Uses the heading
    **Mode**.

<span>*Min & max gray level*</span>
:   Minimum and maximum gray values within the selection.

<span>*Centroid*</span>
:   The center point of the selection. This is the average of the x and
    y coordinates of all of the pixels in the image or selection. Uses
    the **X** and **Y** headings.

<span>*Center of mass*</span>
:   This is the brightness-weighted average of the x and y coordinates
    all pixels in the image or selection. Uses the **XM** and **YM**
    headings. These coordinates are the first order spatial moments.

<span>*Perimeter*</span>
:   The length of the outside boundary of the selection. Uses the
    heading **Perim.**. With IJ1.44f and later, the perimeter of a
    composite selection is calculated by decomposing it into individual
    selections. Note that the composite perimeter and the sum of the
    individual perimeters may be different due to use of different
    calculation methods.

<span>*Bounding rectangle*</span>
:   The smallest rectangle enclosing the selection. Uses the headings
    **BX**, **BY**, **Width** and **Height**, where **BX** and **BY**
    are the coordinates of the upper left corner of the rectangle.

<span>*Fit ellipse*</span>
:   Fits an ellipse to the selection. Uses the headings **Major**,
    **Minor** and **Angle**. **Major** and **Minor** are the primary and
    secondary axis of the best fitting ellipse. **Angle** is the angle
    between the primary axis and a line parallel to the X-axis of the
    image. The coordinates of the center of the ellipse are displayed as
    **X** and **Y** if Centroid is checked. Note that ImageJ cannot
    calculate the major and minor axis lengths if *Pixel Aspect Ratio*
    in the dialog is not $1.0$. There are several ways to view the
    fitted ellipse:

    1.  The command replaces an area selection with the best fit
        ellipse.

    2.  The
        [DrawEllipse](http://imagej.nih.gov/ij/macros/DrawEllipse.txt)
        macro draws (destructively) the best fit ellipse and the major
        and minor axis.

    3.  Select *Ellipses* from the *Show:* drop-down menu in the
        particle analyzer () and it will draw the ellipse for each
        particle in a separate window.

<span>*Shape descriptors*</span>
:   Calculates and displays the following shape descriptors:

    <span>*Circularity*</span>
    :   *$\ensuremath{4\pi\times\frac{[Area]}{[Perimeter]^{2}}}$* with a
        value of $1.0$ indicating a perfect circle. As the value
        approaches $0.0$, it indicates an increasingly elongated shape.
        Values may not be valid for very small particles. Uses the
        heading** Circ**.

    <span>*Aspect ratio*</span>
    :   The aspect ratio of the particle’s fitted ellipse, i.e.,
        $\ensuremath{\frac{[Major\, Axis]}{[Minor\, Axis]}}$. If ***Fit
        Ellipse*** is selected the** Major** and **Minor** axis are
        displayed. Uses the heading** AR**.

    <span>*Roundness*</span>
    :   $\ensuremath{4\times{}\frac{[Area]}{\pi\times[Major\, axis]^{2}}}$
        or the inverse of *Aspect Ratio*. Uses the heading **Round**.

    <span>*Solidity*</span>
    :   $\ensuremath{\frac{[Area]}{[Convex\, area]}};$ Note that the
        command makes an area selection convex.

<span>*Feret’s diameter*</span>
:   The longest distance between any two points along the selection
    boundary, also known as maximum caliper. Uses the heading **Feret**.
    The angle (0–180 degrees) of the Feret’s diameter is displayed as
    **FeretAngle**, as well as the minimum caliper diameter
    (**MinFeret**). The starting coordinates of the Feret diameter
    (**FeretX** and **FeretY**) are also displayed (*see also* [Feret’s
    Diameter](http://imagej.nih.gov/ij/macros/FeretsDiameter.txt) macro
    and [Chamfer distances and Geodesic
    diameters](http://imagejdocu.tudor.lu/doku.php?id=plugin:analysis:geodesic_distances:start)
    plugin).

<span>*Integrated density*</span>
:   The sum of the values of the pixels in the image or selection. This
    is equivalent to the product of **Area** and **Mean Gray Value**.
    With IJ1.44c and later, **Raw integrated density** (sum of pixel
    values) is displayed under the heading **RawIntDen** when
    **Integrated density** is enabled. The [Dot Blot
    Analysis](http://imagej.nih.gov/ij/docs/examples/dot-blot/) tutorial
    demonstrates how to use this option to analyze a dot blot assay.

<span>*Median*</span>
:   The median value of the pixels in the image or selection.

<span>*Skewness*</span>
:   The third order moment about the mean. The documentation for the
    [Moment Calculator
    plugin](http://imagej.nih.gov/ij/plugins/moments.html) explains how
    to interpret spatial moments. Uses the heading **Skew**.

<span>*Kurtosis*</span>
:   The fourth order moment about the mean. Uses the heading **Kurt**.

<span>*Area fraction*</span>
:   <span> </span>For thresholded images is the percentage of pixels in
    the image or selection that have been highlighted in red using . For
    non-thresholded images is the percentage of non-zero pixels. Uses
    the heading **%Area**.

<span>*Stack position*</span>
:   The position (slice, channel and frame) in the stack or hyperstack
    of the selection. Uses the headings **Slice**, **Ch** and **Frame**.

<span>N.B.:</span>

For line selections the heading** Length** is created. For straight line
selections, **Angle** is recorded even if ***Fit Ellipse*** is
unchecked. Also, note that measurements that do not apply to certain
selection types may be listed as *NaN*, *Infinity* or *$-$Infinity*.

The second part of the dialog controls measurement settings:

<span>*Limit to threshold*</span>
:   If checked, only thresholded pixels are included in measurement
    calculations. Use to set the threshold limits. This setting affects
    only thresholded images (*see* ).

<span>*Display label*</span>
:   If checked, the image name and slice number (for stacks) are
    recorded in the first column of the , e.g., mri-stack.tif:9. For
    renamed selections () or selections measured via ROI Manager’s
    measure command (*see* ), the selection label is appended, e.g.,
    blobs.gif:0339-0163 or blobs.gif:mySelection.

<span>*[misc:InvertYcoordinates]Invert Y coordinates*</span>
:   If checked, the XY origin is assumed to be the lower left corner of
    the image window instead of the upper left corner (*see also* ).

<span>*Scientific notation*</span>
:   <span> </span>If checked, measurements are displayed in scientific
    notation, e.g., 1.48E2.

<span>*Add to Overlay*</span>
:   If checked, measured ROIs are automatically added to the image
    overlay (*see* ). Appearance of overlay selections can be adjusted
    using /

<span>*Redirect to*</span>
:   The image selected from this popup menu will be used as the target
    for statistical calculations done by and commands. This feature
    allows you to outline a structure on one image and measure the
    intensity of the corresponding region in another image.

<span>*Decimal places*</span>
:   <span> </span>This is the number of digits to the right of the
    decimal point in real numbers displayed in the and in Histogram
    windows ().

[sub:Set-Scale...]
------------------

![image](images/SetScale)

Use this dialog to define the spatial scale
of the active image so measurement results can be presented in
calibrated units, such as mm or $\micro$m.

Before using this command, use the straight line selection tool to make
a line selection that corresponds to a known distance. Then, bring up
the dialog, enter the *Known Distance* and unit of measurement, then
click ‘OK’. The *Distance in Pixels* field will be automatically filled
in based on the length of the line selection.

As described in , $\micro$ and $\angstrom$ symbols can be typed using
and , respectively. $\micro$m can also be defined as ‘um’, or ‘micron’.

Setting *Pixel Aspect Ratio* to a value other than 1.0 enables support
for different horizontal and vertical spatial scales, e.g., 100pixels/cm
horizontally and 95pixels/cm vertically. To set the *Pixel Aspect
Ratio*:

1.  Measure the width and height (in pixels) of a digitized object with
    a known 1:1 aspect ratio.

2.  Enter the measured width (in pixels) in *Distance in Pixels*. Enter
    the known width in *Known Distance*.

3.  Calculate the aspect ratio by dividing the width by the height and
    enter it in *Pixel Aspect Ratio*

When *Global* is checked, the scale defined in this dialog is used for
all opened images during the current session instead of just the active
image, *see* [infobox:GlobalCal] .

*Click to Remove Scale* resets *Distance in Pixels* field and *Known
Distance* to zero and the *Unit of Length* to ‘pixel’.

[sub:Calibrate...]--------------------------------

Use this dialog box to calibrate an image to a set of density standards,
for example radioactive isotope standards or a calibrated optical
density step tablet. Note that, in general, calibrations cannot be
applied to 32–bit images (the pixel intensity unit of 32–bit images can
still be changed, nevertheless).

The calibration procedure is done in three steps:

1.  Use to reset the measurement counter, use one of the and to record
    the mean gray value of each of the standards.

2.  When finished making the measurements, select to display the
    *Calibrate…* dialog box. To calibrate the image, enter the known
    standard values in the right column. The left column will be already
    populated with the measured mean gray values. Select a curve fitting
    method from the popup menu, enter the unit of measurement, and click
    ‘OK’. If *Show plot* is checked, ImageJ will then display the
    calibration function on a separate window. Note that both columns
    must contain the same number of values.

3.  If the calibration function is not satisfactory, bring up the
    *Calibrate…* dialog box again and select a different curve fitting
    method.

In addition to the functions that can be chosen from the drop-down menu
(described in ) two other functions are available that do not require
any measurement of OD standards:

<span>*Uncalibrated OD*</span>
:   As mentioned in , causes ImageJ to convert gray values from 8–bit
    images to uncalibrated [optical
    density](http://en.wikipedia.org/wiki/Absorbance) values using the
    function 
    $\mbox{Unc.\,\ OD}=\log_{10}(\nicefrac{255}{\mbox{Pixel value}})$.
    This conversion can only be performed on 8-bit images.

<span>*Pixel Inverter*</span>
:   Linear function defined by 
    $\mbox{Inverted\,\ pixel}=\mbox{\emph{Bit-depth}}-1-\mbox{Pixel value}$,
    with *Bit-depth* being 255 for 8–bit images or 65535 for 16–bit
    images.

![image](images/Calibrate)

Calibration settings related to spatial (pixel width, height and voxel
depth), temporal (frame interval) and luminance (brightness) information
can be set globally, i.e., can be applied to all images opened during
the current session instead of just the active image. The *Global* flag
can be set in three dialog prompts:

1.  (pixel width, height, voxel depth, frame interval)

2.  (pixel width and height)

3.  (pixel intensity)

Once *Global* calibration is set, a ‘(G)’ is
displayed in all image titles until ImageJ is closed. A warning message
is displayed when a calibrated image with conflicting calibration is
opened and the *Global* option is enabled.

Choose *Disable Global Calibration* to stop using global settings or
*Disable these Messages* to keep respecting global settings, ignoring
the calibration of the newly open image.

[sub:Histogram]
---------------

Calculates and displays a histogram of the distribution of gray values
in the active image or selection.

The X-axis represents the possible gray values and the Y-axis shows the
number of pixels found for each gray value. The horizontal LUT bar below
the X-axis is scaled to reflect the display range of the image
@C-Histogram. The total pixel *Count* is also calculated and displayed,
as well as the *Mean*, standard deviation (*StdDev*), minimum (*Min*),
maximum (*Max*) and modal (*Mode*) gray value.

![image](images/Histogram)

Click on *Live* to monitor the histogram
while browsing stacks or while moving a ROI.* Value*/*Count* pairs
(i.e., grayscale value corresponding to the X-axis cursor position/the
number of pixels that have that intensity) are displayed on the bottom
right while mousing over the histogram window.

With RGB images, the default histogram is calculated by converting each
pixel to grayscale using the formula
$\text{gray}=(\text{red}+\text{green}+\text{blue})/3$ or
$\text{gray}=0.299\times\text{red}+0.587\times\text{green}+0.114\times\text{blue}$
if *Weighted RGB Conversions* is checked in . However, single-channel
RGB histograms can be obtained by repetitively clicking on the *RGB*
button.

[9]<span>l</span><span>0.24</span>

![image](images/HistogramDialog)

Use the *List* or *Copy* buttons to save the histogram data. Click on
*Log* to display a log-scaled version of the histogram (overlaid in
gray).

With 16–bit images, the range of gray values between the *Min* and *Max*
values is divided into 256 bins. With 32–bit images, the number of bins
is specified in the depicted dialog box. With any image type, an options
dialog can be called with or by holding while clicking on .

<span>*Bins*</span>
:   Specifies the number of bins.

<span>*Use min/max*</span>
:   If checked, the X-axis range is determined by the minimum and
    maximum values in the image or selection. If unchecked, *X Min* and*
    X Max* values can be specified to fix the X-axis range.

<span>*Y Max*</span>
:   Fixes the Y-axis range. Type *\`*Auto’ to have the range determined
    by the largest bin count.

The <span>`getHistogram()`</span> and <span>`Plot.getValues()`</span>
macro functions can be used to get the ‘Value’ and ‘Count’ data
displayed when you click the *List* button (cf.  ).

    // 1. Single images: 
     run("Blobs (25K)"); 
     getHistogram(values, counts, 256); 
     for (i=0; i<values.length; i++)
         print(values[i], counts[i]);

     // 2. Entire stacks:
     run("T1 Head (2.4M, 16-bits)");
     run("Histogram", "stack");
     Plot.getValues(values, counts);
     for (i=0; i<values.length; i++)
         print(values[i], counts[i]);

[sub:Plot-Profile-[k]]
----------------------

![image](images/PlotProfile)

Displays a two-dimensional graph of the intensities of pixels
along a line or rectangular selection. The X-axis
represents distance along the line and the Y-axis is the pixel
intensity. *NaN* values in 32–bit images (*see* ) are ignored.

For rectangular selections or line selections wider than one pixel,
displays a ‘column average plot’, where the X-axis represents the
horizontal distance through the selection and the Y-axis the vertically
averaged pixel intensity.

To average horizontally, hold or check *Vertical* *Profile *in . For
real-time examinations, activate *Live* mode to continuously update the
profile as the selection is moved or resized.

To obtain profiles of several selections in a single plot use the ROI
Manager’s *Multi Plot *command (). Other types of area selections such
as oval or freehand ROIs can be profiled by first running , which will
convert these ROIs to line selections.

Use the *List*,* Save... *or *Copy... *buttons to view and save the
profile data. Use to adjust how plots are generated.

[sub:Surface-Plot...]
---------------------

Displays a three-dimensional graph of the intensities of pixels in a
grayscale or pseudo color image (non-RGB images). The plot is based on
the existing rectangular selection or on the entire image if no
selection is present. A stack of plots can be produced when the source
image is a stack or hyperstack. In this case, closing the plot stack
window will abort the plotting process.

![image](images/SurfacePlot)

<span>*Polygon Multiplier*</span>
:   Adjusts the number of profiles used to generate the plot.

<span>*Draw* *Wireframe*</span>
:   If checked, the outline of each profile will be drawn in black.

<span>*Shade*</span>
:   If checked, a shaded plot will be generated using the LUT of source
    image.

<span>*Draw* *Axis*</span>
:   If checked, the three axis will be drawn and labelled.

<span>*Source* *Background* *is* *Lighter*</span>
:   If checked, lighter areas in the source image will represent lower
    elevations (valleys) while darker areas in the source image will
    represent higher elevations (peaks).

<span>*Fill* *Plot* *Background* *with* *Black*</span>
:   If checked, the plot is drawn with a black background, otherwise
    white will be used.

<span>*One* *Polygon* *Per* *Line*</span>
:   If checked, all polygons will be drawn.

<span>*Smooth*</span>
:   If checked, sharp fluctuations will be smoothed. Note that some
    plots can be further improved by adjusting the contrast of the
    source image or smoothing it.

[H]

Electrophoretic gels such as Western blots need frequently to be
quantified in order to translate biochemical results into statistical
values (*see* ). Independently of the measurement method, you should be
familiar with the [Beer–Lambert
law](http://en.wikipedia.org/wiki/Beer%E2%80%93Lambert_law ), so that
you are aware that the optical density
([absorbance](http://en.wikipedia.org/wiki/Absorbance)) of the staining
to be measured must be proportional to the concentration of the probed
material. An obvious corollary of the Beer–Lambert law is that saturated
stains (or overexposed films) cannot be quantified.

Generally speaking, office scanners are not suitable for densitometric
analysis. That being said, and in the absence of better alternatives,
they can be used to digitize gels and X-ray films if the following
guidelines are respected:

<span>Samples must be scanned in transmission mode</span>
:   Most flatbed scanners have the light source and detector located on
    the same side of the instrument (reflection mode). Under these
    conditions, light interacts with semi-transparent objects in a
    complex manner with reflected light re-passing through the object on
    its way to the detector. In addition, thick samples (such as
    Coomassie-stained gels) are imaged from the surface under reflection
    light.\
    Scanners can only serve as densitometers if the light source and
    detector are on opposite sides of the instrument (transmission
    mode). This is critical for quantitation of absorbances and requires
    an adapter for transparencies or negatives to be mounted or built-in
    on the scanner.

<span>The scanner must offer a linear intensity response</span>
:   The response characteristics of most scanner detectors is unknown,
    therefore the film/gel should always be scanned next to a
    photographic gray scale image of known optical intensity (optical
    tablet or step wedge, *see* [optical density calibration
    tutorial](http://imagej.nih.gov/ij/docs/examples/calibration/)).
    Autogain must be disabled during digitization to ensure generally
    linear intensity responses.

In addition, images should also be scanned with sufficiently high
spatial and dynamic (bit-depth) resolutions (the optical—not
interpolated—resolution of a scanner can also be measured: e.g., high
contrast patterns 84.6$\micro$m ($\nicefrac{1}{300}$inch) apart should
be distinguishable on images scanned at 300dpi). Note that, in general,
*a posteriori* background corrections on scanned images should also be
avoided.

All these issues have been discussed in detail in Gassmann et al.
“Quantifying Western blots: pitfalls of densitometry”
@Gassmann:2009p20997 (N.B.: The paper benchmarks a legacy version of ).

[sub:Gels]------------------------

Use the commands in this submenu to analyze one-dimensional
electrophoretic gels. Electrophoretic densitometry is discussed in more
detail in [infobox:Densitometry] . These commands use a simple graphical
method that involves generating lane profile plots, drawing lines to
enclose peaks of interest, and then measuring peak areas (i.e., definite
integrals) using the . Note that this technique cannot be used to
compare bands on different gels unless gels are calibrated to known
standards.

The commands listed in this submenu are:

<span>Select First Lane </span>
:   Requires a rectangular selection. Note that lanes are assumed to be
    vertical unless the width of the initial selection is at least twice
    its height.

<span>Select Next Lane </span>
:   To be used after the first rectangular ROI is moved over the
    adjacent lanes. Note that all selections must have the same
    dimensions.

<span>Plot Lanes  </span>
:   Generates the lane profile plots. ImageJ assumes that only one plot
    is created per analysis. As a consequence, re-running this command
    more than once within the same analysis will cause an error message:
    “*You must first use the ‘Select First Lane’ command*”. To recreate
    plotted profiles use the command.

<span>Re-plot Lanes</span>
:   Recreates the lane profile plots. If has not yet been run an error
    message is displayed: “*The data needed to re-plot the lanes is not
    available*”.

<span>Reset</span>
:   Resets the analysis.

<span>Label Peaks</span>
:   Uses the area measurements obtained with the to label lane peaks
    (*see* ).

<span>[misc:GelAnalyzerOptions]Gel Analyzer Options…</span>
:   Use this dialog to control the behavior of the gel analyzer.

    <span>*Vertical/Horizontal scale factor*</span>
    :   Specifies the scale factor at which the lane profile plots are
        displayed.

    <span>*Uncalibrated OD*</span>
    :   If checked, ImageJ will convert gray values to uncalibrated
        [optical density](http://en.wikipedia.org/wiki/Absorbance)
        values. As explained in , ImageJ converts pixel intensities into
        optical density using the function:
        $\mbox{Unc.\,\ OD}=\log_{10}(\nicefrac{255}{pixel\, value})$. As
        mentioned earlier, the conversion can only be performed on 8–bit
        images. Thus, when dealing with higher bit-depth images (see ),
        the gel analyzer works on a 8–bit copy of the gel (kept hidden
        from the user) when using this option.

    <span>*Label* *With* *Percentages*</span>
    :   If checked, the command will print to the table the *peak
        percentage* and use it to label the plot. The percentage value
        is obtained by dividing the area of each peak by the sum of all
        measured peaks from all lanes.

    <span>*Invert* *Peaks*</span>
    :   If checked, peaks will be inverted, i.e, bands darker than
        background will have positive peaks, bands lighter than
        background will have negative peaks. This setting does not
        change the analysis (*see* ).

For practice, refer to the [video
tutorial](http://imagejdocu.tudor.lu/doku.php?id=video:analysis:gel_quantification_analysis)
on the ImageJ wikipage and use the <span> </span>sample image (1–D gel)
to perform the following steps. Note that a copy of the gel image with
the lane outlines can be created at any point using the command.

1.  Use the rectangular selection tool to outline the first lane. This
    should be the left most lane if the lanes are vertical or the top
    lane if the lanes are horizontal.

2.  Select () and the lane will be outlined and ‘Lane 1 selected’
    displayed in the status bar.

3.  Move the rectangular selection right to the next lane (or down if
    the lanes are horizontal) and select (). The selected lane is
    outlined and labelled, and ‘Lane $n$ selected’ is displayed in the
    status bar.

4.  Repeat the previous step for each remaining lane.

5.  Select () to generate the lane profile plots.

6.  Use the to draw base lines and/or drop lines so that each peak of
    interest defines a closed area (ImageJ will automatically switch to
    the Straight Line tool). Note that you can hold to constrain lines
    to be either horizontal or vertical. To access to all the lanes, it
    may be necessary to scroll the image vertically using the (Hold down
    the space bar to temporarily switch to this tool).

7.  For each peak, measure the size by clicking inside the peak with the
    . If necessary, scroll the image vertically by holding down the
    space bar and dragging.

8.  Select to label each measured peak with its size as a percent of the
    total size of the measured peaks.

[sub:Tools]
-----------

This submenu provides access to various image analysis plugins.

### 

![image](images/SaveXYcoordinates)

Writes to a text file the XY coordinates and
pixel value of all non-background pixels in the active image. Background
is assumed to be the value of the pixel at the upper left corner of the
image. For grayscale images, writes three values per line (x, y, and
value), separated by spaces. For RGB images, writes five values per line
(x, y, red, green and blue). The origin of the coordinate system is at
the lower left corner of the image.

The number and percentage of non-background pixels is printed to the if
*Suppress Log output* is not checked.

###  [sub:Fractal-Box-Count...]

![image](images/FractalBoxCount)

Estimates the fractal dimension ($D$) of a
binary image. $D$ can be used as a measure of pattern complexity (cell
shape, vascularization, textures, etc.) and is specially relevant in
cases in which Euclidean measures such as diameter or length are not
good descriptors of complexity.

The command counts the number of boxes of an increasing size needed to
cover a one pixel binary object boundary and implements the method
described in T. G. Smith, Jr., G. D. Lange and W. B. Marks, Fractal
Methods and Results in Cellular Morphology, *J Neurosci Methods*,
69:1123–126, 1996.

A plot is generated with the log of size on the X-axis and the log of
count on the Y-axis and the data is fitted with a straight line. The
slope (S) of the line is the negative of the fractal dimension, i.e.,
D$=-slope$. ‘Size’ (S) and ‘count’ (C) are printed to the . Refer to the
[source
code](http://imagej.nih.gov/ij/source/ij/plugin/filter/FractalBoxCounter.java)
for additional information.

### [sub:Analyze-Line-Graph]

This command uses the to extract sets of coordinate data from digitized
line graphs. The following procedure describes how to use it:

1.  Open the image containing the graph. For practice, use the sample
    image. Make sure your graph is a grayscale image (). will assume
    that the graph is displayed on a white background so images with
    darker backgrounds must be adjusted beforehand (*see* e.g., and ).

2.  Set background color to white using the or the . Use any of the as
    an eraser (press to erase) in order to isolate the single graph
    curve to be measured. Alternatively, use one of the drawing tools (
    or ) to paint directly in background color.

3.  Open the tool ( ) and adjust the threshold levels so that the curve
    is highlighted in red.

4.  Select the curve with the and run to erase everything on the canvas
    but the curve.

5.  With the line still highlighted by the threshold widget, run to get
    the XY coordinates of the traced line (you can hold down while
    selecting the command to reveal the actual image that is processed
    ).

6.  On the newly obtained plot, select *List*, *Copy* or *Save* (these
    commands are described in ) to export the curve coordinates into a
    spreadsheet application.

The exported values are tabulated in pixel coordinates, unless the
digitzed graph has been spatially calibrated using or .

### [sub:Curve-Fitting...]
ImageJ’s CurveFitter provides a simple tool for fitting various
functions to X- and Y-data, using an improved multithreaded simplex
[algorithm](http://en.wikipedia.org/wiki/Nelder-Mead_method)
<span>@C-CurveFitter</span>. This strategy (an [iterative
method](http://en.wikipedia.org/wiki/Iterative_method)) is a kind of
“trial and error” procedure in which the parameters of the fitting model
are adjusted in a systematic way until the equation fits the data as
close as required. It proceeds by: 1) Making first guesses of all the
non-linear parameters; 2) Computing the model, comparing it to the data
set and calculating a fitting error; 3) If the fitting error is large,
the CurveFitter will systematically change parameters and return to step
2). The loop stops when the fitting accuracy is met, which in difficult
cases may never happen. In the latter case, the procedure terminates
after an imposed number of iterations or restarts.

The typical usage of this command is listed below:

1.  Tabular data is entered or copied in the input window or
    alternatively, a two column text file is opened by clicking on the
    *Open* button. Values may be separated by spaces, tabs, commas or
    semicolons.

2.  The function to be fit is selected from the drop-down menu. Several
    built-in functions are available (*see* ). User defined functions
    with up to six parameters are also possible by choosing
    *<span>\*</span>User-defined<span>\*</span>*. Note that elimination
    of parameters by linear regression does not take place for
    user-defined functions. As a consequence, the performance of custom
    functions does not fully match that of built-in functions.

3.  Once the *Fit* button is pressed, ImageJ displays a graph of the
    data with the fitted curve as depicted in . If *Show Settings *is
    checked, detailed information about the fit (including measures of
    goodness of fit) is printed to the and the user is prompted to
    re-adjust the simplex fitting options, namely:

    <span>Maximum number of iterations</span>
    :   The number of maximum iterations in which the CurveFitter will
        try to improve upon the parameter values to get the best fit.
        Usually the algorithm reaches optimal convergence before
        reaching the default value.

    <span>Number of restarts</span>
    :   To ensure that the result is trustworthy (i.e., that it did that
        it did not get “stuck” or find a local minimum), CurveFitter
        tries at least twice to find the minimum, with different
        starting points. If the two results are not the same, *Number of
        restarts* determines how often it may start two additional runs,
        until the best two results agree within the error tolerance.
        There is no limit for the number of restarts, apart from the
        maximum number of iterations.

4.  Click *Apply* to create a 32–bit copy (*see* ) of the current image
    transformed with the chosen function.

[h]

<span>\>m<span>0.153</span>l\>m<span>0.496</span></span> & & <span>\
</span> & <span>$y=a+bx$</span> & <span>cf. Pixel Inverter
()</span><span>\
</span> & <span>$y=a+bx+cx^{2}+\ldots+ix^{8}$</span> & <span>The range
of $x$ values should not be too far from $0$, especially for
higher-order polynomials</span>

<span>4^th^: should fulfill
$|x_{\textup{Mean}}|<2\times(x_{\textup{Max}}-x_{\textup{Min}})$</span>

<span>5^th^: should fulfill
$|x_{\textup{Mean}}|<(x_{\textup{Max}}-x_{\textup{Min}})/2$</span>

<span>7^th^ & 8^th^: should fulfill
$|x_{\textup{Mean}}|\ll x_{\textup{Max}}-x_{\textup{Min}}$</span><span>\
</span> & <span>$y=a\times x^{b}$</span> & <span>\
</span> & <span>$y=a\times e^{bx}$</span> & <span>\
</span> & <span>$y=a\times e^{-(bx)}+c$</span> & <span>\
</span> & <span>$y=a\times(1-e^{(-bx)})+c$</span> &
<span>cf. [FRAP\_Profiler](http://www.macbiophotonics.ca/imagej/intensity_vs_time_ana.htm)
plugin</span><span>\
</span> & <span>$y=a\times\ln(bx)$</span> & <span>\
</span>& <span>$y=a+b\times\ln(x-c)$</span> & <span>\
</span> & <span>$y=\frac{d+(a-d)}{1+(\frac{x}{c})^{b}}$</span> & <span>\
</span>

<span>(NIH Image)</span> &
<span>$x=\frac{d+(a-d)}{1+(\frac{y}{c})^{b}}$</span> & <span>\
</span> & $y=c\times(\frac{x-a}{d-x})^{\nicefrac{1}{b}}$ & <span>\
</span> & <span>$y=a+(b-a)\times e^{-\frac{(x-c)^{2}}{2d^{2}}}$</span> &
<span>@C-CurveFitter</span><span>\
</span> & <span>$y=b\times(x-a)^{c}\times e^{-(\frac{x-a}{d})}$</span> &
<span>\
</span>

### [sub:ROI-Manager...]
![image](images/ROIManager)

The ROI (Region of Interest) Manager is a tool for working with multiple
selections. can be from different locations on an image, from different
slices of a stack or from different images. All selection types,
including points, lines and text, are supported.

<span>*Add*</span>
:   Click *Add* to add the current selection to the list, or press , the
    keyboard shortcut for the command. The ROI manager creates a three
    part label. The first part (stacks only) is the slice number, the
    second is the Y-coordinate of the selection and the third is the
    X-coordinate. Click on a label to restore the associated selection
    to the current image. With stacks, the selection is restored to the
    slice it came from. Hold down while clicking *Add* to ‘Add and
    Draw’. Hold down while clicking *Add* to ‘Add and Rename’.\
    Install the
    [ROIManagerMacros](http://imagej.nih.gov/ij/macros/RoiManagerMacros.txt)
    macro set and you will be able to add a selection by pressing , ‘add
    and rename’ by pressing , ‘add and draw’ by pressing and ‘add and
    advance to the next slice’ by pressing .

<span>*Update*</span>
:   Replaces the selected ROI on the list with the current selection,
    updating the z/t-position of the ROI in and .

<span>*Delete*</span>
:   <span> </span>Deletes the selected ROIs from the list. Deletes all
    ROIs if none is selected.

<span>*[misc:RM-Rename]Rename…*</span>
:   Renames the selected ROI. The chosen string will be used as label
    (*Labels* checkbox) if *Use ROI names as labels *is checked in the
    *More$\gg$Options*… dialog. The selected ROI can also be renamed
    using the *Properties…* button. Note that while it is not possible
    to rename multiple ROIs simultaneous, you can use [ROI Manager
    Tools](http://imagej.nih.gov/ij/plugins/roi-manager-tools/index.html)
    to rename multiple ROIs.

<span>*Measure*</span>
:   Measures the selected ROIs, or if none is selected, all ROIs on the
    list. Use to specify the measuring parameters.

<span>*Deselect*</span>
:   <span> </span>Deselects any selected ROIs on the list. As mentioned
    in [infobox:ROIManager] , when items are deselected subsequent ROI
    Manager commands are applied to all ROIs.

<span>*[misc:RM-Properties]Properties…*</span>
:   Similarly to , opens a dialog box in which is possible to assign a
    contour color (*Stroke color*) of a certain *Width* or a *Filling
    color*. Set *Stroke width* to 0 to have selections drawn using a
    width of one pixel regardless of the image magnification (*see*
    [infobox:ZoomedCanvas] ).\
    As previously mentioned, selections can be either filled or
    contoured, but not both. The nine default selection colors (*black*,
    *blue*, *cyan*, *green*, *magenta*, *orange*, *red*, *white*,
    *yellow*) can be typed textually. Any other color must be specified
    using hex notation (*see* [infobox:HEX] ).\
    With selections, it is also possible to specify the *Font size* and
    *Justification*.\
    If multiple ROIs have been selected from the ’s list (*see*
    [infobox:ROIManager] ), properties will be applied to the specified
    *Range* of selections.

<span>*Flatten<span>[</span>F<span>]</span>*</span>
:   Alias for .

<span>*[misc:RM-ShowAll]ShowAll*</span>
:   <span> </span>Toggles the display of all ROI Manager . If *Labels*
    is active, ROIs will also be labelled. Once *Show All* is checked,
    ROIs can be re-activated by Alt-clicking, Control-clicking or
    long-pressing ($\nicefrac{1}{4}$ second or longer). Re-activated
    selections that are moved or edited are automatically updated.

    ![image](images/ROIManagerClosing)
:    


When *ShowAll *is active and the ROI Manager
window is closed, a dialog box is displayed providing the option to save
the displayed ROIs by moving them to the image overlay by running . When
saving the image as tiff, are stored in the TIFF header and can later be
retrieved using .

<span>*Labels*</span>
:   <span> </span>Toggles overlay labels displayed by *Show All*. Labels
    are customized using *More*<span>$\gg$</span>*Labels*…, a shortcut
    to

<span>*More*<span>$\gg$</span></span>
:   <span> </span>Displays a drop-down menu with several additional
    commands (this menu is also available when right-clicking on the ROI
    Manager’s list area):


<span>![image](images/ROIManagerMenu)</span>
:    

<span>*Open…*</span>
:   Opens a file and adds it to the list or opens a ZIP archive ( file)
    and adds all the selections contained in it to the list.

<span>*Save…*</span>
:   Saves the selected ROI as a file. If no ROIs are selected, saves all
    the ROI Manager selections in a ZIP archive.

<span>*Fill*</span>
:   Alias for .

<span>*Draw*</span>
:   Alias for .

<span>*AND*</span>
:   Uses the conjunction operator on the selected ROIs to create a
    composite selection. All ROIs are considered if none is selected.

<span>*OR (Combine)*</span>
:   Uses the union operator on the selected ROIs to create a composite
    selection. Combines all ROIs if none is selected.

<span>*XOR*</span>
:   Uses the exclusive or operator on the selected ROIs to create a
    composite selection @C-RM-XOR. All ROIs are considered if none is
    selected.

<span>*Split*</span>
:   Splits the current selection (it must be a composite selection) into
    its component parts and adds them to the ROI Manager.

<span>*AddParticles*</span>
:   Adds objects segmented by the particle analyzer to the ROI Manager.
    Requires that *Record Starts* be checked in the dialog box. Particle
    analyzer objects can also be added to the ROI Manager by checking
    *Add* *to* *Manager* in the Analyze Particles dialog box.

<span>![image](images/ROIManagerMultiMeasure)</span>
:    

<span>*MultiMeasure*</span>
:   Measures all the ROIs on all slices in the stack, creating a with
    either one row per slice (if *One Row Per Slice* is checked in the
    dialog) or one row per measurement @C-RM-MultiMeasure.

![image](images/ROIoperators)

<span>*MultiPlot*</span>
:   <span> </span>Runs on the selected ROIs on a single graph
    @C-RM-MultiPlot. All selections are plotted if none is selected.
    When plotting less than seven selections colored lines are drawn:
    blue (ROI1), green (ROI2), magenta (ROI3), red (ROI4), cyan (ROI5)
    and yellow (ROI6). Profiles with more selections are drawn in tones
    of gray.\
    While requires a line or rectangular selection, *Multi Plot* accepts
    all type of selections by first running , which converts area and
    freehand ROIs to line selections.

<span>*Sort*</span>
:   Sorts the list in alphanumeric order.

<span>*Specify…*</span>
:   Alias for the prompt that allows the creation of area ROIs at
    specific locations.

<span>*[misc:RM-RemoveSliceInfo]RemoveSliceInfo*</span>
:   Removes the information in the ROI names that associates them with
    particular stack slices (*see* illustration).

<span>*Help*</span>
:   Opens <http://imagej.nih.gov/ij/docs/menus/analyze.html#manager>.

<span>*Labels…*</span>
:   Alias for , which allow the customization of selection labels when
    *Show All* is active.

<span>*List*</span>
:   <span> </span>Prints a table detailing the properties of the ROIs
    stored in the Manager, including: *Index* (cf.
    <span>`roiManager(index)`</span> macro function), *Name*, *XY*
    coordinates of ROI center (pixels), and stroke *Color*.

    [h]

    For most operations *Deselect* works as a *Select All *button, e.g.,
    to measure all ROIs in manager one would press *Deselect* then
    *Measure*. In addition, it is possible to select contiguous ROIs in
    the ROI Manager list with a single Shift–click. Non-contiguous ROIs
    can be selected by Control–click (Command–click on Mac OSX).

    When is active, that are not stored in the ROI Manager will not be
    re-activated by Alt-clicking, Control-clicking or long-pressing
    ($\nicefrac{1}{4}$ second or longer). This is a reminder that those
    overlay selections (added to the image overlay via ) are not under
    the control of the ROI Manager. You will be able to activate them as
    soon as is unchecked.

<span>*[misc:RM-Options...]Options…*</span>
:   Displays a dialog box (depicted in* *) that allows you to set
    several ROI Manager settings:

    <span>*Associate Show All ROIs with slices*</span>
    :   If checked, *Show All* will only reveal ROIs when browsing their
        respective slice. If unchecked, ROIs are shown in all stack
        slices.

    <span>*Restore ROIs centered*</span>
    :   If checked, ROIs opened by *More$\gg$Open*… are centered on the
        image canvas. This option avoids loaded ROIs to be displayed out
        of boundaries when the image has been resized.

    <span>*Use ROI names as labels*</span>
    :   If checked, ROI names are used as selection labels when in the
        *Labels* checkbox is active. If unchecked, the ROI position in
        the Manager’s list is used. Selections can be renamed using
        either *Rename* or *Properties…*

### [sub:Scale-Bar...]
![image](images/ScaleBar)

Draws a labelled spatial calibration bar.

<span>*Width*</span>
:   Length of the bar in calibrated units.

<span>*Height*</span>
:   Height of the bar in pixels.

<span>*Font Size*</span>
:   Adjusts the font size of the scale bar label.

<span>*Color*</span>
:   Adjusts the text color (*see* [infobox:Color] ).

<span>*Background*</span>
:   Adjusts the filling color of the label text box.

<span>*Location*</span>
:   Adjusts the position of the calibration bar. If there is a
    selection, the bar is initially drawn at the selection.

<span>*Bold Text/Serif Font*</span>
:   Specify if label should be typeset in boldface/serif typeface.

<span>*Hide* *Text*</span>
:   If checked the bar is drawn without label.

<span>*Overlay*</span>
:   If checked the bar is created as a non-destructive image overlay
    (*see* and submenu). If unchecked, the scale bar is drawn
    invasively.

### [sub:Calibration-Bar...]

Creates an RGB copy of the current image and displays a labelled
calibration bar on it (*see* ).

<span>*Location*</span>
:   Defines the position of the bar. If an area selection is active, the
    bar is initially drawn at that selection.

<span>*Fill Color*</span>
:   Defines the bar’s background color.

<span>*Label Color*</span>
:   Adjusts the text color.

![image](images/CalibrationBar)

<span>*Number* *of* *Labels*</span>
:   Adjusts the total number of values displayed.

<span>*Decimal Places*</span>
:   Adjust the number of decimal places present in the labels.

<span>*Font Size*</span>
:   Adjusts labels font size (labels are drawn bold if *Bold Text* is
    checked).

<span>*Zoom Factor*</span>
:   Magnifies the entire calibration bar canvas. Enter a value less than
    1 to reduce the bar size.

The [Calibration Bar
Macros](http://imagej.nih.gov/ij/macros/CalibrationBarMacros.txt) can be
used to add a calibration bar to a stack or to all the images and stacks
in a folder.

### [sub:SynchronizeWindows]
Synchronizes mouse motion and input between multiple windows so that a
ROI drawn in one image is replicated in all other @C-SyncWIndows. A
synchronization cursor indicates the location of the mouse across the
synchronized window set.

![image](images/SyncWindows)

<span>*Synchronized window set*</span>
:   Images to be synchronized are specified in this list, containing all
    open images. To select a consecutive group of images, click the
    first item, press and hold down , and then click the last item.
    Alternatively, click on the first item and drag it across. To select
    non-consecutive images, press and hold down , then click each item
    to be selected. Use the *Un/Synchronize All* buttons to de/select
    all listed images.

<span>*Sync cursor*</span>
:   If checked, the cursor is synchronized across selected images, with
    the mouse pointer changing to a red X-shape cursor. When unchecked,
    mouse movements become restricted to the active image.

<span>*Sync channels*</span>
:   If checked, the channel slider (*c*) is synchronized across the
    synchronized window set*.*

<span>*Image coordinates*</span>
:   If checked, spatial calibration units will be used instead of pixels
    coordinates. For proper registration, this option should be
    unchecked when syncing images with different pixel sizes (*see*
    Image).

<span>*Sync* *z-slices*</span>
:   If checked, the depth slider (*z*) is synchronized across the
    synchronized window set*.*

<span>*Sync* *t-frames*</span>
:   If checked, the frame slider (t) is synchronized across the
    synchronized window set*.*

<span>*Imag*e *scaling*</span>
:   If checked, positions to different windows are translated via
    offscreen coordinates, providing correct registration at different
    zoom levels.

[sec:Plugins]
=============

[sub:Macros]
------------

This submenu contains commands for installing, running and recording
macros, as well as any macro commands added by Macros contained in a
file named , in the macros folder, are automatically added to this
submenu when ImageJ starts up. By design, only one set of macros can be
installed at a time. As such, the last set of macros installed by (or by
the ) will always replace previously installed macros.

### [sub:Install...]

Adds one or more macros contained in a file to the bottom of this
submenu. To install a set of macros, and at the same time view their
source code, open the macro file with and use ’s command. Macros in the
file are automatically installed when ImageJ starts up. Similarly, with
ImageJ1.44f and later, newly opened macro sets with two or more macros
are also automatically installed in this menu.

### [sub:Run...]

Loads and runs a macro without opening it in . To run a macro, and at
the same time view its source code, open it with and use the editor’s
command.

### [sub:Startup-Macros...]

Opens . The same file can be opened by holding while selecting *Startup
Macros* from the ![image](images/tools/Switcher) drop-down menu (*see*
).

### [sub:Record...]

Opens the ImageJ command recorder. To create a macro, open the recorder,
use one or more ImageJ commands, then click *Create*. When the recorder
is open, each menu command you use generates a macro
<span>`run()`</span> function call. The <span>`run()`</span> function
has one or two string arguments. The first is the command name. The
optional second argument contains dialog box parameters. Examples:

-   Create a rectangular, oval or line selection and the recorder will
    generate a <span>`makeRectangle()`</span>, <span>`makeOval()`</span>
    or <span>`makeLine()`</span> function call.

-   Click on *Auto* or *Set* in the window to generate a
    <span>`setThresold()`</span> call, and on *Reset* to generate a
    <span>`resetThresold()`</span> call.

-   Select an image from the Window menu to generate a
    <span>`selectWindow()`</span> call.

-   Click in the window to generate <span>`setForegroundColor()`</span>
    and <span>`setBackgroundColor()`</span> calls.

![image](images/Recorder)

Note that you can interact with the recorder window by deleting or
commenting lines of code or pasting text from . This may be specially
useful when writing your own macros or to generate simple ‘Session
Logs’. In this case, you would start the Recorder and let ImageJ keep
track of the performed actions by generating macro code.

[sub:Shortcuts]
---------------

This submenu contains commands for creating keyboard shortcuts and for
installing and removing plugins.

### [sub:List-Shortcuts...]

![image](images/ListShortcuts)

This command generates a table with the
ImageJ keyboard shortcuts in one column and the commands they call in
another. Commands prefixed by ‘<span>\*</span>’ refer to shortcuts
created with while commands prefixed by ‘\^’ refer to installed macros
(listed in ) and override ImageJ default hot-keys.

Note that unless *Require control key for shortcuts *in is checked, you
do not have to hold down to use a keyboard shortcut . E.g., to open an
image () simply press .

### [sub:Create-Shortcuts...]

![image](images/CreateShortcut)

Assigns a keyboard shortcut to an ImageJ menu
command and lists the shortcut in the Shortcuts submenu.

Select the command from the popup menu and enter the shortcut in the
text field. A shortcut can be a lower or uppercase letter or ‘F1’
through ‘F12’. Use to get a list of shortcuts that are already in use.

### [sub:Install-Plugin...]

![image](images/InstallPlugin)

Installs a plugin in a user-specified submenu.
Plugins with a showAbout() method are also automatically added to the
submenu.

Use the first popup menu to select the plugin and the second to select
the submenu it is to installed in. The command must be different from
any existing ImageJ command. Shortcut (optional) must be a single letter
or ‘F1’ through ‘F12’. Argument (optional) is the string that will
passed to the plugin’s run method.

### 

Removes commands added to the Shortcuts submenu by Also removes commands
added by and removes plugins installed in the Plugins menu. The menus
are not updated until ImageJ is restarted.

[sub:Utilities]
---------------

### [sub:Control-Panel...]

![image](images/ControlPanel)

This command @C-ControlPanel opens a window
containing ImageJ commands in a hierarchical tree structure. Click on a
leaf node to launch the corresponding ImageJ command (or plugin). Double
click on a tree branch node (folder) to expand or collapse it. Click and
drag on a tree branch node (folder) to display its descendants in a
separate (child) window. In a child window, click on ‘Show Parent’ to
re-open the parent window.

### [sub:Command-Finder]

![image](images/CommandFinder)

The quickest way to find a command without having to navigate through all
the menus @C-ComandFinder.

Evoke the prompt by pressing (as in ‘command auncher’, or ‘ocator’). If
you type part of a command name, the list will only show commands that
match that substring. If only a single command matches then that command
can be run by pressing .

If multiple commands match, click with the mouse to select a command to
run. Alternatively pressing the up or down keys will move keyboard focus
to the list and the selected command can be run by pressing . Pressing
switches focus back to the prompt. Double clicking on a command will run
that command. Pressing closes the window.

<span>*Show full information*</span>
:   If checked, the Command Finder will display the location of the
    listed menu entries.

<span>*Fuzzy matching*</span>
:   ([Fiji
    only](http://fiji.sc/wiki/index.php/Using_the_Command_Launcher))
    Activates approximate string matching. Useful if you are not sure
    about the command spelling.

<span>*Close when running*</span>
:   If checked, the Command Finder will dismiss after choosing *Run* or
    pressing .

<span>*Export*</span>
:   Prints the filtered list of commands to an ImageJ table.

### [sub:Search...]

![image](images/Search)

Searches for macros (, ), scripts (, ,, , ), plugins source () and
files containing a particular string.

Search is performed recursively (subdirectories are included) and
results displayed in the . In the Log window, double click on a file
path to have it open.


Specifies if the search should be restricted to filenames or extended to
file contents. If checked, the line number where the string was found is
displayed.


Specifies if the search should be case-insensitive.

Extends the search scope to .

Extends the search scope to .

Extends the search scope to (if present).

Extends the search scope to (if present). Requires the ImageJ source
code to be downloaded from <http://imagej.nih.gov/ij/download/src/> and
extracted into the ImageJ folder.

Note that you can perform searches in other directories by choosing none
of the folders above mentioned. In this case, you will be asked to
choose a target directory on a second dialog prompt.

### [sub:Monitor-Events...]

By implementing the <span>`IJEventListener`</span>,
<span>`CommandListener`</span> and <span>`ImageLister`</span>
interfaces, this command is able to monitor foreground and background
color changes, tool switches, Log window closings, command executions
and image window openings, closings and updates.

### [sub:Monitor-Memory...]

![image](images/Memory)

Displays a continuously updated graph of
ImageJ’s memory utilization, which can be useful for detecting memory
leaks.

Memory usage and running threads are displayed above the graph. As for
the IJ , clicking on the window will reclaim unused memory by running
the Java garbage collector.

Ideally you should be able to open several images, process them, close
them, and the amount of memory used will be the same as when you
started.

### [sub:Capture-Screen-[g]]

Copies the screen to an RGB image and displays that image in a new
window. Holding will capture the screen while a modal dialog box is
active if the dialog is based on ImageJ’s GenericDialog class.

### [sub:Capture-Image]

Copies a WYSIWYG version of active image to an RGB image and displays
that image a new window.

### [sub:ImageJ-Properties...]

This command displays various ImageJ properties (Java version, OS name
and version, path separator, location of directories, screen size, etc.)
in a text window. Holding lists all Java properties

### [sub:Threads...]

This command lists, in a text window, the currently running threads and
their priorities.

### [sub:Benchmark]

Runs 62 image processing operations on the current image and displays
the elapsed time in the ImageJ status bar. Additional benchmarks, test
results, and source code are available in the
[Benchmarks](http://imagej.nih.gov/ij/plugins/benchmarks.html) package
of plugins.

### [sub:Reset...]

![image](images/Reset)

Use this command to unlock a locked Image, or
to reclaim memory used by the clipboard and undo buffers (cf. ).

[sub:Plugins-\>New]
-------------------

This submenu contains commands opening editor windows that can be used
to edit and run macros, scripts and plugins. It also has a command that
opens a text window of a specified size and a command that opens a table
that macros can write to. The editor windows opened by , and contain
prototype Java code for the three types of plugins supported by ImageJ.

### [sub:NewMacro]

Opens a blank editor window with the title ‘Macro.txt’.

### [sub:NewMacroTool]
Opens , an example macro tool that creates circular selections.

### [sub:JavaScript]

Opens a blank editor window with the title ‘Script.js’.

### [sub:Plugin]

Opens an editor window containing a prototype plugin that implements the
<span>`PlugIn`</span> interface. Plugins of this type open, capture or
generate images. The prototype displays *Hello world!*. Press () to
compile and run it. Note that the name you choose for the plugin should
include at least one underscore. Another example is the [Step
Maker](http://imagej.nih.gov/ij/plugins/steps.html) plugin.

### [sub:Plugin-Filter]

Opens an editor window containing a prototype plugin that implements the
<span>`PlugInFilter`</span> interface. Plugins of this type process the
active image. The prototype inverts the active image twice. Another
example is the [Image
Inverter](http://imagej.nih.gov/ij/plugins/inverter.html).

### [sub:Plugin-Frame]

Opens an editor window containing a prototype plugin that extends the
<span>`PlugInFrame`</span> class. Plugins of this type displays a window
containing controls such as buttons and sliders. The prototype opens a
window containing a text area. Another example is the [IP
Demo](http://imagej.nih.gov/ij/plugins/ip-demo.html) plugin.

### [sub:NewPluginTool]
Opens a prototype plugin tool, demonstrating @C-PluginTool. A plugin
tool is a Java plugin that installs in the ImageJ toolbar to interact
with the image canvas (*see* ). Plugin tools with names ending in are
listed on the if placed in the directory.

### [sub:Text-Window...]

![image](images/NewTextWindow)

Opens a text window of a specified size that
macros can write to.
[PrintToTextWindow](http://imagej.nih.gov/ij/macros/PrintToTextWindow.txt),
[Clock](http://imagej.nih.gov/ij/macros/Clock.txt) and
[ProgressBar](http://imagej.nih.gov/ij/macros/ProgressBar.txt) are
examples of macros that write to a text window.

### [sub:Table...]

![image](images/NewTable)

Opens a blank table, similar to the Results
table, that macros can write to.
[SineCosineTable2](http://(/usr//imagej.nih.gov/ij/macros/SineCosineTable2.txt)
is an example of such a macro.

[sub:Compile-and-Run...]
------------------------

Compiles and runs a plugin. Runs a plugin if the name of the selected
file ends in . Requires that ImageJ be running on a Java Virtual Machine
that includes the javac compiler, which is contained in the archive. is
included with the Windows and Linux versions of ImageJ bundled with
Java, and it is pre-installed on Mac OSX. Troubleshooting information
can be found under ‘Compiling Plugins’ in the
[Linux](http://imagej.nih.gov/ij/docs/install/linux.html#compile) and
[Windows](http://imagej.nih.gov/ij/docs/install/windows.html#compile)
release notes.

The command can be used to configure the javac compiler. Since
ImageJ1.44c and later, adds the
[Bio-Formats](http://loci.wisc.edu/software/bio-formats) plugin () to
the Java compiler’s classpath.

[sec:WindowMenu]
================

This menu contains four commands plus a list of all open windows. The
currently active image will have a checkmark next to its name. To
activate a window, pull down this menu and select the window by name.

[sub:ShowAll]
-------------

Makes all the windows associated with ImageJ visible.

[sub:PutBehind]
---------------

Displays the next open image. Repeatedly press the tab key to cycle
through all open images. Note that pressing on any image will bring the
to the foreground.

Moves all open images to the left side of the screen, slightly offset
from each other, and displayed in the order they are listed at the
bottom of this menu.

Shrinks all open image windows and repositions them to fit on the screen
without overlapping.

[sec:Help]
==========

Many of the commands in this menu use ImageJ’s
[BrowserLauncher](http://imagej.nih.gov/ij/developer/source/ij/plugin/BrowserLauncher.java.html)
to open a Web page using the user’s default browser. On Linux,
[BrowserLauncher](http://imagej.nih.gov/ij/developer/source/ij/plugin/BrowserLauncher.java.html)
looks for ‘netscape’, ‘firefox’, ‘konqueror’, ‘mozilla’, ‘opera’,
‘epiphany’ or ‘lynx’ and uses the first one it finds.

Opens the ImageJ [home page](http://imagej.nih.gov/ij/).

[sub:ImageJ-News...]
--------------------

Opens the [News section](http://imagej.nih.gov/ij/notes.html) of the
ImageJ website.

[sub:Documentation...]
----------------------

Opens the [Documentation section](http://imagej.nih.gov/ij/docs/) of the
ImageJ website.

[sub:Installation...]
---------------------

Opens the [Installation section](http://imagej.nih.gov/ij/docs/install/)
of the ImageJ website specifically dedicated to the OS in which ImageJ
is running, i.e either
[Linux](http://imagej.nih.gov/ij/docs/install/linux.html), [Mac OS
9](http://imagej.nih.gov/ij/docs/install/mac.html), [Mac OS
X](http://imagej.nih.gov/ij/docs/install/osx.html) or
[Windows](http://imagej.nih.gov/ij/docs/install/windows.html). Worth
reading are the sections *Known Problems* and *Troubleshooting*.

[sub:List-Archives...]
----------------------

Opens the [ImageJ Interest Group
page](https://list.nih.gov/archives/imagej.html) on the NIH LISTSERV
facility. Here you can search the mailing list archives, post a message
to the list, join or leave the list, or update options.

[sub:Help-Dev.Resources...]
---------------------------

Opens the [Developer
Resources](http://imagej.nih.gov/ij/developer/index.html) section of the
ImageJ website.

[sub:Plugins...]
----------------

Opens the [Plugins page](http://imagej.nih.gov/ij/plugins/) on the
ImageJ website, which lists more than 500ImageJ plugins.

Opens the [macros directory](http://imagej.nih.gov/ij/macros/) on the
ImageJ website, which contains more than 400ImageJ macros.

[sub:Macro-Functions...]
------------------------

Opens the [Macro Functions reference
page](http://imagej.nih.gov/ij/developer/macro/functions.html), an
indispensable guide to the built in functions that can be called from
the ImageJ macro language.

[sub:Update-ImageJ...]
----------------------

![image](images/Update)

Upgrades ImageJ to the latest at
<http://imagej.nih.gov/ij/upgrade/>, or downgrades to one of the earlier
versions at <http://imagej.nih.gov/ij/download/jars/>. Select *daily
build* from the drop-down menu and ImageJ will be upgraded to the latest
daily build at <http://imagej.nih.gov/ij/ij.jar>.

[sub:Update-Menus]
------------------

Use this command to update ImageJ’s menus after adding (or removing)
plugins or macros to the plugins folder. Prior to ImageJ1.44b this
command was named *‘Update Menus’*.

[sub:About-Plugins]
-------------------

This submenu displays information about some of the plugins in the
ImageJ plugins folder. To be included in this submenu, a plugin must be
packaged as a JAR file. There is an example at
[rsb.info.nih.gov/ij/plugins/jar-demo.html](http://imagej.nih.gov/ij/plugins/jar-demo.html).

[sub:About-ImageJ...]
---------------------

![image](images/AboutImageJ)

Opens an image containing information about
the ImageJ version, the author, the website, Java version and memory
available. Note that clicking in the is a quicker way to show this
information.

The following table summarizes the keyboard shortcuts built into ImageJ.
You can create additional shortcuts, or override built-in ones, by
[creating simple
macros](http://imagej.nih.gov/ij/developer/macro/macros.html#shortcuts)
and adding them to the . You can also assign a function key to a menu
command using .

Several of these shortcuts accept key modifiers as described in . Also
note that, except when using the , you do not need to hold down the
control key to use a keyboard shortcut, unless *Require control key for
shortcuts *in is checked.

<span>l\>p<span>2cm</span>l</span>\
 & & <span>\
</span><span>\
</span> & & Create new image or stack<span>\
</span> & & Create new text window <span>\
</span> & & Create image from system clipboard <span>\
</span> & & Open file (any format recognized by ImageJ)<span>\
</span> & & Open next image in folder <span>\
</span> & & Opens the *Blobs.gif* example image <span>\
</span> & & Close the active window <span>\
</span> & & Save active image in Tiff format <span>\
</span> & & Revert to saved version of image<span>\
</span> & & Print active image <span>\
</span><span>\
</span> & & Undo last operation <span>\
</span> & & Copy selection to internal clipboard and clear<span>\
</span> & & Copy selection to internal clipboard <span>\
</span> & & Paste contents of internal clipboard <span>\
</span> & & Erase selection to background color <span>\
</span> & & Fill selection in foreground color <span>\
</span> & & Draw selection<span>\
</span> & & Invert image or selection<span>\
</span> & & Select entire image<span>\
</span> & & Remove selection<span>\
</span> & & Restore previous selection<span>\
</span> & & Defines selection properties<span>\
</span> & & Add selection to ROI Manager <span>\
</span><span>\
</span> & & Adjust brightness and contrast <span>\
</span> & & Adjust threshold levels<span>\
</span> & & Display information about active image<span>\
</span> & & Display image properties <span>\
</span> & & Open Color Picker <span>\
</span> & or & Go to next stack slice<span>\
</span> & or & Go to previous stack slice <span>\
</span> & & Reslice stack<span>\
</span> & & Toggle orthogonal view display<span>\
</span> & & Start/stop stack animation<span>\
</span> & & Open the ‘Channels’ tool <span>\
</span> & or & Next hyperstack channel <span>\
</span> & or & Previous hyperstack channel <span>\
</span> & & Next hyperstack slice<span>\
</span> & & Previous hyperstack slice<span>\
</span> & & Next hyperstack frame <span>\
</span> & & Previous hyperstack frame <span>\
</span> & & Crop active image or selection <span>\
</span> & & Duplicate active image or selection <span>\
</span> & & Scale image or selection <span>\
</span> & or & Make image larger <span>\
</span> & or & Make image smaller <span>\
</span> & & Revert to original zoom level <span>\
</span> & & Zoom to 1:1<span>\
</span> & & Adds active selection to image overlay<span>\
</span><span>\
</span> & & 3$\times$3 unweighted smoothing <span>\
</span> & & Repeat previous command<span>\
</span><span>\
</span> & & Display statistics of active image/selection<span>\
</span> & & Display histogram of active image/selection<span>\
</span> & & Display density profile plot of active selection<span>\
</span> & & Select first gel lane<span>\
</span> & & Select next gel lane<span>\
</span><span>\
</span> & & Open Control Panel<span>\
</span> & & Grab screenshot (with if a dialog box is active)<span>\
</span> & & List, find and launch commands<span>\
</span><span>\
</span> & & Make all windows visible<span>\
</span> & & Switch to next image window<span>\
</span> & & Bring ImageJ window to front<span>\
</span>

Key Modifiers[sec:Key-Modifiers]
================================

Alt Key Modifications
---------------------

:   Open previous

:   Skip dialog prompt

:   Copy to system clipboard

:   Keep original image

:   Insert before current slice

:   Skip ten slices

:   Skip ten slices

:   Show options dialog

:   Skip dialog prompt

:   Show options dialog

:   Do classic histogram equalization

:   Show dialog prompt

:   For rectangular selections, generate row average plot. For wide
    straight lines, display rotated contents

:   Assumes lanes are horizontal

:   Show intermediate image

:   Name and add selection

:   List all Java properties

Subtract current selection from the previous one

 and  Current aspect ratio is maintained while resizing

Keeps the line length fixed while moving either end of the line. Forces
the two points that define the line to have integer coordinate values
when creating a line on a zoomed image

 and  Alt-clicking on a node deletes it

Alt-clicking on a point deletes it

Alt-clicking on an image ‘picks-up’ background color

All Show location and size in pixels rather than calibrated units

Shift Key Modifications
-----------------------

:   Adjusting *Min* also adjusts *Max*

:   Apply adjustments to all channels of a composite image

<span>Installed  and </span>
:   Open instead of run

 and  Forces 1:1 aspect ratio

Add selection to previous one

Shift-clicking on a node duplicates it

Forces line to be horizontal or vertical

Shift-clicking on a node duplicates it

Shift-clicking adds points ( behavior)

Shift-clicking and dragging runs

Ctrl (or Cmd) Key Modifications
-------------------------------

 and  Selection is resized around its center

Line is rotated/resized around its center

Space Bar
---------

<span>Any Tool</span>
:   Switch to the

Arrow Keys[Arrow-Keys]
----------------------

<span>Moving </span>
:   The four arrow keys move selection outlines one pixel at a time

<span>Resizing </span>
:   Rectangular and oval selections are resized by holding while using
    the arrow keys

<span> Navigation</span>
:   The and keys substitute for and for moving through a stack. If there
    is a selection, you must also hold

<span> Navigation</span>
:   The and keys change the channel. Hold to move through the slices and
    to move through the frames

<span>Zooming</span>
:   The and keys zoom the image in and out. If there is a selection, you
    must also hold either or

Toolbar Shortcuts[sub:Tools-shortcuts]
======================================

Keyboard shortcuts cannot be used directly to activate tools in the
ImageJ (with the exception of the and the ). However, shortcuts can be
assigned to macros that use the <span>`setTool()`</span> macro function.

The set of macros listed below (taken from ) exemplify how to assign the
function keys through to some of the most commonly used . Once copied to
the file, they will be automatically installed at startup.

    /* These macros allow tools to be selected by pressing function keys. Add them to ImageJ/macros/StartupMacros.txt and they will be automatically installed when ImageJ starts. */

     macro "Rectangle [f1]" {setTool("rectangle")}
     macro "Elliptical [f2]" {setTool("elliptical")}
     macro "Brush [f3]" {setTool("brush")}
     macro "Polygon [f4]" {setTool("polygon")}
     macro "Freehand [f5]" {setTool("freehand")}
     macro "Straight Line [f6]" {setTool("line")}
     macro "Segmented Line [f7]" {setTool("polyline")}
     macro "Arrow [f8]" {setTool("arrow")}
     macro "Angle [f9]" {setTool("angle")}
     macro "Multi-point [f10]" {setTool("multipoint")}
     macro "Wand [f11]" {setTool("wand")}
     macro "Magnifying Glass [f12]" {setTool("zoom")}

This approach, however, requires the user to memorize a large number of
shortcuts. In addition, it may be difficult to assign so many hot-keys
without conflicting with previously defined ones (*see* ). An
alternative way to control the toolbar using the keyboard is to create
macros that progressively activate tools from a predefined sequence. The
next example demonstrates such strategy. It is composed of two macros
activated by and that iterate through the toolbar from left to right
(forward cycle) and right to left (reverse cycle).

    /* These two macros loop through the tools listed in an array using "F1" and "F2" as keyboard shortcuts (forward and reverse cycling). */

     var index;
     var tools = newArray("rectangle", "roundrect", "oval", "ellipse", "brush", "polygon", "freehand", "line", "freeline", "polyline", "arrow", "wand", "dropper", "angle", "point", "multipoint", "text");

     macro "Cycle Tools Fwd [F1]" {
      setTool(tools[index++]);
      if (index==tools.length) index = 0; 
     } 
       
     macro "Cycle Tools Rwd [F2]" {
      if (index<0) index = tools.length-1;
      setTool(tools[index--]);
     }

A tool can be defined either by its name or by its position in the
toolbar using <span>`setTool(id)`</span>, which allows assigning
keyboard shortcuts to and items loaded by the (e.g.,
<span>`setTool(21);`</span> activates whatever tool has been installed
on the last slot of the toolbar). It is also possible to temporarily
activate a tool. The macro below (taken from the toolset), activates the
when is pressed, but restores the previously active tool as soon as the
mouse is released.

    macro "Pick Color Once [F3]" {
       tool = IJ.getToolName; 
       setTool("dropper");
       while (true) {
           getCursorLoc(x, y, z, flags);
           if (flags&16!=0)
               { setTool(tool); exit; }
       }
     }

biblabel\#1<span>\#1</span> [sec:credits]

<span>References</span> The ImageJ installer for Windows is created
using the [Inno Setup](http://www.jrsoftware.org/isinfo.php) installer
generator. the Windows that launches ImageJ () was contributed by George
Silva.

Support for ZIP-compressed TIFFs was contributed by Jason Newton in
IJ1.45g.

The macro editor’s Function Finder () was written by JÈrÙme Mutterer.

The was contributed by Norbert Vischer.

The is based on the [ROI Brush
Tool](http://imagej.nih.gov/ij/plugins/roi-brush.html) plugin from Tom
Larkworthy and Johannes Schindelin.

Jean-Yves Tinevez and Johannes Schindelin (authors of the [Fiji Arrow
Tool](http://fiji.sc/wiki/index.php/Arrow)) contributed code to the .

Michael Schmid, added 4–connected and 8–connected tracing with tolerance
to the .

Macro Toolsets distributed with ImageJ have been contributed by Gilles
Carpentier, JÈrÙme Mutterer and Tiago Ferreira.

The is a plugin tool conversion of Michael Schmid’s [Pixel
Inspector](http://imagejdocu.tudor.lu/doku.php?id=plugin:utilities:pixel_inspector:start)
plugin.

In IJ1.43l and earlier, the command was based on JÈrÙme Mutterer’s
[Import\_Results\_Table](http://imagej.nih.gov/ij/macros/Import_Results_Table.txt)
macro.

Marcel van Herk added URLs support to the command in IJ1.45f.

Michael Schmid contributed improvements to the [AVI
reader](http://imagej.nih.gov/ij/source/ij/plugin/AVI_Reader.java) and
[AVI
writer](http://imagej.nih.gov/ij/source/ij/plugin/filter/AVI_Writer.java)
plugins.

Karen Collins contributed improvements to the FITS\_Writer ( command).

The command, based on a MATLAB script by [Nikolai
Chernov](http://www.math.uab.edu/~chernov/cl/MATLABcircle.html), was
contributed by Michael Doube and Ved Sharma.

The command is based on the Threshold\_To\_Selection plugin written by
Johannes Schindelin.

IJ1.46f adopted Johannes Schindelin’s RMI-based
[OtherInstance](http://fiji.sc/javadoc/fiji/OtherInstance.html) class
from Fiji, which works on multi-user machines and is more secure.

The Color Picker () was written by Gali Baler, a 2003–2004 intern from
[Bethesda-Chevy Chase High
School](http://www.montgomeryschoolsmd.org/schools/bcchs/).

The 16different thresholding methods available in the tool were
implemented by Gabriel Landini.

Michael Schmid contributed improvements to the downsizing kernel used by
and as well as undo support for .

The command implements Gabriel Landini’s [Threshold Colour
plugin](http://www.dentistry.bham.ac.uk/landinig/software/software.html).

The [Reslice](http://imagej.nih.gov/ij/source/ij/plugin/Slicer.java) and
the
[ZProject](http://imagej.nih.gov/ij/source/ij/plugin/ZProjector.java)
plugin ( and commands) were contributed by Patrick Kelly and Harvey
Karten of the University of California, San Diego.

The command is based on Dimiter Prodanov’s
[StackSlicer](http://imagej.nih.gov/ij/plugins/stack-slicer/index.html)
plugin and Albert Cardona’s Updater class. Michael Doube added support
for XZ and YZ view control as well as mouse wheel control.

The was written by Michael Castle and Janice Keller of the University of
Michigan Mental Health Research Institute (MHRI). Bill Mohler added
suport for hyperstacks and 16/32–bit images in IJ1.44m.

The command implemented in IJ1.46e is based on the
[Concatenate](http://imagej.nih.gov/ij/plugins/concatenate.html) plugin
by Jonathan Jackson.

The command is based on the [Substack
Maker](http://imagej.nih.gov/ij/plugins/substack-maker.html) plugin by
Anthony Padua, Daniel Barboriak and Ved Sharma.

The command is based JÈrÙme Mutterer’s [Reduce
HyperStack](http://imagej.nih.gov/ij/macros/Reduce_HyperStack.txt)
macro.

The command is based on Nico Stuurman’s
[Binner](http://valelab.ucsf.edu/~nico/IJplugins/Binner.html) plugin.

The command is based on Albert Cardona’s [Zoom
Exact](http://albert.rierol.net/software.html) plugin.

The command is based on a plugin contributed by Michael Schmid.

The equalization code implemented in was contributed by Richard Kirk.

The was contributed by Michael Schmid.

The command is modeled after Ulf Dittmer’s
[Expression](http://www.ulfdittmer.com/imagej/index.html#Expression)
plugin.

The is a built in version of Joachim Walter’s [FFT
Filter](http://imagej.nih.gov/ij/plugins/fft-filter.html) plugin.

The algorithm was contributed by Gabriel Landini.

The [Skeletonize3D](http://fiji.sc/wiki/index.php/Skeletonize3D) plugin
was written by Ignacio Arganda-Carreras, based on an
[ITK](http://itk.org/itkindex.html) implementation by [Hanno
Homann](http://hdl.handle.net/1926/1292). It implements a 3D thinning
algorithm from Lee et al. [Building skeleton models via 3-D medial
surface axis thinning
algorithms](http://dx.doi.org/10.1006/cgip.1994.1042). *CVGIP*,
56(6):462–478, 1994.

Multi-threading support for all commands was contributed by Stephan
Saalfeld and Michael Schmid in ImageJ1.45c.

The faster and more accurate version of implemented in ImageJ1.38r was
contributed by Michael Schmid.

The `NonBlockingGenericDialog.class` used by the command was added by
Johannes Schindelin.

The rolling ball code of is based on the NIH Image Pascal version by
Michael Castle and Janice Keller. The sliding paraboloid algorithm was
written by Michael Schmid.

The command was written by Gabriel Landini.

The scaled color bar implemented in was contributed by Bob Dougherty.

The much improved
[CurveFitter](http://imagej.nih.gov/ij/developer/api/ij/measure/CurveFitter.html)
() implemented in IJ1.46f was contributed by Michael Schmid. The
Rodboard and Gaussian functions were originally contributed by David
Rodbard (NIH) and Stefan Wörz (DKFZ), respectively.

The ROI Manager(*XOR*) command () was added by Johannes Schindelin.

The ROI Manager(*Multi Measure*) command () is based on Bob Dougherty’s
Multi\_Measure plugin.

The ROI Manager(*Multi Plot*) command () was contributed by Philippe
Gendre.

The command (an improved version of the [SyncWindows\_
plugin](http://imagej.nih.gov/ij/plugins/ucsd.html) by Patrick Kelly)
was contributed by Joachim Walter.

The Control Panel () was written by Cezar M. Tigare.

The Command Finder () was written by Mark Longair.

The class was inspired by Johannes Schindelin’s
[AbstractTool](http://fiji.sc/javadoc/fiji/tool/AbstractTool.html) class
in Fiji.

Other additions, improvements and reproducible bug reports have been
contributed by Adrian Daerr, Airen Peraza, Ajay Gopal, Albert Cardona,
Alberto Duina, Alden Dima, Andreas Maier, Andrew French, Andrii
Savchenko, Arttu Miettinen, Aryeh Weiss, Balazs Nyiri, Barry DeZonia,
Bill Mohler, Bob Hamilton, Bob Loushin, Bruno Vellutini, Burri Olivier,
Carlos Becker, Carne Draug, Charles Anderson, Cheryl McCreary, Christian
Moll, Christophe Leterrier, Christopher Harrison, Damon Poburko, Daniel
Hornung, Daniel Kalthoff, Daniel Senff, David Gauntt, David McDonald,
Denny Hugg, Dimiter Prodanov, Divakar Ramachandran, Dorai Iyer, Duncan
Mak, Eik Schumann, Emmanuel Levy, Erik Meijering, Fabian Svara, Francis
Burton, Frank Sprenger, Franklin Shaffer, Frederic Hessman, Gabriel
Landini, Gilles Carpentier, Gregory Reneff, Hiroki Hakoshima, Ian Lim,
Ingo Bartholomaeus, Jakob Preus, Jamie Robinson, Jan Eglinger, Jan
Funke, Jarek Sacha, Jay Unruh, Jean-Pierre Clamme, Jerome Mutterer,
Jesper Pedersen, Jim Passmore, Joachim Wesner, Johannes Hermen, Johannes
Schindelin, Johannes Weissmann, John Oreopoulos, John Pearl, Jonathan
Silver, Jose Wojnacki, Juan Grande, Julian Cooper, Kai Uwe Barthel,
Karen Collins, Kees Straatman, Kevin Moll, Kris Sheets, Mark Krebs, Mark
Longair, Martin Dressler, Mat Al-Tamimi, Matthew Smith, Michael Cammer,
Michael Doube, Michael Ellis, Michael Schmid, Michel Julier, Nagananda
Gurudev, Nico Stuurman, Norbert Vischer, Olaf Freyer, Oliver Bannach,
Olivier Bardot, Paul Jurczak, Peter Haub, Rainer Engel, Raymond Coory,
Reinhard Mayr, Richard Cole, Richie Mort, Robert Dougherty, Shannon
Stewman, Simon Roussel, Stefan Starke, Stephan Saalfeld, Steven Green,
Thomas Boudier, Thorsten Wagner, Tiago Ferreira, Tomas Karlsson, Tseng
Qingzong, Ulf Dittmer, Uwe Walschus, Valerio Mussi, Ved Sharma, Vytas
Bindokas, Wilhelm Burger, Winfried Wurm, Xiao Chen, Zeljka Maglica.

In July 2012 Nature Methods issued a
[focus](http://www.nature.com/nmeth/focus/bioimageinformatics/index.html)
dedicated to the role of bioimage informatics in microscopy, the tools
that are available for scientific image processing, and the challenges
and opportunities in the field. The special issue features a large
collection of articles discussing ImageJ, and , including:

-   <span>Cardona A, Tomancak P: “Current challenges in open-source
    bioimage informatics” @Cardona:2012p21002</span>

-   <span>Carpenter AE et al.: “A call for bioimaging software
    usability” @Carpenter:2012p21003</span>

-   <span>Eliceiri KW. “Biological imaging software tools”
    @Eliceiri:2012p21007</span>

-   <span>Schindelin J et al. “Fiji: an open-source platform for
    biological-image analysis” @Schindelin:2012p21012</span>

-   <span>Schneider CA et al.: “NIH Image to ImageJ: 25 years of image
    analysis” @Schneider:2012p20999</span>

A full announcement can be found on the [Fiji news
channel](http://fiji.sc/wiki/index.php/2012-06-29_-_Fiji_papers_at_Nature_Methods).

biblabel\#1<span>\#1</span>

Colophon[sec:About-this-Guide] {#colophonsecabout-this-guide .unnumbered}
==============================

The initial contents of this guide have been retrieved in 2009 from the
[ImageJ website](http://imagej.nih.gov/ij/) using
[html2text](http://www.mbayer.de/html2text/). Since then, it has been
complemented and updated using informations posted on the [ImageJ
mailing list](http://imagej.nih.gov/ij/list.html), [ImageJ Documentation
Portal](http://imagejdocu.tudor.lu/doku.php?id=start),
[Fiji](http://fiji.sc/wiki/index.php/Fiji),
[ImageJ](http://imagej.nih.gov/ij/), and
[ImageJDev](http://developer.imagej.net/) websites and Tony Collins
*[ImageJ for Microscopy](http://www.macbiophotonics.ca/imagej/)* manual.
Nevertheless, because there has never been accompanying documentation
for some of the 350+ described commands, several sections have been
written from scratch based on the relevant [ImageJ source
code](http://imagej.nih.gov/ij/developer/source/index.html)* *and
authors own experience. Legacy nomenclature that became obsolete with
version <span>1.46r</span> has been intentionally omitted.

The guide was typeset with TeXLive2012 on Mac OS10.6.8. All
illustrations were created with ImageJ/Fiji, loaded with G. Landini’s
[IJ Robot](http://fiji.sc/wiki/index.php/IJ_Robot) and J. Schindelin’s
[Tutorial Maker](http://fiji.sc/wiki/index.php/Tutorial_Maker) plugins.
Screenshots were produced by the <span>`screencapture`</span> shell
utility controlled by the following IJ macro:

    exec("screencapture -ciWo > /dev/null 2>&1 &"); run("System Clipboard");
     setLineWidth(1); setForegroundColor(111, 121, 132);
     drawRect(0, 0, getWidth, getHeight);

The HTML version was produced with [eLyXer
1.2](http://elyxer.nongnu.org/) and formatted using CSS code from Alex
Fern·ndez and Michael H¸neburg; JavaScript code from Ciar·n O’Kelly,
Stuart Langridge and Tiago Ferreira. It uses
[SyntaxHighlighter](http://alexgorbatchev.com/SyntaxHighlighter/) and
icons from the [Tango Desktop
Project](http://tango.freedesktop.org/Tango_Desktop_Project).

Getting Involved[sub:Getting-Involved] {#getting-involvedsubgetting-involved .unnumbered}
--------------------------------------

Your help is needed to improve ImageJ. Even if you are not a programmer,
your participation is important:

-   Are you a skilled ImageJ user?\
    You might want to help out with the documentation effort: Write a
    FAQ, How-To, Tutorial or [Video
    Tutorial](http://imagejdocu.tudor.lu/doku.php?id=video:start) on the
    [ImageJ Documentation
    Portal](http://imagejdocu.tudor.lu/doku.php?id=howto:general:how_to_use_this_documenation_wiki);
    Help us updating the ImageJ User Guide; Share the add-ons you may
    have created with the community; Subscribe the [mailing
    list](http://imagej.nih.gov/ij/list.html) and help answering the
    questions raised by other users.

-   Are you know knowledgeable in image processing?\
    Please join the [mailing list](http://imagej.nih.gov/ij/list.html)
    and participate in the discussions. You could also write a Tutorial
    on the [ImageJ Documentation
    Portal](http://imagejdocu.tudor.lu/doku.php?id=howto:general:how_to_use_this_documenation_wiki).

-   Do you have a strong scientific background?\
    Frequently, the most demanding tasks in scientific image processing
    relate to experimental design. Even if you do not have special
    expertise in image processing, by participating on the [mailing
    list](http://imagej.nih.gov/ij/list.html) discussions, your
    experience will be valuable to others.

-   Do you want ImageJ to improve?\
    You can report bugs or request new features using the [mailing
    list](http://imagej.nih.gov/ij/list.html).

-   Do you have experience in graphic/web design?\
    If you are able to to improve the look and feel of the guide we
    welcome your skills.

The ImageJ Icon[sec:About-the-Cover] {#the-imagej-iconsecabout-the-cover .unnumbered}
------------------------------------

The Hartnack microscope (*ca*. 1870’s) depicted on the front page
inspired the [ImageJ icon for Mac OS
X](http://imagej.nih.gov/ij/docs/install/osx.html#icon). It is based on
a [photograph](http://www.arsmachina.com/s-hart1209.htm) by [Tom
Grill](http://www.tomgrill.com/) at
[arsmachina.com](http://www.arsmachina.com/).

Edmund Hartnack (1826–1891) was a renown microscope manufacturer that
pioneered the use of correction collars in water-immersion lenses and
the adoption of the substage condenser[^11]. The precision and
robustness of Hartnack optics played a pivotal role in the
groundbreaking research by the Nobel laureates Robert Koch[^12], Camillo
Golgi[^13] and Santiago RamÛn y Cajal[^14].

Document Revision History[sec:Document-Revision-History] {#document-revision-historysecdocument-revision-history .unnumbered}
========================================================

<span>\>p<span>0.19</span>\>p<span>0.72</span></span> & <span>\
</span>September/October 2012 & Reviewed by Michael Schmid<span>\
</span>July 2012 & Updated for v1.46r\
Reviewed by Barry DeZonia<span>\
</span>June 2012 & Updated for v1.46p\
Second major revision with new sections on overlays, 3D volumes,
sub-pixel selections, curve fitting and interface customizations\
Improvements in layout and browsability<span>\
</span>September 2011 & Updated for v1.45\
Deeply revised edition with several new sections in Parts I–IV\
Available as printable booklets\
Redesigned HTML version <span>\
</span>January 2011 & Updated for v1.44\
New sections on advanced ImageJ usage, Fiji scripting, command line
usage and interoperability with other software packages<span>\
</span>May 2010 & First HTML version<span>\
</span>April 2010 & First edition: v1.43<span>\
</span>

Acknowledgments {#acknowledgments .unnumbered}
---------------

We are extremely grateful to Alex Fern·ndez for his wonderful
[eLyXer](http://elyxer.nongnu.org/), Alex Gorbatchev for
[SyntaxHighlighter](http://alexgorbatchev.com/SyntaxHighlighter/),
Johannes Schindelin for assistance with the [Git
repository](http://fiji.sc/guide.git), Norbert Vischer for critical
corrections and Michael Schmid and Barry DeZonia for thorough revisions.
We are also thankful to all of those who submitted criticisms,
suggestions and encouragement to update this edition. But above all, our
thanks go to the extraordinary ImageJ community for its dedication to
the project.

[^1]: A somehow outdated list of ImageJ’s features is available at
    <http://imagej.nih.gov/ij/features.html>

[^2]: Certain plugins, however, provide self-updating mechanisms (e.g.,
    [ObjectJ](http://simon.bio.uva.nl/objectj/) and the [OME
    Bio-Formats](http://loci.wisc.edu/software/bio-formats)).

[^3]: A numeric variable is signed if it can represent both positive and
    negative numbers, and unsigned if it can only represent positive
    numbers.

[^4]: This section is partially extracted from the MBFImageJ online
    manual at
    <http://www.macbiophotonics.ca/imagej/colour_image_processi.htm>.

[^5]: *See* Wootton R, Springall DR, Polak JM. Image Analysis in
    Histology: Conventional and Confocal Microscopy. *Cambridge
    University Press*, 1995*,* ISBN 0521434823

[^6]: This section is partially extracted from Masataka Okabe and Kei
    Ito, *Color Universal Design (CUD) — How to make figures and
    presentations that are friendly to Colorblind people*,
    <http://jfly.iam.u-tokyo.ac.jp/color/>, accessed 2009.01.15

[^7]: One advantage of Dichromacy over the Vischeck plugin is that it
    can be recorded and called from scripts and macros, without user
    interaction.

[^8]: <span>CodeBar is a convenient ‘ActionBar’ that retrieves snippets
    and common tasks frequently used in macro writing. ‘ActionBars’
    provide one or many easy to use button bar(s) that extend ImageJ’s
    graphical user interface. You can read more about the ActionBar
    plugin at the [ImageJ Documentation
    Portal](http://imagejdocu.tudor.lu/doku.php?id=plugin:utilities:action_bar:start).</span>

[^9]: Although outdated, the [ImageFFT
    documentation](http://imagej.nih.gov/ij/download/docs/ImageFFT/FFT-docs.pdf)
    summarizes important frequency domain methodologies.

[^10]: This shortcut is shown on Windows and Linux but not on Mac OSX as
    it conflicts with the system wide ‘Hide’ shortcut. However, the
    shortcut (without holding down ) does work on OSX.

[^11]: Merico, G. Microscopy in Camillo Golgi’s times.* J Hist
    Neurosci,* (2003) 8(2):113–20

[^12]: Brock, TD*. *Robert Koch, A life in medicine and* *bacteriology.*
    ASM,* 1999

[^13]: Brenni P. Gli strumenti di fisica dell’Istituto Tecnico Toscano –
    Ottica. *IMSS*, 1995

[^14]: DeFelipe & Jones. Santiago RamÛn y Cajal and methods in
    neurohistology. *Trends Neurosci*, (1992) 15(7):237–46
