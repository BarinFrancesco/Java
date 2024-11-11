function sasso_carta_forbice(){

document.getElementById("risposta").innerHTML = `<p>Risultato:</p>`
let player_1 = document.getElementById("risultato");
let player_2 = 0;
let risultato = "";

player_2 = Math.floor((Math.random(1-3) * 3)+1);

switch (player_2){
    case 1 :
        player_2 = "sasso";
        break;

    case 2 :
        player_2 = "carta";
        break;

    default :
        player_2 = "forbice";
        break;
}

switch (player_1.value){

    case "sasso":

        if (player_2=="sasso"){
            risultato = "Avete pareggiato, ritenta per provare a vincere";
        } else if (player_2=="carta"){
            risultato = "Che sfortuna, hai perso, ritenta per provare a vincere";
        } else{
            risultato = "COMPLIMENTI HAI VINTO!!, ritenta per provare a vincere ancora";
        }
    break;

    case "carta" :

        if (player_2=="sasso"){
            risultato = "COMPLIMENTI HAI VINTO!!, ritenta per provare a vincere ancora";
        } else if (player_2=="carta"){
            risultato = "Avete pareggiato, ritenta per provare a vincere";
        } else{
            risultato = "Che sfortuna, hai perso, ritenta per provare a vincere";
        }
    break;

    default:

    if (player_2=="sasso"){
        risultato = "Che sfortuna, hai perso, ritenta per provare a vincere";
    } else if (player_2=="carta"){
        risultato = "COMPLIMENTI HAI VINTO!!, ritenta per provare a vincere ancora";
    } else{
        risultato = "Avete pareggiato, ritenta per provare a vincere";
    }

}

document.getElementById("risposta").innerHTML += `<p> ${risultato}</p>`;


}