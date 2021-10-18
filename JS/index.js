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


//  Events section 
// Show all events function
function showEvents() {
    let eventsdisplay = document.getElementById('allEvents');
    let displaySetting = eventsdisplay.style.display;
    let hiddenItem = document.querySelector('.hidden-item');
    let button = document.getElementById('showEvents');

    if (displaySetting == 'block') {
        eventsdisplay.style.display = 'none';
        hiddenItem.style.display = 'none';
        button.textContent = 'Все события';
    } else {
        eventsdisplay.style.display = 'block';
        hiddenItem.style.display = 'block';
        button.innerHTML = 'Свернуть';
    }
}

//Publication section
// toggle Checked class when selecting a category
$(function() {
    $('.checkbox').click(function(e) {
      $('.checkbox .checked').removeClass('checked');
      $(this).addClass('checked');
    });
  });