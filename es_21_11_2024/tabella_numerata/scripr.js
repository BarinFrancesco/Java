function tabella(){
    let num = document.getElementById("n").value;
    let somma=0;

    if( num>0 && num<=10 ){

        document.getElementById("table").innerHTML= ``;
        let new_table = document.createElement(`table`);

        for ( let y = 1; y <= num; y++ ){
            let new_row = document.createElement(`tr`);

            for ( let x = 1; x <= num; x++){

                let new_cell = document.createElement(`td`);
                let new_content = document.createTextNode(`${x*y}`);
                new_cell.appendChild(new_content);
                new_row.appendChild(new_cell);
                somma += (x*y);
            }
            new_table.appendChild(new_row);
        }

        let child_somma = document.createTextNode(`la somma di tutti i numeri è ${somma}`)
        document.getElementById(`table`).appendChild(new_table);
        document.getElementById(`table`).appendChild(child_somma);

    } else{

        alert("Attento, i tuoi valore devono essere compresi tra 0 e 10");
        document.getElementById("n").value = ``;
        return;

    }
}