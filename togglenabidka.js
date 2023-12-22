$(document).ready(function(){
    var slickInstance;

    function initializeSlick() {
      slickInstance = $('.carousel').slick({
        slidesToShow: 1,
        dots: true,
        arrows: false,
        adaptiveHeight: true,
      });
    }

    function destroySlick() {
      $('.carousel').slick('unslick');
    }

    // Initial setup
    if (window.innerWidth <= 768) {
      initializeSlick();
    }

    // Toggle button change event
    $('#toggle').change(function() {
      destroySlick();
      if (window.innerWidth <= 768) {
        initializeSlick();
      }
    });

    // Window resize event
    $(window).resize(function() {
      destroySlick();
      if (window.innerWidth <= 768) {
        initializeSlick();
      }
    });
  });




// document.addEventListener('DOMContentLoaded', function() {
//     const toggleCheckbox = document.querySelector('.toggle__checkbox');
//     const toggleTextPsi = document.querySelector('.toggle__text--psi');
//     const toggleTextLide = document.querySelector('.toggle__text--lide');
//     const nabidkaPsi = document.querySelector('.nabidka--psi');
//     const nabidkaLide = document.querySelector('.nabidka--lide');

//     nabidkaLide.style.display = 'none';
//     nabidkaPsi.style.display = 'block';
//     toggleTextPsi.style.color = '#685B5E';
//     toggleTextLide.style.color = '#B3A8A8';
//     toggleCheckbox.checked = false;

//     toggleCheckbox.addEventListener('change', function() {
//         if (this.checked) {
//             toggleTextPsi.style.color = '#B3A8A8';
//             toggleTextLide.style.color = '#685B5E';
//             nabidkaPsi.style.display = 'none';
//             nabidkaLide.style.display = 'block';
//         } else {
//             toggleTextPsi.style.color = '#685B5E';
//             toggleTextLide.style.color = '#B3A8A8';
//             nabidkaPsi.style.display = 'block';
//             nabidkaLide.style.display = 'none';
//         }
//     });

//     toggleTextPsi.addEventListener('click', function() {
//         toggleCheckbox.checked = false;
//         toggleCheckbox.dispatchEvent(new Event('change'));
//     });

//     toggleTextLide.addEventListener('click', function() {
//         toggleCheckbox.checked = true;
//         toggleCheckbox.dispatchEvent(new Event('change'));
//     });
// });



document.addEventListener('DOMContentLoaded', function () {
    const toggleCheckbox = document.querySelector('.toggle__checkbox');
    const toggleTextPsi = document.querySelector('.toggle__text--psi');
    const toggleTextLide = document.querySelector('.toggle__text--lide');
    const nabidkaPsi = document.querySelector('.nabidka--psi');
    const nabidkaLide = document.querySelector('.nabidka--lide');

    nabidkaLide.style.display = 'none';
    nabidkaPsi.style.display = 'block';
    toggleTextPsi.style.color = '#685B5E';
    toggleTextLide.style.color = '#B3A8A8';
    toggleCheckbox.checked = false;

    // Function to handle toggle switch change
    function handleToggleChange() {
        if (toggleCheckbox.checked) {
            toggleTextPsi.style.color = '#B3A8A8';
            toggleTextLide.style.color = '#685B5E';
            nabidkaPsi.style.display = 'none';
            nabidkaLide.style.display = 'block';
        } else {
            toggleTextPsi.style.color = '#685B5E';
            toggleTextLide.style.color = '#B3A8A8';
            nabidkaPsi.style.display = 'block';
            nabidkaLide.style.display = 'none';
        }
    }

    // Initialize Hammer.js on the toggle switch container
    const toggleContainer = document.querySelector('.toggle__container');
    const hammer = new Hammer(toggleContainer);

    // Add swipe event listeners
    hammer.on('swiperight', function () {
        toggleCheckbox.checked = false;
        handleToggleChange();
    });

    hammer.on('swipeleft', function () {
        toggleCheckbox.checked = true;
        handleToggleChange();
    });

    // Add click event listeners for text labels
    toggleTextPsi.addEventListener('click', function () {
        toggleCheckbox.checked = false;
        handleToggleChange();
    });

    toggleTextLide.addEventListener('click', function () {
        toggleCheckbox.checked = true;
        handleToggleChange();
    });

    // Add change event listener for the checkbox
    toggleCheckbox.addEventListener('change', handleToggleChange);
});