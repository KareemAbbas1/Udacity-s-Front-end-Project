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
const docFragment = document.createDocumentFragment();

//End Global Variables


//Begin Main Functions
// build the nav

function navBuilder () {
 // a for...of loop to loop over all the sections and create <li> for each
    for (const section of sections) { 
        
     const listItem = document.createElement('li');

     //get the attribute of data-nav to define each section name
     const  sectionName = section.getAttribute('data-nav');
     
     // adding the content of lit item element
     listItem.innerHTML= `<a href= "#${section.id}" class= "menu__link" id = "${section.id}">${sectionName}</a>`;
     
     // adding a (click) event listener to listItem to apply the smooth scroll
     listItem.addEventListener("click", function(event) { 
         event.preventDefault();
         section.scrollIntoView({behavior: "smooth", block: "center"});
     });
     
     //appending the listItem to docFragment to enhance the performance
     docFragment.appendChild(listItem);
    };
    //append the fragment to the menu variable to add its content to the page
    menu.appendChild(docFragment);
};

// Add class 'active' to section when near top of viewport
function makeActive() {                                                         
    const links = document.querySelectorAll('a');
    for (const section of sections) {
        
        // creating a DOMRect object to detect the size and the position of each section
        const box = section.getBoundingClientRect();
        
        // if...else statement to detect when to apply active state and when to remove it
        if (box.top <= 150 && box.bottom >= 300) {

           section.classList.add('your-active-class');
           //looping over links to detect the nav item that corresponds to the section in view port to apply active state to it
           for (const link of links) {
               if (section.getAttribute("data-nav") === link.textContent) 
               link.classList.add('active'); 
               
               else link.classList.remove('active');
            }

        }
        else {
           section.classList.remove('your-active-class');
         };
    };
};

/*
 * End Main Functions
 * Begin Events
*/
document.addEventListener("scroll", function () {
    makeActive();
});

// Build menu 
navBuilder();
// Set sections as active
makeActive();