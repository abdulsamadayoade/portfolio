const myMenu = document.querySelector('.menu-toggle');
const myList = document.querySelector('.nav-list');

myMenu.addEventListener('click', () => {
    myMenu.classList.toggle('show');
    myList.classList.toggle('show');
});