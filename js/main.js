
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
   /*const accordion_labels = document.querySelectorAll('.accordion label');
   const accordion_inputs = document.querySelectorAll('.js-accordion-input');
   accordion_labels.forEach(accordion => {
      accordion.addEventListener('click', addFocusedClass)
   });*/


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


/*function addFocusedClass(e) {
   e.preventDefault();
   let label = e.target;
   let accordion_inputs = document.querySelectorAll('.js-accordion-input');
   accordion_inputs.forEach(accordion_input => {
      if (accordion_input.checked === true) {
         if (label.htmlFor === accordion_input.id) {
            removeFocusedClass();
            accordion_label.classList.add('focused');
            accordion_input.setAttribute('checked', true);

         }
      }
   });
}*/

/*function removeFocusedClass() {
   let accordion_inputs = document.querySelectorAll('.js-accordion-input');
   accordion_inputs.forEach(accordion_input => {
      accordion_input.setAttribute('checked', false);
      console.log(accordion_input)
   });
   accordion_labels.forEach(accordion_label => {
      accordion_label.classList.remove('focused');
   });
}*/


/*===================================================
          portfolio filterizr cards
=====================================================*/
$(function () {
   /**************** add and remove active class from filter buttons ****************/
   $('#portfolio__filters > .js-filter').click(function() {
      $(this).addClass('active').siblings().removeClass('active');
   });

   /*$('#portfolio__filters > .js-filter').on('click', function () {
      var value = $(this).attr('data-filter');
      console.log(value)

      if (value === 'all') {
         $('.filtr-item').show('1500');
      } else {
         $('.filter')
            .not('.' + value)
            .hide('1500');
         $('.filter')
            .filter('.' + value)
            .show('1500');
      }
      if (value === 'all') {
         console.log('show all items')
      }
      if (value === 'software') {
         console.log('show all software items')
      }
      if (value === 'website') {
         console.log('show all website items')
      }
      if (value === 'webapp') {
         console.log('show all webapp items')
      }
   }); */

   const options = {
      animationDuration: 0.5, // in seconds
      callbacks: {
         onFilteringStart: function() { },
         onFilteringEnd: function() { },
         onShufflingStart: function() { },
         onShufflingEnd: function() { },
         onSortingStart: function() { },
         onSortingEnd: function() { }
      },
      controlsSelector: '', // Selector for custom controls
      delay: 0, // Transition delay in ms
      delayMode: 'progressive', // 'progressive' or 'alternate'
      easing: 'ease-out',
      filter: 'all', // Initial filter
      filterOutCss: { // Filtering out animation
         opacity: 0,
         transform: 'scale(0.5)'
      },
      filterInCss: { // Filtering in animation
         opacity: 0,
         transform: 'scale(1)'
      },
      gridItemsSelector: '.filtr-container',
      gutterPixels: 0, // Items spacing in pixels
      layout: 'sameSize', // See layouts
      multifilterLogicalOperator: 'or',
      searchTerm: '',
      setupControls: true, // Should be false if controlsSelector is set
      spinner: { // Configuration for built-in spinner
         enabled: false,
         fillColor: '#2184D0',
         styles: {
            height: '75px',
            margin: '0 auto',
            width: '75px',
            'z-index': 2,
         },
      },
   }

   const filterizd = $('.filtr-container').filterizr({});

});

/*===================================================
          contact section
=====================================================*/
$(function () {
   $('#contact__section--title-paragraph').waypoint(
      function () {
         var typed5 = new Typed('#contact__section--paragraph', {
            strings: [
               'If you',
               'If you have any',
               'If you have any questions or wish',
               'If you have any questions or wish to collaborate,',
               'If you have any questions or wish to collaborate, send me a message! ',
            ],
            typeSpeed: 120,
            backSpeed: 70,
            backDelay: 1000,
            // cursorChar: '_',
            showCursor: false,
            shuffle: false,
            smartBackspace: true,
            loop: false,
         });

         this.destroy();
      },
      {
         offset: '50%',
      }
   );

   //**************** effect 07 scripts ****************//
   $('.utils-effect-07').val('');
   console.log($('.utils-effect-07').attr('class'))


   $('.js-effect-07 .utils-effect-07').focusout(function () {
      if ($(this).val() !== '') {
         $(this).addClass('has-content');
         console.log($(this).attr('class'))
      } else {
         $(this).removeClass('has-content');
         console.log($(this).attr('class'))
      }
   });
});