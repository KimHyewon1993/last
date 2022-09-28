$(function(){
// loading-page ------------------------------------------
    gsap.set('.loading-page .t01',{xPercent:20})
    gsap.set('.loading-page .t02',{xPercent:200,opacity:0})
    gsap.set('.loading-page .t03',{xPercent:400,opacity:0})

    const loadingText = gsap.timeline({})
    loadingText.addLabel('a')
    .to('.loading-page .t01',{xPercent:0},'a')
    .to('.loading-page .t02',{xPercent:0,opacity:1},'a+=0.1')
    .to('.loading-page .t03',{xPercent:0,opacity:1},'a+=0.1')

    .to('.loading-page .t01',{yPercent:-100},'a+=0.7')
    .to('.loading-page .c01',{yPercent:-100},'a+=0.7')
    .to('.loading-page .c02',{yPercent:-100},'a+=0.7')
    .to('.loading-page .t02',{yPercent:-100},'a+=0.8')
    .to('.loading-page .t03',{yPercent:-100},'a+=0.9')

    .to('.loading-page .dimmed',{yPercent: -100},'a+=1.2')
    .to('.loading-page',{yPercent: -100},'a+=1.3')

    gsap.to('.loading-page .loading-ico',{
        repeat:-1,
        rotate:360
    })
// -----------------------------------------------------------------

    gsap.set('.sc-create .group-title .text',{yPercent:100})
    gsap.set('.sc-create .desc',{yPercent:100})
    gsap.set('.sc-create .visual',{opacity:0})
    gsap.set('.sc-create .left-area .desc',{yPercent:100,opacity:0})
    gsap.to('.sc-create .group-title .text',{yPercent:0,delay:1.4})
    gsap.to('.sc-create .desc',{yPercent:0,delay:2})
    gsap.to('.sc-create .visual',{opacity:1,delay:2,duration:1})

    gsap.to('.sc-create .left-area .desc',{
        scrollTrigger: {
            trigger:".sc-create",
            start: `30% top`,
            end: "50% top",
            scrub: 1,
        },
        yPercent:0,
        opacity:1,
    })

    gsap.set('.sc-works .txt',{yPercent:100})
    gsap.to('.sc-works .txt',{
        scrollTrigger: {
            trigger:".sc-works",
            start: `top top`,
            end: "top top",
            scrub: 1,
        },
        yPercent:0,
    })

    ScrollTrigger.matchMedia({
        "(min-width: 767px)": function() {

            gsap.to('.sc-create .right-area .img-box',{
                scrollTrigger: {
                    trigger:".sc-create",
                    start: `top top`,
                    end: "bottom top",
                    scrub: 1,
                },
                rotation:10,
            })

            $('[data-obj]').each(function(index,item){
                y = $(this).data('obj');
                gsap.to(item,{
                    scrollTrigger: {
                        trigger:item,
                        start: `top bottom`,
                        end: "bottom top",
                        scrub: 1,
                    },
                    'object-position': '0px 0'
                })
            })

            $('[data-scroll]').each(function(index,item){
                y = $(this).data('scroll');
                gsap.to(item,{
                    scrollTrigger: {
                        trigger:item,
                        start: `top bottom`,
                        end: "bottom top",
                        scrub: 1,
                    },
                    yPercent: y
                })
            })
        }
    })

    gsap.set('.sc-honors .tit',{yPercent:100,opacity:0})
    gsap.to('.sc-honors .tit',{
        scrollTrigger: {
            trigger:'.sc-honors',
            start: `top bottom`,
            end: "50% top",
            scrub: 1,
        },
        yPercent:0,
        opacity:1
    })
    gsap.set('.sc-honors .link-honors',{xPercent:-100,opacity:0})
    gsap.to('.sc-honors .link-honors',{
        scrollTrigger: {
            trigger:'.sc-honors',
            start: `top bottom`,
            end: "top top",
            scrub: 1,
        },
        xPercent:0,
        opacity:1,
    })

    $('[data-color]').hover(function(){
        color = $(this).data('color');
        $('.sc-works').css('background-color',color)
    })
    



    
});