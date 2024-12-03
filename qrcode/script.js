function genera(){

    let numero = document.getElementById(`num`).value;

    if(numero.length!=10){
        alert("il tuo numero di tel non esiete");ùù
        document.getElementById(`num`).value=``;
        return;
    }

    document.getElementById("stampa").innerHTML = new QRCode(document.getElementById("codice"),
    {
        text: `tel:${numero}`,
        width: 200,
        height: 200,
        colorDark: "#000000",
        id: "img"
        });
        document.querySelector(`img`).style.display = `block`

}
