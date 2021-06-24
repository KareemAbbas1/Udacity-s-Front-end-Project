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
// sections global variable to select all section
const sections = document.querySelectorAll('section');
// navigation global variable 
const menu = document.getElementById('navbar__list');
// Document fragment to append the list items to it to enhance the performance
let docFragment = document.createDocumentFragment();
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
// a for...of loop to loop over all the sections and create <li> for each
for (section of sections) {
    listItem = document.createElement('li');
    //get the attribute of data-nav to define each section name
    const  sectionName= section.getAttribute('data-nav');
    //get the attribute of the id to define each section link
    const  sectionLink= section.getAttribute('id');

     // adding the content of lit item element 
     listItem.innerHTML= `<a class= "menu__link" href= #${sectionLink}>${sectionName}</a>`;
     
     docFragment.appendChild(listItem);
    
    console.log(docFragment);
};
//append the fragment to the menu variable to add its content to the page
menu.appendChild(docFragment);


// Add class 'active' to section when near top of viewport
// The refrence from which I understod the intersection observer 'https://www.youtube.com/watch?v=T8EYosX4NOo'
const options = {threshold: 0.7}; 
const observer = new IntersectionObserver(function
    (entries, observer) {
        entries.forEach(entry => { // if... else conditional to detect when to highlight the section and when to unhighlight it
        if (entry.isIntersecting) {
            entry.target.classList.add(`your-active-class`);
        }
          
        else {
            entry.target.classList.remove(`your-active-class`);
        }
          
        });
    }, options); 

    sections.forEach(section => { // looping over section to apply the function to each section
        observer.observe(section);
    });

// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active
