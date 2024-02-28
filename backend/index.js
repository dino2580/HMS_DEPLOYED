const connectToMongo = require('./db');
const express = require('express')
connectToMongo();

const app = express()
const port = 5000

app.get('/',(req,res)=>{
    res.send("---");
})

app.listen(port,()=>{
    console.log(`App listening at htpp://localhost:${port} `)
    
})