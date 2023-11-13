const main = document.querySelector('.container-vantagens');
const child = document.querySelectorAll('.vantagem-single');

const main_B = document.querySelector('.container-beneficios');
const child_B = document.querySelectorAll('.beneficio-single');

esvSlide(main, child, {
    arrows: true,
    bullets: false,
    speed: 3000,
    autoPlay: true,
    centerPadding: 20,
    sliderMargin: '10',
    slidesToShow: 3,
    infinite: true,
    responsive: [{
        point: 840,
        seg: {
            autoplayReverse: false,
            slidesToShow: 2,
            infinite: true,
            autoPlay: true,
            arrows: true,
            touch: false
        }
    },{        
        point: 600,
        seg:{
            arrows: true,
            slidesToShow: 1,
            sliderMargin: '10',
            bullets: true,
            touch: true,
            centerPadding: 40,
            infinite: true
        }
    }]
});

esvSlide(main_B, child_B, {
    arrows: true,
    bullets: false,
    speed: 3000,
    autoPlay: true,
    centerPadding: 20,
    sliderMargin: '10',
    slidesToShow: 3,
    infinite: true,
    responsive: [{
        point: 840,
        seg: {
            autoplayReverse: false,
            slidesToShow: 2,
            infinite: true,
            autoPlay: true,
            arrows: true,
            touch: false,
        }
    },{
        point: 600,
        seg:{
            arrows: true,
            bullets: true,
            slidesToShow: 1,
            centerPadding: 40,
            sliderMargin: '10',
            infinite: true,
            touch: true
        }
    }]
});
