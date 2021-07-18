/* 랜딩 */
$(function(){



AOS.init();

setTimeout(function(){
    $('.landing').addClass('hide')
},1500) 


//메뉴누르면 스크롤 내려가기

$('header .gnb ul li').click(function(e){
    e.preventDefault();
    //$('header .gnb ul li').removeClass('on')
    //$(this).addClass('on')
    targetname = $(this).data('target');

    target = $('.'+targetname).offset().top;
    $('html').animate({scrollTop :target} ,500);
})





$(window).scroll(function(){
    curr = $(window).scrollTop();
    target2 = $(".intro_area").offset().top - $(window).height()/1.4; //시작지점

    target3 = $(".profile").offset().top - $(window).height()/1.2; 
    if(curr > target3){
      TweenMax.staggerTo('.ani03 p', 3, {y:0 ,opacity:1,},2); 
    }


    if( curr > target2){
        TweenMax.staggerTo('.ani01 ', 1,{ x:0, rotation:0,opacity:1, },0.2 );//하나완료되고 다음모션 실행시간
        TweenMax.staggerTo('.ani02 strong', 1, {x:0,  opacity:1,},0.1); 
        TweenMax.staggerTo('.ani02 li', 1, {x:0,  opacity:1, delay:0.5},0.1); 
    }

  


    //scroll 역순으로 실행
    nav01 = $('.home').offset().top-10; 
    nav02 = $('.profile').offset().top-10;
    nav03 = $('.skills').offset().top-10;
    nav04 = $('.portfolio').offset().top-10;
    nav05 = $('.contact').offset().top-10;
    $('.gnb li').removeClass('on');
    if(curr >= nav05){  //해당좌표보다 커지면
      $('.gnb li').eq(4).addClass('on'); 
    }else if(curr >= nav04){
      $('.gnb li').eq(3).addClass('on');
    }else if(curr >= nav03){
      $('.gnb li').eq(2).addClass('on');
    }else if(curr >= nav02){
      $('.gnb li').eq(1).addClass('on');
    }else{
      $('.gnb li').eq(0).addClass('on');
    }
});

























}); //end of function 