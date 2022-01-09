// MENU BOLADO

const list = document.querySelectorAll('.list');
function activeLink(){
    list.forEach((item) =>
    item.classList.remove('active'));
    this.classList.add('active');
}
list.forEach((item) =>
item.addEventListener('click', activeLink))

// MENU ABRE E FECHA

const menu = document.querySelector('.menu__lista');
let menuToggle = document.querySelector('.menu');
menuToggle.onclick = function(){
    menuToggle.classList.toggle('aberto');
    menu.classList.toggle('visivel');
}

// TOGGLE DARKMODE

const body = document.querySelector('body');
const toggle = document.getElementById('toggle');
toggle.onclick = function (){
    toggle.classList.toggle('darkmode__ativo');
    body.classList.toggle('darkmode__ativo');
}