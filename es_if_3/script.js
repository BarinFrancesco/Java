function es(n){

    if (n=`galleria`){

        document.getElementById("form").innerHTML = `
        <select id="cascata">
        <option name="img" value="mare" id="mare">Mare</option>
        <option name="img" value="montagna">Montagna</option>
        <option name="img" value="città">Città</option>
        </select>
       
        <br>
        <label for="nero">Bianco e nero</label>
        <input type="radio" name="bianconero" value="nero" id="nero">
        <label for="colori">A colori</label>
        <input type="radio" name="bianconero" value="colori" id="colori">

        <button onclick="es_immagini()">guarda</button>
    `
    } else{

    }

}

function es_immagini(){
    let tipo = document.querySelector("input[name=bianconero]:checked").value;
    let img = document.getElementById("cascata").value;
    

    alert(tipo)
    alert(img)
    
    }

