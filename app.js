const express=require('express');
const app=express();
const path=require('path');

let puerto=3030;

//let publicPath=path.resolve(__dirname,'./public');
//app.use(express.static(publicPath));

app.use('/static',express.static(__dirname + '/public'));
app.listen(puerto,()=>
console.log('Servidor corriendo en el puerto: '+ puerto));

app.get('/',(req,res)=>{
    res.sendFile(path.resolve(__dirname,'./views/home.html'));
});

app.get('/register',(req,res)=>{
    res.sendFile(path.resolve(__dirname,'./views/register.html'));
});

app.get('/login',(req,res)=>{
    res.sendFile(path.resolve(__dirname,'./views/login.html'));
});


/*

app.get('/babbage',(req,res)=>{
    res.sendFile(path.resolve(__dirname,'./view/babbage.html'));
});

app.get('/berners-lee',(req,res)=>{
    res.sendFile(path.resolve(__dirname,'./view/berners-lee.html'));
});

app.get('/clarke',(req,res)=>{
    res.sendFile(path.resolve(__dirname,'./view/clarke.html'));
});

app.get('/hamilton',(req,res)=>{
    res.sendFile(path.resolve(__dirname,'./view/hamilton.html'));
});

app.get('/hopper',(req,res)=>{
    res.sendFile(path.resolve(__dirname,'./view/hopper.html'));
});

app.get('/lovelace',(req,res)=>{
    res.sendFile(path.resolve(__dirname,'./view/lovelace.html'));
});

app.get('/turing',(req,res)=>{
    res.sendFile(path.resolve(__dirname,'./view/turing.html'));
});
*/
app.get('/*',(req,res)=>{
    res.send("404");
});