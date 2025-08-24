function outer(){
    let count = 0;
    function inner(){
        count++;
        console.log(`Count is ${count}`)
    }
    return inner;
}
const counter = outer();
for(let i =0; i<7; i++){
    counter();
    
}