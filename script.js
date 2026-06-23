/* ==================================
   TYPING ANIMATION
================================== */

const roles = [
    "Web Developer",
    "AI Enthusiast",
    "Computer Science Student",
];

let roleIndex = 0;
let charIndex = 0;
let isDeleting = false;

const typingElement = document.getElementById("typing");

function typeEffect() {

    const currentRole = roles[roleIndex];

    if (!isDeleting) {

        typingElement.textContent =
            currentRole.substring(0, charIndex + 1);

        charIndex++;

        if (charIndex === currentRole.length) {

            isDeleting = true;

            setTimeout(typeEffect, 1500);
            return;
        }

    } 
    else {

        typingElement.textContent =
            currentRole.substring(0, charIndex - 1);

        charIndex--;

        if (charIndex === 0) {

            isDeleting = false;

            roleIndex++;

            if (roleIndex === roles.length) {
                roleIndex = 0;
            }

        }

    }

    setTimeout(typeEffect, isDeleting ? 70 : 120);
}


/* Start typing animation */
if (typingElement) {
    typeEffect();
}



/* ==================================
   SCROLL REVEAL ANIMATION
================================== */

const sections = document.querySelectorAll("section");


const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.add("show");

        }

    });

}, {
    threshold: 0.2
});


sections.forEach(section => {

    section.classList.add("hidden");

    observer.observe(section);

});



/* ==================================
   SCROLL PROGRESS BAR
================================== */

window.addEventListener("scroll", () => {

    const scrollTop =
        document.documentElement.scrollTop;

    const scrollHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;


    const progress =
        (scrollTop / scrollHeight) * 100;


    const progressBar =
        document.querySelector(".progress-bar");


    if (progressBar) {

        progressBar.style.width =
            progress + "%";

    }

});



/* ==================================
   BACK TO TOP BUTTON
================================== */

const topBtn = document.getElementById("topBtn");


window.addEventListener("scroll", () => {

    if (window.scrollY > 300) {

        topBtn.style.display = "block";

    }
    else {

        topBtn.style.display = "none";

    }

});


/* Smooth scroll to top */

if (topBtn) {

    topBtn.addEventListener("click", () => {

        window.scrollTo({

            top: 0,
            behavior: "smooth"

        });

    });

}



/* ==================================
   NAVBAR BACKGROUND ON SCROLL
================================== */

const navbar = document.querySelector(".navbar");


window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {

        navbar.style.background =
            "rgba(5, 8, 18, 0.95)";

        navbar.style.boxShadow =
            "0 0 25px #00BFFF";

    }
    else {

        navbar.style.background =
            "rgba(0, 0, 0, 0.25)";

        navbar.style.boxShadow = "none";

    }

});