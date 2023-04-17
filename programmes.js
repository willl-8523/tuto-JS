// console.log("Hello");

// for(i = 0; i < 3; i++) {
//     console.log(i);
// }

// console.log("Good Bye");

// let nom = "Sabatier";
// let prenom = "Patrice";

// console.log("Bonjour Mr " +prenom+ " " +nom+ " !");

// let ageUn = 30, ageDeux = 45, result;
// result = (ageUn + ageDeux) * 2;
// result *=5;
// result /=2;
// result++;
// result--;

// console.log(result);

// ************************** BOITE DE DIALOGUE ****************************
// alert("Bonjour le monde"); // affiche les informations
// confirm("Souhaitez vous confirmer les informations saisies ?");
// if(confirm("Souhaitez-vous confirmer ces informations ?")) { // si l'utilisateur confirme les infos
//     alert("Ok");
// }
// else{
//     alert("Annulation");
// }

// ************************ DEMANDER UN RENSEIGNEMENT ********************************

// let nom = prompt("Entrez votre nom et votre nom: ");
// const age = prompt("Entrez votre age");
// alert("Bonjour votre nom est " +nom+ " et vous avez " +age+ " ans");

// ********************** CONVERTISSONS LES DONNEES **************************

// function demanderAge() {
//     let age = prompt("Quelle est votre age ? "); // les information que l'utilisateur rentre dans le prompt sont sous forme de chaine de caractere exp: si l'on rentre 30 nous aurons "30"
//     alert("Vous avez " +age+ " ans");
// }
// demanderAge();

// function prevoirAge() {
//     let prevoirMonAge = prompt("Quelle est votre age ?"); // si l'utilisateur entre 30 => "30"
//     // prevoirMonAge = parseInt(prevoirMonAge); // convertit prevoirMonAge en entier inferieur
//     // prevoirMonAge = parseFloat(prevoirMonAge); // convertit prevoirMonAge en nombre decimal
//     prevoirMonAge = Number(prevoirMonAge); // convertit prevoirMonAge en nombre entier ou decimal
//     // alert("bientot vous aurez " + (prevoirMonAge + 1) + " ans"); // d'où on a "30" + 1 => 301
//     alert("bientot vous avez " + (prevoirMonAge + 1) + " ans"); // d'où on a "30" + 1 => 301
// }
// prevoirAge();

//
var myName = `nico`;
// var myStr = 'FirstLine\n\t\\SecondLine\nThirdLine';
var myStr = 'C\'est la première phrase.' + ' C\'est la deuxieme phrase.';

console.log(myName+ " \\ j'ai 10 ans");
console.log(myStr);