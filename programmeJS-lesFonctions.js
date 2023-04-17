// ***************************** LES FONCTIONS *************************
// function direBonjour(prenom) {
//     alert("Bonjour " + prenom);
// }
// direBonjour("Xavier");

// function multiplication(param1, param2, param3) {
//     let resultat = (param1 + param2) * param3;
//     console.log(resultat);
// }
// multiplication(10, 6, 42.5);
// function direBonjour(nom, prenom, age) {
//     alert("Bonjour Mr " +nom+ " " +prenom+ " et vous avez " +age+ " ans");
// }
// direBonjour("Mbami", "Modeste", 56);

// 1er cas: fonction sans return
// function addition(nbre1, nbre2) {
//     let resultat = nbre1 + nbre2;
//     console.log(resultat);
//     // return resultat;
// }
// (addition(10, 15));

//************************* 2e cas: fonction avec return ***************
// let nombre1, nombre2, resultat
// function addition(nbre1, nbre2) {
//     nombre1 = parseInt(prompt("Entrer votre 1er nombre"));
//     nombre2 = parseInt(prompt("Entrer votre 2nd nombre"));
//    // resultat = nbre1 + nbre2;
//     resultat = nombre1 + nombre2;
//     //return resultat;
// }
// addition(nombre1, nombre2);
// //addition();
// alert("La somme donne: " +resultat);

// function division(reel1, reel2) {
//     let resultatDivision = reel1 / reel2;
//     return resultatDivision;
// }
// let resultDivision = division(nombre1, nombre2);
// // console.log("resultat division " +division(nombre1, nombre2));
// // console.log(resultDivision);
// let result = addition(nombre1, nombre2); //grace au return nous pouvons ainsi mettre la fonction dans une variable et afficher la valeur de return
// // console.log(result);
// // console.log(addition(nombre1, nombre2));
// let calcul = result + resultDivision;
// console.log(calcul);

// let firstName;
// let lastName;
// let agee;
// function infosUtilisateur() {
//     let firstName = prompt("Entrez votre nom: ");
//     let lastName = prompt("Entrez votre prenom: ");
//     let agee = prompt("Saissisez votre age ");
//     alert("Voici vos informations: " +firstName+ " " +lastName+ " " + agee + " ans");    
// }
// infosUtilisateur();

// ****** FONCTION PAR DEFAUT ***************

// //let preparation = 10, cuisson = 15;
// function cuisiner(nombreDeGateaux, minutesDePreparation = 10, minutesDeCuisson = 15) { // minuteisDePreparation = 10 par defaut car il va pas changer
//     let resultat = nombreDeGateaux * (minutesDePreparation + minutesDeCuisson);
//     return resultat;
// }
// //console.log(cuisiner(5));
// let preparationFrasier = cuisiner(1, 15);
// let preparationChocolat = cuisiner(4);
// console.log("la cuisine du chocolat dure environ " +preparationChocolat+ " min");
// console.log("la cuisine du fraisier dure environ " +preparationFrasier+ " min");

// **************************** FONCTION ANONYME **************************

// let fonctionAnonyme = function() {
//     console.log("Voici une fonction anonyme");
// }
// fonctionAnonyme();

// (function() { console.log("Voici l'auto-execution d'une fonction anonyme") })();


// ************************************* FONCTION RECURSIVE ************************************

// EXP: afficher le timer sur la console avec une fonction recursive

// function timer(secondes) {

//     if (secondes > 0) {       
//         console.log(secondes);
//         timer(secondes - 1);
//     }
//     else{
//         console.log(secondes);
//     }
// }
// timer(8);

// Methode avec le FOR 
// function timer(secondes) {
//     for (let i = 8; i >= 0; i--) {

//         if (secondes > 0) {
//             console.log(secondes);
//             secondes = secondes - 1;
//         }
//         else{
//             console.log(secondes);
//         }
//     }
// }
// timer(8);

// ******************************** FONCTION DANS UNE AUTRE FONCTION ***********************************

// function turnIntoAMartian(myName) {
//     function recallName(myName) {
//         var martianName = myName + " Martien";
//         // let martianName = myName + " Martien";
//         return martianName; 
//     }
//     var martianName = recallName(myName);
//     // console.log(martianName);
// }

// function direBonjour(prenom) {
//     var resultat = "Bonjour " + prenom;
//     let fonctionMaClosure = function() {
//         console.log(resultat);
//     }
//    return fonctionMaClosure;
// }
// let bonjour = direBonjour("bob");
// let x = direBonjour();
// bonjour();


// function externe() {
//     let b = 10;
//     let c = 100;
//     function interne() {
//         let a = 20;
//         console.log("a= " + a + " , b= " +b);
//         a++;
//         b++; 
//     }
//     return interne;
// }  
// // let xExterne = externe();
// // let yExterne = externe();
// //  xExterne();
// // yExterne();
// let x = externe();
// let y = externe();
// x();
// x();
// x();
// x();
// x();

// y();
// y();
// // console.log(x);
// // console.log(typeof(x));
// //console.log(typeof(xExterne));

// function timer() {
//     let secondes = 0;
//     // function maClosure() {
//     //     return secondes++;
//     // }
//     let maClosure = () => {
//         //console.log("secondes " + secondes);
//         return ++secondes;
//     }
//     return maClosure;
// }

// let timerSeconde = timer();
// // timerSeconde();
// // timerSeconde();
// // timerSeconde();
// // timerSeconde();
// console.log(timerSeconde());



