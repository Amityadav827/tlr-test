const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");
const links = document.querySelectorAll(".nav-links li");

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle("open");
    links.forEach(link => {
        link.classList.toggle("fade");
    });
    hamburger.classList.toggle("toggle");
});


$(document).ready(function(){
    $(".hamburger").click(function(){
      $(this).toggleClass("is-active");
    });
  });
  

// wefix tab functionality

function wefix(evt, wefixName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("wefix_tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("wefix_tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(wefixName).style.display = "block";
    evt.currentTarget.className += " active";
}

document.getElementById("wefix").click();

// Leather tab functionality

function leather(evt, leatherName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("leather_tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("leather_tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(leatherName).style.display = "block";
    evt.currentTarget.className += " active";
}

document.getElementById("leather").click();


// For Slider
$('.our_work_car').owlCarousel({
    loop: true,
    margin: 0,
    smartSpeed: 2000,
    nav: false,
    dots: true,
    autoplay: true,
    autoplayHoverPause: true,
    // navText: [
    //     "<i class='fa fa-angle-left'></i>",
    //     "<i class='fa fa-angle-right'></i>"
    // ],
    responsive: {
        0: {
            items: 1,
            nav: false,
        },
        576: {
            items: 1,
            nav: false,
        },
        768: {
            items: 1,
            nav: false,
        },
        1024: {
            items: 1,
        },
        1200: {
            items: 1,
        }
    }
});


// For Slider
$('.testimonials_car').owlCarousel({
    loop: true,
    margin: 0,
    smartSpeed: 2000,
    nav: false,
    dots: true,
    autoplay: true,
    autoplayHoverPause: true,
    // navText: [
    //     "<i class='fa fa-angle-left'></i>",
    //     "<i class='fa fa-angle-right'></i>"
    // ],
    responsive: {
        0: {
            items: 1,
            nav: false,
        },
        576: {
            items: 1,
            nav: false,
        },
        768: {
            items: 1,
            nav: false,
        },
        1024: {
            items: 1,
        },
        1200: {
            items: 1,
        }
    }
});


// one page scroll 

let page = 0;
let sections = document.querySelectorAll('.section'); 
let limit = sections.length;
let vh = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
let clock = 0;

window.onwheel = function(event) {
  if (clock === 0) {
    clock = 1;
    let go = (event.deltaY < 0) ? -1 : +1;
    page += go;

    if (page < 0) page = 0;
    if (page >= limit) page = limit - 1;

    $('html, body').animate({
      scrollTop: sections[page].offsetTop
    }, 500); 

    setTimeout(function() { clock = 0; }, 1000);
  }
}


// Back to top  

  let calcScrollValue = () => {
    let scrollProgress = document.getElementById("progress");
    let progressValue = document.getElementById("progress-value");
    let pos = document.documentElement.scrollTop;
    let calcHeight =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
    let scrollValue = Math.round((pos * 100) / calcHeight);
    if (pos > 100) {
      scrollProgress.style.display = "grid";
    } else {
      scrollProgress.style.display = "none";
    }
    scrollProgress.addEventListener("click", () => {
      document.documentElement.scrollTop = 0;
    });
    scrollProgress.style.background = `conic-gradient(#937F78 ${scrollValue}%, #d7d7d7 ${scrollValue}%)`;
  };
  
  window.onscroll = calcScrollValue;
  window.onload = calcScrollValue;

  