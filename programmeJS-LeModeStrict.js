// Le mode strict : Permet d'afficher les erreurs que js n'affiche pas
// => il doit être au debut de notre fichier js ou au debut de la fonction ou l'on veut l'utiliser
// => il est utiliser par defaut par les modules
// => pour utiliser le mode strict on le mot clé: "use strict";

// Sans le mode strict:
// prenom = "John"; // Ceci est une erreur silencieuse car on a pas créer la variable let prenom ou var prenom
//                 // mais js affichera qu'en même le prenom car automatiquement js créera une variable var prenom
// console.log(prenom);

//  Avec le mode strict:
// "use strict"; // En utilisant le mot clé use strict, js nous affichera l'erreur silencieuse
// prenom = "toto";
// console.log(prenom);

// // Sans le mode strict
// function sePresenter() {
//   // "use strict";
//   prenom = "Doe";
//   console.log(prenom); // js affichera qu'en même or la variable nom n'est pas créee
// }
// sePresenter();

// // Avec le mode strict
// function direBonjour() {
//   "use strict";
//   nom = "john";
//   console.log(nom); // js affichera l'erreur silencieuse
// }
// direBonjour();

    // Sans le mode strict 
// function addition(nombreA, nombreA) {
//     console.log(nombreA + nombreA); // Affichera 2 car nombreA = 1; dc js n'affichera pas d'erreur
// }
// addition(7, 1);

    // Avec le mode strict
// function addition(nombreA, nombreA) {
//     'use strict';
//     console.log(nombreA + nombreA); // Affichera une erreur silencieuse disant que nombreA est utilisé 2 fois dans les parametres
// }
// addition(7, 1);


age = 18;
console.log('Vous avez ' + age + ' ans.');
 
'use strict';
prenom = 'mark';
console.log('Bonjour ' + prenom);