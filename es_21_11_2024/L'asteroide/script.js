let x_meteora;
let y_meteora;
let tentativi;

function genera(){

    let widht = document.getElementById(`n_asteroidi`).value;
    document.getElementById(`risposta`).innerHTML =``;
    let table;

    if( widht <= 5 ){
        tentativi = 3;
    } else if ( widht <= 10 ) {
        tentativi = 6;
    } else{
        tentativi = 10;
    }

    document.getElementById(`asteroidi`).innerHTML = ``;
    x_meteora = (Math.floor(Math.random()*widht));
    y_meteora = (Math.floor(Math.random()*widht));

    if (isNaN(widht) || widht < 0 || widht > 50){
        alert("Devi inserire un valore realistico di righe e colonne")
        document.getElementById(`n_asteroidi`).value = ``;
        return;
    } else {

        table = document.createElement(`table`);

        for (let y = 1 ; y <= widht; y++){

            let new_row = document.createElement(`tr`);

            for (let x = 1; x <= widht; x++){
                let new_cell = document.createElement(`td`);
                let new_button = document.createElement(`button`);
                new_button.setAttribute(`onclick`, `controllo (${x},${(widht-y)+1})`);
                new_button.setAttribute(`id`, `${x}-${(widht-y)+1}`);
                new_button.setAttribute(`class`, `asteroidi`);
                new_button.innerHTML = `?`;

                new_cell.appendChild(new_button);
                new_row.appendChild(new_cell);
            }

            table.appendChild(new_row);
        }

        document.getElementById(`asteroidi`).appendChild(table);
    }
 }

 function controllo (x,y){

    let x_indizio;
    let y_indizio;

    if (tentativi>0){
    if ( x == x_meteora && y == y_meteora ){

        document.getElementById(`risposta`).innerHTML = `Hai trovato il metrorite; hai salvato la terra!!`;
        document.getElementById(`${x}-${y}`).innerHTML = `☄️`;

    } else {

        if (x > x_meteora){
            x_indizio = `ovest`;
        } else if ( x < x_meteora){
            x_indizio = `est`;
        } else {
            x_indizio = ``;
        }
    
        if (y > y_meteora){
            y_indizio = `sud`;
        } else if ( y < y_meteora){
            y_indizio = `nord`;
        } else{
            y_indizio = ``;
        }
        document.getElementById(`${x}-${y}`).innerHTML = `x`;
        document.getElementById(`risposta`).innerHTML = `Il meteorte sta a ${y_indizio}-${x_indizio}`;

    }

    tentativi-=1;
} else {

    document.getElementById(`risposta`).innerHTML =`hai finito i tentaivi, purtroppo la terra verrà distrutta`
    return;
}


 }