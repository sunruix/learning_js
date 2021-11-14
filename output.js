function output() {
    document.write("<hr /><span style='font-family:Menlo; font-size:larger'>");
    for (let i in arguments) {
        document.write(arguments[i], " ");
    }
    document.write("</span>");
    msg = 1234;
}
output(msg);