const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

//----------------------------------------------------
// My work starts here
//----------------------------------------------------


//header image
const headerImage = document.querySelector('#cta-img');
headerImage.src = siteContent['cta']['img-src'];
headerImage.style = 'display:inline-block;';

//accent image
const accentImage = document.querySelector('#middle-img');
accentImage.src = siteContent['main-content']['middle-img-src'];




//header h1
const headerText = document.querySelector('h1');
headerText.innerHTML = siteContent["cta"]["h1"];
//NOTE: setting .innerHTML uses an equals ='asdf';  not a paren ('asdf');

//header button
const headerButton = document.querySelector('.cta-text button');
headerButton.innerHTML = siteContent['cta']['button'];


//navbar
const navbar = document.querySelectorAll('nav a');
navbar[0].innerHTML = siteContent['nav']['nav-item-1'];
navbar[1].innerHTML = siteContent['nav']['nav-item-2'];
navbar[2].innerHTML = siteContent['nav']['nav-item-3'];
navbar[3].innerHTML = siteContent['nav']['nav-item-4'];
navbar[4].innerHTML = siteContent['nav']['nav-item-5'];
navbar[5].innerHTML = siteContent['nav']['nav-item-6'];



//color
navbar.forEach(item => item.classList.add('green'));


//make style changes before adding to the navbar
//if prepend first, hardcode indexes in

//append & prepend new items

// //-------------try 4
// function to reduce repetition



// //-------------try 3
// //this works!

// where to put links:
const parentElem = document.querySelector('nav');

//create link elements in memory
const newLink1 = document.createElement('a');
newLink1.href = '#';
newLink1.innerHTML = 'Home';
newLink1.classList.add('green');

const newLink2 = document.createElement('a');
newLink2.href = '#';
newLink2.innerHTML = 'Team';
newLink2.classList.add('green');

//add newly created links to dom
parentElem.prepend(newLink1);
parentElem.appendChild(newLink2);





// //-------------try 2
// const node = document.createElement('a');
// const textnode = document.createTextNode('Visit');
// node.appendChild(textNode);
// navbar.appendChild(node);



//-------------try 1
// //new nav item
// function newLink (linkText){
//   document.createElement('a');
//   a.innerHTML = linkText;
//   a.href = '#';
// }

// //prepend "Home"
// const linkHome = newLink('Home');
// nav.prepend(linkHome);


// //append "Visit"
// const linkVisit = newLink('Visit');
// nav.append(linkVisit)






// allContent headers
const allContentHead = document.querySelectorAll('.text-content h4');
allContentHead[0].innerHTML = siteContent['main-content']['features-h4'];
allContentHead[1].innerHTML = siteContent['main-content']['about-h4'];
allContentHead[2].innerHTML = siteContent['main-content']['services-h4'];
allContentHead[3].innerHTML = siteContent['main-content']['product-h4'];
allContentHead[4].innerHTML = siteContent['main-content']['vision-h4'];


// allContent p
const allContentPara = document.querySelectorAll('.text-content p');
allContentPara[0].innerHTML = siteContent['main-content']['features-content'];
allContentPara[1].innerHTML = siteContent['main-content']['about-content'];
allContentPara[2].innerHTML = siteContent['main-content']['services-content'];
allContentPara[3].innerHTML = siteContent['main-content']['product-content'];
allContentPara[4].innerHTML = siteContent['main-content']['vision-content'];


//contact info
const contactHeader = document.querySelector('.contact h4');
contactHeader.innerHTML = siteContent['contact']['contact-h4'];

const contactParaAll = document.querySelectorAll('.contact p');
contactParaAll[0].innerHTML = siteContent['contact']['address'];
contactParaAll[1].innerHTML = siteContent['contact']['phone'];
contactParaAll[2].innerHTML = siteContent['contact']['email'];


//copyright
const copyright = document.querySelector('footer p');
copyright.innerHTML = siteContent['footer']['copyright'];