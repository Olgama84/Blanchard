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
  $('.tabs .catalogue-artist-item a').click(function(e) {
    let $tabs = $(this).closest('.tabs');
    $('.tabs .catalogue-artist-item a.current').removeClass('current');
    $(this).addClass('current');

    $tabs.find('div.catalogue-info').hide();
    $(this.hash).show();

    e.preventDefault();
  });
});

// Hide artist display by clicking on the next tab
$(".ui-accordion-header").click(function(){
  $("div.catalogue-info").hide();
});

// Hide artist when switching tabs and clicking on a new artist
$(".ui-tabs-tab").click(function(){
  $("div.catalogue-info").hide();
});


// Template display
function showArtistTemplate() {
  let j = document.getElementById("artist-template");
  if (j.style.display != "block") {
    j.style.display = "block";
  } else {
    j.style.display = "none";
  }
};

// Hide template display when clicking on an artist name
$('.tabs .catalogue-artist-item a').click(function(){
  $("div.catalogue-info-template").hide();
});


// make artist display open by default in different tabs

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
});
// Belgium
let buttonBelgium = document.getElementById('belgium');
let defaultArtistBelgium = document.getElementById('artist-42');
buttonBelgium.addEventListener('click', function() {
  defaultArtistBelgium.style.display = "block";
})