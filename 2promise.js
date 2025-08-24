function mydata(){
    return new Promise((resolve) => {
        setTimeout(()=>{
            const data = {name: "John", age: 30};
            console.log(data);
            resolve(data   );
        },2000)
    });
}   
mydata().then(() => {
    console.log("Here is your data");
})