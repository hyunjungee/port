$(function(){

// 상단바 moreX버튼  
$(" .notice_area .txt_wrap a").click(function(e){
    e.preventDefault();
    $( '.notice_area').hide();
    $('.user_nav').css({top:0});
});

//햄버거메뉴 클릭
$(" .user_nav .menu_btn").click(function(e){
    e.preventDefault();
    $( '.menu_nav').animate({left:0});
});

//뒤로가기 버튼
$(" .side_btn").click(function(e){
    console.log($(this))
    e.preventDefault();
    $('.menu_com').animate({right:'-100%'});
});

// gnb x버튼
$(" .close").click(function(e){
    e.preventDefault();
    $('.menu_nav').animate({left:"-100%"});
});

//gnb 메뉴들을 클릭시 또 나오는 메뉴바
$('.dept1').click(function(e){
    e.preventDefault();
    $(this).siblings('.menu_com').animate({right:0})
});

// $(" .menu_list .one").click(function(e){
//     e.preventDefault();
//     $('.nav_sub01').animate({right:0});
// });
// $(" .menu_list .two").click(function(e){
//     e.preventDefault();
//     $('.nav_sub02').animate({right:0});
// });
// $(" .menu_list .three").click(function(e){
//     e.preventDefault();
//     $('.nav_sub03').animate({right:0});
// });
// $(" .menu_list .four").click(function(e){
//     e.preventDefault();
//     $('.nav_sub04').animate({right:0});
// });
// $(" .menu_list:last-child").click(function(e){
//     e.preventDefault();
// });


// 돋보기 search

$(" .search_wrap").click(function(e){
    e.preventDefault();
    if( $('.user_nav form').hasClass('on') ){
        $('.user_nav form').removeClass('on')
        $( '.search_btn i ' ).attr( 'class', "fi-rr-search" );
    }else{
        $('.user_nav form').addClass('on')
        $( '.search_btn i ' ).attr( 'class', 'fi-rr-cross-small' );
    }
});




//menu_com nav_sub01 아코디언
$('.gnb>li>a').click(function(e){
    e.preventDefault();
    h = $(this).siblings('.sub').find('ul').outerHeight(); //패딩보더포함한높이값
    
    if($(this).siblings('.sub').outerHeight() >0 ){  //서브높이가 0보다 크다면 열려잇다면 밑에것을 실행해줘
        $('.gnb>li>a').removeClass('arrow')
        $('.sub').stop().animate({height:0},300)  //닫아줘
    }else{
        $('.sub').stop().animate({height:0},300) //0보다 작으면 열어줘
        $(this).siblings('.sub').stop().animate({height:h},300); //ul 높이만큼 열어줘

        $('.gnb>li>a').removeClass('arrow')
        $(this).addClass('arrow')
    };
});



//tap_area 탭메뉴
$('.tap_nav li ').click(function(e){   //.tap_nav li a쓰면 왜 안되징..
    e.preventDefault();
    $('.tap_nav li ').removeClass('on');
    $(this).addClass('on');

    idx = $(this).index()+1;
    $('.tap_wrap ').removeClass('on');
    $('#con0'+idx).addClass('on');
});


//video 동영상나오게하기
$('.vod_box .img_wrap span ').click(function(e){   
    e.preventDefault();
    $('.vod_box').children('.img_wrap').css({'visibility': 'hidden'})
    $('.vod_wrap ').css({'visibility': 'visible'})
});






//accordion_wrap 아코디언리스트
$('.accordion_wrap>li>a').click(function(e){
    e.preventDefault();
    h = $(this).siblings('.list_sub').find('p').height();
    
    if($(this).siblings('.list_sub').height() >0 ){  //서브높이가 0보다 크다면 열려잇다면 밑에것을 실행해줘
        $('.list_sub').stop().animate({height:0},300)  //닫아줘
        //$(this).children('span').before().hide();

        $('.accordion_wrap>li').removeClass('show');
    }else{
        $('.list_sub').stop().animate({height:0},300) //0보다 작으면 열어줘
        $(this).siblings('.list_sub').stop().animate({height:h},300); //ul 높이만큼 열어줘
       // $(this).children('span').show();

        $('.accordion_wrap>li').removeClass('show');
        $(this).parent().addClass('show');
    };
});


//스크롤 이벤트
$(window).scroll(function(){
    // alert('a'); //스크롤 할때 마다 실행이된다
    curr = $(window).scrollTop();
    target =$('.here').offset().top - 150; //헤더의 높이만큼 100뺌

    tap_nav =$('.tap_area .tap_nav').offset().top - $(window).height()/1.2;  //문서의 시작지점 - 윈도우높이의 1.2를 나눈것 

    if( curr > target){
        $('header').addClass('on')
    }else{
        $('header').removeClass('on')
    }

    if( curr > tap_nav){      
    TweenMax.staggerTo(".tap_nav li", 1, { opacity:1, y:0, rotation:0}, 0.1);  //모션완료시간 1, 총 사이간격의시간 0.1
    }


})


$('the_top_btn').click(function(){
    $('html,body').animate({ scrollTop:0} , 500)
})





//스와이퍼

//main
var swiper = new Swiper(".main_slider", {
    slidesPerView: 1,
    spaceBetween: 0,
    loop: true,
    speed: 1000,
    autoplay: true,
    delay : 500,
    disableOnInteraction : false,

    pagination: {
    el: ".swiper-pagination",
    clickable: true,
    },
});


// frame
var swiper = new Swiper(".frame_slider", {
    slidesPerView: 2,
    spaceBetween: 30,
    slidesPerGroup: 1,
    loopFillGroupWithBlank: true,

    navigation: {
        nextEl: ".frame_slide_wrap .next",
        prevEl: ".frame_slide_wrap .prev",
    },
    scrollbar: {
        el: ".swiper-scrollbar",
        draggable: true
    },
});



// num
var swiper = new Swiper(".num_slider", {
    speed: 700,
    autoplay: true,
    delay : 700,

    pagination: {
        el: ".swiper-pagination",
        type: "fraction",
    },
    navigation: {
        nextEl: ".num_slider .next",
        prevEl: ".num_slider .prev",
    },
});



    //aos
    AOS.init();

});  //$(function(){