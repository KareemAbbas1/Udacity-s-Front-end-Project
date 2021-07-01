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
/*
 * End Global Variables
*/

/*
 * Begin Main Functions
*/

// build the nav

function navBuilder () {

    for (section of sections) { // a for...of loop to loop over all the sections and create <li> for each
        
    const listItem = document.createElement('li');

    //const listItemLink = document.createElement('a');

    const  sectionName = section.getAttribute('data-nav');

    /*listItem.addEventListener("click", function (event) {
        event.preventDefault();
        section.scrollIntoView({behavior: "smooth", block: "center"});
     });*/

    /*listItem.addEventListener("click", function(event) {
        event.preventDefault();
        section.scrollIntoView({behavior: "smooth"});
    });*/

                              
    listItem.innerHTML= `<a class= "#${section.id}; menu__link" href= #${section.id}>${sectionName}</a>`;  //href= #${section.id} I removed the href and instead tried to use an even listener as mentioned but preventDefault is always undefined in the console

    
     //listItem.appendChild(listItemLink);
     
     docFragment.appendChild(listItem);
    };
    
menu.appendChild(docFragment);
};

// Add class 'active' to section when near top of viewport

function makeActive() {

    for (const section of sections) {
        const box = section.getBoundingClientRect();
        
        if (box.top <= 150 && box.bottom >= 300) {
           section.classList.add('your-active-class');
           
           //listItem.classList.add('active'); listItem is undefined in the console. I tried also to declear a new var and assign <a>/<li> to it but it didn't work also, only one link was gighlighted 
            
        }
        else {
           section.classList.remove('your-active-class');
           
           //listItem.classList.remove('active');
        };
    };
};


// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
*/
document.addEventListener("scroll", function () {
    makeActive();
});

// Build menu 
navBuilder();

// Scroll to section on link click

// Set sections as active
makeActive();




/*listItem.addEventListener("click", scrollIntoView(event) => {
   event.preventDefault();
   section.scrollIntoView({behavior: "smooth", block: "end", inline: "inline"});
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