let selekt = document.getElementById('main');
let chil = selekt.lastElementChild;

function change () {
    chil.style.background = 'red';
}


let foot = document.getElementById('footer');

let all = document.getElementById('wrapper');

let children1 = document.querySelectorAll('h1')
let childrenAnase = document.querySelectorAll('p')

all.innerHTML = "";
all.appendChild(foot);
all.appendChild(selekt);

setTimeout(screen, 3000);
setTimeout(change, 4000);

function screen () {
    console.log(all);
}

//==================================================

