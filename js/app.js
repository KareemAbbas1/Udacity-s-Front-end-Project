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
/*
 * End Global Variables
*/







/*
 * Begin Main Functions
*/

// build the nav

function navBuilder () {
 // a for...of loop to loop over all the sections and create <li> for each
    for (const section of sections) { 
        
     const listItem = document.createElement('li');

     const  sectionName = section.getAttribute('data-nav');

     listItem.innerHTML= `<a class= "menu__link" href= "#${section.id}">${sectionName}</a>`;

     listItem.addEventListener("click", function(event) {//this code isn't working 
         event.preventDefault();
         section.scrollIntoView({behavior: "smooth", block: "center"});
     });
     
     docFragment.appendChild(listItem);
    };
    menu.appendChild(docFragment);
};

// Add class 'active' to section when near top of viewport
function makeActive() {                                                         
    const links = document.querySelectorAll('a');
    for (const section of sections) {
        const box = section.getBoundingClientRect();
        
        if (box.top <= 150 && box.bottom >= 300) {

           section.classList.add('your-active-class');

           for (const link of links) {
               if (section.getAttribute("data_nav") === link.textContent){
                   link.classList.add('active');
                   section.scrollIntoView({behavior: "smooth", block: "center"});
               }
           }

        }
        else {
           section.classList.remove('your-active-class');
           
           

        };
    };
};


// Scroll to anchor ID using scrollTO event

/*
 * End Main Functions
 * Begin Events
*/
document.addEventListener("scroll", function () {
    makeActive();
});

// Build menu 
navBuilder();

// Scroll to section on link click

// Set sections as active
makeActive();


/*listItem.addEventListener("click", function(event) {
         event.preventDefault();
         section.scrollIntoView({behavior: "smooth"});
     });*/

// The refrence from which I understod the intersection observer 'https://www.youtube.com/watch?v=T8EYosX4NOo'
/*const options = {threshold: 0.7}; 
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
    
*/
/*
if ("intersectionObserver" in window) {
const observer = new IntersectionObserver (callback, otionsObject);
for (const section of sections) {
    observer.observe(section);
 }
};
const link = document.querySelectorAll("a");
function callback (entries, observer) {
    entries.forEach(entry => {
        if (entry.isIntersection) {
            
            entry.addClassList.add("your-active-class");

            for (const link of links){
            if (entry.target.getAttribute("data-nav")) === link.textContent
               link.classList.add("active-link")
            }
            observer.unobserve(entry.target)
        }
    })
}
const optionsObject = {threshold}
*/
/*
links.addEventListener('click', selectSection)

function selectSection(event) {

    for (const section of sections) {
        event.preventDefault();
        if (section.getAttribute('data-nav')=== event.target.textContent) {
            section.scrollIntoView({behavior: "smooth", block: "center"});
        }
    }

    //const clickedSection = event.target.textContent

    //clickedSection.scrollIntoView({behavior: "smooth", block: "center"});

}
*/
/*
const menu = document.getElementById("navbar__list");
menu.addEventListener("click", scrollToSection)

function scrollToSection(event) {
   event.preventDefault();
   for (const section of sections) {

   }
}
*/