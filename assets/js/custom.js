
    // Close announcement
    document.getElementById("close-announcement").addEventListener("click", function () {
      document.getElementById("announcement-bar").style.display = "none";
    });

    // Fixed header on scroll
    window.addEventListener("scroll", function () {
      const header = document.getElementById("main-header");
      if (window.scrollY > 35) {
        header.classList.add("fixed-header");
      } else {
        header.classList.remove("fixed-header");
      }
    });

   
  // Banner Swiper
  const bannerSwiper = new Swiper(".banner-slider", {
  loop: true,
  navigation: {
    nextEl: ".swiper-next",
        prevEl: ".swiper-prev",
  },
});



const threeColumnSlider = new Swiper(".three-column-section", {
  slidesPerView: 3,
  spaceBetween: 80,
  navigation: {
    nextEl: ".swiper-next-product",
    prevEl: ".swiper-prev-product"
  },
  breakpoints: {
    0: { slidesPerView: 1 },
    481: { slidesPerView: 2 },
    769: { slidesPerView: 3 }
  }
});




let productSwiper = null;
function initProductSwiper() {
  const isMobile = window.innerWidth < 786;

  if (isMobile && productSwiper === null) {
    productSwiper = new Swiper(".product-swiper", {
      loop: true,
      spaceBetween: 20,
      navigation: {
        nextEl: ".swiper-next-usp",
        prevEl: ".swiper-prev-usp",
      },
      slidesPerView: 1, 
    });
  } else if (!isMobile && productSwiper !== null) {
    productSwiper.destroy(true, true);
    productSwiper = null;
  }
}


// Init on load and resize
window.addEventListener("load", initProductSwiper);
window.addEventListener("resize", initProductSwiper);



  document.addEventListener('DOMContentLoaded', function () {
    const hamburger = document.getElementById('hamburger');
    const header = document.querySelector('header');
    const closeBtn = document.querySelector('#hamburger .close');

    hamburger.addEventListener('click', function () {
      header.classList.add('menu-open');
    });

    closeBtn.addEventListener('click', function (event) {
      event.stopPropagation(); // prevent triggering hamburger click
      header.classList.remove('menu-open');
    });
  });

  document.addEventListener('DOMContentLoaded', function () {
    const toggles = document.querySelectorAll('.accordion-toggle');

    toggles.forEach(function (toggle) {
      toggle.addEventListener('click', function () {
        const ul = this.nextElementSibling;

        if (ul && ul.tagName.toLowerCase() === 'ul') {
          ul.classList.toggle('open');
          this.classList.toggle('active');
        }
      });
    });
  });
  const marquee = document.getElementById('marqueeContent');
  let offset = 0;
  let speed = 1;

  function animate() {
    offset -= speed;
    if (Math.abs(offset) >= marquee.offsetWidth / 2) {
      offset = 0;
    }
    marquee.style.transform = `translateX(${offset}px)`;
    requestAnimationFrame(animate);
  }

  animate();