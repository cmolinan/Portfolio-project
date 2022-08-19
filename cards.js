
// Cards information
const info = {
  works: [
  {
    id: 1,
    // image: 'images/work1.svg',
    image: 'images/work1a.png',
    title: 'Portfolio',
    subtit1: 'MICROVERSE',
    subtit2: 'Front-End Dev',
    subtit3: '2022',
    description: `A Portfolio based in Figma, and
    built with HTML/CSS and JavaScript for DOM manipulation.`,
    tech1_img: 'images/html-tag.png',
    tech1: 'html',
    tech2_img: 'images/css-tag.png',
    tech2: 'css',
    tech3_img: 'images/js-tag.png',
    tech3: 'javaScript',
    popup_description: `This Portfolio was built entirely in HTML/CSS and JavaScript 
    for DOM Manipulation, using technologies such as Flexbox and Grid, and applying 
    Responsive design. It is based on a FIGMA design`,
     livelink: 'https://cmolinan.github.io/',
     sourcelink: 'https://github.com/cmolinan/Portfolio-project' 
  },
  {
    id: 2,
    image: 'images/work2a.png',  
    title: 'Website for a Conference',
    subtit1: 'MICROVERSE',
    subtit2: 'Front-End Dev',
    subtit3: '2022',
    description: `A responsive website for a 
    Conference commemorating the Bicentennial 
    of the Independence of Peru.`,
    tech1_img: 'images/html-tag.png',
    tech1: 'html',
    tech2_img: 'images/css-tag.png',
    tech2: 'css',
    tech3_img: 'images/js-tag.png',
    tech3: 'javaScript',
    popup_description: `This project is a responsive website for a Conference commemorating 
    the Bicentennial of the Independence of Peru. It is based on an idea from Behance.net 
    and was built using JavaScript for DOM manipulation and events handling. In addition, 
    objects were used to access Local Storage`,
    livelink: 'https://cmolinan.github.io/First-Capstone/',
    sourcelink: 'https://github.com/cmolinan/First-Capstone-project' 
  },
  {
    id: 3,
    image: 'images/work3a.png',
    title: 'Awesome Books',
    subtit1: 'MICROVERSE',
    subtit2: 'Front-End Dev',
    subtit3: '2022',
    description: `A simple interactive website that displays a 
    list of books, allowing to add and remove books from 
    that list.`,
    tech1_img: 'images/html-tag.png',
    tech1: 'html',
    tech2_img: 'images/css-tag.png',
    tech2: 'css',
    tech3_img: 'images/js-tag.png',
    tech3: 'javaScript',
    popup_description: `"Awesome books" is a simple interactive website that 
    displays a list of books and allows you to add and remove books from 
    that list. It is built with JavaScript for DOM manipulation and 
    for managing data in objects.`,
    livelink: 'https://cmolinan.github.io/awesome-books/',
    sourcelink: 'https://github.com/cmolinan/Awesome-Books' 
  },
  {
    id: 4,
    image: 'images/work4a.png',  
    title: 'To Do List',
    subtit1: 'MICROVERSE',
    subtit2: 'Front-End Dev',
    subtit3: '2022',
    description: `A minimalist website that helps organize 
    your day, by lists the things you need to do, allowing 
    to mark and remove the completed tasks`,
    tech1_img: 'images/html-tag.png',
    tech1: 'html',
    tech2_img: 'images/css-tag.png',
    tech2: 'css',
    tech3_img: 'images/js-tag.png',
    tech3: 'javaScript',
    popup_description: `"To-Do List" is a minimalist website that helps organize 
    your day. It simply lists the things you need to do and allows you to mark 
    them as complete. It was built primarily with JavaScript, ES6, and Webpack. 
    Also, includes testing with Jest.`,
    livelink: 'https://cmolinan.github.io/To-Do-List/',
    sourcelink: 'https://github.com/cmolinan/To-do-list-with-testing' 
  }
]  
}

//Work cards
const theWorks = info.works;
const queryWorkSection = document.getElementById ('work-section');

function createWorkSection() {  
  theWorks.forEach(  (data) => {  
    queryWorkSection.innerHTML += `<div id="work${data.id}" class="card card-odd"><div class="works-img" >
        <img src="${data.image}" alt="Work ${data.id}">
      </div>                      
      <div class="works">              
        <h2>${data.title}</h2>
        <div class="infoline">
          <h3>${data.subtit1}</h3>
          <img src="images/dot.png" alt="">
          <h4>${data.subtit2}</h4>
          <img src="images/dot.png" alt="">
          <h4>${data.subtit3}</h4>
        </div>
        <p>${data.description}</p>
        <div class="work-languages">                
          <ul>
            <li><img src="${data.tech1_img}" alt="${data.tech1}"></li>
            <li><img src="${data.tech2_img}" alt="${data.tech2}"></li>
            <li><img src="${data.tech3_img}" alt="${data.tech3}"></li>
          </ul>
        </div>
        <button type="button" onclick="WorkCards('popcard${data.id}')" class="work-btn">See Project</button>
      </div>
      </div> 
  `;
 }
 )
}

//Popup Cards
const queryPopupSection = document.getElementById ('popup-work-section');

function createPopupSection() {  
  theWorks.forEach(  (data) => {
    queryPopupSection.innerHTML += `
      <div id="popcard${data.id}">
        <div class="pop-title">
        <h2>${data.title}</h2>
        <a href="javascript:void(0);" id="pop-close" onclick="WorkCards('popcard${data.id}')">
          <img  src="./images/pop-close.svg"  alt="close">
        </a>
        </div>
        <div class="pop-infoline">
        <h3>${data.subtit1}</h3>
        <img src="images/dot.png" alt="">
        <h4>${data.subtit2}</h4>
        <img src="images/dot.png" alt="">
        <h4>${data.subtit3}</h4>
        </div>

        <div class="pop-img" >
        <img src=${data.image} alt="Work 1">
        </div>    

        <div class="pop-details">
        <div class="pop-text">
          <p>${data.popup_description}
          </p>
        </div> 
        <div class="pop-languages">                
          <ul>
            <li><img src=${data.tech1_img} alt=${data.tech1}></li>
            <li><img src=${data.tech2_img} alt=${data.tech2}></li>
            <li><img src=${data.tech3_img} alt=${data.tech3}></li>
            <li></li>
          </ul>
          <div class="pop-buttons">
            <button type="button" class="pop-btn" onclick=
              "location.href='${data.livelink}'">See Live
              <img src="images/popup-btn-Icon.png" alt=""></button>
            <button type="button" class="pop-btn" onclick=
              "location.href='${data.sourcelink}'">See Source
              <img src="images/popup-github.png" alt=""></button>
          </div>
        </div>
        </div>
      </div>`;
    }
  )
}

//For the Popup Cards
// eslint-disable-next-line no-unused-vars
function WorkCards (popcardNumber) {

  if ( document.getElementById(popcardNumber).style.display == 'block') {
   document.getElementById(popcardNumber).style.display = 'none';    
   document.getElementById('popup-work-section').style.display = 'none';
   document.getElementById('toolbar').style.display = 'flex';
   document.getElementById('section-headline').style.display = 'block';
   document.getElementById('work-section').style.display = 'grid';
   
   document.getElementById('about-section').style.display = 'flex';
   document.getElementById('contact-background').style.display = 'block'; 

   //jump to the original Card 
   window.location.href = "#work"+ popcardNumber.substring(7, 8);
  } else {
   document.getElementById(popcardNumber).style.display = 'block';
   document.getElementById('popup-work-section').style.display = 'flex';
   document.getElementById('toolbar').style.display = 'none';
   document.getElementById('section-headline').style.display = 'none';
   document.getElementById('work-section').style.display = 'none';
   
   document.getElementById('about-section').style.display = 'none';
   document.getElementById('contact-background').style.display = 'none';    
 }
}

createWorkSection();
createPopupSection();
