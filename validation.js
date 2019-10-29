function onlyNumbers(evt) {
    var e = window.event || evt;
    var charCode = e.which || e.keyCode;
    if (charCode > 47 && charCode < 58)
        return true;
    else
        return false;
}