

let x=0;
let y=0;
let x_tesoro;
let y_tesoro;

function tabella(){

    let righe = parseInt(document.getElementById("righe").value);
    let colonne = parseInt(document.getElementById("colonne").value);
    let new_table;
    let new_row;
    let new_column;
    let new_button;
    y_tesoro = Math.floor((Math.random()*righe)+1);
    x_tesoro = Math.floor((Math.random()*colonne)+1);

    document.getElementById("table").innerHTML=``;
    new_table = document.createElement(`table`);
    for (y=1; y<righe+1; y++){

        new_row = document.createElement(`tr`);

        for (x=1; x<colonne+1; x++){

            new_column = document.createElement(`td`);
            new_button = document.createElement("button");
            new_button.setAttribute(`onclick`, `coordinate(${x}, ${ (righe+1)-y})`)
            new_button.setAttribute(`class`, `but_tab`)
            new_column.appendChild(new_button);
            new_row.appendChild(new_column);
        }

        new_table.appendChild(new_row);
    }
    
    document.getElementById("table").appendChild(new_table);

    
}

function coordinate(x,y){

    let risposta;

    if(x > x_tesoro){
        alert("il tesoro stà più a sinistra");
    } else if(x<x_tesoro){
        alert("il tesoro stà più a destra");
    } else{
        alert("sei sulla stessa colonna del tesoro")
    }

    if(y > y_tesoro){
        alert("il tesoro stà più in basso");
    } else if(x<x_tesoro){
        alert("il tesoro stà più in alto");
    } else{
        alert("sei sulla stessa riga del tesoro")
    }

    if ((y == y_tesoro) && (x == x_tesoro)){
        risposta = "COMPLIMENTI HAI TROVATO IL TESORO"
       } else {
        risposta = "dai che manca poco a trovare il tesoro"
    }

    document.getElementById("risposta").innerText=`${risposta}`

}