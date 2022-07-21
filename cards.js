
// Cards information
const info = {
  works: [
  {
    id: 1,
    image: 'images/work1.svg',  
    title: 'Tonic',
    subtit1: 'CANOPY',
    subtit2: 'Back End Dev',
    subtit3: '2015',
    description: `A daily selection of privately
    personalized reads; no accounts or
    sign-ups required.`,
    tech1_img: 'images/html-tag.png',
    tech1: 'html',
    tech2_img: 'images/css-tag.png',
    tech2: 'css',
    tech3_img: 'images/js-tag.png',
    tech3: 'javaScript',
    popup_description: `Lorem Ipsum is simply dummy text of 
    the printing and typesetting industry. Lorem Ipsum has 
    been the industry's standard dummy text ever since the 
    1500s, when an unknown printer took a galley of type 
    and scrambled it to make a type specimen book. It has
     survived not only five centuries,but also the leap 
     into electronic typesetting remaining essent`,
     livelink: 'javascript:void(0);',
     sourcelink: 'javascript:void(0);' 
  },
  {
    id: 2,
    image: 'images/work2.svg',  
    title: 'Multi-Post Stories',
    subtit1: 'CANOPY',
    subtit2: 'Back End Dev',
    subtit3: '2015',
    description: `A daily selection of privately
    personalized reads; no accounts or
    sign-ups required.`,
    tech1_img: 'images/html-tag.png',
    tech1: 'html',
    tech2_img: 'images/css-tag.png',
    tech2: 'css',
    tech3_img: 'images/js-tag.png',
    tech3: 'javaScript',
    popup_description: `Lorem Ipsum is simply dummy text of 
    the printing and typesetting industry. Lorem Ipsum has 
    been the industry's standard dummy text ever since the 
    1500s, when an unknown printer took a galley of type 
    and scrambled it to make a type specimen book. It has
     survived not only five centuries,but also the leap 
     into electronic typesetting remaining essent`,
    livelink: '#',
    sourcelink: '#' 
  },
  {
    id: 3,
    image: 'images/work3.svg',
    title: 'TONIC',
    subtit1: 'CANOPY',
    subtit2: 'Back End Dev',
    subtit3: '2015',
    description: `A daily selection of privately
    personalized reads; no accounts or
    sign-ups required.`,
    tech1_img: 'images/html-tag.png',
    tech1: 'html',
    tech2_img: 'images/css-tag.png',
    tech2: 'css',
    tech3_img: 'images/js-tag.png',
    tech3: 'javaScript',
    popup_description: `Lorem Ipsum is simply dummy text of 
    the printing and typesetting industry. Lorem Ipsum has 
    been the industry's standard dummy text ever since the 
    1500s, when an unknown printer took a galley of type 
    and scrambled it to make a type specimen book. It has
     survived not only five centuries,but also the leap 
     into electronic typesetting remaining essent`,
    livelink: '#',
    sourcelink: '#' 
  },
  {
    id: 4,
    image: 'images/work4.svg',  
    title: 'Multi-Post Stories',
    subtit1: 'CANOPY',
    subtit2: 'Back End Dev',
    subtit3: '2015',
    description: `A daily selection of privately
    personalized reads; no accounts or
    sign-ups required.`,
    tech1_img: 'images/html-tag.png',
    tech1: 'html',
    tech2_img: 'images/css-tag.png',
    tech2: 'css',
    tech3_img: 'images/js-tag.png',
    tech3: 'javaScript',
    popup_description: `Lorem Ipsum is simply dummy text of 
    the printing and typesetting industry. Lorem Ipsum has 
    been the industry's standard dummy text ever since the 
    1500s, when an unknown printer took a galley of type 
    and scrambled it to make a type specimen book. It has
     survived not only five centuries,but also the leap 
     into electronic typesetting remaining essent`,
    livelink: '#',
    sourcelink: '#' 
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

createWorkSection();
createPopupSection();
