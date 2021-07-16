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
        var typed_strings = $('.content-inner .typed-text').text();
        var typed = new Typed('.content-inner .show-text', {
            strings: typed_strings.split(', '),
            typeSpeed: 50,
            backSpeed: 10,
            smartBackspace: true,
            loop: true
        });
    }
    
    // // Làm mượt hiệu ứng cuộn khi chọn mục ở thanh bên
    // $(".navbar-nav a").on('click', function (event) {
    //     if (this.hash !== "") {
    //         event.preventDefault();
            
    //         $('html, body').animate({
    //             scrollTop: $(this.hash).offset().top - 30
    //         }, 1500, 'easeInOutExpo');
            
    //         if ($(this).parents('.navbar-nav').length) {
    //             $('.navbar-nav .active').removeClass('active');
    //             $(this).closest('a').addClass('active');
    //         }
    //     }
    // });
    
    
    // // Hoạt ảnh thanh tiến trình kinh nghiệm
    // $('.skills').waypoint(function () {
    //     $('.progress .progress-bar').each(function () {
    //         $(this).css("width", $(this).attr("aria-valuenow") + '%');
    //     });
    // }, {offset: '80%'});
    
    
    // // Porfolio isotope and filter
    // var portfolioIsotope = $('.portfolio-container').isotope({
    //     itemSelector: '.portfolio-item',
    //     layoutMode: 'fitRows'
    // });

    // $('#portfolio-flters li').on('click', function () {
    //     $("#portfolio-flters li").removeClass('filter-active');
    //     $(this).addClass('filter-active');

    //     portfolioIsotope.isotope({filter: $(this).data('filter')});
    // });
    
    
    // // Review slider
    // $('.review-slider').slick({
    //     autoplay: true,
    //     dots: false,
    //     infinite: true,
    //     slidesToShow: 1,
    //     slidesToScroll: 1
    // });
    
    
    // // Nút lên đầu trang
    // $(window).scroll(function () {
    //     if ($(this).scrollTop() > 100) {
    //         $('.back-to-top').fadeIn('slow');
    //     } else {
    //         $('.back-to-top').fadeOut('slow');
    //     }
    // });
    // $('.back-to-top').click(function () {
    //     $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
    //     return false;
    // });

})(jQuery);

