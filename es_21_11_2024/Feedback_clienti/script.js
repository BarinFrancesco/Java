function analyzeFeedback(){

    let feedback = document.getElementById(`feedback`).value;
    let length;
    let vowels_cont = 0;
    let consonant_count = 0;
    let count_a = 0;
    let count_e = 0;
    let count_i = 0;
    let count_o = 0;
    let count_u = 0;
    let word_count = 1;

    if(feedback!=``){
        for (let i = 0; i < feedback.length; i++) {

            let caracter = feedback[i];
            let code = caracter.charCodeAt(0);

            const vowels = /[aAeEiIoOuU]/gi;

            if ((code >= 65 && code <= 90) || (code >= 97 && code <= 122)){

                if(caracter.match(vowels)){

                    switch (caracter){

                        case "a":
                            count_a+=1;
                        break;

                        case "A":
                            count_a+=1;
                        break;


                        case "e":
                            count_e+=1;
                        break;

                        case "E":
                            count_e+=1;
                        break;


                        case "i":
                            count_i+=1;
                        break;

                        case "I":
                            count_i+=1;
                        break;


                        case "o":
                            count_o+=1;
                        break;

                        case "O":
                            count_o+=1;
                        break;


                        case "u":
                            count_u+=1;
                        break;

                        default:
                            count_u+=1;
                        break;
                    }

                    vowels_cont+=1;
                } else {
                    consonant_count+=1;
                }

                length+=1;
            } else if (code == 32){
                word_count += 1; 
            }
            
        };

        let biggest_vowel = Math.max(count_a, count_e, count_i, count_o, count_u);
        let risposta = `Vowels { A:${count_a}, E:${count_e}, I:${count_i}, O:${count_o}, U:${count_u}} <br> Consonants: ${consonant_count} <br> MostFrequentVowel: ${biggest_vowel} <br> Words: ${word_count}`;

        if (length <= 10 ) {
            risposta += `<br> FeedbackCategory: Scarso`
        } else if(length < 50){
            risposta += `<br> FeedbackCategory: Moderato`
        } else{
            risposta += `<br> FeedbackCategory: Dettagliato`
        }

        if (feedback.includes(`fantastico`) || feedback.includes(`eccellente`) || feedback.includes(`ottimo`)){
            risposta += `<br> SatisfactionIndex: Positivo`
        } else if (feedback.includes(`lento`) || feedback.includes(`pessimo`) || feedback.includes(`difettoso`)){
            risposta += `<br> SatisfactionIndex: Negativo`
        } else {
            risposta += `<br> SatisfactionIndex: Neutro`
        }

        document.getElementById(`risposta`).innerHTML = `${risposta}`;
    } else {
        alert(`La tua recensione non esiste`);
    }
    /*let fantastico = feedback.match(/fantastico/i);
    let ottimo = feedback.match(/ottimo/i);
    let eccellente = feedback.match(/eccellente/i);
    let lento = feedback.match(/lento/i);
    let pessimo = feedback.match(/pessimo/i);
    let difettoso = feedback.match(/difettoso/i);
    */
}