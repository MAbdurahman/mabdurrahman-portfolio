
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
   $('#preloader__gif, #preloader').fadeOut(3500, function () {});

});
/*===================================================
          navigation and scroll-spy
=====================================================*/
$(function () {

   const options = {
      threshold: 0.8
   }
   const observer = new IntersectionObserver(addActiveClass, options);
   const navigation_links = document.querySelectorAll('.navigation__link');

   const sections = document.querySelectorAll('.js-scroll-spy');
   sections.forEach(section => {
      observer.observe(section);
   });

   /**
    * @description - remove the active class from the navigation links and add active class to the
    * current navigation link in the viewport
    * @param entries - the sections in the of an array to be observed
    * @param observer - the IntersectionObserver
    */
   function addActiveClass (entries, observer) {
      entries.forEach(entry => {
         if (entry.isIntersecting) {
            let current_link = document.querySelector(`#navigation__list a[href='#${entry.target.id}']`);
            removeActiveClass();
            current_link.classList.add('active');
         }
      });
   }

   /**
    * @description - removes active class from navigation links
    */
   function removeActiveClass () {
      navigation_links.forEach(navigation_link => {
         navigation_link.classList.remove('active');
      });
   }

   /**
    * @description - toogle the active class for the navigation_button, navigation_button-bars,
    * navigation_background, and navigation_list
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

/*===================================================
          skills progress bars
=====================================================*/
$(function () {
   $('#progress-bars').waypoint(
      function () {
         $('.progress-bar').each(function () {
            $(this).animate(
               {
                  width: $(this).attr('aria-valuenow') + '%',
               },
               1500
            );
         });

         this.destroy();
      },
      {
         offset: '100%',
      }
   );
});

/*===================================================
          portfolio filterizr cards
=====================================================*/
$(function () {


});