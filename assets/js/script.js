// NAVBAR
const menuIcon = document.getElementById("menu-icon");
const menuList = document.getElementById("menu-list");

menuIcon.addEventListener("click", () => {
    menuList.classList.toggle("hidden");
})

// LIVE HERO SECTION
document.addEventListener("DOMContentLoaded", function () {
    const liveHero = document.querySelector(".live-hero");
    const items = Array.from(document.querySelectorAll(".live-hero .live"));
    
    // Duplikasi elemen agar animasi berjalan tanpa jeda
    items.forEach(item => {
        const clone = item.cloneNode(true);
        liveHero.appendChild(clone);
    });
});


// BIDANG SECTION
document.addEventListener("DOMContentLoaded", function () {
    let currentIndex = 0;
    const slides = document.querySelectorAll(".bidang-slide");
    const dots = document.querySelectorAll(".dot");
    const prevBtn = document.getElementById("prev");
    const nextBtn = document.getElementById("next");

    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.classList.toggle("active", i === index);
        });

        dots.forEach((dot, i) => {
            dot.classList.toggle("active", i === index);
        });
    }

    prevBtn.addEventListener("click", function () {
        if (currentIndex > 0) {
            currentIndex--;
            showSlide(currentIndex);
        }
    });

    nextBtn.addEventListener("click", function () {
        if (currentIndex < slides.length - 1) {
            currentIndex++;
            showSlide(currentIndex);
        }
    });

    dots.forEach((dot, i) => {
        dot.addEventListener("click", function () {
            currentIndex = i;
            showSlide(currentIndex);
        });
    });

    // Tampilkan slide pertama saat halaman dimuat
    showSlide(currentIndex);
});
// LIVE BIDANG SECTION
document.addEventListener("DOMContentLoaded", function () {
    const liveBidang = document.querySelector(".live-bidang");
    const items = Array.from(document.querySelectorAll(".live-bidang .live"));
    
    // Duplikasi elemen agar animasi berjalan tanpa jeda
    items.forEach(item => {
        const clone = item.cloneNode(true);
        liveBidang.appendChild(clone);
    });
});

// TIMELINE SECTION
document.addEventListener("DOMContentLoaded", function() {
    const timelineItems = document.querySelectorAll(".timeline-item");

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("fade-in");
            }
        });
    }, { threshold: 0.5 });

    timelineItems.forEach(item => observer.observe(item));
});