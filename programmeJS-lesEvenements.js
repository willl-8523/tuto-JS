// let lien = document.querySelector('a');
// let bouton = document.querySelector('button');
// let container = document.querySelector('.container');

        // Gerer un evenement onclick
// lien.onclick = function () {
//     if (confirm("Êtes-vous sûr ?")) {
//         location.href="https://google.com"   
//     }   
// }

// lien.onclick = () => { // ********* fonction fléchée **************
//     if (confirm("Êtes-vous sûr ?")) { // si l'utilisateur appui sur ok lorsque le popUp s'affiche (si confirm() == true)
//         location.href="https://google.com"   
//     }   
// }

        //Methode recommandée pour gerer les evements
// lien.addEnventListener('click', () => {
//     if (confirm("Êtes vous sûr ?")) {
//         location.href="https//:google.com";
//     }
// });

//Lorsque l'utilisateur passe au dessus avec ma souris ou pas 
// bouton.onmouseover = () => {
//     document.body.style.backgroundColor = "orange";
// }
// bouton.onmouseout = () => {
//     document.body.style.backgroundColor = "white";
// }

    //Methode recommandée pour les evenements
// bouton.addEventListener('mouseover', () => {
//     document.body.style.backgroundColor = "orange";
// });
// bouton.addEventListener('mouseout', () => {
//     document.body.style.backgroundColor = 'white';
// });

        // Autre façon de faire un evenement(avec une fonction)
// function fontSizeNormal () {
//     container.style.fontSize = "1em";
// }
// container.addEventListener('mouseover', () => {
//     container.style.fontSize = "1.5em";
//     alert("Etes vous sûre de vouloir allé sur le container ?");

// });
// container.addEventListener('mouseout', fontSizeNormal);


        //Supprimer un evenement
// container.addEventListener('mouseover', () => {
//     alert("Etes vous sûre de vouloir allé sur le container ?");

// });
// lien.addEventListener('mouseover', (e) => {
//     alert("Etes vous sûre de vouloir allé sur ce lien ?");
//     e.stopPropagation(); // permet la suppression de l'elet parent
// });

        //Gerer le temps d'executions d'un evenement
// setTimeout(() => {
//     alert("bonjour"); //affiche bonjour apres 3s (ne s'affiche qu'une fois)
// }, 3000);

// setInterval(() => {
//     alert("Quelle est votre âge ?"); //affiche le message toutes les 5s
// }, 5000);

// function direBonjour() {
//     alert("Bonjour");
// }
// let timer = setTimeout(() => {
//     direBonjour();
// }, 3000);
//clearTimeout(timer);