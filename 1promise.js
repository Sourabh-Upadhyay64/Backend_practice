function orderedfood(){
    return new Promise((resolve)=>{
        setTimeout(()=>{
            console.log("Order placed for food");
            resolve();
        },2000)
    })
}

function preparefood(){
    return new Promise((resolve)=>{
        setTimeout(()=>{
            console.log("Food is being prepared");
            resolve();
        },6000)
    })
}

function servefood(){
    return new Promise((resolve)=>{
        setTimeout(()=>{
            console.log("Food is served");
            resolve();
        },3000)
    })
}

orderedfood().then(()=> preparefood()).then(()=> servefood()).then(()=>{
    console.log("Enjoy your food!");
})