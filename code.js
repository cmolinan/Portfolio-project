const queryMobileMenu = document.getElementById('MobileMenu');

//For Mobile Menu
function MobileMenu () {
  if ( queryMobileMenu.style.display == 'block') {
    queryMobileMenu.style.display = 'none';
  } else {
    queryMobileMenu.style.display  = 'block';
    }
}

//For the Popup Cards
function WorkCards (popcardNumber) {

   if ( document.getElementById(popcardNumber).style.display == 'block') {
    document.getElementById(popcardNumber).style.display = 'none';    
    document.getElementById('toolbar').style.display = 'flex';
    document.getElementById('section-headline').style.display = 'block';
    document.getElementById('work-section').style.display = 'grid';
    document.getElementById('about-section').style.display = 'flex';
    document.getElementById('contact-background').style.display = 'block'; 

    //jump to the original Card 
    window.location.href = "#work"+ popcardNumber.substring(7, 8);
   } else {
    document.getElementById(popcardNumber).style.display = 'block';
    document.getElementById('toolbar').style.display = 'none';
    document.getElementById('section-headline').style.display = 'none';
    document.getElementById('work-section').style.display = 'none';
    document.getElementById('about-section').style.display = 'none';
    document.getElementById('contact-background').style.display = 'none';    
  }
}

// For email Validation.
const contact_form = document.getElementById('contact-form');
const email = document.getElementById('email');
const emailLabel = document.getElementById('label-email');
const underCase = /^[a-z0-9_.+-]+@[a-z0-9-]+\.[a-z0-9-.]+$/;

function email_validation() {
  if (underCase.test(email.value)) {
    contact_form.submit();
    contact_form.reset();
    emailLabel.style.display = 'none';
    email.style.border = 'none';
    return false;
  } else {
    emailLabel.style.display = 'block';
    email.style.border = '3px solid red';
    return false;
  }
}