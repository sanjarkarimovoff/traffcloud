const menuBurger = document.querySelector('.menu-burger'),
      menuMobile = document.querySelector('.menu-mobile'),
      vacancyBtns = document.querySelectorAll('.vacancy__btn')


menuBurger.addEventListener('click', () => {
  menuBurger.classList.toggle('rotateBurger');
  menuMobile.classList.toggle('showMenuMobile');
});


vacancyBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        console.dir(btn.parentElement.parentElement.parentElement.parentElement.classList.toggle('vacancyActive'))
    })
})