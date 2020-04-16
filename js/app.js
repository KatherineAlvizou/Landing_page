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
section.scrollIntoView({behavior: 'smooth'});
});
}
}
createNavigation();

//identifying when a section is near top of viewport
function makeActive() { 
    for (const section of sections) {
const link= document.querySelector('li[data-nav="' + section.id + '"]');
const bounds = section.getBoundingClientRect();
      if (bounds.top <= 100 && bounds.bottom >= 100) {
        // active state on the current section and corresponding nav link
        section.classList.add('your-active-class');
        link.classList.add('active');
        
      } else {
        // active state from other section and link removed.
        section.classList.remove('your-active-class');
        link.classList.remove('active'); 
      } 
    }
}
   
    // Make sections active, calling the function on every scroll on page
document.addEventListener("scroll", function() {
    makeActive();
  });
  
