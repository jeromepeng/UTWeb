
function VMIndex() {
    var self = this;
    self.isShowButton = ko.observable(false);//observable property shouldn't declare as "var isShowButton = ko.observable(false);", if do so, the code "self.isShowButton(true);" won't work
    self.OnChange = function () {
        var selectString = $('#AppType').val();
        if (selectString === 'JavaScript') {
            alert('JS');
            self.isShowButton(true);//should be like this rather than "self.isShowButton = ko.observable(true);"
        }
        else if (selectString === 'DLL') {
            alert('Dll');
            self.isShowButton(false);
        };
    }
}
ko.applyBindings(new VMIndex());