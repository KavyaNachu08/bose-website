import '../scss/index.scss'

const close = document.querySelector('.header-top__button');
const hTop = document.querySelector('.header-top');
const navBar = document.querySelector('header');
const firstScroll = document.querySelectorAll('.item');
const arrow = document.querySelectorAll('.arrow');
const arrow1 = document.querySelectorAll('.arrow1');
const arrow2 = document.querySelectorAll('.arrow2');
const slider = document.querySelector('.slider').offsetWidth;
const sliderImage = document.querySelector('.slider'); 
const sliderImage1 = document.querySelector('.slider-1'); 
const images = document.querySelector('.shares__carousel__list').offsetWidth;
const carousel = document.querySelector('.shares__carousel__list');
let lastScrollTop = 0;

function toggle() {
    console.log('clicked');
    hTop.classList.remove('header-top__button');
    hTop.classList.add('d-none');
}

function headerScroll() {
    let scrollTop = window.scrollY || document.documentElement.scrollTop;
    if (scrollTop > lastScrollTop) {
        navBar.style.top = -navBar.offsetHeight + 'px';
    }
    else {
        navBar.style.top = '0';
    }
    lastScrollTop = scrollTop;
}

function scrollScale(para) {

    gsap.timeline({
        scrollTrigger: {
            trigger: para,
            scrub: true,
            pin: true,
            start: "80% 80%",
            end: "+=200%"
        }
    })

        .from(para, {
            scale: 0.8,
            ease: "none"
        })

        .from(para, {
            scale: 1,
            ease: "none"
        })
}

for (let i = 0; i < firstScroll.length; i++) {
    scrollScale(firstScroll[i]);
}

arrow.forEach(btn => {
    btn.addEventListener("click", () => {
        carousel.scrollLeft += btn.id === "left" ? -images : images;
    })
})

arrow1.forEach(btn => {
    btn.addEventListener("click", () => {
        sliderImage1.scrollLeft += btn.id === "left-click2" ? -slider : slider;
    })
})

arrow2.forEach(btn => {
    btn.addEventListener("click", () => {
        sliderImage.scrollLeft += btn.id === "left-click" ? -slider : slider;
    })
})



close.addEventListener('click', toggle);    
window.addEventListener('scroll', headerScroll);