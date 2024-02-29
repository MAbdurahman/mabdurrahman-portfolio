
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

});

/* =========================================
            Simple-Scroll-Spy
============================================ */
window.onload = function () {
   scrollSpy('#navigation__list', {
      sectionClass: '.scrollspy',
      menuActiveTarget: '.navigation__link',
      offset: 100,
   });
};