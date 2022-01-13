// MENU BOLADO

const list = document.querySelectorAll('.list');
function activeLink(){
    list.forEach((item) =>
    item.classList.remove('active'));
    this.classList.add('active');
}
list.forEach((item) =>
item.addEventListener('click', activeLink))

// MENU DESKTOP BRABO

let menuDesktop = document.querySelector('.menu__desktop');
let navegacao = document.querySelector('.navegacao')
menuDesktop.onclick = function(){
    menuDesktop.classList.toggle('aberto');
    navegacao.classList.toggle('aberto');
}

let lista = document.querySelectorAll('.lista');
for (let i=0; i<lista.length; i++){
    lista[i].onclick = function() {
        let j = 0;
        while (j < lista.length) {
            lista[j++].className = 'lista';
        }
        lista[i].className = 'lista selecionado';
    }
}

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

// DETAILS IMPROVISADO

const detailsImprovisado = document.querySelector('.details');
document.querySelector('.conteudo').onclick = function(){
    this.classList.toggle('open');
    detailsImprovisado.classList.toggle('open');
}