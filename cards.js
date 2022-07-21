
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
    lang1_img: 'images/html-tag.png',
    lang1: 'html',
    lang2_img: 'images/css-tag.png',
    lang2: 'css',
    lang3_img: 'images/js-tag.png',
    lang3: 'javaScript',
    popup_description: `Lorem Ipsum is simply dummy text of 
    the printing and typesetting industry. Lorem Ipsum has 
    been the industry's standard dummy text ever since the 
    1500s, when an unknown printer took a galley of type 
    and scrambled it to make a type specimen book. It has
     survived not only five centuries,but also the leap 
     into electronic typesetting remaining essent`
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
    lang1_img: 'images/html-tag.png',
    lang1: 'html',
    lang2_img: 'images/css-tag.png',
    lang2: 'css',
    lang3_img: 'images/js-tag.png',
    lang3: 'javaScript',
    popup_description: `Lorem Ipsum is simply dummy text of 
    the printing and typesetting industry. Lorem Ipsum has 
    been the industry's standard dummy text ever since the 
    1500s, when an unknown printer took a galley of type 
    and scrambled it to make a type specimen book. It has
     survived not only five centuries,but also the leap 
     into electronic typesetting remaining essent`
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
    lang1_img: 'images/html-tag.png',
    lang1: 'html',
    lang2_img: 'images/css-tag.png',
    lang2: 'css',
    lang3_img: 'images/js-tag.png',
    lang3: 'javaScript',
    popup_description: `Lorem Ipsum is simply dummy text of 
    the printing and typesetting industry. Lorem Ipsum has 
    been the industry's standard dummy text ever since the 
    1500s, when an unknown printer took a galley of type 
    and scrambled it to make a type specimen book. It has
     survived not only five centuries,but also the leap 
     into electronic typesetting remaining essent`
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
    lang1_img: 'images/html-tag.png',
    lang1: 'html',
    lang2_img: 'images/css-tag.png',
    lang2: 'css',
    lang3_img: 'images/js-tag.png',
    lang3: 'javaScript',
    popup_description: `Lorem Ipsum is simply dummy text of 
    the printing and typesetting industry. Lorem Ipsum has 
    been the industry's standard dummy text ever since the 
    1500s, when an unknown printer took a galley of type 
    and scrambled it to make a type specimen book. It has
     survived not only five centuries,but also the leap 
     into electronic typesetting remaining essent`
  }
]  
}

const theWorks = info.works;
const queryWorkSection = document.getElementById ('work-section');

function createWorkSection() {  
  theWorks.forEach(  (data) => {  
    queryWorkSection.innerHTML += `<div class="card card-odd"><div class="works-img" >
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
            <li><img src="${data.lang1_img}" alt="${data.lang1}"></li>
            <li><img src="${data.lang2_img}" alt="${data.lang2}"></li>
            <li><img src="${data.lang3_img}" alt="${data.lang3}"></li>
          </ul>
        </div>
        <button type="button" onclick="WorkCards()" class="work-btn">See Project</button>
      </div>
      </div> 
  `;
 }
 )
}

createWorkSection();
