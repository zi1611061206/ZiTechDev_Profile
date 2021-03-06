(function ($) {
    // Chỉ thị "sử dụng nghiêm ngặt"
    // Các "use strict"chỉ thị là mới trong ECMAScript phiên bản 5.
    // Nó không phải là một câu lệnh, mà là một biểu thức theo nghĩa đen, bị các phiên bản JavaScript trước đó bỏ qua.
    // Mục đích của "use strict"là để chỉ ra rằng mã phải được thực thi ở "chế độ nghiêm ngặt".
    // Ví dụ: với chế độ nghiêm ngặt, bạn không thể sử dụng các biến chưa được khai báo.
    // Tất cả các trình duyệt hiện đại đều hỗ trợ "sử dụng nghiêm ngặt" ngoại trừ Internet Explorer 9 trở xuống
    // "use strict"; // Xác định rằng mã JavaScript phải được thực thi ở "chế độ nghiêm ngặt".

    // Hoạt ảnh gõ tự động
    if ($('.content-inner .show-text').length == 1) {
        var typed_strings = $('.content-inner .typed-text').text() + '^1000'; // Dừng 1s rồi gõ phần tử tiếp theo (nếu có)
        var typed = new Typed('.content-inner .show-text', {
            strings: typed_strings.split(', '), // Nội dung gõ
            typeSpeed: 50, // Tốc độ gõ (ms)
            backSpeed: 10, // Tốc độ xóa (ms)
            startDelay: 0, // Độ trễ trước khi bắt đầu gõ (ms)
            shuffle: false, // Không cho phép thay đổi thứ tự gõ strings
            smartBackspace: false, // Chế độ xóa có chọn lọc
            backDelay: 1000, // Thời gian chờ khi xóa (ms)
            fadeOut: false, // Làm mờ thay vì xóa lùi
            fadeOutClass: 'typed-fade-out', // Chỉ định lớp css cho hoạt ảnh mờ dần
            fadeOutDelay: 500, // Độ trễ làm mờ (ms)
            loop: true, // Bật vòng lặp strings
            loopCount: Infinity, // Số vòng lặp (Infinity - vô cực)
            showCursor: true, // Hiển thị con trỏ
            cursorChar: '|', // Ký tự đại diện con trỏ
            autoInsertCss: true, // Tự động chèn CSS cho con trỏ và fadeOut vào HTML <head>
            attr: null, // Thuộc tính để gõ (ex: placeholder, value, HTML text)
            bindInputFocusEvents: false, // Liên kết với tiêu điểm và làm mờ nếu el là đầu vào văn bản
            contentType: 'html', // contentType 'html' hoặc 'null' cho chuỗi trần
            onBegin: (self) => { }, // Hàm sự kiện trước khi bắt đầu gõ
            onComplete: (self) => { }, // Hàm sự kiện khi gõ hoàn tất
            preStringTyped: (arrayPos, self) => { }, // Hàm sự kiện trước mỗi phần tử được gõ
            onStringTyped: (arrayPos, self) => { }, // Hàm sự kiện sau mỗi phần tử được gõ
            onLastStringBackspaced: (self) => { }, // Hàm sự kiện sau phần tử cuối cùng được gõ
            onTypingPaused: (arrayPos, self) => { }, // Hàm sự kiện tạm dừng gõ
            onTypingResumed: (arrayPos, self) => { }, // Hàm sự kiện tiếp tục gõ
            onReset: (self) => { }, // Hàm sự kiện sau khi reset
            onStop: (arrayPos, self) => { }, // Hàm sự kiện sau khi dừng gõ
            onStart: (arrayPos, self) => { }, // Hàm sự kiện sau khi bắt đầu
            onDestroy: (self) => { } // Hàm sự kiện sau khi hủy
        });
    }
    
    if ($('.zi-sign div').length == 1) {
        var typed_strings = $('.zi-sign div').text() + '^1000'; // Dừng 1s rồi gõ phần tử tiếp theo (nếu có)
        var typed = new Typed('.zi-sign h3', {
            strings: typed_strings.split(', '), // Nội dung gõ
            typeSpeed: 500, // Tốc độ gõ (ms)
            backSpeed: 1, // Tốc độ xóa (ms)
            startDelay: 0, // Độ trễ trước khi bắt đầu gõ (ms)
            shuffle: false, // Không cho phép thay đổi thứ tự gõ strings
            smartBackspace: false, // Chế độ xóa có chọn lọc
            backDelay: 1000, // Thời gian chờ khi xóa (ms)
            fadeOut: true, // Làm mờ thay vì xóa lùi
            fadeOutClass: 'typed-fade-out', // Chỉ định lớp css cho hoạt ảnh mờ dần
            fadeOutDelay: 500, // Độ trễ làm mờ (ms)
            loop: true, // Bật vòng lặp strings
            loopCount: Infinity, // Số vòng lặp (Infinity - vô cực)
            showCursor: false, // Hiển thị con trỏ
            cursorChar: '|', // Ký tự đại diện con trỏ
            autoInsertCss: true, // Tự động chèn CSS cho con trỏ và fadeOut vào HTML <head>
            attr: null, // Thuộc tính để gõ (ex: placeholder, value, HTML text)
            bindInputFocusEvents: false, // Liên kết với tiêu điểm và làm mờ nếu el là đầu vào văn bản
            contentType: 'html', // contentType 'html' hoặc 'null' cho chuỗi trần
        });
    }

})(jQuery);

// Dừng chuyển slide khi mouse hover
$(function () {
    $('#myCarousel.slide').carousel({
        interval: 5000,
        pause: "hover"
    });

    $('.zi-slide').hover(function () {
        $("#myCarousel").carousel('pause');
    }).blur(function () {
        $("#myCarousel").carousel('cycle');
    });
});

// Hiệu ứng card 3D
VanillaTilt.init(document.querySelectorAll(".card-3"), {
    max: 25,
    speed: 400
});
VanillaTilt.init(document.querySelectorAll(".zi-quote"), {
    max: 25,
    speed: 400
});
     
// Back to top button
$(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
        $('.back-to-top').fadeIn('slow');
    } else {
        $('.back-to-top').fadeOut('slow');
    }
});

// LightBox Options
lightbox.option({
    'alwaysShowNavOnTouchDevices':true,
    'fitImagesInViewport':true,
    'wrapAround':true,
    'resizeDuration': 200,
    'disableScrolling':true
  })

// Digital Clock
function showTime(){
    var date = new Date();
    var h = date.getHours(); // 0 - 23
    var m = date.getMinutes(); // 0 - 59
    var s = date.getSeconds(); // 0 - 59
    var session = "AM";
    
    if(h == 0){
        h = 12;
    }
    
    if(h > 12){
        h = h - 12;
        session = "PM";
    }
    
    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;
    
    var time = h + ":" + m + ":" + s + " " + session;
    document.getElementById("clock").innerText = time;
    document.getElementById("clock").textContent = time;
    
    setTimeout(showTime, 1000);
    
}

showTime();

// Dark / Light Mode
const ckbMode = document.getElementById('ckb-mode');
ckbMode.addEventListener('change', ()=>{
    document.body.classList.toggle('light-theme');
});