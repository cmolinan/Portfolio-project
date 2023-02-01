
// Cards information
const info = {
  works: [
  {
    id: 1,
    image: 'images/work5.png',
    title: 'Crypto World',
    subtit1: 'MICROVERSE',
    subtit2: 'Front-End Dev',
    subtit3: '2022',
    description: `Crypto World is a responsive web application built with React & Redux,  
    accessing online data through API fetches`,
    tech1: 'react & redux',
    tech2: 'javaScript',
    tech3: 'css',
    popup_description: `Crypto World is a webApp that shows online information,
    coming from the company CoinGecko, about the hundred most important 
    Cryptocurrencies of the moment, also showing some of their detailed data.`,
     livelink: 'https://react-redux-capstone-crypto-world.netlify.app/',    
     sourcelink: 'https://github.com/cmolinan/Metrics-WebApp' 
  },
  {
    id: 2,
    image: 'images/work6.png',  
    title: 'The Future Mobility',
    subtit1: 'MICROVERSE',
    subtit2: 'Full Stack Dev',
    subtit3: '2023',
    description: `The Future Mobility is a Full Stack web application, 
    developed in Ruby on Rails for the API only back-end server 
    and in React & Redux for the front-end webapp.`,
    tech1: 'ruby on rails',
    tech2: 'react & redux',
    tech3: 'database',
    popup_description: `Future Mobility manages the CRUD of vehicles 
    and reservations on an electric car website, which also allows the 
    creation of new users and access through an authentication mechanism. 
    Was developed by a team of four members.`,
    livelink: 'https://futuremobility.netlify.app/',
    sourcelink: 'https://github.com/cmolinan/the_future_mobility_backend/'
  },
  {
    id: 3,
    image: 'images/work7.png',
    title: "Space Traveler's Hub",
    subtit1: 'MICROVERSE',
    subtit2: 'Front-End Dev',
    subtit3: '2022',
    description: `Space Traveler's Hub is a responsive web application built  
    in React & Redux, allowing users to book rockets and join selected space missions
    working with real live data from the SpaceX API.`,
    tech1: 'react & redux',
    tech2: 'javaScript',
    tech3: 'css',
    popup_description: `Space Traveler's Hub is a web application 
    for a company that provides commercial and scientific space travel services. 
    The application allow users to book rockets and join selected space missions, 
    working with real live data from the SpaceX API.`,
    livelink: 'https://react-redux-capstone-spacex.netlify.app/',
    sourcelink: 'https://github.com/cmolinan/SpaceHub' 
  },
  {
    id: 4,
    image: 'images/work8.png',  
    title: 'Hollywood Central',
    subtit1: 'MICROVERSE',
    subtit2: 'Front-End Dev',
    subtit3: '2022',
    description: `Hollywood Central is a responsive web application built in JavaScript 
    which randomly displays many TV Shows, Actors and Actresses allowing the user 
    to request details of each one through pop-up windows and give them "likes" 
    and comments`,
    tech1: 'html',
    tech2: 'css',
    tech3: 'javaScript',
    popup_description: `Hollywood Central is a responsive web application based 
    on externals APIs, which randomly displays many TV Shows, Actors and 
    Actresses allowing the user to request details of each one through pop-up 
    windows and give them "likes" and comments`,
    livelink: 'https://lucascomamala.github.io/javascript-capstone-project/',
    sourcelink: 'https://github.com/cmolinan/Hollywood-Central-project' 
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
            <li>${data.tech1}</li>
            <li>${data.tech2}</li>
            <li>${data.tech3}</li>
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
            <li>${data.tech1}</li>
            <li>${data.tech2}</li>
            <li>${data.tech3}</li>
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
