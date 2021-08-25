//https://tuandc.com/lap-trinh/huong-dan-tao-from-gui-du-lieu-tu-website-len-google-sheet-khong-dung-google-forms.html?fbclid=IwAR2IuKnUXZjW5IxbB0SBjdNuWXKr8Yi74me90YBWiYoJn4ihxOdKZ3zxKqo
$(document).ready(function () {
    
    var ipValue = getIP();
    function getIP() {
        if (window.XMLHttpRequest) xmlhttp = new XMLHttpRequest();
        else xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
        xmlhttp.open("GET", "https://api.ipify.org?format=json", false);
        xmlhttp.send();
        return xmlhttp.responseText.split('"')[3];
    }

    var submit = $('#logger-submit');
    function setLog(actionValue) {
        var date = new Date();
        var dateValue = date.getDate() + '-' + date.getMonth() + '-' + date.getFullYear();
        var timeValue = date.getHours() + 'h' + date.getMinutes() + 'm' + date.getSeconds() + 's';
        $('#logger-date').val(dateValue);
        $('#logger-time').val(timeValue);
        $('#logger-ip').val(ipValue);
        $('#logger-action').val(actionValue);
        submit.click();
    }

    submit.click(function () {
        var data = $('#logger-form').serialize();
        $.ajax({
            type: 'GET',
            url: 'https://script.google.com/macros/s/AKfycbys4nX2gZmFMsAmlsY_A6qfZDaihXAaREDwYTNQo-FcM8AMm-0/exec',
            dataType: 'json',
            crossDomain: true,
            data: data,
            success: function (data) {
                if (data == 'false') {
                    //alert('Thêm không thành công, bạn cũng có thể sử dụng để hiển thị Popup hoặc điều hướng');
                } else {
                    //alert('Đã thêm dữ liệu vào Form');
                }
            }
        });
        return false;
    });

    $('body').load(setLog('page load'));
});