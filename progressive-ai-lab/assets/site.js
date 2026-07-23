// Progressive AI Lab - shared site behavior

// Nav shadow on scroll
var nav = document.getElementById('nav');
if (nav) {
  window.addEventListener('scroll', function () {
    nav.classList.toggle('scrolled', window.scrollY > 20);
  });
}

// Mobile nav toggle
var navLinks = document.getElementById('navLinks');
var toggle = document.querySelector('.mobile-toggle');
if (toggle && navLinks) {
  toggle.addEventListener('click', function () {
    navLinks.classList.toggle('open');
  });
  navLinks.querySelectorAll('a').forEach(function (link) {
    link.addEventListener('click', function () {
      navLinks.classList.remove('open');
    });
  });
}
