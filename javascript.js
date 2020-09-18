
/* éléments masqués en début de partie */

let medal = document.getElementById("medal");
medal.style.display="none";
let player_victory = document.getElementById("player_victory");
player_victory.style.display="none";
let robot_victory = document.getElementById("robot_victory");
robot_victory.style.display="none";
let rejouer = document.getElementById("rejouer");
rejouer.style.display="none";



/* définition des variables globales */
/* document.querySelectorAll("div.selection_shifumi button") permet de sélection les boutons qui sont dans un div d'un nom de classe "selection shifumi"  */

const bouton_rejouer = document.querySelector("#rejouer button");
console.log(rejouer)
const buttons = document.querySelectorAll("div.selection_shifumi button");
let scoreJoueur = 0;
let scoreRobot = 0;
let nombre_manche=1;

/* rafraichissement de la page au clic du bouton rejouer */

bouton_rejouer.addEventListener("click", function(){
    console.log("ok");
    window.location.reload();
})

/* boucle qui lance des fonctions à chaque click sur un item du tableau buttons (créé plus haut) */

for (let i = 0; i < buttons.length; i++) {
buttons[i].addEventListener("click", function(){
    let joueur = buttons[i].className;
    let robot = buttons[Math.floor(Math.random()*(buttons.length))].className; 
    let annonce_winner = "";

    /* enregistrement du click en tant que "pierre, feuille ou ciseaux" depuis le nom de la classe du boutton */
   
    document.getElementsByClassName("shifumi_joueur").item(0).setAttribute("src", "Images/"+joueur+".png")
    document.getElementsByClassName("shifumi_robot").item(0).setAttribute("src", "Images/"+robot+".png")
  

    /* définition du gagnant de la manche */

    if(joueur === "feuille" && robot === "pierre" || joueur === "pierre" && robot === "ciseaux" || joueur === "ciseaux" && robot === "feuille" ) {
        annonce_winner = "Joueur gagne";
        scoreJoueur = scoreJoueur + 1;
    } else if (joueur === robot) {
        annonce_winner = "Egalité";
    } else {
        annonce_winner = "Robot gagne";
        scoreRobot = scoreRobot + 1;
    }

    /* vérification si fin des 3 manches gagnantes et annonce grand vainqueur */
    /* document.getElementsByClassName("pierre").item(0).disabled = "true"; 
     permet désactive le boutton. Quand on fait une sélection par nom de classe, comme une classe peut être utilisé plusieurs fois, un "tableau" est créé, il faut alors avec .item(0) sélectionner le premier (0) élément de cette classe */

    if (scoreJoueur == 3) {
        player_victory.style.display = "block";
        medal.style.display = "block";
        rejouer.style.display = "block";
        document.querySelector(".grand_gagnant").innerHTML = `Joueur gagne</br>Bien joué !`;
        document.getElementsByClassName("pierre").item(0).disabled = "true"; 
        document.getElementsByClassName("feuille").item(0).disabled = "true";
        document.getElementsByClassName("ciseaux").item(0).disabled = "true";
    } else if (scoreRobot == 3) {
        robot_victory.style.display = "block";
        medal.style.display = "block";
        rejouer.style.display = "block";
        document.querySelector(".grand_gagnant").innerHTML = `Robot gagne</br>Dommage !`;
        document.getElementsByClassName("pierre").item(0).disabled = "true";
        document.getElementsByClassName("feuille").item(0).disabled = "true";
        document.getElementsByClassName("ciseaux").item(0).disabled = "true";
    } 


    /* Affichage du texte des class "annonce_winner (html) et score (html) via javascript" */

    document.querySelector(".annonce_winner").innerHTML = `${annonce_winner}`;
    document.querySelector(".score").innerHTML = `Score Joueur : ${scoreJoueur} - Score Robot : ${scoreRobot}`;
})
    
}


/* Reste à faire : 
- Ajouter un temportisation + animation lors de la sélection et lancement du shifumi par manche  
- Gérer nom du joueur et icône
*/




