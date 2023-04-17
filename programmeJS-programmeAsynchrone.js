// // => programme asynchrone est un programme qui s'execute en meme temps (programme A et B peuvent s'executer en même temps)
// // => programme synchrone est un programme qui s'execute un à un (programme A finit de s'executer ensuite le B s'execute)

// // => les promesses nous permettent de faire des fonctions asychrones
// // => les promesses sont : soit En cours soit Honorée soit Rompue

// // const promesse = new Promise((resolve, reject) => { // resolve sera appelé lorsque la promesse sera honorée et reject lorsqu'elle 
//                                                         //sera rompue(y'a eut un problème)
// //     // Tâches asynchrones

// //     // Promesse Honorée (sans problème) : resolve()

// //     // Promesse Rompue : reject()
// // });

// function chargerScript(script) {
//     return new Promise((resolve, reject) => {
//         let element = document.createElement('script'); //on cree notre elt script dans Html
//         element.src = script; // ajoute un attribut src a notre elt script(ici script correspond au parametre de la fonction 
//                                 // chargerScript)
//         document.head.append(element); //on ajoute notre element dans le head

//         //Ensuite on a 2 possibilites

//         // Soit le programme est resolu : resolve()
//         element.onload = () => resolve('Fichier ' + script + ' a reussi à se charger'); 

//         // Soit le programme est rompu : reject()
//         element.onerror = () => reject(new Error('Operation rompue pour le fichier ' + script));
//     });
// }

// const promesse = chargerScript('test.js'); // prommesse est un objet qui a soit resolve soit error

// promesse.then(       /*affiche le contenu de promesse (c-a-d une fois que ma fonction chargerScript qui est liéee
//                          avec promesse est terminée)*/
//     function (result) {
//         console.log(result); // Affiche lorsque la page c'est charger
//     },
//     function (error) {
//       console.log(error); // affiche lorsque la page n'est pas chargée
//       document.head.lastChild.remove(); // lorsque que le fichier n'a pas pu se charger, l'elt script est quand même créer dans html
//                                         // et grâce àdocument.head.lastChild.remove() nous pouvons supprimer cet elt si la fichier
//                                         // n'a pas reussi a se charger
//     }
// ); 

// // autre façon d'afficher la promesse (cette facon affiche juste l'erreur s'il y'a une erreur au chargement de la page)
// // chargerScript('test.js')
// // .catch(console.log);
