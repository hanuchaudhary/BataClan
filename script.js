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
