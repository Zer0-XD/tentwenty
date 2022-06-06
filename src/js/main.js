import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

import LocomotiveScroll from "locomotive-scroll";

gsap.registerPlugin(ScrollTrigger);


// smooth scroll




// ------------------

let sections = gsap.utils.toArray(".section"),
    container = document.querySelector(".scrollContainer"),
    scrollTriggerEnabled;


if (matchMedia) {
    const query = window.matchMedia("(min-width: 767px)");
    query.addListener(WidthChange);
    WidthChange(query);
}


function WidthChange(mq) {
    let shouldEnable = mq.matches,
        trigger = ScrollTrigger.getById("trigger");
    if (shouldEnable !== scrollTriggerEnabled) {
        if (trigger) {
            gsap.killTweensOf([trigger.scroller, trigger.animation]);
            gsap.set(sections, { xPercent: 0, overwrite: true });
            trigger.kill(true);
        }
        if (shouldEnable) {
            gsap.to(sections, {
                xPercent: -100 * (sections.length - 1),
                // x: () => `-${maxWidth - window.innerWidth}`,
                ease: "none",
                scrollTrigger: {
                    trigger: container,
                    pin: true,
                    preventOverlaps: "auto",
                    scrub: 1,
                    snap: {
                        snapTo: "div",
                        duration: { min: 0.2, max: 3 },
                        delay: 0.2,
                        ease: "easeOut",
                    },
                    end: () => "bottom 100",
                },
            });

        }
    }
    scrollTriggerEnabled = shouldEnable;
}


// let sections = gsap.utils.toArray(".section");
// gsap.registerPlugin(ScrollTrigger);
// let maxWidth = 0;

const getMaxWidth = () => {
    maxWidth = 0;
    sections.forEach((section) => {
        maxWidth += section.offsetWidth;
    });
};
getMaxWidth();
ScrollTrigger.addEventListener("refreshInit", getMaxWidth);

// gsap.to(sections, {
//     x: () => `-${maxWidth - window.innerWidth}`,
//     ease: "none",
//     scrollTrigger: {
//         trigger: ".scrollContainer",
//         pin: '.scrollContainer',
//         scrub: true,
//         anticipatePin: true,
//         end: () => `+=${maxWidth}`,
//         invalidateOnRefresh: true
//     }
// });

sections.forEach((sct, i) => {
    ScrollTrigger.create({
        trigger: sct,
        start: () => 'top top-=' + (sct.offsetLeft - window.innerWidth / 2) * (maxWidth / (maxWidth - window.innerWidth)),
        end: () => '+=' + sct.offsetWidth * (maxWidth / (maxWidth - window.innerWidth * 2)),
    });
});
// ------


// animations

const tl = gsap.timeline();

tl.to(".sub-text", .8, {
    y: -40,
    ease: "Sine.easeInOut",
    delay: 1,
    // skewY: 10,
    opacity: 1,
    stagger: {
        amount: 0.4
    }
})
    .to(".big-text", .8, {
        y: -40,
        ease: "Sine.easeInOut",
        delay: 0.25,
        // skewY: 10,
        opacity: 1,
        stagger: {
            amount: 0.8
        }
    })


// second section
gsap.to(".big-text-two", {
    delay: 1,
    stagger: {
        amount: 0.8
    },
    duration: 3,
    y: window.innerWidth < 767 ? -50 : -40,
    opacity: 1,
    ease: "Sine.easeInOut",
    scrollTrigger: {
        trigger: ".second-section",
        start: window.innerWidth < 767 ? "top center" : "top  12%",
        end: "center",
        scrub: 0.5,
    }
});

gsap.to(".img-1", {
    duration: 2,
    y: window.innerWidth < 767 ? -20 : -100,
    // height: 565.32,
    width: window.innerWidth < 767 ? 381.67 : 748.33,
    opacity: 1,
    ease: "Sine.easeInOut",
    scrollTrigger: {
        trigger: ".second-section",
        start: window.innerWidth < 767 ? "top 20%" : "center 30%",
        end: "center bottom",
        scrub: 0.5,
    }
});

gsap.to(".img-2", {
    duration: 2,
    y: window.innerWidth < 767 ? -20 : -400,
    ease: "Sine.easeInOut",
    scrollTrigger: {
        // scroller: scroller,
        trigger: ".second-section",
        start: window.innerWidth < 767 ? "top 20%" : "center 30%",
        end: "bottom center",
        scrub: 1,
    }
})

gsap.to(".img-3", {
    duration: 2,
    // x: -500,
    right: 130,
    opacity: 1,
    // height: 565.32,
    // width: 350,
    ease: "Sine.easeInOut",
    scrollTrigger: {
        // scroller: scroller,
        trigger: ".second-bg",
        start: "center 60%",
        end: "center 90%",
        scrub: 1,
    }
})

gsap.to(".img-second-bg", {
    duration: 2,
    delay: 0.5,
    width: 727,
    opacity: 1,
    ease: "Sine.easeInOut",
    scrollTrigger: {
        // scroller: scroller,
        trigger: window.innerWidth < 767 ? ".second-section" : ".third-section",
        start: window.innerWidth < 767 ? "top 30%" : "center 10% ",
        end: "center 60%",
        scrub: 1,
    },
    stagger: {
        amount: 0.8
    }
})


// third section
gsap.to(".text-one", {
    x: 300,
    ease: "Sine.easeInOut",
    delay: 1.5,
    // skewY: 10,
    opacity: 1,
    trigger: ".third-section",
    scrollTrigger: {
        trigger: ".third-section",
        start: window.innerWidth < 767 ? "center 15%" : "bottom 20%",
        end: "bottom 50%",
        scrub: 1,
    },
    stagger: {
        amount: 0.8
    }
})

gsap.to(".text-two", {
    x: -300,
    ease: "Sine.easeInOut",
    delay: .5,
    // skewY: 10,
    opacity: 1,
    stagger: {
        amount: 0.8
    },
    scrollTrigger: {
        trigger: ".third-section",
        start: window.innerWidth < 767 ? "top 35%" : "bottom 20%",
        end: "bottom 40%",
        scrub: 1,
    },
})


tl.to(".header", .8, {
    y: -10,
    ease: "Sine.easeInOut",
    delay: 1,
    // skewY: 10,
    duration: 2,
    opacity: 1,
    scrollTrigger: {
        trigger: ".third-section",
        start: window.innerWidth < 767 ? "top 35%" : "bottom 25%",
        end: "bottom 40%",
        scrub: 1,
    },
    stagger: {
        amount: 0.4
    }
})
    .to(".row span", .8, {
        y: -5,
        ease: "Sine.easeInOut",
        delay: 0.25,
        // skewY: 10,
        duration: 1,
        opacity: 1,
        scrollTrigger: {
            trigger: ".third-section",
            start: window.innerWidth < 767 ? "top 35%" : "bottom 25%",
            end: "bottom 50%",
            scrub: 1,
        },
        stagger: {
            amount: 0.8
        }
    })
    .to(".img-rotated", .8, {
        y: -5,
        ease: "Sine.easeInOut",
        delay: 0.25,
        // skewY: 10,
        duration: 1,
        opacity: 1,
        rotate: 2.69,
        scrollTrigger: {
            trigger: ".third-section",
            start: window.innerWidth < 767 ? "top 40%" : "bottom 25%",
            end: "bottom 40%",
            scrub: 1,
        },
        stagger: {
            amount: 0.8
        }
    })


gsap.to(".enquiry-btn", {
    // x: -300,
    ease: "Sine.easeInOut",
    delay: .5,
    // skewY: 10,
    opacity: 1,
    stagger: {
        amount: 0.8
    },
    trigger: ".third-section",
    scrollTrigger: {
        trigger: ".third-section",
        start: window.innerWidth < 767 ? "top: 40%" : "bottom 25%",
        end: "bottom 50%",
        scrub: 1,
    },
})



// skewing
let proxy = { skew: 0 }

skewSetter = gsap.quickSetter(".skewed", "skewY", "deg"), // fast
    clamp = gsap.utils.clamp(-20, 20); // don't let the skew go beyond 20 degrees. 

ScrollTrigger.create({
    onUpdate: (self) => {
        let skew = clamp(self.getVelocity() / -300);
        // only do something if the skew is MORE severe. Remember, we're always tweening back to 0, so if the user slows their scrolling quickly, it's more natural to just let the tween handle that smoothly rather than jumping to the smaller skew.
        if (Math.abs(skew) > Math.abs(proxy.skew)) {
            proxy.skew = skew;
            gsap.to(proxy, { skew: 0, duration: 0.8, ease: "power3", overwrite: true, onUpdate: () => skewSetter(proxy.skew) });
        }
    }
});

// make the right edge "stick" to the scroll bar. force3D: true improves performance
gsap.set(".skewed", { transformOrigin: "center", force3D: true });