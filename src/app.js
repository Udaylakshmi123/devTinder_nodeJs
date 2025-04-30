const express = require("express");

const app= express();

const {adminAuth} = require("./middlewares/auth");

app.use("/admin",adminAuth);

app.get("/admin/getAllData",(req,res)=>{
    res.send("Got all data")
})

app.post("/admin/insertData",(req,res)=>{
    res.send("Inserted data")
})

app.get('/a{b}c',(req,res)=>{
    res.send("Optional chaining")
})

app.get("/user/:id/:password",(req,res)=>{
    console.log(req.query,req.params)
    res.send("Fetched data successfully")
})

app.post("/user",(req,res)=>{
    res.send("User Successfully Saved")
})

app.put("/user",(req,res)=>{
    res.send("Updated User Successfully")
})

app.delete("/user",(req,res)=>{
    res.send("Deleted User Successfully")
})

app.patch("/user",(req,res)=>{
    res.send("User Patched Successfully")
})

app.use("/",(err,req,res,next)=>{
    if(err){
        res.status(500).send("Something Went wrong")
    }
})

app.listen(3000, ()=>{
    console.log('server listening in 3000 port')
});