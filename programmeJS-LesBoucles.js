// ****************** BOUCLE WHILE ***********************

// exp d'une boucle infinie (car i = 1 sera toujours < 5 a chaque tour de boucle)
// let i = 1;
// while(i < 5) {
//     console.log("Afficher la ligne " + i );
// }

//pour corriger la boucle infinie
// let i = 5;
// while(i > 0) {
//     console.log("Afficher la ligne " + i);
//     i--; // permet la fin de la boucle car il va ajouter 1 jusqu'a ce que i=5 et là la condition (i<5) ne sera plus exact et l'on sortira de la boucle
// }

// ********************* BOUBLE DO WHILE *******************

// let prenom;
// do {
//     prenom = prompt("Saisissez votre prenom");
// }while(prenom == "" || prenom == null); // tant que l'utilisateur à cliqué sur OK sans remplir le champ (prenom == "") ou tant que l'utilisateur a cliqué sur annulé (prenom == null)

// alert("Bonjour " + prenom + ".");

// *********************** BOUCLE FOR ************************************

// for (let i = 5; i > 0; i--) {
//     console.log("Afficher la ligne n°" + i);  
// }

// ********************* MOTS CLES "BREAK" ET "CONTINUE" ****************************

// let i = 0;
// while(i < 5){
//     if(i == 3){
//         i++;
//         continue;
//     }
//     console.log("Aficher la ligne n°" + i);
//     i++;
// } 

// ************************* GERER NOUS MEME LES EXCEPTIONS ********************************

// try {
//     alert(hello); //ne peut pas être executé car la variable hello n'est pas definit (d'où il y' a une erreur)
// }
// catch(error){ //l'erreur que JS aura trouvé dans le bloc try sera affectée à la variable error

//    // alert(error); // va afficher l'erreur que JS aura trouvé dans le bloc try
//    // alert(error.name); // va afficher juste le nom de l'erreur que JS aura trouvé dans le bloc try
//    // alert(error.message); // va afficher juste le message de l'erreur que JS aura trouvé dans le bloc try
//    // alert(error.stack); // va afficher l'erreur en entier que JS aura trouvé dans le bloc try
//     alert("La variable hello n\'existe pas"); // va personalisé le message d'erreur que JS aura trouvé en mettant le message que l'on souhaite
// }

// try {
//     let recompense = prompt("Choisissez une récompense: couteau, épée, arc, lance");
//     let degâts;
//     switch (recompense) {
//         case "couteau":
//             degâts = 25; 
//             break;
//         case "épée":
//             degâts = 40;     
//             break;
//         case "arc":
//             degâts = 20;
//             break;
//         case "lance":
//             degâts = 30;
//             break;
    
//         default:
//             throw new Error("Vous ne pouvez choisir que les recompenses de la liste"); // cette erreur sera affectée à la variable error qui est dans le bloc catch
//             break;
//     }
//     alert("Vous avez choisi: " + recompense + " (" + degâts + " degâts)");
// } catch (error) {
//     alert(error);
// }
// finally{ // s'execute avec ou sans erreur dans le bloc try
//     alert("Fin du programme.");
// }


// ************************************* BOUCLE FORIN ET FOROF DANS TABLEAU ******************************

// let prenomClasse = ["Eveline", "Jacob", "Samuel", "Walter"];

// for (const prenom in prenomClasse) {
//     console.log(prenom); //Afficher les index du tab
//     console.log(prenomClasse[prenom]); //Afficher les valeurs du tab
// }

// for (const prenom of prenomClasse) {
//     console.log(prenomClasse.indexOf(prenom)); //Afficher les index du tableau
//     console.log(prenom); // Afficher les valeurs du tab
// }

// **************************** BOUCLE FOREACH (nous permet d'utiliser les fonction anonyme) *************************************

//la boucle foreach = forOf à la difference que le forEach s'ecrit plus rapidement
// il existe 3 façons d'ecrire une boucle forEach

// ****************************** BOUCLE FOREACH ************************************
// let listeDePays = ["Cameroun", "Côte d'Ivoire", "Algerie", "Afrique du Sud"];

    // 1ere façon (avec une fonction fléchée en plusieurs lignes):
// listeDePays.forEach(pays => {
//     console.log(pays); // Affiche les valeurs du tab
// });

    // 2e façon (façon classique avec une fonction anonyme):
// listeDePays.forEach(function(pays){
//     console.log(pays); // Affiche les valeurs du tab
// });

    // 3e façon (avec une fonction fléchée en 1e ligne):
// listeDePays.forEach(pays => console.log(listeDePays.indexOf(pays))); // Affiche les index du tab


