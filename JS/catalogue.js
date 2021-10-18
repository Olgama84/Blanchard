// Connect tabs and accordion
$( function() {
    $("#accordion-1").accordion();
    $("#accordion-2").accordion();
    $("#accordion-3").accordion();
    $("#accordion-4").accordion();
    $("#accordion-5").accordion();
    $( "#tabs" ).tabs();
  });

  $("#tabs").tabs({
    active: 2,
  });

// Adjust accordion content height
$( ".accordion" ).accordion({
  heightStyle: "content"
});

// Accordion initialization
  $( function() {
    var icons = {
      header: "ui-icon-circle-arrow-e",
      activeHeader: "ui-icon-circle-arrow-s"
    };
    $( ".accordion" ).accordion({
      icons: icons
    });

    $( ".accordion").accordion({
        active: 0,
        collapsible: true,
        clearStyle: true 
    });

    $( "#toggle" ).button().on( "click", function() {
      if ( $( ".accordion" ).accordion( "option", "icons" ) ) {
        $( ".accordion" ).accordion( "option", "icons", null );
      } else {
        $( ".accordion" ).accordion( "option", "icons", icons );
      }
    });
  } );

// Connect accordion links with artist info

// Showing artist info by clicking on his name
$(function() {
  $('.tabs .catalogue__artist-item a').click(function(e) {
    let $tabs = $(this).closest('.tabs');
    $('.tabs .catalogue__artist-item a.current').removeClass('current');
    $(this).addClass('current');

    $tabs.find('div.catalogue__info').hide();
    $(this.hash).show();

    e.preventDefault();
  });
});

// Hide artist display by clicking on the next tab
$(".ui-accordion-header").click(function(){
  $('.tabs .catalogue__artist-item a.current').removeClass('current');
  $("div.catalogue__info").hide();
});

// Hide artist when switching tabs and clicking on a new artist
$(".ui-tabs-tab").click(function(){
  $("div.catalogue__info").hide();
});


// Template display
function showArtistTemplateFrance() {
  let j = document.getElementById("artist__template-France");
  j.classList.remove('hidden');
  j.classList.add('show_template');
};
function showArtistTemplateGermany() {
  let j = document.getElementById("artist__template-Germany");
  j.classList.remove('hidden');
  j.classList.add('show_template');
};
function showArtistTemplateItaly() {
  let j = document.getElementById("artist__template-Italy");
  j.classList.remove('hidden');
  j.classList.add('show_template');
};
function showArtistTemplateRussia() {
  let j = document.getElementById("artist__template-Russia");
  j.classList.remove('hidden');
  j.classList.add('show_template');
};
function showArtistTemplateBelgium() {
  let j = document.getElementById("artist__template-Belgium");
  j.classList.remove('hidden');
  j.classList.add('show_template');
};

// Hide template display when clicking on an artist name
$('.tabs .catalogue__artist-item a').click(function(){
  $("div.catalogue__template").hide();
});

//Hide template when clicking on country tabs

$('.tabs .country__icon img').click(function() {
  $("div.catalogue__template").hide();
})

// Open default artist when clicking on a country tab
// France
let buttonFrance = document.getElementById('france');
let defaultArtistFrance = document.getElementById('artist-4');
buttonFrance.addEventListener('click', function() {
  defaultArtistFrance.style.display = "block";
})
// Germany
let buttonGermany = document.getElementById('germany');
let defaultArtistGermany = document.getElementById('artist-7');
buttonGermany.addEventListener('click', function() {
  defaultArtistGermany.style.display = "block";
});
// Italy
let buttonItaly = document.getElementById('italy');
let defaultArtistItaly = document.getElementById('artist-21');
buttonItaly.addEventListener('click', function() {
  defaultArtistItaly.style.display = "block";
});
// Russia
let buttonRussia = document.getElementById('russia');
let defaultArtistRussia = document.getElementById('artist-34');
buttonRussia.addEventListener('click', function() {
  defaultArtistRussia.style.display = "block";
  // templateArtist.style.display = "none";
});
// Belgium
let buttonBelgium = document.getElementById('belgium');
let defaultArtistBelgium = document.getElementById('artist-42');
buttonBelgium.addEventListener('click', function() {
  defaultArtistBelgium.style.display = "block";
});