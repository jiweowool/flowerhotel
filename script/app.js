$(function () {
    $(".slide1").slick({
        infinite: true, //무한 재생
        dots: true, //도트갯수가 표현됨
        arrows: true, //좌우 버튼 생성됨
        autoplay: true, //자동재생
        speed: 1000, //재생 속도
        slidesToShow: 3, //보여지는 슬라이드
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    });

});

    //하단메뉴 select 기능 구현

    
$(function(){
    const selectBoxElements = document.querySelectorAll(".select");

    function toggleSelectBox(selectBox) {
        selectBox.classList.toggle("active");
    }

    function selectOption(optionElement) {
        const selectBox = optionElement.closest(".select");
        const selectedElement = selectBox.querySelector(".selected-value");
        selectedElement.textContent = optionElement.textContent;
    }

    selectBoxElements.forEach(selectBoxElement => {
        selectBoxElement.addEventListener("click", function (e) {
            const targetElement = e.target;
            const isOptionElement = targetElement.classList.contains("option");

            if (isOptionElement) {
                selectOption(targetElement);
            }

            toggleSelectBox(selectBoxElement);
        });
    });

    document.addEventListener("click", function (e) {
        const targetElement = e.target;
        const isSelect = targetElement.classList.contains("select") || targetElement.closest(".select");

        if (isSelect) {
            return;
        }

        const allSelectBoxElements = document.querySelectorAll(".select");

        allSelectBoxElements.forEach(boxElement => {
            boxElement.classList.remove("active");
        });
    });
});