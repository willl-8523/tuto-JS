// let dateActuelle = Date(); // Donne la date a ce jour au format anglosaxone (UTC Londres)
// console.log(dateActuelle);

// let dateActuelleEnSeconde = Date.now();
// console.log(dateActuelleEnSeconde + " s"); // Donne le nbre de seconde qu'il y'a depuis le 1er janvier 1970 jusqu'a la date actuelle

// let dateActuelleEnMs = Date.parse("01 jan 1970 00:00:00 GMT");
// console.log(dateActuelleEnMs + " Ms"); // Donne le nbre de Mseconde qu'il y'a depuis le 1er janvier 1970 jusqu'a la date choisit

// // ******** Utilisation de l'objet Date ********
// let datePrecise = new Date(2021, 7, 11, 9, 39); //Format valeur datePrecise = new Date(annee, mois, jour, heure, minute ...)
// console.log(datePrecise + " date precise");
// //=> les valeurs obligatoire et facultative
// //   - annee (obligatoire)
// //   - mois (obligatoire) qui commence par 0 (janvier correspond à 0)

// //   - jour (facultatif) qui commence par 1 // jour 1,2,3 ... et non jour lundi, mardi ...
// //   - heure (facultatif) qui commence par 0 (minuit => 0)
// //   - minute (facultatif) qui commence par 0
// //   - secondes (facultatif) qui commence par 0
// //   - millisecondes (facultatif) qui commence par 0

// let birthday = new Date("Dec 18 1992 22:15:30");
// let day1 = birthday.getDay(); // Donne le numero du jour correspondant a la date (de 0 (dimanche) à 6 (samedi) )
// console.log(day1);

// ************ transformer une date au format locale *****
// let dateActuelle = new Date();
// console.log(dateActuelle); // Affiche Mon Aug 30 2021 12:40:16 GMT+0200 (date et heure francaise)

//format de date locale
//  - toLocaleDateString = donne le jour, mois, année (toLocaleString(en-EN) donne la date complete localiser en angleterre)
//  - toLocaleTimeString = donne l'heure
//  - toLocaleString = jour, moi, annee, heure
// NB: NOUS POUVONS CHOIRSIR LE FORMAT QUE L'ON SOUHAITE

// let dateLocaleTimeString = dateActuelle.toLocaleTimeString("en-EN", {
//   // format anglais (MM/AAA/JJ)
//   weekday: "long", // jour de la semaine => short (3 premieres lettres), narrow (premiere lettre), long (toutes les lettres)
//   month: "short", // short (3 premieres lettres), narrow (premiere lettre), long (toutes les lettres)
//   year: "numeric", // numeric (xxxx), 2-digit (xx)
//   hour: "numeric", // numeric (xxxx), 2-digit (xx)
// });
// console.log(dateLocaleTimeString + " TimeString");

// let dateLocaleDateString = dateActuelle.toLocaleString("fr-FR", {
//   // format anglais (JJ/MM/AAA)
//   month: "short",
//   year: "numeric",
//   hour: "numeric",
//   day: "2-digit", // numeric (xxxx), 2-digit (xx)
// });
// console.log(dateLocaleDateString + " DateString");

// Donner la langue du navigateur de notre utilisateur
//console.log(navigator.language);
// let dateLocaleDateString = dateActuelle.toLocaleString(navigator.language, { // Donne le format de la date en fonction de la langue du navigateur de notre utilisateur
//   month: "short",
//   year: "numeric",
//   hour: "numeric",
//   day: "2-digit", // numeric (xxxx), 2-digit (xx)
// });
// console.log(dateLocaleDateString + " DateString");

// ************ Template String ***********
// Il permet de faire des operations de string sans concatenation (ajouter la variable dans un texte sans concatenation)

// Exp: Avant on ecrivait
// let prenom = "toto";
// let bonjour = "Bonjour " + prenom;
// console.log(bonjour);

// Maintenant on peut ecrire
// let nom = "tata";
// let hello = `Bonjour ${nom}`;
// console.log(hello);

// on peut mettre a jour notre copyright sur notre navigateur
// let dateActuelle = new Date().getFullYear(); // l'année se mettra a jour automatiquement
// let copyright = `${dateActuelle}  © zoltan`;
// console.log(copyright);

// let rep = 42;
// //console.log(`La réponse est ${rep}`); // Gabarit simple avec la concaténation par défaut
// function timeTamp() {
//   return new Date().getTime();
// }
// console.log(`Actuellement est il : ${timeTamp()}`);

// let kiwi = {
//   nom: "kiwi",
//   poids: "100g",
//   vitamines: "C, B, E",
// };
// let citron = {
//   nom: "citron",
//   poids: "300g",
//   vitamines: "C",
// };
// function htmlFruit(donnee) {
//   return `<li> Le ${donnee.nom} pèse ${donnee.poids} et contient des vitamines ${donnee.vitamines} </li>`;
// }
// // console.log(htmlFruit(citron));
// document.querySelector('.js-fruits').innerHTML += htmlFruit(kiwi) + htmlFruit(citron);
