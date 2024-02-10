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

function videoAnimation(){
    gsap.to("video",{
        transform:"scaleX(0.9)",
        filter:"blur(20px)",
        scrollTrigger:{
            trigger:"#page1",
            scroller:"body",
            markers:true,
            start:"top 0",
            end:"top -50%",
            scrub:true
        }
    })
}
videoAnimation()

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

function navHover(){
    var nav = document.querySelector('#nav')
nav.addEventListener('mouseenter',()=>{
    cursorScaleInc()
})

nav.addEventListener('mouseleave',()=>{
    cursorScaleDec()
})
}
navHover()

