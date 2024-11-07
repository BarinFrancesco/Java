function form_galleria(){
//inizializzo il form dove andrò a scrivere i dati
        document.getElementById("form").innerHTML = `
        <select id="cascata">
        <option name="img" value="mare" id="mare">Mare</option>
        <option name="img" value="montagna">Montagna</option>
        <option name="img" value="città">Città</option>
        </select>
        <br>
        <br>
        <label for="nero">Bianco e nero</label>
        <input type="radio" name="bianconero" value="nero" id="nero">
        <label for="colori">A colori</label>
        <input type="radio" name="bianconero" value="colori" id="colori">
        <br>
        <br>
        <button onclick="es_immagini()">guarda</button>
        <br>

    `
    document.querySelector("body").setAttribute("style", "background-color: #B5954A;");

}

function form_ristorante(){
//inizializzo il form dove andrò a scrivere i dati
    document.getElementById("form").innerHTML = `
    <select id="stelle">
    <option name="valutazione" value="1">&#11088</option>
    <option name="valutazione" value="2">&#11088 &#11088</option>
    <option name="valutazione" value="3">&#11088 &#11088 &#11088</option>
    <option name="valutazione" value="4">&#11088 &#11088 &#11088 &#11088</option>
    <option name="valutazione" value="5">&#11088 &#11088 &#11088 &#11088 &#11088</option>
    </select>
   <p>Recensione:</p>
    <label for="positivo">Positiva</label>
    <input type="radio" name="pos_neg" value="positivo" id="positivo">
    <label for="negativo">Negativa</label>
    <input type="radio" name="pos_neg" value="negativo" id="negativo">
    <br>
    <br>
    <button onclick="es_ristorante()">lascia recensione</button>
    <br>
    <br>
    <p id="risposta"></p>
`
document.querySelector("body").setAttribute("style", "background-color: #4855B7;");
document.getElementById("output").setAttribute("src", "");
}


function es_immagini(){
//leggo in input i vari valori delle caselle di input
    let tipo = document.querySelector("input[name=bianconero]:checked").value;
    let img = document.getElementById("cascata").value;
    
    document.getElementById("output").setAttribute("style", "height: 250px; witdh: 35px");
// controllo tutti i vari casi che si possono combinare con i dati e fornisco in output l'adeguata immagine
    switch (img){

        case "mare":        
            if(tipo=="colori"){
                document.getElementById("output").setAttribute("src", "img/mare_1.jpg");
            } else{
                document.getElementById("output").setAttribute("src", "img/mare_1_grigio.jpg");
            }
            break;
        case "montagna": 
        if(tipo=="colori"){
            document.getElementById("output").setAttribute("src", "img/montagna.jpg");
        } else{
            document.getElementById("output").setAttribute("src", "img/montagna_grigio.jpg");
        }
            break;
        case "città":
            if(tipo=="colori"){
                document.getElementById("output").setAttribute("src", "img/città.jpg");
            } else{
                document.getElementById("output").setAttribute("src", "img/città_grigio.jpg");
            }
            break;
        default:
            alert("errore in input")
            break;


    }
    
    }

    function es_ristorante(){
    
        let recensione = document.querySelector("input[name=pos_neg]:checked").value;
        let stelle = parseInt(document.getElementById("stelle").value);
        let risposta;

        switch(stelle){

        case 1: 

        if( recensione=="positivo"){ 
            risposta=`strano, hai lasciato 2 recensioni diverse`;
        } else{
            risposta="ci dispiace della tua cattiva esperienza";
        }
        break;

        case 2: 

        if( recensione=="positivo"){ 
            risposta=`strano, hai lasciato 2 recensioni diverse`;
        } else{
            risposta=`ci dispiace della tua cattiva esperienza`;
        }
        break;

        case 3: 

        if( recensione=="positivo"){ 
            risposta=`grazie della tua bella recensione`;
        } else{
            risposta=`ci dispiace della tua cattiva esperienza`;
        }
        break;

        case 4: 

        if( recensione=="positivo"){ 
            risposta=`Siamo contenti che tu abbia avuto una buona esperienza da noi`;
        } else{
            risposta=`Strano, hai lasciato 2 recensioni diverse`;
        }
        break;

        default:
        if( recensione=="positivo"){ 
               risposta=`Grazie dell'ottima recensione, passa a trovarci presto`;
            } else{
              risposta=`Strano, hai lasciato 2 recensioni diverse`;
            }
        break;
        }

        document.getElementById("risposta").innerHTML = `${risposta}`
    }
