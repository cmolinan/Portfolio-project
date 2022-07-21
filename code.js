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

   } else {
    document.getElementById('toolbar').style.display = 'none';
    document.getElementById('section-headline').style.display = 'none';
    document.getElementById('work-section').style.display = 'none';
    document.getElementById('about-section').style.display = 'none';
    document.getElementById('contact-background').style.display = 'none';    
    document.getElementById('popup-work-section').style.display  = 'flex';
  }
}

