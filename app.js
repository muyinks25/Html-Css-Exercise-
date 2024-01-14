const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');
    const pages = document.querySelectorAll('.page-content');
    

      
    // Function to hide all content pages
    const hideAllPages = () => {
        pages.forEach(page => {
            page.style.display = 'none';
        });
    };

    // Function to show the selected content page
    const showPage = (pageIndex) => {
        hideAllPages();
        pages[pageIndex].style.display = 'block';
    };

//Function to handle apartment content

    
    // hide all pages expect the home page
    hideAllPages();
    pages[0].style.display = 'block';

    burger.addEventListener('click', () => {
        // Toggle Nav
        nav.classList.toggle('nav-active');

        // Animate links
        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = '';
            } else {
                link.style.animation = `navLinkFade 0.5s forwards ${index / 7 + 1.5}s`;
            }
        });

        // Burger Animation
        burger.classList.toggle('toggle');
    });

    // Show content based on the clicked link
    navLinks.forEach((link, index) => {
        link.addEventListener('click', () => {
            showPage(index);

            // Check if the clicked link is "Apartment" and show the apartments section
            if (link.innerText.toLowerCase() === 'apartment') {
                document.getElementById('apartment-content').style.display = 'block';
            } else {
                document.getElementById('apartment-content').style.display = 'none';
            }

            // Close the navigation menu after clicking a link (optional)
            nav.classList.remove('nav-active');
            burger.classList.remove('toggle');
        });
    });

    //wait for Dom to be fully loaded

       
     
    
     // Toggle the visibility of the booking form on click
     document.getElementById("booking-inquiries-link").addEventListener("click", function (e) {
        e.preventDefault();
        var bookingForm = document.getElementById("booking-form");
        bookingForm.style.display = (bookingForm.style.display === "none") ? "block" : "none"; 
          
    });


    flatpickr("#datepicker", {
        enableTime: false, // Set to true if you want to include time selection
        dateFormat: "Y-m-d", // Customize the date format
    });

      
    //Toggle the visibility of the contact form on click
    document.getElementById("contact-us-link").addEventListener("click", function (e) {
        e.preventDefault();
        var contactForm = document.getElementById("contact-form");
        contactForm.style.display = (contactForm.style.display === "none") ? "block" : "none";
     
    });  

    
    
};

navSlide();
