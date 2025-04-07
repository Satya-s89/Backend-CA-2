const express = require('express');

const app = express();

app.use(express.json());

const userData = [
    {userName: "satya","age": 18, email:"Satya123@gmail.com"},
    {userName: "akhil","age": 17, email:"akhil45@gmail.com"},
    {userName: "mourya","age": 19, email:"mourya789@gmail.com"},
    {userName: "madhu","age": 20, email:"madhu7890@gmail.com"}
];

app.get("/user",(req,res) => {
    const user = req.params;
    if(!user){
        return res.status(404).send({msg:"User parameter cannot be empty"});
    }

    if(user){
        return res.status(200).send({msg:"User found" , user:{userData}});
    }
    return res.status(500).send({msg:"User not found"});
})


app.listen(8080,() => {
    console.log("Server connected sucessfully");
})