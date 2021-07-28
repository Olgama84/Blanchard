// Burger menu
window.addEventListener('DOMContentLoaded', function() {
    document.querySelector('#burger').addEventListener('click', (e) =>{
        e.currentTarget.classList.toggle('burger__btn-active')
    })
    document.querySelector('#burger').addEventListener('click', function(){
        document.querySelector('#burger-menu').classList.toggle('menu-is-active')
    })    
})

// Dropdown menu
let menuBtn = document.querySelector('.btn1');
let menu = document.getElementById("myDropdown");
let toggleMenu = function() {
    menu.classList.toggle('show');
}
menuBtn.addEventListener('click', function(e) {
    e.stopPropagation();
    toggleMenu();
});
document.addEventListener('click', function(e) {
    let target = e.target;
    let its_menu = target == menu || menu.contains(target);
    let its_menuBtn = target == menuBtn;
    let menu_is_active = menu.classList.contains('show');

    if (!its_menu && !its_menuBtn && menu_is_active) {
        toggleMenu();
    }
});

let menuBtn2 = document.querySelector('.btn2');
let menu2 = document.getElementById("myDropdown2")
let toggleMenu2 = function() {
    menu2.classList.toggle('show');
}
menuBtn2.addEventListener('click', function(e) {
    e.stopPropagation();
    toggleMenu2();
});
document.addEventListener('click', function(e) {
    let target = e.target;
    let its_menu = target == menu2 || menu2.contains(target);
    let its_menuBtn = target == menuBtn2;
    let menu_is_active = menu2.classList.contains('show');

    if (!its_menu && !its_menuBtn && menu_is_active) {
        toggleMenu2();
    }
});

let menuBtn3 = document.querySelector('.btn3');
let menu3 = document.getElementById("myDropdown3")
let toggleMenu3 = function() {
    menu3.classList.toggle('show');
}
menuBtn3.addEventListener('click', function(e) {
    e.stopPropagation();
    toggleMenu3();
});
document.addEventListener('click', function(e) {
    let target = e.target;
    let its_menu = target == menu3 || menu3.contains(target);
    let its_menuBtn = target == menuBtn3;
    let menu_is_active = menu3.classList.contains('show');

    if (!its_menu && !its_menuBtn && menu_is_active) {
        toggleMenu3();
    }
});

let menuBtn4 = document.querySelector('.btn4');
let menu4 = document.getElementById("myDropdown4")
let toggleMenu4 = function() {
    menu4.classList.toggle('show');
}
menuBtn4.addEventListener('click', function(e) {
    e.stopPropagation();
    toggleMenu4();
});
document.addEventListener('click', function(e) {
    let target = e.target;
    let its_menu = target == menu4 || menu4.contains(target);
    let its_menuBtn = target == menuBtn4;
    let menu_is_active = menu4.classList.contains('show');

    if (!its_menu && !its_menuBtn && menu_is_active) {
        toggleMenu4();
    }
});

let menuBtn5 = document.querySelector('.btn5');
let menu5 = document.getElementById("myDropdown5")
let toggleMenu5 = function() {
    menu5.classList.toggle('show');
}
menuBtn5.addEventListener('click', function(e) {
    e.stopPropagation();
    toggleMenu5();
});
document.addEventListener('click', function(e) {
    let target = e.target;
    let its_menu = target == menu5 || menu5.contains(target);
    let its_menuBtn = target == menuBtn5;
    let menu_is_active = menu5.classList.contains('show');

    if (!its_menu && !its_menuBtn && menu_is_active) {
        toggleMenu5();
    }
});

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