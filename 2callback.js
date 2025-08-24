function mydata(callback){
    setTimeout(()=>{
        const data = {name: "John", age: 30};
        callback(data);
    },2000)
}
mydata((data) => {
    console.log(data);
});