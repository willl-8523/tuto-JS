// let chien = {
//     race : 'Chiwawa',
//     coleurPoil : "Marron",
//     longueurPoil : "court",
//     aboyer : "wouaf",
//     criChien : function (cri) {
//         // console.log("race du chien: " + race + ",\n couleur de poil: " + coleurPoil + ",\n longueur poil: " + longueurPoil + ",\n cri du chien: " + cri + " " + cri);
//         console.log("Race du chien: " + chien.race + "\nCouleur de poil: " + chien.coleurPoil + "\nLongueur poil: " + chien.longueurPoil + "\nCri du chien: " + cri + " " + cri);
//     },
// }
// chien.criChien(chien.aboyer);

// let chien = {
//     race : "chiwawa",
//     longuerPoil : "court"
    
// }
// console.log(chien.race);

// let magicien = {
//     nom : "Bernard",
//     attaquer : function () {
//         console.log(magicien.nom + " le magicien lance un sort");
//     }
// }
// let guerrier = {
//     nom : "Kratos",
//     attaquer : () => console.log(guerrier.nom + " prend son épée") // je met pas de virgule (,); j'ajoute une virgule que lorsque je dois ajouter une autre methode
// }

// magicien.attaquer();
// guerrier.attaquer();

// ********************************** L'OBJET SET ******************************

// -> l'objet set() permet de trier un tableau en evitant les duplicata et permet aussi de stocker des valeurs uniques de tout type

//let monTableau = [410, 'monC', 45, 10, '45', 'monC', 410, '20'];
// let monSet = new Set(monTableau); // déclaration du set avec valeur
// console.log(monSet); //affiche la monTableau modifié en supprimant le duplicata des elts du tableau (le 2e 410 et le 2e monC seront supprimés)
// console.log(monSet.has("monC")); //affiche un boulean (true ou false), affcihe true si l'elt "monC" est dans le tableau 

// let objetSet = new Set(); // declaration du set sans valeur
// console.log(objetSet); // affiche l'objetSet sans aucun elt (set {})
// objetSet.add(true); //ajoute l'elt true dans objetSet (nous ne pouvo ns ajouter q'1 elt; si nous voulons ajouter un 2e elt, nous devons refaire un add() comme ci-dessous)
// objetSet.add(15); // ajoute un 2e elt 15 dans objetSet (nous ne pouvons rajouter une 2e elt que si la 2e elt est differente de la 1ere)
// console.log(objetSet); // Affiche objetSet constitué des elts ajoutés (true et 15)
// console.log(objetSet.size); // Affiche le nbre d'élt (et non l'index) dans objetSet

// ****************************** L'OBJET MAP *****************************

// -> l'objet Map() permet de stocker les paires clé-valeur et de mémoriser l'ordre d'insertion original des clés

// let monMap = new Map(); // Déclaration Map sans valeur
// console.log(monMap);

// let monMap1 = new Map([
//     ["marqueVoiture" , "Nissan"],
//     ["nombreKm" , "10000 Km"],
//     ["fonctionnement" , "essence"]
// ]); // Déclaration Map avec valeur

// monMap1.set("Prix" , "50000 €"); //ajouter une valeur (pour ajouter une valeur on doit donner sa clé => Prix et sa valeur => 50000 €)
// monMap1.delete("nombreKm"); // Supprime une valeur (pour supprimer une valeur on doit le clé de la valeur qu'on souhaite supprimer clé => nombreKm)
// console.log(monMap1);

// -> generalement on utilise Map pour ajouter des elts complets à l'interieur
// let marqueVoitures = new Map();
// marqueVoitures.set("Nissan: ", {
//     nombreKm : "10000 Km",
//     fonctionnement: "Essence",
//     Prix : "50000 € "
// }); // Ajoute un elt (clé + valeur) a notre Map => cle : Nissan et Valeur : nombreKm : "10000 Km",fonctionnement: "Essence", Prix : "50000 € "
// marqueVoitures.set("BMW", {
//     nombreKm : "20000 Km",
//     fonctionnement: "Diesel",
//     Prix : "100000 € "
// });
// marqueVoitures.set("Mercedes", {
//     nombreKm : "20000 Km",
//     fonctionnement: "Diesel",
//     Prix : "100000 € "
// });
// console.log(marqueVoitures);

// **************************** L'OBJET WEAKSET ********************************

// => l'objet WEAKSET est une extension de l'objet SET dans lequel nous ne pouvons ajouter que des objets 

// let ficheJoueur = new WeakSet();
// let ficheJoueur1 = {  // Creation du 1er objet 
//     "nom: " : "Griezman",
//     "PeidsFort" : "gauche",
//     "poste" : "Attaquant",
//     "Nationalité" : "Français"
// };
// let ficheJoueur2 = { // creation du 2e objet
//     "nom: " : "Messi",
//     "PeidsFort" : "gauche",
//     "poste" : "Attaquant Droit",
//     "Nationalité" : "Argentin"
// };

//ficheJoueur.add(ficheJoueur1); // ajout du 1er objet dans ficheJoueur
// ficheJoueur.add(ficheJoueur2);  // ajout du 2e objet(fichejoueur2) dans ficheJoueur
// NB: AUTRE FACON D'AJOUTER DES OBJET DANS UN WEAKSET EST: let ficheJoueur = new WeakSet([ficheJoueur1, ficheJoueur2]); DANS CE CAS 
//     NOUS DEVONS D'ABORD INITIALISER les objets 1 et 2 AVANT D'UTILISER LE WEAKSET
//ficheJoueur.delete(ficheJoueur1); // supprime un objet
//console.log(ficheJoueur);

// *********************************** OBJET WEAKMAP *******************************

// let vehicule = new WeakMap();

// let index = {
//     id : 1
// }

// let voiture = {
//     nomDevoiture : "Nissan",
//     prix : "30.000 €"
// }
// let voiture1 = {
//     nomDevoiture1 : "BMW",
//     prix1 : "70.000 €"
// }
//  vehicule.set(index, voiture, voiture1);
//  //voitures.delete(index);
//  console.log(vehicule);

// function afficheLesPrenoms(...prenom){
//     for (let i = 0; i < prenom.length; i++) {
//         console.log(prenom[i]);
        
//     }
// }

// afficheLesPrenoms("Bart", "Lisa", "Apu", "Homer","Xavier", 'Chantal', [0.1 , , -70, false]);
