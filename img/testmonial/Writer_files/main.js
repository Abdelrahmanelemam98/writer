window.addEventListener("scroll", function () {
  let navbar = document.querySelector(".navbar");
  navbar.classList.toggle(".stick", window.scrollY > 0);
});

VanillaTilt.init(document.querySelector(".book-1"), {
  max: 25,
  speed: 400,
});
VanillaTilt.init(document.querySelector(".book-2"), {
    max: 25,
    speed: 400,
  });
  VanillaTilt.init(document.querySelector(".book-3"), {
    max: 25,
    speed: 400,
  });
  VanillaTilt.init(document.querySelector(".book-4"), {
    max: 25,
    speed: 400,
  });
  VanillaTilt.init(document.querySelector(".book-5"), {
    max: 25,
    speed: 400,
  });
  VanillaTilt.init(document.querySelector(".book-6"), {
    max: 25,
    speed: 400,
  });

