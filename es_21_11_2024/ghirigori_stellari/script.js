function genera(n){

    let number = parseInt(document.getElementById("number").value);
    let str = ``;
    if(number>0){
        switch (n){

            case 1: 
                
                for (let y = 1; y <= number; y++){
                    
                    for (let x = 1; x <= number; x++){

                        str += `*`
                    }

                    str += `<br>`
                }

                document.getElementById("risposta").innerHTML = `${str}`;

            break;


            case 2: 

                for (let y = 1; y <= number; y++){
                    
                    str += `*`;
                    
                    for (let x = 2; x < number; x++){

                        if ( y===1 || y===number){
                            str += `*`
                        } else {
                            str += `_`
                        }

                    }

                    str += `*<br>`
                }

                document.getElementById("risposta").innerHTML = `${str}`;

            break;


            case 3:

            let diagonal = 1;
                for (let y = 1; y <= number; y++){
                        
                    for (let x = 1; x <= diagonal ; x++){

                        str += `*`
    
                    }

                    diagonal+=1;
                    str += `<br>`
                }

                document.getElementById("risposta").innerHTML = `${str}`;
            break;


            default:

                let diagonal_2 = 1;
                for (let y = 1; y <= number; y++){
                        
                    for (let x = 1; x <= number ; x++){

                        if (x <= diagonal_2){
                            str += `*`
                        } else{
                            str += `+`
                        }
                        
                    }
                    
                    diagonal_2+=1;
                    str += `<br>`
                }

                document.getElementById("risposta").innerHTML = `${str}`;
            break;

        }

    } else{
        alert(`errore nei dati in input`);
        return;
    }
}