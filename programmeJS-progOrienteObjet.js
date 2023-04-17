// ************* les objet litteraux *****************

//Declaration d'1 objet litteral (livre est une variable qui contient un objet, l'objet commence à l'ouverture de l'accolade)
// let livre = {
//     //propietes qui ne sont pas des variables
//     nomLivre : "une saison au congo",
//     auteurLivre : "aimé cesaire",
//     prix : 6,
//     nombrePages : 133,
//     maisonEdition : "points",

//     //methode
//     detailDuLivre: function () {
//         console.log(livre); // Affiche toutes les propriete de let livre
//         console.log(livre.prix + " €"); // Affiche le prix du livre
//         console.log(this.prix); // autre maniere d'afficher la propriete prix de l'objet livre (this.prix c'est la propriete prix qui se trouve dans la variable livre)
//     }
// }
// livre.detailDuLivre(); //execute l'objet livre
// livre.couleur = "jaune"; // permet d'ajouter une propriété (couleur: jaune) à l'objet livre

//Autre facon de declarer un objet litteral
// function voiture() {
//     // ici return est objet
//     return {
//         nomVoiture : "Mercedes",
//         fonctionnement : "Diesel",
//         prix : 20000
//     }
// }
// let maVoiture = voiture(); // stocke les proprietes de l'objet dans coordonnee
// console.log(maVoiture.fonctionnement); // affiche le fonctionnement de la voiture

// **************** creer un objet avec un constructeur personnalisé *************

// //fonction constructeur (frequemment il utilise le mot-cle this)
// function Garage(marqueVoiture, fonctionnement, nbKM) {
//     this.marqueVoiture = marqueVoiture; // this.marqueVoiture (propiete) utilisera l'objet en cours qui sera crée a partir constructeur et aura la propriete marqueVoiture
//     this.fonctionnement = fonctionnement;
//     this.nbKM = nbKM;

//     //méthode
//     // this.presenterVoiture = () => {
//     //     console.log("Bonjour, la voiture que vous avez choisi est " + this.marqueVoiture + ", fonctionne au " + this.fonctionnement + " et à " + this.nbKM + " Km au compteur");
//     // }
// }

// //créer un objet
// var voitureA = new Garage("Mercedes", "Diesel", 10000); // est un objet
// var voitureB = new Garage("Citroën", "Essence", 17000);
// // console.log(voitureA.fonctionnement); // affiche le fonctionnement de la voitureA
// console.log(voitureB);

// voitureA.presenterVoiture();
// voitureB.presenterVoiture();

// voitureA.prix = 1000 + " €"; //Ajoute une propriete prix à voitureA

// Dire a notre fonction constructeur qu'une de ses proprietes est un objet
// function PlusDinfos(couleur, annee, vidange, voitureCorrespondante) {
//     this.couleur = couleur;
//     this.annee = annee;
//     this.vidange = vidange;
//     this.voitureCorrespondante = voitureCorrespondante;
// }
// var infosVoiture = new PlusDinfos("noire", 2012, true, voitureA); // ici la propriete voituresCorespondante deviendra l'objet voitureA
// console.log(infosVoiture.voitureCorrespondante.marqueVoiture); //Affiche "Mercedes", en accedant au propiete de l'objet voitureA

// ********** Créer un objet avec le constructeur Objet() qui est dans __proto__ **************
// var monObjet = new Object(); // Object() étant le constructeur créer par js
// monObjet.nomDuGarage = "CarRenov";
// console.log(monObjet);

// // partager nos objet et nos methodes(fonction anonyme et non fonction flechée) grâce a notre prototype
// Garage.prototype.presenterVoiture = function() { // le prototype du constructeur permet de pouvoir partager la méthode presenterVoiture avec le constructeur que nous avons crée
//   //méthode
//     console.log( "Bonjour, la voiture que vous avez choisi est " + this.marqueVoiture +", fonctionne au " +this.fonctionnement +" et à " +this.nbKM +" Km au compteur");
// }
// voitureB.presenterVoiture();

// *********************** Comprendre l'héritage ******************
// => Animal on a comme parametre Oiseau et Mammifere
// => Oiseau on a comme parametre nombreDePatte Poids et Taille des ailes
// => Mammifère on a comme parametre nombreDePatte Poids et typeDePoils
// => nous pouvons deduire que dans Animal on a comme parametre nombreDePatte et Poids

// function Animal(nombrePattes, poids) {
//   // Etape 1: créer le constructeur de base (constructeur generalisé)
//   this.nombrePattes = nombrePattes;
//   this.poids = poids;
// }

// //Etape 4: si on veut presenter nos animaux, nous pouvons ecrire une méthode dans le prototype du constructeur de base
// // pour quelle puisse être partagée aux contructeurs specifique
// Animal.prototype.presentation = function () {
//   console.log(
//     "C'est animal possède " +
//       this.nombrePattes +
//       " pattes et fait " +
//       this.poids +
//       "."
//   );
// };

// function Oiseau(tailleDesAiles, nombrePattes,poids /*(on ajoute les parametre du constructeur de base)*/) {
//   // Etape 2: créer les constructeurs specifique (Oiseau et Mammifère)
//   this.tailleDesAiles = tailleDesAiles;
//   // Etape 3: Permettre au constructeur de base de partager ses parametres avec le les constructeur specifique en utilisant la mehtode call()
//   Animal.call(this, nombrePattes, poids); // ici this correspond a l'objet en cours (perroquet); la fonction call() permet d'appeler une fonction constructeur
// }
// Oiseau.prototype = Object.create(Animal.prototype); // Etape 5: comme le constructeur Mammifère herite de object, nous faisons en sorte que ce dernier hérite de Animal
// Oiseau.prototype.constructeur = Oiseau; // Etape 6: comme objet.create() supprime le constructeur, nous devons le rajouter pour que l'héritage se fasse

// function Mammifère(typeDePoils, nombrePattes, poids) {
//   Animal.call(this, nombrePattes, poids); // ici this correspond a l'objet en cours (perroquet)
//   this.typeDePoils = typeDePoils; // Etape 2
// }
// Mammifère.prototype = Object.create(Animal.prototype); // Etape 5: comme le constructeur Mammifère herite de object, nous faisons en sorte que ce dernier hérite de Animal (prototype Mammifère hérite du prototype Animal)
// Mammifère.prototype.constructeur = Mammifère; // Etape 6: comme objet.create() supprime le constructeur, nous devons le rajouter pour que l'héritage se fasse

// var perroquet = new Oiseau("grandes", 2, "1Kg");
// var sanglier = new Mammifère("petites", 4, "15kg");
// console.log(sanglier);
// // perroquet.presentation();
// // sanglier.presentation();

// ***************** Creer un objet avec une classe constructeur *****************

// class Animal {
//   constructor(nombreDePattes, poids) {
//     this.nombreDePattes = nombreDePattes,
//     this.poids = poids;
//   }
//   sePresenter() {
//     console.log("C'est animal possède " + this.nombreDePattes + " et a " + this.poids + " Kg.");
//   }
// }
// // class Oiseau extends Animal {
// //   constructor(taillesDesAiles, nombreDePattes, poids) {
// //     this.taillesDesAiles = taillesDesAiles;
// //   }
// //   voler() {
// //     console.log("L'oiseau vole");
// //   }
// // }
// // class Mammifère {
// //   constructor(typeDePoils) {
// //     this.typeDePoils = typeDePoils;
// //   }
// // }
// var elephant = new Animal(4, 1000);
// var aigle = new Animal(2, 20, "longues");
// //elephant.sePresenter();
// console.log(aigle);

// *********************** Methode call(), Apply(), bind() ***********************

// let gandalf = {
//     titre : "Magicien"
// }
// function direBonjour(bagetteMagique, arme) {
//     console.log("Bonjour " + this.titre + " possedez vous une " + bagetteMagique + " et une " + arme);
// }
// //direBonjour.call(gandalf, "baguette Magique", "arme"); // Avec call() si on executer direBonjour on affecte les valeurs un a un a nos variables
// //direBonjour.apply(gandalf, ["baguette Magique", "arme"]); // Avec aplly() si on executer direBonjour on affecte les valeurs sous forme de tableau a nos variables (a besoin d'1 tableau pour passer les arguments)

// this.valeur = "window"; // 
// let monObjet = {
//     valeur : "Objet", 
//     getValeur : function() {
//         console.log(this.valeur);
//     }
// }
// //monObjet.getValeur(); // Affiche "Objet" sur la console car getValeur est dans la fonction
// let maValeur = monObjet.getValeur; // stocke la fonction getValeur dans maValeur a l'exterieur
// maValeur(); // Affiche "undefined" ou "window" car en mettant notre fonction getValeur dans une variable à l'exterieur de la fonction "this" devient window 

// let maValeurAvecBind = monObjet.getValeur.bind(monObjet); // "bind" nous permet stocker la fonction getValeur dans maValeurAvecBind en gardant le contexte de "this" a l'interieur
// maValeurAvecBind(); // Affiche "Objet" qui est la valeur de this.valeur a l'interieur de la fonction

// ******************* Creer un objet avec une classe et un constructeur *************************
// class Utilisateur {
//     constructor(nom, prenom, email){
//         this.nom = nom;
//         this.prenom = prenom;
//         this.email = email;
//     }
//     sePresenter() { //Cette méthode se mettra automatiquement dans le prototype du constructeur(Utilisateur) d'où les autres construteur pourront heriter de cette methode
//         console.log("Bonjour je m'appelle " + this.prenom + " " + this.nom + " et vous pouvez me joindre à cette adresse: " + this.email);
//     }
// }

// const will = new Utilisateur("Wilfried", "Mbenock", "wilfriedngo@gmail.com");
// console.log(will);
// will.sePresenter();

// ************************ Heritage des classes **************************
// class Animal {
//     constructor(nombreDePattes, poids) {
//         this.nombreDePattes = nombreDePattes;
//         this.poids = poids;
//     }
//     sePresenter() {
//         if (this.longueurDesAiles) {
//             console.log("Cet animal possede " + this.nombreDePattes + " pattes, fait " + this.poids + " et possède des ailes " + this.longueurDesAiles);    
//         }
//         else{
//             console.log(
//               "Cet animal possede " +
//                 this.nombreDePattes +
//                 " pattes, fait " +
//                 this.poids +
//                 " et possède des poils " +
//                 this.tailleDesPoils
//             ); 
//         }
//     }
// }

// class Oiseau extends Animal /*Permet à oiseau d'heriter des methodes de Animal*/{
//     constructor(nombreDePattes, poids, longueurDesAiles) {
//         super(nombreDePattes, poids); /* permet a oiseau d'heriter des objet des Animal*/
//         this.longueurDesAiles = longueurDesAiles;
//     }
//     voler(){ // Cette méthode est uniquement utilisée pour la class oiseau
//         console.log("L'oiseau vole!!!");
//     }
// }

// class Mammifère extends Animal {
//     constructor(nombreDePattes, poids, tailleDesPoils) {
//         super(nombreDePattes, poids);
//         this.tailleDesPoils = tailleDesPoils;
//     }
// }

// var aigle = new Oiseau(2, "10 kg", "grandes");
// // console.log(aigle);
// // aigle.sePresenter();
// // aigle.voler();
// var taureau = new Mammifère(4, "500 kg", "courts");
// console.log(taureau);
// taureau.sePresenter();

// ******************************* Les GETTER et les SETTER *********************

//Les Getter (accesseurs) permettent de recuperer une propiété (return this.nomDePropriété)
// class Utilisateur {
//     constructor(nom, prenom, email){
//         this.nom = nom;
//         this.prenom = prenom;
//         this.email = email;
//     }
//     get nomComplet() {
//         return this.prenom + " " + this.nom;
//     }
//     sePresenter() { //Cette méthode se mettra automatiquement dans le prototype du constructeur(Utilisateur) d'où les autres construteur pourront heriter de cette methode
//         console.log("Bonjour je m'appelle " + this.prenom + " " + this.nom + " et vous pouvez me joindre à cette adresse: " + this.email);
//     }
// }
// var xavier = new Utilisateur("De Maison", "Francois xavier", "francoisXavier@gmail.com");
// console.log(xavier.nomComplet); //Comme la propriété this.nomComplet n'existe pas, JS va aller chercher dans le getter et recuperer la valeur de la propriété (+ this.prenom ' ' + this.nom)

//Les Setter (mutateurs) permettent de definir ou de redefinir une propriete
// class Utilisateur {
//     constructor(nom, prenom, email){
//         this.nom = nom;
//         this.prenom = prenom;
//         this.email = email;
//     }
//     get nomComplet() {
//         return this.prenom + " " + this.nom;
//     }
//     set nomComplet (value) {
//       [this.prenom, this.nom] = value.split(" "); //Ici value = "chantal Ayissi", le split(' ') permet de decouper la valeur de value(decouper au niveau de l'espace) le transformer en tableau
//       // de sorte que [this.prenom, this.nom][0] = Chantal et [this.prenom, this.nom][1] = Ayissi d'où on aura de nouvelle valeur this.prenom = Chantal et this.nom = Ayissi
//     }
//     sePresenter() { //Cette méthode se mettra automatiquement dans le prototype du constructeur(Utilisateur) d'où les autres construteur pourront heriter de cette methode
//         console.log("Bonjour je m'appelle " + this.prenom + " " + this.nom + " et vous pouvez me joindre à cette adresse: " + this.email);
//     }
// }
// var xavier = new Utilisateur("De Maison", "Francois xavier", "francoisXavier@gmail.com"); //Ici xavier.nomComplet = francois xavier de maison
// xavier.sePresenter();
// console.log(xavier.nomComplet); //affiche francois xavier de maison
// // Si l'on souhaite modifier le valeur de xavier.complet, on redefini d'abord sa valeur
// xavier.nomComplet = "Chantal Ayissi";
// console.log(xavier.nomComplet);// Affiche Chantal Ayissi