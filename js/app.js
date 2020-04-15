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

// building the nav items

function createNavigation(){

    for (let section of sections) {
        let navItem = document.createElement('li');
        navItem.classList.add('menu__link');
        navItem.dataset.nav=section.id;
        navItem.innerText=section.dataset.nav;
        navItem.id=section.dataset.nav; 
        navList.appendChild(navItem);
    //scrolling to the corresponding section when a nav item is clicked 
   navItem.addEventListener('click', () => {   
section.scrollIntoView({behavior: 'smooth'})
});
}
}
createNavigation();


//adding an active class when a section is near top of viewport
function makeActive() {
    for (const section of sections) {
const box = section.getBoundingClientRect();
  
      if (box.top <= 100 && box.bottom >= 100) {
        // active state on the current section.
        section.classList.add('your-active-class');

      } else {
        // active state from other section removed.
        section.classList.remove('your-active-class');
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
