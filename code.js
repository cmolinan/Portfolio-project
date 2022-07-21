const queryMobileMenu = document.getElementById('MobileMenu');

function MobileMenu () {
  if ( queryMobileMenu.style.display == 'block') {
    queryMobileMenu.style.display = 'none';
  } else {
    queryMobileMenu.style.display  = 'block';
    }
}

function WorkCards () {
  
   if ( document.getElementById('popup-work-section').style.display == 'flex') {
    document.getElementById('popup-work-section').style.display = 'none';
    document.getElementById('toolbar').style.display = 'flex';
    document.getElementById('section-headline').style.display = 'block';
    document.getElementById('work-section').style.display = 'grid';
    document.getElementById('about-section').style.display = 'flex';
    document.getElementById('contact-background').style.display = 'block'; 
   } else {
    document.getElementById('popup-work-section').style.display  = 'flex';
    document.getElementById('toolbar').style.display = 'none';
    document.getElementById('section-headline').style.display = 'none';
    document.getElementById('work-section').style.display = 'none';
    document.getElementById('about-section').style.display = 'none';
    document.getElementById('contact-background').style.display = 'none';    
    
  }
}

