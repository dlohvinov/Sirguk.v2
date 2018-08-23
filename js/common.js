
//nav color while scrolled
var nav = document.getElementById("nav");
function navColorChanger() {
    if (pageYOffset != 0) {
        nav.classList.add('scrolled');
    } else {
        nav.classList.remove('scrolled');
    }
}
document.addEventListener('DOMContentLoaded', function () {navColorChanger()});

//nav scroll
$('nav .logo').click(function () {
    $('html,body').animate({scrollTop:$($(this).attr('data-scroll-to')).offset().top},1000)
});
$('nav li a').click(function () {
    $('html,body').animate({scrollTop:$($(this).attr('data-scroll-to')).offset().top},1000)
});

//menu toggle
$('.burger').click(function () {
    $('.menu').toggleClass('hidden-md');
});
$('.menu li a').click(function () {
    $('.menu').toggleClass('hidden-md');
});
//fadeIn's at time
let weddingServ = document.getElementById('wedding-service');
let birthServ = document.getElementById('birth-service');
let corporativeServ = document.getElementById('corporative-service');
let addServ = document.getElementsByClassName('add-serv');
function getElementTopHeight(elem) {
    let box = elem.getBoundingClientRect();
    return box.top + pageYOffset;
}
function getElementBottomHeight(elem) {
    return getElementTopHeight(elem) + elem.offsetHeight;
}
function isInViewport(elem) {
    return pageYOffset+(document.documentElement.clientHeight*0.9) >= getElementTopHeight(elem);
}

function fadeInCurrent() {
    if(isInViewport(weddingServ)) {
        weddingServ.classList.add('in-left');
    }
    if (isInViewport(birthServ)) {
        birthServ.classList.add('in-right');
    }
    if (isInViewport(corporativeServ)) {
        corporativeServ.classList.add('in-left');
    }
    if (isInViewport(addServ[0])) {
        addServ[0].classList.add('in-bottom');
    }
    if (isInViewport(addServ[1])) {
        addServ[1].classList.add('in-bottom');
    }
    if (isInViewport(addServ[2])) {
        addServ[2].classList.add('in-bottom');
    }
}
fadeInCurrent();
window.onscroll = function () {navColorChanger(), fadeInCurrent()};



// //open service photo's
// let pic = document.getElementsByClassName('pic');
// let picBg = document.getElementsByClassName('pic-open-bg');


if ($(window).width() >= 992) {
    $(".services .pic").click(function () {
        $(".carousel").toggleClass('hidden')
    });
    $(".services .pic-open-bg").click(function () {
        $(".carousel").toggleClass('hidden')
    });
}
// picBg.onclick = function () {
//     $(".carousel").toggleClass('hidden');
// };



$('.stats .card').click(function () {
    $(this).toggleClass('flipped');
});


//slick
$(document).ready(function(){
    $('.services .carousel').slick({
        infinite: true,
        lazyLoad: 'ondemand'
        // autoplay: 2,
    });
});
$(document).ready(function(){
    $('.feedback .carousel').slick({
        infinite: true,
        centerMode: true,
        centerPadding: 0,
        variableWidth: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        // responsive: [
        //     {
        //         breakpoint: 768,
        //         settings: {
        //             slidesToShow: 1,
        //             slidesToScroll: 3,
        //         }
        //     }
        // ],
    });
});
$('.feedback .item').click(function () {
    var goTo = $(this).data('slide');
    $('.feedback .carousel').slick('slickGoTo', goTo -1 );
});
