
// Determiner si l'utilisateur est majeur en fonction de son âge
// age < 18 => vous êtes mineur 
// age entre 18 et 20 => vous êtes majeur en France
// age > 20 vous etes majeur partout dans le monde

// ************* Dialogue sur la page web ***************

// let age = prompt ("Veuillez saisir votre age");
// age = Number(age);

// if (age < 18) {
//     alert("Vous êtes un mineur");
// }
// else if (age < 21) { // car si la 1ere condition (age < 18) est fausse cela signifie que age est >= 18
//     alert("vous êtes un majeur en France");
// }
// else{
//     alert("vous êtes un majeur partout dans tout monde");
// }

// *********************** La condition switch ***********************

// let marqueDeVoiture = "Citroen";

// switch (marqueDeVoiture) {
//     case "Peugoet":
//     case "Citroen":
//     case "Renault": 
//         console.log("La marque de voiture que vous avez saisi est une marque française");
//         break;
//     case "Mercedes":
//     case "BMW":
//     case "Wolkswagen":
//         console.log("La marque de voiture que vous avez saisi est une marque allemande");
//         break;
//     default:
//         console.log("la marque de voiture saisie n'est ni francaise ni allemande");
// }

// **************************** verifier plusieurs conditions dans un if **********************

// let gareDeDepart = "valencienne";
// let gareArrive = "";
// let chauffeur = "";

// if((gareDeDepart != "" || gareArrive != "") && chauffeur != "" ){
//     console.log("Le train est pret à démarrer.");
// }
// else{
//     console.log("Le train n'est pas prêt à démarrer.");
// }

// ************************ condition NOT(!) ********************
// let x = 7;
// if(!x < 5) {  
//     console.log("x est inferieur à 5");
// }
// else {
//     console.log("x n'est pas inferieur à 5");
// }

// ********************** Condition ternaire **************************
// let x = 7;
// x > 5 ? console.log("X est superieur à 5") : console.log("X n'est pas superieur à 5."); 

// let gareDeDepart = "valencienne";
// let gareArrive = prompt("Où souhaitez-vous aller ?") || "gare Lille-Flandres"; // (|| "gare Lille-Flandres") permet de donner une valeur par défaut si l'utilisateur ne rentre pas sa destination d'arrivée"
// let chauffeur = "Mbarga";

//  if((gareDeDepart != "" || gareArrive != "") && chauffeur != "" ){
//      alert("Le train va démarrer en destination de " + gareArrive + " et votre chauffeur sera " + chauffeur + " .");
//  }
//  else{
//      alert("Le train n'est pas prêt à démarrer.");
//  }



