#The ImageJ User Guide
This repository contains all things related to the [ImageJ User Guide](http://imagej.nih.gov/ij/docs/guide/).


##Typesetting
See [README](./README) for instructions on how to build the guide.


## Contributing
Want to contribute? Great! Here is what you can do:


### You have a concrete suggestion
Check that your proposal has not been mentioned [previously][issues]. Then, try one of the following:

  1. If you already use GitHub, create a new [issue][issues] or a [pull request][pulls]
  2. Otherwise, share it using the [IJ mailing list][list]. A simple subject line "_User Guide Suggestion: XX_" should work


### You’d like to help out but aren’t sure how
Looking for something to do? Great! Pick something that looks interesting from the [issues list][issues]. Then, use one of the approaches mentioned above


## You’d like to see alternative implementations of the guide
Have a look at the [alt-versions folder][./alt-versions/]. For example, a markdown version was generated using [pandoc](http://johnmacfarlane.net/pandoc/):

       latexpand ./user-guide.tex > guide.tex
       iconv -f MACROMAN -t UTF-8 guide.tex > guide.tex
       pandoc -f latex -t markdown ./guide.tex > guide.md


## Pre-releases
Not yet available


## Related links
  - [Fiji Cookbook](http://fiji.sc/Cookbook) and [respective plugins](https://github.com/fiji/cookbook)
  - [Fiji website](http://fiji.sc/)
  - [ImageJ Documentation Resources](http://imagej.nih.gov/ij/docs/index.html)
  - [ImageJ Information and Documentation Portal](http://imagejdocu.tudor.lu)


[pulls]: https://github.com/tferr/IJ-guide/pulls
[issues]: https://github.com/tferr/IJ-guide/issues
[list]: https://list.nih.gov/cgi-bin/wa.exe?A0=IMAGEJ
