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
            markers:true,
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
            markers:true,
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