/**
 * SyntaxHighlighter
 * http://alexgorbatchev.com/SyntaxHighlighter
 *
 * Brush for the ImageJ macro language
 * http://imagej.nih.gov/ij/docs/guide/sh/scripts/shBrushIJmacro.js
 * IJ 1.46N Tiago Ferreira 2012.05.15
 */ 
;(function() {
    typeof(require) != 'undefined' ? SyntaxHighlighter = require('shCore').SyntaxHighlighter : null;

    function Brush() {
        var keywords =  'do else false for function if macro null return true var while';
        var functions = 'abs acos Array.concat Array.copy Array.fill Array.getStatistics Array.print Array.rankPositions Array.reverse Array.slice Array.sort Array.trim asin atan atan2 autoUpdate beep bitDepth calibrate call changeValues charCodeAt close cos d2s Dialog.create Dialog.addMessage Dialog.addString Dialog.addNumber Dialog.addSlider Dialog.addCheckbox Dialog.addCheckboxGroup Dialog.addChoice Dialog.addHelp Dialog.setInsets Dialog.show Dialog.getString Dialog.getNumber Dialog.getCheckbox Dialog.getChoice doCommand doWand drawLine drawOval drawRect drawString dump endsWith eval exec exit exp Ext File.append File.close File.dateLastModified File.delete File.directory File.exists File.getName File.getParent File.isDirectory File.lastModified File.length File.makeDirectory File.name File.nameWithoutExtension File.open File.openAsString File.openAsRawString File.openUrlAsString File.openDialog File.rename File.saveString File.separator fill fillOval fillRect Fit.doFit Fit.rSquared Fit.p Fit.nParams Fit.f Fit.nEquations Fit.getEquation Fit.plot Fit.logResults Fit.showDialog floodFill floor fromCharCode getArgument getBoolean getBoundingRect getCursorLoc getDateAndTime getDimensions getDirectory getDisplayedArea getFileList getHeight getHistogram getImageID getImageInfo getInfo getLine getList getLocationAndSize getLut getMetadata getMinAndMax getNumber getPixel getPixelSize getProfile getRawStatistics getResult getResultLabel getSelectionBounds getSelectionCoordinates getSliceNumber getStatistics getString getStringWidth getThreshold getTime getTitle getValue getVoxelSize getVersion getWidth getZoom IJ.deleteRows IJ.getToolName IJ.freeMemory IJ.currentMemory IJ.log IJ.maxMemory IJ.pad IJ.redirectErrorMessages IJ.renameResults imageCalculator indexOf is isActive isKeyDown isNaN isOpen lastIndexOf lengthOf lineTo List.set List.get List.getValue List.size List.clear List.setList List.getList List.setMeasurements List.setCommands log makeEllipse makeLine makeOval makePoint makePolygon makeRectangle makeSelection makeText matches maxOf minOf moveTo newArray newImage newMenu nImages nResults nSlices open Overlay.moveTo Overlay.lineTo Overlay.drawLine Overlay.add Overlay.setPosition Overlay.drawRect Overlay.drawEllipse Overlay.drawString Overlay.show Overlay.hide Overlay.hidden Overlay.remove Overlay.size Overlay.removeSelection Overlay.copy Overlay.paste parseFloat parseInt PI Plot.create Plot.setLimits Plot.setFrameSize Plot.setLineWidth Plot.setColor Plot.add Plot.addText Plot.setJustification Plot.drawLine Plot.show Plot.update Plot.getValues pow print random rename replace requires reset resetMinAndMax resetThreshold restorePreviousTool restoreSettings roiManager round run runMacro save saveAs saveSettings screenHeight screenWidth selectionContains selectionName selectionType selectImage selectWindow setAutoThreshold setBackgroundColor setBatchMode setColor setFont setForegroundColor setJustification setKeyDown setLineWidth setLocation setLut setMetadata setMinAndMax setOption setPasteMode setPixel setResult setRGBWeights setSelectionLocation setSelectionName setSlice setThreshold setTool setupUndo setVoxelSize setZCoordinate showMessage showMessageWithCancel showProgress showStatus sin snapshot split sqrt Stack.isHyperstack Stack.getDimensions Stack.setDimensions Stack.setChannel Stack.setSlice Stack.setFrame Stack.getPosition Stack.setPosition Stack.getFrameRate Stack.setFrameRate Stack.getFrameInterval Stack.setFrameInterval Stack.getUnits Stack.setTUnit Stack.setZUnit Stack.setDisplayMode Stack.getDisplayMode Stack.setActiveChannels Stack.getActiveChannels Stack.swap Stack.getStatistics startsWith String.resetBuffer String.append String.buffer String.copy String.copyResults String.getResultsHeadings String.paste substring tan toBinary toHex toLowerCase toolID toScaled toUnscaled toString toUpperCase updateDisplay updateResults wait waitForUser';
        var r = SyntaxHighlighter.regexLib;
        this.regexList = [
            { regex: r.multiLineDoubleQuotedString,                 css: 'string' },    // double quoted strings
            { regex: r.multiLineSingleQuotedString,                 css: 'string' },    // single quoted strings
            { regex: r.singleLineCComments,                         css: 'comments' },  // one line comments
            { regex: r.multiLineCComments,                          css: 'comments' },  // multiline comments
            { regex: new RegExp(this.getKeywords(keywords), 'gm'),  css: 'keyword' },   // keywords
            { regex: /\b([\d]+(\.[\d]+)?|0x[a-f0-9]+)\b/gi,         css: 'value' },     // numbers
            { regex: /([+\-!=|~^><*\/])|(?:&(amp;|gt;|lt;))/gi,     css: 'color1' },    // operators
            { regex: /[\(\)\{\}\[\]]/gi,                            css: 'color2' },    // brackets
            { regex: new RegExp(this.getKeywords(functions), 'gm'), css: 'functions' }  // IJ built-in functions
            ];
        this.forHtmlScript(r.scriptScriptTags);
    };
    Brush.prototype = new SyntaxHighlighter.Highlighter();
    Brush.aliases   = ['ij', 'ijm'];
    SyntaxHighlighter.brushes.IJmacro = Brush;
    typeof(exports) != 'undefined' ? exports.Brush = Brush : null;
})();