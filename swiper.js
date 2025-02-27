// Testimonial Slider
const swiper1 = new Swiper('.testimonialSwiper', {
    loop: false, // Infinite scrolling
    autoplay: { delay: 4000 },
    navigation: { nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev' },
    pagination: { el: '.swiper-pagination', clickable: true },
    slidesPerView: 3, // Show ONE product at a time
    spaceBetween: 20, // Space between products
    breakpoints: {
        0: {
            slidesPerView: 1
        },
        768: {
            slidesPerView: 2,
            spaceBetween: 12
        },
        1024: {
            slidesPerView: 3
        }
    }
});
// Products Slider
const productSwiper = new Swiper('.swiper-products', {
    loop: false,
    spaceBetween: 10,

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next-prod',
        prevEl: '.swiper-button-prev-prod',
    },

    // breakpoints
    breakpoints: {
        0: {
            slidesPerView: 2
        },
        768: {
            slidesPerView: 3
        },
        1024: {
            slidesPerView: 5
        }
    }
});

// ACCORDION
const accordion = document.querySelectorAll(".accordion-header");

accordion.forEach((acc) => {
    acc.addEventListener("click", () => {
        const content = acc.nextElementSibling;// Gets the content related to the clicked header
        const icon = acc.querySelector(".plusIcon i");// Get the icon inside the header

        // checks if the clicked accordion is already active or not
        const isOpen = content.classList.contains("open");

        // close all accordion items
        document.querySelectorAll(".accordion-content").forEach((item) => {
            item.classList.remove("open"); // Remove open class from all
            item.previousElementSibling.classList.remove("active"); //Remove active class from headers
            item.previousElementSibling.querySelector(".plusIcon i").classList.remove("fa-times"); //change to plus
            item.previousElementSibling.querySelector(".plusIcon i").classList.add("fa-plus") //Add plus icon back
        })
        if (!isOpen) {
            acc.classList.add("active");
            content.classList.add("open");
            icon.classList.remove("fa-plus");
            icon.classList.add("fa-times");
        }

    })
});

// Set countdown for 60 days from now
let saleEndTime = new Date().getTime() + 60 * 24 * 60 * 60 * 1000; // 60 days in milliseconds

const updateTimer = () => {
    let now = new Date().getTime();
    let timeLeft = saleEndTime - now;

    if (timeLeft > 0) {
        let days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
        let hours = Math.floor((timeLeft / (1000 * 60 * 60)) % 24);
        let minutes = Math.floor((timeLeft / (1000 * 60)) % 60);
        let seconds = Math.floor((timeLeft / 1000) % 60);

        document.getElementById("timer").innerText =
            `${days}d ${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
    } else {
        document.getElementById("timer").innerText = "Sale Ended!";
        let checkoutLink = document.getElementById("checkoutLink");
        checkoutLink.classList.add("disabled");
        checkoutLink.removeAttribute("href"); // Disable the link
        clearInterval(timerInterval);
    }
};

const timerInterval = setInterval(updateTimer, 1000);
updateTimer(); // Initial call to avoid 1-second delay

