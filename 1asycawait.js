function orderfood(){
    return new Promise ((resolve)=>{
        setTimeout(()=>{
            console.log("Order placed succesfully");
            resolve();
        },2000)
    })
}

function preparefood(){
    return new Promise ((resolve)=>{
        setTimeout(()=>{
            console.log("Food is being prepared")
            resolve();
        },5000)
    })
}

function servefood(){
    return new Promise ((resolve)=>{
        setTimeout(()=>{
            console.log("Food is served")
            resolve();
        },8000)
    })
}

async function foodorder(){
    await orderfood();
    await preparefood();
    await servefood();
    console.log("Enjoy your food!");
}
foodorder();