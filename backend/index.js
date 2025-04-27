const express = require('express');
const app = express();
require('dotenv').config();

const PORT = process.env.PORT || 4040;

app.get('/mani',  (req,res)=> {
    res.send('hi');
})

app.listen(PORT,()=>{
    console.log(`server is running on ${PORT}`)
})