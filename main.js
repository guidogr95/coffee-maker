function initializeSwiper() {
  if (typeof Swiper === "undefined") return;

  const swiper = new Swiper(".programs__basic-concepts-swiper", {
    slidesPerView: "auto",
    pagination: { el: ".swiper-pagination", clickable: true },
  });

  const swiper2 = new Swiper(".gallery__swiper", {
    slidesPerView: 'auto',
    centeredSlides: true,
    spaceBetween: 40,
    loop: true,
    pagination: {
      el: '.swiper-pagination-custom',
      clickable: true,
      renderBullet: function (index, className) {
        return  `<div class="${className}">${index + 1}<span>из</span>${this.loopedSlides}</div>`
      }
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });

  const swiper3 = new Swiper(".testimonials__swiper", {
    slidesPerView: "auto",
    pagination: { el: ".swiper-pagination", clickable: true },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });

  const swiper4 = new Swiper(".partners__swiper", {
    slidesPerView: 2,
    spaceBetween: 30,
    loop: true,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints: {
      440: {
        slidesPerView: 3,
        spaceBetween: 50
      },
      768: {
        slidesPerView: 4,
        spaceBetween: 50
      },
      1200: {
        slidesPerView: 5,
        spaceBetween: 60
      },
      1440: {
        slidesPerView: 6,
        spaceBetween: 80
      }
    }
  });
}

function handleSectionScroll() {

  document.addEventListener('DOMContentLoaded', function() {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-l');
    const navbar = document.getElementById('navbar');
  
    function highlightNav() {
      let index = sections.length;
  
      while (--index && window.scrollY + 47 < sections[index].offsetTop) {}
  
      navLinks.forEach((link) => link?.parentElement.classList.remove('active'));
      navLinks[index - 1]?.parentElement.classList.add('active');
    }
  
    highlightNav();
    window.addEventListener('scroll', () => {
      if (window.scrollY > 47) {
        navbar.classList.add('sticky');
      } else {
        navbar.classList.remove('sticky');
      }
      highlightNav();
    });
  });
}

function handleMenu() {
  document.addEventListener('DOMContentLoaded', function() {
    
    const menuButton = document.getElementById('menu-button');
    const navContent = document.getElementById('mobile-nav-content');
    const mobileLinks = document.querySelectorAll('.mobile-link');

    function handleClick() {
      if (menuButton.checked) {
        navContent.classList.remove('hidden')
        } else {
        navContent.classList.add('hidden')
      }
    }

    menuButton.addEventListener('click', handleClick);

    mobileLinks.forEach(link => {
      link.addEventListener('click', () => {
        menuButton.click();
      });
    });
    });
}

initializeSwiper();
handleSectionScroll();
handleMenu();
