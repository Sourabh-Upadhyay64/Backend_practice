function login(admin , password){
    return new Promise((resolve , reject)=>{
         setTimeout(()=>{
             if(username == 'admin' && password == 'password'){
                 console.log("Login Successfully");
                 resolve();
             }
             else{
                 console.log("Invalid Credentials   ")
                 reject();
             }
         }, 4000)
    })
}

login('admin' , 'password')
