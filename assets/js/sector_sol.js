//mobile menu for header

function toggleMobileMenu() {
    const menu = document.querySelector('.mobile-menu');
    menu.classList.toggle('active');
  }

  //image animation

  document.addEventListener('DOMContentLoaded', () => {
    const heroTitle = document.querySelector('.hero h1');
    heroTitle.classList.add('animate');
  });

  //color changes for card when hover

  const cards = document.querySelectorAll('.custom-card');

cards.forEach(card => {
  card.addEventListener('mouseenter', () => {
    card.style.backgroundColor = 'rgba(0, 123, 255, 0.1)';
  });

  card.addEventListener('mouseleave', () => {
    card.style.backgroundColor = '';
  });
});

