$(document).ready(function(){
    var slickInstance;

    function initializeSlick() {
      slickInstance = $('.carousel').slick({
        slidesToShow: calculateSlidesToShow(),
        
        // Add other configuration options as needed
      });
    }

    function destroySlick() {
      $('.carousel').slick('unslick');
    }

    function calculateSlidesToShow() {
      // Implement your logic here to determine the appropriate number of slides
      // For example, you can check the window width and return different values
      if ($('#toggle').prop('checked') || window.innerWidth < 768) {
        return 1;
      } else {
        return 3;
      }
    }

    // Initial setup
    initializeSlick();

    // Toggle button change event
    $('#toggle').change(function() {
      destroySlick();
      initializeSlick();
    });

    // Window resize event
    $(window).resize(function() {
      destroySlick();
      initializeSlick();
    });
  });



document.addEventListener('DOMContentLoaded', function() {
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

    toggleCheckbox.addEventListener('change', function() {
        if (this.checked) {
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
    });

    toggleTextPsi.addEventListener('click', function() {
        toggleCheckbox.checked = false;
        toggleCheckbox.dispatchEvent(new Event('change'));
    });

    toggleTextLide.addEventListener('click', function() {
        toggleCheckbox.checked = true;
        toggleCheckbox.dispatchEvent(new Event('change'));
    });
});

