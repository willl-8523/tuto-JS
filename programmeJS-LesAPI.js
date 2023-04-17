        // **************** RECEVOIR DES DONNEES API *****************
// const url = 'https://blockchain.info/ticker'; // récuprer le lien contenant les infos que nous voulons

// function prixActualise(params) {
//     let requete = new XMLHttpRequest(); // creer un objet 
    
//     // ******* creer une requête ***********
//     requete.open('GET', url); // Ouvrir notre requete elle prend 2 param GET ou POST et l'url
//                                 // (GET c'est lorsqu'on veut recuperer les donnees d'une url et POST nous permet d'envoyer les données)
//     requete.responseType = 'json' //preciser le retour que nous attendons (json est la reponse qu'on attend)
//     requete.send(); // des qu'on recoit notre json nous envoyons notre requete en http(d'ou le nom XMLHttpRequest)
    
//     // *********** Dès qu'on recoit une reponse on execute une fonction
//     requete.onload = function() { // Lorsque notre requete est chargée
//         if (requete.readyState === XMLHttpRequest.DONE) { //si l'etat actuel de notre requete  = notre requete lorsqu'il est terminer (ou si notre requete est terminée)
//             if (requete.status === 200) { // si le status de la requete qu'on recoit = 200 (200 c'est le code d'erreur lorsqu'une page web c'est bien)
//                 let reponse = requete.response; // on stocke la reponse (le fichier json)
//                 let prixEnEuro = reponse.EUR.last; // pour avoir le prix en euro, à reponse on ajoute le chemin qui correspond en utilisant le fichier
//                 console.log(prixEnEuro);
//                 document.querySelector('#price_label').textContent = prixEnEuro;
//             }
//         }
//         else{
//             alert("Un problème est survenue, merci de revenir plustard");
//         }
//     }
// }

// setInterval(() => { //actualiser notre prix bitcoin en euro
//     prixActualise();
//     console.log('prixActualise');
// }, 1000);

            // **************** ENVOYER DES DONNES API ***************************
// const url = 'https://lesoublisdelinfo.com/api.php';
// let requete = new XMLHttpRequest;

// requete.open("POST", url);
// requete.setRequestHeader('content-Type', 'application/x-www-form-urlencoded'); // Definir le header qu'on va envoyer a notre API (le header doit être sous forme de formulaire pour qu'il soit pris par notre API)
// requete.responseType = 'json';
// requete.send('prenom=will');

// requete.onload = function () {
//     if (requete.readyState === XMLHttpRequest.DONE) {
//         if (requete.status === 200) {
//             let reponse = requete.response;
//             console.log(reponse);
//         }
//     }
//     else {
//         alert('Un problème est survenu lors du chargement de la page web, reessyer plus tard');
//     }
// }

