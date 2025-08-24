const express = require('express')
const app = express()
const PORT = 3000

app.get('/', (req,res)=>{
    setTimeout(()=>{
        res.send('Backend test successful');
    },2000)
})

app.listen(PORT , ()=>{
    console.log(`Server is running on http://localhost:${PORT}`)
})