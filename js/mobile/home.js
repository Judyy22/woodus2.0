$(document).ready(function () {
    // 페이지 로드 시 초기화
    checkWindowSize();

    // 창 크기 변경 시에도 확인
    $(window).resize(function () {
        checkWindowSize();
    });

    // 화면 크기에 따라 처리하는 함수
    function checkWindowSize() {
        var widthSize = window.outerWidth;

        if (widthSize <= 800) {
            // console.log("Mobile 화면");
            $("#imageContent").removeClass("d-flex");
            $(".content2").css("width", "100%");
            $(".content3").css("width", "100%");
        } else {
            // console.log("데스크톱 화면");
            $("#imageContent").addClass("d-flex");
            $(".content2").css("width", "50%");
            $(".content3").css("width", "50%");
        }
    }
});
