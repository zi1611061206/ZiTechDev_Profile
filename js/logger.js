//https://tuandc.com/lap-trinh/huong-dan-tao-from-gui-du-lieu-tu-website-len-google-sheet-khong-dung-google-forms.html?fbclid=IwAR2IuKnUXZjW5IxbB0SBjdNuWXKr8Yi74me90YBWiYoJn4ihxOdKZ3zxKqo
$(document).ready(function () {

    let ipValue = getIP();
    function getIP() {
        if (window.XMLHttpRequest) xmlhttp = new XMLHttpRequest();
        else xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
        xmlhttp.open("GET", "https://api.ipify.org?format=json", false);
        xmlhttp.send();
        return xmlhttp.responseText.split('"')[3];
    }

    function setLog(actionValue) {
        let date = new Date();
        let dateValue = date.getDate() + '-' + (parseInt(date.getMonth()) + 1) + '-' + date.getFullYear();
        let timeValue = date.getHours() + 'h' + date.getMinutes() + 'm' + date.getSeconds() + 's';
        $('#logger-date').val(dateValue);
        $('#logger-time').val(timeValue);
        $('#logger-ip').val(ipValue);
        $('#logger-action').val(actionValue);
        submitData();
    }

    function submitData() {
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
    }

    setLog('page load');
    $('a').on('click', function (e) {
        let content = $(this).attr('href');
        setLog(content);
    });

});