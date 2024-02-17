function locomotive(){
    gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
});

// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();

}
locomotive()

function cursorScaleInc(){
    gsap.to('#cursor',{
        transform:"scale(2)"
    })
}

function cursorScaleDec(){
    gsap.to('#cursor',{
        transform:"scale(1)"
    })
}

function cursorEffect(){
    document.addEventListener("mousemove",(e)=>{
        gsap.to("#cursor",{
            top :e.y,
            left :e.x,
            // duration:.1
        })
    })
}
cursorEffect()

function videoAnimation(){
    gsap.to("#page1 video",{
        transform:"scaleX(0.9)",
        filter:"blur(20px)",
        scrollTrigger:{
            trigger:"#page1",
            scroller:"#main",
            // markers:true,
            start:"top 0",
            end:"top -50%",
            scrub:true
        }
    })
}
videoAnimation()

function navAnimation(){
    gsap.to('.right_nav',{
        y:-100,
        duration:1,
        scrollTrigger:{
            trigger:".right_nav",
            scroller:"#main",
            start: "top 5%",
            end: "top -20%",
            scrub:true
        }
    })
    
    gsap.to("nav i", {
        display: "block",
        scrollTrigger: {
            trigger: "#nav",
            scroller: "#main",
            start: "top -45%",
            end: "top -50%",
            scrub: true
        }
    })
}
navAnimation()

function navHover(){
    var hover = document.querySelectorAll('.hover')
    hover.forEach((hov)=>{
        hov.addEventListener('mouseenter',()=>{
            cursorScaleInc()
        })
        
        hov.addEventListener('mouseleave',()=>{
            cursorScaleDec()
        })
    })
}
navHover()

function page1Heading(){
    var text = "We are brain.space The brain data company"
    var splittedText = text.split("")

    var clutter=""
    splittedText.forEach(function(elem){
        clutter += `<span>${elem}</span>`
    })
    var h1Text = document.querySelector('#page1 h1')
    h1Text.innerHTML = clutter;
    gsap.to("#page1 h1 span",{
        display:"initial",
        stagger:0.1
    })

}
page1Heading()

function page2ImageAnimation(){
    var tl = gsap.timeline({repeat:-1})

tl.to('#page2 img',{
    transform:"translate(-76%,-50%)",
    duration:1,
    delay:2,
})

tl.to('#page2 img',{
    transform:"translate(-65%,-50%)",
    duration:1,
    delay:2,
})

tl.to('#page2 img',{
    transform:"translate(-53%,-50%)",
    duration:1,
    delay:2,
})

tl.to('#page2 img',{
    transform:"translate(-42%,-50%)",
    duration:1,
    delay:2,
})

tl.to('#page2 img',{
    transform:"translate(-30%,-50%)",
    duration:1,
    delay:2,
})

tl.to('#page2 img',{
    transform:"translate(-18.5%,-50%)",
    duration:1,
    delay:2,
})



tl.to('#page2 img',{
    transform:"translate(-7%,-50%)",
    duration:1,
    delay:2
})

tl.to('#page2 img',{
    transform:"translate(4%,-50%)",
    duration:1,
    delay:2
})
}
page2ImageAnimation()

function page2TextAnimation(){
    var tl2 = gsap.timeline({
        scrollTrigger:{
            trigger:".page2_right h2",
            scroller:"#main",
            // markers:true,
            // start:"top 90%",
            end:"top 30%",
            scrub:true
        }
    })
    
    tl2.from(".page2_right h2",{
        transform:"translate(0%,15%)",
        duration:2,
        scale:1.1,  
        opacity:0
    })
    
    tl2.from(".page2_right p",{
        transform:"translate(0%,40%)",
        duration:2,
        scale:1.1,  
        opacity:0
    })
    
    tl2.from(".page2_right button",{
        transform:"translate(0%,40%)",
        duration:2,
        scale:1.1,  
        opacity:0
    })
}
page2TextAnimation()

function page3TextAnimation(){
    var tl2 = gsap.timeline({
        scrollTrigger:{
            trigger:".page3_left h2",
            scroller:"#main",
            // markers:true,
            // start:"top 90%",
            end:"top 20%",
            scrub:true
        }
    })
    
    tl2.from(".page3_left h2",{
        transform:"translate(0%,15%)",
        duration:2,
        scale:1.1,  
        opacity:0
    })
    
    tl2.from(".page3_left p",{
        transform:"translate(0%,40%)",
        duration:2,
        scale:1.1,  
        opacity:0
    })
    
    tl2.from(".page3_left button",{
        transform:"translate(0%,40%)",
        duration:2,
        scale:1.1,  
        opacity:0
    })
}
page3TextAnimation()

function page4TextAnimation(){
    
var tl2 = gsap.timeline({
    scrollTrigger:{
        trigger:".page4_text h2",
        scroller:"#main",
        // markers:true,
        // start:"top 90%",
        end:"top 20%",
        scrub:true
    }
})

tl2.from(".page4_text h2",{
    transform:"translate(0%,15%)",
    duration:2,
    scale:1.1,  
    opacity:0
})

tl2.from(".page4_text p",{
    transform:"translate(0%,40%)",
    duration:2,
    scale:1.1,  
    opacity:0
})

tl2.from(".page4_text button",{
    transform:"translate(0%,40%)",
    duration:2,
    scale:1.1,  
    opacity:0
})
}
page4TextAnimation()

function page4ContentAnimation(){
    
gsap.from(".page4_content1",{
    transform:"translate(0%,20%)",
    duration:2,
    scale:1.1,  
    opacity:0,
    scrollTrigger:{
        trigger:".page4_content1",
        scroller:"#main",
        start:"top 80%",
        end:"top 20%",
        scrub:true
    }
})

gsap.from(".page4_content2",{
    transform:"translate(0%,20%)",
    duration:2,
    scale:1.1,  
    opacity:0,
    scrollTrigger:{
        trigger:".page4_content2",
        scroller:"#main",
        start:"top 80%",
        end:"top 20%",
        scrub:true
    }
})

gsap.from(".page4_content3",{
    transform:"translate(0%,20%)",
    duration:2,
    scale:1.1,  
    opacity:0,
    scrollTrigger:{
        trigger:".page4_content3",
        scroller:"#main",
        start:"top 80%",
        end:"top 20%",
        scrub:true
    }
})

gsap.from(".page4_content4",{
    transform:"translate(0%,20%)",
    duration:2,
    scale:1.1,  
    opacity:0,
    scrollTrigger:{
        trigger:".page4_content4",
        scroller:"#main",
        start:"top 80%",
        end:"top 20%",
        scrub:true
    }
})


}
page4ContentAnimation()

function page5ScrollAnimation(){
    
var tl = gsap.timeline({
    scrollTrigger:{
        trigger:"#page5",
        scroller:"#main",
        scrub:2,
        start:"top -15%",
        end:"bottom 0",
        pin:true
    }
})
tl.to(".page5_content",{
    transform:"translate(-80%)",
    duration:10,
    delay:1  
},scroll)

tl.to('.inline',{
    x:691,
    duration:10,
    delay:1
},scroll)
}
page5ScrollAnimation()

function page5Anime(){
    var tl = gsap.timeline({
        scrollTrigger:{
            trigger:".page5_content1 h2",
            scroller:"#main",
            scrub:true,
            // markers:true,
            // start:"top 70%"
            end:"top 10%"
        }
    })

    tl.from(".page5_content1 h2",{
        transform:"translate(0%,40%)",
        opacity:0
    })
    
    tl.from(".page5_content1 p",{
        transform:"translate(0, 40%)",
        opacity:0
    })
    tl.from(".page5_content1 button",{
        transform:"translate(0% ,40%)",
        opacity:0
    })

    var tl2 = gsap.timeline({
        scrollTrigger:{
            trigger:".page5_content1 h2",
            scroller:"#main",
            scrub:true,
            // markers:true,
            // start:"top 70%"
            end:"top 10%"
        }
    })

    tl2.from(".page5_elems img",{
        transform:"translate(0% ,40%)",
        opacity:0
    })
    tl2.from(".page5_elems h2",{
        transform:"translate(0% ,40%)",
        opacity:0
    })

    tl2.from(".page5_elems p",{
        transform:"translate(0% ,40%)",
        opacity:0
    })
}
page5Anime()

function page6TopAnime(){
    var tl = gsap.timeline({
        scrollTrigger:{
            trigger:"#page6 h2",
            scroller:"#main",
            // markers:true,
            end:"top 30%",
            start:"top 90%",
            scrub:true
        }
    })

    tl.from("#page6 h2",{
        transform:"scale(1.1) translateY(10vh)",
        opacity:0
    })

    tl.from(".page6_top",{
        transform:"scale(1.1) translateY(2vh)",
        opacity:0
    })

    var tl2 = gsap.timeline({
        scrollTrigger:{
            trigger:".page6_bot_cont",
            scroller:"#main",
            scrub:true,
            start:"top 90%",
            end:"top -50%",
            // markers:true
        }
    })
    tl2.from(".page6_bot_cont",{
        transform:"scale(1.5, 1.2) ",
        opacity:0.1,    
    }, "kuch")

    tl2.from(".page6_bot_cont button",{
        transform:"scale(1.1) translateY(10vh)",
        opacity:0
    }, "kuch")

    tl2.from(".page6_bot_cont p",{
        transform:"scale(1.1) translateY(10vh)",
        opacity:0
    }, "kuch")


    var tl3 = gsap.timeline({
        scrollTrigger:{
            trigger:"#page6>p",
            scroller:"#main",
            scrub:true,
            start:"top 80%",
            end:"top 50%",
            // markers:true
        }
    })
    tl3.from("#page6>p",{
        transform:"scale(1.1) translateY(10vh)",
        opacity:0
    })

    tl3.from("#page6>button",{
        transform:"scale(1.1) translateY(10vh)",
        opacity:0
    })
}
page6TopAnime()

function page7Anime(){
    var tl = gsap.timeline({
        scrollTrigger:{
            trigger:".page7_top",
            scroller:"#main",
            start:"top 90%",
            // markers:true,
            scrub:true,
        }
    })

    tl.from(".page7_top h2",{
        transform:"translate(2vh, 5vh) scale(1.1)",
        opacity:0
    },"page7topsimilar")

    tl.from(".page7_top_right",{
        transform:"translate(2vh, 5vh) scale(1.1)",
        opacity:0
    },"page7topsimilar")

    tl.from(".page7_top p",{
        transform:"translate(2vh, 7vh) scale(1.2)",
        opacity:0
    })

    tl.from(".page7_bot1>.page7_bot_info",{
        transform:"translate(2vh, 7vh) scale(1.2)",
        opacity:0
    })

    tl.from(".page7_bot2>.page7_bot_info",{
        transform:"translate(2vh, 7vh) scale(1.2)",
        opacity:0
    })

    tl.from("#page7 button",{
        transform:"translate(0,10vh) scale(1.2)",
        opacity:0
    })

}
page7Anime()

function page8BgAnime(){
    document.querySelector('#page8').addEventListener("mousemove",function(e){
       document.querySelector("#page8").style.background = `conic-gradient(at  ${e.x}px ${e.y}px , #FFC3BE 0deg, #CED2FB 39.19deg, #C5E3FF 95.62deg, #BEEFF8 150.61deg, #B7F9F0 208.13deg, #F7FFC7 253.13deg, #FFE7D2 300deg, #FFD6CE 328.25deg, #FFC3BE 360deg), conic-gradient(from 176.66deg at 46.1% 33.87%, #E7E2F0 0deg, #95BFE8 39.19deg, #A3DEFF 104.7deg, #77A8F4 150.61deg, #6C89F0 210.89deg, #DAD4D4 272.3deg, #FFBBB4 314.64deg, #EFD4DB 328.25deg, #E7E2F0 360deg)`
    })
}
page8BgAnime()
