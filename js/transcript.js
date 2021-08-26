$(document).ready(function () {

    function submitDataTranscript() {
        let date = new Date();
        let dateValue = date.getDate() + '-' + (parseInt(date.getMonth()) + 1) + '-' + date.getFullYear();
        let timeValue = date.getHours() + 'h' + date.getMinutes() + 'm' + date.getSeconds() + 's';
        $('#transcript-date').val(dateValue);
        $('#transcript-time').val(timeValue);

        var data = $('#transcript-form').serialize();
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

    $('#transcript-submit').on('click', function(e){
        submitDataTranscript();
        $('#transcript-cancel').click();
    });

});