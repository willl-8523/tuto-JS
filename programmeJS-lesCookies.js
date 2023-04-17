// // Pour utiliser un cookie nous avons besoin d'un serveur en ligne ou un serveur local(sur notre pc(les logiciels comme 
// // WAMP, MAMP, LAMP, XAMP nous permettent de simulier un serveur))

// // Créer un cookie
// document.cookie = "prenom=John";

// // Afficher tous les cookies
// // alert(document.cookie);

// // Modifier un cookie
// document.cookie = "prenom=Mark";

// // Supprimer un cookie
// document.cookie = "prenom=";

// // Options
// document.cookie = "prenom=John; path=/admin"; // a quelle repertoire (toutes les url qui commenceront par /admin) 
//                                                 // notre cookie sera disponible
// document.cookie = "prenom=John; path=/admin; domain=believemy.com"; //a quelle domaine le cookie sera disponible

// let date = new Date(Date.now() + 31536000000); // la date d'aujourd'hui + 1 an en miliseconde
// date = date.toUTCString(); // Convertit let date en une date sans fuseau horaire (UTC)
// document.cookie = "prenom=John; path=/admin; domain=believemy.com; expires=" + date; // La date UTC d'expiration de notre cookie (let date)

// document.cookie = "prenom=John; path=/admin; domain=believemy.com; max-age=31536000000"; // la durée max de notre cookie (31536000000 = 1 an en ms)

// document.cookie = "prenom=John; path=/admin; domain=believemy.com; max-age=31536000000; secure"; // notre cookie ne sera utilisable sur les sites securisés (HTTPS)


// // ***************************** localStorage et sessionStorage ************

// // LocalStorage = Stocké dans le navigateur même après qu'il soit fermé (n'est pas envoyer au serveur)
// // SessionStorage = Stocké dans le navigateur pendant la session (n'est pas envoyer au serveur)

// // Et les cookies ?

// // setItem[clé], [valeur]) ==> créer un un item (utilisateur)
// // getItem[clé] ==> récuperer un item (recuperer le nom de l'utilisateur)
// // removeItem[clé] ==> supprimer un item
// // clear() : supprimer tous les items
// // key([index]) : obtenir la clef située à l'index donnée (selectionner a un certain index un item)
// // length : obtenir le nombre d'éléments stockés

// if(localStorage.getItem('prenom')) { // si le prenom (item) est deja crée
//   document.body.append('Bonjour ' + localStorage.getItem('prenom'));
// }
// else {
//   let prenom = prompt('Quel est votre prénom ?');
//   localStorage.setItem('prenom', prenom); // creer le prenom de l'utilisateur (avec sessionStorage le prenom se supprimera dès le navigateur se farmera)
//   document.body.append('Bonjour ' + prenom);
// }
// //will localStorage.clear(); // supprime l'utilisateur crée dans le navigateur
