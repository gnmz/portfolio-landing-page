let mobileMenuHamburger = document.querySelector('.mobile-menu');
let mobileMenuXMark = document.querySelector('.mobile-menu-x-mark');
let mobileMenu = document.querySelector('.mobile-menu-list');
let mobileMenuList = document.querySelectorAll('.mobile-menu-list ul li');
let mobileMenuHeader = document.querySelector('.mobile-header');

mobileMenuHamburger.addEventListener('click', () => {
    if (mobileMenuHamburger.style.display='block') {
        mobileMenuHamburger.style.display='none';
        mobileMenuHeader.style.display='none';
        mobileMenuXMark.style.display='block';
        mobileMenu.style.display='flex';
    }
})


mobileMenuXMark.addEventListener('click', () => {
    if (mobileMenuXMark.style.display='block') {
        mobileMenuHamburger.style.display='block';
        mobileMenuXMark.style.display='none';
        mobileMenu.style.display='none';
        mobileMenuHeader.style.display='flex';
    }
})


mobileMenuList.forEach(item => {
    item.addEventListener('click', () => {
        mobileMenu.style.display='none';
        mobileMenuHamburger.style.display='block';
        mobileMenuHeader.style.display='flex';
    })
})