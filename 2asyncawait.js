function mydata(){
    return new Promise((resolve )=>{
        setTimeout(()=>{
            const data = {name :   `John` , age : 30};
            console.log(data);
            resolve(data)
        } , 2000)
    })
}
async function fetchdata(){
    await mydata();
    console.log("Here is your data");
}
fetchdata();