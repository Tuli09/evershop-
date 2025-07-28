function checkOddEven(number){
    if(number%2 ==0 && number>0){
        console.log(`${number} is an even number`);
    }
    else if(number%2 ==1 && number){
        console.log(`${number} is an odd number`)

    }
    else{
                console.log(`${number} is not valid in this case`)

    }
}
checkOddEven(0.5);
