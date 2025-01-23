function num_primi() {
   let array_primi = [];

for ( let i=2; i<=10000; i++){

    let num = i;
    let condition = false;

    if ( num%2 != 0 || num == 2){

        for (let j = 2; j<i; j++){
            
            let control = j;

            if (num%control != 0){
                condition = true;
            } else {
                condition = false;
                break;
            }
        }

    }

    if (condition == tr){
        array_primi.pop()
    }
    console.log(array_primi);
}
}