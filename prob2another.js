//fibonacci
//0 1 1 2 3 5 8 13 21 34

function fibonacci(number){
    
    let series=[0,1];


    for(let i=2; i<=number; i++){
        series[i]= series[i-1] + series [i-2];
        series.push(series[i]);
        console.log(series);
        

    }
        console.log(series);

}
fibonacci(15);