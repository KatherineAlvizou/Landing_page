/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Define Global Variables
 * 
*/
const navList= document.getElementById("navbar__list");
const sections= document.querySelectorAll("section");


/**
 * End Global Variables
 * Start Helper Functions
 * 
*/


/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav

function createNavigation(){

    for (let link of sections) {
        let navItem = document.createElement('li');
        navItem.classList.add('menu__link');
        navItem.dataset.nav = link.id;
        navItem.innerText = link.dataset.nav;
         
        navList.appendChild(navItem);

       
       }

       

};



createNavigation();

//adding an active class when a section is near top of viewport
function makeActive() {
    for (const section of sections) {
      const box = section.getBoundingClientRect();
     
      if (box.top <= 150 && box.bottom >= 150) {
        // active state on the current section and the corresponding Nav link.
        section[i].classList.add('your-active-class');
      } else {
        // active state from other section and corresponding Nav link removed.
        section[i].classList.remove('your-active-class');
      }
    }
};

    // Make sections active, calling the function on every scroll on page
document.addEventListener("scroll", function() {
    makeActive();
  });
  

    




// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active


