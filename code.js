function MobileMenu () {
  if (document.getElementById('MobileMenu').style.display == 'block') {
    document.getElementById('MobileMenu').style.display = 'none';
  } else {
     document.getElementById('MobileMenu').style.display = 'block';
    }
}
  
document.getElementById ('menu-icon').addEventListener('click', MobileMenu);
document.getElementById ('close-menu').addEventListener('click', MobileMenu);
