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
//             toggleTextPsi.style.transition = 'color 0.5s';
//             toggleTextLide.style.transition = 'color 0.5s';
        
//             toggleTextPsi.style.color = '#B3A8A8';
//             toggleTextLide.style.color = '#685B5E';
//             nabidkaPsi.style.display = 'none';
//             nabidkaLide.style.display = 'block';


//         } else {
//             toggleTextPsi.style.transition = 'color 0.5s';
//             toggleTextLide.style.transition = 'color 0.5s';
            
//             toggleTextPsi.style.color = '#685B5E';
//             toggleTextLide.style.color = '#B3A8A8';
//             nabidkaPsi.style.display = 'block';
//             nabidkaLide.style.display = 'none';
//         }
//     });
 
// });



// toggleTextPsi.addEventListener('click', function() {
    //     toggleCheckbox.checked = false;
    //     toggleCheckbox.dispatchEvent(new Event('change'));
    // });

    // toggleTextLide.addEventListener('click', function() {
    //     toggleCheckbox.checked = true;
    //     toggleCheckbox.dispatchEvent(new Event('change'));
    // });

    // nabidkaLide.style.display = 'none';
    // nabidkaPsi.style.display = 'block';
    // toggleTextPsi.style.color = '#685B5E';
    // toggleTextLide.style.color = '#B3A8A8';
    // toggleCheckbox.checked = false;






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
        
    
        let siemaPsi; // Variable to store Siema instance for nabidkaPsi
        let siemaLide; // Variable to store Siema instance for nabidkaLide
    
        toggleCheckbox.addEventListener('change', function() {
            if (this.checked) {
                toggleTextPsi.style.color = '#B3A8A8';
                toggleTextLide.style.color = '#685B5E';
                nabidkaPsi.style.display = 'none';
                nabidkaLide.style.display = 'block';
    
                // Check if Siema instance for nabidkaLide is not initialized
                if (!siemaLide) {
                    siemaLide = new Siema({
                        selector: nabidkaLide.querySelector('.siema'),
                        perPage: {
                            100: 1,
                            768: 2, // Set your desired number of slides
                        },
                    });
                }
            } else {
                toggleTextPsi.style.color = '#685B5E';
                toggleTextLide.style.color = '#B3A8A8';
                nabidkaPsi.style.display = 'block';
                nabidkaLide.style.display = 'none';
                console.log('hoj');
    
                // Check if Siema instance for nabidkaPsi is not initialized
                if (!siemaPsi) {
                    siemaPsi = new Siema({
                        selector: nabidkaPsi.querySelector('.siema'),
                        perPage: {
                            100: 1,
                            768: 3, // Set your desired number of slides
                        },
                    });
                }
            }
        });
    });