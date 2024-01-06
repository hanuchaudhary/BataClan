function locomotiveScroll() {
    gsap.registerPlugin(ScrollTrigger);

    const locoScroll = new LocomotiveScroll({
        el: document.querySelector("main"),
        smooth: true
    });
    locoScroll.on("scroll", ScrollTrigger.update);

    ScrollTrigger.scrollerProxy("main", {
        scrollTop(value) {
            return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
        },
        getBoundingClientRect() {
            return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
        },

        pinType: document.querySelector("main").style.transform ? "transform" : "fixed"
    });
}
locomotiveScroll()

let images = document.querySelector(".images");
let elem = document.querySelectorAll(".elem");
elem.forEach(function (e) {
    e.addEventListener("mouseenter", function () {
        let elemImage = e.getAttribute("elemImage");
        images.style.backgroundImage = `url(${elemImage})`;
    })
    e.addEventListener("mouseleave", function () {
        let elemImage = e.getAttribute("elemImage");
        images.style.backgroundImage = `url("https://bataclan-medias.s3.eu-west-3.amazonaws.com/tesseract_1920_c81083e9cf.jpg")`;
    })
})

function navAnim() {
    gsap.to("nav", {
        transform: "translateY(-100%)",
        scrollTrigger: {
            trigger: ".page1",
            scroller: "main",
            start: "top 0",
            end: "top -10%",
            scrub: true,
        }
    })
}
navAnim()

gsap.from(".page1 h1", {
    transform: "translateY(100%)",
    stagger: .2,
    opacity: 0,
    duration: .5,
    scrub:3
})

gsap.from(".elems .elem", {
    transform: "translateY(-100%)",
    stagger:.2,
    opacity: 0,
    duration:.5,
    // delay:2
    scrollTrigger: {
        trigger: ".page2",
        scroller: "main",
        start: "top 90%",
        end: "top 0",
        markers:true,
        scrub: true,
    }
})