/* 반응형 */
$(function(){

    //햄버거
    // $(".gnb .menu_btn").click(function(){
    //     $(this).children(' i ').removeClass();
    //     $(this).addClass('active');

    //     $("header .menu_nav").fadeIn();
    // });
    $(".gnb .menu_btn").click(function(){
        $(this).toggleClass('active');
        $('.menu_nav').toggleClass('on');
    });


    //스와이퍼 
    var swiper = new Swiper(".main_vis", {
        speed: 1000,
        autoplay: true,
        delay :1000,
        effect:'fade',

        navigation: {
            nextEl: ".main_vis .next",
            prevEl: ".main_vis .prev",
        },

        pagination: {
            el: ".swiper-pagination",
            dynamicBullets: true,
            clickable: true,
        },
    });



    //scroll down 누르면 
	$(".scroll_box").click(function(){
		$('html').animate({scrollTop : ($('.main_con').offset().top -$('.header').height() ) }, 500);
	});



    //스크롤 이벤트
    $(window).scroll(function(){
        // alert('a'); //스크롤 할때 마다 실행이된다
        curr = $(window).scrollTop(); //스크롤의 현재위치
        tap_nav =$(window).height()/10; //브라우저윈도우창 높이 가변
        // bar01=$('.pic_wrap').offset().top - 150; 
        // bar02=$('.explain_area strong').offset().top - 150; 

        if(curr > tap_nav){ //윈도우 스크롤 길이가 더크면
            $('.header').addClass('on')
        }else{
            $('.header').removeClass('on')
        }

       // if( curr > tap_nav){      
       //     TweenMax.staggerTo(".explain_area .txt", 1, { opacity:1, y:0, rotation:180}, 0.1);  //모션완료시간 1, 총 사이간격의시간 0.1
       // }

        bar_ani( '.bar01','.bar01', $(window).height()/2 )
        bar_ani( '.bar02','.bar02', $(window).height()/1.2 )
        bar_ani( '.boomerang_wrap .img_wrap','.boomerang_wrap', $(window).height() )
    });

    function bar_ani (el,target_el,offset) {  //모션작동될앨리먼트, 위치잡는영역, 현재기준에서올릴거냐내릴거냐
        target = $(target_el).offset().top - offset
        if(curr > target){
            $(el).addClass('on')
        }else{
            $(el).removeClass('on')
        }
    }



    //animation motion
    $(window).scroll(function(){
        curr  =  $(window).scrollTop(); //현재스크롤위치

        motion_wrap(); //스크롤시 판단해서 준것
        
    })   
    
    function motion_wrap(){
        curr  =  $(window).scrollTop(); 
        motion('.back_txt .ani', '.main_con', -$(window).height()/1.2 ) /*ani */
        motion('.pic_wrap .ani', '.pic_wrap', -$(window).height()/1.2 )
        motion('.explain_area .ani', '.explain_area', -$(window).height()/1.2 )
        motion22('.beef_area .ani02', '.beef_area', -$(window).height()/1.2 )
        motion22('.membership .ani02', '.membership', -$(window).height()/1.2 )
    }

    motion_wrap(); //켯을때 내 현재스크롤이 몇인지 판단해서 준것

    function motion(el, target_el, offset) { //모션작동될앨리먼트, 위치잡는영역, 현재기준에서올릴거냐내릴거냐
    target = $(target_el).offset().top + offset
        if(curr > target){
            TweenMax.staggerTo(el, 1,{y:0,rotation:0,opacity:1,},0.2);
        }
    }
    function motion22(el, target_el, offset) { //이렇게하는게 맞는지확인,..
        target = $(target_el).offset().top + offset
            if(curr > target){
            TweenMax.staggerTo(el, 1.5,{y:0, x:0,rotation:0,opacity:1,},0.4);
        }
    }



        //target2 = $(".best_slide_wrap").offset().top - $(window).height()/1.2; //메인콘에 문서전체에서 메인콘의 ////시작지점  //내 윈도우높이를 1.2를 나눈것을 뺀것
        //curr  =  $(window).scrollTop(); 
        //if( curr > target2){
        //    TweenMax.staggerTo('.ani', 1,{y:0,rotation:1,opacity:1,},0.2);
        //}




//     TweenMax.staggerTo('.main_con .back_txt * ', 1, //전체모션 ,하나가 완료되는시간
//     {
//     y:0,
//     rotation:0,
//     opacity:1,
//     },
//  0.2 //하나완료되고 다음모션 실행시간
// );

//     TweenMax.staggerTo('.main_con .ani ', 1, //전체모션 ,하나가 완료되는시간
//     {
//     y:0,
//     rotation:0,
//     opacity:1,
//     },
//     0.2 //하나완료되고 다음모션 실행시간
// );




    var controller = new ScrollMagic.Controller();

    var tween1 = TweenMax.to('.best_slide_wrap', 0.5, {
        x:'-400%'  //처음시작할때 지정한 완료모션
        });

        var scene = new ScrollMagic.Scene({
            triggerElement: ".best_wrapper", //언제시작할지 좌표잡는것
            duration: "300%",  //스크롤러가 윈도우높이의 3배정도 느려짐
            offset: $(window).height()/2.5 
            //다른방법 offset: $(window).height()/2 - $('header').height() //윈도우높이절반내리고, 헤더높이만큼 뺀것
            })
        .setPin(".best_wrapper") //여기서고정
        .setTween(tween1)  //항상있어야하는것
        .addTo(controller) //항상있어야하는것
        //   .addIndicators({ //나중에ㅐ 주석달기 없어도됨
        //     name: "1"
        //   })

}); //$(function(){
