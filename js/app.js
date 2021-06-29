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
    const listItem = document.createElement('li');
    //get the attribute of data-nav to define each section name
    const  sectionName= section.getAttribute('data-nav');
    
    listItem.addEventListener("click", (event) => {
        event.preventDefault();
       section.scrollIntoView({behavior: "smooth", block: "center"});
   });

     // adding the content of lit item element 
     listItem.innerHTML= `<a class= "menu__link" href= #${section.id}>${sectionName}</a>`;
     
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
            section.classList.add(`your-active-class`);
            //listItem.classList.add(`menu__link`);
            
        }
          
        else {
            section.classList.remove(`your-active-class`);
            //listItem.classList.remove(`menu__link`)
           
        }
          
        });
    }, options); 

    sections.forEach(section => { // looping over section to apply the function to each section
        observer.observe(section);
    });
    section.addEventListener(scroll, observer);
// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
*/
 
// Build menu 

// Scroll to section on link click

// Set sections as active
