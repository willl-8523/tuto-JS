// Attention : impossible d'utiliser les modules si vous n'avez pas de serveur, 
            // la plupart des navigateurs bloquent les modules pour notre sécurité s'ils ne sont pas executés sur des serveurs

// Pour utiliser les modules nous devons :
    // => Avoir un serveur local ou en ligne
    // => creer un dossier dans lequel nous aurons tous les fichiers.js (script.js, direBonjour.js ...)
    // => le script.js étant le fichier principal, on le rattache a notre fichier index.html (crée en dehors du dossier de js)
            // a lui rajoutant un type: <script type="module" src="script.js"></script>
    // => Pour exporter une fonction (ou une variable ou une objet) d'un fichier annexe (direBonjour.js) vers le fichier principale (script.js)
            //dans le fichier direBonjour.js:
            // export sePresenter(prenom) { // on souhaite exporter la fonction 
            //   console.log('Bonjour ' + prenom);
            // }
    // => On importe sePresenter dans le fichier principal
            // dans script.js:
            // import { sePresenter } from './nomDuDossierCrée/direBonjour.js';
            // sePresenter("bobo"); // on execute la fonction




// // modules/direBonjour.js
// export direBonjour(prenom) {
//   console.log('Bonjour ' + prenom);
// }

// // index.js
// import { direBonjour } from './modules/direBonjour.js';

// direBonjour('John'); // affiche 'Bonjour John'

// // index.html
// <script type="module" src="index.js"></script>