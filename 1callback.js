function orderedfood(callback){
    setTimeout(()=>{
        console.log("Order placed for food");
        callback();

    },2000)
}

function FoodPreparing(callback){
    setTimeout(()=>{
        console.log("Food is being prepared");
        callback();
    },5000)
}

function FoodServed(callback){
    setTimeout(()=>{
        console.log("Food is served");
        callback();
    },3000)
}

orderedfood(()=>{
    FoodPreparing(()=>{
        FoodServed(()=>{
            console.log("Enjoy your food!");
        })
    })
})