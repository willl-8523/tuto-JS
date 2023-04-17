// Pour géolocaliser un utilisateur grâce à son navigateur on utilise l'objet geolocation

    // Vérifier que la geolocation soit disponible
// if ("geolocation" in navigator) { // Si la géolocalisation est dans (avec la condition 'in') 
                                    // le navigateur (car tout les navigateurs n'ont âs de geolocalisation)
//   // Obtenir la position avec getCurrentPosition() => Donne la position de l'utilisateur une seule fois (exp: localiser les restos pres de ma position)
    // ou watchPosition() => Donne la position de l'utilisateur ensuite l'actualise selon un delai determiné (exp: me localiser en temps réel commme le GPS)

//   // les parametre dees fonctions getCurrentPosition() et watchPosition() sont: (success, error (optionnel), options (optionnel))
        // => success si le navigateur localise la position de l'utilisateur
        // => error (parametre facultatif) si le navigateur n'a pas localiser la position
        // => option (parametre facultatif) sera un objet litteral et donnera la precision avec laquelle on veut localiser la position (personnaliser la localisation notre position)

//   navigator.geolocation.getCurrentPosition(  //utilisation du getCurrentPosition()
//     (position) => { // 1er parametre: le parametre position nous permettra de stocker les coordonnées de l'utilisateur
//       console.log(position.coords.latitude); // Afficher les coordonnée de la latitude de notre navigateur
//       console.log(position.coords.longitude);
//     },
//     error, // 2e parametre
//     options // 3e parametre
//   );

//   function error() {
//     alert("Aucune position disponible.");
//   }

//   var options = { //creation de l'objet litteral ( prendra 3 options toutes facultatives)
//     enableHighAccuracy: true, // option1(false par defaut) => "true" donne les coordonnée de facon precise
//     maximumAge: 30000, // option2 (par defaut c'est 0ms) => pour autoriser toute les positions qui ont été enregistrer
                         //  il y'a moins de 30000ms à être reutiliser
//     timeout: 27000 (infinity par defaut), // duree max en millisecondes pour trouver la position actuelle, 
                                            // Si la durée est dépasée il executera la fonction error
//   };

//   /*
//   let watch = navigator.geolocation.watchPosition() ... // Pour supprimer une localisation ne devons utiliser 
                                                        // la fonction navigator.geolocation.watchPosition() et la mettre dans 
                                                        // une variable
//   navigator.geolocation.clearWatch(watch) // On supprime la geolocalisation
//   */
// } else {
//   alert("Le navigateur ne supporte pas la geolocalisation");
// }

// ******************* Application de la geolocalisation (getCurrentPosition()) ***********
// if ("geolocation" in navigator) {

//     let option = {
//         hautePrecision : true,
//         tempAutorisationPosition : 30000,
//         tempsPourLocalisation : 10000
//     }
//      navigator.geolocation.getCurrentPosition((position) => {
//         console.log("Lat: " + position.coords.latitude);
//         console.log("Long: " + position.coords.longitude);
//      }, error, option);

//     function error() {
//         alert("Aucune position disponible.");
//     }
// }
// else {
//     alert("Le navigateur ne supporte pas la localisation");
// }
