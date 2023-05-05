console.log('HMG Web Site');
(function($){
    $(document).ready(function(){
        $(window).resize(function(){location.reload();})
    });

//header
    gsap.to("header",0.3,{
        scrollTrigger:{
            trigger:".visual-area",
            start:"top top",
        },
        backgroundColor:"#000",
    })
//slide animation
    var visualSlide = new Swiper(".visual-area",{
        navigation:{
            prevEl:".visual-area .btn.prev",
            nextEl:".visual-area .btn.next",
        },
        pagination:{
            el:".swiper-pagination",
        },
        autoplay:{
            delay:3000,
            disableOnInteraction : false,
        },
    });


//이미지 슬라이드 숫자 변경
   var slideCnt = $('.visual-area .swiper-slide').lenght;
   $('.state-bar .num').text(1);
   $('.state-bar .all-num').text(slideCnt);
   visualSlide.on('slideChange',function(){
      curr = visualSlide.realIndex + 1 ;
      $('.state-bar .num').text(curr);
   })
//이미지 슬라이드 버튼 조작
   $('.visual-area .btns').click(function(e){
      e.preventDefault();
      if($(this).find('.stop').hasClass('on')){
        $(this).find('.play').addClass('on').siblings().removeClass('on')
        visualSlide.autoplay.stop();
      }else{
        $(this).find('.stop').addClass('on').siblings().removeClass('on')
        visualSlide.autoplay.start();
      }
   })
//about gsap 애니메이션
   gsap.utils.toArray('.title-box').forEach(el => {
     target = $(el).find('*');
     gsap.from(target,0.7,{
        scrollTrigger:{
            trigger:el,
            start:"top 80%",
        },
        opacity:0,
        y:100,
        stagger:0.05,
     })

   });
//driving experience
    exImgTarget = $('.experience-area ul').find('img');
    exItemTarget = $('.experience-area ul').find('.exper-item');
    gsap.fromTo(exImgTarget,0.3,{
        scale:2,
    },{
        scrollTrigger:{
            trigger:'.experience-area ul',
            start:'top 80%',
        },
        scale:1,
        stagger:0.2,
        delay:0.2,
    })
    gsap.fromTo(exItemTarget,0.3,{
        y:100,
        opacity:0,
       },{
        scrollTrigger:{
            trigger:'.experience-area ul',
            start:'top 80%',
        },
        opacity:1,
        y:0,
        stagger:0.2,
        delay:0.2,
       });
    exItemTarget.mouseover(function(){
        $(this).find('.link-more').addClass('up');
        $(this).find('.items').addClass('on');
    })
    exItemTarget.mouseout(function(){
        $(this).find('.link-more').removeClass('up');
        $(this).find('.items').removeClass('on');
    })
//Driving Pleasure
    plsItemTarget = $('.pls-item');

    ScrollTrigger.matchMedia({
        "(max-width : 1024px)": function(){
            gsap.set($('.pls-item'),{
                y:0
            });
        },
        "(min-width : 1024px)": function(){
            gsap.fromTo(plsItemTarget,0.4,{
                y:800,
            },{
                scrollTrigger:{
                    trigger:'.pleasure-area ul',
                    start:'top center',
                },
                y:0,
                stagger:0.2,
                delay:0.3,
            });
        }
    })

    var plsMobAni = function(){
        plsItemTarget.click(function(e){
            e.preventDefault();
            if($(this).hasClass('m-on')){
                plsItemTarget.removeClass('m-on');
                $(this).find('.items').removeClass('mob');
                $(this).find('.txt-wrap').removeClass('mob');
                $(this).find('.txt-off').removeClass('mob');
                $(this).find('.link-more').removeClass('mob');     
            }else{
                plsItemTarget.removeClass('mob');
                $(this).addClass('mob');

                plsItemTarget.find('.items').removeClass('mob');
                $(this).find('.items').addClass('mob');

                plsItemTarget.find('.txt-wrap').removeClass('mob');
                $(this).find('.txt-wrap').addClass('mob');

                plsItemTarget.find('.txt-off').removeClass('mob');
                $(this).find('.txt-off').addClass('mob');

                plsItemTarget.find('.link-more').removeClass('mob');
                $(this).find('.link-more').addClass('mob');
            }
           
        })
    }
    var plsTabAni = function(){
         plsItemTarget.mouseenter(function(){
                $(this).find('.items').addClass('on');
                $(this).find('.txt-wrap').addClass('on');
                $(this).find('.txt-off').addClass('on');
                $(this).find('.link-more').addClass('on');

            })
            plsItemTarget.mouseleave(function(){
                $(this).find('.items').removeClass('on');
                $(this).find('.txt-wrap').removeClass('on');
                $(this).find('.txt-off').removeClass('on');
                $(this).find('.link-more').removeClass('on');
            })

    }

  
// Hyundai N Festival
    gsap.fromTo('.festival-area img',{
        scale:2
    },{
        scrollTrigger:{
            trigger:'.festival-area',
            start:'top 100%',
            end:'bottom top',
            scrub:1,
        },
        scale:1,
    })


//sns
    $('.sns-item').mouseover(function(){
        $(this).find('.txt-wrap').addClass('on');
    })
    $('.sns-item').mouseout(function(){
        $(this).find('.txt-wrap').removeClass('on');
    })



//footer
    var newsSlide = new Swiper ('.news-area',{
        slidesPerView:1,
        navigation:{
            prevEl:".footer-top .news-nav .btn.prev",
            nextEl:".footer-top .news-nav .btn.next",
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
          },
        autoplay:{
            delay:3000,
            disableOnInteraction:false,
        },
    });
    // $(window).resize(function(e){
    //     if(matchMedia("screen and (min-width : 1024px)").matches){
    //          newsSlide = new Swiper ('.news-area',{
    //             slidesPerView:2,
    //         });
    //     }else{
            
    //     }   
    // }).resize();
  
    $('.footer-top .news-nav .btns').click(function(e){
        e.preventDefault();
  
        console.log('ok');
  
        if($(this).find('.stop').hasClass('on')){
          $(this).find('.play').addClass('on').siblings().removeClass('on')
          newsSlide.autoplay.stop();
        }else{
          $(this).find('.stop').addClass('on').siblings().removeClass('on')
          newsSlide.autoplay.start();
        }
        
     })


function handleResize() {
    if (window.innerWidth < 768) {
        $('.slide_01 img').attr('src','asset/img/main-m-banner01.jpg');
        $('.slide_02 img').attr('src','asset/img/main-m-banner02.jpg');
        $('.slide_03 img').attr('src','asset/img/main-m-banner03.jpg');
        $('.slide_04 img').attr('src','asset/img/main-m-banner04.jpg');
        $('.visual-control img').attr('src','asset/img/ic-m-sprite.png');
        plsItemTarget.on('click',plsMobAni());
        plsItemTarget.off('mouseenter',plsTabAni());
    }else if(window.innerWidth < 1024){
        $('.visual-control img').attr('src','asset/img/ic-m-sprite.png');
        //플래이져 코드 변경
        plsItemTarget.on('click',plsMobAni());
        plsItemTarget.off('mouseenter',plsTabAni());
    }else{
        plsItemTarget.on('mouseenter',plsTabAni());
        plsItemTarget.off('click',plsMobAni());

        newsSlide = new Swiper ('.news-area',{
            slidesPerView:2,
        });
    }
}
handleResize()


})(jQuery);
