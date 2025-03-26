//Toggle cart panel
function toggleCart(){
    const cartPanel = document.getElementById('cartPanel');
    cartPanel.classList.toggle('open');
}

// Toggle Mobile Navigation Menu
const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');

navToggle.addEventListener('click', ()=>{

    navLinks.classList.toggle('mobile-visible');
 });
