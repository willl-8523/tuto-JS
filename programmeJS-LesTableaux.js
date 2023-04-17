//  let monTableau = [['orange', 'banane', 'pastèque', 'kiwi']];
// console.log(monTableau[0]); // monTableau[index]
//console.log(monTableau[monTableau.length - 1]); // Recuperer le dernier elt du tableau 
//console.log(monTableau.push("Tomate")); //ajoute un elt a la fin du tableau
//console.log(monTableau.unshift("Prune")); // ajoute un elt a la fin du tab
//console.log(monTableau.pop()); //supprime le dernier elt du tableau 
//console.log(monTableau.shift()); // supprime le 1er elt du tab 
//console.log(monTableau.indexOf("avocat")); //donne l'index du tab correspondant a l'elt "banane" (si l'index = -1 alors l'elt dont on cherche l'index ne se trouve pas dans le tab)
//console.log(monTableau.join()); // join tous les elts du tab et les transforme en chaine de caractere
//console.log(monTableau.join(", ")); // join tous les elts du tab et les transforme en chaine de caractere en modifiant les separateurs
//console.log(monTableau.join(" ")); // join tous les elts du tab et les transforme en chaine de caractere en modifiant les separateurs
//console.log(monTableau.join(" / ")); // join tous les elts du tab et les transforme en chaine de caractere en modifiant les separateurs
// monTableau.splice(1, 0, ["bonhomme", "lady", "lady and gentelman"], ['30', '45', '70']);
// console.log(monTableau);

// let monTableau2D = [['pierre', 'Paul', 'Jaques', "Brel"],["Orelsan", "MC Solaar", "Youssoupha"]]; // monTableau[[index i][index j]] 1er tableau index 0 et 2e index 1
// console.log(monTableau2D);
// console.log(monTableau2D[1][1]);
//console.log(monTableau2D[monTableau2D[0].length]);
//console.log(monTableau2D[0].push("Remy")); //ajout un elt a la fin ans le 1er tab
//console.log(monTableau2D[1].unshift("Kery James")); // ajout un elt au début dans le 2e tab
//console.log(monTableau2D.push("Redouane")); // ajout un elt (hors des 2 tab) à la fin du tab principal
//console.log(monTableau2D[0].pop()); //supprime un elt a la fin dans le 1er tab du tab principal
//console.log(monTableau2D[1].shift()); //supprime un elt au debut dans le 2e tab du tab principal
// monTableau2D.splice(0, 0, ['30', '45', '70']);
// console.log(monTableau2D);



//recuperer le dernier elt du tableau 2D: 
// let monTableau2 = monTableau2D[1];
// console.log(monTableau2[monTableau2.length - 1]);


// let monTableauAssociatif = {
    // 'prenom' : 'bibi',
    // 'nom' : 'Seine-zoo',
    // 'poste' : 'chercheur d\'emploi'
// };
// console.log(monTableauAssociatif["poste"]); // Affiche la valeur qui correspond à poste (chercheur d'emploi)
//monTableauAssociatif["nationalité"] = "Francais"; // ajout un elt dans le tab principal
//delete(monTableauAssociatif.poste); // supprime le poste et son elt (chercheur d'emploi) dans le tab principale
//console.log(monTableauAssociatif); // Affiche le tableau associatif

// ********************************** AFFICHER LES VALEURS D UN TAB ASSOCIATIF *******************************

// -> challenge (perso)

// let chaine = '';
// function monTableau(tableauAssociatif) {
//     for (const tableauAssociatif in monTableauAssociatif) {
//         chaine += (tableauAssociatif + " : " + monTableauAssociatif[tableauAssociatif] + "\n");
//     }   
// }
// monTableau(monTableauAssociatif);
// console.log(chaine); // Affiche les valeurs (string) du tableau associatif

// -> challenge (corrigé)

// let chaine = "";
//  function monTableau(tableau) {
//      for (const valeur in tableau) {
//          chaine += (valeur + " : " + tableau[valeur] + "\n");
//      }
//      console.log(chaine); // Affiche les valeurs du tableau
//  }
//  monTableau(monTableauAssociatif);
 

// ********************************** AFFECTATION PAR DECOMPOSITION D1 TABLEAU ***************************

// Avec decomposition

// let informations = ['zoltan', '30', 'homme', 'celibataire'];
// let nom = informations[0];
// let age = informations[1];
// let situationMaritale = informations[3];

// console.log(nom);
// console.log(age);
// console.log(situationMaritale);

//sans decomposition

// let informations = ['zoltan', '30', 'homme', 'celibataire'];
// let [nom, age, sexe, situationMaritale] = informations;
// console.log(nom);
// console.log(age);
// console.log(situationMaritale);

// Acceder aux valeurs du tableau
// var myArray = [18, 64, 99, 'pommes', [true, 15, 'vodka']];

// myArray[4][myArray.length - 1] = 'poires'; 
// console.log(myArray); // Affiche [18, 64, 99, "pommes", [true, 15, "vodka", undefined, "poires"]]




