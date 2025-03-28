// Tambahkan fungsi Loader
window.addEventListener("load", function () {
  const loaderWrapper = document.getElementById("loader-wrapper");

  if (loaderWrapper) {
    setTimeout(() => {
      loaderWrapper.classList.add("hidden"); // Mulai transisi opacity 0.5s
    }, 1500); // Loader tetap tampil minimal 1.5 detik agar animasi terlihat

    setTimeout(() => {
      loaderWrapper.style.display = "none"; // Sembunyikan setelah transisi selesai
    }, 2000); // Sesuai dengan durasi transition CSS + jeda tampilan
  }
});

// Mencegah Inspect Element dan View Source
document.addEventListener("keydown", function (event) {
  if (
    (event.ctrlKey &&
      (event.key === "u" ||
        event.key === "i" ||
        event.key === "j" ||
        event.key === "s")) ||
    (event.ctrlKey &&
      event.shiftKey &&
      (event.key === "I" || event.key === "J" || event.key === "C")) ||
    event.key === "F12"
  ) {
    event.preventDefault();
    console.log("Inspect Element telah dinonaktifkan!"); // Debugging
  }
});
// Mencegah Klik Kanan
document.addEventListener("contextmenu", function (event) {
  event.preventDefault();
});
// Mencegah Drag & Drop pada Semua Gambar
document.addEventListener("dragstart", function (event) {
  event.preventDefault();
});
// Mencegah Klik Kanan pada Gambar Secara Spesifik
document.querySelectorAll("img").forEach((img) => {
  img.addEventListener("contextmenu", (event) => event.preventDefault());
});

// NAVBAR
const menuIcon = document.getElementById("menu-icon");
const menuList = document.getElementById("menu-list");

menuIcon.addEventListener("click", () => {
  if (menuList.classList.contains("hidden")) {
    menuList.classList.remove("hidden");
    menuList.style.transform = "translateY(-10px)";
    menuList.style.opacity = "0";

    setTimeout(() => {
      menuList.style.transform = "translateY(0)";
      menuList.style.opacity = "1";
    }, 10);
  } else {
    menuList.style.transform = "translateY(-10px)";
    menuList.style.opacity = "0";

    setTimeout(() => {
      menuList.classList.add("hidden");
    }, 300);
  }
});
document.querySelectorAll("#menu-list a").forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault(); // Mencegah loncatan instan ke bagian yang diklik

    const targetId = link.getAttribute("href").substring(1); // Mengambil ID tujuan
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop - 80, // Sesuaikan offset agar tidak tertutup navbar
        behavior: "smooth", // Efek transisi scroll
      });
    }

    // Tutup menu setelah diklik di tampilan mobile
    if (window.innerWidth <= 768) {
      menuList.style.transform = "translateY(-10px)";
      menuList.style.opacity = "0";
      setTimeout(() => {
        menuList.classList.add("hidden");
      }, 300);
    }
  });
});

// HERO SECTION
document.addEventListener("DOMContentLoaded", function () {
  let getStartedBtn = document.querySelector(".button");
  let aboutSection = document.getElementById("about");

  // Ketika tombol Get Started diklik, scroll ke bagian About
  getStartedBtn.addEventListener("click", function () {
    aboutSection.scrollIntoView({ behavior: "smooth" });
  });
});

// LIVE HERO SECTION
document.addEventListener("DOMContentLoaded", function () {
  const liveHero = document.querySelector(".live-hero");
  const items = Array.from(document.querySelectorAll(".live-hero .live"));

  // Duplikasi elemen agar animasi berjalan tanpa jeda
  items.forEach((item) => {
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
  items.forEach((item) => {
    const clone = item.cloneNode(true);
    liveBidang.appendChild(clone);
  });
});
document.addEventListener("DOMContentLoaded", function () {
  let currentIndex = 0;
  const slides = document.querySelectorAll(".bidang-slide");
  const dots = document.querySelectorAll(".dot");
  const prevBtn = document.getElementById("prev");
  const nextBtn = document.getElementById("next");

  function showSlide(index) {
    slides.forEach((slide, i) => {
      if (i === index) {
        slide.style.opacity = "0";
        slide.style.transform = "translateY(20px)"; // Efek geser ke bawah
        setTimeout(() => {
          slides.forEach((s) => s.classList.remove("active")); // Hapus active di semua
          slide.classList.add("active");
          slide.style.opacity = "1";
          slide.style.transform = "translateY(0)";
        }, 200); // Delay agar tidak langsung muncul
      } else {
        slide.style.opacity = "0";
        slide.style.transform = "translateY(-20px)"; // Efek geser ke atas saat pindah
      }
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

// TIMELINE SECTION
document.addEventListener("DOMContentLoaded", function () {
  const timelineItems = document.querySelectorAll(".timeline-item");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("fade-in");
        }
      });
    },
    { threshold: 0.5 }
  );

  timelineItems.forEach((item) => observer.observe(item));
});

//  FAQ SECTION - ACCORDION
document.addEventListener("DOMContentLoaded", () => {
  const accordions = document.querySelectorAll(".accordion-toggle");

  accordions.forEach((accordion) => {
    accordion.addEventListener("change", function () {
      // Menutup accordion lainnya saat yang ini dibuka
      accordions.forEach((item) => {
        if (item !== this) item.checked = false;
      });
    });
  });
});

// POPUP CONTACT SECTION
document.addEventListener("DOMContentLoaded", function () {
  let contactBtn = document.querySelector(".faq-section button");
  let popup = document.getElementById("contact");
  let closeBtn = document.querySelector(".close-btn");

  // Ketika tombol Contact Us diklik
  contactBtn.addEventListener("click", function () {
    popup.style.display = "flex"; // Tampilkan popup
  });

  // Ketika tombol close (X) diklik
  closeBtn.addEventListener("click", function () {
    popup.style.display = "none"; // Sembunyikan popup
  });

  // Menutup popup saat klik di luar kotak popup
  window.addEventListener("click", function (event) {
    if (event.target === popup) {
      popup.style.display = "none";
    }
  });
});
