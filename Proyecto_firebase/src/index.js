const express=require('express');
const app = express();
const cors= require('cors');
const ofirebase = require("../firebase/setData");
//const { initializeApp, admin } = require('firebase-admin/app');
/*
const firebase = require('firebase');
const firestore = firebase.firestore();
*/
app.use(express.urlencoded({extended:true}));
app.use(express.json());

app.use(cors({
    origin: '*'
}));
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});

app.get('/',(req,res)=>{
    res.send("Hola mundo")
});

app.post('/guardar',(req,res)=>{
    ofirebase.saveData(req.body,(err,data)=>{
        res.send(data);
    })
});
app.post('/Joel',(req,res, next)=>{
    try{
    ofirebase.getData(req.body,(err,data)=>{
        res.send(data);
    })
}  catch (err) {
    next(err);
  }
});
app.post('/Miguel',(req,res, next)=>{
    try{
    ofirebase.getData(req.body,(err,data)=>{
        res.send(data);
    })
}  catch (err) {
    next(err);
  }
});
app.post('/David',(req,res, next)=>{
    try{
    ofirebase.getData(req.body,(err,data)=>{
        res.send(data);
    })
}  catch (err) {
    next(err);
  }
});
app.post('/Dayan',(req,res, next)=>{
    try{
    ofirebase.getData(req.body,(err,data)=>{
        res.send(data);
    })
}  catch (err) {
    next(err);
  }
});

app.listen(3000,()=>{
    console.log("servidor corriendo");
});
