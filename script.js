document.addEventListener("DOMContentLoaded", function () {
  const dropdownButton = document.getElementById("dropdownMenuButton1");
  const dropdownMenu = document.querySelector("[data-twe-dropdown-menu-ref]");

  if (dropdownButton && dropdownMenu) {
    dropdownButton.addEventListener("click", function (event) {
      event.preventDefault();
      dropdownMenu.classList.toggle("hidden");
    });

    // Optional: Hide the dropdown when clicking outside
    document.addEventListener("click", function (event) {
      if (!dropdownButton.contains(event.target) && !dropdownMenu.contains(event.target)) {
        dropdownMenu.classList.add("hidden");
      }
    });
  }
});




function toggleMobileMenu() {
  const mobileMenu = document.getElementById("mobileMenu");
  mobileMenu.classList.toggle("hidden");
}

const productData = [
  {
    title: "ICEtank",
    subtitle: "Modular Liquid Immersion Cooling System",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sequi iste, earum, nesciunt consequatur quam sed velit iure",
    imageUrl:
      "https://images.unsplash.com/photo-1735292626224-9cbee37fd0d6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyNHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "ICEtank",
    subtitle: "Modular Liquid Immersion Cooling System",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sequi iste, earum, nesciunt consequatur quam sed velit iure",
    imageUrl:
      "https://images.unsplash.com/photo-1735292626224-9cbee37fd0d6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyNHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "ICEcubeweflkfweofhweiofhio",
    subtitle: "Advanced Cooling Solution",
    description:
      "Elit sequi iste, earum, nesciunt consequatur quam sed velit iure lorem ipsum dolor sit amet consectetur, adipisicing.",
    imageUrl: "https://images.unsplash.com/photo-1735292626224-9cbee37fd0d6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyNHx8fGVufDB8fHx8fA%3D%3D",
  },
];

let currentIndex = 0;

function createProductElement(product, index) {
  const productElement = document.createElement("div");
  return productElement;
}



var swiper = new Swiper(".mySwiper", {
  slidesPerView: 3,
  spaceBetween: 28,
  loop: true,
  pagination: {
      el: ".swiper-pagination",
      clickable: true,
  },
  navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
  },
  breakpoints: {
      0: {
          slidesPerView: 1,
          spaceBetween: 20,
      },
      768: {
          slidesPerView: 2,
          spaceBetween: 28, 
      },
      1024: {
          slidesPerView: 2.4,
          spaceBetween: 32,

      },
  },
});

var swiper = new Swiper(".mySwiper2", {
  slidesPerView: 3,
  spaceBetween: 28,
  loop: true,
  pagination: {
      el: ".swiper-pagination",
      clickable: true,
  },
  navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
  },
  breakpoints: {
      0: {
          slidesPerView: 1,
          spaceBetween: 20,
      },
      768: {
          slidesPerView: 2,
          spaceBetween: 28,
      },
      1024: {
          slidesPerView: 3,
          spaceBetween: 32,

      },
  },
});


let activeSlideIndex = 0;

  const slides = document.querySelectorAll('.grp-slide');
  const dots = document.querySelectorAll('.grp-pagination-dot');

  function showSlide(index) {
    if (index >= slides.length) {
      activeSlideIndex = 0;
    } else if (index < 0) {
      activeSlideIndex = slides.length - 1;
    } else {
      activeSlideIndex = index;
    }

    const offset = -activeSlideIndex * 100;

    document.querySelector('.grp-slider').style.transform = `translateX(${offset}%)`;

    dots.forEach((dot, i) => {
      dot.classList.toggle('active', i === activeSlideIndex);
    });
  }

  function moveSlide(step) {
    showSlide(activeSlideIndex + step);
  }

  function currentSlide(index) {
    showSlide(index - 1); // Convert to 0-based index
  }

  showSlide(activeSlideIndex);
