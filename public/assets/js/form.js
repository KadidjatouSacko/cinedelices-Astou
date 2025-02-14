import { tools } from './datas.js';

//On récupère la section du formulaire d'ajout d'ustensiles
const addItemElt = document.querySelector('.form-add-tools');
console.log(addItemElt);

//Au chargement de la page, on fait disparaitre les éléments qui seront dévoilés dynamiquement
window.addEventListener('DOMContentLoaded', () => {
    addItemElt.style.display = "none" 
})

//Au clique sur le bouton, le formulaire d'ajout d'ustensiles se dévoile
const addEltBtn = document.querySelector('.add-elt');
addEltBtn.addEventListener('click', () => {
    addItemElt.style.display = "inline" 
})

//Au clique sur ajouter, il se rajoute au tableau items qui s'affiche à la place du message par défaut dans tools-list
const addBtn = document.querySelector('.add-btn');
const endBtn = document.querySelector('.end-btn')
console.log(endBtn);

let items = [];



addBtn.addEventListener('click', () => {
    const name = document.querySelector('#tool').value;
    const item = {name: name}
    const itemList = document.createElement('li');
    itemList.textContent = `${item.name},`
    const ctn = document.querySelector('.ctn-items');
    document.querySelector('#no-item').style.display = 'none';
    ctn.appendChild(itemList);
    items += `${item.name},`;
    console.log(items);      
})       

endBtn.addEventListener('click', () => {
    addItemElt.style.display = "none" ;
    addEltBtn.style.display = 'none';
})


