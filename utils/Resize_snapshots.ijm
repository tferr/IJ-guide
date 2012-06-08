// Resize images for the HTML version of the user guide.
// (initial snapshots acquired on a 1280x800 display)

    maxW= 800; scale= 0.8;
    w= getWidth(); h= getHeight();
    if (w*scale>maxW) scale = maxW/w;
    w*= scale; h*= scale;
    run("Size...", "width=&w height=&h average interpolation=Bicubic");
