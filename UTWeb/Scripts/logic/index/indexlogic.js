

function IndexVM() {
    this.ShowUploadButton = ko.observable(false);

    var OnChange = function () {
        var selectString = $('#AppType').val();
        if (selectString === 'JavaScript') {
            alert('JS');
            ThisVM.ShowUploadButton = ko.observable(true);
        }
        else if (selectString === 'DLL') {
            alert('Dll');
            ThisVM.ShowUploadButton = ko.observable(false);
        };
    };
}

var ThisVM = new IndexVM();



ko.applyBindings(ThisVM);