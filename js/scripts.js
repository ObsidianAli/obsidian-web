var controller = new ScrollMagic.Controller();

var timeline = new TimelineMax();

timeline
    .fromTo('#slide-text', 2, {y: '0%'}, {y: '-100%'})
    .fromTo('.card', 2, {y: '100%'}, {y: '0%', autoAlpha: 1}, '-=2');

var scene = new ScrollMagic.Scene({
    triggerElement: '.matte-black-block',
    duration: '200%',
    triggerHook: 0,
})
.setTween(timeline)
.setPin('.matte-black-block')
.addTo(controller);