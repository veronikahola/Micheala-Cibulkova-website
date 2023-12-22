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




document.addEventListener('DOMContentLoaded', function() {
    const toggleCheckbox = document.querySelector('.toggle__checkbox');
    const toggleTextPsi = document.querySelector('.toggle__text--psi');
    const toggleTextLide = document.querySelector('.toggle__text--lide');
    const nabidkaPsi = document.querySelector('.nabidka--psi');
    const nabidkaLide = document.querySelector('.nabidka--lide');
    const siemas = document.querySelectorAll('.siema');

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

        // Trigger visibility change handling after toggle change
        handleVisibilityChange();
    });

    toggleTextPsi.addEventListener('click', function() {
        toggleCheckbox.checked = false;
        toggleCheckbox.dispatchEvent(new Event('change'));
    });

    toggleTextLide.addEventListener('click', function() {
        toggleCheckbox.checked = true;
        toggleCheckbox.dispatchEvent(new Event('change'));
    });

    // Function to handle visibility change and resize Siema if needed
    function handleVisibilityChange() {
        for (const siema of siemas) {
            let perPageValue = 1;

            if (siema.classList.contains('siema-3-slides')) {
                perPageValue = 3;
            } else if (siema.classList.contains('siema-2-slides')) {
                perPageValue = 2;
            }

            // Check if the screen width is smaller than 1000px
            if (window.innerWidth < 1000) {
                siema.resize();
            }
        }
    }

    // Attach event listener for visibility change
    document.addEventListener('visibilitychange', handleVisibilityChange);

    // Initialize Siema for all elements with the 'siema' class
    for (const siema of siemas) {
        let perPageValue = 1;

        if (siema.classList.contains('siema-3-slides')) {
            perPageValue = 3;
        } else if (siema.classList.contains('siema-2-slides')) {
            perPageValue = 2;
        }

        initializeSiema(siema, perPageValue);
    }

    // Function to initialize Siema for a given section
    function initializeSiema(section, perPageValue) {
        new Siema({
            selector: section,
            perPage: {
                100: 1,
                768: perPageValue,
            },
        });
    }
});
