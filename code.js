const queryMobileMenu = document.getElementById('MobileMenu');
const queryMenuIcon = document.getElementById ('menu-icon');
const queryCloseMenu = document.getElementById ('close-menu');

function MobileMenu () {
  if ( queryMobileMenu.style.display == 'block') {
    queryMobileMenu.style.display = 'none';
  } else {
    queryMobileMenu.style.display  = 'block';
    }
}

queryMenuIcon.addEventListener('click', MobileMenu);
queryCloseMenu.addEventListener('click', MobileMenu);
