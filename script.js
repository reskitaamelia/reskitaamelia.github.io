// toggle icon navbar
let menuIcon = document.querySelector("#menu-icon")
let navbar = document.querySelector(".navbar")

menuIcon.onclick = () => {
  menuIcon.classList.toggle('fa-xmark')
  navbar.classList.toggle('active')
}

// scroll section active link
let sections = document.querySelectorAll('section')
let navlinks = document.querySelectorAll('header nav a')

window.onscroll = () => {
  sections.forEach(sec => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute('id');

    if (top >= offset && top < offset + height) {
      navlinks.forEach(link => {
        link.classList.remove('active');
        document.querySelector('header nav a[href*="' + id + '"]').classList.add('active');
      });
    }
  });

  // Navbar yang menempel (sticky)
  let header = document.querySelector('header');
  header.classList.toggle('sticky', window.scrollY > 100);

  // Menghapus ikon toggle dan navbar
  menuIcon.classList.remove('fa-xmark');
  navbar.classList.remove('active');
};


// scroll reveal
ScrollReveal({
  distance: '80px',
  duration: 2000,
  delay: 200
});

ScrollReveal().reveal('.about-content, heading', { origin: 'top' });
ScrollReveal().reveal('.about-img, .experiences-container, .education-container, .skills-container, .interests-container, .award-container', { origin: 'bottom' });


