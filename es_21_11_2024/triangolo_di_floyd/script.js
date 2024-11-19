function triangolo(){
    let righe = document.getElementById(`righe`).value;
    let num = 1;  
    let table = document.createElement(`table`);

    if(righe>0){

        document.getElementById(`triangolo`).innerHTML = ``;
        for (let i = 1; i <= righe; i++){
        
            let new_row = document.createElement(`tr`);

            for (let y = 1; y <= i; y++){
    
                let new_cell = document.createElement(`td`);
                let value= document.createTextNode(`${num}`);

                new_cell.appendChild(value);
                new_row.appendChild(new_cell);
                num += 1;
            }
    
            table.appendChild(new_row);
        }    
    
    } else{
        alert("Il valore deve essere positivo");
        document.getElementById(`triangolo`).value = ``;
        return;
    }

    document.getElementById(`triangolo`).appendChild(table);
}