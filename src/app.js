const express = require("express");

const app= express();

app.get("/user",(req,res)=>{
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

app.listen(3000, ()=>{
    console.log('server listening in 3000 port')
});