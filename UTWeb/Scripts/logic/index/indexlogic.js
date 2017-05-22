
function VMIndex() {
    var self = this;
    self.isShowButton = ko.observable(false);//observable property shouldn't declare as "var isShowButton = ko.observable(false);", if do so, the code "self.isShowButton(true);" won't work
    self.onChange = function () {
        var selectString = $('#appType').val();
        if (selectString === 'JavaScript') {
            self.isShowButton(true);//should be like this rather than "self.isShowButton = ko.observable(true);"
        }
        else if (selectString === 'DLL') {
            self.isShowButton(false);
        };
    }
    self.runJS = function() {
        var myScript = document.createElement("script");
        myScript.type = "text/javascript";
        myScript.appendChild(document.createTextNode($('#jsTextArea').val()));
        document.body.appendChild(myScript);
        //此处发现可以运行
        mainFunction();
    };
}
ko.applyBindings(new VMIndex());

