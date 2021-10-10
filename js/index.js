function sliderBest() {
    var swiper = new Swiper('.best .swiper-container', {
        slidesPerView: 4,
        spaceBetween: 10,
        navigation: {
            nextEl: '.best .swiper-button-next',
            prevEl: '.best .swiper-button-prev',
        },
        breakpoints: {
            320: {
                slidesPerView: 1,
                spaceBetween: 20
            },
            500: {
                slidesPerView: 2,
            },
            768: {
                slidesPerView: 3,
                spaceBetween: 10
            },
            992: {
                slidesPerView: 4,

            },
            1200: {
                spaceBetween: 68
            },
        }
    })
}

function sliderServiceIndex() {
    var swiper = new Swiper('.service-index .swiper-container', {
        slidesPerView: 4,
        spaceBetween: 10,
        navigation: {
            nextEl: '.service-index .swiper-button-next',
            prevEl: '.service-index .swiper-button-prev',
        },
        breakpoints: {
            320: {
                slidesPerView: 1,
                spaceBetween: 20
            },
            500: {
                slidesPerView: 2,
            },
            768: {
                slidesPerView: 3,
                spaceBetween: 10
            },
            992: {
                slidesPerView: 4,

            },
            1200: {
                spaceBetween: 68
            },
        }
    })
}

function sliderFeedback() {
    var swiper = new Swiper('.feedback .swiper-container', {
        slidesPerView: 2,
        spaceBetween: 10,
        navigation: {
            nextEl: '.feedback .swiper-button-next',
            prevEl: '.feedback .swiper-button-prev',
        },
        breakpoints: {
            320: {
                slidesPerView: 1,
            },

            992: {
                slidesPerView: 2,

            },
            1200: {
                spaceBetween: 30
            },
        }
    })
}


$(document).ready(function() {
    sliderBest()
    sliderServiceIndex()
    sliderFeedback()

    $(".header__theme-toggler-light").click(function() {
        $(".header__theme-toggler").removeClass("header__theme-toggler--dark")
        $(".header__theme-toggler").addClass("header__theme-toggler--light")
    })
    $(".header__theme-toggler-dark").click(function() {
        $(".header__theme-toggler").addClass("header__theme-toggler--dark")
        $(".header__theme-toggler").removeClass("header__theme-toggler--light")
    })

    $(".header__search-btn").click(function() {
        $(".header__search").addClass("header__search--active")
    })

    $(".header__burger").click(function() {
        $(this).toggleClass("header__burger--active")
        $(".header__mob-nav").slideToggle()
    })

    $(".experts__tab").click(function() {
        let path = $(this).attr("data-tab-path");
        $(".experts__tab").removeClass("experts__tab--active");
        $(this).addClass("experts__tab--active");
        $(".experts__content").removeClass("experts__content--active");
        $(`.experts__content[data-content-path="${path}"]`).addClass("experts__content--active");
        console.log(path)
    })

    $(".quiz__nav-next").click(function() {
        let activePath = parseInt($(".quiz__step--active").attr("data-step-path"))

        if (activePath < 3) {
            $(".quiz__step").removeClass("quiz__step--active")
            $(`.quiz__step[data-step-path="${activePath + 1}"]`).addClass("quiz__step--active")
        }
    })
    $(".quiz__nav-prev").click(function() {
        let activePath = parseInt($(".quiz__step--active").attr("data-step-path"))

        if (activePath > 1) {
            $(".quiz__step").removeClass("quiz__step--active")
            $(`.quiz__step[data-step-path="${activePath - 1}"]`).addClass("quiz__step--active")
        }
    })

    $(".quiz__tab").click(function() {
        let path = $(this).attr("data-tab-path");
        $(".quiz__tab").removeClass("quiz__tab--active");
        $(this).addClass("quiz__tab--active");
        $(".quiz__step").removeClass("quiz__step--active");
        $(`.quiz__step[data-step-path="${path}"]`).addClass("quiz__step--active");
        console.log(path)
    })
})