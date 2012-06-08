//              ImageJ User Guide - offline version
//          http://imagej.nih.gov/ij/docs/user-guide.zip
//
// Browsing the guide requires a modern browser supporting XHTML, Unicode,
// and at least CSS2. It also requires JavaScript and storage of local
// cookies to be enabled. After extracting user-guide.zip into the ImageJ
// folder, the macros below can be used to open the guide from within IJ

macro "Open User Guide (HTML)" {
    path = getDirectory("imagej") + "guide/index.html";
    if (File.exists(path)) {
        path = replace(path, " ", "%20");
        os = getInfo("os.name");
        if (startsWith(os, "Windows"))
            path = "/" + replace(path, File.separator, "/");
        run("URL...", "url=file://" + path);
    }
}

macro "Open User Guide (PDF)" {
    path = getDirectory("imagej") + "guide/user-guide.pdf";
    os = getInfo("os.name");
    win = startsWith(os, "Windows");
    if (win)
        path= replace(path, "/", "\\");
    else
        path= replace(path, " ", "\\ ");
    if (File.exists(path)) {
        if (win)
            exec("cmd /c C:\\Windows\\explorer.exe \""+ path +"\"");
        else if (startsWith(os, "Mac"))
            exec("open", path);
        else // linux
            exec("xdg-open", path);
    } else
        showStatus("Could not retrieve "+ path);
}