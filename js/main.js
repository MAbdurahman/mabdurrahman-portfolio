
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

   $('.js-effect-07 .utils-effect-07').focusout(function () {
      if ($(this).val() !== '') {
         $(this).addClass('has-content');
      } else {
         $(this).removeClass('has-content');
      }
   });

   //**************** form validation scripts ****************//
   const name_pattern = /^([a-zA-Z]{2,}\s[a-zA-z]{1,}'?-?[a-zA-Z]{1,}\s?([a-zA-Z]{1,})?)(,? (?:[JS]r\.?|I|II|III|IV))?$/g;
   const email_pattern = /^[!A-Z0-9#$&?*^~_%+-]+(\.[A-Z0-9!_%+-^]+)*?@[A-Z0-9-]+([A-Z0-9.-])*\.[A-Z]{2,}$/i;
   const required_message_length = 30;
   const maximum_message_length = 160;

   const semantic_success = '#166534';
   const semantic_alert = '#991B1B';
   const semantic_warn = '#C68A04';

   let is_name_valid = false;
   let is_email_valid = false;
   let is_message_valid = false;

   const notification_message = $('#notification__message');
   console.log(notification_message)
   const submit_button = $('#contact__form--submit');
   console.log(submit_button);
   const notification_title = $('#notification__message--title');
   const notification_text = $('#notification__message--text');

   let timeoutID1;
   let timeoutID2;

   /**
    * @description - makes the parameter a String
    * @param object - the parameter
    * @returns {string} - returns a String
    */
   function makeString(object) {
      if (object == null) return '';
      return '' + object;
   }

   /**
    * @description - remove HTML tags from a String
    * @param str - a String
    * @returns {string} - returns a String with the tags removed
    */
   function removeHTMLTags(str) {
      return makeString(str).replace(/<\/?[^>]+>/g, '');
   }

   /**
    * @description - produces the message at the element id in the specific semantic color
    * @param message - the message in form of a String
    * @param prompt_location - the element id where the message is displayed
    * @param color - the semantic color alert or success
    */
   function getPrompt(message, prompt_location, color) {
      document.getElementById(prompt_location).innerHTML = message;
      document.getElementById(prompt_location).style.color = color;
   }

   /**
    * @description - checks whether input for name is valid or not, and adds an
    * interactive message
    * @returns {boolean} - if input is valid, returns true; otherwise, return false
    */
   function checkNameInput() {
      let name = $('#input-01').val();
      let message = '';

      if (name.length === 0) {
         message = 'Your first and last name is required!';
         isNameValid = false;
         getPrompt(message, 'contact__form--name-prompt', semantic_alert);

         return false;
      }
      if (!name.match(name_pattern)) {
         message = 'Enter first and last name only!';
         isNameValid = false;
         getPrompt(message, 'contact__form--name-prompt', semantic_alert);

         return false;
      }

      message = 'Welcome ' + name;
      isNameValid = true;
      getPrompt(message, 'contact__form--name-prompt', semantic_success);

      return true;
   }

   /**
    * @description - checks whether input for email is valid or not, and adds an
    * interacive validation message
    * @returns {boolean} - if input is valid, returns true; otherwise, return false
    */
   function checkEmailInput() {
      let email = $('#input-02').val();
      let message = '';

      if (email.length === 0) {
         message = 'Your email address is required!';
         isEmailValid = false;
         getPrompt(message, 'contact__form--email-prompt', semantic_alert);

         return false;
      }
      if (!email.match(email_pattern)) {
         message = 'Invalid email address!';
         isEmailValid = false;
         getPrompt(message, 'contact__form--email-prompt', semantic_alert);

         return false;
      }

      message = 'Valid email address';
      isEmailValid = true;
      getPrompt(message, 'contact__form--email-prompt', semantic_success);

      return true;
   }

   /**
    * @description - checks whether the textarea for the message is valid or not, and
    * adds an interactive validation message
    * @returns {boolean} - if input is valid, returns true; otherwise, return false
    */
   function checkMessageInput() {
      let form_message = $('#contact__form--message').val();
      form_message = removeHTMLTags(form_message);
      console.log(form_message)
      let characters_left = required_message_length - form_message.length;
      let characters_number = maximum_message_length - form_message.length;
      let message = '';


      if (form_message.length < required_message_length) {
         message = characters_left + ' more characters required in message!';
         isMessageValid = false;
         getPrompt(message, 'contact__form--message-prompt', semantic_alert);

         return false;
      } else {
         message = 'Valid message';
         isMessageValid = true;
         getPrompt(message, 'contact__form--message-prompt', semantic_success);

         return true;
      }
   }


   function performInvalidForm() {

   }

   function performValidForm() {

   }

   function updateErrors() {


   }

   submit_button.on('click', function() {
      console.log('send message clicked')
      if (timeoutID1) {
         clearTimeout(timeoutID1);
         clearTimeout(timeoutID2);
      }
      notification_message.css('display', 'block')
      notification_title.innerHTML = 'Error';
      notification_message.addClass('move-in-from-right notification__error');


      timeoutID1 = setTimeout(() => {
         notification_message.addClass('exit-to-left');
         notification_message.removeClass('move-in-from-right');
         timeoutID2 = setTimeout(() => {

         }, 1500)
      }, 3500)



   })




   $('#input-01').keyup(checkNameInput);
   $('#input-02').keyup(checkEmailInput);
   $('#contact__form--message').keyup(checkMessageInput);
});