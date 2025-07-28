//factorials 
// 5!= 5*4*3*2*1=120
//6!=6*5*4*3*2*1= 720

function factorial(number){
    
    let result=1;
    for (let i=1; i<=number; i++){
        result= result*i;
    }
    console.log(`Factorial of ${number} is: ${result}`);

}
factorial(5);