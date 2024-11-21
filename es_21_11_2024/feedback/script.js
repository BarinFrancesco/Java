function analyzeFeedback(){

    let feedback = document.getElementById(`feedback`).value;
    let lunghezza;

    let fantastico = feedback.match(/fantastico/i);
    let ottimo = feedback.match(/ottimo/i);
    let eccellente = feedback.match(/eccellente/i);
    let lento = feedback.match(/lento/i);
    let pessimo = feedback.match(/pessimo/i);
    let difettoso = feedback.match(/difettoso/i);

    console.log(difettoso)
}