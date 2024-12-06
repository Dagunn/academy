const burger = document.querySelector('.header__burger');
const menuMobile = document.querySelector('.header__menu-mobile');

burger.addEventListener('click', () => {
  burger.classList.toggle('open');
  menuMobile.classList.toggle('open');
});

document.querySelectorAll('.header__menu-mobile a').forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const targetId = link.getAttribute('href');
    const targetSection = document.querySelector(targetId);

    if (targetSection) {
      targetSection.scrollIntoView({ behavior: 'smooth' });
    }

    closeMenu();
  });
});

function closeMenu() {
  burger.classList.remove('open');
  menuMobile.classList.remove('open');
}
