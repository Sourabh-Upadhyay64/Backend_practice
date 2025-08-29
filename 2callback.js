function mydata(callback){
    setTimeout(()=>{
        const data = {name: "John", age: 30};
        callback(data);
    },3000)
}
mydata((data) => {
    console.log(data);
});
