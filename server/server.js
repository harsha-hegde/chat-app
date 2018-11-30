const path=require('path');
const public_path=path.join(__dirname,'../public')
const express=require('express');
const app=express();
var port=process.env.PORT||3000;
app.use(express.static(public_path));

app.listen(port,()=>{
    console.log(`started server in ${port}`);
})