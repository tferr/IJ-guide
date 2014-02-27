#!/bin/sh

## This successfully built the IJ User guide on a fresh install of lubuntu 13.10 (on a
## virtual machine) immediately after running:
##
##		$ sudo apt-get install lyx
##		$ sudo apt-get install git-core
##		$ cd /home/test
##		$ git clone git://github.com/tferr/IJ-guide.git
##
## Caveats: The guide compiles without scalable fonts and without bibliography ("plainurl"
## is missing)

GUIDEPATH="/home/test/IJ-guide"
LYXLIBDIR="/usr/share/lyx"
LYXUSERDIR="/home/test/.lyx"

# 1) symlink IJguide.module into lyx's user path ("~/.lyx/" by default)
ln -f -s $GUIDEPATH/lyx/IJguide.module $LYXUSERDIR/layouts/

# 2) make sure lyx sees the IJguide.module by running LyX "Tools>Reconfigure" command
cd $LYXUSERDIR
python $LYXLIBDIR/configure.py

# 3) run LyX2TeX
cd $GUIDEPATH
lyx --force-overwrite --export pdflatex ./lyx/user-guide.lyx

# 4) clean any temp files
rm -f ./lyx/*.lyx[~\#]

# 5) move tex files to the dedicated tex directory
mv -f ./lyx/*.tex ./tex/

# 6) compile guide. This will take a while
cd $GUIDEPATH/tex

# 1st run
pdflatex -interaction=nonstopmode user-guide

# create bibliography. This will only work if the bibliographic style is present
bibtex -terse user-guide.aux

# create index
makeindex -q user-guide

# create nomenclature
makeindex -q user-guide.nlo -s nomencl.ist -o user-guide.nls

# validate everything
pdflatex -interaction=nonstopmode user-guide
pdflatex -interaction=nonstopmode user-guide

# compile booklets
pdflatex user-guide-A4booklet
pdflatex user-guide-USbooklet

# 7) cleanup: remove .tex files (only LyX2TeX conversions) and all aux files
##rm -f *.aux *.bbl *.blg *.idx *.ilg *.ind *.lo[gil] *.nl[os] *.out *.synctex* *.tdo *.toc
shopt -s extglob
rm !(*booklet.tex|images|*.bib|*.pdf)
