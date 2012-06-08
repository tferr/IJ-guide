#!/bin/sh
## TF 2012

### Paths and settings
  ## The path to the lyx executable
    LYXPATH=/Applications/LyX.app/Contents/MacOS/lyx
  ## The path to the elyxer executable
    ELYXERPATH=./elyxer/elyxer.py
  ## The path to the HTML TOC template
    HTMLTEMPLATETOC=./html/template-toc.html
  ## The path to the main HTML template
    HTMLTEMPLATE=./html/template.html
  ## The main LyX file for the HTML version
    LYXHTMLFILE=./lyx/user-guide-html.lyx
  ## The common name to all the pages
    HOMEPAGE=146.html
  ## IJ version to appear in page titles
    EDITION="IJ 1.46p"

    echo "  $(date), Creating guides for $EDITION:"

### Create PDF versions
    read -p "  Create PDF edition? (y/n) " -n 1 -r
    echo ""
    START=$(date +%s)
    if [[ $REPLY =~ ^[Yy]$ ]]
    then
        ### Check if pdflatex exists (Hopefully a full texlive installation will also exist)
        echo "  -->  Detecting pdflatex..."
        type -P pdflatex &>/dev/null || { echo "  -->  pdflatex not found. Exiting..." >&2; exit 1;}

        ### Run the lyx>tex conversion. Requires lyx
        if [ ! -f $LYXPATH ]
        then
            echo "  -->  $LYXPATH does not exist. Could not run LyX2TeX..."
        else
            echo "  -->  Running LyX2TeX. Please wait..."
            `$LYXPATH --force-overwrite --export pdflatex ./lyx/user-guide.lyx &>/dev/null`
        fi

        ### Clean lyx temporary files
        echo "  -->  $(( $(date +%s) - $START))s. Cleaning lyx directory..."
        rm -f ./lyx/*.lyx~ ./lyx/*.lyx#

        ### Move the converted tex files to the dedicated tex directory
        TEXFILES=$(ls ./lyx/*.tex 2> /dev/null | wc -l)
        if [ "$TEXFILES" != "0" ]
        then
            echo "  -->  Moving converted files to tex directory..."
            mv -f ./lyx/*.tex ./tex/
        fi

        ### Compile main document
        cd ./tex
        STEP=$(date +%s)
        echo "  -->  Compiling main PDF. Please wait..."
        pdflatex -interaction=nonstopmode -synctex=0 ./user-guide &>/dev/null
        echo "  -->  Creating Bibliography..."
        bibtex -terse user-guide.aux &>/dev/null
        echo "  -->  Making Index..."
        makeindex -q user-guide &>/dev/null
        echo "  -->  Creating Nomenclature..."
        makeindex -q user-guide.nlo -s nomencl.ist -o user-guide.nls &>/dev/null
        echo "  -->  $(( $(date +%s) - $STEP))s. Validating index, refs, bookmarks, etc. in 2 runs. Please wait..."
        STEP=$(date +%s)
        pdflatex -interaction=nonstopmode -synctex=0 ./user-guide &>/dev/null
        pdflatex -interaction=nonstopmode -synctex=0 ./user-guide &>/dev/null

        ### Compile booklets
        echo "  -->  $(( $(date +%s) - $STEP))s. Creating A4 Booklet. Please wait..."
        STEP=$(date +%s)
        pdflatex user-guide-A4booklet &>/dev/null
        echo "  -->  $(( $(date +%s) - $STEP))s. Creating US Booklet. Please wait..."
        STEP=$(date +%s)
        pdflatex user-guide-USbooklet &>/dev/null

        ### Cleanup aux files
        echo "  -->  $(( $(date +%s) - $STEP))s. Cleaning auxiliary files..."
        rm -f *.aux *.bbl *.blg *.idx *.ilg *.ind *.lo[gil] *.nl[os] *.out *.synctex* *.tdo *.toc

        ### Move compiled documents to parent folder
        echo "  -->  Moving pdf files to guide folder..."
        mv -f *.pdf ../guide/
        cd ..
    fi

### Create HTML version
    STARTPAUSE=$(date +%s)
    read -p "  Create HTML edition? (y/n) " -n 1 -r
    echo ""
    ENDPAUSE=$(date +%s)

    if [[ $REPLY =~ ^[Yy]$ ]]
    then
        ## We'll cd to the output directory. elyxer will read image dimensions from the images/ subfolder
        ## containing previously resized images using Resize_snapshots.ijm
        echo "  -->  Running elyxer. Please wait..."
        cd ./guide
        STEP=$(date +%s)
        python $ELYXERPATH --noconvert --title "$EDITION" --template $HTMLTEMPLATE --css=css/guide.css --splitpart 1  $LYXHTMLFILE $HOMEPAGE > /dev/null 2>&1

        ### Create the table of contents. The depth is specified in lyx
        echo "  -->  $(( $(date +%s) - $STEP))s. Creating HTML TOC. Please wait..."
        STEP=$(date +%s)
        python $ELYXERPATH --template $HTMLTEMPLATETOC --css=css/tocmenu.css --nofooter --notoclabels --tocfor $HOMEPAGE --target="_top" --splitpart 1 --title "Table of Contents" $LYXHTMLFILE toc.html > /dev/null 2>&1

        ## duplicate homepage as index.html
        echo "  -->  $(( $(date +%s) - $STEP))s. Creating index.html..."
        if [ -f $HOMEPAGE ]; then
            cp $HOMEPAGE index.html
        fi
    fi

    echo "  Done. Guides for $EDITION created in $(( $(date +%s) - $START - ($ENDPAUSE - $STARTPAUSE))) seconds."