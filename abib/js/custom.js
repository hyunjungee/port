$(function(){    

    AOS.init();
    
    //menu
    $(' .menu_btn ').click(function(e){
        e.preventDefault();
        $('.menu').animate({ left: 0 },500);
        $('body').addClass('hidden') //바디한테 오버플로히든줌 바디가 스크롤이 안됨
    });
    $(' .close ').click(function(e){
        e.preventDefault();
        $('.menu').animate({ left: '100%' },500);
        $('body').removeClass('hidden')
    });

    $('.menu_list li').hover(function(){
        src= $(this).data('src');

        $('.menu_list li').removeClass('on')  
        $(this).addClass('on')

        $('header .menu .img_wrap img').attr('src',src); 
    })


    //scroll
    $(window).scroll(function(){
        // alert('a'); //스크롤 할때 마다 실행이된다
        curr = $(window).scrollTop(); //현재스크롤
        target =$('.daily_wrap').offset().top - 100; //타겟위치
        
        if( curr > target){
            $('header').addClass('on');
            // $(' .user_nav li ').addClass('on')
            // $(' .menu_btn span ').addClass('on')
            // $( '.sns_nav li a' ).addClass('on')
            // $( ' .top_btn ' ).addClass('on')
            // $( '.bottom_btn ' ).addClass('on')

        }else{
            $('header').removeClass('on');
            // $('.user_nav li').removeClass('on')
            // $(' .menu_btn span ').removeClass('on')
            // $( '.sns_nav li a' ).removeClass('on')
            // $(' .top_btn ').removeClass('on')
            // $(' .bottom_btn ').removeClass('on')
        }
    })

    $('.top_btn').click(function(e){
        e.preventDefault();
        $('html,body').animate({ scrollTop:0} , 500)
    });
    $('.bottom_btn').click(function(e){
        e.preventDefault();
        $('html,body').animate({ scrollTop:$('body').height()} , 500)
    });





    //daily_wrap
    $('.daily_con strong').mouseover(function(e){
        e.preventDefault();
        $('.daily_con strong').removeClass('on');
        $(this).addClass('on');

        target = $(this).data('target');
        //alert(target);
        $('.daily_con > div ').removeClass('on');
        $('#'+target ).addClass('on');
    })




    // plan_wrap
    $('.tap_nav li').click(function(e){
        e.preventDefault();
        $('.tap_nav li').removeClass('on');
        $(this).addClass('on');
        
        idx = $(this).index()+1;
        // alert(idx);
        $('.tap_con > div ').removeClass('on');
        $('.txt_wrap0'+idx).addClass('on');



        
    })

    
    //swiper 스크립트

    //  main_vis
    var swiper = new Swiper(".main_vis", {
        slidesPerView: 1,
        spaceBetween: 0,
        loop: true,
        speed: 1000,
        autoplay: true,
        delay : 5000,
        disableOnInteraction : false,

        pagination: {
        el: ".main_vis .swiper-pagination",
        clickable: true,
        }
    });


    //  best_wrap
        var swiper = new Swiper(".prd_slide", {
            slidesPerView: 4,
            spaceBetween: 30,
            slidesPerGroup: 4,
            navigation: {
                nextEl: ".best_wrap .prev",
                prevEl: ".best_wrap .next",
            },
        });        

        
    //  review_wrap
    var swiper = new Swiper(".review_slide", {
        slidesPerView: 4,
        spaceBetween: 30,
        loop: true,

        navigation: {
            nextEl: ".re_wrap .next",
            prevEl: ".re_wrap .prev"
        },
    });

}) //$(function(){  
