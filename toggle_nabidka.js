// script pro togle
document.addEventListener('DOMContentLoaded', function() {
    const toggleCheckbox = document.querySelector('.toggle__checkbox');
    const toggleTextPsi = document.querySelector('.toggle__text--psi');
    const toggleTextLide = document.querySelector('.toggle__text--lide');

    const nabidkaPsi = document.querySelector('.nabidka--psi');
    const nabidkaLide = document.querySelector('.nabidka--lide');

    

    toggleCheckbox.addEventListener('change', function() {
        if (this.checked) {
            toggleTextPsi.style.transition = 'color 0.5s';
            toggleTextLide.style.transition = 'color 0.5s';
        
            toggleTextPsi.style.color = '#B3A8A8';
            toggleTextLide.style.color = '#685B5E';
            nabidkaPsi.style.display = 'none';
            nabidkaLide.style.display = 'block';
        } else {
            toggleTextPsi.style.transition = 'color 0.5s';
            toggleTextLide.style.transition = 'color 0.5s';
            
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


    nabidkaLide.style.display = 'none';
    nabidkaPsi.style.display = 'block';
    toggleTextPsi.style.color = '#685B5E';
    toggleTextLide.style.color = '#B3A8A8';
    toggleCheckbox.checked = false;
    
});



// script pro siemu
const siemas = document.querySelectorAll('.siema');

    for (const siema of siemas) {
        let perPageValue = 1;  // Default value
    
    if (siema.classList.contains('siema-3-slides')) {
        perPageValue = 3;
    } else if (siema.classList.contains('siema-2-slides')) {
        perPageValue = 2;
    }
    
    new Siema({
        selector: siema,
        perPage: {
        100: 1,
        768: perPageValue,
        },
    });
    }
