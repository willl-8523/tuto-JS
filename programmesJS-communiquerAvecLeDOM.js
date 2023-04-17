// ******************************* ACCEDER AUX ELTS DE LA PAGE HTML GRACE A JS ****************************

// let header = document.getElementsByTagName("header"); // Acceder a l'elt(balise) header de html
// console.log(header);

// let paragraphe = window.document.getElementsByTagName('p'); // Acceder a l'elt(balise) p de html
// console.log(paragraphe);

// let logo = document.getElementById("logo"); // Acceder a l'Id d'une page html
// console.log(logo);

// let container = document.getElementsByClassName('container'); // Acceder à la classe d'une page html
// console.log(container);

// let accesEltIdClasse = document.querySelector('#logo'); // Acceder à l'elt, la classe ou l'Id d'une page html
// console.log(accesEltIdClasse);

// let selectAll = document.querySelectorAll("p"); // selectionne tout les p presents dans html
// console.log(selectAll);

// let = titreH1 = document.querySelector('h1');
// console.log(titreH1);

// *************************** MODIFIER UN ELT DE HTML GRACE A JS *****************************

// let titreH1 = document.querySelector("h1");
// titreH1.textContent = "Bienvenue dans mon blog !"; // modifie juste le texte de l'elt
// titreH1.innerHTML = "<div style = 'font-weight : normal'> Bienvenue dans mon Blog </div>" // modifie le style et le contenu de l'elt
// console.log(titreH1);
// let titreH1 = document.getElementsByTagName("h1")[0]; // l'elt selectionner eteant sous forme de tableau, on selectionne le 1er elt
// titreH1.textContent = "Bienvenue dans mon blog !"; // modifie juste le texte de l'elt
// titreH1.innerHTML = "<div style = 'font-weight : normal'> Bienvenue dans mon Blog </div>" // modifie le style et le contenu de l'elt
// console.log(titreH1);

// ***************************** AJOUTER DES ELTS AUX DOM AVEC JS  **************************

// 1. Créer un elt
        // => Ecrire juste du texte dans le DOM (3 méthodes)
            // document.write("Bonjour le monde !!!"); // methode1 : écrit juste des chaines de caractere à la suite (pas besion de creer une variable let)

            // document.body.append("Hello World"); // methode2: Ajoute notre texte à la fin du body
            // document.body.before('Hello world !!!'); // methode2: Ajoute notre texte au debut du body

            // let titreH1 = document.querySelector("h1"); // choisir l'elt ou l'on souhaite ajouter du texte
            // titreH1.append("Hello Wood"); // ajoute le texte apres l'etl choisi (before ajoute le texte avant l'elt choisi)

        // => Créer un elt html (un objet en JS)

                // let image = document.createElement('img'); // creer un elt <img>
                // image.src = "./media/pillow.png"; // chemin de l'image
                // image.setAttribute("style", "width : 50px; height : 50px; display : block"); // modifier le style de l'image style 

                // // let endroit = document.querySelector("h1"); // selectionner l'elt où ajouter l'image
                // // endroit.append(image); // ajouter l'image après l'elt selectionné
                // // endroit.appendChild(image); // autre méthode pour ajouter l'image après l'elt selectionné (dans cette méthode on ne peut pas ajouter du texte brut)
                // document.querySelector('.container').append(image); //autre méthode pour ajouter une image 
                
// ************************ SUPPRIMER UN ELT ************************************

// 2 methodes pour supprimer un elt: 
        /* => let titreH1 = document.querySelector('h1');
        titreH1.remove(); */
        
        // => document.querySelector('h1').remove();

// ************************** METTRE DU STYLE A NOS ELT EN JS (3 methodes) *****************************

// => methode 1 (decomposition): 
// let enTete = document.querySelector('header');
// enTete.style.backgroundColor = "#FFDB69";

// => methode 2 (directe):
// document.querySelector('h1').style.color = "#FFDB69";

// => methode 3 (en ajoutant une classe independante dans le css) pour des style plus complexe:

// document.querySelector('header').className = "ma_class"; // ma_class étant la classe independante

