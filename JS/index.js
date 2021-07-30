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

// Open search on click 
document.querySelector(".header__btn-top").addEventListener('click',  function () {
    document.querySelector(".header__input-top").classList.toggle("open")
})
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
        let openList = this.parentElement.querySelector(".dropdown__menu");
        openList.classList.toggle("show")
        document.querySelectorAll(".dropdown__menu").forEach(item => (item != openList) ? item.classList.remove("show") : false);
    })
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