/************************************
 Sticky Navbar
************************************/

const navbar = document.querySelector(".custom-navbar");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {

        navbar.classList.add("scrolled");

    } else {

        navbar.classList.remove("scrolled");

    }

});


/************************************
 Typing Animation
************************************/

new Typed("#typing", {

    strings: [

        "Senior Full Stack Developer",

        "MERN Stack Developer",

        "React Native Developer",

        "Node.js Backend Engineer",

        "AI Solutions Developer"

    ],

    typeSpeed: 60,

    backSpeed: 35,

    backDelay: 1800,

    loop: true

});


/************************************
 Counter Animation
************************************/

const counters = document.querySelectorAll(".counter");

let counterStarted = false;

function startCounter() {

    if (counterStarted) return;

    const statsSection = document.querySelector("#stats");

    const sectionTop = statsSection.getBoundingClientRect().top;

    if (sectionTop < window.innerHeight - 100) {

        counterStarted = true;

        counters.forEach(counter => {

            const target = +counter.dataset.target;

            let count = 0;

            const increment = Math.max(1, Math.ceil(target / 80));

            const updateCounter = () => {

                count += increment;

                if (count >= target) {

                    counter.innerHTML = target + (target === 100 ? "%" : "+");

                } else {

                    counter.innerHTML = count;

                    requestAnimationFrame(updateCounter);

                }

            };

            updateCounter();

        });

    }

}

window.addEventListener("scroll", startCounter);
window.addEventListener("load", startCounter);

/************************************
 Skill Card Animation
************************************/

const skillCards = document.querySelectorAll(".skill-card");

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.add("show");

        }

    });

}, {

    threshold:0.2

});

skillCards.forEach(card => {

    observer.observe(card);

});

/************************************
 Experience Animation
************************************/

const timelineItems = document.querySelectorAll(".timeline-item");

const timelineObserver = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if(entry.isIntersecting){

            entry.target.classList.add("show");

        }

    });

},{
    threshold:0.2
});

timelineItems.forEach(item=>{

    timelineObserver.observe(item);

});
/************************************
 Professional Highlights Animation
************************************/

const highlightCards = document.querySelectorAll(".highlight-card");

const highlightObserver = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if(entry.isIntersecting){

            entry.target.classList.add("show");

        }

    });

},{

    threshold:0.2

});

highlightCards.forEach(card=>{

    highlightObserver.observe(card);

});

/************************************
 Contact Form
************************************/

const form = document.getElementById("contactForm");

const success = document.getElementById("formSuccess");

form.addEventListener("submit", function(e){

    e.preventDefault();

    success.classList.remove("d-none");

    form.reset();

});

/************************************
 Back To Top
************************************/

const backToTop = document.getElementById("backToTop");

// Show/Hide button on scroll
window.addEventListener("scroll", () => {

    if (window.scrollY > 300) {

        backToTop.classList.add("show");

    } else {

        backToTop.classList.remove("show");

    }

});

// Smooth scroll to top
backToTop.addEventListener("click", () => {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

});

/************************************
 Ripple Effect
************************************/

backToTop.addEventListener("click", function () {

    this.classList.add("clicked");

    setTimeout(() => {

        this.classList.remove("clicked");

    }, 250);

});