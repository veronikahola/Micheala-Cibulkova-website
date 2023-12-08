
    document.addEventListener('DOMContentLoaded', function() {
        const toggleCheckbox = document.querySelector('.toggle__checkbox');
        const toggleTextPsi = document.querySelector('.toggle__text--psi');
        const toggleTextLide = document.querySelector('.toggle__text--lide');

        const galleryPsi = document.querySelector('.gallery--psi');
        const galleryLide = document.querySelector('.gallery--lide');

        

        toggleCheckbox.addEventListener('change', function() {
            if (this.checked) {
                toggleTextPsi.style.transition = 'color 0.5s';
                toggleTextLide.style.transition = 'color 0.5s';
            
                toggleTextPsi.style.color = '#B3A8A8';
                toggleTextLide.style.color = '#685B5E';
                galleryPsi.style.display = 'none';
                galleryLide.style.display = 'grid';
            } else {
                toggleTextPsi.style.transition = 'color 0.5s';
                toggleTextLide.style.transition = 'color 0.5s';
                
                toggleTextPsi.style.color = '#685B5E';
                toggleTextLide.style.color = '#B3A8A8';
                galleryPsi.style.display = 'grid';
                galleryLide.style.display = 'none';
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

