/* Prints all ImageJ macro language kewords from functions.html
   Below is a list of some 'Left' and 'Right' keyword delimiters
   adapted for the mentioned editors:

 .plist (Smultron, BBEdit, TexWrangler)
      delimiterL = "		<string>"; delimiterR = "</string>\n";
  xclangspec (Xcode)
      delimiterL = "                \""; delimiterR = "\",\n";
  Space separated list (SyntaxHighlighter, Editra, JCodeCollector)
      delimiterL = ""; delimiterR = " ";
  Comma separated list (TeX listings package)
      delimiterL = ""; delimiterR = ",";
  Paragraph separated list
      delimiterL = ""; delimiterR = "\n";
*/

delimiterL = ""; delimiterR = ", ";

// adapted from FunctionFinder.java
f = File.openAsString(getDirectory('macros')+'functions.html');
l = split(f, "\n");
rawFunctions = newArray(l.length);
c1 = 0;
for (i=0; i<l.length; i++) {
    line = l[i];
    // extract the functions
    showProgress(i, l.length);
    if (startsWith(line, "<b>")) {
        // for syntax highlighting we have to get rid of function arguments
        bracket = lastIndexOf(line, "(");
        if (bracket==-1)
            bracket = indexOf(line, "</b>");
        rawFunctions[c1++]= substring(line, indexOf(line, "<b>")+3, bracket);
    }
}

// Since we got rid of arguments there are now duplicates that need to be removed
functions1 = Array.trim(rawFunctions, c1);
functions2 = newArray(c1);
c2 = 0;
for (i=0; i<c1; i++) {
    temp = functions1[i];
    for (j=1; j<c1; j++)
        if (functions1[j]==temp) functions1[j]="dup";
        if (temp!="dup") functions2[c2++] = temp;
}

functions3 = Array.trim(functions2, c2);
print("\\Clear");
final = "";
for (i=0; i<c2; i++)
   final = final+ delimiterL + functions3[i] + delimiterR;
if (delimiterL=="")
   final = substring(final, 0, lastIndexOf(final, delimiterR));
print(final);

showMessage('functions.html',l.length +' lines parsed\n  '+c1+
            ' functions detected\n  '+c2+ ' keywords extracted');
