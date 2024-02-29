
/**
 * maabdurrahman-portfolio-scripts
 * @author: Mahdi Abdurrhaman
 * @version 1.0.0
 * @date: 9 February 2024
 */
/*===================================================
          preloader
=====================================================*/
$(window).on('load', function () {
   // makes sure that whole site is loaded
   $('#preloader__gif, #preloader').fadeOut(5000, function () {});

});
/*=============================================
          navigation
================================================*/
$(function () {
   /**
    * @description - toogle the active class for the navigation_button, navigation_button-bars,
    * navigation_background, navigation_list
    */
   function toggleNavigation () {
      $('.navigation__button').toggleClass('active');
      $('.navigation__background').toggleClass('active');
      $('.navigation__list').toggleClass('active');
      $('body').toggleClass('no-scroll');
   }

   /**
    * @description - removes the active class on the navigation_button, navigation_background,
    * navigation_list and removes the no-scroll class on the body. Thus, closing the navigation
    * when the navigation_list or navigation_item is clicked.
    */
   function closeNavigation () {
      $('.navigation__button').removeClass('active');
      $('.navigation__background').removeClass('active');
      $('.navigation__list').removeClass('active');
      $('body').removeClass('no-scroll');
   }

   $('#navigation__button').on('click tap', function () {
      toggleNavigation();
   });

   $('#navigation__list, .navigation__item').on('click tap', function () {
      closeNavigation();
   });


   //smooth scroll from w3schools
   /*$('.navigation__link, .heading__link, #header__button, #arrow__down').on('click', function (event) {
         if (this.hash !== '') {
            event.preventDefault();

            // Store hash
            let hash = this.hash;

            $('html, body').animate(
               {
                  scrollTop: $(hash).offset().top,
               },
               1500,
               function () {
                  window.location.hash = hash;
               }
            );
         }
      }
   );
*/
   //Add active class to the current navigation__link, highlight it, and remove from previous active link
   let list = document.getElementById('navigation__list');
   console.log(list)
   let links = list.getElementsByClassName('navigation__link');
   console.log(links)
   for (var i = 0; i < links.length; i++) {
      links[i].addEventListener('click', function () {
         let current = list.getElementsByClassName('active');
         current[0].className = current[0].className.replace(' active', ' ');
         this.className += ' active';
      });
   }

   //Add active class to the heading__button, highlight it, and remove from previous active link
   let button = document.getElementById('header__button');
   let link = document.querySelector('a.navigation__link');
   button.addEventListener('click', function () {
      let current = list.getElementsByClassName('active');
      current[0].className = current[0].className.replace(' active', ' ');
      link.className += ' active';
   });

   //Add active class to the arrow-down, highlight it, and remove from previous active link
   let arrow = document.getElementById('arrow__down');
   // let link = document.getElementById('about--link');
   arrow.addEventListener('click', function () {
      let current = list.getElementsByClassName('active');
      current[0].className = current[0].className.replace(' active', ' ');
      link.className += ' active';
   });

});

/* =========================================
            Simple-Scroll-Spy
============================================ */
/*
window.onload = function () {
   scrollSpy('#navigation__list', {
      sectionClass: '.scrollspy',
      menuActiveTarget: '.navigation__link',
      offset: 100,
   });
};*/

const sections = document.querySelectorAll('section');
const listLinks = document.querySelectorAll('.navbar__list_link');
window.addEventListener('scroll', () => {
   sections.forEach(section => {
      let top = window.scrollY;
      let offset = section.offsetTop - 200;
      let height = section.offsetHeight;
      let id = section.getAttribute('id');

      if ((top >= offset) && (top < (offset + height))) {
         listLinks.forEach(listLink => {
            listLink.classList.remove('active');
            document.querySelector('header nav ul li a[href*=' + id + ']').classList.add('active');
         });
      }
   });
});