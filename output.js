function output() {
    document.write("<hr /><font size=\"5\" face=\"Menlo\">");
    for (let i in arguments) {
        document.write(arguments[i], " ");
    }
    document.write("</font>");
}