function getbookdetail(){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            const bookdata = {id : 12 , title : `JavaScript ` , authorID : 220145}
            if(bookdata.id<0){
                console.log("Invalid Book Id");
                reject("Invalid Book Id");
            }
            resolve(bookdata);
        },1500)
        
    })
}

function getbookserieal(){
    return new Promise((resolve , reject)=>{
        setTimeout(()=>{
            const serial = {serial : 23146}
            resolve(serial)
        },3000)
    })
}
async function bookdetails(){
    try {
        const details =  await getbookdetail();
        console.log(details);
    }
    catch(error){
        console.log("Error fetching book details:", error);
    }
    try {
        const serial = await getbookdetail();
        console.log(serial);
    }
    catch(error){
        console.log("Error fetching book serial:", error);
    }
}
bookdetails();