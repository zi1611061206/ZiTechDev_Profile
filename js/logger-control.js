// var date = new Date();
// var day = date.getDate();
// var month = date.getMonth();
// var year = date.getFullYear();
// var hour = date.getUTCHours();
// var minute = date.getUTCMinutes();
// var second = date.getUTCSeconds();
// var milisec = date.getUTCMilliseconds();
// var timeZone = date.getTimezoneOffset();
// return clientIp + "-" +
//     day + "-" +
//     month + "-" +
//     year + "-" +
//     hour + "-" +
//     minute + "-" +
//     second + "-" +
//     milisec + "-" +
//     timeZone;

$.get('https://api.ipify.org', function (data) {
    $('#ip-address').text(data);
});

$(document).scroll(function () {
    var ip = $('#ip-address').text();
    if(ip != null || ip != ''){
        
    }
});
