const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
const overlayMenu = document.querySelector('.mobile-overlay-menu');
const bar1 = document.querySelector('.bar1');
const bar2 = document.querySelector('.bar2');
const bar3 = document.querySelector('.bar3');
let isMenuOpen = false;
function openOverlay(e){
    if(isMenuOpen){
        overlayMenu.classList.remove('open');
        bar1.classList.remove('open');
        bar2.classList.remove('open');
        bar3.classList.remove('open');
        isMenuOpen = false;
    }else{
        overlayMenu.classList.add('open');
        bar1.classList.add('open');
        bar2.classList.add('open');
        bar3.classList.add('open');
        isMenuOpen = true;
    }
}
mobileMenuBtn.addEventListener('click', openOverlay);