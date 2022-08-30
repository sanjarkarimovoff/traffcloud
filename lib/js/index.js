const menuBurger = document.querySelector('.menu-burger'),
      menuMobile = document.querySelector('.menu-mobile'),
      odometer1 = document.getElementById('odometer1'),
      odometer2 = document.getElementById('odometer2'),
      odometer3 = document.getElementById('odometer3'),
      odometer4 = document.getElementById('odometer4')


menuBurger.addEventListener('click', () => {
  menuBurger.classList.toggle('rotateBurger');
  menuMobile.classList.toggle('showMenuMobile');
});


function addAdometer() {
  setTimeout(() => {
      odometer1.innerHTML = 8
  }, 500);
  setTimeout(() => {
      odometer2.innerHTML = 40
  }, 500);
  setTimeout(() => {
      odometer3.innerHTML = 3.5
  }, 500);
  setTimeout(() => {
      odometer4.innerHTML = 300
  }, 500);
}


window.addEventListener('scroll', () => {
const positionOdometer = odometer1.getBoundingClientRect().top;

const screenPosition = window.innerHeight;

if(screenPosition > positionOdometer) {
  addAdometer()
}
});




// customer-carousel
$('.customer-carousel').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  dots: true,
  focusOnSelect: true,
  touchMove: true,
  arrows: false,
  autoplay: true,
  autoplaySpeed: 2000,
  speed: 1000,
});

let prl = document.querySelectorAll('.prl')
document.addEventListener('mousemove', parallax)

function parallax(e) {
  prl.forEach(prl => {
    const speed = prl.getAttribute('data-speed')

    const x = (window.innerWidth - e.pageX*speed)/80
    const y = (window.innerHeight - e.pageY*speed)/80

    prl.style.transform = `translateX(${x}px) translateY(${y}px)`
  })
};


// typed js

window.onload = function() {
  var typed = new Typed('.type', {
    strings: ['leads', 'revenue', 'profit'],
    typeSpeed: 70,
    backSpeed: 40,
    loop: true,
  });
}