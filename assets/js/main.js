//locomotive smooth scroll

const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});


//gsap 
gsap.from(".nlink", {
    stagger: .1,
    y: 20,
    duration: 1,
    ease: Power3,
    opacity: 0
});


Shery.textAnimate("#heading h1, #heading h2", {
    style: 1,
    y: 10,
    delay: 0.5,
    duration: 1,
    ease: "cubic-bezier(0.23, 1, 0.320, 1)",
    multiplier: 0.1
});

gsap.from(".anim2", {
    ease: Power4,
    opacity: 0.1,
    duration: 2,
    rotate: "45deg",
    width: '1px',
});

gsap.from(".anim2 h4, .anim2 h2, .anim2 p", {
    ease: Power3,
    opacity: 0.1,
    duration: 4,
    filter: 'blur(20px)'
});


Shery.imageEffect("img.imgntext", {
    style: 3,
    config: { "uFrequencyX": { "value": 12, "range": [0, 100] }, "uFrequencyY": { "value": 12, "range": [0, 100] }, "uFrequencyZ": { "value": 10, "range": [0, 100] }, "geoVertex": { "range": [1, 64], "value": 32 }, "zindex": { "value": "50", "range": [-100, 100] }, "aspect": { "value": 1.0000001092185 }, "ignoreShapeAspect": { "value": true }, "shapePosition": { "value": { "x": 0, "y": 0 } }, "shapeScale": { "value": { "x": 0.5, "y": 0.5 } }, "shapeEdgeSoftness": { "value": 0, "range": [0, 0.5] }, "shapeRadius": { "value": 0, "range": [0, 2] }, "currentScroll": { "value": 0 }, "scrollLerp": { "value": 0.07 }, "gooey": { "value": false }, "infiniteGooey": { "value": false }, "growSize": { "value": 4, "range": [1, 15] }, "durationOut": { "value": 1, "range": [0.1, 5] }, "durationIn": { "value": 1.5, "range": [0.1, 5] }, "displaceAmount": { "value": 0.5 }, "masker": { "value": true }, "maskVal": { "value": 1.18, "range": [1, 5] }, "scrollType": { "value": 0 }, "noEffectGooey": { "value": true }, "onMouse": { "value": 0 }, "noise_speed": { "value": 0.2, "range": [0, 10] }, "metaball": { "value": 0.2, "range": [0, 2] }, "discard_threshold": { "value": 0.5, "range": [0, 1] }, "antialias_threshold": { "value": 0.002, "range": [0, 0.1] }, "noise_height": { "value": 0.5, "range": [0, 2] }, "noise_scale": { "value": 10, "range": [0, 100] } },
});


Shery.imageEffect("#bimg", {
    style: 4,
    gooey: true
});




document.querySelector("#future button").addEventListener("mouseover", () => {
    gsap.to('#future video', {
        opacity: 1,
        duration: 2,
        scale: 1,
        ease: Power3,
        borderRadius: '0%',
    });
});

document.querySelector("#future button").addEventListener("mouseleave", () => {
    gsap.to('#future video', {
        opacity: 0.1,
        duration: 2,
        scale: 0,
        ease: Power3,
        borderRadius: '250px',
    });
});







