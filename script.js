```javascript
/* ==========================
   LOADER
========================== */

window.addEventListener("load", () => {

    const loader = document.getElementById("loader");

    setTimeout(() => {

        loader.style.opacity = "0";

        setTimeout(() => {
            loader.style.display = "none";
        }, 800);

    }, 1500);

});


/* ==========================
   TYPING EFFECT
========================== */

const typingElement =
document.getElementById("typing-text");

const words = [

    "News Video Editor",
    "Podcast Video Editor",
    "Medical Video Editor",
    "Reels Editor"

];

let wordIndex = 0;
let charIndex = 0;
let deleting = false;

function typeEffect() {

    const currentWord =
    words[wordIndex];

    if (!deleting) {

        typingElement.textContent =
        currentWord.substring(
            0,
            charIndex + 1
        );

        charIndex++;

        if (charIndex === currentWord.length) {

            deleting = true;

            setTimeout(typeEffect, 1500);

            return;
        }

    } else {

        typingElement.textContent =
        currentWord.substring(
            0,
            charIndex - 1
        );

        charIndex--;

        if (charIndex === 0) {

            deleting = false;

            wordIndex++;

            if (
                wordIndex >= words.length
            ) {
                wordIndex = 0;
            }
        }
    }

    setTimeout(
        typeEffect,
        deleting ? 50 : 100
    );
}

typeEffect();


/* ==========================
   LANGUAGE SWITCH
========================== */

const enBtn =
document.getElementById("enBtn");

const hiBtn =
document.getElementById("hiBtn");

function showEnglish() {

    document
        .querySelectorAll(".en")
        .forEach(el => {
            el.style.display = "block";
        });

    document
        .querySelectorAll(".hi")
        .forEach(el => {
            el.style.display = "none";
        });

    enBtn.classList.add("active");
    hiBtn.classList.remove("active");

}

function showHindi() {

    document
        .querySelectorAll(".en")
        .forEach(el => {
            el.style.display = "none";
        });

    document
        .querySelectorAll(".hi")
        .forEach(el => {
            el.style.display = "block";
        });

    hiBtn.classList.add("active");
    enBtn.classList.remove("active");

}

enBtn.addEventListener(
    "click",
    showEnglish
);

hiBtn.addEventListener(
    "click",
    showHindi
);


/* ==========================
   SCROLL REVEAL
========================== */

const revealElements = document
.querySelectorAll(

    ".glass-card,\
     .video-card,\
     .timeline-item,\
     .skill-card,\
     .contact-card"

);

revealElements.forEach(el => {
    el.classList.add("reveal");
});

function revealOnScroll() {

    revealElements.forEach(element => {

        const windowHeight =
        window.innerHeight;

        const elementTop =
        element.getBoundingClientRect().top;

        if (
            elementTop <
            windowHeight - 100
        ) {

            element.classList.add(
                "active"
            );
        }
    });

}

window.addEventListener(
    "scroll",
    revealOnScroll
);

revealOnScroll();


/* ==========================
   HERO COUNTER ANIMATION
========================== */

const statNumbers =
document.querySelectorAll(
    ".hero-stat h3"
);

let counterStarted = false;

function animateCounters() {

    if (counterStarted) return;

    const statsSection =
    document.querySelector(
        ".hero-stats"
    );

    const sectionTop =
    statsSection
    .getBoundingClientRect().top;

    if (
        sectionTop <
        window.innerHeight - 100
    ) {

        counterStarted = true;

        statNumbers.forEach(stat => {

            let finalValue =
            stat.innerText;

            let numericValue =
            parseInt(
                finalValue.replace(
                    /\D/g,
                    ""
                )
            );

            let count = 0;

            let speed =
            numericValue / 50;

            const interval =
            setInterval(() => {

                count += speed;

                if (
                    count >= numericValue
                ) {

                    stat.innerText =
                    finalValue;

                    clearInterval(
                        interval
                    );

                } else {

                    if (
                        finalValue.includes(
                            "%"
                        )
                    ) {

                        stat.innerText =
                        Math.floor(count) +
                        "%";

                    }

                    else if (
                        finalValue.includes(
                            "+"
                        )
                    ) {

                        stat.innerText =
                        Math.floor(count) +
                        "+";

                    }

                    else {

                        stat.innerText =
                        Math.floor(count);

                    }

                }

            }, 30);

        });

    }

}

window.addEventListener(
    "scroll",
    animateCounters
);

animateCounters();


/* ==========================
   NAVIGATION HIGHLIGHT
========================== */

const sections =
document.querySelectorAll(
    "section"
);

window.addEventListener(
    "scroll",
    () => {

        let current = "";

        sections.forEach(section => {

            const sectionTop =
            section.offsetTop;

            if (
                pageYOffset >=
                sectionTop - 200
            ) {

                current =
                section.getAttribute(
                    "id"
                );
            }

        });

    }
);


/* ==========================
   VIDEO HOVER EFFECT
========================== */

const videoCards =
document.querySelectorAll(
    ".video-card"
);

videoCards.forEach(card => {

    card.addEventListener(
        "mouseenter",
        () => {

            card.style.transform =
            "translateY(-10px) scale(1.02)";

        }
    );

    card.addEventListener(
        "mouseleave",
        () => {

            card.style.transform =
            "translateY(0) scale(1)";

        }
    );

});


/* ==========================
   PARALLAX EFFECT
========================== */

window.addEventListener(
    "mousemove",
    e => {

        const heroBg =
        document.querySelector(
            ".hero-bg"
        );

        const x =
        e.clientX / window.innerWidth;

        const y =
        e.clientY / window.innerHeight;

        heroBg.style.transform =
        `translate(
            ${x * 20}px,
            ${y * 20}px
        )`;

    }
);


/* ==========================
   SMOOTH SECTION FADE
========================== */

const observer =
new IntersectionObserver(

    entries => {

        entries.forEach(entry => {

            if (
                entry.isIntersecting
            ) {

                entry.target.classList.add(
                    "active"
                );

            }

        });

    },

    {
        threshold: 0.15
    }

);

document
.querySelectorAll(".reveal")
.forEach(el => {

    observer.observe(el);

});


/* ==========================
   CONSOLE SIGNATURE
========================== */

console.log(
"%cAjai Gupta Portfolio V2",
"color:#ff2d2d;font-size:18px;font-weight:bold;"
);

console.log(
"%cDesigned for Premium Video Editing Portfolio",
"color:white;"
);
```
