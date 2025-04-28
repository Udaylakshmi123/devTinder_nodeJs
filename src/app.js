const express = require("express");

const app= express();

app.use("/test",(req,res)=>{
    res.send("Hello from the server")
})
// app.use("/",(req,res)=>{
//     res.send('Welcome to Dashboard')
// })
app.use("/home",(req,res)=>{
    res.send("Welcome to Home")
})

app.listen(3000, ()=>{
    console.log('server listening in 3000 port')
});