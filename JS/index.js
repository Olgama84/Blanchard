// Burger menu
window.addEventListener('DOMContentLoaded', function() {
    document.querySelector('#burger').addEventListener('click', (e) =>{
        e.currentTarget.classList.toggle('burger__btn-active')
    })
    document.querySelector('#burger').addEventListener('click', function(){
        document.querySelector('#burger-menu').classList.toggle('menu-is-active');
        document.querySelector('#burger-overlay').classList.toggle('overlay-active')
    })    
})

function closeNav() {
    document.getElementById("myNav").style.width = "0%";
  }

// Open search on click  1024 width
document.querySelector(".header__btn-top").addEventListener('click',  function () {
    this.setAttribute('type', 'submit');
    let input = document.querySelector('.header__input-top');
    input.classList.remove('open');
})
document.addEventListener('click', function(e) {
    let search = document.querySelector(".header__input-top");
    let target = e.target;
    if (!target.closest(".header__search-top")) {
        search.classList.add('open');
        document.querySelector('.header__btn-top').setAttribute('type', 'button');
    }
});

//Open search on click on mobile versions 
document.querySelector('#open').addEventListener('click', function() {
    document.querySelector('#header-overlay').classList.add('search-active')
})
//Close search on click on mobile versions
document.querySelector('#clear').addEventListener('click', function() {
    document.querySelector('#header-overlay').classList.remove('search-active')
})


// Dropdown menu
document.querySelectorAll(".dropdown__btn").forEach(el => {
    el.addEventListener("click", function() {
        let activeButton = this.parentElement.querySelector(".dropdown__text");
        activeButton.classList.toggle("active");
        document.querySelectorAll(".dropdown__text").forEach(item => (item != activeButton) ? item.classList.remove("active") : false);
        let openList = this.parentElement.querySelector(".dropdown__menu");
        openList.classList.toggle("show")
        document.querySelectorAll(".dropdown__menu").forEach(item => (item != openList) ? item.classList.remove("show") : false);
    })
})
document.addEventListener("click", function(e) {
    let target = e.target;
    if (!target.closest(".menu-bottom__list")) {
      document.querySelectorAll(".dropdown__menu").forEach(el => {
          el.classList.remove("show");
      })
       document.querySelectorAll(".dropdown__text").forEach(el => {
          el.classList.remove("active");
      });
    }
  })

// Gallery select 
const element = document.querySelector('select');
   const choices = new Choices(element, {
     searchEnabled: false,
     itemSelectText: '',
     sorter: () => {},
     resetScrollPosition: false,
     placeholder: true,
   }
  );


//  Project section
  //Projects swiper
$(document).ready(function () {
  const projectsSwiper = new Swiper('.projects__swiper', {

    breakpoints: {
        1920: {
            slidesPerView: 3,
            spaceBetween: 50
        },
        1600: {
            slidesPerView: 3,
            spaceBetween: 50
        },
        1485: {
            slidesPerView: 2,
            spaceBetween: 50
        },
        1070: {
            slidesPerView: 2,
            spaceBetween: 50
        },
        768: {
            slidesPerView: 2,
            spaceBetween: 34
        },
        500: {
            slidesPerView: 1,
            spaceBetween: 10
        }
    },

    navigation: {
        nextEl: '.swiper-button-next6',
        prevEl: '.swiper-button-prev5',
      },

  });
});

//Contacts Form Validation
var selector = document.querySelector("input[type='tel']");
var im = new Inputmask("+7(999)999-99-99");

im.mask(selector);

let btnForm = document.querySelector('.contacts__btn');

btnForm.addEventListener('click', function(e) {
  e.preventDefault();

  let nameField = document.getElementById('name').value;
  let phoneField = document.getElementById('phone').value;

  try {
      let flagName = false;
      let flagPhone = false;
      let alertName = document.querySelector('.error-name');
      let alertPhone = document.querySelector('.error-tel');

      let regName = /^[a-zA-Z\s]{2,}$/;
      let regPhone = /^\+\d{1}\(\d{3}\)\d{3}\-\d{2}\-\d{2}/;

      if (regName.test(nameField)) {
          console.log('Name format correct');
      } else {
          alertName.style.display = 'block';
          flagName = true;
      }
      if (regPhone.test(phoneField)) {
          console.log('Phone format correct');
      } else {
          alertPhone.style.display = 'block';
          flagPhone = true;
      }
      if(!flagName) {
        alertName.style.display = "none";
      }
      if(!flagPhone) {
        alertPhone.style.display = "none";
      }

  }
  catch (err) {
      console.log("Error");
  }
})

//Change contact button text on mobile

window.addEventListener("DOMContentLoaded", () => {
    let btn = document.querySelector('.contacts__btn');
    if(window.innerWidth < 500) {
        btn.innerHTML = "Заказать";
    } else {
        btn.innerHTML = "Заказать обратный звонок"
    }
})

window.addEventListener('resize', () => {
    let btn = document.querySelector('.contacts__btn');
    if(window.innerWidth < 500) {
        btn.innerHTML = "Заказать";
    } else {
        btn.innerHTML = "Заказать обратный звонок"
    }

})
