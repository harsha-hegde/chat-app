const path=require('path');
const public_path=path.join(__dirname,'../public')
const express=require('express');
const app=express();

app.use(express.static(public_path));

app.listen(3000,()=>{
    console.log('started in 3000');
})